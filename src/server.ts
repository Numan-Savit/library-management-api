import mongoose from "mongoose";
import app from "./app";


const port = 5000;


async function main() {
    try {
        
        const PORT = process.env.PORT || 5000;
        await mongoose.connect(process.env.MONGODB_URI as string);

        console.log("Database connected");

        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        })

    } catch (error) {
        console.error("Database connection failed", error);  
    }
}

main();