const { User } = require('../../models')
const Joi = require('joi');
const ErrorResponse = require('../../utils/ErrorResponse');


module.exports = async (req, res, next) => {
    try {
        const dataBody = req.body;
        const userId = req.params.id;

        const schema = Joi.object({
            password: Joi.string().optional(),
            name: Joi.string().optional(),
            email: Joi.string().email().optional(),
        });

        // schema options
        const options = {
            abortEarly: false,
            allowUnknown: true,
            stripUnknown: true
        };
        const { error, value } = schema.validate(req.body, options);

        if (error) {
            return next(new ErrorResponse(error.details, 401));
        } else {
            const user = await User.findByPk(userId);
            if (!user) {
                return next(new ErrorResponse('user not found', 404));
            }
            if (dataBody.email) {
                const countEmail = await User.count({ where: { email: dataBody.email } });
                if (countEmail > 0) {
                    return next(new ErrorResponse('Email duplicated', 409));
                }
            }
            Object.keys(dataBody).forEach(key => (user[key] = dataBody[key]))
            const newUser = await User.update(user, {
                where: {
                    id: userId
                }
            });
            // on success replace req.body with validated value and trigger next middleware function
            res.status(201).json({
                status: 'success',
                message: 'Successfully updated',
                data: user,
            })
            next();
        }

    } catch (error) {
        console.log(error.message);
        next(error)
    }
}