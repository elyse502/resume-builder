import express from "express";
import protect from "../middlewares/authMiddleware.js";
import {
  enhanceJobDescription,
  enhanceProfessionalSummary,
} from "../controllers/aiController.js";
import { updateResume } from "../controllers/resumeController.js";

const aiRouter = express.Router();

aiRouter.post("/enhanced-pro-sum", protect, enhanceProfessionalSummary);
aiRouter.post("/enhanced-job-desc", protect, enhanceJobDescription);
aiRouter.post("/upload-resume", protect, updateResume);

export default aiRouter;
