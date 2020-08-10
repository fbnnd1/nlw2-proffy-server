import express from 'express';
import cors from 'cors';

import routes  from './route';

const app = express();

app.use(cors())

app.use(express.json());

app.use(routes);

/*
NOTAS IMPORTANTES
GET: Busca ou lista informações
POST: Cria alguma nova informação
PUT: Atualiza informação existente
DELETE: Deleta informação existente

Parâmetros

request.body: 
Route Parans: Identificar qual recurso quero atualizar ou deletar
Query Parans: 

//request.body
//request.params
//request.query

*/



app.listen(8080);

//console.log("Oi");