<template>
  <div class="body">
    <router-view />
  </div>
</template>

<script>
</script>

<style>
* {
  padding: 0;
  margin: 0;
}

html {
  height: 100%;
}

.body {
  height: 100%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}

h1 {
  text-align: center;
  font-size: 90px;
  font-family: 'Segoe UI', Tahoma, Verdana, sans-serif;
  color: #B2B0FF;
  margin-left: auto;
  margin-right: auto;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
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
  border: 2px solid black;
  width: 300px;
  text-decoration: none;
  color: black;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.button:hover {
  background-color: #FDFDBE;
}
/* Game > Stack */
.stack__char {
  background-color: #B1AFFF;
  display: inline-block;
  padding: 10px;
  margin: 10px;
}


</style>