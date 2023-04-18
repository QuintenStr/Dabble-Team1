<template>
    <div class="body">
        <h1>Settings</h1>
        <audio
            src="https://files.freemusicarchive.org/storage-freemusicarchive-org/tracks/hIFJ4757SD1qbJ9veZoewTr0ihjJjpkMAOJZr1G6.mp3?download=1&name=Eggy%20Toast%20-%20Lose%20your%20head.mp3.mp3"
            loop ref="audio"></audio>
        <div id="buttons">
            <router-link class="button" to="/">Home</router-link>
        </div>
    </div>
</template>
  
<script>
export default {
    data() {
    },
    computed: {
    },
    methods: {
    },
};
</script>
  
<style scoped>
.button {
    position: fixed;
    bottom: 0;
    right: 20px;
}

#volume-slider-container {
    padding: 20px;
}
</style>
  