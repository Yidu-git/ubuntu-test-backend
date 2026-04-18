import { Router } from 'express';
import { getHealth } from '../controllers/health.js';

export const router = Router();

router.get('/health', getHealth);
