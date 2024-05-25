import Booking from "../models/booking";
import { Request, Response } from "express";

export const addBooking = async (req: Request, res: Response) => {
  let {
    hotelID,
    rooms,
    check_in,
    check_out,
    total_price,
    user,
    adults,
    children,
    customerDetails,
  } = req.body;

  try {
    const booking = new Booking({
      hotelID,
      rooms,
      check_in,
      check_out,
      total_price,
      user,
      adults,
      children,
      customerDetails,
    });

    await booking.save();

    return res.status(201).json(booking);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error });
  }
};

export const getHotelBookings = async (req: Request, res: Response) => {
  const { hotelID } = req.params;
  try {
    const bookings = await Booking.find({ hotelID });
    return res.status(200).json(bookings);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error });
  }
};

export const unbookRoom = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const booking = await Booking.findById(id);
    if (!booking) {
      return res.status(404).json({ message: "Booking not found" });
    }
    booking.status = "cancelled";
    await booking.save();
    return res.status(200).json(booking);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error });
  }
};

export const getBooking = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const booking = await Booking.findById(id);
    return res.status(200).json(booking);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error });
  }
};
