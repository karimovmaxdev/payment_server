const { addTransaction } = require('../../model/transactions')

const newOperation = async (req, res, next) => {
  try {
    const {id, amount} = await addTransaction(req.body)
    res.status(201).json({id, amount})

  } catch (error) {
    next(error)
  }
}


module.exports = {
    newOperation
}