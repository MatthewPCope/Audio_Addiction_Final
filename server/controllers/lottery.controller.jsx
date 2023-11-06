const Lottery = require('../models/lottery.model.jsx');

module.exports = {
    getAllLottery: (req, res) => {
        Lottery.find({})
            .then((allLottery) => res.json(allLottery))
            .catch((err) => console.log(err));
    },
        
    getOneLottery: (req, res) => {
        Lottery.findOne({ _id: req.params.id})
            .then((oneLottery) => res.json(oneLottery))
            .catch(err => res.json(err));
    },

    createLottery: (req, res) => {
        Lottery.create(req.body)
            
            .then((newLottery) => res.json(newLottery))
            .catch(err => res.status(400).json(err)
            );
    },

    updateLottery: (req, res) => {
        Lottery.findOneAndUpdate({ _id: req.params.id }, req.body, {new:true, runValidators:true})
            .then((updatedLottery) => {
                res.json(updatedLottery)
            })
            .catch((err) => {
                console.log("something went wrong in updated Lottery")
                res.status(400).json(err)
            })
        },

    deleteLottery: (req, res) => {
        Lottery.deleteOne({ _id: req.params.id })
            .then(deleteConfirm => res.json(deleteConfirm))
            .catch(err => res.json(err))
    }
                

    // getLotteryByCategory: (req, res) => {
    //     Lottery.find({ category: req.body})
    //     .then((bassLottery) => {
    //         res.json(bassLottery)
    //         console.log(bassLottery)
    //     })
    //     .catch((err) => {
    //         console.log("something went wrong with getting Lottery by bass")
    //         res.status(400).json(err)
    //     })
    // } 
    

    
        
}