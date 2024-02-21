import createError from "http-errors";
import { createUser, getUser, login } from "./services.js";

export const createUserController = async (req, res, next) => {
  try {
    const data = await createUser(req.body);
    res.send({
      success: true,
      data,
    });
  } catch (e) {
    next(createError(e));
  }
};

export const loginController = async (req, res, next) => {
  try {
    const data = await login(req.body.username);
    res.send({
      success: true,
      data,
    });
  } catch (e) {
    next(createError(e));
  }
};
export const getUserController = async (req, res, next) => {
  try {
    const data = await getUser(req.params.id);

    res.send({
      success: true,
      data,
    });
  } catch (e) {
    next(createError(e));
  }
};
