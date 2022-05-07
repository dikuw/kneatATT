const express = require('express');
const { testRunner } = require('./controllers/testController')

const app = express();

//  create .env file for enviromental variables
require('dotenv').config({ path: 'variables.env' });

app.get('/', (req, res) => {
    res.send('This is the ATT backend/API');
})

app.set('port', process.env.PORT || 8000);
const server = app.listen(app.get('port'), () => {
  console.log(`Express running on port ${server.address().port}`);
});

testRunner(process.env.TENANT, process.env.USERNAME, process.env.PASSWORD);