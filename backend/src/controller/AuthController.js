const AuthService = require("../service/AuthService");

class AuthController {
    static async loginUser(req, resp) {
        const result = await AuthService.loginUser(req, resp);
        resp.status(200).send(result);
    }
    static async registerUser(req, resp) {
        const result = await AuthService.registerUser(req.body);
        resp.status(200).send(result);
    }

    static async getProfile(req, resp) {
        const user = await AuthService.getProfile(req);
        resp.status(200).send({ user });
    }
}
module.exports = AuthController;
