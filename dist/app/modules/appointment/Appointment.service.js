"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppointmentService = void 0;
const prisma_1 = require("../../utiles/prisma");
const createAppointment = async (appointmentData) => {
    const isPatientExist = await prisma_1.prisma.patientInfo.findUnique({
        where: { id: appointmentData.patientId },
    });
    if (!isPatientExist) {
        throw new Error("Patient not found");
    }
    if (appointmentData.connectorId) {
        const isConnectorExist = await prisma_1.prisma.connectorInfo.findUnique({
            where: { id: appointmentData.connectorId },
        });
        if (!isConnectorExist) {
            throw new Error("Connector not found");
        }
    }
    const result = await prisma_1.prisma.appointment.create({
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
    const result = await prisma_1.prisma.appointment.findMany({
        include: {
            patientInfo: true,
            connectorInfo: true,
        },
    });
    return result;
};
const getAppointmentById = async (id) => {
    const result = await prisma_1.prisma.appointment.findFirst({
        where: { id },
        include: {
            patientInfo: true,
            connectorInfo: true,
        },
    });
    return result;
};
const getLastAppointmentDate = async (patientId) => {
    const isPatientExist = await prisma_1.prisma.patientInfo.findFirst({
        where: { id: patientId },
    });
    if (!isPatientExist) {
        throw new Error("Patient not found");
    }
    const result = await prisma_1.prisma.appointment.findFirst({
        where: {
            patientId: patientId,
        },
        orderBy: {
            visitingDate: "desc",
        },
    });
    if (!result) {
        throw new Error("Appointment not found");
    }
    return result;
};
const updateAppointment = async (id, appointmentData) => {
    const updateData = {};
    if (appointmentData.patientId) {
        updateData.patientId = appointmentData.patientId;
    }
    if (appointmentData.visitingDate) {
        updateData.visitingDate = new Date(appointmentData.visitingDate);
    }
    if (appointmentData.patientType) {
        updateData.patientType = appointmentData.patientType;
    }
    if (appointmentData.visitingTime) {
        updateData.visitingTime = appointmentData.visitingTime;
    }
    if (appointmentData.connectorId) {
        updateData.connectorId = appointmentData.connectorId;
    }
    if (appointmentData.visitingFee) {
        updateData.visitingFee = appointmentData.visitingFee;
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
    const result = await prisma_1.prisma.appointment.update({
        where: { id },
        data: updateData,
    });
    return result;
};
const deleteAppointment = async (id) => {
    const isExist = await prisma_1.prisma.appointment.findUnique({
        where: { id },
    });
    if (!isExist) {
        throw new Error("Appointment not found");
    }
    const result = await prisma_1.prisma.appointment.delete({
        where: { id },
    });
    return result;
};
exports.AppointmentService = {
    createAppointment,
    getAllAppointment,
    getAppointmentById,
    updateAppointment,
    deleteAppointment,
    getLastAppointmentDate
};
