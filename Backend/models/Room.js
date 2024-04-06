const mongoose = require("mongoose");

const RoomSchema = new mongoose.Schema(
    {
        id:{
            type: String,
            require: [true, "Please add a id"],
            unique: true,
            trim: true
        },
        name: {
            type: String,
            required: [true, "Please add a name"],
            unique: true,
            trim: true,
            maxlength: [50, "Name can not be more than 50 charaters"],
        },
        type:{
            type: String,
            require: [true, "Please add type of room"]
        },
        status: {
            type: String,
            enum: ["open", "close"],
            default: "open"
        },
        note: {
            type: String
        }
    },
    {
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
    }
);

RoomSchema.pre(
    "deleteOne",
    { document: true, query: false },
    async function(next){
        console.log(`Reservations begin removed from room ${this._id}`);
        await this.model("Reservation").deleteMany({ room: this._id });
        next();
    }
);

RoomSchema.virtual("reservations", {
    ref: "Reservation",
    localField: "_id",
    foreignField: "room",
    justOne: false,
})

module.exports = mongoose.model("Room", RoomSchema);