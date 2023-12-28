import { Router } from "express";
import { isAllRoles, isInterviewer, verifyToken } from "../middleware/auth.js";
import {
  getApplications,
  getApplication,
  postApplication,
  updateApplication,
  getApplicationByJob,
  getApplicationByApplicant,
  getApplicationByApplicantByNik,
  getApplicationByJobStatus,
  getApplicationByStatusLulus,
  getApplicationByStatusGagal,
  getApplicationInterviewer,
  getAnnouncement,
  updateApplicationbyJob,
  getApplicationByApplicantByNikJob,
  updateApplicationByAtten,
  getAnnouncementByAtten,
  getApplicationByJobAtten,
  getApplicationByAttenYa,
  getApplicationByAttenTidak,
} from "../controllers/application.controller.js";
const router = Router();

router.get("/application", [verifyToken, isAllRoles], getApplications);
router.get("/application/:id", [verifyToken, isAllRoles], getApplication);
router.get(
  "/application-job/:id",
  [verifyToken, isAllRoles],
  getApplicationByJob
);
router.get(
  "/application-job-status/:id",
  [verifyToken, isAllRoles],
  getApplicationByJobStatus
);
router.get(
  "/application-job-atten/:id",
  [verifyToken, isAllRoles],
  getApplicationByJobAtten
);
router.get(
  "/application-status-lulus/:id",
  [verifyToken, isAllRoles],
  getApplicationByStatusLulus
);
router.get(
  "/application-atten-ya",
  [verifyToken, isAllRoles],
  getApplicationByAttenYa
);
router.get(
  "/application-atten-ya",
  [verifyToken, isAllRoles],
  getApplicationByAttenTidak
);
router.get(
  "/application-status-gagal/:id",
  [verifyToken, isAllRoles],
  getApplicationByStatusGagal
);
router.get(
  "/application-applicant",
  [verifyToken, isAllRoles],
  getApplicationByApplicant
);
router.get(
  "/application-applicant/:nik",
  [verifyToken, isAllRoles],
  getApplicationByApplicantByNik
);
router.get(
  "/application-applicant/:nik/:job_id",
  [verifyToken, isAllRoles],
  getApplicationByApplicantByNikJob
);

router.get(
  "/application-interview/:id",
  [verifyToken, isInterviewer],
  getApplicationInterviewer
);
router.get(
  "/application-announcement/:nik/:no_test",
  [verifyToken, isAllRoles],
  getAnnouncement
);
router.get(
  "/application-announcement-atten/:nik/:no_test",
  [verifyToken, isAllRoles],
  getAnnouncementByAtten
);
router.post("/application", [verifyToken, isAllRoles], postApplication);
router.put("/application/:id", [verifyToken, isAllRoles], updateApplication);
router.put("/application-all", [verifyToken, isAllRoles], updateApplication);
router.put(
  "/application-job/:id",
  [verifyToken, isAllRoles],
  updateApplicationbyJob
);

router.put(
  "/application-job-all",
  [verifyToken, isAllRoles],
  updateApplicationbyJob
);
router.put(
  "/application-atten/:no_test",
  [verifyToken, isAllRoles],
  updateApplicationByAtten
);
export default router;
