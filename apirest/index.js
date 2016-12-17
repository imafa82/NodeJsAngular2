'use strict'
var mongoose = require('mongoose');
var port = process.env.PORT || 3678;
var app = require('./app');

mongoose.connect('mongodb://localhost/favor')
var db = mongoose.connection;
	db.on('error', console.error.bind(console, 'connection error:'));
	db.once('open', function() {
		  	app.listen(port, () => {
				console.log(`Api Rest funzionante in http://localhost:${port}`);
			});
	});			
				
		


