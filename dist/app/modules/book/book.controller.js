"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookController = void 0;
const book_service_1 = require("./book.service");
const createBookHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield book_service_1.BookService.createBook(req.body);
        res.status(201).json({
            success: true,
            message: "Book created successfully",
            data: result
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: "Failed to create book",
            error: error
        });
    }
});
const getAllBooksHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { filter, sortBy, sort, limit } = req.query;
        const books = yield book_service_1.BookService.getAllBooks(filter, sortBy || 'createdAt', sort || 'desc', Number(limit) || 10);
        res.status(200).json({
            success: true,
            message: "Books retrieved successfully",
            data: books
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: "Failed to retrieve books",
            error: error
        });
    }
});
const getBookByIdHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { bookId } = req.params;
        const result = yield book_service_1.BookService.getBookById(bookId);
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
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: "Failed to retrieve book",
            error: error.message
        });
    }
});
// update
const updateBookHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { bookId } = req.params;
        const updated = yield book_service_1.BookService.updateBook(bookId, req.body);
        if (!updated) {
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
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: "Failed to update book",
            error: error.message
        });
    }
});
// delete
const deleteBookHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { bookId } = req.params;
        const deleted = yield book_service_1.BookService.deleteBook(bookId);
        if (!deleted) {
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
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: "Failed to delete book",
            error: error.message
        });
    }
});
exports.BookController = {
    createBookHandler,
    getAllBooksHandler,
    getBookByIdHandler,
    updateBookHandler,
    deleteBookHandler
};
