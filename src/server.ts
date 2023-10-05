import express, { response } from 'express';
import dotenv from 'dotenv';
import mustache from 'mustache-express';
import path from 'path';
import mainroutes from '../src/routes/index';

dotenv.config();

const server = express();
server.set('view engine','mustache');
server.set('views',path.join(__dirname,'views'));
server.engine('mustache',mustache());
server.use(express.static(path.join(__dirname,'../public')));


/* Rotas */
server.use(mainroutes);
server.use((request,response)=>{response.render('pages/404')});


/* Servidor rodando */
server.listen(4000);