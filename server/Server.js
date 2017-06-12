const express = require('express');

function Server() {
	
	this.app = express();
	this.app.use(express.static('public'));
	
	this.app.get('/api', function(req, res) {
		
		const people = [
			{
				name: 'Anoop'
			},
			{
				name: 'Mundathan'
			}
		];

		res.json(people);
	});
}

Server.prototype.listen = function(port) {
	this.app.listen(port, function() {
		console.log(`Server running at port ${port}`);
	});
}

module.exports = Server;