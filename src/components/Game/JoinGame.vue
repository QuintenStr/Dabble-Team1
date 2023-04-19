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
        <h1>Party {{ inpGameId }}</h1>
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
            connectedPlayers: 1,
            playersCount: 2,
            isStarted: null,
            game: {},
            error: '',
        }
    },
    methods: {
        fetchPlayers() {
            if(this.isStarted == 1) return;
            axios.get(`http://localhost/dabble/gameReady.php?game_id=${this.inpGameId}`)
                .then(response => {
                    this.game.players = response.data;
                    this.connectedPlayers = response.data.length;
                    this.isStarted = response.data[0].isStarted;
                })
                .catch(error => {
                    console.log(error);
                });
        },
        joinGame() {
            axios.get(`http://localhost/dabble/joinGame.php?playerName=${this.name}&gameId=${this.inpGameId}`)
                .then(res => {
                    if (res.data.error) this.error = res.data.error;
                    else {
                        this.error = '';
                        this.joinedGame = true;
                        this.playersCount = res.data.playersCount;

                        let intervalID = setInterval(() => {
                            this.fetchPlayers();
                            if (this.isStarted == 1) {
                                clearInterval(intervalID);
                                this.launchGame();
                            }
                        }, 500);
                    }
                })
        },
        launchGame() {
            axios.get(`http://localhost/dabble/startGame.php?game_id=${this.inpGameId}`)
            .then(res => {
                this.$router.push('/game');
            })
        }
    },
}
</script>

<style scoped></style>