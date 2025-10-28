const { UserModel } = require("../models/User.model");
const bcryptjs = require("bcryptjs");
const AppError = require("../utils/AppError");
const JwtService = require("../utils/JwtService");

class AuthService {
    static async loginUser(req, resp) {
        const { email, password } = req.body;

        const isUserExist = await UserModel.findOne({
            email: email.toLowerCase(),
        });

        if (!isUserExist) throw new AppError(400, "user not found");

        const isPasswordValid = await bcryptjs.compare(
            password,
            isUserExist.password
        );

        if (!isPasswordValid) throw new AppError(400, "user not found");

        const jwtToken = JwtService.generateToken({
            id: isUserExist._id,
            email: isUserExist.email,
        });

        resp.cookie("token", jwtToken, {
            httpOnly: true,
        });

        return { message: "User logged in successfully" };
    }

    static async registerUser(body) {
        const { name, email, password, ac_type } = body;
        const check_exist = await UserModel.findOne({
            email: email.toLowerCase(),
        });

        if (check_exist) {
            throw new AppError(400, "Email Already Exist");
        }

        const user = await UserModel.create({
            name,
            email,
            password,
            ac_type,
        });

        return {
            status: 200,
            msg: "Register Success",
            user,
        };
    }

    static async getProfile(req) {
        return req.user;
    }
}

module.exports = AuthService;
