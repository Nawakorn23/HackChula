const mongoose = require("mongoose");

const ReservationSchema = new mongoose.Schema({
  apptDate: {
    type: Date,
    required: true,
  },
  room: {
    type: mongoose.Schema.ObjectId,
    ref: "Room",
    required: true,
  },
  studentId1: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
    unique: true,
    trim: true,
    maxlength: [10, "ID can be equal to 10 characters"],
    minlength: [10, "ID can be equal to 10 characters"],
  },
  studentId2: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    maxlength: [10, "ID can be equal to 10 characters"],
    minlength: [10, "ID can be equal to 10 characters"],
  },
  studentId3: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    maxlength: [10, "ID can be equal to 10 characters"],
    minlength: [10, "ID can be equal to 10 characters"],
  },
  studentId4: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    maxlength: [10, "ID can be equal to 10 characters"],
    minlength: [10, "ID can be equal to 10 characters"],
  },
  start: {
    type: Date,
    required: true,
    default: Date.now,
  },
  end: {
    type: Date,
    required: true,
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
  HTML: {
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

module.exports = mongoose.model("Reservation", ReservationSchema);
