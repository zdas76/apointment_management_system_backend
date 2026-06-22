import express from "express";
import { AppointmentController } from "./Appointment.controller";

const router = express.Router();

router.post("/", AppointmentController.createAppointment);

router.get("/", AppointmentController.getAllAppointmentbyDays);

router.get("/:id", AppointmentController.getAppointmentById);

router.patch("/:id/status", AppointmentController.updateAppointmentStatus);

router.patch("/:id", AppointmentController.updateAppointment);

router.delete("/:id", AppointmentController.deleteAppointment);

router.get("/last-visiting-date/:patientId", AppointmentController.lastVisitingDate);

export const AppointmentRoute = router;
