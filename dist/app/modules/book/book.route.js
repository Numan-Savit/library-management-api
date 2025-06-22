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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookRoutes = void 0;
const express_1 = __importDefault(require("express"));
const book_controller_1 = require("./book.controller");
const router = express_1.default.Router();
router.post('/', book_controller_1.BookController.createBookHandler);
router.get('/', book_controller_1.BookController.getAllBooksHandler);
router.get('/:bookId', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield book_controller_1.BookController.getBookByIdHandler(req, res);
}));
router.put('/:bookId', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield book_controller_1.BookController.updateBookHandler(req, res);
}));
router.delete('/:bookId', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield book_controller_1.BookController.deleteBookHandler(req, res);
}));
exports.BookRoutes = router;
