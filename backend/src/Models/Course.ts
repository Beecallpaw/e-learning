import { Schema, model } from "mongoose"

let courseSchema = new Schema({
    'name' : {
        type:String,
        requred: true
    },
    'semester' : {
        type: String,
        requred: true
    },
    'start_date' : {
        type: Date,
        requred: true,
        default: new Date()
    },
    'files' : []
})

export let Course = model("Course", courseSchema)
