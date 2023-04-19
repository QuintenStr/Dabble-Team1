<template>
    <div>
        <h1>Settings</h1>
        <div id="buttons">
            <router-link class="button" to="/">Home</router-link>
        </div>
    </div>
</template>
  
<script>
export default {
    data() {
    },
    computed: {
    },
    methods: {
    },
};
</script>
  
<style scoped>
.button {
    position: fixed;
    bottom: 0;
    right: 20px;
}

#volume-slider-container {
    padding: 20px;
}
</style>
  