
import express from 'express';
import cors from 'cors';
import { IndexRoutes } from './app/routes';


const app = express();


// Middleware

app.use(cors());

app.use(express.json());


// Main Api Route

app.use('/api', IndexRoutes);


// Test Route

app.get('/', (req, res) => {
    res.send('Library API is running');
});

export default app;