import express from 'express';
import dotenv from 'dotenv';
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
        console.log(req.body.password);
        res.send(req.body);
    }
});

export default router;