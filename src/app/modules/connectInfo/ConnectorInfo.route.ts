import express from "express";
import { ConnectorInfoController } from "./ConnectorInfo.controller";

const router = express.Router();

router.post("/", ConnectorInfoController.createConnect);

router.get("/", ConnectorInfoController.getAllConnect);

router.get("/:id", ConnectorInfoController.getConnectById);

router.patch("/:id", ConnectorInfoController.updateConnect);

router.delete("/:id", ConnectorInfoController.deleteConnect);

export const ConnectorInfoRoute = router;
