import mongoose from "mongoose";

type connection_flag = {
    isConnected?: number
}

const connection : connection_flag = {}

async function dbConnect():Promise<void> {
    if (connection.isConnected){
        console.log("Already connected to database");
        return
    }

    try {
        const db = 
        await mongoose.connect(process.env.MONGO_URI||'')
        console.log(db);

        connection.isConnected = db.connections[0].readyState
        console.log("DB Connected Successfully")
    } catch (error) {
        console.log("DB connection Failed", error)
        
    }
}

export default dbConnect;