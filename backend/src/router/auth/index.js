const express = require("express");
const AuthController = require("../../controller/AuthController");
const { AuthMiddleware } = require("../../middleware/AuthMiddleware");
const {
    validationMiddleware,
} = require("../../middleware/ValidationMiddleware");
const { AuthValidation } = require("../../validations/AuthValidation");
const router = express.Router();

router
    .route("/login")
    .post(
        AuthValidation.loginUser,
        validationMiddleware,
        AuthController.loginUser
    );
router
    .route("/register")
    .post(
        AuthValidation.registerUser,
        validationMiddleware,
        AuthController.registerUser
    );
router.route("/me").get(AuthMiddleware, AuthController.getProfile);

module.exports = router;
