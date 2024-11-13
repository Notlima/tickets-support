//Importa a const routes permitindo que as rotas definidas em index.js estejam disponiveis neste arquvo.
import { routes } from "../routes/index.js";

//Exporta a função routeHandler para ser utilizada em outros modulos. Essa função será usada para encontrar e processar a rota cprreta com base na requisição recebida 
export function routeHandler (req, res) {
  //Define a const route que armazena a rota correspondente a requisição atual. Utiliza o metodo .find para procurar no array uma rota que corresponda aos detalhes da req.  
  const route = routes.find((route) => {
    return route.method === req.method && route.path === req.url
    
  })

  if(route){
    //Chama o controlador da rota correspondente, passando a req e res, para que o controlador processe a req e envie uma res apropriada
    return route.controller({ req, res })
  }

  //Se nenhuma rota correspondente foi encontrada, essa linha responde com um erro 404, informando ao cliente que o recurso solicitado não existe.
  return res.writeHead(404).end()
}