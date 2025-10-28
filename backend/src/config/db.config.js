const mongoose = require("mongoose");

exports.connectDB = async () => {
    console.log(process.env.MONGO_URL);

    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log(
            "Database connected successfully",
            mongoose.connection.host
        );
    } catch (error) {
        console.error("Database connection error:", error.message);
        mongoose.disconnect();
        process.exit(1);
    }
};
