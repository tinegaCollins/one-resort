import express from "express";
import { Request, Response, } from "express";
import * as hotelController from "../controllers/hotel";

const router = express.Router();

router.post("/create", hotelController.createHotel);
router.get("/", hotelController.getHotels);
router.get("/:id", hotelController.getHotel);
