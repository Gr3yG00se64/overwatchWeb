const mongoose = require('mongoose');

//Set up DB connection variables
const userDB = mongoose.createConnection('mongodb://localhost/users', {useNewUrlParser: true , useUnifiedTopology: true});
const alertsDB = mongoose.createConnection('mongodb://localhost/alerts', {useNewUrlParser: true , useUnifiedTopology: true});
const netmapDB = mongoose.createConnection('mongodb://localhost/netmap', {useNewUrlParser: true , useUnifiedTopology: true});

//Check for errors with the connection

userDB.on('error', console.error.bind(console, 'connection error:'));
userDB.once('open', function() {
    console.log('User DB Open');
});

alertsDB.on('error', console.error.bind(console, 'connection error:'));
alertsDB.once('open', function() {
    console.log('Alerts DB Open');
});

netmapDB.on('error', console.error.bind(console, 'connection error:'));
netmapDB.once('open', function() {
    console.log('Netmap DB Open');
});

//Export Connections
module.exports = {
    userDB,
    alertsDB,
    netmapDB
}

