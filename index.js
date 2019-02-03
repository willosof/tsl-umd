/*
Copyright (c) 2016, William Viker <william.viker@gmail.com>

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
*/

var debug        = require("debug")("tsl-umd");
var util         = require('util');
var EventEmitter = require('events').EventEmitter;
var dgram        = require('dgram');
var packet       = require('packet');


function tslumd(port) {

	var self = this;

	self.port = port;
	self.parser = packet.createParser();
	self.server = dgram.createSocket('udp4');
	self.parser.packet('tsl', 'b8{x1, b7 => address},b8{x2, b2 => brightness, b1 => tally4, b1 => tally3, b1 => tally2, b1 => tally1 }, b8[16] => label');

	self.server.on('error', (err) => {
		debug('error',err);
		throw err;
		self.server.close();
	});

	self.server.on('message', (msg, rinfo) => {
		self.parser.extract("tsl", function (res) {
			res.label = new Buffer(res.label).toString();
			res.sender = rinfo.address;
			self.emit('message', res);
		});
		self.parser.parse(msg);
	});

	self.server.on('listening', () => {
		var address = self.server.address();
		console.log(`server listening ${address.address}:${address.port}`);
	});

	self.server.bind(self.port);

}

util.inherits(tslumd, EventEmitter);

exports = module.exports = tslumd;
