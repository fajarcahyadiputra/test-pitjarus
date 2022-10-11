const { User } = require('../../models')
const Joi = require('joi');
const ErrorResponse = require('../../utils/ErrorResponse');


module.exports = async (req, res, next) => {
    try {
        const userId = req.params.id;

        const user = await User.findByPk(userId);
        if (!user) {
            return next(new ErrorResponse('user not found', 404));
        }
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