const app = require("./app");

require("dotenv").config({
    path: "./.env", // Specify the path to your .env file here if needed.env is in backend
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});
