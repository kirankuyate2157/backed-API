import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";

import connectDB from "./mongodb/connect.js";

dotenv.config(); // accessing  .env data

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send({ message: "Hello World ! my name is kiran.dev" }); //route response on root
});
//using middleware  "api/v1/users"

//server port and connection
const StartServer = async () => {
  try {
    //connect to data base via URL
    connectDB(process.env.MONGODB_URL);
    app.listen(8080, () =>
      console.log("server started 🚀.. on port http://localhost:8080")
    );
  } catch (err) {
    console.log(err);
  }
};

StartServer();
