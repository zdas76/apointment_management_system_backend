import { Sex } from "../../../generated/prisma/enums";

export type IPatientInfo = {
    name: string;
    age: number;
    sex: Sex;
    contactNumber: string;
    address: string;
}