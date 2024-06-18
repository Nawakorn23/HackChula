const mongoose = require("mongoose");

const ReservationSchema = new mongoose.Schema({
  apptDate: {
    type: Date,
    required: true,
  },
  room: {
    type: String,
    ref: "Room",
    required: true,
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'user',
    required: true,
  },
  studentId1: {
    type: String,
    ref: "User",
    required: true,
    // unique: true,
    trim: true,
    maxlength: [10, "ID can be equal to 10 characters"],
    minlength: [10, "ID can be equal to 10 characters"],
  },
  studentId2: {
    type: String,
    required: true,
    // unique: true,
    trim: true,
    maxlength: [10, "ID can be equal to 10 characters"],
    minlength: [10, "ID can be equal to 10 characters"],
  },
  studentId3: {
    type: String,
    required: true,
    // unique: true,
    trim: true,
    maxlength: [10, "ID can be equal to 10 characters"],
    minlength: [10, "ID can be equal to 10 characters"],
  },
  studentId4: {
    type: String,
    required: true,
    // unique: true,
    trim: true,
    maxlength: [10, "ID can be equal to 10 characters"],
    minlength: [10, "ID can be equal to 10 characters"],
  },
  start: {
    type: Date,
    // required: true,
    // default: Date.now,
    // type: String,
    required: true,
    default: "08:00:00",

  },
  end: {
    type: Date,
    // required: true,
    // type: String,
    required: true,
    default: "10:00:00",
  },
  Plug: {
    type: Boolean,
    required: true,
    default: false,
  },
  USB: {
    type: Boolean,
    required: true,
    default: false,
  },
  HDMI: {
    type: Boolean,
    required: true,
    default: false,
  },
  Pen: {
    type: Boolean,
    required: true,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// ReservationSchema.index({ apptDate: 1, room: 1 }, { unique: true }); 

// ตรวจสอบว่ารหัสนักเรียนไม่ซ้ำกันในแต่ละการจอง
// ReservationSchema.pre('save', function(next) {
//   const studentIds = this.students;
//   const uniqueIds = [...new Set(studentIds)];
//   if (uniqueIds.length !== studentIds.length) {
//     return next(new Error("Student IDs must be unique within a reservation"));
//   }
//   next();
// })

module.exports = mongoose.model("Reservation", ReservationSchema);
