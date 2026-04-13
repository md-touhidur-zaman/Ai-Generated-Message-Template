import dotenv from "dotenv"


dotenv.config()


interface IDotEnvConfig{
    DATABASE_URL: string;
}

const loadEnvVars = (): IDotEnvConfig =>{
    const requiredEnvVars: string[] = [
        "DATABASE_URL"
    ]

    requiredEnvVars.forEach(key=>{
        if(!process.env[key]){
            throw new Error(`Missing Env Variable of ${key}`)
        }
    })

    return {
        DATABASE_URL: process.env.DATABASE_URL as string
    }

}

export const envvars = loadEnvVars()