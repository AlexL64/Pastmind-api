import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const router = express.Router();
const KEY = process.env.API_KEY;

const reminder = [
    {
        id: "1",
        Title: "test",
        Message: "This is a test",
        ReminderDate: "01/01/2023",
        Receiver: "test@test.test"
    }
];

router.get('/', (req, res) => {

    res.send(reminder);
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