import { Sex } from "../../../generated/prisma/enums";

type AssistantInfo = {
    id?: number,
    name: string,
    fatherName: string,
    motherName: string,
    dateOfBirth: Date,
    sex: Sex,
    contactNumber: string,
    email: string,
}