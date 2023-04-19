<template>
    <div class="createGame" v-if="!createdGame">
        <h1>Create party</h1>
        <label>Players: </label>
        <input type="number" v-model="players" min="2" max="4">
        <label>Your name: </label>
        <input type="text" v-model="currentPlayerName">
        <button @click="createGame()">Create game</button>
    </div>

    <div class="waitingPlayers" v-else>
        <h1>Party {{ game.id }}</h1>
        <div class="players">
            <ul>
                <li v-for="(player, i) in game.players" :key="player.id">
                    Player {{ i + 1 }}: {{ player.name }}
                </li>
            </ul>
        </div>
        <button>START GAME</button>
    </div>

    <div class="error" v-if="errors">
        Your name is empty
    </div>
</template>

<script>
import store from '@/store';
import io from 'socket.io-client'
import axios from 'axios';

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
            game: {},
        }
    },
    methods: {
        fetchPlayers() {
            // Remplacez "your-php-file.php" par le chemin vers votre fichier PHP
            axios.get(`http://localhost/dabble/gameReady.php?game_id=${this.game.id}`)
            .then(response => {
                this.game.players = response.data;
            })
            .catch(error => {
                console.log(error);
            });
        },
        async createGame() {
            // Émettre l'événement 'createGame' au serveur
            if (this.currentPlayerName != '') {
                this.createdGame = true;
                const res = await axios.get(`http://localhost/dabble/createGame.php?playerName=${this.currentPlayerName}&playersCount=${this.players}`);
                if (res.status == 200) {
                    this.game = res.data;
                    setInterval(() => {
                        this.fetchPlayers();
                    }, 2000);
                }
            }
            else this.errors = true;
        },
        async gameReady() {
            const res = await axios.get(`http://localhost/dabble/gameReady.php?game_id=${this.game.id}`);
            if (res.status == 200) console.log(res.data);
        },
        // joinGame() {
        //     // Émettre l'événement 'joinGame' au serveur avec les données de la partie
        //     this.$socket.emit('joinGame', { playerName: this.playerName, gameId: this.gameId });
        // }
    },
}
</script>

<style scoped></style>