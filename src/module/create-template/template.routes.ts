import { Router } from "express";
import { TemplateControllers } from "./template.controller";

const router = Router()


router.post("/create-template", TemplateControllers.createTemplate)

export const TemplateRouters = router