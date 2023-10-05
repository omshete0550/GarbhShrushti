import express from "express";
import { deleteTask, getTask, getTasks, updateTask } from "../controllers/task.js";
const router = express.Router()

//update
router.put("/:id", updateTask)
//delete
router.delete("/:id", deleteTask)
//get
router.get("/:id", getTask)
//get all
router.get("/", getTasks)

export default router