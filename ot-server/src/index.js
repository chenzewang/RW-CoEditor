const http = require('http');
const url = require('url');
const express = require('express');
const WebSocket = require('ws');
const bodyParser = require('body-parser');
const queryString = require('querystring');
const Client = require('./client');
const path =require('path')
startServer();

const getParams = request => {
	return queryString.parse(url.parse(request.url).query);
};

function startServer() {
	// Create a web server to serve files and listen to WebSocket connections
	const app = express();
	app.use(express.static(path.join(__dirname, '../public')));
	console.log(path.join(__dirname, '../public'));
	app.use(bodyParser.json({ limit: '10mb' }));
	app.use(
		bodyParser.urlencoded({
			extended: false,
		}),
	);

	const server = http.createServer(app);

	var wss = new WebSocket.Server({ server });
	const client = new Client();
	let id = 1;
	wss.on('connection', function(ws, request) {
		//用户连接到 socket，此处应根据request获取到相关参数，并且处理用户token，传递到api，效验数据合法性
		//此处为模拟演示数据
		const params = getParams(request);
		let { uid } = params;
		if (!uid) uid = id;
		client.add(ws, 'demo', {
			id: uid,
			name: `用户${uid}`,
		});
		if (!params.uid) id++;
	});

	server.listen(7001);
	console.log('OT Server Listening on http://localhost:7001');
}
