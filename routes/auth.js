import express from 'express';
import dotenv from 'dotenv';
import emailValidator from 'email-validator';
import mysql from 'mysql';
dotenv.config();

const router = express.Router();
const API_KEY = process.env.API_KEY;
const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;

var db = mysql.createConnection({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_DATABASE
  });

router.post('/', (req, res) => {

    if(req.query.key != API_KEY){
        res.send({
            status: "Error",
            error: "Unknown api key"
        })
    }else{
        var password = req.body.password;
        var login = req.body.login;

        if(emailValidator.validate(login)){
            var status = checkIdentity("email", login, password);

        }else{
            var status = checkIdentity("username", login, password);
        }
    }
});

export default router;