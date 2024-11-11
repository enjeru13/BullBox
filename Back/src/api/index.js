import app from "./app.js";
import { connectDB } from "./db.js";

// Conecta la base de datos
connectDB();

// Exporta la aplicación para que Vercel la use como una función serverless
export default app;
