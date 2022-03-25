const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    cardNumber: {
      type: String,
      required: true,
    },
    expDate: {
      type: String,
      required: true
    },
    cvv: {
      type: String,
      match: /[0-9][0-9][0-9]/,
      required: true
    },
    amount: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now()
    }
})

const transaction = mongoose.model('transactions', postSchema)

module.exports = {
    transaction
}