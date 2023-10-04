import express from "express";
import {
    deletePatient,
    getPatient,
    getPatientPrevAppointments,
    getPatientReqAppointments,
    getPatients,
    updatePatient,
} from "../controllers/patient.js";

const router = express.Router();

//UPDATE
router.put("/:id", updatePatient);

//DELETE
router.delete("/:id", deletePatient);

//GET ALL PREV APPOINTMENT OF A USER
router.post("/applied", getPatientPrevAppointments);

//GET
router.get("/:id", getPatient);

//GET ALL
router.get("/", getPatients);

//GET ALL REQ APPOINTMENT OF A USER
router.post("/requested", getPatientReqAppointments);

export default router;