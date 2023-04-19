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
        <button v-on:click="launchGame()">START GAME</button>
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
                    this.connectedPlayers = response.data.length;
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

                    let intervalID = setInterval(() => {
                        this.fetchPlayers();
                        if (this.connectedPlayers === this.players) {
                            clearInterval(intervalID);
                        }
                    }, 2000);
                }
            }
            else this.errors = true;
        },
        launchGame() {
            axios.get(`http://localhost/dabble/startGame.php?game_id=${this.game.id}`)
            .then(res => {
                this.$router.push('/game');
            })
        }
    },
}
</script>

<style scoped></style>