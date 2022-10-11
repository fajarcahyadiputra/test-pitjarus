const { User } = require('../../models')
const Joi = require('joi');
const ErrorResponse = require('../../utils/ErrorResponse');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

module.exports = async (req, res) => {
    try {
        const body = req.body;
        const schema = Joi.object({
            password: Joi.string().required(),
            email: Joi.string().email().required(),
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
            const user = await User.findOne({
                where: {
                    email: body.email
                }
            })
            if (!user) {
                return next(new ErrorResponse('Your Email is Wrong', 401));
            }
            const compare = await bcrypt.compare(body.password, user.password);
            if (!compare) {
                return next(new ErrorResponse('Your Password is Wrong', 401));
            }
            const token = jwt.sign({ id: user.id, username: user.username }, process.env.JWT_PRIVATE_KEY, { expiresIn: process.env.JWT_EXPIRED });
            res.json(
                {
                    statusCode: 200,
                    body: {
                        status: "success",
                        token: token
                    }
                }
            )
        }
    } catch (error) {
        console.log(error.message);
        next(error)
    }
}