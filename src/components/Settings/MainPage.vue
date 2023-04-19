<template>
    <div class="body">
        <div id="BckgColor">
            <h1>Settings</h1>
            <audio
                src="https://files.freemusicarchive.org/storage-freemusicarchive-org/tracks/hIFJ4757SD1qbJ9veZoewTr0ihjJjpkMAOJZr1G6.mp3?download=1&name=Eggy%20Toast%20-%20Lose%20your%20head.mp3.mp3"
                loop ref="audio"></audio>
            <div id="buttons">
                <router-link class="button" to="/">Home</router-link>
                <button class="backgroundChanger" v-on:click="changeBackground">Change background</button>
            </div>
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
        changeBackground() {
            // const colors = ["redBackground,yellowBackground,greenBackground"];
            // let colorIndex = 0;
            const bgcolor = `rgb(${+Math.random() * 255}, ${+Math.random() * 255}, ${+Math.random() * 255})`;
            const header = document.getElementById("BckgColor");
            const body = document.querySelector("body");
            body.style.backgroundColor = bgcolor;
            header.style.backgroundColor = bgcolor;
            console.log('button');
            console.log(body);
            // background.classList.remove(colors[colorIndex]);
            // colorIndex++;
            // if (colorIndex >= colors.length) {
            // colorIndex = 0;
        }
        // background.classList.add(colors[colorIndex]);
    }
}

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

.greenBackground {
    background-color: green;
}

.redBackground {
    background-color: red;
}

.yellowBackground {
    background-color: yellow;
}
</style>
  