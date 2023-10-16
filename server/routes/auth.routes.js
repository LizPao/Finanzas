const UserController = require('../controllers/user.controller')

module.exports = function(app){

app.post('/api/auth/login', UserController.login)
app.post('/api/auth/register', UserController.register)
}