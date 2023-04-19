<template>
  <div class="body-container">
    <h1>Dabble</h1>
    <div id="buttons">
      <router-link class="button" to="/game">New game</router-link>
      <router-link class="button" to="/rules">Rules</router-link>
      <router-link class="button" to="/settings">Settings</router-link>
    </div>
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
   
  },
  methods: {
    toggleMute() {
      this.$refs.audio1.muted = !this.$refs.audio1.muted
      this.muted = this.$refs.audio1.muted
    }
  }
}
</script>

<style>
</style>