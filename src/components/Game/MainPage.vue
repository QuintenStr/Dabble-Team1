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
          <div class="rack__col rack__1" ref="drop" @dragover.prevent @drop="dropChar">
            __
          </div>
          <div class="rack__col rack__1" ref="drop" @dragover.prevent @drop="dropChar">
            __
          </div>
        </div>
        <div class="rack__row">
          <div class="rack__col rack__2" ref="drop" @dragover.prevent @drop="dropChar">
            __
          </div>
          <div class="rack__col rack__2" ref="drop" @dragover.prevent @drop="dropChar">
            __
          </div>
          <div class="rack__col rack__2" ref="drop" @dragover.prevent @drop="dropChar">
            __
          </div>
        </div>
        <div class="rack__row">
          <div class="rack__col rack__3" ref="drop" @dragover.prevent @drop="dropChar">
            __
          </div>
          <div class="rack__col rack__3" ref="drop" @dragover.prevent @drop="dropChar">
            __
          </div>
          <div class="rack__col rack__3" ref="drop" @dragover.prevent @drop="dropChar">
            __
          </div>
          <div class="rack__col rack__3" ref="drop" @dragover.prevent @drop="dropChar">
            __
          </div>
        </div>
        <div class="rack__row">
          <div class="rack__col rack__4" ref="drop" @dragover.prevent @drop="dropChar">
            __
          </div>
          <div class="rack__col rack__4" ref="drop" @dragover.prevent @drop="dropChar">
            __
          </div>
          <div class="rack__col rack__4" ref="drop" @dragover.prevent @drop="dropChar">
            __
          </div>
          <div class="rack__col rack__4" ref="drop" @dragover.prevent @drop="dropChar">
            __
          </div>
          <div class="rack__col rack__4" ref="drop" @dragover.prevent @drop="dropChar">
            __
          </div>
        </div>
        <div class="rack__row">
          <div class="rack__col rack__5" ref="drop" @dragover.prevent @drop="dropChar">
            __
          </div>
          <div class="rack__col rack__5" ref="drop" @dragover.prevent @drop="dropChar">
            __
          </div>
          <div class="rack__col rack__5" ref="drop" @dragover.prevent @drop="dropChar">
            __
          </div>
          <div class="rack__col rack__5" ref="drop" @dragover.prevent @drop="dropChar">
            __
          </div>
          <div class="rack__col rack__5" ref="drop" @dragover.prevent @drop="dropChar">
            __
          </div>
          <div class="rack__col rack__5" ref="drop" @dragover.prevent @drop="dropChar">
            __
          </div>
        </div>
      </div>
      <div class="deck__stack" ref="deck__stack">
        <div v-for="char in stack" v-html="`${char.value} : ${char.score}`" :id="`${char.id}`" class="stack__char"
          :key="char" draggable="true" @dragstart="dragChar"></div>
      </div>
    </div>
  </div>
  <div v-if="hasGameEnded && players[0]">
    <!-- EndPage -->
    <p class="winnerMessage">
      Congrats {{ players[0].name }} won! He finished the game with {{ players[0].points }} points!
    </p>
    <p class="textBoard">Leaderboard:</p>
    <ol class="leaderBoard">
      <li v-for="(player, i) in players" :key="i" :class="`p${i + 1}`">Name: {{ player.name }} | Score: {{ player.points
      }}
      </li>
    </ol>
    <p class="remainingTime"></p>
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
      isDone: null,
    };
  },

  computed: {
    minutes() {
      return Math.floor(this.timeRemaining / 60);
    },
    seconds() {
      return this.timeRemaining % 60;
    },
    stack() {
      return this.generateStack();
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

    let intervalID = setInterval(() => {
      this.getGameState();
      if (this.isDone == 1) {
        clearInterval(intervalID);
        this.hasGameEnded = true;
        this.countScore();
        this.getPlayersScore();
      }
    }, 500);
  },

  methods: {
    endGame() {
      if (this.isDone != 1) {
        const gameId = store.getters.gameId;
        axios.get(`https://api.bklm.be/endGame.php?gameId=${gameId}`).catch(error => { console.log(error); });
        this.hasGameEnded = true;
        clearInterval(this.timerInterval);
        this.countScore();
        this.getPlayersScore();
      }
    },
    getGameState() {
      const gameId = store.getters.gameId;

      axios.get(`https://api.bklm.be/gameState.php?gameId=${gameId}`)
        .then(res => {
          // Game is done
          this.isDone = res.data.isDone;
        })
        .catch(error => {
          console.log(error);
        });
    },
    updateTimer() {
      this.timeRemaining--;
      if (this.timeRemaining == 0) {
        clearInterval(this.timerInterval);
      }
    },
    setScoreToDb(score, playerId) {

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
    countScore() {
      console.log('count');
      // Count sum of each letter of each row
      for (let i = 1; i < 6; i++) {
        const row = document.querySelectorAll(`.rack__${i}`);
        let word = '';
        let score = 0;

        row.forEach(div => {
          let letter = div.innerHTML;
          word += letter;
          score += this.getLetterScore(letter);
        });

        // Give won points to player
        if (!word.includes('_')) {
          if (this.checkWord(word)) {
            this.setScoreToDb(score, store.getters.currentPlayer.id);
            console.log(score)
          }
          else {
            // Give lost points to all other players
            store.getters.players.forEach(player => {
              if (player.id != store.getters.currentPlayer.id) {
                this.setScoreToDb(score, player.id);
                console.log(score)

              }
            });
          }
        }
      }

      // Get letters from stack
      let score = 0;
      console.log(this.stack)
      this.stack.forEach(char => {
        // Give lost points to all other players
        score += this.getLetterScore(char.value);
        store.getters.players.forEach(player => {
          if (player.id != store.getters.currentPlayer.id) {
            this.setScoreToDb(score, player.id);
            console.log(score)
          }
        });
      });
    },
    getLetterScore(letter) {
      let score = 0;
      if ('eaionrtlsu'.indexOf(letter) != -1) {
        score += 3;
      }
      else if ('dg'.indexOf(letter) != -1) {
        score += 6;
      }
      else if ('bcmp'.indexOf(letter) != -1) {
        score += 9;
      }
      else if ('fhvwy'.indexOf(letter) != -1) {
        score += 12;
      }
      else if ('k'.indexOf(letter) != -1) {
        score += 15;
      }
      else if ('jx'.indexOf(letter) != -1) {
        score += 24;
      }
      else if ('qz'.indexOf(letter) != -1) {
        score += 30;
      }
      return score;
    },
    async checkWord(word, lang) {
      // Checks to see if the word exists or not
      const resp = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
      return resp.status == 200 ? true : false;
    },
    generateStack() {
      // Generates a stack of 20 random letter-objects
      const stack = [];
      for (let i = 0; i < 20; i++) {
        // ChatGPT
        let char = Object.assign({}, this.chars[Math.floor(Math.random() * this.chars.length)]);
        char.id = `char-${i}`;
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
      let draggedCharId = e.dataTransfer.getData('text/plain');
      const draggedChar = this.stack.find((obj) => obj.id == draggedCharId);

      if (e.target.innerHTML == draggedChar.innerHTML) return;

      const draggedCharIndex = this.stack.findIndex((obj) => obj.id == draggedCharId);
      const dropZone = e.target;
      const currentChar = this.removedChars.find((obj) => obj.value == dropZone.innerHTML);

      // Remove draggedChar from stack
      this.stack.splice(draggedCharIndex, 1);
      this.removedChars.push(draggedChar);

      // Put back currentChar to stack if needed
      if (currentChar != null) {
        this.stack.push(currentChar);
        this.removedChars.splice(this.removedChars.indexOf(currentChar), 1);
      }

      // Show draggedChar
      console.log(this.stack);
      dropZone.innerHTML = draggedChar.value;
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
}
</style>