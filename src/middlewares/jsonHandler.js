//Função assincrona para tratar a solicitação
export async function jsonHandler(req, res){
  //Será usado para armazenar os chunks que chegam da requisição
  const buffers = []

  //Loop que aguarda e coleta cada parte dos dados chegando em req
  for await (const chunk of req){
    buffers.push(chunk)
  }

  try {
    //Pega todos os pedaços e combina em um só ue eh concatenado em uma string e convertido para JSON e  atribui esse obj ao body do req.
    req.body = JSON.parse(Buffer.concat(buffers).toString()) 
  } catch (error) {
    req.body = null
  }

  //Configura o cabeçalho da res para dizer que o conteudo que estamos enviando de volta é JSON
  res.setHeader("Content-type", "application/json")
}