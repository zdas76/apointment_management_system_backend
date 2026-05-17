import { Request, Response } from "express";
import catchAsync from "../../shared/catchAsync";
import { AppointmentService } from "./Appointment.service";
import sendResponse from "../../shared/sendResponse";
import { StatusCodes } from "http-status-codes";


const createAppointment = catchAsync(async (req: Request, res: Response) => {
    const result = await AppointmentService.createAppointment(req.body);

    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: "Appointment create Successfully",
        data: result,
    });
});

const getAllAppointment = catchAsync(async (req: Request, res: Response) => {
    const result = await AppointmentService.getAllAppointment();

    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: "Appointment fetch Successfully",
        data: result,
    });
});

const getAppointmentById = catchAsync(async (req: Request, res: Response) => {
    const id = parseInt(req.params.id as string);
    const result = await AppointmentService.getAppointmentById(id);

    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: "Appointment fetch Successfully",
        data: result,
    });
});

const getLastAppointmentDate = catchAsync(async (req: Request, res: Response) => {
    const patientId = parseInt(req.query.patientId as string);

    const result = await AppointmentService.getLastAppointmentDate(patientId);

    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: "Last Appointment Date fetch Successfully",
        data: result,
    });
});

const updateAppointment = catchAsync(async (req: Request, res: Response) => {
    const result = await AppointmentService.updateAppointment(Number(req.params.id), req.body);

    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: "Appointment update Successfully",
        data: result,
    });
});

const deleteAppointment = catchAsync(async (req: Request, res: Response) => {
    const result = await AppointmentService.deleteAppointment(Number(req.params.id));

    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: "Appointment delete Successfully",
        data: result,
    });
});

export const AppointmentController = {
    createAppointment,
    getAllAppointment,
    getAppointmentById,
    updateAppointment,
    deleteAppointment,
    getLastAppointmentDate
}
