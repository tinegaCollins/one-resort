import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  roomId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Room",
    required: true,
  },
  hotelId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Hotel",
    required: true,
  },
  customerDetails: {
    type: Object,
    required: true,
  },
  check_in: {
    type: Date,
    required: true,
  },
  check_out: {
    type: Date,
    required: true,
  },
  total_price: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    required: true,
    default: "pending",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});
