let tasks = [];

const getAllTasks = async () => {
  return tasks;
};

const getTaskById = async (id) => {
  return tasks.find((task) => task.id === parseInt(id));
};

const createTask = async ({ title, description }) => {
  const newTask = {
    id: tasks.length + 1,
    title,
    description,
    completed: false,
  };
  tasks.push(newTask);
  return newTask;
};

const updateTaskById = async (id, data) => {
  const taskIndex = tasks.findIndex((task) => task.id === parseInt(id));
  if (taskIndex === -1) return null;

  tasks[taskIndex] = { ...tasks[taskIndex], ...data };
  return tasks[taskIndex];
};

const deleteTaskById = async (id) => {
  const taskIndex = tasks.findIndex((task) => task.id === parseInt(id));
  if (taskIndex === -1) return null;

  const deletedTask = tasks[taskIndex];
  tasks.splice(taskIndex, 1);
  return deletedTask;
};

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTaskById,
  deleteTaskById,
};
