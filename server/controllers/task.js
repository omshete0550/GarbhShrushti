import Task from "../models/Task.js"

export const createTask = async (req, res, next) => {
    const newTask = new Task(req.body)
    try {
        const savedTask = await newTask.save()
        res.status(201).json(savedTask)
    } catch (error) {
        next(error)
    }
}

export const updateTask = async (req, res, next) => {
    try {
        const updatedTask = await Task.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );
        res.status(200).json(updatedTask);
    } catch (err) {
        next(err);
    }
}

export const deleteTask = async (req, res, next) => {
    const TaskId = req.params.id
    try {
        await Task.findByIdAndDelete(TaskId);
        res.status(200).json("Task has been deleted.");
    } catch (err) {
        next(err);
    }
};

export const getTask = async (req, res, next) => {
    try {
        const task = await Task.findById(req.params.id);
        res.status(200).json(task);
    } catch (err) {
        next(err);
    }
};

export const getTasks = async (req, res, next) => {
    try {
        const allTasks = await Task.find()
        res.status(200).json(allTasks)
    } catch (err) {
        next(err);
    }
};
