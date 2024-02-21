import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createTask = async (data) => {
  return await prisma.task.create({
    data,
  });
};

// export const getTasks = async (filters) => {
//   return await prisma.task.findMany({
//     where: +filters.id,
//   });
// };
export const getTasks = async (filters) => {
  if (filters && Object.keys(filters).length > 0) {
    console.log(filters);
    return await prisma.task.findMany({
      where: {
        ...filters,
        id: +filters.id,
      },
    });
  }
  return await prisma.task.findMany();
};
export const getTask = async (id) => {
  return await prisma.task.findUnique({
    where: {
      id,
    },
  });
};

export const updateTask = async (id, data) => {
  return await prisma.task.update({
    where: {
      id,
    },
    data,
  });
};

// export const updateTask = async (id, {id: _, ...data}) => {
//   return await prisma.task.update({
//     where: {
//       id,
//     },
//     data,
//   });
// };

export const deleteTask = async (id) => {
  return await prisma.task.delete({
    where: {
      id,
    },
  });
};
