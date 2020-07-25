"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Course = void 0;
var mongoose_1 = require("mongoose");
var courseSchema = new mongoose_1.Schema({
    'name': {
        type: String,
        requred: true
    },
    'semester': {
        type: String,
        requred: true
    },
    'start_date': {
        type: Date,
        requred: true,
        default: new Date()
    },
    'files': []
});
exports.Course = mongoose_1.model("Course", courseSchema);
