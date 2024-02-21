import express from "express";
import tasksRouter from "./src/tasks/routers.js";
import usersRouter from "./src/users/routers.js";

// create express instance
const app = express();
// extract json body
app.use(express.json());
// call router

app.use("/tasks", tasksRouter);
app.use("/users", usersRouter);

app.use(async (error, req, res, next) => {
  let statusCode = error.statusCode || 500;
  if (error.code === "P2025") {
    statusCode = 404;
    error.statusCode = 404;
  }
  res.status(statusCode || 500).send({
    status: false,
    message: error.message,
    stack: error.stack,
    statusCode: error.statusCode,
    errors: error.errors,
  });
});

// listen to port
app.listen(3000, () =>
  console.log(`🚀 Server ready at: http://localhost:3000`)
);
