import 'dotenv/config'; // Must be the very first import
import express from 'express';
import helmet from 'helmet';
import { router } from './routes/index.js';
// import { errorHandler } from './middleware/errorHandler.js';
const app = express();

// Security headers
app.use(helmet());

// Parse incoming JSON bodies
app.use(express.json());

// Mount the router under /api
app.use('/api', router);

// Global error handler — must be last
// app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
 console.log(`Server running on port ${PORT}`);
});
