import express from "express";
import bodyParser from "body-parser";
import * as dotenv from "dotenv";
import cors from "cors";

import connectDB from "./mongodb/connect.js";
import userRouter from "./routes/user.routes.js";

dotenv.config(); // accessing  .env data

const app = express();
app.use(cors());
// middleware to parse the request body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/api/v1", (req, res) => {
  res.send({ message: "Hello World ! my name is kiran.dev" }); //route response on root
});
//using middleware  "api/v1/users"
app.use("/api/v1/users", userRouter);

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
