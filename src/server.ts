import mongoose from "mongoose";
import app from "./app";


const PORT = process.env.PORT || 5000;


async function main() {
    try {

        const PORT = process.env.PORT || 5000;
        await mongoose.connect(process.env.MONGODB_URI as string);

        console.log("Database connected");

        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        })

    } catch (error) {
        console.error("Database connection failed", error);  
    }
}

main();