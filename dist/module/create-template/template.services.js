"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TemplateServices = void 0;
const template_model_1 = require("./template.model");
const CreateTemplate = async (payload) => {
    const result = await template_model_1.Template.create(payload);
    return result;
};
exports.TemplateServices = {
    CreateTemplate
};
