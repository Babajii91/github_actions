const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.status(200).send('Bienvenue sur mon serveur CI/CD !');
});

module.exports = app;
