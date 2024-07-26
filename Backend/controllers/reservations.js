const Room = require("../models/Room");
const Reservation = require("../models/Reservation");
const Library = require("../models/Library");
const mongoose = require('mongoose');
const { stack } = require("../routes/reservations");
const User = require("../models/User");
const History = require('../models/History')

//desc    Get All reservations
//route   Get /api/reservations
//access  Public
exports.getReservations = async (req, res, next) => {
  let query;
  // General users can see only their appointment
  if (req.user.role !== "admin") {
    query = Reservation.find({ user: req.user.id }).populate({
      path: "room",
      select: "id name",
    });
  } else {
    // If you are an admin, you can see all
    console.log(req.params.roomId);
    if (req.params.roomId) {
      query = Reservation.find({
        room: req.params.roomId,
      }).populate({
        path: "room",
        select: "id name",
      });
    } else {
      query = Reservation.find().populate({
        path: "room",
        select: "id name",
      });
    }
  }
  try {
    const reservations = await query;
    res.status(200).json({
      success: true,
      count: reservations.length,
      data: reservations,
    });
  } catch (err) {
    console.log(err.stack);
    return res.status(500).json({
      success: false,
      message: "Cannot find Appointment",
    });
  }
};

//desc    Get single reservation
//route   Get /api/reservations/:id
//access  Public
exports.getReservation = async (req, res, next) => {
  try {
    const reservation = await Reservation.findById(req.params.id).populate({
      path: "room",
      select: "id name",
    });
    if (!reservation) {
      return res.status(404).json({
        success: false,
        message: `No reservation with the id of ${req.params.id}`,
      });
    }

    res.status(200).json({
      success: true,
      data: reservation,
    });
  } catch (err) {
    console.log(err.stack);
    return res.status(500).json({
      success: false,
      message: "Cannot riri find Reservation",
    });
  }
};


//desc    Add reservation/
//route   POST /api/rooms/:roomId/reservations  (roomId=id ไม่ใช่ _id)
//access  Private
//desc    Add reservation/
//route   POST /api/rooms/:roomId/reservations  (roomId=id ไม่ใช่ _id)
//access  Private
exports.addReservation = async (req, res, next) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    req.body.user = req.user.id;

    const room = await Room.findById(req.params.roomId);
    if (!room) {
      return res.status(404).json({
        success: false,
        message: `No room with the id of ${req.params.roomId}`,
      });
    }

    // Check time format and conversion
    const start = new Date(req.body.start);
    const end = new Date(req.body.end);

    if (isNaN(start.getTime()) || isNaN(end.getTime())) {
      return res.status(400).json({
        error: 'Invalid date format for start or end time'
      });
    }

    if (start.getTime() >= end.getTime()) {
      return res.status(400).json({ 
        error: 'End date must be after start date' 
      });
    }

    const library = await Library.findById('6613a791af2d442911f0be7c');
    const OpenTimeLibrary = new Date(`${start.toISOString().slice(0, 10)}T${library.opentime}.000Z`);
    const CloseTimeLibrary = new Date(`${end.toISOString().slice(0, 10)}T${library.closetime}.000Z`);

    if (start.toISOString().slice(0, 10) !== end.toISOString().slice(0, 10)) {
      return res.status(405).json({
        success: false, 
        message: 'The reservation start time and end time must be on the same date.'
      });
    }

    if (start < OpenTimeLibrary || end > CloseTimeLibrary) {
      return res.status(400).json({ 
        error: 'Not during library hours' 
      });
    }

    // Validate and find students
    const studentIds = [req.body.studentId1, req.body.studentId2, req.body.studentId3, req.body.studentId4];
    const studentObjects = await Promise.all(studentIds.map(async (studentId) => {
      if (!studentId) {
        throw new Error('Missing studentId');
      }
      const student = await User.findOne({ ID: studentId.trim() }).exec();
      if (!student) {
        throw new Error(`ไม่พบข้อมูลนักเรียน: ${studentId}`);
      }
      return student._id;
    }));


    // Check for overlapping reservations
    const existingRoomReservations = await Reservation.find({ room: room._id }).sort({ start: 1 });

    let isOverlap = false;
    for (let i = 0; i < existingRoomReservations.length; i++) {
      const rs = existingRoomReservations[i];

      if (start < rs.end && end > rs.start) {
        isOverlap = true;
        break;
      }
    }

    if (isOverlap) {
      return res.status(500).json({
        success: false,
        message: "Time slot overlaps with an existing reservation.",
      });
    }


    // Create new reservation
    const NewReservation = await Reservation.create([req.body], { session });

    const histories = studentObjects.map((studentId, index) => ({
      idReservation: NewReservation[0]._id,
      apptDate: NewReservation[0].apptDate,
      room: NewReservation[0].room,
      user: studentId,
      status: NewReservation[0].status,
      studentId1: studentIds[index],
      start: NewReservation[0].start,
      end: NewReservation[0].end,
      Plug: NewReservation[0].Plug,
      USB: NewReservation[0].USB,
      HDMI: NewReservation[0].HDMI,
      Pen: NewReservation[0].Pen,
      createdAt: NewReservation[0].createdAt,
    }));

    // Create histories
    await History.insertMany(histories, { session });

    await session.commitTransaction();
    session.endSession();

    return res.status(200).json({
      message: 'Reservation created successfully',
      data: histories,
    });

  } catch (err) {
    await session.abortTransaction();
    session.endSession();

    if (err.code === 11000) { // Handle duplicate key error
      return res.status(400).json({
        success: false,
        message: 'Duplicate reservation detected.'
      });
    }

    console.log(err.stack);
    return res.status(500).json({
      success: false,
      message: "Cannot create Reservation",
    });
  }
};



//desc    Update reservation
//route   PUT /api/reservations/:Id
//access  Private
exports.updateReservation = async (req, res, next) => {
  try {
    // Validate if the ID is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({
        success: false,
        message: `Invalid reservation ID: ${req.params.id}`,
      });
    }

    let reservation = await Reservation.findById(req.params.id);

    if (!reservation) {
      return res.status(404).json({
        success: false,
        message: `No reservation with the id of ${req.params.id}`,
      });
    }

    // Make sure user is the reservation owner
    if (
      reservation.user.toString() !== req.user.id &&
      req.user.role !== "admin"
    ) {
      return res.status(401).json({
        success: false,
        message: `User ${req.user.id} is not authorized to update this reservation`,
      });
    }

    // Handle reservation status updates
    if (req.body.status === 'success') {
      reservation = await Reservation.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
      });

      await History.updateMany({ idReservation: req.params.id }, { status: 'success' });
    } else if (req.body.status === 'cancel') {
      reservation = await Reservation.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
      });

      await History.updateMany({ idReservation: req.params.id }, { status: 'cancel' });
    } else {
      reservation = await Reservation.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
      });
    }

    res.status(200).json({
      success: true,
      data: reservation
    });
  } catch (err) {
    console.log(err.stack);
    return res.status(500).json({
      success: false,
      message: "Cannot update Reservation",
    });
  }
};

//desc    Delete reservation
//route   DELETE /api/reservations/:Id
//access  Private
exports.deleteReservation = async (req, res, next) => {
  try {
    const reservation = await Reservation.findById(req.params.id);

    if (!reservation) {
      return res.status(404).json({
        success: false,
        message: `No reservation with the id of ${req.params.id}`,
      });
    }

    // Make sure user is the reservation owner
    if (
      reservation.user.toString() !== req.user.id &&
      req.user.role !== "admin"
    ) {
      return res.status(401).json({
        success: false,
        message: `User ${req.user.id} is not authorized to delete this reservation`,
      });
    }

    await reservation.deleteOne();

    res.status(200).json({
      success: true,
      data: {},
    });
  } catch (err) {
    console.log(err.stack);
    return res.status(500).json({
      success: false,
      message: "Cannot delete Reservation",
    });
  }
};
