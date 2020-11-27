const medico = require("../models/medicoSchema.js");

class medicoController {


    async Cadastrar(req, res) {
        var crmMedico = req.body.crm;
        //console.log(nomeUsuario);
        var user = await medico.find({ crm: crmMedico });
        if (user[0] != null) {
            console.log("Não inseriu");
            return res.status(404).send("Cadastro já existe. Tente novamente.")
        } else {
            console.log("Inseriu");
            var resultado = await medico.create(req.body);
            return res.status(200).json(resultado);
        }
    }

    async Listar(req, res) {
        var result = await medico.find({}); //Find sem parâmetro para trazer todos
        return res.status(200).json(result);
    }
   
}

module.exports = new medicoController();