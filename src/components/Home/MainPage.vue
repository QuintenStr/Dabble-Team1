<template>
    <div class="body">
        <h1>Dabble</h1>
        <div id="buttons">
            <router-link class="button" to="/create">Create game</router-link>
            <router-link class="button" to="/join">Join game</router-link>
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

<style scoped>
.body{
  display: flex;
  flex-direction: column;
}
h1 {
  margin-bottom: 60px;
}
</style>
