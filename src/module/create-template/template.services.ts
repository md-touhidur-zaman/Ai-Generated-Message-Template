import { ICreateTemplate } from "./template.interfaces";
import { Template } from "./template.model";

const CreateTemplate = async(payload: ICreateTemplate) =>{
    const result = await Template.create(payload)
    return result
}


export const TemplateServices = {
    CreateTemplate
}