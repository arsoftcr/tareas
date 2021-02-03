////////////////////////////////////////////////////////////////////////////////////////////////
const express = require('express')//Declaracion de framework de express para node
const bodyParser = require('body-parser')//Declaracion de body parser en funcion de los payloads 
const app = express()
const db = require('./queries')//Utilizar metodos de queries.js
const port = process.env.PORT || 3000;//Declaracion de Puerto para produccion


////////////////////////////////////////////////////////////////////////////////////////////////
//Configuraciones de express...
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

////////////////////////////////////////////////////////////////////////////////////////////////
//Definicion de ruta inicial
app.get('/', (request, response) => {
  response.json({ info: 'Tareas' })
})


////////////////////////////////////////////////////////////////////////////////////////////////
//Definicion de endpoints
app.get('/tareas/list', db.getListaTareas)

app.get('/proyectos/list', db.getProyectos)

app.get('/historico', db.historico)

app.post('/tareas/crear', db.tarea)

app.post('/proyectos/crear', db.proyecto)

app.post('/registro/horas', db.horas)
////////////////////////////////////////////////////////////////////////////////////////////////
//Escuchar en el puerto ....
app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})

////////////////////////////////////////////////////////////////////////////////////////////////