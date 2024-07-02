const express = require("express");
const { getTasks, createTask, updateTask, deleteTask, getTaskById } = require('./crud')

const router = express.Router();

router.get("/", getTasks);

router.get("/getById/:id", getTaskById);

router.post("/newTask", createTask);

router.put("/updateTask/:id", updateTask)

router.delete("/deleteTask/:id", deleteTask)


module.exports = router;