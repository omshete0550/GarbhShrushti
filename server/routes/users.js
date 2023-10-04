import express from "express";
import {
    deleteUser,
    getUser,
    getUserInterestedScholarship,
    getUserPrevScholarships,
    getUserReqScholarships,
    getUsers,
    updateUser,
    watchLaterScholarship,
} from "../controllers/user.js";

const router = express.Router();

//UPDATE
router.put("/:id", updateUser);

//DELETE
router.delete("/:id", deleteUser);

//GET
router.get("/:id", getUser);

//GET ALL
router.get("/", getUsers);

//GET INTERESTED SCHOLARSHIP OF A USER
router.get("/:userId/interested", getUserInterestedScholarship);

//GET ALL PREV SCHOLARSHIP OF A USER
router.get("/applied/:username", getUserPrevScholarships);

//GET ALL REQ SCHOLARSHIP OF A USER
router.post("/requested", getUserReqScholarships);

router.put("/watchLaterScholarship", watchLaterScholarship)

export default router;