import { log } from "console";
import mongoose from "mongoose";

type ConnextionObject={
    isConnected?: number
}

const connection : ConnextionObject={}

async function dbConnect(): Promise<void> {
    if(connection.isConnected){
        console.log("Already connected to database");
        return
    }

    try {
        const db = await mongoose.connect(process.env.MONGODB_URI || "",{})
        connection.isConnected=db.connections[0].readyState
        console.log("DB Connected Succesfully")
    } catch (error) {
        console.log("Database connected Failed",error)
        process.exit(1)   
    }
}

export default dbConnect;