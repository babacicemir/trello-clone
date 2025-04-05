import mongoose from "mongoose";
const { MONGO_DB_CONNECTION_STRING, MONGO_DB_NAME } = process.env;

export const createDatabaseConnection = async(): Promise<void>=>{
    try{
        await mongoose.connect(`${MONGO_DB_CONNECTION_STRING}/${MONGO_DB_NAME}`);
        console.log("Connected to Mongo database");
    }catch(error){
        console.log("Error connecting to database", error);
        throw error;
    }
}
