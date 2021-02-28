const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const users = require('./users-queries')
const tasks = require('./user-tasks-queries')
const port = 3000

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
})

app.get('/users', users.getUsers)
app.get('/users/:id', users.getUserById)
app.post('/users', users.createUser)
app.put('/users/:id', users.updateUser)
app.delete('/users/:id', users.deleteUser)

app.get('/tasks', tasks.getTasks)
app.get('/tasks/:id', tasks.getTaskById)
app.post('/tasks', tasks.createTask)
app.put('/tasks/:id', tasks.updateTask)
app.delete('/tasks/:id', tasks.deleteTask)

//userTable=id from table users

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})