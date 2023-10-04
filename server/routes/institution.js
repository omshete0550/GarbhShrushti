import express from "express";
import { createInstitution, deleteInstitution, getInstitution, getInstitutions, updateInstitution } from "../controllers/Institution.js";
const router = express.Router()

//create
router.post("/", createInstitution)
//update
router.put("/:id", updateInstitution)
//delete
router.delete("/:id", deleteInstitution)
//get
router.get("/:id", getInstitution)
//get all
router.get("/", getInstitutions)

export default router