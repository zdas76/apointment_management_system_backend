"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileService = void 0;
const prisma_1 = require("../../utiles/prisma");
const client_1 = require("../../../generated/prisma/client");
const getProfile = async (email) => {
    const user = await prisma_1.prisma.user.findUnique({
        where: { email },
        include: {
            doctorInfo: true,
            assistant: true
        }
    });
    if (!user) {
        throw new Error("User not found");
    }
    return user;
};
const updateProfile = async (email, role, data) => {
    if (role === client_1.UserRole.DOCTOR) {
        // Filter allowed fields for DoctorInfo
        const allowedFields = [
            "nameEnglish", "nameBangla", "designation", "degree",
            "specialty", "memberships", "chamberAddress", "hospitalName",
            "contactNumber", "newPatientVisitingFee", "oldPatientVisitingFee"
        ];
        const updateData = {};
        allowedFields.forEach(field => {
            if (data[field] !== undefined) {
                updateData[field] = data[field];
            }
        });
        const result = await prisma_1.prisma.doctorInfo.update({
            where: { email },
            data: updateData
        });
        return result;
    }
    else if (role === client_1.UserRole.ASSISTANT) {
        // Filter allowed fields for AssistantInfo
        const allowedFields = [
            "name", "fatherName", "motherName", "dateOfBirth", "sex", "contactNumber"
        ];
        const updateData = {};
        allowedFields.forEach(field => {
            if (data[field] !== undefined) {
                if (field === "dateOfBirth" && data[field]) {
                    updateData[field] = new Date(data[field]);
                }
                else {
                    updateData[field] = data[field];
                }
            }
        });
        const result = await prisma_1.prisma.assistantInfo.update({
            where: { email },
            data: updateData
        });
        return result;
    }
    else {
        throw new Error("Update not supported for this role");
    }
};
exports.ProfileService = {
    getProfile,
    updateProfile
};
