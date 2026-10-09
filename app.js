// app.js - ARCHIVO DE PRACTICA: contiene una credencial FALSA
const express = require('express');
const app = express();

const STRIPE_KEY = '***ELIMINADO***';

app.get('/', (req, res) => res.send('Hola'));
app.listen(3000);