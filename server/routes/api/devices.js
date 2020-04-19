const express = require('express');

const router = express.Router();

var db = require('../../db/interactions');

//Get Device
router.get('/', (req, res) => {
    console.log('Devices Retrieved');
    db.getNetmap().then(devices => {
        res.json(devices);
    })
    .catch(err => {
        res.json(['An error has occured:', err]);
    });
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