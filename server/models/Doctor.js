import mongoose from "mongoose";
const doctorSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    name: {
        type: String,
    },
    location: {
        type: String,
    },
    hospital: {
        type: String,
    },
    totalEarning: {
        type: Number,
        default: 0,
    },
    totalExpense: {
        type: Number,
        default: 0,
    },
    slots: [
        {
            appointmentId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Appointment',
            },
        },
    ],
    specialist: {
        type: String,
        enum: ['General', 'Dental', 'Neurology', 'Cardiology', 'Orthopedic', 'Pediatric', 'Oncology'],
    },
});

export default mongoose.model("Doctors", doctorSchema);