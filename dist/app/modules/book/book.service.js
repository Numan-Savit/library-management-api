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
exports.BookService = void 0;
const book_model_1 = require("./book.model");
const createBook = (bookData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield book_model_1.Book.create(bookData);
    return result;
});
const getAllBooks = (filter_1, ...args_1) => __awaiter(void 0, [filter_1, ...args_1], void 0, function* (filter, sortBy = 'createdAt', sortOrder = 'desc', limit = 10) {
    const query = {};
    if (filter) {
        query.genre = filter.toUpperCase();
    }
    const sort = {};
    sort[sortBy] = sortOrder === 'asc' ? 1 : -1;
    const books = yield book_model_1.Book.find(query).sort(sort).limit(limit);
    return books;
});
const getBookById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const book = yield book_model_1.Book.findById(id);
    return book;
});
// update
const updateBook = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield book_model_1.Book.findByIdAndUpdate(id, payload, {
        new: true,
        runValidators: true
    });
    return result;
});
// delete
const deleteBook = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield book_model_1.Book.findByIdAndDelete(id);
    return result;
});
exports.BookService = {
    createBook,
    getAllBooks,
    getBookById,
    updateBook,
    deleteBook
};
