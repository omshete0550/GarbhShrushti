import Child from "../models/Child.js";
import Appointments from "../models/Appointment.js";

export const updateChild = async (req, res, next) => {
    try {
        const updatedChild = await Child.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );
        res.status(200).json(updatedChild);
    } catch (err) {
        next(err);
    }
}
export const deleteChild = async (req, res, next) => {
    try {
        await Child.findByIdAndDelete(req.params.id);
        res.status(200).json("Child has been deleted.");
    } catch (err) {
        next(err);
    }
}
export const getChild = async (req, res, next) => {
    try {
        const child = await Child.findById(req.params.id);
        res.status(200).json(child);
    } catch (err) {
        next(err);
    }
}
export const getChilds = async (req, res, next) => {
    try {
        const childs = await Child.find();
        res.status(200).json(childs);
    } catch (err) {
        next(err);
    }
}
export const getChildPrevAppointments = async (req, res) => {
    try {
        const child = await Child.findOne({ name: req.params.childname });
        let appointments = ""
        appointments = await Appointments.find({ childId: child._id });
        res.status(200).json(appointments);
    } catch (err) {
        res.status(500).json(err);
    }
};
export const getChildReqAppointments = async (req, res) => {
    try {
        const child = await Child.findOne({ _id: req.body.childId });

        if (!child) {
            return res.status(404).json({ message: 'Child not found' });
        }
        const appointments = (await Appointments.find({ childId: child._id, status: 'Requested' }));
        res.status(200).json(appointments);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
};