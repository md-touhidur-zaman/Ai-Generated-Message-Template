import {Server} from "http"


import mongoose from "mongoose"
import { envvars } from "./config/env.config"
import { app } from "./app"



let server:Server

const startServer = async() => {
    try {
        await mongoose.connect(envvars.DATABASE_URL)
        console.log("The mongodb is connected")
        server = app.listen(5000, ()=>{
            console.log("The server is running on the port of 5000")
        })
    } catch (error) {
        console.log(error)
        
    }
}


startServer()