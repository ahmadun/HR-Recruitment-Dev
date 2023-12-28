import {
  getApplicants,
  getApplicant,
  postApplicant,
  updateApplicant,
} from "../controllers/applicant.controller.js";
import { verifyToken, isAllRoles } from "../middleware/auth.js";
import { Router } from "express";
const router = Router();
router.get("/applicant", getApplicants);
router.get("/applicant/:nik", [verifyToken, isAllRoles], getApplicant);
router.post("/applicant", [verifyToken, isAllRoles], postApplicant);
router.put("/applicant/:nik", [verifyToken, isAllRoles], updateApplicant);

export default router;
