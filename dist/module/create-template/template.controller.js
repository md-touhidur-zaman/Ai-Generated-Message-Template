"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TemplateControllers = void 0;
const template_services_1 = require("./template.services");
const createTemplate = async (req, res) => {
    try {
        const payload = await req.body;
        const result = await template_services_1.TemplateServices.CreateTemplate(payload);
        res.send({
            statusCode: 201,
            message: "You successfully created",
            data: result
        });
    }
    catch (error) {
        res.send({
            statusCode: 500,
            message: "Something went wrong",
            error: error?.message
        });
    }
};
exports.TemplateControllers = {
    createTemplate
};
