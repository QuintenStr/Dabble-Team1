<template>
    <h1>Playing</h1>
</template>
 
<script>
import store from '@/store'
import io from 'socket.io-client'

export default {
    data() {
        return {
            socket: {},
            players: [],
        }
    },
    created() {
        this.socket = io('http://localhost:3000')
    },
    beforeMount() {
        if (this.playerNames.length == 0) {
            this.$router.push({name: 'game'});
        }
    },
    mounted() {
        this.socket.on('players', data => {
            console.log(data);
        });
    },
    computed: {
        playerNames() {
            return store.getters.players;
        }
    }
}
</script>

<style></style>