import mongoose from "mongoose";

const roomSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  hotelId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Hotel",
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  ammenities: {
    type: Array,
    required: false,
    default: [],
  },
  allRooms: {
    type: Number,
    required: true
  },
  availableRooms: {
    type: Number,
    required: true
  },
  images: {
    type: Array,
    required: false,
    default: [],
  },
});

export const Room = mongoose.model("Room", roomSchema);
