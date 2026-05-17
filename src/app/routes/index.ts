import express from 'express';
import { AuthRoutes } from '../modules/auth/Auth.route';
import { PatientInfoRoute } from '../modules/patientInfo/PatientInfo.route';
import { AssistantInfoRoute } from '../modules/assistantInfo/AssitantInfo.route';
import { ConnectorInfoRoute } from '../modules/connectInfo/ConnectorInfo.route';
import { AppointmentRoute } from '../modules/appointment/Appointment.route';

export interface IRoute {
    path: string;
    route: any;
}

const router = express.Router();

const moduleRoutes: IRoute[] = [
    {
        path: '/auth',
        route: AuthRoutes
    },
    {
        path: '/patient',
        route: PatientInfoRoute
    },
    {
        path: '/assistant',
        route: AssistantInfoRoute
    },
    {
        path: '/connector',
        route: ConnectorInfoRoute
    },
    {
        path: '/appointment',
        route: AppointmentRoute
    }
];


moduleRoutes.forEach((route: IRoute) => router.use(route.path, route.route));

export default router;