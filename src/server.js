'use strict';
const express = require('express');
const server = express();

const notFoundHandler = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');
const  validotermiddle=require('./middleware/validator');
const loggerMeddleware = require('./middleware/logger');

server.use(express.json());

server.use(loggerMeddleware);

//http://localhost:3005/
server.get('/',(req,res)=>{
    res.status(200).send('Iam working');
    })

  //query
  //http://localhost:3005/person?name=wijdan
    server.get('/person',validotermiddle,(req,res)=>{
        let info={
            name:req.query.name
         
        }
        res.status(200).json(info);
    })
     
   
    server.use(errorHandler);
    server.use('*', notFoundHandler);
module.exports = {
    server,
    start: port => {
        server.listen(port, () => console.log(`Iam working on port ${port}`));
    }
}
