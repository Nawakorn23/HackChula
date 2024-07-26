const mongoose = require("mongoose");

const HistorySchema = new mongoose.Schema({
  idReservation: {
    type: String,
    ref: "reservations",
    required: false,
  },
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
  status: {
    type: String,
    enum: ["reserve", "success", "cancel"], 
    default: "reserve",
  },
  studentId1: {
    type: String,
    ref: "User",
    required: true,
    trim: true,
    maxlength: [10, "ID can be equal to 10 characters"],
    minlength: [10, "ID can be equal to 10 characters"],
  },
  start: {
    type: Date,
    required: true,
    default: "08:00:00",
  },
  end: {
    type: Date,
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

// Remove the unique index on idReservation
HistorySchema.index({ apptDate: 1, room: 1, user: 1 }, { unique: true });

const History = mongoose.model("History", HistorySchema);

module.exports = History;
