const Joi = require('joi')

const postScheme = Joi.object({
  cardNumber: Joi.string().length(16).required().pattern(new RegExp('^[0-9]{16}$')),
  expDate: Joi.string().required().length(7).pattern(new RegExp('(0[1-9]|10|11|12)/20[0-9]{2}$')),
  cvv: Joi.string().length(3).required().pattern(new RegExp('^[0-9]{3}$')),
  amount: Joi.string().required().pattern(new RegExp('^[0-9]*[1-9][0-9]*$'))
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