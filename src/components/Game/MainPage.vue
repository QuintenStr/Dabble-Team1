<template>
  <h1>Game page</h1>
  <div class="main__wrapper" v-if="!hasGameEnded">
    <div class="main__infobox">
      <p class="infobox__timer">Time remaining: {{ minutes }}:{{ seconds.toString().padStart(2, '0') }}</p>
      <button class="button" v-on:click="hasGameEnded = true">END GAME</button>
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
      <div class="deck__stack">
        <div v-for="char in stack" v-html="`${char.value} : ${char.score}`" :id="char.id" class="stack__char"
          :key="char.id" :ref="char.id" draggable="true" @dragstart="dragChar"></div>
      </div>
    </div>
  </div>
  <div v-if="hasGameEnded">
        <!-- EndPage -->
        <p class="winnerMessage">
            Congrats {{ winner }}, you won! You finished the game in {{ timeCompleted }} minute(s) and with {{ winnerPoints }} points!
        </p>
        <p class="textBoard">Leaderboard:</p>
        <ol class="leaderBoard">
            <li class="p1">Player1</li>
            <li class="p2">Player2</li>
            <li class="p3">Player3</li>
            <li class="p4">Player4</li>
        </ol>
        <p class="remainingTime"></p>
        <router-link class="mainPage button" to="/">Home</router-link>
    </div>
</template>

<script>
export default {
  data() {
    return {
      durationInSeconds: 180,
      timeRemaining: 0,
      timerInterval: null,
      hasGameEnded: false,
      chars: [
        {
          id: 1,
          value: 'e',
          score: 3,
        },
        {
          id: 2,
          value: 'a',
          score: 3,
        },
        {
          id: 3,
          value: 'i',
          score: 3,
        },
        {
          id: 4,
          value: 'o',
          score: 3,
        },
        {
          id: 5,
          value: 'n',
          score: 3,
        },
        {
          id: 6,
          value: 'r',
          score: 3,
        },
        {
          id: 7,
          value: 't',
          score: 3,
        },
        {
          id: 8,
          value: 'l',
          score: 3,
        },
        {
          id: 9,
          value: 's',
          score: 3,
        },
        {
          id: 10,
          value: 'u',
          score: 3,
        },
        {
          id: 11,
          value: 'space',
          score: 0,
        },
        {
          id: 11,
          value: 'space',
          score: 0,
        },
        {
          id: 12,
          value: 'd',
          score: 6,
        },
        {
          id: 13,
          value: 'g',
          score: 6,
        },
        {
          id: 14,
          value: 'b',
          score: 9,
        },
        {
          id: 15,
          value: 'c',
          score: 9,
        },
        {
          id: 16,
          value: 'm',
          score: 9,
        },
        {
          id: 17,
          value: 'p',
          score: 9,
        },
        {
          id: 18,
          value: 'f',
          score: 12,
        },
        {
          id: 19,
          value: 'h',
          score: 12,
        },
        {
          id: 20,
          value: 'v',
          score: 12,
        },
        {
          id: 21,
          value: 'w',
          score: 12,
        },
        {
          id: 22,
          value: 'y',
          score: 12,
        },
        {
          id: 23,
          value: 'k',
          score: 15,
        },
        {
          id: 24,
          value: 'j',
          score: 24,
        },
        {
          id: 25,
          value: 'x',
          score: 24,
        },
        {
          id: 26,
          value: 'q',
          score: 30,
        },
        {
          id: 27,
          value: 'z',
          score: 30,
        },
        {
          id: 28,
          value: "'",
          score: 0,
        },
        {
          id: 29,
          value: "'",
          score: 0,
        }
      ],
      stack: null,
      winner: null,
      timeCompleted: null,
      winnerPoints: null,
    };
  },

  computed: {
    minutes() {
      return Math.floor(this.timeRemaining / 60);
    },
    seconds() {
      return this.timeRemaining % 60;
    },
  },

  mounted() {
    this.timeRemaining = this.durationInSeconds;
    this.timerInterval = setInterval(this.updateTimer, 1000);
    this.stack = this.generateStack();
  },

  methods: {
    updateTimer() {
      this.timeRemaining--;
      if (this.timeRemaining == 0) {
        clearInterval(this.timerInterval);
      }
    },
    endGame() {
      clearInterval(this.timerInterval);
    },
    generateStack() {
      // Generates a stack of random letter-objects
      const stack = [];
      for (let i = 0; i < 20; i++) {
        stack.push(this.chars[Math.floor(Math.random() * this.chars.length)]);
      }
      return stack;
    },
    dragChar(e) {
      e.dataTransfer.setData('text/plain', e.target.id);
    },
    dropChar(e) {
      e.preventDefault();
      const charId = e.dataTransfer.getData('text/plain');
      const draggedChar = document.getElementById(charId);
      e.target.innerHTML = draggedChar.innerHTML;
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