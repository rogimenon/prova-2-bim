const mongoose = require("mongoose");

const medicoSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: [true, "O campo usuario é obrigatório."]
    },
    crm: {
        type: String,
        required: [true, "O campo nome é obrigatório."]
    },
    especialidade: {
        type: String,
        required: [true, "O campo CPF é obrigatório."]
    },
    criadoEm: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("medicos", medicoSchema);