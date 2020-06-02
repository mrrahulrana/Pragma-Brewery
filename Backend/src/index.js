const http = require('http').createServer(require('./routes'));
const socket = require('socket.io')(http);

const PORT = process.env.PORT || 3000;

socket.on('connection', require('./beerUpdates'));

http.listen(PORT, () => console.log(`Server running at port ${PORT}`));
