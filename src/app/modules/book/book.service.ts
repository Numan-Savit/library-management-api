import { IBook } from "./book.interface";
import { Book } from "./book.model";

const createBook = async (bookData : IBook) => {
    const result = await Book.create(bookData);
    return result;
};



const getAllBooks = async (
    filter? : string,
    sortBy : string = 'createdAt',
    sortOrder : 'asc' | 'desc' = 'desc',
    limit : number = 10,
) => {
   const query: any = {};
   if (filter){
      query.genre = filter.toUpperCase();
   }
   const sort: any = {};
   sort[sortBy] = sortOrder === 'asc' ? 1 : -1;
   const books = await Book.find(query).sort(sort).limit(limit);
   return books;
};


const getBookById = async (id: string) => {
    const book = await Book.findById(id);
    return book;
};

// update

const updateBook = async (id : string, payload : Partial<IBook>) => {
   
    const result = await Book.findByIdAndUpdate(id, payload, {
        new: true,
        runValidators: true
    });
    return result;
};

// delete

const deleteBook = async (id: string) => {
    const result = await Book.findByIdAndDelete(id);
    return result;
};


export const BookService = {
    createBook,
    getAllBooks,
    getBookById,
    updateBook,
    deleteBook
}