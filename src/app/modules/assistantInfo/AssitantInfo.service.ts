import { AssistantInfo } from "../../../generated/prisma/client";
import { prisma } from "../../utiles/prisma";


const createAssistant = async (assistantData: AssistantInfo) => {
    const result = await prisma.assistantInfo.create({
        data: assistantData,
    });
    return result;
};

const getAllAssistant = async () => {
    const result = await prisma.assistantInfo.findMany();
    return result;
};

const getAssistantById = async (id: number) => {
    const result = await prisma.assistantInfo.findUnique({
        where: { id },
    });
    return result;
};

const updateAssistant = async (id: number, assistantData: AssistantInfo) => {
    const result = await prisma.assistantInfo.update({
        where: { id },
        data: assistantData,
    });
    return result;
};

const deleteAssistant = async (id: number) => {
    const result = await prisma.assistantInfo.delete({
        where: { id },
    });
    return result;
};

export const AssistantInfoService = {
    createAssistant,
    getAllAssistant,
    getAssistantById,
    updateAssistant,
    deleteAssistant,
};