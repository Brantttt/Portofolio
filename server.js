require("dotenv").config();

const express = require("express");
const cors = require("cors");
const session = require("express-session");
const bcrypt = require("bcryptjs");
const pool = require("./db.js");
const app = express();

const listOrigins = [
    "http://localhost:5501", // ambiente local live server
    "http://127.0.0.1:5501", // variação de localhost
    "https://Brantttt.github.io" 
]

app.use(cors({
    origin:listOrigins,
    credentials:true,
    methods: ['GET','POST','PUT','DELETE','OPTIONS'],
    allowedHeaders: ["Content-Type","Authorization"]
}))

app.use(express.json());

const sessionConfig = {
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUnitialized: false,
    name: "portofolio.sid",
    cookie: {
        httpOnly : true,
        maxAge: 1000 * 60 * 60
    }
}

if(process.env.NODE_ENV == "production"){
    app.set("trust proxy", 1),
    sessionConfig.cookie.sameSite = "none",
    sessionConfig.cookie.secure = true
} else{
    sessionConfig.cookie.sameSite = "lax",
    sessionConfig.cookie.secure = false
}

const express = require('express');
const db = require('./db');

app.use(express.json());

// Adaptando a rota com Async/Await e Banco de Dados
app.post('/mensagem', async (req, res) => {
    const { nome, email, mensagem } = req.body;

    if (!nome || !email || !mensagem) {
        return res.status(400).json({ erro: "Todos os campos são obrigatórios." });
    }

    try {
        const sql = "INSERT INTO contatos (nome, email, mensagem) VALUES (?, ?, ?)";
        await db.query(sql, [nome, email, mensagem]); // Inserção real (3.6)
        
        res.status(201).json({ status: "sucesso", msg: "Mensagem enviada com sucesso!" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ status: "erro", msg: "Erro ao salvar no banco." });
    }
});

app.listen(3000, () => console.log("Servidor rodando na porta 3000"));

app.use(session(sessionConfig))