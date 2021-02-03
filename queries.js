

////////////////////////////////////////////////////////////////////////////////////////////////
//Definiciones para configurar la conexión a la base de datos
const Pool = require('pg').Pool
const pool = new Pool({
  user: 'pdlezhayipuvic',
  host: 'ec2-3-215-118-246.compute-1.amazonaws.com',
  database: 'ddhf8npg10k0ik',
  password: 'd723f0b81f7208c113fa8c848335f8820ea798896f8228895c977ef575d96899',
  port: 5432,
})

////////////////////////////////////////////////////////////////////////////////////////////////

//Metodo para obtener todos los items o tareas
const getListaTareas = (request, response) => {

  pool.query('SELECT * FROM "TAREA"', (error, results) => {
    if (error) {
      process.stdout.write(error);
    }
    response.status(200).json(results.rows)
  })
}

////////////////////////////////////////////////////////////////////////////////////////////////

const getProyectos = (request, response) => {

  pool.query('SELECT * FROM "PROYECTO" ', (error, results) => {
    if (error) {
      process.stdout.write(error);
    }
    response.status(200).json(results.rows)
  })
}

////////////////////////////////////////////////////////////////////////////////////////////////





///////////////////////////////////////////////////////////////////////////////////////////




///////////////////////////////////////////////////////////////////////////////////////////////////




//Exportar los metodos getItems,createItem,modifyItem,deleteItem para utilizarlos en el index.js
module.exports = {
  getListaTareas,
  getProyectos,
}