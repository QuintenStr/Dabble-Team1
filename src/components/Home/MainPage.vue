<template>
    <div class="body">
        <h1>Dabble</h1>
        <div id="buttons">
            <router-link class="button" to="/game">New game</router-link>
            <router-link class="button" to="/rules">Rules</router-link>
            <router-link class="button" to="/settings">Settings</router-link>
        </div>
    </div>
</template>

<script>

</script>

<style scoped>
.body {
    background-color: #B9E9FC;
    height: 100%;
}

h1 {
    text-align: center;
    font-size: 90px;
    font-family: 'Segoe UI', Tahoma, Verdana, sans-serif;
    color: #B2B0FF;
}

#buttons {
    align-items: center;
    display: flex;
    flex-direction: column;
}

.button {
    margin-bottom: 10px;
    padding: 10px;
    font-size: 30px;
    background-color: #C9FFD5;
    border-radius: 5px;
}

.button:hover {
    background-color: #FDFDBE;
}
</style>