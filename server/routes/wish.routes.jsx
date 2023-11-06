const WishController = require('../controllers/wish.controller.jsx')

module.exports = (app) => {
    app.post('/api/wish', WishController.createWish);
    app.get('/api/wish', WishController.getAllWishes);
    app.get('/api/wish/:id', WishController.getOneWish)
    app.put("/api/wish/:id", WishController.updateWish);
    app.delete("/api/wish/:id", WishController.deleteWish);
}