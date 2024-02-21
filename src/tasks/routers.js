import express from "express";
import { body, param, query } from "express-validator";
import {
  createTaskController,
  deleteTaskController,
  getTaskController,
  getTasksController,
  updateTaskController,
} from "./controllers.js";
import { validationResultMiddleware } from "../validators.js";

// create router instance
const router = express.Router();

router.post(
  "",
  [
    body("name").exists().isString().notEmpty().withMessage("invalid name"),
    body("priority")
      .exists()
      .isInt({ gt: 0, lt: 6 })
      .withMessage("invalid priority"),
  ],
  validationResultMiddleware,
  createTaskController
);

router.get(
  "",
  [
    query("priority").optional().isInt().toInt(),
    query("completed").optional().isBoolean().toBoolean(),
  ],
  validationResultMiddleware,
  getTasksController
);

router.get(
  "/:id",
  [param("id").exists().isInt().withMessage("invalid id").bail().toInt()],
  validationResultMiddleware,
  getTaskController
);

router.put(
  "/:id",
  [
    param("id").exists().isInt().withMessage("invalid id").bail().toInt(),
    body("name").optional().isString().notEmpty().withMessage("invalid name"),
    body("userId")
      .optional()
      .isString()
      .notEmpty()
      .withMessage("invalid userId"),
    body("completed")
      .optional()
      .isBoolean()
      .withMessage("invalid completed")
      .bail()
      .toBoolean(),
    body("priority")
      .optional()
      .isInt({ gt: 0, lt: 6 })
      .withMessage("invalid priority"),
  ],
  validationResultMiddleware,
  updateTaskController
);

router.delete(
  "/:id",
  [param("id").exists().isInt().withMessage("invalid id").bail().toInt()],
  validationResultMiddleware,
  deleteTaskController
);

export default router;
