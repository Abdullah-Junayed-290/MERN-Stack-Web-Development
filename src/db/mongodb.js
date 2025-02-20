import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

//db connection function...
const ConnectDB = async () => {
  try {
    //Connect with mongoDB...
    const connectionDB = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    //console the connection success Messages...
    console.log(`mongodb connected! DB,host:${connectionDB.connection.host}`);
  } catch (error) {
    //show db errors...
    console.error("mongodb connection failed!", error);
    process.exit(1);
  }
}

export default ConnectDB;