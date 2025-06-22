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
exports.getBorrowSummaryHandler = exports.borrowBookHandler = void 0;
const borrow_service_1 = require("./borrow.service");
const borrowBookHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, borrow_service_1.borrowBook)(req.body);
        res.status(201).json({
            success: true,
            message: "Book borrowed successfully",
            data: result
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: "Failed to borrow book",
            error: error.message
        });
    }
});
exports.borrowBookHandler = borrowBookHandler;
const getBorrowSummaryHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, borrow_service_1.getBorrowSummary)();
        res.status(200).json({
            success: true,
            message: "Borrow summary retrieved successfully",
            data: result
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to retrieve borrow summary",
            error: error.message
        });
    }
});
exports.getBorrowSummaryHandler = getBorrowSummaryHandler;
