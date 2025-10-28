const { UserModel } = require("../models/User.model");
const JwtService = require("../utils/JwtService");

const authMiddleware = async (req, resp, next) => {
    try {
        const token = req.cookies.token;
        if (!token) {
            return resp.status(401).send({ message: "Unauthorized" });
        }
        const isValid = JwtService.verifyToken(token);
        if (!isValid) {
            return resp.status(401).send({ message: "Unauthorized" });
        }
        req.user = await UserModel.findById(isValid.id, {
            password: 0,
        });
        next();
    } catch (error) {
        next(error);
    }
};

exports.AuthMiddleware = authMiddleware;
