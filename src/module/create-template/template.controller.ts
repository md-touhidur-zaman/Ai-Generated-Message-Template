import { Request, Response } from "express";
import { TemplateServices } from "./template.services";

const createTemplate = async(req:Request, res: Response) =>{
    try {
        const payload =await req.body
       
        const result = await TemplateServices.CreateTemplate(payload)
        res.send({
            statusCode: 201,
            message: "You successfully created",
            data: result
        })
    } catch (error:any) {
        
        
        res.send({
            statusCode: 500,
            message: "Something went wrong",
            error: error?.message
        })
        
    }

}

export const TemplateControllers = {
    createTemplate
}