import express from 'express';
import { AuthRoutes } from '../modules/auth/Auth.route';

export interface IRoute {
    path: string;
    route: any;
}

const router = express.Router();

const moduleRoutes: IRoute[] = [
    {
        path: '/auth',
        route: AuthRoutes
    }
];


moduleRoutes.forEach((route: IRoute) => router.use(route.path, route.route));

export default router;