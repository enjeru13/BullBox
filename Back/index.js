import app from "./src/api/app.js";
import { connectDB } from "./src/api/db.js";

// Conecta la base de datos
connectDB();

// Exporta la aplicación para que Vercel la use como una función serverless
export default app;
