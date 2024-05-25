import { Room } from "../models/room";
import { Request, Response } from "express";

export const addRoom = async (req: Request, res: Response) => {
  let { name, description, price, hotelId, allRooms } = req.body;

  try {
    const room = new Room({
      name,
      price,
      hotelId,
      description,
      allRooms,
    });

    await room.save();

    return res.status(201).json(room);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error });
  }
};

export const addHotelImages = async (req: Request, res: Response) => {
  const { roomId } = req.params;
  const { images } = req.body;

  try {
    const room = await Room.findById(roomId);
    if (!room) {
      return res.status(404).json({ message: "Room not found" });
    }
    room.images = images;
    await room.save();
    return res.status(200).json(room);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error });
  }
};

export const getHotelRooms = async (req: Request, res: Response) => {
  const { hotelId } = req.params;
  try {
    const rooms = await Room.find({ hotelId });
    return res.status(200).json(rooms);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error });
  }
};

export const getRoom = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const room = await Room.findById(id);
    return res.status(200).json(room);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error });
  }
};

export const updateRoom = async (req: Request, res: Response) => {
  const { name, description, price, allRooms, id } = req.body;

  try {
    const room = await Room.findById(id);
    if (!room) {
      return res.status(404).json({ message: "Room not found" });
    }
    room.name = name;
    room.description = description;
    room.price = price;
    room.allRooms = allRooms;
    await room.save();
    return res.status(200).json(room);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error });
  }
};


export const deleteRoom = async (req: Request, res: Response) => {
    const { id } = req.body;
    
    try {
        const room = await Room.findById(id);
        if (!room) {
            return res.status(404).json({ message: "Room not found" });
        }
        await Room.deleteOne({ _id: id });

        return res.status(200).json({ message: "Room deleted" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: error });
    }
}