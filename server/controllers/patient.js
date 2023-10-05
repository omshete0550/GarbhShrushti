import Patient from "../models/Patient.js";
import Appointments from "../models/Appointment.js";
import Doctors from "../models/Doctor.js"
import Doctor from "../models/Doctor.js";

export const updatePatient = async (req, res, next) => {
    try {
        const updatedPatient = await Patient.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );
        res.status(200).json(updatedPatient);
    } catch (err) {
        next(err);
    }
}
export const deletePatient = async (req, res, next) => {
    try {
        await Patient.findByIdAndDelete(req.params.id);
        res.status(200).json("Patient has been deleted.");
    } catch (err) {
        next(err);
    }
}
export const getPatient = async (req, res, next) => {
    try {
        const patient = await Patient.findById(req.params.id);
        res.status(200).json(patient);
    } catch (err) {
        next(err);
    }
}
export const getPatients = async (req, res, next) => {
    try {
        const patients = await Patient.find();
        res.status(200).json(patients);
    } catch (err) {
        next(err);
    }
}
export const getPatientPrevAppointments = async (req, res) => {
    try {
      const patient = await Patient.findOne({ username: req.body.username });
      const appointments = await Appointments.find({ patientId: patient._id });
  
      const doctors = [];
  
      for (const appointment of appointments) {
        const doctor = await Doctor.findById(appointment.doctorId);
        doctors.push(doctor);
      }
  
      res.status(200).json({doctors,appointments});
    } catch (err) {
      res.status(500).json(err);
    }
  };
  
  
export const getPatientReqAppointments = async (req, res) => {
    try {
        const patient = await Patient.findOne({ _id: req.body.patientId });

        if (!patient) {
            return res.status(404).json({ message: 'Patient not found' });
        }
        const appointments = (await Appointments.find({ patientId: patient._id, status: 'Requested' }));
        res.status(200).json(appointments);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
};