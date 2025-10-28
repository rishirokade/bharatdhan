const { validationResult } = require("express-validator");
const AppError = require("../utils/AppError");

const validationMiddleware = (req, resp, next) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
        throw new AppError(400, result.array()[0].msg);
    }

    next();
};

exports.validationMiddleware = validationMiddleware;
