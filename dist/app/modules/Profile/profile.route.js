"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileRoute = void 0;
const express_1 = __importDefault(require("express"));
const profile_controller_1 = require("./profile.controller");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const client_1 = require("../../../generated/prisma/client");
const router = express_1.default.Router();
// Get profile (protected)
router.get("/", (0, auth_1.default)(client_1.UserRole.DOCTOR, client_1.UserRole.ASSISTANT, client_1.UserRole.ADMIN), profile_controller_1.ProfileController.getProfile);
// Update profile (protected)
router.patch("/", (0, auth_1.default)(client_1.UserRole.DOCTOR, client_1.UserRole.ASSISTANT), profile_controller_1.ProfileController.updateProfile);
exports.ProfileRoute = router;
