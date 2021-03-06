const express = require('express');
const app = express();

app.use(require('./usuario'));
app.use(require('./categoria'));
app.use(require('./libro'));
app.use(require('./prestamo'));
app.use(require('./login'));
app.use(require('./imagen'));
app.use(require('./upload'));


module.exports = app;