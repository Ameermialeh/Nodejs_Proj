import createError from "http-errors";
import {
  createTask,
  deleteTask,
  getTask,
  getTasks,
  updateTask,
} from "./services.js";

export const createTaskController = async (req, res, next) => {
  try {
    const data = await createTask({
      ...req.body,
    });
    res.send({
      success: true,
      data,
    });
  } catch (e) {
    next(createError(e));
  }
};

export const getTasksController = async (req, res, next) => {
  try {
    const data = await getTasks(req.query);
    res.send({
      success: true,
      data,
    });
  } catch (e) {
    next(createError(e));
  }
};

export const getTaskController = async (req, res, next) => {
  try {
    const data = await getTask(req.params.id);
    res.send({
      success: true,
      data,
    });
  } catch (e) {
    // async errors handling will be introduced in express 5
    next(createError(e));
  }
};

export const updateTaskController = async (req, res, next) => {
  try {
    const data = await updateTask(req.params.id, req.body);
    res.send({
      success: true,
      data,
    });
  } catch (e) {
    next(createError(e));
  }
};

export const deleteTaskController = async (req, res, next) => {
  try {
    const data = await deleteTask(req.params.id);
    res.send({
      success: true,
      data,
    });
  } catch (e) {
    next(createError(e));
  }
};
