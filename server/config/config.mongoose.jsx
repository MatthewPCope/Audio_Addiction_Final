const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/loginReg", { 
    useNewUrlParser: true, 
    useUnifiedTopology: true,
})
    .then(() => console.log("The database is Rockin' n Rollin'."))
    .catch(err => console.log("Something went wrong and the database ain't Rockin'.", err));

