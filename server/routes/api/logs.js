const express = require('express');
const axios = require('axios');

const router = express.Router();

const path = require('path');

//Absolute Path to log file
var full_path = path.resolve(__dirname, 'data', 'log.zip');

// Get Logs
router.get('/', (req, res) => {
     res.download(full_path);
     console.log('Log File Sent');
});


module.exports = router;