"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const template_routes_1 = require("../module/create-template/template.routes");
exports.router = (0, express_1.Router)();
const moduleRoutes = [
    {
        path: "/template",
        route: template_routes_1.TemplateRouters,
    }
];
moduleRoutes.forEach(route => exports.router.use(route.path, route.route));
