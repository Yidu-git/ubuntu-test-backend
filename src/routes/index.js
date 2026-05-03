import { Router } from 'express';
import { getHealth } from '../controllers/health.js';

export const router = Router();

router.get('/health', getHealth);
router.get('/users', (req, res) => {
 res.json({ message: 'List of users would go here' });
});
router.get("/test", (req, res) => {
 res.json({ message: "Test route is working!" });
});