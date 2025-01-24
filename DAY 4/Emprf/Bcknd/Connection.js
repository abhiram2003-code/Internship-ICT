const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Abhiram:abhi@abhiram200337.up9ii.mongodb.net/?retryWrites=true&w=majority&appName=Abhiram200337')
    .then(() => {
        console.log("Connected");
    })
    .catch((err) => {
        console.log(err);
    });
