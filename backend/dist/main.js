"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var mongoose_1 = __importDefault(require("mongoose"));
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var app = express_1.default();
var port = process.env.PORT || 3333;
app.use(express_1.default.json());
mongoose_1.default.connect(process.env.DATABASE_URL || "", { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose_1.default.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("connection successful");
});
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    next();
});
app.get("/", function (req, res) {
    res.end("hello World");
});
var courseRouter = require("./Routes/courses");
app.use("/courses", courseRouter);
app.listen(port, function () {
    console.log("App running on port " + port);
});
