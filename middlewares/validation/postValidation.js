const Joi = require('joi')

const postScheme = Joi.object({
  cardNumber: Joi.string().min(16).max(16),
  expDate: Joi.string().required().min(7).max(7),
  cvv: Joi.string().required().pattern(new RegExp('[0-9][0-9][0-9]')),
  amount: Joi.string().required()
})

const postValidation = async (req, res, next) => {
    try {
        const { error } = postScheme.validate(req.body)
        if (error) {
            res.status(400).json({ message: "missing required name field" })
            return    
        }

        next()
    } catch (error) {
        next(error)
    }
}

module.exports = {
    postValidation
}