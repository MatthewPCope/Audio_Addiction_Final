const Gear = require('../models/gear.model.jsx');

module.exports = {
    getAllGear: (req, res) => {
        Gear.find({})
            .then((allGear) => res.json(allGear))
            .catch((err) => console.log(err));
    },
        
    getOneGear: (req, res) => {
        Gear.findOne({ _id: req.params.id})
            .then((oneGear) => res.json(oneGear))
            .catch(err => res.json(err));
    },

    createGear: (req, res) => {
        Gear.create(req.body)
            
            .then((newGear) => res.json(newGear))
            .catch(err => res.status(400).json(err)
            );
    },

    updateGear: (req, res) => {
        Gear.findOneAndUpdate({ _id: req.params.id }, req.body, {new:true, runValidators:true})
            .then((updatedGear) => res.json(updatedGear))
            .catch(err => res.status(400).json(err))
        },

    deleteGear: (req, res) => {
        Gear.deleteOne({ _id: req.params.id })
            .then(deleteConfirm => res.json(deleteConfirm))
            .catch(err => res.json(err))
    },
    
    // getGearByCategory: (req, res) => {
    //     Gear.findOne({ 'category': 'bass'})
    //     .then((bassGuitars) => res.json(bassGuitars))
    //     console.log(bassGuitars)
    //     .catch(err => res.status(400).json(err))
    // }

    
        
}
