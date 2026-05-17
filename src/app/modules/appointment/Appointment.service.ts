import { Appointment } from "../../../generated/prisma/client";
import { prisma } from "../../utiles/prisma";
import { IAppointment } from "./Appointment.interface";


const createAppointment = async (appointmentData: IAppointment) => {

    const isPatientExist = await prisma.patientInfo.findUnique({
        where: { id: appointmentData.patientId },
    });

    if (!isPatientExist) {
        throw new Error("Patient not found");
    }

    if (appointmentData.connectorId) {
        const isConnectorExist = await prisma.connectorInfo.findUnique({
            where: { id: appointmentData.connectorId },
        });

        if (!isConnectorExist) {
            throw new Error("Connector not found");
        }
    }

    const result = await prisma.appointment.create({
        data: {
            patientId: appointmentData.patientId,
            visitingDate: appointmentData.visitingDate ? new Date(appointmentData.visitingDate) : null,
            patientType: appointmentData.patientType,
            visitingTime: appointmentData.visitingTime,
            connectorId: appointmentData.connectorId,
            visitingFee: appointmentData.visitingFee,
            discount: appointmentData.discount,
            weight: appointmentData.weight,
            booldPusher: appointmentData.booldPusher,
            bloodGroup: appointmentData.bloodGroup,
            status: appointmentData.status,
            paymentStatus: appointmentData.paymentStatus,
        },
    });

    return result;
};

const getAllAppointment = async () => {
    const result = await prisma.appointment.findMany({
        include: {
            patientInfo: true,
            connectorInfo: true,
        },
    });
    return result;
};

const getAppointmentById = async (id: number) => {
    const result = await prisma.appointment.findFirst({
        where: { id },
        include: {
            patientInfo: true,
            connectorInfo: true,
        },
    });
    return result;
};

const getLastAppointmentDate = async (patientId: number) => {

    const isPatientExist = await prisma.patientInfo.findFirst({
        where: { id: patientId },
    });

    if (!isPatientExist) {
        throw new Error("Patient not found");
    }

    const result = await prisma.appointment.findFirst({
        where: {
            patientId: isPatientExist.id,
        },
        orderBy: {
            visitingDate: "desc",
        },
    });


    return { isPatientExist, result };
};

const updateAppointment = async (id: number, appointmentData: Appointment) => {

    const updateData = {} as Appointment;

    if (appointmentData.visitingDate) {
        updateData.visitingDate = new Date(appointmentData.visitingDate);
    }
    if (appointmentData.patientType) {
        updateData.patientType = appointmentData.patientType;
    }
    if (appointmentData.visitingTime) {
        updateData.visitingTime = appointmentData.visitingTime;
    }

    if (appointmentData.discount) {
        updateData.discount = appointmentData.discount;
    }
    if (appointmentData.weight) {
        updateData.weight = appointmentData.weight;
    }
    if (appointmentData.booldPusher) {
        updateData.booldPusher = appointmentData.booldPusher;
    }
    if (appointmentData.bloodGroup) {
        updateData.bloodGroup = appointmentData.bloodGroup;
    }
    if (appointmentData.status) {
        updateData.status = appointmentData.status;
    }
    if (appointmentData.paymentStatus) {
        updateData.paymentStatus = appointmentData.paymentStatus;
    }

    const result = await prisma.appointment.update({
        where: { id },
        data: updateData,
    });
    return result;
};

const deleteAppointment = async (id: number) => {

    const isExist = await prisma.appointment.findUnique({
        where: { id },
    });

    if (!isExist) {
        throw new Error("Appointment not found");
    }

    const result = await prisma.appointment.delete({
        where: { id },
    });

    return result;
};

export const AppointmentService = {
    createAppointment,
    getAllAppointment,
    getAppointmentById,
    updateAppointment,
    deleteAppointment,
    getLastAppointmentDate
};
