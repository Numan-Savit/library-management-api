import { IBorrow } from "./borrow.interface";
import { Borrow } from "./borrow.model";

export const borrowBook = async (data : IBorrow) => {

    const borrowRecord = new Borrow(data);

    await borrowRecord.updateBookAvailability();

    const result = await borrowRecord.save();
    return result;
};


// Aggregation function 


export const getBorrowSummary = async () => {

    const summary = await Borrow.aggregate([

        {
            $group : {
               _id : '$book',
               totalQuantity : { $sum : '$quantity'} 
            }
        },

        {
            $lookup: {
                from: 'books',
                localField: '_id',
                foreignField: '_id',
                as: 'bookDetails'
            }
        },

        {
            $unwind: '$bookDetails'
        },

        {
            $project: {
                _id: 0,
                totalQuantity: 1,
                book : {
                    title: '$bookDetails.title',
                    isbn: '$bookDetails.isbn'
                }
            }
        }

    ]);

    return summary;
}