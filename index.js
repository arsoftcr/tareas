////////////////////////////////////////////////////////////////////////////////////////////////
const express = require('express')//Declaracion de framework de express para node
const bodyParser = require('body-parser')//Declaracion de body parser en funcion de los payloads 
const app = express()
const db = require('./queries')//Utilizar metodos de queries.js
const port = 3000||process.env.PORT//Declaracion de Puerto para produccion


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

//app.get('/tareas/crear', db.getProvincias)

//app.get('proyectos/crear', db.getCantones)

//app.get('registro/horas', db.getDistritos)

//app.get('historico', db.getBarrios)

////////////////////////////////////////////////////////////////////////////////////////////////
//Escuchar en el puerto ....
app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})

////////////////////////////////////////////////////////////////////////////////////////////////