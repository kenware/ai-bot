import express from 'express';
import VisitorController from '../controller/visitor';
import VisitorMiddleware from '../middleware/visitor';

const router = express.Router();

router.post('/message',
VisitorMiddleware.validate,
VisitorController.message)

export default router;
