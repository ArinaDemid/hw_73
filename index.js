const express = require('express');
const Vigenere = require('caesar-salad').Vigenere;

const app = express();
const port = 8000;

const password = 'arina';


//Task1:
app.get('/:name', (req, res) => {
  res.send(req.params.name);
});


//Task2:

// example: fantastic - fjfgascap;
//          hndyo - hello;
//          word - wxjq;
//          fagfen -frosen;


app.get('/encode/:word', (req, res) => {
  res.send(Vigenere.Decipher(password).crypt(req.params.word));
});

app.get('/decode/:word', (req, res) => {
  res.send(Vigenere.Cipher(password).crypt(req.params.word));
});

app.listen(port, () => {
  console.log('We are live on ' + port);
});
