import mongoose from "mongoose";
import app from "./app";


const port = 5000;


async function main() {
    try {
        await mongoose.connect('mongodb+srv://mongoDb:mongodb@cluster0.ymvr3sa.mongodb.net/library-management?retryWrites=true&w=majority&appName=Cluster0')
        console.log("Database connected");

        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        })

    } catch (error) {
        console.error("Database connection failed", error);  
    }
}

main();