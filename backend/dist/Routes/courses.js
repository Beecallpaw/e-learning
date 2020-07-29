"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var Course_1 = require("../Models/Course");
var middleware_1 = require("../Service/middleware");
var File_1 = require("../Models/File");
var path_1 = __importDefault(require("path"));
var router = express_1.Router();
router.get("/", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var courses, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, Course_1.Course.find()];
            case 1:
                courses = _a.sent();
                if (!courses) {
                    return [2 /*return*/, res.status(404).json({ message: "Sorry there are no courses available." })];
                }
                res.json(courses);
                return [3 /*break*/, 3];
            case 2:
                err_1 = _a.sent();
                res.send("Error");
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
router.post("/", middleware_1.validate, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var err_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, Course_1.Course.create(req.body)];
            case 1:
                _a.sent();
                res.json({ message: "Course successfully created." });
                return [3 /*break*/, 3];
            case 2:
                err_2 = _a.sent();
                return [2 /*return*/, res.status(500).json({ message: err_2.message })];
            case 3: return [2 /*return*/];
        }
    });
}); });
router.get("/:id", middleware_1.getCourse, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        res.json(res.course);
        return [2 /*return*/];
    });
}); });
router.put("/:id", middleware_1.getCourse, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var err_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, Course_1.Course.update(res.course, req.body)];
            case 1:
                _a.sent();
                res.json({ message: "Course successfully updated." });
                return [3 /*break*/, 3];
            case 2:
                err_3 = _a.sent();
                res.status(400).json({ message: err_3.message });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
router.delete('/:id', middleware_1.getCourse, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var err_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, res.course.deleteOne()];
            case 1:
                _a.sent();
                res.json({ message: "Course successfully deleted." });
                return [3 /*break*/, 3];
            case 2:
                err_4 = _a.sent();
                return [2 /*return*/, res.status(500).json({ message: err_4.message })];
            case 3: return [2 /*return*/];
        }
    });
}); });
router.get("/:id/files", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var files, err_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, File_1.File.find({ course_id: req.params.id })];
            case 1:
                files = _a.sent();
                if (!files) {
                    return [2 /*return*/, res.status(404).json({ message: "Sorry there are no files available." })];
                }
                res.json(files);
                return [3 /*break*/, 3];
            case 2:
                err_5 = _a.sent();
                res.send("Error");
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
router.post("/:id", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var files, uploadPath_1, course_id, _i, files_1, file, err_6;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 8, , 9]);
                files = req.files.file;
                uploadPath_1 = path_1.default.resolve(__dirname, '../..');
                course_id = req.params.id;
                if (!Array.isArray(files)) return [3 /*break*/, 5];
                _i = 0, files_1 = files;
                _a.label = 1;
            case 1:
                if (!(_i < files_1.length)) return [3 /*break*/, 4];
                file = files_1[_i];
                return [4 /*yield*/, File_1.File.create({
                        course_id: course_id,
                        filename: file.name,
                        size: file.size
                    })];
            case 2:
                _a.sent();
                _a.label = 3;
            case 3:
                _i++;
                return [3 /*break*/, 1];
            case 4:
                files.forEach(function (file) {
                    file.mv(uploadPath_1 + "/uploads/" + file.name, function (err) {
                        console.log(err);
                    });
                });
                return [3 /*break*/, 7];
            case 5: return [4 /*yield*/, File_1.File.create({
                    course_id: course_id,
                    filename: files.name,
                    size: files.size
                })];
            case 6:
                _a.sent();
                files.mv(uploadPath_1 + "/uploads/" + files.name, function (err) {
                    console.log(err);
                });
                _a.label = 7;
            case 7:
                res.json("successful");
                return [3 /*break*/, 9];
            case 8:
                err_6 = _a.sent();
                return [2 /*return*/, res.status(500).json({ message: err_6.message })];
            case 9: return [2 /*return*/];
        }
    });
}); });
module.exports = router;
