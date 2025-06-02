const express = require('express');
const app = express();

app.get("/",function(req,res){
    res.send("Ola mundo")
});

app.get("/sobre",function(req,res){
    res.send("Minha pagina do cassete")
});

app.get("/contato",function(req,res){
    res.send("Minha pagina de contato")
});

app.get("/ola/:nome/:sobrenome/:cor",function(req,res){
    res.send("<h1>Ola " + req.params.nome + " " + req.params.sobrenome + req.params.cor +"</h1>");
});





app.listen(8081,function(){
    console.log("O servidor esta rodando na url http://localhost:8081")
})