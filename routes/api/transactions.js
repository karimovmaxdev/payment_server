const express = require('express')
const router = express.Router()
const path = require('path')

const controllersPath = path.resolve('./controllers/transactions/index')
const validationPath = path.resolve('./middlewares/validation')

const { newOperation } = require(controllersPath)
const { postValidation } = require(validationPath)


router.post('/', postValidation, newOperation)



module.exports = router
