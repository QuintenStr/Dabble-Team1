<template>
  <GamePage />
  <TestPage v-if="false" />
</template>
  
<script>
import GamePage from '../components/Game/MainPage.vue'
import TestPage from '../components/Game/TestPage.vue'

export default {
  data() {
    return {
      joining: false,
    }
  },
  components: {
    GamePage,
    TestPage,
  }
}
</script>
  
<style></style>