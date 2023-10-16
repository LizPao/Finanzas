
const Income = require('../controllers/ingreso.controller');
module.exports = function (app) {
    app.post('/api/addIncome', Income.addIncome)
    app.get('/api/getIncomes', Income.getIncomes)
    app.delete('/api/deleteIncome/:id', Income.deleteIncome)
}