


import express, { Request, Response } from "express"
import cors from "cors"
import { router } from "./routers"

export const app = express()

app.use(express.json())
app.use(cors({
     origin: ["http://localhost:3000"],
    credentials: true
    
}))
app.use(express.urlencoded({extended: true}))


app.use("/api/v1", router)

app.get("/", (req:Request, res:Response)=>{
    res.status(200).send({
        success:true,
        statusCode:true,
        message:"The event management api is coming soon...."
    })
})

// app.use(globalErrorHandler)

