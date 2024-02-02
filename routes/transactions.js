const { addIncome, getIncomes, deleteIncome } = require('../controllers/income.js')

const router = require('express').Router()

router.post('/add-income', addIncome)
router.get('/get-incomes', getIncomes)
    .delete('/delete-income/:id', deleteIncome)
    
// router.get('/', (req, res) => {
//     res.send('Hello world')
// })

router.post('/add-income', addIncome)

module.exports = router