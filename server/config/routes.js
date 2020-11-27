const express = require("express");
const router = express.Router();
const medicoController = require("../controllers/medicoController.js");


//router.get("/", usuarioController.Get);
router.post("/medico/cadastrar", medicoController.Cadastrar);
router.get("/medico/listar", medicoController.Listar);

module.exports = router;