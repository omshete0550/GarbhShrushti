import Doctor from "../models/Doctor.js"

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
