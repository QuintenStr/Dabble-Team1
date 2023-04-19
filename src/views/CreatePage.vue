<template>
    <NewGame />
</template>
    
<script>
import NewGame from '../components/Game/NewGame.vue'

export default {
    data() {
        return {
            newGame: true,
        }
    },
    components: {
        NewGame,
    }
}
</script>
    
<style></style>