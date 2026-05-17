"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppointmentRoute = void 0;
const express_1 = __importDefault(require("express"));
const Appointment_controller_1 = require("./Appointment.controller");
const router = express_1.default.Router();
router.post("/", Appointment_controller_1.AppointmentController.createAppointment);
router.get("/", Appointment_controller_1.AppointmentController.getAllAppointment);
router.get("/last-date", Appointment_controller_1.AppointmentController.getLastAppointmentDate);
router.get("/:id", Appointment_controller_1.AppointmentController.getAppointmentById);
router.patch("/:id", Appointment_controller_1.AppointmentController.updateAppointment);
router.delete("/:id", Appointment_controller_1.AppointmentController.deleteAppointment);
exports.AppointmentRoute = router;
