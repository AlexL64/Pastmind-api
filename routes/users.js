import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const router = express.Router();
const KEY = process.env.API_KEY;

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