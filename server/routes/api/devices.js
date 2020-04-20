const express = require('express');
const path  = require('path');

const router = express.Router();

var db = require('../../db/interactions');

//Get Registered Devices
router.get('/', (req, res) => {
    console.log('Devices Retrieved');
    db.getNetmap().then(devices => {
        res.json(devices);
    })
    .catch(err => {
        res.json(['An error has occured:', err]);
    });
});

//Get Unregistered Devices

var full_unreg_path = path.resolve(__dirname, 'data', 'unregDevices.json');

var unreg_data = require(full_unreg_path);

router.get('/unregistered', (req, res) => {
    unreg_data = require(full_unreg_path);
    
    console.log('Unregistered Devices Retrieved');
    res.send(unreg_data)
});

// Add Device
router.post('/', (req, res) => {
    console.log('Device Added');
    db.addNetmap(req.body).save(function (err, newUser) {
        if (err) { 
            res.json(['Error', err]);
        }
        else {
            res.json(['Account Created Successfully']);
        }
      }); 
});

//Remove Device
router.post('/delete', (req, res) => {
    console.log('Device Removed');
    
    db.removeNetmap(req.body);
});

//Remove all devices
router.post('/clear', (req, res) => {
    console.log('All Devices Removed');
    
    db.clearNetmap();
});

module.exports = router;