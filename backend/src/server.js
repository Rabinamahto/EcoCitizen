import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

import complaintRoutes from "./routes/complaintRoutes.js";

dotenv.config();
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((error) => {
    console.error("MongoDB connection failed:", error.message);
  });


const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/complaints", complaintRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "EcoCitizen Backend is running",
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`EcoCitizen Backend running on port ${PORT}`);
});