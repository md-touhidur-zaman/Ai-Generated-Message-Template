"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.envvars = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const loadEnvVars = () => {
    const requiredEnvVars = [
        "DATABASE_URL"
    ];
    requiredEnvVars.forEach(key => {
        if (!process.env[key]) {
            throw new Error(`Missing Env Variable of ${key}`);
        }
    });
    return {
        DATABASE_URL: process.env.DATABASE_URL
    };
};
exports.envvars = loadEnvVars();
