import Appointments from "../models/Appointment";

export const updateAppointment = async (req, res, next) => {
    try {
        const updatedAppointment = await Appointments.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );
        res.status(200).json(updatedAppointment);
    } catch (err) {
        next(err);
    }
}

export const deleteAppointment = async (req, res, next) => {
    const AppointmentId = req.params.id
    try {
        await Appointments.findByIdAndDelete(AppointmentId);
        res.status(200).json("Appointments has been deleted.");
    } catch (err) {
        next(err);
    }
};

export const getAppointment = async (req, res, next) => {
    try {
        const doctor = await Appointments.findById(req.params.id);
        res.status(200).json(doctor);
    } catch (err) {
        next(err);
    }
};

export const getAppointments = async (req, res, next) => {
    try {
        const allAppointments = await Appointments.find()
        res.status(200).json(allAppointments)
    } catch (err) {
        next(err);
    }
};
