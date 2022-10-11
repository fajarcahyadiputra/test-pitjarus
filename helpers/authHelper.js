const jwt = require('jsonwebtoken');

const {
    JWT_PRIVATE_KEY,
    JWT_EXPIRED
} = process.env;

module.exports = (id) => {
    return jwt.sign({ id }, JWT_PRIVATE_KEY, { expiresIn: JWT_EXPIRED });
}