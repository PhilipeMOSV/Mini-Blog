var mongoose = require("mongoose");

var blogSchema = new mongoose.Schema({
    titulo: String,
    imagem: String,
    descricao: String
});

module.exports = mongoose.model("Blog", blogSchema);