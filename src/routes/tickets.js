import { create } from "../controllers/tickets/create.js"
import { list } from "../controllers/tickets/list.js"
import { update } from "../controllers/tickets/update.js"
import { updateStatus } from "../controllers/tickets/updateStatus.js"

//Exporta a constante tickets para ser utilizada em outros modulos que a importem
export const tickets = [ 
  {
    //Define o metodo HTTP como POST. 
    method: "POST",
    //Deine a URL da rota
    path: "/tickets",
    //Função que controla a resposta da rota com a req e res
    controller: create,
  },
  {
    //Define o metodo HTTP como GET. 
    method: "GET",
    //Define a URL da rota
    path: "/tickets",
    //Função que controla a resposta da rota com a req e res
    controller: list,
  },
  {
    //Define o metodo HTTP como GET. 
    method: "PUT",
    //Define a URL da rota
    path: "/tickets/:id",
    //Função que controla a resposta da rota com a req e res
    controller: update,
  },
  {
    //Define o metodo HTTP como GET. 
    method: "PATCH",
    //Define a URL da rota
    path: "/tickets/:id/close",
    //Função que controla a resposta da rota com a req e res
    controller: updateStatus,
  },
]