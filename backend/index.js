import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import { connectDB } from "./db/connectDB.js";

import authRoutes from "./routes/auth.route.js";

dotenv.config();


const app = express();
const PORT = process.env.PORT || 5000;

// app.use(express.json());  //allows us to parse incoming request (json data) in req.body (body of the request), data will be in json format


// Middleware
app.use(express.json()); //allows us to parse incoming request (json data) in req.body (body of the request), data will be in json format
app.use(cookieParser()); //allows us to parse incoming request (cookie data) in req.cookies, data will be in json format


// Root route
app.get("/", (req, res) => {
  res.send("Welcome to the API");
});

// Routes
app.use("/api/auth", authRoutes);

app.listen(PORT, (req, res) => {
  console.log(`Server is running on port ${PORT}`);
  connectDB();
});
