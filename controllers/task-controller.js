const taskModel = require("../models/task-model");

const getAllTasks = async (req, res) => {
  try {
    const tasks = await taskModel.getAllTasks();
    if (!tasks || tasks.length === 0) {
      res.json({ message: "No tasks found" });
    } else {
      res.json(tasks);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching tasks" });
  }
};

const getTaskById = async (req, res) => {
  try {
    const task = await taskModel.getTaskById(req.params.id);
    if (!task) {
      res.status(404).json({ message: "Task not found" });
    } else {
      res.json(task);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching the task" });
  }
};

const createTask = async (req, res) => {
  try {
    const { title, description } = req.body;
    const newTask = await taskModel.createTask({ title, description });
    res.status(201).json(newTask);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error creating the task" });
  }
};

const updateTaskById = async (req, res) => {
  try {
    const updatedTask = await taskModel.updateTaskById(req.params.id, req.body);
    if (!updatedTask) {
      res.status(404).json({ message: "Task not found or not updated" });
    } else {
      res.json(updatedTask);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error updating the task" });
  }
};

const deleteTaskById = async (req, res) => {
  try {
    const deletedTask = await taskModel.deleteTaskById(req.params.id);
    if (!deletedTask) {
      res.status(404).json({ message: "Task not found or not deleted" });
    } else {
      res.json({ message: "Task deleted successfully" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error deleting the task" });
  }
};

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTaskById,
  deleteTaskById,
};
