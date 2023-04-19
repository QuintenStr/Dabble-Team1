<template>
    <div class="body">
        <div id="BckgColor">
            <h1>Settings</h1>
            <audio
                src="https://files.freemusicarchive.org/storage-freemusicarchive-org/tracks/hIFJ4757SD1qbJ9veZoewTr0ihjJjpkMAOJZr1G6.mp3?download=1&name=Eggy%20Toast%20-%20Lose%20your%20head.mp3.mp3"
                loop ref="audio"></audio>
            <div id="buttons">
                <router-link class="button" to="/">Home</router-link>
                <button class="button1" v-on:click="changeBackground">Change background</button>
                <button class="button1">EN/NL</button>
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

.button1 {
    margin-bottom: 30px;
    padding: 10px;
    font-size: 30px;
    background-color: #C9FFD5;
    border-radius: 5px;
    border: 2px solid black;
    width: 300px;
    text-decoration: none;
    color: black;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    margin-top: 30px;
    cursor: pointer;
}

.button1:hover {
    background-color: #FDFDBE;
}
</style>
  