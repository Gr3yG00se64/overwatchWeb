const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var userSchema = new Schema({
    username: { type : String , unique : true, required : true, dropDups: true, trim: true},
    password: { type : String , required : true, trim: true},
    email:    { type : String , unique : true, required : true, dropDups: true, trim: true},
    created:  { type: Date, default: Date.now },
    admin: Boolean
});

var alertsSchema = new Schema({
  modID: Number,
  description: {type : String, trim: true},
  severity: {type : String, trim: true}
});

var netmapSchema = new Schema({
  deviceType: {type: String, trim: true},
  ip: {type : String, trim: true},
  description: {type : String, trim: true}
});

module.exports = {
    userSchema,
    alertsSchema,
    netmapSchema
};