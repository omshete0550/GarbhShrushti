import mongoose from "mongoose";

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
    childId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Child',
    },
    appointmentDate: {
        type: Date,
        // required:true
    },
    time: {
        type: String,
    },
    description: {
        type: String,
    },
    amount: {
        type: Number,
    },
    status: {
        type: String,
        enum: ['Requested', 'Scheduled', 'Completed', 'Cancelled'],
        default: 'Requested',
    },
    tasks: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Task',
        }
    ],
    patientNumber:{
        type:String
    }
});

export default mongoose.model("Appointments", appointmentSchema);