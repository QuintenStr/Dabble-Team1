<template>
  <div class="body">
    <router-view />
    <audio
      src="https://files.freemusicarchive.org/storage-freemusicarchive-org/tracks/hIFJ4757SD1qbJ9veZoewTr0ihjJjpkMAOJZr1G6.mp3?download=1&name=Eggy%20Toast%20-%20Lose%20your%20head.mp3.mp3"
      loop ref="audio">
    </audio>
    <button id="muteBtn" @click="toggleAudio">{{ isPlaying ? 'Sound On' : 'Sound Off' }}</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isPlaying: false
    }
  },
  mounted() {
  },
  methods: {
    toggleAudio() {
      const audio = this.$refs.audio;
      this.isPlaying = !this.isPlaying;
      if (this.isPlaying) {
        audio.play();
      } else {
        audio.pause();
      }
    },
    playAudio() {
      const speler = this.$refs.audio;
      this.isPlaying = true;
      speler.play();
    }
  }
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
}

html {
  height: 100%;
}

body {
  height: 100%;
}

.body {
  background-color: #B9E9FC;
  height: 100%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}

h1 {
  text-align: center;
  font-size: 90px;
  font-family: 'Segoe UI', Tahoma, Verdana, sans-serif;
  color: #B2B0FF;
  margin-left: auto;
  margin-right: auto;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

#buttons {
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-top: auto;
  margin-bottom: auto;
}

.button {
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
}

.button:hover {
  background-color: #FDFDBE;
}

#muteBtn {
  margin-top: 10px;
  margin-left: 10px;
  padding: 5px;
  font-size: 15px;
  background-color: #C9FFD5;
  border-radius: 5px;
  border: 2px solid black;
  width: 100px;
  text-decoration: none;
  color: black;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  align-items: center;
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
}

#muteBtn:hover {
  background-color: #FDFDBE;
}


/* Game > Stack */
.stack__char {
  background-color: #B1AFFF;
  display: inline-block;
  padding: 10px;
  margin: 10px;
}
</style>