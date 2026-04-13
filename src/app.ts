// import express, { Request, Response } from "express"
// import cors from "cors"
// import { router } from "./routers"
// export const app = express()

// app.use(express.json())
// app.use(cors({}))

// app.use("/api/v1", router)

// app.get("/", (req: Request, res: Response) => {
//     res.send({
//         statusCode: 201,
//         message: "The Message Template Server is Comming!!!",
//     })
// })


import express, { Request, Response } from "express"
import cors from "cors"
import { router } from "./routers"

export const app = express()

app.use(express.json())
app.use(cors({
    
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

