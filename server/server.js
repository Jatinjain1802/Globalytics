import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import contactRoutes from './routes/contactRoutes.js';


const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Request Logging
app.use((req, res, next) => {
    console.log(` [${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
});

// Routes
app.use('/api', contactRoutes);

// Enhanced Health Check
app.get('/health', (req, res) => {
    res.status(200).json({
        status: 'UP',
        timestamp: new Date().toISOString(),
        uptime: process.uptime(),
        environment: process.env.NODE_ENV || 'development'
    });
});

// Global Error Handler
app.use((err, req, res, next) => {
    console.error(' [Fatal] Unhandled Error:', err.stack);
    res.status(500).json({ error: 'Internal Server Error' });
});

app.listen(PORT, () => {
    console.log('--------------------------------------------------');
    console.log(` SERVER STARTUP: SUCCESS`);
    console.log(` URL: http://localhost:${PORT}`);
    console.log(` MODE: ${process.env.NODE_ENV || 'development'}`);
    console.log(` TIME: ${new Date().toLocaleString()}`);
    console.log('--------------------------------------------------');
});
