const jwt = require('jsonwebtoken');
const { JWT_PRIVATE_KEY } = process.env;

module.exports = (req, res, next) => {
    try {
        let token = req.headers.authorization;
        if (!token) {
            res.status(404).json({
                statusCode: 404,
                body: {
                    status: 'error',
                    message: 'token is required'
                }
            })
        }
        if (token.charAt(0) === 'B') {
            token = token.split(' ')[1]
        }
        jwt.verify(token, JWT_PRIVATE_KEY, (err, data) => {
            if (err) {
                res.status(500).json({
                    statusCode: 500,
                    body: {
                        status: 'error',
                        message: err.message
                    }
                })
            }
            req.user = {
                username: data.username,
                id: data.id
            }
            next();
        })
    } catch (error) {
        res.status(500).json({
            statusCode: 500,
            body: {
                status: 'error',
                message: error.message
            }
        })
    }
}