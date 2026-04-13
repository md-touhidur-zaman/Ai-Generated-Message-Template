import { model, Schema } from "mongoose";
import { ICreateTemplate, IMessage } from "./template.interfaces";

const messageSchema = new Schema<IMessage>({
    id: {type: Number, required: true},
    content: {type: String, required: true}
    
})

const templateSchema = new Schema<ICreateTemplate>({
    category: {type: String, required: true},
    title: {type:String, required: true},
    message: {type: [messageSchema], required: true}
})


export const Template = model<ICreateTemplate>("Template", templateSchema)