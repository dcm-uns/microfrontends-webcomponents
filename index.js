const express = require('express');
const routes = require('./routes');

const app = express();
app.use(routes);
app.use(express.static("public"));


console.log('starting server on port 3000')
app.listen(3000)
