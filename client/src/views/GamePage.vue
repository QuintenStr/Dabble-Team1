<template>
  <GamePage v-if="!newGame" />
</template>
  
<script>
import GamePage from '../components/Game/MainPage.vue'

export default {
  data() {
    return {
      newGame: true,
      joining: false,
    }
  },
  components: {
    GamePage,
  }
}
</script>
  
<style></style>