const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('This is the ATT backend/API');
})

app.set('port', process.env.PORT || 8000);
const server = app.listen(app.get('port'), () => {
  console.log(`Express running on port ${server.address().port}`);
});