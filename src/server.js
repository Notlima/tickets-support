//Importa HTTP do node
import http from "node:http"

//Função que executa a requisição e a resposta para o servidor
function listener(req, res) {

}

//Cria o servidor executando a função listener e define a porta utilizada
http.createServer(listener).listen(3333)

