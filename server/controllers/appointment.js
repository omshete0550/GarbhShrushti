import Appointment from "../models/Appointment.js";

export const createAppointment = async (req, res, next) => {
    const newAppointment = new Appointment(req.body)
    try {
        const savedAppointment = await newAppointment.save()
        res.status(201).json(savedAppointment)
    } catch (error) {
        next(error)
    }
}

export const updateAppointment = async (req, res, next) => {
    try {
        const updatedAppointment = await Appointment.findByIdAndUpdate(
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
        await Appointment.findByIdAndDelete(AppointmentId);
        res.status(200).json("Appointment has been deleted.");
    } catch (err) {
        next(err);
    }
};

export const getAppointment = async (req, res, next) => {
    try {
        const doctor = await Appointment.findById(req.params.id);
        res.status(200).json(doctor);
    } catch (err) {
        next(err);
    }
};

export const getAppointments = async (req, res, next) => {
    try {
        const allAppointments = await Appointment.find()
        res.status(200).json(allAppointments)
    } catch (err) {
        next(err);
    }
};

export const getAppointmentsbyUser = async (req, res, next) => {
    const {patientId,doctorId,side} = req.body;
    try {
        if(side === "patient"){
            const allAppointments = await Appointment.find({
                patientId: patientId
              });
        }
        else{
            const allAppointments = await Appointment.find({
                patientId: doctorId
              });
        }
        res.status(200).json(allAppointments)
    } catch (err) {
        next(err);
    }
};

export const manageAppointments = async (req, res, next) => {
    const {_id,action} = req.body;
    console.log(_id);
    try{
        if(action === 'accept'){
            const UpdatedAppointment = await Appointment.findByIdAndUpdate(
                _id,
                { status: 'accepted' }, // Update the status to 'accepted'
                { new: true }
            );
        }
        else{
            const UpdatedAppointment = await Appointment.findByIdAndUpdate(
                _id,
                { status: 'rejected' }, // Update the status to 'accepted'
                { new: true }
            );
        }
       
        if (!UpdatedAppointment) {
            return res.status(404).json({ message: 'Appointment not found' });
        }
        res.status(200).json(UpdatedAppointment);

    }
    catch(err){
        next(err);
    }
}