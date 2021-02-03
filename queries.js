

////////////////////////////////////////////////////////////////////////////////////////////////
//Definiciones para configurar la conexión a la base de datos
const Pool = require('pg').Pool
const pool = new Pool({
  user: 'omkswcwktyaswf',
  host: 'ec2-35-175-155-248.compute-1.amazonaws.com',
  database: 'dej5umnr9j4v16',
  password: '7e2a31b6d1085c365b5725fc2b3d7ee0f8ac86266873b5e1ed94831a2c75a637',
  port: 5432,
  connectionTimeoutMillis : 30000,
  idleTimeoutMillis : 30000,
})

////////////////////////////////////////////////////////////////////////////////////////////////

//Metodo para obtener todos los items o tareas
const getListaTareas = (request, response) => {
  try {
    pool.query('SELECT id, titulo, detalle FROM tarea;', (error, results) => {
      if (error) {
        response.status(500).json(error)
      }
      response.status(200).json(results.rows)
    })
  } catch (error) {
    response.status(500).json(error)
  }
 
}


////////////////////////////////////////////////////////////////////////////////////////////////

const getProyectos = (request, response) => {
  try {
    pool.query('SELECT nombre, estimadas, dedicadas FROM proyecto;', (error, results) => {
      if (error) {
        response.status(500).json(error)
      }
      response.status(200).json(results.rows)
    })
  } catch (error) {
    response.status(500).json(error)
  }
 
}

////////////////////////////////////////////////////////////////////////////////////////////////

const historico = (request, response) => {
  try {
    pool.query('SELECT tarea, proyecto, fecha, horas FROM public.tarea_proyecto;', (error, results) => {
      if (error) {
        response.status(500).json(error)
      }
      response.status(200).json(results.rows)
    })
  } catch (error) {
    response.status(500).json(error)
  }
 
}



///////////////////////////////////////////////////////////////////////////////////////////

const tarea = (request, response) => {
  try {
    pool.query(`INSERT INTO public.tarea(id, titulo, detalle)
    VALUES (uuid_generate_v4(), $1, $2);`,[request.body.titulo,request.body.detalle], (error, results) => {
     if (error) {
       response.status(500).json(error)
     }
     response.status(201).json('realizado')
   })
  } catch (error) {
    response.status(500).json(error)
  }
 
}


///////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////

const proyecto = (request, response) => {
  try {
    pool.query(
      `INSERT INTO public.proyecto(nombre, estimadas, dedicadas) VALUES (upper($1), 0, 0);`,
      [request.body.nombre], (error, results) => {
      if (error) {
        response.status(500).json(error)
      }
      response.status(201).json('realizado')
    })
  } catch (error) {
    response.status(500).json(error)
  }
 
}


///////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////

const horas = (request, response) => {
  try {
    pool.query(`INSERT INTO tarea_proyecto(tarea, proyecto, fecha, horas) VALUES ($1, $2, $3, $4);`,
    [request.body.tarea,request.body.proyecto,request.body.fecha,request.body.horas]
    , (error, results) => {
    if (error) {
      response.status(500).json(error)
    }
    response.status(201).json('realizado')
  })
  } catch (error) {
    response.status(500).json(error)
  }

}


///////////////////////////////////////////////////////////////////////////////////////////////////


//Exportar los metodos getItems,createItem,modifyItem,deleteItem para utilizarlos en el index.js
module.exports = {
  getListaTareas,
  getProyectos,
  historico,
  tarea,
  proyecto,
  horas,
}