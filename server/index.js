const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const axios = require('axios');

//const modules = require('./db/mod_')

const app = express();
const dataDir = './data/'

//
const getLog = () => {
    try {
        return axios.get('http://127.0.0.1:5000/logging')
    } catch (error) {
      console.error(error)
      res.json([error])
    }
}

var mod_data = require(dataDir+'mod_data');
var db = require('./db/interactions');

app.use(cors());
app.use(bodyParser.json());

const port = process.env.PORT || 5670;
app.listen(port, () => {
    console.log(`Server started and listening on ${port}`);
});

//      API Calls

app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to Overwatch!'
    })
});

//  Modules Calls 

app.get('/mod-data', (req, res) => {
    res.send(mod_data);
});

app.post('/mod-data', cors(), (req, res) => {
    var i;
    console.log(req.body);
    for(i=0; i < mod_data.modules.length; i++) {
        if (mod_data.modules[i].id == req.body.id) {
            mod_data.modules[i].enabled = !mod_data.modules[i].enabled;
            console.log('Found');
            console.log(mod_data.modules[i].id);
            console.log(mod_data.modules[i].enabled);
        }
    }

    console.log(JSON.stringify(mod_data));
    fs.writeFile(dataDir+'mod_data.json', JSON.stringify(mod_data), 'utf8', function (err, data) {
        if(err) {console.log('error', err)}

    res.send('Hola');
    });

    mod_data = require(dataDir+'mod_data');
});

// User API

app.get('/get-users', (req, res) => {

    db.getUsers().then(users => {
        res.json(users);
    })
    .catch(err => {
        res.json(['An error has occured:', err]);
    });
    
});

app.post('/get-user', (req, res) => {

    db.getUser(req.body).then(users => {
        res.json(users);
    })
    .catch(err => {
        res.json(['An error has occured:', err]);
    });
    
});

app.post('/add-user', (req, res) => {
    db.addUser(req.body).save(function (err, newUser) {
        if (err) { 
            res.json(['Error', err]);
        }
        else {
            res.json(['Account Created Successfully']);
        }
      }); 
});

// Alert API
app.get('/get-alerts', (req, res) => {

    db.getAlerts().then(alerts => {
        res.json(alerts);
    })
    .catch(err => {
        res.json(['An error has occured:', err]);
    });
    
});

// Logger API
app.get('/get-logs', (req, res) => {
    getLog().then(data => {
        res.download('./data/log.zip')
    })
    .catch(err => {
        res.json(['An error has occrued', err]);
    });
});

// Net Map API
app.post('/add-device', (req, res) => {
    db.addNetmap(req.body).save(function (err, newUser) {
        if (err) { 
            res.json(['Error', err]);
        }
        else {
            res.json(['Account Created Successfully']);
        }
      }); 
});

app.get('/get-devices', (req, res) => {

    db.getNetmap().then(devices => {
        res.json(devices);
    })
    .catch(err => {
        res.json(['An error has occured:', err]);
    });
    
});