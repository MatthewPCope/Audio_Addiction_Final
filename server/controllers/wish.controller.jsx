const Wish = require('../models/wish.model.jsx');

module.exports = {
    getAllWishes: (req, res) => {
        Wish.find({})
            .then((allWishes) => res.json(allWishes))
            .catch((err) => console.log(err));
    },
        
    getOneWish: (req, res) => {
        Wish.findOne({ _id: req.params.id})
            .then((oneWish) => res.json(oneWish))
            .catch(err => res.json(err));
    },

    createWish: (req, res) => {
        Wish.create(req.body)
        .then((newWish) => res.json(newWish))
        .catch(err => res.status(400).json(err)
        );
},
            
    updateWish: (req, res) => {
        Wish.findOneAndUpdate({ _id: req.params.id }, req.body, {new:true, runValidators:true})
            .then((updatedWish) => {
                res.json(updatedWish)
            })
            .catch((err) => {
                console.log("something went wrong in updated wish")
                res.status(400).json(err)
            })
},
                

deleteWish: (req, res) => {
    Wish.deleteOne({ _id: req.params.id })
        .then(deleteConfirm => res.json(deleteConfirm))
        .catch(err => res.json(err))
}

}
