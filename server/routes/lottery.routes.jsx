const LotteryController = require('../controllers/lottery.controller.jsx')

module.exports = (app) => {
    app.post('/api/lottery', LotteryController.createLottery);
    app.get('/api/lottery', LotteryController.getAllLottery);
    app.get('/api/lottery/:id', LotteryController.getOneLottery)
    app.put("/api/lottery/:id", LotteryController.updateLottery);
    app.delete("/api/lottery/:id", LotteryController.deleteLottery);
}