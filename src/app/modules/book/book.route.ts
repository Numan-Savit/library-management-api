
import express from "express";
import { BookController } from "./book.controller";

const router = express.Router();


router.post('/', BookController.createBookHandler)


router.get('/', BookController.getAllBooksHandler);


router.get('/:bookId', async (req, res) => {
  await BookController.getBookByIdHandler(req, res);
});


router.put('/:bookId', async (req, res) => {
  await BookController.updateBookHandler(req, res);
});


router.delete('/:bookId', async (req, res) => {
  await BookController.deleteBookHandler(req, res);
});



export const BookRoutes = router;