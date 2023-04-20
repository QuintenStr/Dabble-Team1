<template>
  <div>
    <div class="main__infobox">
      <p class="infobox__timer">Time remaining: {{ minutes }}:{{ seconds.toString().padStart(2, '0') }}</p>
      <button class="button" v-on:click="endGame">END GAME</button>
    </div>
    <div class="pyramid-container">
      <div :class="`pyramid-row row_${index + 1}`" v-for="(row, index) in pyramid" :key="index">
        <div class="pyramid-cell" v-for="(cell, index2) in row" :key="index2" @drop="drop($event, index, index2)"
          @dragover.prevent @click="returnLetter(cell)">
          {{ cell }}
        </div>
      </div>
    </div>
    <div class="letter-container">
      <div class="letter" v-for="(letter, index) in letters" :key="index" @dragstart="dragStart($event, letter)">
        {{ letter }}
      </div>
    </div>
    <button @click="checkAllWords">Check All Words</button>
  </div>
</template>

<script>
import axios from 'axios';
import store from '@/store';
export default {
  data() {
    return {
      // Timer
      durationInSeconds: 180,
      timeRemaining: 0,
      timerInterval: null,
      // rack
      letters: [],
      pyramid: [],
      correctWords: [],
    };
  },
  computed: {
    minutes() {
      return Math.floor(this.timeRemaining / 60);
    },
    seconds() {
      return this.timeRemaining % 60;
    },
    players() {
      const players = store.getters.players;
      players.sort((a, b) => b.points - a.points);
      return players;
    },
  },
  methods: {
    createLetters() {
      // Génère un tableau de 20 lettres aléatoires
      const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ '";
      for (let i = 0; i < 20; i++) {
        const randomIndex = Math.floor(Math.random() * alphabet.length);
        const letter = alphabet.charAt(randomIndex);
        this.letters.push(letter);
      }
    },
    createEmptyPyramid() {
      // Crée une pyramide vide de 5 rangées et 9 colonnes
      for (let i = 0; i < 5; i++) {
        const row = [];
        for (let j = 0; j < i + 2; j++) {
          row.push("");
        }
        this.pyramid.push(row);
      }
    },
    dragStart(event, letter) {
      // Permet le drag de la lettre
      event.dataTransfer.setData("text", letter);
    },
    isRowComplete(row) {
      // Vérifie si chaque cellule contient une lettre
      for (let i = 0; i < this.pyramid[row].length; i++) {
        if (this.$data.pyramid[row][i] === "") {
          return false; // La rangée n'est pas complète
        }
      }
      return true; // La rangée est complète
    },
    getWordFromRow(row) {
      return this.pyramid[row].join('');
    },
    async checkWord(word) {
      const res = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
      return res.status == 200 ? true : false;
    },
    drop(event, row, col) {
      // Permet le drop de la lettre et la met dans la pyramide
      const letter = event.dataTransfer.getData("text");
      this.pyramid[row].splice(col, 1, letter);
      const letterIndex = this.letters.indexOf(letter);
      if (letterIndex > -1) {
        this.letters.splice(letterIndex, 1);
      }
    },
    checkAllWords() {
      this.correctWords = [];
      for (let i = 0; i < this.pyramid.length; i++) {
        if (this.isRowComplete(i)) {
          console.log("La rangée est complète!");
          const word = this.getWordFromRow(i);

          console.log("Le mot formé est:", word);
          const exist = this.checkWord(word);

          if(exist) {
            this.correctWords.push(i);
          }
        } 
      }
    },
    returnLetter(letter) {
      this.letters.push(letter);
      this.pyramid[this.pyramid.findIndex(row => row.includes(letter))]
        .splice(this.pyramid[this.pyramid.findIndex(row => row.includes(letter))]
          .indexOf(letter), 1, "");
    },
    
    updateTimer() {
      this.timeRemaining--;
      if (this.timeRemaining == 0) {
        clearInterval(this.timerInterval);
      }
    },
    setScoreToDb() {
      // Get player id from store
      const playerId = store.getters.currentPlayer.id;

      // Update player points
      axios.get(`https://bklm.be/api/setPlayerPoints.php?points=${20}&playerId=${playerId}`)
        .catch(error => {
          console.log(error);
        });
    },
    getPlayersScore() {
      // Get player id from store
      const gameId = store.getters.gameId;

      axios.get(`https://bklm.be/api/getPlayersScore.php?gameId=${gameId}}`)
        .then(res => {
          store.commit('setPlayers', res.data.players);
        })
        .catch(error => {
          console.log(error);
        });
    },
    endGame() {
      clearInterval(this.timerInterval);
      this.setScoreToDb();
      this.getPlayersScore();
      this.hasGameEnded = true;
    },
  },
  mounted() {
    this.timeRemaining = this.durationInSeconds;
    this.timerInterval = setInterval(this.updateTimer, 1000);
    this.createLetters();
    this.createEmptyPyramid();
  }
};
</script>

<style>
/* Styles pour les lettres */
.letter-container {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.letter {
  width: 40px;
  height: 40px;
  background-color: #f0f0f0;
  margin: 0 10px;
  text-align: center;
  font-size: 24px;
  cursor: move;
}

/* Styles pour la pyramide */
.pyramid-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
}

.pyramid-row {
  display: flex;
  justify-content: center;
}

.pyramid-cell {
  width: 40px;
  height: 40px;
  background-color: #f0f0f0;
  margin: 0 10px;
  text-align: center;
  font-size: 24px;
  line-height: 40px;
}
</style>