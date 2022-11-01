console.log('hello world');
console.log(document.location.origin);
const socket = io(`ws://${document.location.origin.replace(/https?:\/\//, '')}`, { autoConnect: false });
socket.on('message', (text) => {
	const el = document.createElement('li');
	el.innerHTML = text;
	document.querySelector('ul').appendChild(el);
});

document.querySelector('button').onclick = () => {
	const text = document.querySelector('input').value;
	socket.emit('message', text);
};
