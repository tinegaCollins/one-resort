import Hotel from "../models/hotel";
import { Request, Response } from "express";

export const createHotel = async (req: Request, res: Response) => {
  let { name, address, city, contactPerson, phone, email, googleMapLink } =
    req.body;

  try {
    const hotel = new Hotel({
      name,
      address,
      city,
      contactPerson,
      phone,
      email,
      googleMapLink,
    });

    await hotel.save();

    return res.status(201).json(hotel);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error });
  }
};

export const getHotels = async (req: Request, res: Response) => {
  try {
    const hotels = await Hotel.find();
    return res.status(200).json(hotels);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error });
  }
};

export const getHotel = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const hotel = await Hotel.findById(id);
    return res.status(200).json(hotel);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error });
  }
};

