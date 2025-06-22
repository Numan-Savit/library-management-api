import { Request, Response } from "express";
import { BookService } from "./book.service";

const createBookHandler = async (req : Request, res : Response) => {

    try {

        const result = await BookService.createBook(req.body);
         
        res.status(201).json({
            success : true,
            message : "Book created successfully",
            data : result
        })
        
    } catch (error) {
        res.status(400).json({
            success : false,
            message : "Failed to create book",
            error: error
        });
    }
};


const getAllBooksHandler = async (req : Request, res : Response) => {

    try {
        const { filter, sortBy, sort, limit } = req.query;

        const books = await BookService.getAllBooks (
            filter as string,
            (sortBy as string) || 'createdAt',
            (sort as 'asc' | 'desc') || 'desc',
            Number(limit) || 10
        );
        res.status(200).json({
            success: true,
            message: "Books retrieved successfully",
            data: books
        });
    }catch (error : any) {
        res.status(400).json({
            success: false,
            message: "Failed to retrieve books",
            error: error
        });
    }
};



const getBookByIdHandler = async (req : Request, res : Response) => {
    try {

        const { bookId } = req.params;
        const result =  await BookService.getBookById(bookId);

        if (!result) {
            return res.status(404).json({
                success: false,
                message: "Book not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Book retrieved successfully",
            data: result
        });

    }catch (error : any) {
        res.status(400).json({
            success: false,
            message: "Failed to retrieve book",
            error: error.message
        });
    }
};


// update

const updateBookHandler = async (req : Request, res : Response) => {

    try{

        const { bookId } = req.params;
        const updated = await BookService.updateBook(bookId, req.body);

        if (!updated){
            return res.status(404).json({
                success: false,
                message: "Book not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Book updated successfully",
            data: updated
        });

    }catch(error : any){

        res.status(400).json({
            success: false,
            message: "Failed to update book",
            error: error.message
        });

    }
};


// delete

const deleteBookHandler = async (req : Request, res : Response) => {

    try {

        const { bookId } = req.params;
        const deleted = await BookService.deleteBook(bookId);

        if (!deleted){
            return res.status(404).json({
                success: false,
                message: "Book not found"
            });
        }
        res.status(200).json({
            success: true,
            message: "Book deleted successfully",
            data: deleted
        });

    }catch (error : any) {
        res.status(400).json({
            success: false,
            message: "Failed to delete book",
            error: error.message
        });
    }
};
 
export const BookController = {
    createBookHandler,
    getAllBooksHandler,
    getBookByIdHandler,
    updateBookHandler,
    deleteBookHandler
}