const express = require('express');

const router = express.Router();

var db = require('../../db/interactions');

// Get Users
router.get('/', (req, res) => {
    db.getUsers().then(users => {
        res.json(users);
    })
    .catch(err => {
        res.json(['An error has occured:', err]);
    });
});

// Add User
router.post('/', (req, res) => {
    db.addUser(req.body).save(function (err, newUser) {
        if (err) { 
            res.json(['Error', err]);
        }
        else {
            res.json(['Account Created Successfully']);
        }
      }); 
});

module.exports = router;