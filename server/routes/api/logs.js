const express = require('express');
const axios = require('axios');

const router = express.Router();

const path = require('path');

const dataDir = '../../data/'

// Get Logs
router.get('/', (req, res) => {
    //getLog().then(data => {
        res.download(path.resolve('server', 'data', 'log.zip'));
    //})
    //.catch(err => {
    //    res.json(['An error has occrued', err]);
    //});
});


module.exports = router;