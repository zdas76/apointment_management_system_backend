import express from "express";
import { AuthControllers } from "./Auth.controllers";
import { UserRole } from "../../../generated/prisma/enums";
import auth from "../../middlewares/auth";


const router = express.Router();

router.post("/login", AuthControllers.loginUser);

router.post("/refresh-token", AuthControllers.refreshToken);

router.post(
    "/change-password",
    auth(UserRole.ADMIN),
    AuthControllers.changePassword
);

router.post("/forgot-password", AuthControllers.forgotPassword);

router.post("/reset-password", AuthControllers.resetPassword);

export const AuthRoutes = router;
