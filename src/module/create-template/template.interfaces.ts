import { Types } from "mongoose";

export interface IMessage{
    id: number,
    content: string
}

export interface ICreateTemplate{
    // id: Types.ObjectId,
    title: string,
    category: string,
    message: IMessage[]
}