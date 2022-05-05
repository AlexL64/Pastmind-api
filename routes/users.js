import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const router = express.Router();
const KEY = process.env.API_KEY;

const users = [
    {
        username: "AlexL64",
        email: "alex.lucarin@gmail.com",
        password: "test"
    }
];

router.get('/', (req, res) => {
    console.log(users);
    res.send(users);
});


router.post('/', (req, res) => {

    if(req.query.key != KEY){
        res.send({
            status: "Error",
            error: "Unknown api key"
        })
        
    }else{
        res.send(req.body)
    }
});

export default router;