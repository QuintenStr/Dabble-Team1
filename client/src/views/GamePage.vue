<template>
  <GamePage v-if="!newGame" />
  <NewGame v-else/>
</template>
  
<script>
import GamePage from '../components/Game/MainPage.vue'
import NewGame from '../components/Game/NewGame.vue'

export default {
  data() {
    return {
      newGame: true,
    }
  },
  components: {
    GamePage,
    NewGame,
  }
}
</script>
  
<style></style>