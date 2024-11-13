import { create } from "../controllers/tickets/create.js"

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
]