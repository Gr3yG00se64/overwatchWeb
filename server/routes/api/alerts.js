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

// Remove Alert
router.post('/delete', (req, res) => {
    console.log('Alert Deleted');

    db.removeAlert(req.body);
});

// Remove All Alert
router.post('/clear', (req, res) => {
    console.log('All Alerts Deleted');

    db.clearAlerts();
});

module.exports = router;