'use strict'

var express = require('express');
var FavoritoController = require('../controller/favorito');
var api = express.Router();
api.get('/prova/:nome?', FavoritoController.prova);
api.get('/favorito/:id', FavoritoController.getFavorito);
api.post('/favorito', FavoritoController.saveFavorito);
api.get('/favoriti', FavoritoController.getFavoriti);
api.put('/favorito/:id', FavoritoController.updateFavorito);
api.delete('/favorito/:id', FavoritoController.deleteFavorito);

module.exports = api;