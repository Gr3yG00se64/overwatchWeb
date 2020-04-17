const express = require('express');
const fs = require('fs');
const path = require('path')

const router = express.Router();

//Module JSON path
var full_path = path.resolve(__dirname, 'data', 'serverinfo.json');

var server_info = require(full_path);

//Get Modules
router.get('/', (req, res) => {
    res.send(server_info);
});

module.exports = router;