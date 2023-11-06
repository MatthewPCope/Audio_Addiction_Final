const GearController = require('../controllers/gear.controller.jsx')

module.exports = (app) => {
    app.post('/api/gear', GearController.createGear);
    app.get('/api/gear', GearController.getAllGear);
    app.get('/api/gear/:id', GearController.getOneGear)
    app.put("/api/gear/:id", GearController.updateGear);
    app.delete("/api/gear/:id", GearController.deleteGear);
    // app.get('api/gear/:category', GearController.getGearByCategory)
}