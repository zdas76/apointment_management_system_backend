"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const client_1 = require("../../../generated/prisma/client");
const prisma_1 = require("../../utiles/prisma");
const bcrypt_1 = __importDefault(require("bcrypt"));
const createUser = async (userData) => {
    const hashedPassword = await bcrypt_1.default.hash(userData.password, Number(process.env.HASHPSSWORD_ROUND) || 10);
    const isExist = await prisma_1.prisma.user.findUnique({
        where: { userName: userData.userName },
    });
    if (isExist) {
        throw new Error("User already exists with this username");
    }
    const isEmailExist = await prisma_1.prisma.user.findUnique({
        where: { email: userData.email },
    });
    if (isEmailExist) {
        throw new Error("User already exists with this email");
    }
    const result = await prisma_1.prisma.user.create({
        data: {
            userName: userData.userName,
            email: userData.email,
            password: hashedPassword,
            role: userData.role,
            status: userData.status || client_1.Status.ACTIVE,
        },
    });
    return result;
};
const getAllUsers = async () => {
    const result = await prisma_1.prisma.user.findMany({
        select: {
            id: true,
            userName: true,
            email: true,
            role: true,
            status: true,
            createdAt: true,
            updatedAt: true,
        }
    });
    return result;
};
const getUserById = async (id) => {
    const result = await prisma_1.prisma.user.findUnique({
        where: { id },
        select: {
            id: true,
            userName: true,
            email: true,
            role: true,
            status: true,
            createdAt: true,
            updatedAt: true,
            assistant: true,
            doctorInfo: true,
        }
    });
    return result;
};
const updateUser = async (id, userData) => {
    const updateData = {};
    if (userData.userName)
        updateData.userName = userData.userName;
    if (userData.email)
        updateData.email = userData.email;
    if (userData.role)
        updateData.role = userData.role;
    if (userData.status)
        updateData.status = userData.status;
    if (userData.password) {
        updateData.password = await bcrypt_1.default.hash(userData.password, Number(process.env.HASHPSSWORD_ROUND) || 10);
    }
    const result = await prisma_1.prisma.user.update({
        where: { id },
        data: updateData,
    });
    return result;
};
const deleteUser = async (id) => {
    const result = await prisma_1.prisma.user.update({
        where: { id },
        data: {
            status: client_1.Status.DELETED
        }
    });
    return result;
};
exports.UserService = {
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser,
};
