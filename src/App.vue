<template>
  <div class="body-container">
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

.body-container {
  background-color: #B9E9FC;
  height: 100%;
  display: flex;
  flex-direction: column;
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
  text-shadow: 1px 1px 0 #000,
    -1px -1px 0 #000,
    1px -1px 0 #000,
    -1px 1px 0 #000;
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


/* main 3 buttons on homescreen */
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


/* button to return to home page */
#buttonHome {
  margin-bottom: 30px;
  padding: 5px;
  font-size: 20px;
  background-color: #C9FFD5;
  border-radius: 5px;
  border: 2px solid black;
  width: 200px;
  text-decoration: none;
  color: black;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

#buttonHome:hover {
  background-color: #FDFDBE;
}


/* sound button mute*/
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


/* layout for settings and rules border */
#border-container {
  padding: 20px;
}

#border {
  background-color: #B2B0FF;
  border: 2px solid #333;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  max-width: 800px;
  margin: 0 auto;
  text-align: justify;
  line-height: 1.3;
  font-family: Arial, sans-serif;
}

#border p {
  margin-bottom: 20px;
  padding-left: 20px;
  text-indent: -20px;
  text-indent: 0;
  font-size: 18px;
  font-weight: bold;
}

#border p:first-of-type {
  padding-top: 0;
}

#border p:last-of-type {
  margin-bottom: 0;
}

/* Game > Stack */
.stack__char {
  background-color: #B1AFFF;
  display: inline-block;
  padding: 10px;
  margin: 10px;
}
</style>