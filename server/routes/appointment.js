import express from "express";
import { createAppointment, deleteAppointment, getAppointment, getAppointments, getAppointmentsbyUser, updateAppointment } from "../controllers/appointment.js";
const router = express.Router()

//update
router.put("/:id", updateAppointment)
//delete
router.delete("/:id", deleteAppointment)
//get
router.get("/:id", getAppointment)
//get all
router.get("/", getAppointments)
//create appointment
router.post("/create",createAppointment)
router.post("/getAppointmentsByUser",getAppointmentsbyUser)

export default router