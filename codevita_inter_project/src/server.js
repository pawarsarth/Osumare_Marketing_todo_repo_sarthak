import dotenv from 'dotenv';
import cors from 'cors'
dotenv.config();


import app from './app.js';
import { connectDB } from './config/db.js';
app.use(cors({ origin: ['http://localhost:5000'] }));



connectDB();


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(` Server running on port ${PORT}`));