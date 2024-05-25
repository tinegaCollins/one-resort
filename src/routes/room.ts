import express from "express";
import * as roomController from "../controllers/room";

const router = express.Router();

router.post("/create", roomController.addRoom);
router.post("/:roomId/images", roomController.addHotelImages);
router.get("/:hotelId", roomController.getHotelRooms);
router.get("/:id", roomController.getRoom);
router.post("/update", roomController.updateRoom);

export default router;
