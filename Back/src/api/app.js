import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";
import authRoutes from "../routes/auth.routes.js";
import productRoutes from "../routes/product.routes.js";
import weightRecordsRoutes from "../routes/weight.routes.js";

dotenv.config();

const app = express();

const allowedOrigins = [
  process.env.FRONTEND_URL || "https://bull-box.vercel.app"  // Agrega la URL de tu frontend aquí
];
console.log(process.env.FRONTEND_URL)

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,  // Esto es necesario para enviar cookies o autenticación
  })
);

// Middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());

// Rutas
app.use("/api", authRoutes);
app.use("/api", productRoutes);
app.use("/api/weightRecords", weightRecordsRoutes);

export default app;
