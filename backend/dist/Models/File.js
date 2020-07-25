"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.File = void 0;
var mongoose_1 = require("mongoose");
var FileSchema = new mongoose_1.Schema({
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
exports.File = mongoose_1.model("File", FileSchema);
