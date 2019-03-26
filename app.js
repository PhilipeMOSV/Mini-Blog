var express = require("express");
var app = express();

app.set("view engine", "ejs");

var blogs = [
    {
        titulo: "Primeiro Blog",
        descricao: "Labore mollit quis eu sit. Tempor sint labore aute consequat ad reprehenderit officia id laborum. Ex excepteur proident id sunt. Aliquip proident adipisicing excepteur ullamco eiusmod quis et. Culpa occaecat aliquip deserunt incididunt est anim.",
        imagem: "https://images.unsplash.com/photo-1553325657-57b3ced42e4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    },
    {
        titulo: "Segundo Blog",
        descricao: "Labore mollit quis eu sit. Tempor sint labore aute consequat ad reprehenderit officia id laborum. Ex excepteur proident id sunt. Aliquip proident adipisicing excepteur ullamco eiusmod quis et. Culpa occaecat aliquip deserunt incididunt est anim.",
        imagem: "https://images.unsplash.com/photo-1553325657-57b3ced42e4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    },
    {
        titulo: "Terceiro Blog",
        descricao: "Labore mollit quis eu sit. Tempor sint labore aute consequat ad reprehenderit officia id laborum. Ex excepteur proident id sunt. Aliquip proident adipisicing excepteur ullamco eiusmod quis et. Culpa occaecat aliquip deserunt incididunt est anim.",
        imagem: "https://images.unsplash.com/photo-1553325657-57b3ced42e4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    }
]

//ROTAS RESTFUL

app.get("/", function(req, res) {
    res.redirect("/blogs");
});

app.get("/blogs", function(req, res) {
    res.render("index", {blogs: blogs});
});

app.get("/blogs/novo", function(req, res) {
    res.render("novo");
});

app.listen(3000, function() {
    console.log("Serven Online...");
});