//Importa o módulo de sistema de arquivos com a funcionalidade de promises, que permite ler e gravar arquivos de forma assincrona.
import fs from "node:fs/promises"

//cria um caminho absoluto para o arquivo db.json, utilizando o local do arquivo atual. 
const DATABASE_PATH = new URL("db.json", import.meta.url)


//Definie e exporta uma classe que representa o banco de dados da app
export class Database {
  //Declara uma propriedade privada como um objeto vazio. 
  #database = {}

  //Definie o construtor da classe Database, que será executado ao criar uma nova instancia da classe carregando o contudo de db.json na propriedade #database. 
  constructor() {
    //Tenta ler o contudo do arquivo db.json de forma assincrona, especificando a codificação "utf-8" para garantir que o conteúdo seja lido como texto legível. 
    fs.readFile(DATABASE_PATH, "utf8")
    //Define o que fazer se a leitura do arquivo for bem sucedida, 
    .then((data) => {
      //Converte o conteudo do arquivo json para um objeto JS e armazena o resultado em this.#database para manipulação futura.      
      this.#database = JSON.parse(data)
    })
    //Define o que fazer se ocorrer um erro ao ler o arquivo. 
    .catch(() => {
      //chama o metodo para criar o arquivo db.json vazio e salvá-lo
      this.#persist()
    })
  }

  //Define um metodo provado que grava o conteúdo atual de #database em db,json
  #persist(){
    //Grava os dados de forma assincrona convertendo o conteudo de #database de objeto para string  antes de gravar no arquivo
    fs.writeFile(DATABASE_PATH, JSON.stringify(this.#database))
  }

  //Define um metodo publico que insere novos dados em um tabela do #database
  insert(table, data){
    //Verifica se a tabela especificada já existe e é um array.
    if(Array.isArray(this.#database[table])){
      //Add o novo dado ao array da tabela.
      this.#database[table].push(data)
    }else {
      //Se a tabela não existe cria como um novo array contendo data.
      this.#database[table] = [data]
    }

    //Salva os daods atualizados no db.json
    this.#persist()

    }

  select(table, filters){
    let data = this.#database[table] ?? []

    if(filters){
      data = data.filter((row) => {
        return Object.entries(filters).some(([key, value]) => {
          return row[key].toLowerCase().includes(value.toLowerCase())
        })
      
       
      })

    }
    return data

  }
}