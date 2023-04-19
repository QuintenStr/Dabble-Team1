<template>
  <GamePage />
</template>
  
<script>
import GamePage from '../components/Game/MainPage.vue'

export default {
  data() {
    return {
      joining: false,
    }
  },
  components: {
    GamePage,
  }
}
</script>
  
<style></style>