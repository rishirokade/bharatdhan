const errorHandling = (error, req, resp, next) => {
    resp.send({
        code: error.statusCode,
        message: error.message,
    });
};

module.exports = errorHandling;
