<template>
    <div class="createGame" v-if="!createdGame">
        <h1>Create party</h1>
        <div id="form-container">
            <div id="border">
                <div id="form">
                    <div id="form_players">
                        <label>Players: </label>
                        <input type="number" v-model="players" min="2" max="4">
                    </div>
                    <div id="form_name">
                        <label>Your name: </label>
                        <input type="text" v-model="currentPlayerName">
                    </div>
                    <div id="form_join">
                        <button id="btnJoin" @click="createGame()">Create game</button>
                    </div>
                </div>
            </div>
        </div>
        <div id="buttons">
            <router-link class="button" id="buttonHome" to="/">Home</router-link>
        </div>
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
            // Fetch game state
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
            // Send create event to server
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

<style scoped>
#border {
    margin-top: -30px;
}

#form_players {
    display: flex;
}
</style>