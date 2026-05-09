

import express from "express";
import { PatientInfoController } from "./PatientInfo.controller";

const router = express.Router();



router.post("/", PatientInfoController.createPatient);

router.get("/", PatientInfoController.getAllPatient);

router.get("/:id", PatientInfoController.getPatientById);

router.patch("/:id", PatientInfoController.updatePatient);

router.delete("/:id", PatientInfoController.deletePatient);


export const PatientInfoRoute = router;