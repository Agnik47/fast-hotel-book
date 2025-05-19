import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import connectDB from './config/db.js';
import { clerkMiddleware } from '@clerk/express'
import clerkWebhooks from './controllers/clearkWebhook.js';

const app = express();
connectDB();

//! Middle wares
app.use(cors());
app.use(express.json()); // Parse incoming JSON
app.use(clerkMiddleware());


app.use("/api/clerk", clerkWebhooks);
app.get('/', (req, res) => {
    res.send("API is working");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
