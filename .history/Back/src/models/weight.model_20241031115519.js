// models/Weight.js
const mongoose = require("mongoose");

const weightSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  weight: { type: Number, required: true },
  date: { type: Date, default: Date.now },
});

export default mongoose.model("Weight", weightSchema);
