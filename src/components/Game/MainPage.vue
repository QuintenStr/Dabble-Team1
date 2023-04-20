<template>
  <h1>Game page</h1>
  <div class="main__wrapper" v-if="!hasGameEnded">
    <div class="main__infobox">
      <p class="infobox__timer">Time remaining: {{ minutes }}:{{ seconds.toString().padStart(2, '0') }}</p>
      <button class="button" v-on:click="endGame">END GAME</button>
    </div>
    <div class="main__deck">
      <p class="deck__player">You</p>
      <div class="deck__rack">
        <div class="rack__row">
          <div class="rack__col rack__11" ref="drop" @dragover.prevent @drop="dropChar">
            __
          </div>
          <div class="rack__col rack__12" ref="drop" @dragover.prevent @drop="dropChar">
            __
          </div>
        </div>
        <div class="rack__row">
          <div class="rack__col rack__21" ref="drop" @dragover.prevent @drop="dropChar">
            __
          </div>
          <div class="rack__col rack__22" ref="drop" @dragover.prevent @drop="dropChar">
            __
          </div>
          <div class="rack__col rack__23" ref="drop" @dragover.prevent @drop="dropChar">
            __
          </div>
        </div>
        <div class="rack__row">
          <div class="rack__col rack__31" ref="drop" @dragover.prevent @drop="dropChar">
            __
          </div>
          <div class="rack__col rack__32" ref="drop" @dragover.prevent @drop="dropChar">
            __
          </div>
          <div class="rack__col rack__33" ref="drop" @dragover.prevent @drop="dropChar">
            __
          </div>
          <div class="rack__col rack__34" ref="drop" @dragover.prevent @drop="dropChar">
            __
          </div>
        </div>
        <div class="rack__row">
          <div class="rack__col rack__41" ref="drop" @dragover.prevent @drop="dropChar">
            __
          </div>
          <div class="rack__col rack__42" ref="drop" @dragover.prevent @drop="dropChar">
            __
          </div>
          <div class="rack__col rack__43" ref="drop" @dragover.prevent @drop="dropChar">
            __
          </div>
          <div class="rack__col rack__44" ref="drop" @dragover.prevent @drop="dropChar">
            __
          </div>
          <div class="rack__col rack__45" ref="drop" @dragover.prevent @drop="dropChar">
            __
          </div>
        </div>
        <div class="rack__row">
          <div class="rack__col rack__51" ref="drop" @dragover.prevent @drop="dropChar">
            __
          </div>
          <div class="rack__col rack__52" ref="drop" @dragover.prevent @drop="dropChar">
            __
          </div>
          <div class="rack__col rack__53" ref="drop" @dragover.prevent @drop="dropChar">
            __
          </div>
          <div class="rack__col rack__54" ref="drop" @dragover.prevent @drop="dropChar">
            __
          </div>
          <div class="rack__col rack__55" ref="drop" @dragover.prevent @drop="dropChar">
            __
          </div>
          <div class="rack__col rack__56" ref="drop" @dragover.prevent @drop="dropChar">
            __
          </div>
        </div>
      </div>
      <div class="deck__stack" ref="deck__stack">
        <div v-for="char in stack" v-html="`${char.value} : ${char.score}`" :id="char.id" class="stack__char"
          :key="char.id" :ref="char.id" draggable="true" @dragstart="dragChar"></div>
      </div>
    </div>
  </div>
  <div v-if="hasGameEnded">
    <!-- EndPage -->
    <p class="winnerMessage">
      Congrats {{ winner }}, you won! You finished the game in {{ timeCompleted }} minute(s) and with {{ winnerPoints }}
      points!
    </p>
    <p class="textBoard">Leaderboard:</p>
    <ol class="leaderBoard">
      <li v-for="(player, i) in players" :key="i" :class="`p${i+1}`">Name: {{ player.name }} | Score: {{ player.points }}</li>
    </ol>
    <p class="remainingTime"></p>
    <router-link class="mainPage button" to="/">Home</router-link>
  </div>
</template>

<script>
import axios from 'axios';
import store from '@/store';
export default {
  data() {
    return {
      durationInSeconds: 180,
      timeRemaining: 0,
      timerInterval: null,
      hasGameEnded: false,
      chars: [
        {
          value: 'e',
          score: 3,
        },
        {
          value: 'a',
          score: 3,
        },
        {
          value: 'i',
          score: 3,
        },
        {
          value: 'o',
          score: 3,
        },
        {
          value: 'n',
          score: 3,
        },
        {
          value: 'r',
          score: 3,
        },
        {
          value: 't',
          score: 3,
        },
        {
          value: 'l',
          score: 3,
        },
        {
          value: 's',
          score: 3,
        },
        {
          value: 'u',
          score: 3,
        },
        {
          value: 'space',
          score: 0,
        },
        {
          value: 'space',
          score: 0,
        },
        {
          value: 'd',
          score: 6,
        },
        {
          value: 'g',
          score: 6,
        },
        {
          value: 'b',
          score: 9,
        },
        {
          value: 'c',
          score: 9,
        },
        {
          value: 'm',
          score: 9,
        },
        {
          value: 'p',
          score: 9,
        },
        {
          value: 'f',
          score: 12,
        },
        {
          value: 'h',
          score: 12,
        },
        {
          value: 'v',
          score: 12,
        },
        {
          value: 'w',
          score: 12,
        },
        {
          value: 'y',
          score: 12,
        },
        {
          value: 'k',
          score: 15,
        },
        {
          value: 'j',
          score: 24,
        },
        {
          value: 'x',
          score: 24,
        },
        {
          value: 'q',
          score: 30,
        },
        {
          value: 'z',
          score: 30,
        },
        {
          value: "'",
          score: 0,
        },
        {
          value: "'",
          score: 0,
        }
      ],
      winner: null,
      timeCompleted: null,
      winnerPoints: null,
      removedChars: [],
      index: null,
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

  mounted() {
    this.timeRemaining = this.durationInSeconds;
    this.timerInterval = setInterval(this.updateTimer, 1000);
  },

  methods: {
    updateTimer() {
      this.timeRemaining--;
      if (this.timeRemaining == 0) {
        clearInterval(this.timerInterval);
      }
    },
    setScoreToDb(score, playerId) {
      // Get player id from store

      // Update player points
      axios.get(`https://api.bklm.be/setPlayerPoints.php?points=${score}&playerId=${playerId}`)
        .catch(error => {
          console.log(error);
        });
    },
    getPlayersScore() {
      // Get player id from store
      const gameId = store.getters.gameId;

      axios.get(`https://api.bklm.be/getPlayersScore.php?gameId=${gameId}}`)
        .then(res => {
          store.commit('setPlayers', res.data.players);
        })
        .catch(error => {
          console.log(error);
        });
    },
    endGame() {
      const playerId = store.getters.currentPlayer.id;
      clearInterval(this.timerInterval);
      this.setScoreToDb(20, playerId);
      this.getPlayersScore();
      this.hasGameEnded = true;
    },
    generateStack() {
      // Generates a stack of random letter-objects
      const stack = [];
      for (let i = 0; i < 20; i++) {
        const char = this.chars[Math.floor(Math.random() * this.chars.length)];
        char.id = `${i}_${char.value}`;
        stack.push(char);
      }
      return stack;
    },
    dragChar(e) {
      e.dataTransfer.setData('text/plain', e.target.id);
      console.log(e.target.id);
    },
    dropChar(e) {
      e.preventDefault();
      let charId = e.dataTransfer.getData('text/plain');
      let draggedChar = document.getElementById(charId);
      if (e.target.innerHTML == draggedChar.innerHTML) return;
      const dropZone = e.target;

      // Remove draggedChar from stack
      console.log(this.stack.indexOf(draggedChar));
      this.stack.splice(this.stack.indexOf(draggedChar), 1);
      // this.stack.splice(this.index, 1);
      this.removedChars.push(draggedChar);

      // Put back currentChar to stack
      const currentChar = this.removedChars.find(obj => obj.value === dropZone.innerHTML);
      if (currentChar != null) {
        this.stack.push(currentChar);
        this.removedChars.splice(this.removedChars.indexOf(currentChar), 1);
      }

      // Replace currentChar with draggedChar
      dropZone.innerHTML = draggedChar.innerHTML;
    },
  }
};
</script>

<style scoped>
.main__wrapper {
  margin: 15px;
}

.button {
  background-color: #888;
  border: #888 solid 1px;
  color: #000;
  display: inline-block;
  padding: 10px;
  text-decoration: none;
}

/* Deck */
.deck__rack {
  margin: 15px 0px;
}

.rack__col {
  background-color: #B1AFFF;
  border: #000 solid 1px;
  display: inline-block;
  padding: 10px;
}

.rack__row {
  display: flex;
  justify-content: center;
}

/* Infobox */
.main__infobox {
  background-color: #C8FFD4;
  border: #000 solid 1px;
  margin-bottom: 15px;
  padding: 15px;
  text-align: center;
}

.main__infobox p {
  margin: 15px;
}

/* End Page */

.mainPage {
  margin-top: 150px;
  padding: 1rem;
  font-size: 20px;
  border: 3px solid #b8b4fc;
  margin-right: 30px;
  cursor: pointer;
  transition: 0, 8s;
  background: #fff;
  color: #b8b4fc;
  transition: 0.8s;
}

.mainPage:hover {
  color: #fff;
  background: #b8b4fc;
}

.leaderBoard {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  list-style: none;
  margin: 0 auto;
  padding: 0 1rem;
  counter-reset: leaderboard;
  width: 50%;
}

.leaderBoard li {
  counter-increment: leaderboard;
  margin-bottom: .5rem;
  display: flex;
  align-items: center;
  color: #4A4A4A;
}

.leaderBoard li::before {
  content: counter(leaderboard);
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(77, 171, 247, 0.16);
  color: #4DABF7;
  padding: 1rem;
  border-radius: 42px;
  height: 42px;
  width: 42px;
  font-size: 2rem;
  font-weight: 700;
  margin-right: .75rem;
}

.winnerMessage {
  margin-top: 30px;
}

.textBoard {
  margin-top: 10px;
  margin-bottom: 10px;
  color: #4DABF7;
}</style>