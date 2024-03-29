import express from "express";
import { deleteDoctor, getDoctor, getDoctorPrevAppointments, getDoctors, updateDoctor } from "../controllers/Doctor.js";
const router = express.Router()

//update
router.put("/:id", updateDoctor)
//delete
router.delete("/:id", deleteDoctor)
//get
router.get("/:id", getDoctor)
//get all
router.get("/", getDoctors)
router.post("/applied",getDoctorPrevAppointments);

export default router