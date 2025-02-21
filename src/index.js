import dotenv from "dotenv";
import { app } from "./app.js";
import ConnectDB from "./db/mongodb.js";

//env setup...
dotenv.config({
  path: './env'
});

//db Connection....
ConnectDB()
.then(() => {
  // app routing...
  app.get("/", (req, res) => {
    res.send("<h1 style='text-align: center; font-size: 100px; color: green;'>MongoDB Server and Application is ready!!!</h1>")
  })
  
  //app listen/runing...
  app.listen(process.env.PORT || 8000, () => {
    console.log(`api server runing on http://localhost:${process.env.PORT}`);
  })
})
.catch((err) => {
  console.log("MongoDb connection error found!!!", err);
})











//basic tequnice of conneting db
/*
;(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    
    app.on("error", (error) => {
      console.log("app not talk with db, error found!", error);
      throw error;
    });
    
    app.get("/", (req, res) => {
      res.send("<h1 style='text-align: center; font-size: 100px; color: green;'>db and app is redy!!!</h1>")
    })
    
    app.listen(process.env.PORT || 8000, () => {
      console.log(`api listening on http://localhost:${process.env.PORT}`);
    });
    
  } catch (error) {
    console.error("Error found!", error);
    throw error;
  }
})()
*/
