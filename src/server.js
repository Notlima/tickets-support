//Importa HTTP do node
import http from "node:http"

//Importa a unção jsonHandler do arquivo para ser usado aqui
import { jsonHandler } from "./middlewares/jsonHandler.js"
import { routeHandler } from "./middlewares/routeHandler.js"

//Função que executa a requisição e a resposta para o servidor
async function listener(req, res) {
  await jsonHandler(req, res)
  routeHandler(req, res)
}

//Cria o servidor executando a função listener e define a porta utilizada
http.createServer(listener).listen(3333)

