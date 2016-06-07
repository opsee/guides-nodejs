'use strict';

const http = require('http');
const cluster = require('cluster');
const cpus = require('os').cpus().length;
const port = process.env.PORT || 8081;

if (cluster.isMaster) {
	for (var i = 0; i < cpus; i++) {
		cluster.fork();
	}

	var Kardia = require('kardia');
	var kardia = Kardia.start({name: "guides-nodejs", host: "0.0.0.0", port: port});
} else {
	var kardia = require('kardia');
	
}