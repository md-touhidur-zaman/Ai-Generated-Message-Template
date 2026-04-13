import { Router } from "express";
import { TemplateRouters } from "../module/create-template/template.routes";

export const router = Router()

const moduleRoutes = [
    {
        path: "/template",
        route: TemplateRouters,
    }
]


moduleRoutes.forEach(route=> router.use(route.path, route.route))


