import Doctor from "../models/Doctor.js";
import Patient from "../models/Patient.js"
import { createError } from "../utils/error.js";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken";

export const patientRegister = async (req, res, next) => {
    try {
        console.log("1");
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(req.body.password, salt)
        console.log("2");
        const newPatient = new Patient({
            ...req.body,
            password: hash,
        })
        console.log("3");
        await newPatient.save()
        console.log("4");
        res.status(201).json(newPatient);
    } catch (err) {
        next(err)
    }
}
export const patientLogin = async (req, res, next) => {
    try {
        const patient = await Patient.findOne({ username: req.body.username });
        if (!patient) return next(createError(404, "Patient not found!"));

        const isPasswordCorrect = await bcrypt.compare(
            req.body.password,
            patient.password
        );
        if (!isPasswordCorrect) return next(createError(400, "Wrong password or username!"));

        const token = jwt.sign({ id: patient._id, username: patient.username }, process.env.JWT)
        res.cookie("access_token", token, {
            httpOnly: true
        }).status(200).json(patient)
    } catch (err) {
        next(err)
    }
}

export const doctorRegister = async (req, res, next) => {
    console.log(req.body)
    try {
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(req.body.password, salt)
        console.log("in try block");
        const newDoctor = new Doctor({
            ...req.body,
            password: hash,
        })
        console.log(newDoctor);
        await newDoctor.save()
        res.status(201).json({message:newDoctor});
    } catch (err) {
        next(err)
    }
}
export const doctorLogin = async (req, res, next) => {
    try {
        const doctor = await Doctor.findOne({ username: req.body.username });
        if (!doctor) return next(createError(404, "Patient not found!"));

        const isPasswordCorrect = await bcrypt.compare(
            req.body.password,
            doctor.password
        );
        if (!isPasswordCorrect) return next(createError(400, "Wrong password or username!"));

        const token = jwt.sign({ id: doctor._id, username: doctor.username }, process.env.JWT)

        res.cookie("access_token", token, {
            httpOnly: true
        }).status(200).json(doctor._doc)
    } catch (err) {
        next(err)
    }
}