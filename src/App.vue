<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/game">Game</router-link>
    <router-link to="/settings">Rules</router-link>
  </nav> -->
  <router-view />
</template>

<style>
* {
  padding: 0;
  margin: 0;
}

html {
  height: 100%;
}

body {
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
</style>