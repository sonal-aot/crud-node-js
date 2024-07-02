const express = require('express');
const router = require('./Router');

const app = express();
app.use(express.json())
const port = 3000

app.use(router);


// app.get("/", getTasks)
// app.post("/", createTask)
// app.put("/:id", updateTask)
// app.delete("/:id", deleteTask)
// app.get("/:id", getTaskById)


app.listen(port, () => {
    console.log(`Server Running...../////`)
})