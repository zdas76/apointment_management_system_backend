import express from "express";
import { AssistantInfoController } from "./AssitantInfo.controller";

const router = express.Router();

router.post("/", AssistantInfoController.createAssistant);

router.get("/", AssistantInfoController.getAllAssistant);

router.get("/:id", AssistantInfoController.getAssistantById);

router.patch("/:id", AssistantInfoController.updateAssistant);

router.delete("/:id", AssistantInfoController.deleteAssistant);

export const AssistantInfoRoute = router;