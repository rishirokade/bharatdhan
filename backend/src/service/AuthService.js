const { UserModel } = require("../models/User.model");
const AppError = require("../utils/AppError");

class AuthService {
    static async loginUser(credentials) {
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
}

module.exports = AuthService;
