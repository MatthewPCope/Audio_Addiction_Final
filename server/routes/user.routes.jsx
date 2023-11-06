const UserController = require('../controllers/user.controller.jsx')


module.exports = (app) => {
    app.get('/api/users', UserController.getAllUsers);
    app.post('/api/registerUser', UserController.registerUser)
    app.post('/api/loginUser', UserController.loginUser)
    app.get('/api/users/:id', UserController.getOneUser)
    app.post('/api/logoutUser', UserController.logoutUser)
}