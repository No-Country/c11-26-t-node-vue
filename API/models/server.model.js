const express = require('express');
const cors = require('cors');
const { db } = require('../databases/db');

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    //Path Routes
    this.paths = {
      
    };

    //Connect to db
    this.database();

    //Middlewares
    this.middlewares();

    //Routes
    this.routes();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
    //Directorio publico
    this.app.use(express.static('public'));
  }

  routes() {
    
  }
  async database() {
    await db();
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log('Server Running On Port', this.port);
    });
  }
}

module.exports = Server;