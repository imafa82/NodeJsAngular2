'use strict'
var Favorito = require('../models/favorito');
function prova (req, res)  {
	if(req.params.nome)
		var nome = req.params.nome;
	else
		var nome = "senza nome";
	res.status(200).send({
		data: [2,3,4],
		message: "ciao mondoooo - "+nome
	});
}

function getFavorito(req, res) {
	var favoritoId = req.params.id;
	Favorito.findById(favoritoId, function(err, favorito){
		if (err){
			res.status(500).send({messaggio: "Errore nella lettura dei dati"});
		} else {
			if (!favorito){
				res.status(404).send({messaggio: "Non ci sono dati"});
			} else {
				res.status(200).send({favorito});		
			}
		}
		
	});
	
}
function getFavoriti(req, res) {
	Favorito.find({}).sort('-_id').exec((err, favoriti) => {
		if (err){
			res.status(500).send({messaggio: "Errore nella lettura dei dati"});
		} else {
			if (!favoriti){
				res.status(404).send({messaggio: "Non ci sono dati"});
			} else {
				res.status(200).send({favoriti: favoriti});	
			}
		}
		
	});
}
function saveFavorito(req, res) {
	var favorito = new Favorito();
	var params = req.body;
	favorito.title = params.title;
	favorito.description = params.description;
	favorito.url = params.url;

	favorito.save((err, favoritoStored) =>{
		if(err){
			res.status(500).send({messaggio: "Errore nell'inserimento del preferito"});
		} else {
			res.status(200).send({favorito: favoritoStored});

		}
		
	});
	
}
function updateFavorito(req, res) {
	var favoritoId = req.params.id;
	var update = req.body;
	Favorito.findByIdAndUpdate(favoritoId, update, (err, favoritoUpdated) => {
		if (err){
			res.status(500).send({messaggio: "Errore nella lettura dei dati"});
		} else {
			res.status(200).send({favorito: update});
		}
		
	});
	
}
function deleteFavorito(req, res) {
	var favoritoId = req.params.id;
	Favorito.findById(favoritoId, function(err, favorito){
		if (err){
			res.status(500).send({messaggio: "Errore nella lettura dei dati"});
		}
		if (!favorito){
			res.status(404).send({messaggio: "Non ci sono dati"});
		} else {
			favorito.remove(err => {
				if (err){
					res.status(500).send({messaggio: "Eliminazione non riuscita"});
				} else {
					res.status(200).send({messaggio: "Eliminazione effettuata con successo"});
				}
			});
		}

		
	});
}
module.exports={
	prova,
	getFavorito,
	getFavoriti,
	saveFavorito,
	updateFavorito,
	deleteFavorito
}