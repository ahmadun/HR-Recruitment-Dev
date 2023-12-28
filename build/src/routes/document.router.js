import { Router } from 'express';
import { download, getDocuments, getDocument, postDocument, updateDocument, getDocumentByJob } from '../controllers/document.controller.js';
import { isAllRoles, verifyToken } from '../middleware/auth.js';
const router = Router()

router.get("/document", [verifyToken, isAllRoles], getDocuments)
router.get("/document/:nik", [verifyToken, isAllRoles], getDocument)
router.get("/document-job/:nik/:jobid", [verifyToken, isAllRoles], getDocumentByJob)
router.post("/document", [verifyToken, isAllRoles], postDocument)
router.put("/document/:nik", [verifyToken, isAllRoles], updateDocument)
router.get("/download", [verifyToken, isAllRoles], download)

export default router