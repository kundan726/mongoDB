import express from 'express';
const router = express.Router();
import insertData from '../controller/aggregation.controller.js'

router.post('/insertData',insertData)

export default router;