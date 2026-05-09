import { prisma } from "../../utiles/prisma";
import { IPatientInfo } from "./patient.Interface";



const createPatient = async (body: IPatientInfo) => {

    const result = await prisma.patientInfo.create({
        data: body,
    });
    return result;
}

const getAllPatient = async (): Promise<IPatientInfo[]> => {
    const result = await prisma.patientInfo.findMany();
    return result;
}


const getPatientById = async (id: number): Promise<IPatientInfo | null> => {
    const result = await prisma.patientInfo.findUnique({
        where: { id },
    });

    return result;
}


const updatePatient = async (id: number, body: IPatientInfo): Promise<IPatientInfo> => {
    const result = await prisma.patientInfo.update({
        where: { id },
        data: body,
    });
    return result;
}


const deletePatient = async (id: number): Promise<IPatientInfo> => {
    const result = await prisma.patientInfo.delete({
        where: { id },
    });
    return result;
}



export const PatientInfoService = {
    createPatient,
    getAllPatient,
    getPatientById,
    updatePatient,
    deletePatient
}