<template>
    <h1>Create a game</h1>

    <div class="createGame" v-if="!createdGame">
        <label>Players: </label>
        <input type="number" v-model="players" min="2" max="4">
        <label>Your name: </label>
        <input type="text" v-model="currentPlayerName">
        <button @click="createGame()">Create game</button>
    </div>

    <div class="waitingPlayers" v-else>
        <h2>You created party {{ gameId }}</h2>
        <div class="players"></div>
        <button>START GAME</button>
    </div>

    <div class="error" v-if="errors">
        Your name is empty
    </div>
</template>

<script>
import store from '@/store';
import io from 'socket.io-client'

export default {
    data() {
        return {
            currentPlayerName: '',
            connectedPlayers: 1,
            players: 2,
            errors: false,
            createdGame: false,
            gameId: null,
            socket: {},
        }
    },
    mounted() {
        // Se connecter au serveur Socket.io
        this.socket = io('http://134.122.62.249');

        // Gérer l'événement 'gameCreated' pour recevoir l'ID de la partie
        this.socket.on('gameCreated', (data) => {
            this.gameId = data.gameId;
        });

        // Gérer l'événement 'gameNotFound' pour informer l'utilisateur que la partie n'existe pas
        this.socket.on('gameNotFound', () => {
            alert('La partie n\'existe pas.');
        });

        // Gérer l'événement 'gameFull' pour informer l'utilisateur que la partie est pleine
        this.socket.on('gameFull', () => {
            alert('La partie est pleine.');
        });

        // Gérer l'événement 'gameJoined' pour recevoir l'ID de la partie
        this.socket.on('gameJoined', (data) => {
            this.gameId = data.gameId;
        });

        // Gérer l'événement 'gameReady' pour indiquer que la partie a commencé
        this.socket.on('gameReady', () => {
            console.log('La partie a commencé.');
        });
    },
    methods: {
        createGame() {
            // Émettre l'événement 'createGame' au serveur
            if (this.currentPlayerName != '') {
                this.createdGame = true;
                this.socket.emit('createGame', { playerName: this.currentPlayerName, maxPlayers: this.players });
            }
            else this.errors = true;

        },
        // joinGame() {
        //     // Émettre l'événement 'joinGame' au serveur avec les données de la partie
        //     this.$socket.emit('joinGame', { playerName: this.playerName, gameId: this.gameId });
        // }
    },
}
</script>

<style scoped></style>