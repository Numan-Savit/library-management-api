import express from 'express';
import { borrowBookHandler, getBorrowSummaryHandler } from './borrow.controller';

const router = express.Router();

router.post('/', borrowBookHandler);

router.get('/', getBorrowSummaryHandler);


export const BorrowRoutes = router;