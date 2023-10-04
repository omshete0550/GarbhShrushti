const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
    doctorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Doctor',
        required: true,
    },
    patientId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Patient',
        required: true,
    },
    appointmentDate: {
        type: Date,
    },
    appointmentTime: {
        type: String,
    },
    description: {
        type: String,
    },
    status: {
        type: String,
        enum: ['Requested', 'Scheduled', 'Completed', 'Cancelled'],
        default: 'Requested',
    },
});

export default mongoose.model("Appointments", appointmentSchema);