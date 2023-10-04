import mongoose from "mongoose";

const patientSchema = new mongoose.Schema({
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
    monthOfPregnancy: {
        type: Number,
        required: true,
    },
    deliveryDone: {
        type: Boolean,
        default: false,
    },
});

export default mongoose.model("Patients", patientSchema);