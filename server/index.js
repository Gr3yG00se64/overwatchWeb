const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

var db = require('./db/interactions');

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Handling Routes
const users = require('./routes/api/users');
const alerts = require('./routes/api/alerts');
const devices = require('./routes/api/devices');
const logs = require('./routes/api/logs');
const modules = require('./routes/api/modules');
const pihole = require('./routes/api/pihole');
const settings = require('./routes/api/settings')

app.use('/api/users', users); 
app.use('/api/alerts', alerts);
app.use('/api/devices', devices);
app.use('/api/logs', logs);
app.use('/api/modules', modules);
app.use('/api/pihole', pihole)
app.use('/api/settings', settings)

// Handle Production
if(process.env.NODE_ENV === 'production') {
    console.log("Server is in Production Mode");
    
    // Static Folder
    app.use(express.static(__dirname + '/public/'));

    // Handle SPA
    app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
}

const port = process.env.PORT || 5670;
app.listen(port, () => {
    console.log(`Server started and listening on ${port}`);
});

