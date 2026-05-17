import express from "express";
import { AppointmentController } from "./Appointment.controller";

const router = express.Router();

router.post("/", AppointmentController.createAppointment);

router.get("/", AppointmentController.getAllAppointment);

router.get("/last-date", AppointmentController.getLastAppointmentDate);

router.get("/:id", AppointmentController.getAppointmentById);

router.patch("/:id", AppointmentController.updateAppointment);

router.delete("/:id", AppointmentController.deleteAppointment);

export const AppointmentRoute = router;
