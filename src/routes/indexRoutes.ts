//Importando router do Express
import { Router } from "express"

//Importando controller de index
import { IndexController } from "../controllers/IndexController"

//Instanciando router e controller associado ao grupo de rotas
const indexRouter : Router = Router()
const controller : IndexController = new IndexController

//Rotas/endpoints
indexRouter.get("/", controller.getIndexPage)
indexRouter.get("/login", controller.getLoginPage)
indexRouter.get("/cadastro", controller.getCadastroPage)

//Exportando grupo de rotas (utilizando diretiva 'export')
export = indexRouter