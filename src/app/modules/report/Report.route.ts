import express from "express";
import { ReportController } from "./Report.controller";

const router = express.Router();

router.get("/daily-report", ReportController.getAppointmentDailyReportByDate);

export const ReportRoute = router;
