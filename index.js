import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import usersRoutes from './routes/users.js';
import reminderRoutes from './routes/reminder.js';
import authRoutes from './routes/auth.js';

dotenv.config();
const app = express();
const PORT = process.env.API_PORT;

app.use(bodyParser.json());

//Routes
app.use('/users', usersRoutes);
app.use('/reminder', reminderRoutes);
app.use('/auth', authRoutes);



app.get('/', (req, res) => { res.send('Hello from homepage'); });

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));