"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatientInfoService = void 0;
const prisma_1 = require("../../utiles/prisma");
const createPatient = async (body) => {
    const result = await prisma_1.prisma.patientInfo.create({
        data: body,
    });
    return result;
};
const getAllPatient = async () => {
    const result = await prisma_1.prisma.patientInfo.findMany({
        where: {
            isDeleted: false,
        },
        orderBy: {
            createdAt: "desc"
        }
    });
    return result;
};
const getAllPatientBySearch = async (searchTerm) => {
    const result = await prisma_1.prisma.patientInfo.findMany({
        where: {
            isDeleted: false,
            ...(searchTerm && {
                OR: [
                    {
                        name: {
                            contains: searchTerm
                        }
                    },
                    {
                        contactNumber: {
                            contains: searchTerm
                        }
                    }
                ]
            })
        },
        orderBy: {
            createdAt: "desc"
        }
    });
    return result;
};
const getPatientById = async (id) => {
    const result = await prisma_1.prisma.patientInfo.findUnique({
        where: { id },
    });
    return result;
};
const updatePatient = async (id, body) => {
    const result = await prisma_1.prisma.patientInfo.update({
        where: { id },
        data: body,
    });
    return result;
};
const deletePatient = async (id) => {
    const result = await prisma_1.prisma.patientInfo.delete({
        where: { id },
    });
    return result;
};
exports.PatientInfoService = {
    createPatient,
    getAllPatient,
    getPatientById,
    updatePatient,
    deletePatient,
    getAllPatientBySearch
};
