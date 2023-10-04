import express from "express";
import { doctorLogin, doctorRegister, patientLogin, patientRegister } from "../controllers/auth.js";

const router = express.Router()

router.post("/patientRegister", patientRegister)
router.post("/patientLogin", patientLogin)
router.post("/doctorRegister", doctorRegister)
router.post("/doctorLogin", doctorLogin)

export default router