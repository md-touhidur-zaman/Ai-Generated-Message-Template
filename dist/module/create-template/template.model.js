"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Template = void 0;
const mongoose_1 = require("mongoose");
const messageSchema = new mongoose_1.Schema({
    id: { type: Number, required: true },
    content: { type: String, required: true }
});
const templateSchema = new mongoose_1.Schema({
    category: { type: String, required: true },
    title: { type: String, required: true },
    message: { type: [messageSchema], required: true }
});
exports.Template = (0, mongoose_1.model)("Template", templateSchema);
