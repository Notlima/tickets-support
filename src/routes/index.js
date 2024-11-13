//Importa a const tickets do arquivo tickets
import { tickets } from "./tickets.js";
import { parseRoutePath } from "../utils/parseRoutePath.js";

//Exporta a constante routes como um array copianto todos os elementos de tickets
export const routes = [...tickets].map((route) => ({
  ...route,
  path: parseRoutePath(route.path),
}))