import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./configs/db.js";

const app = express();

const PORT = process.env.PORT || 3000;

// Database connection
await connectDB();

// Middleware
app.use(express.json());
app.use(cors());

// Sample route
app.get("/", (req, res) => res.send("Server is live...🚀"));

// Start the server
app.listen(PORT, () => {
  console.log(
    `Server is running on port ${PORT} => http://localhost:${PORT} 🍽️`
  );
});
