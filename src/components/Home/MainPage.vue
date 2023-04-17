<template>
    <h1>Dabble</h1>
  <div id="buttons">
      <button class="button" id="button1">New game</button>
      <button class="button" id="button2">How to play</button>
      <button class="button" id="button3">Settings</button>
  </div>
</template>

<script>

</script>

<style>
body {
  background-color: #B9E9FC;
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

.button:hover{
  background-color: #FDFDBE;
}
</style>