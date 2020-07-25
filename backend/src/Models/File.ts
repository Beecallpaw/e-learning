import { Schema, model } from "mongoose"

let FileSchema = new Schema({
    filename: {
        type: String,
        required: true
    },
    course_id: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: new Date()
    }
});

export let File = model("File", FileSchema)