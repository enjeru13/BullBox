import { Router } from "express";
import {
  addWeightRecord,
  getUserWeightRecords,
} from "../controllers/weight.controller.js";

const router = Router();

router.post("/add", addWeightRecord);
router.get("/user/:userId", getUserWeightRecords);

export default router;
