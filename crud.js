const { v4: uuidv4 } = require('uuid');
const crypto = require('crypto')

tasks = [];

const uuidNumber = () => {
    const uuid = uuidv4();
    let uuidNum = (parseInt(uuid.replace(/-/g, ''), 16) % 80000) + 1;
    return crypto.randomInt(uuidNum)
}

const getTasks = (req, res) => {
    res.json(tasks)
}

const createTask = (req, res) => {
    const { title, description } = req.body
    let id = uuidNumber()
    const index = tasks.findIndex((task) => task.id === id)
    if (index !== -1) {
        return res.status(400).send("Task already exist")
    }
    tasks.push({ id, title, description })
    res.json(tasks)
}

const updateTask = (req, res) => {
    const id = req.params.id
    const { title, description } = req.body
    const task = tasks.find((t) => t.id == id)

    if (task) {
        task.title = title
        task.description = description
    }
    else {
        return res.status(400).send("Task not found")
    }
    res.json(tasks)
}

const deleteTask = (req, res) => {
    const id = req.params.id
    const task = tasks.find((task) => task.id == id)
    if (!task) {
        return res.status(400).send("Task not found")
    }
    tasks = tasks.filter((task) => task.id != id)
    res.json(tasks)

}

const getTaskById = (req, res) => {
    const id = req.params.id
    const task = tasks.filter((task) => task.id == id)
    res.json(task)
}

module.exports = {
    getTasks,
    createTask,
    updateTask,
    deleteTask,
    getTaskById
}