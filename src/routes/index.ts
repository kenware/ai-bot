import express from 'express';
import visitorRoute from './visitor'

const router = express.Router();

router.get('/health', (req, res) => res.status(200).json('server is running'));
router.use('/visitor', visitorRoute)

export default router;
