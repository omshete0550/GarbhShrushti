import Doctor from "../models/Doctor.js"
import Appointments from "../models/Appointment.js";
import Patient from '../models/Patient.js'
export const updateDoctor = async (req, res, next) => {
    try {
        const updatedDoctor = await Doctor.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );
        res.status(200).json(updatedDoctor);
    } catch (err) {
        next(err);
    }
}

export const deleteDoctor = async (req, res, next) => {
    const DoctorId = req.params.id
    try {
        await Doctor.findByIdAndDelete(DoctorId);
        res.status(200).json("Doctor has been deleted.");
    } catch (err) {
        next(err);
    }
};

export const getDoctor = async (req, res, next) => {
    try {
        const doctor = await Doctor.findById(req.params.id);
        res.status(200).json(doctor);
    } catch (err) {
        next(err);
    }
};

export const getDoctors = async (req, res, next) => {
    try {
        const allDoctors = await Doctor.find()
        res.status(200).json(allDoctors)
    } catch (err) {
        next(err);
    }
};

export const getDoctorPrevAppointments = async (req, res) => {
    try {
      const doctor = await Doctor.findOne({ username: req.body.username });
      const appointments = await Appointments.find({ doctorId: doctor._id });
  
      const patients = [];
  
      for (const appointment of appointments) {
        const patient = await Patient.findById(appointment.patientId);
        patients.push(patient);
      }
  
      res.status(200).json({patients,appointments});
    } catch (err) {
      res.status(500).json(err);
    }
  };
  
