const express = require('express');
const fs = require('fs')
const path = require('path')

const router = express.Router();


// API Keys
var full_apikey_path = path.resolve(__dirname, 'data', 'apikeys.json');
var api_data = require(full_apikey_path);

router.get('/apikeys', (req, res) => {
    console.log('API Keys Retrieved');
    res.send(api_data)
});

router.post('/apikeys', (req, res) => {
    console.log('API Keys Modified');

    var i;

    for(i=0; i < api_data.apikeys.length; i++) {
        if (api_data.apikeys[i].name == req.body.name) {
            console.log(req.body.key)
            api_data.apikeys[i].key = req.body.key;
        }
    }

    fs.writeFile(full_apikey_path, JSON.stringify(api_data), 'utf8', function (err, data) {
        if(err) {console.log('error', err)}

    res.send('Successful');
    });

    api_data = require(full_apikey_path);
});
    


// Wifi Settings
var full_wifi_path = path.resolve(__dirname, 'data', 'wifisettings.json');
var wifi_data = require(full_wifi_path);

router.get('/wifi', (req, res) => {
    console.log('Wifi Info Retrieved');
    res.send(wifi_data)
});

router.post('/wifi', (req, res) => {
    console.log('Wifi Info Modified');

    wifi_data.ssid = req.body.ssid;
    wifi_data.password = req.body.password;

    fs.writeFile(full_wifi_path, JSON.stringify(wifi_data), 'utf8', function (err, data) {
        if(err) {console.log('error', err)}

    res.send('Successful');
    });

    api_data = require(full_wifi_path);
});

var full_login_path = path.resolve(__dirname, 'data', 'login.json');
// User Settings
router.post('/adduser', (req, res) => {
    console.log('User Added');

    //auth_data = {username: req.body.user, password: req.body.user_password};
    //wifi_data.password = req.body.password;

    fs.writeFile(full_login_path, JSON.stringify({username: req.body.username, password: req.body.password}), 
    'utf8', function (err, data) {
        if(err) {console.log('error', err)}

    res.send('Successful');
    });
});
module.exports = router;