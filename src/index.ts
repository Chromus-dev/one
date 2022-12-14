import { Server as SocketioServer } from 'socket.io';
import express from 'express';
import path from 'path';
import http from 'http';

const PORT = 3000 || process.env.PORT;

const app = express();
const server = http.createServer(app);
const io = new SocketioServer(server, { cors: { origin: '*' } });

app.use(express.static(path.join(__dirname, '../public')));

io.on('connection', (socket) => {
	console.log('a user connected');
	// socket.
	socket.on('message', (data) => {
		console.log(socket.id, data);
		io.emit('data', `${socket.id} said ${data}`);
	});
});

server.listen(PORT, () =>
	console.log(`App is live on port ${PORT} | http://localhost:${PORT}`)
);
