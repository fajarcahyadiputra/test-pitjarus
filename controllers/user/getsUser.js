const { User } = require('../../models')
const Joi = require('joi');


module.exports = async (req, res, next) => {
    try {
        const user = await User.findAll();
        res.status(201).json({
            status: 'success',
            data: user
        })
        next();


    } catch (error) {
        console.log(error.message);
        next(error)
    }
}