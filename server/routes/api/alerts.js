const express = require('express');

const router = express.Router();

var db = require('../../db/interactions');

// Get Alerts
router.get('/', (req, res) => {
    console.log('Alerts Retrieved');
    db.getAlerts().then(alerts => {
        res.json(alerts);
    })
    .catch(err => {
        res.json(['An error has occured:', err]);
    });
});

module.exports = router;