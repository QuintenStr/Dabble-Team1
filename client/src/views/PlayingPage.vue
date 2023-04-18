<template>
    <PlayingPage />
</template>
    
<script>
import PlayingPage from '../components/Playing/MainPage.vue'

export default {
    data() {
        return {
            newGame: true,
        }
    },
    components: {
        PlayingPage,
    }
}
</script>
    
<style></style>