import express from "express";
import {
    deleteChild,
    getChild,
    getChildPrevAppointments,
    getChildReqAppointments,
    getChilds,
    updateChild,
} from "../controllers/patient.js";

const router = express.Router();

//UPDATE
router.put("/:id", updateChild);

//DELETE
router.delete("/:id", deleteChild);

//GET
router.get("/:id", getChild);

//GET ALL
router.get("/", getChilds);

//GET ALL PREV APPOINTMENT OF A USER
router.get("/applied/:patientname", getChildPrevAppointments);

//GET ALL REQ APPOINTMENT OF A USER
router.post("/requested", getChildReqAppointments);

export default router;