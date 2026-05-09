import { prisma } from "../../utiles/prisma";
import { ConnetInfo } from "./ConnectorInfo.Interfact";


const createConnect = async (connectData: ConnetInfo) => {
    const result = await prisma.connectorInfo.create({
        data: connectData,
    });
    return result;
};

const getAllConnect = async () => {
    const result = await prisma.connectorInfo.findMany();
    return result;
};

const getConnectById = async (id: number) => {
    const result = await prisma.connectorInfo.findUnique({
        where: { id },
    });
    return result;
};

const updateConnect = async (id: number, connectData: ConnetInfo) => {
    const result = await prisma.connectorInfo.update({
        where: { id },
        data: connectData,
    });
    return result;
};

const deleteConnect = async (id: number) => {
    const result = await prisma.connectorInfo.delete({
        where: { id },
    });
    return result;
};

export const ConnectorInfoService = {
    createConnect,
    getAllConnect,
    getConnectById,
    updateConnect,
    deleteConnect,
};