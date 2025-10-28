const jwt = require("jsonwebtoken");

class JwtService {
    static generateToken(payload) {
        const jwtToken = jwt.sign(payload, process.env.JWT_SECRETE, {
            expiresIn: "1d",
            algorithm: "HS256",
        });
        return jwtToken;
    }

    static verifyToken(token) {
        return jwt.verify(token, process.env.JWT_SECRETE);
    }
}

module.exports = JwtService;
