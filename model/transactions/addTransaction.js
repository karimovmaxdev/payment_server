// const {transaction} = require('./schema/transactionScheme')
const shortid = require('shortid')
const fs = require('fs/promises')
const dbPath = require('path').resolve('./db/jsonDB.json')

const addTransaction = async ({ cardNumber, expDate, cvv, amount }) => {
// логика по работе с монгоДБ отключена

  // const newTransaction = await transaction({ cardNumber, expDate, cvv, amount })
  // await newTransaction.save()


// логика по работе с имитацией дб
  const jsonDB = await fs.readFile(dbPath, 'utf-8')
  const parsedJsonDB = JSON.parse(jsonDB)

  const newTransaction = {
    cardNumber,
    expDate,
    cvv,
    amount,
    id: shortid()
  }

  await fs.writeFile(dbPath, JSON.stringify([...parsedJsonDB, newTransaction], null, 2), 'utf-8'); 
// логика по работе с имитацией дб
  
  return newTransaction
}

module.exports = {
    addTransaction
}