import express from "express";
import { DoctorInfoController } from "./DoctorInfo.controller";

const router = express.Router();

router.get("/", DoctorInfoController.getAllDoctors);
router.get("/:email", DoctorInfoController.getDoctorByEmail);
router.patch("/:email", DoctorInfoController.updateDoctor);
router.delete("/:id", DoctorInfoController.deleteDoctor);
router.patch("/add-safe/:id", DoctorInfoController.addSafe);

export const DoctorInfoRoute = router;
