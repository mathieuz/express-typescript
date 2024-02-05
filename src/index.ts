//Importando módulos, seus types e interfaces.
import express, { Request, Response, Express } from "express"
import dotenv from "dotenv"

dotenv.config() //Configurando .env

//Importando grupo de rotas
import indexRouter from "./routes/indexRoutes"

//Inicializando Express + Configurações
const app : Express = express()

app.use(express.urlencoded({extended: true})) //Body Parser
app.use(express.json())                       //JSON Parser

//Definindo rotas e endpoints
app.use("/", indexRouter)

//Subindo servidor
const PORT : number = Number(process.env.PORT) || 5467,
      HOST : string = process.env.HOST || "localhost"

app.listen(PORT, HOST, () => {
    console.log(`[server] '${HOST}:${PORT}/'`)
    console.log(`[server] '${HOST}:${PORT}/login'`)
    console.log(`[server] '${HOST}:${PORT}/cadastro'`)
})