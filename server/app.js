const Express = require('express');
const app = Express();
const Http = require('http').createServer(app);
const Socketio = require('socket.io')(Http);

app.use(function(req, res, next) {
    // Autoriser l'accès à partir de toutes les sources
    res.setHeader('Access-Control-Allow-Origin', '*');
    // Autoriser l'utilisation des méthodes HTTP suivantes
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Autoriser l'utilisation des en-têtes HTTP suivants
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    // Passer au middleware suivant
    next();
});

const games = {};

Socketio.on('connection', socket => {
    // Gérer la création d'un code de partie
    socket.on('createGame', (data) => {
        // génère un identifiant de jeu aléatoire
        const gameId = Math.floor(Math.random() * 1000);

        // Stocker la partie en cours
        games[gameId] = {
            players: [{ id: socket.id, name: data.playerName }],
            maxPlayers: data.maxPlayers
        };

        // ajouter le client au jeu
        socket.join(gameId);
        socket.emit('gameCreated', { gameId: gameId });
        console.log('game created ' + gameId);
    });

    // Player joins game
    socket.on('joinGame', (data) => {
        const gameId = data.gameId;

        // Vérifier si la partie existe
        if (!games[gameId]) {
            socket.emit('gameNotFound');
            return;
        }

        // Vérifier si la partie est pleine
        if (games[gameId].players.length >= games[gameId].maxPlayers) {
            socket.emit('gameFull');
            return;
        }

        // Ajouter le joueur à la partie en cours
        games[gameId].players.push({ id: socket.id, name: data.playerName });

        // Joindre la partie en cours
        socket.join(gameId);

        // Émettre l'événement 'gameJoined' au client avec l'ID de la partie
        socket.emit('gameJoined', { gameId: gameId });

        // Vérifier si la partie est prête à commencer
        if (games[gameId].players.length === games[gameId].maxPlayers) {
            // Émettre l'événement 'gameReady' à tous les joueurs de la partie
            io.to(gameId).emit('gameReady');
        }
    });
});

Http.listen(3030, () => {
    console.log('Listening at port 3030...');
})