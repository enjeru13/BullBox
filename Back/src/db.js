import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Base de datos conectada");
  } catch (error) {
    console.error("Error de conexión a MongoDB:", error);
  }
};
