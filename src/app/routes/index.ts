import express from 'express';

export interface IRoute {
    path: string;
    route: any;
}

const router = express.Router();

const moduleRoutes: IRoute[] = [
    {
        path: '/users',
        route: "/auth/login"
    }
];


moduleRoutes.forEach((route: IRoute) => router.use(route.path, route.route));

export default router;