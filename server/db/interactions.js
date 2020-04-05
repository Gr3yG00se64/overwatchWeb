//const mongoose = require('mongoose');

//Import created connections and schemas
const schemas = require('./schemas');
const connections = require('./connections');

//  Assign DB variables
//  REFACTOR CODE

//User DB
var userDB = connections.userDB;
var userSchema = schemas.userSchema;

//Alerts DB
var alertsDB = connections.alertsDB;
var alertsSchema = schemas.alertsSchema;

//NetMap DB
var netmapDB = connections.netmapDB;
var netmapSchema = schemas.netmapSchema;

//Set up Models
var User = userDB.model('User', userSchema);
var Alert = alertsDB.model('Alert', alertsSchema);
var Netmap = netmapDB.model('Netmap', netmapSchema);

/*User.deleteMany({username: 'otherguy'}, function(err){}); 
User.deleteMany({username: 'otherguy2'}, function(err){}); 
User.deleteMany({username: 'otherguy4'}, function(err){}); 
User.deleteMany({username: 'otherguy6'}, function(err){}); */    //REMOVE AFTER DEV 


//      Create Interaction Methods

//  User Interaction Methods

function getUser(request) {
    return User.find({username: request.username});
}

//Returns all users
function getUsers() {
    return User.find()
}

function addUser(request) {
    newUser = new User({
        username: request.username,
        password: request.password,
        email: request.email,
        admin: request.admin
    });

    return newUser;
}


//  Alerts Interaction Methods

function getAlerts() {
    return Alert.find();
}

function addAlert(request) {
    newAlert = new Alert({
        modID: request.modID,
        description: request.description,
        severity: request.severity
    });

    return newAlert;
}

function getNetmap() {
    return Netmap.find();
}

function addNetmap(request) {
    newNetmap = new Netmap({
        deviceType: request.deviceType,
        ip: request.ip,
        description: request.description
    });

    return newNetmap;
}

function removeNetmap(request) {
    Netmap.deleteOne({ id: request.id }, function (err) {
        if (err) return handleError(err);
      });

      return 'Passed';
}

module.exports = {
    //User Exports
    getUser,
    getUsers,
    addUser,

    //Alert Exports
    getAlerts,
    addAlert,

    //Netmap Exports
    getNetmap,
    addNetmap,
    removeNetmap
};


/*module.exports = {
    User,
    Alert
}*/