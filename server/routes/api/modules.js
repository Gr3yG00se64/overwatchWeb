const express = require('express');
const fs = require('fs');
const path = require('path')

const router = express.Router();

var db = require('../../db/interactions');

//Module JSON path
if(process.env.NODE_ENV === 'production') {
    var full_path = path.resolve('data', 'mod_data.json')
}
else {
    var full_path = path.resolve('server', 'data', 'mod_data.json')
}

var mod_data = require(full_path);

//Get Modules
router.get('/', (req, res) => {
    console.log('Modules Requested');
    res.send(mod_data);
});

//Modify Module Activity Status
router.post('/', (req, res) => {
    var i;
    console.log('Modules Activity Changed');
    for(i=0; i < mod_data.modules.length; i++) {
        if (mod_data.modules[i].id == req.body.id) {
            mod_data.modules[i].enabled = !mod_data.modules[i].enabled;
        }
    }

    fs.writeFile(full_path, JSON.stringify(mod_data), 'utf8', function (err, data) {
        if(err) {console.log('error', err)}

    res.send('Successful');
    });

    mod_data = require(full_path);
});

module.exports = router;