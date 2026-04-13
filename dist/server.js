"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const env_config_1 = require("./config/env.config");
const app_1 = require("./app");
let server;
const startServer = async () => {
    try {
        await mongoose_1.default.connect(env_config_1.envvars.DATABASE_URL);
        console.log("The mongodb is connected");
        server = app_1.app.listen(5000, () => {
            console.log("The server is running on the port of 5000");
        });
    }
    catch (error) {
        console.log(error);
    }
};
startServer();
