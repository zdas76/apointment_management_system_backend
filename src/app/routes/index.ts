import express from 'express';
import { AuthRoutes } from '../modules/auth/Auth.route';
import { PatientInfoRoute } from '../modules/patientInfo/PatientInfo.route';
import { AssistantInfoRoute } from '../modules/assistantInfo/AssitantInfo.route';

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
    }
];


moduleRoutes.forEach((route: IRoute) => router.use(route.path, route.route));

export default router;