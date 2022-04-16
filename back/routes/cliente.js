'use strict'

var express = require('express');
var clienteController = require('../controller/ClienteController');

var api = express.Router();

api.post('/registro_cliente',clienteController.registro_cliente);

module.exports = api;
