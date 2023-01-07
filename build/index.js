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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const sendSms_1 = require("./sendSms");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// port 
const PORT = 5000;
app.post('/text', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, phone, message } = req.body;
    const newMessage = `${message} sent by ${name} at ${phone}`;
    (0, sendSms_1.sendSms)(phone, newMessage);
    res.status(201).send({
        message: newMessage
    });
}));
// Create user endpoint
app.post('/users', (req, res) => {
    const { email, password, phone } = req.body;
    const user = {
        email,
        password,
        phone
    };
    (0, sendSms_1.sendSms)(user.phone, req.body.message);
    res.status(201).send({
        message: req.body.message,
        data: user
    });
});
app.listen(process.env.PORT || PORT, () => console.log(`Live at ${PORT}`));