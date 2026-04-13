"use strict";
// import express, { Request, Response } from "express"
// import cors from "cors"
// import { router } from "./routers"
// export const app = express()
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
// app.use(express.json())
// app.use(cors({}))
// app.use("/api/v1", router)
// app.get("/", (req: Request, res: Response) => {
//     res.send({
//         statusCode: 201,
//         message: "The Message Template Server is Comming!!!",
//     })
// })
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routers_1 = require("./routers");
exports.app = (0, express_1.default)();
exports.app.use(express_1.default.json());
exports.app.use((0, cors_1.default)({}));
exports.app.use(express_1.default.urlencoded({ extended: true }));
exports.app.use("/api/v1", routers_1.router);
exports.app.get("/", (req, res) => {
    res.status(200).send({
        success: true,
        statusCode: true,
        message: "The event management api is coming soon...."
    });
});
// app.use(globalErrorHandler)
