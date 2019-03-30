var mongoose = require("mongoose");
var Blog = require("./models/blog");

var blogs = [
    {
        titulo: "Primeiro Blog",
        descricao: "Eu quis dolore magna amet fugiat dolor eiusmod. Do ea do officia culpa quis incididunt aliquip quis. Quis sunt aliqua irure magna amet enim minim ullamco excepteur qui pariatur. Enim labore fugiat ex dolore id ex. Ex est labore nisi amet ad sunt dolor consequat ipsum.Commodo deserunt occaecat ex proident do magna irure et non ipsum dolore.Ea proident aliqua deserunt in excepteur ut amet ea in magna ea exercitation.Aliquip id elit excepteur Lorem esse ex commodo eu sit officia quis anim. Excepteur reprehenderit occaecat officia sunt voluptate in aute.Non aute eu mollit consectetur ut incididunt sint sunt aliquip.Officia dolor ad elit ex exercitation duis.Magna officia excepteur commodo cupidatat aliquip.Voluptate fugiat labore do consequat et cillum est.Non consectetur incididunt sunt anim.",
        imagem: "https://images.unsplash.com/photo-1553531889-65d9c41c2609?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
    },
    {
        titulo: "Segundo Blog",
        descricao: "Eu quis dolore magna amet fugiat dolor eiusmod. Do ea do officia culpa quis incididunt aliquip quis. Quis sunt aliqua irure magna amet enim minim ullamco excepteur qui pariatur. Enim labore fugiat ex dolore id ex. Ex est labore nisi amet ad sunt dolor consequat ipsum.Commodo deserunt occaecat ex proident do magna irure et non ipsum dolore.Ea proident aliqua deserunt in excepteur ut amet ea in magna ea exercitation.Aliquip id elit excepteur Lorem esse ex commodo eu sit officia quis anim. Excepteur reprehenderit occaecat officia sunt voluptate in aute.Non aute eu mollit consectetur ut incididunt sint sunt aliquip.Officia dolor ad elit ex exercitation duis.Magna officia excepteur commodo cupidatat aliquip.Voluptate fugiat labore do consequat et cillum est.Non consectetur incididunt sunt anim.",
        imagem: "https://images.unsplash.com/photo-1536754870812-0679130712bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
    },
    {
        titulo: "Terceiro Blog",
        descricao: "Eu quis dolore magna amet fugiat dolor eiusmod. Do ea do officia culpa quis incididunt aliquip quis. Quis sunt aliqua irure magna amet enim minim ullamco excepteur qui pariatur. Enim labore fugiat ex dolore id ex. Ex est labore nisi amet ad sunt dolor consequat ipsum.Commodo deserunt occaecat ex proident do magna irure et non ipsum dolore.Ea proident aliqua deserunt in excepteur ut amet ea in magna ea exercitation.Aliquip id elit excepteur Lorem esse ex commodo eu sit officia quis anim. Excepteur reprehenderit occaecat officia sunt voluptate in aute.Non aute eu mollit consectetur ut incididunt sint sunt aliquip.Officia dolor ad elit ex exercitation duis.Magna officia excepteur commodo cupidatat aliquip.Voluptate fugiat labore do consequat et cillum est.Non consectetur incididunt sunt anim.",
        imagem: "https://images.unsplash.com/photo-1543750318-20ba09bfa90b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80"
    },
    {
        titulo: "Quarto Blog",
        descricao: "Eu quis dolore magna amet fugiat dolor eiusmod. Do ea do officia culpa quis incididunt aliquip quis. Quis sunt aliqua irure magna amet enim minim ullamco excepteur qui pariatur. Enim labore fugiat ex dolore id ex. Ex est labore nisi amet ad sunt dolor consequat ipsum.Commodo deserunt occaecat ex proident do magna irure et non ipsum dolore.Ea proident aliqua deserunt in excepteur ut amet ea in magna ea exercitation.Aliquip id elit excepteur Lorem esse ex commodo eu sit officia quis anim. Excepteur reprehenderit occaecat officia sunt voluptate in aute.Non aute eu mollit consectetur ut incididunt sint sunt aliquip.Officia dolor ad elit ex exercitation duis.Magna officia excepteur commodo cupidatat aliquip.Voluptate fugiat labore do consequat et cillum est.Non consectetur incididunt sunt anim.",
        imagem: "https://images.unsplash.com/photo-1548954547-a5402433c709?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
    },
    {
        titulo: "Quinto Blog",
        descricao: "Eu quis dolore magna amet fugiat dolor eiusmod. Do ea do officia culpa quis incididunt aliquip quis. Quis sunt aliqua irure magna amet enim minim ullamco excepteur qui pariatur. Enim labore fugiat ex dolore id ex. Ex est labore nisi amet ad sunt dolor consequat ipsum.Commodo deserunt occaecat ex proident do magna irure et non ipsum dolore.Ea proident aliqua deserunt in excepteur ut amet ea in magna ea exercitation.Aliquip id elit excepteur Lorem esse ex commodo eu sit officia quis anim. Excepteur reprehenderit occaecat officia sunt voluptate in aute.Non aute eu mollit consectetur ut incididunt sint sunt aliquip.Officia dolor ad elit ex exercitation duis.Magna officia excepteur commodo cupidatat aliquip.Voluptate fugiat labore do consequat et cillum est.Non consectetur incididunt sunt anim.",
        imagem: "https://images.unsplash.com/photo-1507296459426-2af5b6833a88?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
    },
    {
        titulo: "Sexto Blog",
        descricao: "Eu quis dolore magna amet fugiat dolor eiusmod. Do ea do officia culpa quis incididunt aliquip quis. Quis sunt aliqua irure magna amet enim minim ullamco excepteur qui pariatur. Enim labore fugiat ex dolore id ex. Ex est labore nisi amet ad sunt dolor consequat ipsum.Commodo deserunt occaecat ex proident do magna irure et non ipsum dolore.Ea proident aliqua deserunt in excepteur ut amet ea in magna ea exercitation.Aliquip id elit excepteur Lorem esse ex commodo eu sit officia quis anim. Excepteur reprehenderit occaecat officia sunt voluptate in aute.Non aute eu mollit consectetur ut incididunt sint sunt aliquip.Officia dolor ad elit ex exercitation duis.Magna officia excepteur commodo cupidatat aliquip.Voluptate fugiat labore do consequat et cillum est.Non consectetur incididunt sunt anim.",
        imagem: "https://images.unsplash.com/photo-1552404200-b22566b2317b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=332&q=80"
    }
]

function seedDB() {
    Blog.deleteMany({}, function (err) {
        if (err) console.log(err);
        console.log("removed blogs!");
        blogs.forEach(function (seed) {
            Blog.create(seed, function (err, blog) {
                if (err) console.log(err);
                else {
                    console.log("added blog");
                    blog.save();
                }
            })
        })
    })
}

module.exports = seedDB;