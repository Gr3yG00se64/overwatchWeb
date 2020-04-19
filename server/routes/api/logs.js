const express = require('express');
const axios = require('axios');

const router = express.Router();

const path = require('path');

//Absolute Path to log file
var full_log_path = path.resolve(__dirname, 'data', 'log.zip');

//Absolut path to module file, storing data in variable
var full_mod_path = path.resolve(__dirname, 'data', 'mod_data.json');
var mod_data = require(full_mod_path)

// Get Logs
router.get('/', (req, res) => {
     if (mod_data.modules[0].enabled) {
          res.download(full_log_path);
          console.log('Log File Sent');
     }
     else {
          console.log('Logger is disabled')
     }
});


module.exports = router;