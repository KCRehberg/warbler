const mongoose = require('mongoose');

mongoose.set('debug', true);
mongoose.set('useUnifiedTopology', true);
mongoose.Promise = Promise;
mongoose.connect("mongodb://127.0.0.1:27017/warbler", { 
    keepAlive: true,
    useCreateIndex: true,
    useNewUrlParser: true
});

module.exports.User = require('./user');
module.exports.Message = require('./message');
