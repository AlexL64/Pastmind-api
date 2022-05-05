import express from 'express';
import dotenv from 'dotenv';
import emailValidator from 'email-validator';
dotenv.config();

const router = express.Router();
const KEY = process.env.API_KEY;

router.post('/', (req, res) => {

    if(req.query.key != KEY){
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