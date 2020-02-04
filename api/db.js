const mongoose = require('mongoose')
mongoose.Promise = global.Promise;

mongoose.connect("mongodb://mongo:27017/expressmongo", {
    useNewUrlParser: true,
}).then(() => {
    console.log('successfully connected to the database');
}).catch(err => {
    console.log(err);
    process.exit();
});
