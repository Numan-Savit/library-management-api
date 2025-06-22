import { model, Schema } from "mongoose";
import { IBorrow } from "./borrow.interface";
import { Book } from "../book/book.model";

const borrowSchema = new Schema<IBorrow>({

     book : {
     type : Schema.Types.ObjectId,
     ref : 'Book',
     required : true
    },

    quantity : {
        type : Number,
        required : true,
        min : 1
    },

    dueDate : {
        type : Date,
        required : true,
    }
},

    {
        timestamps: true,
        toJSON: {
            virtuals: true
        }
    }

);


// Instance method: Update book availability & copies


borrowSchema.methods.updateBookAvailability = async function () {

    const bookId = this.book;
    const quantity = this.quantity;

    const foundBook = await Book.findById(bookId);


    if (!foundBook){
        throw new Error('Book not found');
    };

    if (foundBook.copies < quantity) {
        throw new Error('Not enough copies available');
    };

    foundBook.copies -= quantity;

    if (foundBook.copies === 0) {
        foundBook.available = false;
    };

    await foundBook.save();
};


export const Borrow = model<IBorrow, any>('Borrow', borrowSchema);