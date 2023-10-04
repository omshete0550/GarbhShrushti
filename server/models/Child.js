import mongoose from "mongoose";

const childSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    month: {
        type: Number,
        required: true,
    },
    birthDate: {
        type: Date,
    }
});

export default mongoose.model("Childs", childSchema);