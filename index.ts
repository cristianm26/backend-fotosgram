import Server from "./classes/server";
import mongoose from 'mongoose';
import userRoutes from './routes/usuarioroutes';
import express from 'express';
import morgan from 'morgan'
const server = new Server();

// Lectura y parseo del body
server.app.use(express.json());
//Utilizar morgan
server.app.use(morgan('dev'));
//Rutas de mi aplicacion
server.app.use('/user' ,userRoutes )

//Conectar la base de Datos de MongoDB
mongoose.connect('mongodb://localhost:27017/fotosgram', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  },
  (err)=>{
      if (err) throw err ;
          console.log('Base de Datos Online')
     
  }
  
  )
//Levantar Express
server.start(()=>{
    console.log(`Servidor corriendo en el pueto ${server.port}`)
})