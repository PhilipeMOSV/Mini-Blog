var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var expressSanitizer = require("express-sanitizer");
var Blog = require("./models/blog");
var seedDB = require("./seed");

var app = express();

mongoose.connect("mongodb://localhost:27017/restful_blog_app", {useNewUrlParser: true});
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressSanitizer());
seedDB();

//ROTAS RESTFUL

app.get("/", function(req, res) {
    res.redirect("/blogs");
});

app.get("/blogs", function(req, res) {
    Blog.find({}, function(err, blogs) {
        if(err) console.log(err);
        else {
            res.render("index", {blogs: blogs});
        }
    });
});

// Criar
app.get("/blogs/novo", function(req, res) {
    res.render("novo");
});

app.post("/blogs", function(req, res) {
    req.body.blog.descricao = req.sanitize(req.body.blog.descricao);
    Blog.create(req.body.blog, function(err, novoBlog) {
        if(err) console.log(err);
        else {
            res.redirect("/blogs");
        }
    })
});

// Exibir
app.get("/blogs/:id", function(req, res) {
    Blog.findById(req.params.id, function(err, blog){
        if(err) res.redirect("/blogs");
        else {
            res.render("exibir", {blog: blog});
        }
    })
});

// Editar
// app.get("/blogs/:id/editar", function(req, res){
//     Blog.findById(req.params.id, function(err, blog){
//         if(err) console.log(err);
//         else {
//             res.render("editar", {blog: blog});
//         }
//     });
// });

app.listen(3000, function() {
    console.log("Server Online...");
});