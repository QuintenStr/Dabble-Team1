<template>
    <JoinGame />
</template>
    
<script>
import JoinGame from '../components/Game/JoinGame.vue'

export default {
    data() {
        return {
            newGame: true,
        }
    },
    components: {
        JoinGame,
    }
}
</script>
    
<style></style>