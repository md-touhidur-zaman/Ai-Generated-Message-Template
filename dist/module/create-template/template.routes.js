"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TemplateRouters = void 0;
const express_1 = require("express");
const template_controller_1 = require("./template.controller");
const router = (0, express_1.Router)();
router.post("/create-template", template_controller_1.TemplateControllers.createTemplate);
exports.TemplateRouters = router;
