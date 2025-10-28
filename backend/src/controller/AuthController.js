const AuthService = require("../service/AuthService");

class AuthController {
    static async loginUser(req, resp) {
        const result = await AuthService.loginUser(req);
        resp.status(200).send(result);
    }
    static async registerUser(req, resp) {
        const result = await AuthService.registerUser(req.body);
        resp.status(200).send(result);
    }
}
module.exports = AuthController;
