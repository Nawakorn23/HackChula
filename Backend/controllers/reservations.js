const Auditorium = require("../models/Auditorium");
const Reservation = require("../models/Reservation");

//desc    Get All reservations
//route   Get /api/reservations
//access  Public
exports.getReservations = async (req, res, next) => {
  let query;
  // General users can see only their appointment
  if (req.user.role !== "admin") {
    query = Reservation.find({ user: req.user.id }).populate({
      path: "auditorium",
      select: "name province tel",
    });
  } else {
    // If you are an admin, you can see all
    if (req.params.auditoriumId) {
      console.log(req.params.auditoriumId);
      query = Reservation.find({
        auditorium: req.params.auditoriumId,
      }).populate({
        path: "auditorium",
        select: "name province tel",
      });
    } else {
      query = Reservation.find().populate({
        path: "auditorium",
        select: "name province tel",
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
      path: "auditorium",
      select: "name description tel",
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
      message: "Cannot find Reservation",
    });
  }
};

//desc    Add reservation/
//route   POST /api/:auditoriumId/reservations
//access  Private
exports.addReservation = async (req, res, next) => {
  try {
    req.body.auditorium = req.params.auditoriumId;

    const auditorium = await auditorium.findById(req.params.auditoriumId);

    if (!auditorium) {
      return res.status(404).json({
        success: false,
        message: `No auditorium with the id of ${req.params.auditoriumId}`,
      });
    }

    // add user Id to req.body
    req.body.user = req.user.id;

    //Check for existed appointment
    const existedReservations = await Reservation.find({ user: req.user.id });

    //If the user is not an admin, they can only create 3 appointment
    if (existedReservations.length >= 3 && req.user.role !== "admin") {
      return res.status(400).json({
        success: false,
        message: `The user with ID ${req.user.id} has already made 3 appointments`,
      });
    }

    //open-close time
    if (
      req.body.start.localeCompare(auditorium.opentime) < 0 ||
      req.body.end.localeCompare(auditorium.closetime) > 0
    ) {
      return res.status(400).json({
        success: false,
        message: `Please make reservation within ${auditorium.opentime} and ${auditorium.closetime}`,
      });
    }

    if (req.body.start.localeCompare(req.body.end) > 0) {
      return res.status(400).json({
        success: false,
        message: `Please make valid reservation`,
      });
    }

    const reservation = await Reservation.create(req.body);
    res.status(201).json({
      success: true,
      data: reservation,
    });
  } catch (err) {
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
    let reservation = await Reservation.findById(req.params.id);

    let auditorium = await Auditorium.findById(reservation.auditorium);

    //const auditorium = await Auditorium.findById(req.params.auditoriumId);
    if (!reservation) {
      return res.status(404).json({
        success: false,
        message: `No reservation with the id of ${req.params.id}`,
      });
    }

    //Make sure user is the reservation owner
    if (
      reservation.user.toString() !== req.user.id &&
      req.user.role !== "admin"
    ) {
      return res.status(401).json({
        success: false,
        message: `User ${req.user.id} is not authorized to update this reservation`,
      });
    }

    if (
      req.body.start.localeCompare(auditorium.opentime) < 0 ||
      req.body.end.localeCompare(auditorium.closetime) > 0
    ) {
      return res.status(400).json({
        success: false,
        message: `Please update reservation within ${auditorium.opentime} and ${auditorium.closetime}`,
      });
    }

    if (req.body.start.localeCompare(req.body.end) > 0) {
      return res.status(400).json({
        success: false,
        message: `Please update valid reservation`,
      });
    }

    reservation = await Reservation.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      success: true,
      data: reservation,
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
