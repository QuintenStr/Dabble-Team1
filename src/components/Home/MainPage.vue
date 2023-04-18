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
  display: flex;
  flex-direction: column;
}
#buttons {
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-top: auto;
  margin-bottom: auto;
}
.button {
  margin-bottom: 30px;
  padding: 10px;
  font-size: 30px;
  background-color: #C9FFD5;
  border-radius: 5px;
  border-color: black;
  width: 300px;
}
.button:hover {
  background-color: #FDFDBE;
}
</style>