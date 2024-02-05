//Importando Request e Reponse types do Express.
import { Request, Response } from "express"

//Criando e exportando classe IndexController (utilizando diretiva 'export class')
export class IndexController {
    getIndexPage(req : Request, res : Response) : void {
        res.send("<h3>Página Index</h3>")
    }

    getLoginPage(req : Request, res : Response) : void {
        res.send("<h3>Página de Login</h3>")
    }

    getCadastroPage(req : Request, res : Response) : void {
        res.send("<h3>Página de Cadastro</h3>")
    }
}