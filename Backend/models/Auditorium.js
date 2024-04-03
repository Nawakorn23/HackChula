const { Int32 } = require("bson");
const mongoose = require("mongoose");

const AuditoriumSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a name"],
      unique: true,
      trim: true,
      maxlength: [50, "Name can not be more than 50 charaters"],
    },
    telephone: {
      type: String,
    },
    opentime: {
      type: String,
      required: true,
    },
    closetime: {
      type: String,
      required: true,
    },
    // picture: {
    //   type: String,
    //   required: false,
    // },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// Cascade delete appointments when a auditorium is deleted
AuditoriumSchema.pre(
  "deleteOne",
  { document: true, query: false },
  async function (next) {
    console.log(`Reservations begin removed from auditorium ${this._id}`);
    await this.model("Reservation").deleteMany({ auditorium: this._id });
    next();
  }
);

// Reverse populate with virtuals
AuditoriumSchema.virtual("reservations", {
  ref: "Reservation",
  localField: "_id",
  foreignField: "auditorium",
  justOne: false,
});

module.exports = mongoose.model("Auditorium", AuditoriumSchema);
