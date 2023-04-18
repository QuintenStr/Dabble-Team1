<template>
  <div class="body">
    <audio src="https://files.freemusicarchive.org/storage-freemusicarchive-org/tracks/hIFJ4757SD1qbJ9veZoewTr0ihjJjpkMAOJZr1G6.mp3?download=1&name=Eggy%20Toast%20-%20Lose%20your%20head.mp3.mp3" loop ref="audio1"></audio>
    <audio src="https://audio-previews.elements.envatousercontent.com/files/294514974/preview.mp3?response-content-disposition=attachment%3B+filename%3D%22CJSAQKY-vibrant-game-game-alert-1.mp3%22" ref="audio2"></audio>
    <h1>Dabble</h1>
    <div id="buttons">
      <router-link class="button" to="/game">New game</router-link>
      <router-link class="button" to="/rules">Rules</router-link>
      <router-link class="button" to="/settings">Settings</router-link>
    </div>
    <button @click="toggleMute">{{ muted ? 'Unmute' : 'Mute' }}</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      muted: false
    }
  },
  mounted() {
    this.$refs.audio1.play()
  },
  methods: {
    toggleMute() {
      this.$refs.audio1.muted = !this.$refs.audio1.muted
      this.muted = this.$refs.audio1.muted
    }
  }
}
</script>

<style scoped>
.body{
  display: flex;
  flex-direction: column;
}
</style>