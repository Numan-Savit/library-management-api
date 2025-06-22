import { Request, Response } from "express";
import { borrowBook, getBorrowSummary } from "./borrow.service";

export const borrowBookHandler = async (req : Request, res: Response) => {
    try {

        const result = await borrowBook(req.body);

        res.status(201).json({
            success: true,
            message: "Book borrowed successfully",
            data: result
        });

       }catch (error: any) {
         res.status(400).json({
            success: false,
            message: "Failed to borrow book",
            error: error.message
        });
    }
};


export const getBorrowSummaryHandler = async (req: Request, res: Response) => {

    try {
        const result = await getBorrowSummary();

        res.status(200).json({
            success: true,
            message: "Borrow summary retrieved successfully",
            data: result
        });
    }catch (error: any) {
        res.status(500).json({
            success: false,
            message: "Failed to retrieve borrow summary",
            error: error.message
        });
    }
}