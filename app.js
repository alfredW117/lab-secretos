// app.js
const express = require('express');
const app = express();

const STRIPE_KEY = process.env.STRIPE_KEY;
if (!STRIPE_KEY) throw new Error('Falta la variable STRIPE_KEY');

app.get('/', (req, res) => res.send('Hola'));
app.listen(3000);