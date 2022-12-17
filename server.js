// importa Express.js (um framework para Node.js que fornece recursos mínimos para construção de servidores web)
const express = require("express");

// Biblioteca que vem com o node, referencia o caminho dos arquivos
const path = require("path");

// porta do servidor
const port = 3333;

// declaração de caminho inicial
let initialPath = path.join(__dirname, "public");

// declaração de instância de servidor
let app = express()

// criar um servidor estático que vai servir o que está na pasta public
app.use(express.static(initialPath));

// para acessar o conteúdo, tem que falar para a aplicação qua é a porta de entrada
app.get("/", (req, res)=> {
    // passando para o servidor que se for chamado e não tiver nada depois da barra, manda uma resposta enviando o arquivo abaixo
    res.sendFile(path.join(initialPath, "index.html"))
});

// iniciar o servidor
app.listen(port, ()=> {
    console.log(`Server start up on port ${port}!`)
});