const Expense = require('../controllers/gasto.controller');
module.exports = function (app) {
    app.post('/api/addExpense', Expense.addExpense)
    app.get('/api/getExpenses', Expense.getExpense)
    app.delete('/api/deleteExpense/:id', Expense.deleteExpense)
}

