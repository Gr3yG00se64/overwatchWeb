const express = require('express');
const axios = require('axios');

const router = express.Router();

const path = require('path');

if(process.env.NODE_ENV === 'production') {
    var full_path = path.resolve('data', 'log.zip')
}
else {
    var full_path = path.resolve('server', 'data', 'log.zip')
}

// Get Logs
router.get('/', (req, res) => {
    //getLog().then(data => {
        res.download(full_path);
    //})
    //.catch(err => {
    //    res.json(['An error has occrued', err]);
    //});
});


module.exports = router;