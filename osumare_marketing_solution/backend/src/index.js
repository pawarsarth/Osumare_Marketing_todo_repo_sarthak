import express from 'express'
let count = 0;
let todo = [
]

const app = express()
app.use(express.json())

app.post("/create/tasks", (req, res) => {

    try {

        const { task } = req.body;
        todo.push({ id: count++, task: task })
        res.status(200).json({
            message: "ask added done here"
        })

    }
    catch (e) {
        res.status(400).json({
            message: "error while adding task",

        })
    }
})

app.get('/tasks', (req, res) => {

    try {
        res.status(200).json({
            task: todo
        })
    }
    catch (e) {
        res.json({
            message: "eror",
            error: e.error
        })
    }
})

app.get('/tasks/:id', (req, res) => {

    try {
        const id = req.params.id;


        const task1 = todo.filter(task => task.id == id);

        if (task1.length === 0) {
            return res.status(404).json({
                task: []
            });
        }

        res.status(200).json({
            task: task1
        });
    }
    catch (e) {
        res.status(500).json({
            error: e.message
        });
    }

})

app.put('/tasks/:id', (req, res) => {
    try {
        const id = req.params.id;
        const newTask = req.body.task;


        const taskToUpdate = todo.find(task => task.id == id);


        if (!taskToUpdate) {
            return res.status(404).json({
                message: "Task not found"
            });
        }


        taskToUpdate.task = newTask;

        res.status(200).json({
            message: "Task updated successfully",
            updatedTask: taskToUpdate
        });
    }
    catch (e) {
        res.status(500).json({
            message: "Error updating task",
            error: e.message
        });
    }
});


app.delete('/task/:id', (req, res) => {
    try {
        const id = req.params.id;


        const index = todo.findIndex(item => item.id == id);

        if (index === -1) {
            return res.status(404).json({ message: "Task not found" });
        }

        const deletedTask = todo.splice(index, 1);

        return res.status(200).json({
            message: "Task deleted",
            deleted: deletedTask[0]
        });

    } catch (e) {
        return res.status(500).json({
            message: "Something went wrong",
            error: e.message
        });
    }
});




app.listen(3000)

