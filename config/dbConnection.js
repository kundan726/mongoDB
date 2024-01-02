import mongoose from "mongoose";

const DBConnection = async (DB_URL) => {
    try {
        const dbOptions = {
            dbName : 'aggregation'
        }
        await mongoose.connect(DB_URL,dbOptions);
        console.log("DB connected");
    } catch (error) {
        console.log("Error in DB connection:", error)
    }    
}

export default DBConnection;