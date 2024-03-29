import mongoose from "mongoose";

const patientSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    stage: {
        type: Number,
        default: 0,
        max: 3,
    },
    monthOfPregnancy: {
        type: Number,
        required: true,
    },
    email: {
        type: String
    },
    deliveryDone: {
        type: Boolean,
        default: false,
    },
    children: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Child",
    }],
});

export default mongoose.model("Patients", patientSchema);