import express from "express";
import { deleteAppointment, getAppointment, getAppointments, updateAppointment } from "../controllers/appointment.js";
const router = express.Router()

//update
router.put("/:id", updateAppointment)
//delete
router.delete("/:id", deleteAppointment)
//get
router.get("/:id", getAppointment)
//get all
router.get("/", getAppointments)

export default router