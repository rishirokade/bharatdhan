const express = require("express");
const router = express.Router();

router.get("/login", (req, resp) => {
    resp.send("Login route");
});

module.exports = router;
