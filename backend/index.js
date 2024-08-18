import express from "express";
import colors from "colors";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import cardRoutes from "./routes/cardRoutes.js";

// config env
dotenv.config();

// database config
connectDB();

// rest object
const app = express();

const corsOpts = {
  origin: "*",
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"],
};

// middlewares
app.use(express.json());
app.use(morgan("dev"));
app.use(cors(corsOpts));

//routes
app.use("/api/v1/cards", cardRoutes);

// rest api
app.get("/", (req, res) => {
  res.status(200).send({
    message: "wellcome to my site",
  });
});

// port
const PORT = process.env.PORT;

// listen
app.listen(PORT, () => {
  console.log(`Server running on port- ${PORT}`.green);
});
