<template>
    <div class="createGame" v-if="!joinedGame">
        <h1>Join party</h1>
        <label>Your name: </label>
        <input type="text" v-model="name">
        <label>Game code: </label>
        <input type="text" v-model="inpGameId">
        <button @click="joinGame()">Join game</button>
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
    </div>

    <div class="error" v-if="error != ''">
        {{ error }}
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            name: '',
            inpGameId: null,
            joinedGame: false,
            game: {},
            error: '',
        }
    },
    methods: {
        fetchPlayers() {
            // Remplacez "your-php-file.php" par le chemin vers votre fichier PHP
            axios.get(`http://localhost/dabble/gameReady.php?game_id=${this.inpGameId}`)
                .then(response => {
                    this.game.players = response.data;
                })
                .catch(error => {
                    console.log(error);
                });
        },
        joinGame() {
            // Remplacez "your-php-file.php" par le chemin vers votre fichier PHP
            axios.get(`http://localhost/dabble/joinGame.php?playerName=${this.name}&gameId=${this.inpGameId}`)
                .then(res => {
                    if(res.data.error) this.error = res.data.error;
                    else {
                        this.error = '';
                        this.joinedGame = true;
                        setInterval(() => {
                            this.fetchPlayers();
                        }, 2000);
                    }
                })
        }
    },
}
</script>

<style scoped></style>