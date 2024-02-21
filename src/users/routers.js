import express from "express";
import { param } from "express-validator";
import { validationResultMiddleware } from "../validators.js";
import {
  createUserController,
  getUserController,
  loginController,
} from "./controllers.js";

// create router instance
const router = express.Router();

router.post("", createUserController);
router.post("/login", loginController);
router.get(
  "/:id",
  [param("id").exists().toInt().isInt()],
  validationResultMiddleware,
  getUserController
);

export default router;
