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

app.use(session(sessionConfig))