<template>
    <div class="createGame" v-if="!joinedGame">
        <h1>Join party</h1>
        <div id="form-container">
            <div id="border">
                <div id="form">
                    <div id="form_name">
                        <label>Your name: </label>
                        <input type="text" v-model="name">
                    </div>
                    <div id="form_code">
                        <label>Game code: </label>
                        <input type="text" v-model="inpGameId">
                    </div>
                    <div id="form_join">
                        <button id="btnJoin" @click="joinGame()">Join game</button>
                    </div>
                </div>
            </div>
        </div>
        <div id="buttons">
            <router-link class="button" id="buttonHome" to="/">Home</router-link>
        </div>
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
            isStarted: 0,
            game: {},
            error: '',
        }
    },
    methods: {
        fetchPlayers() {
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
                        }, 2000);
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

<style scoped>
#border {
    margin-top: -30px;
}

#form_code {
    display: flex;
}
</style>