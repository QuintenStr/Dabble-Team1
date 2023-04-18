<template>
    <h1>Game page</h1>
    <main class="main__wrapper">
        <div class="main__infobox">
            <p class="infobox__timer">Time remaining: {{ minutes }}:{{ seconds.toString().padStart(2, '0') }}</p>
            <a href="#" v-on:click="endGame" class="button" id="infobox__end">End game</a>
        </div>
        <div class="main__decks">
            <div class="decks__deck decks_deck1">
                <p class="deck__player">player name</p>
                <div class="deck__rack">
                    <div class="rack__row">
                        <div class="rack__col rack__11">
                            11
                        </div>
                        <div class="rack__col rack__12">
                            12
                        </div>
                    </div>
                    <div class="rack__row">
                        <div class="rack__col rack__21">
                            21
                        </div>
                        <div class="rack__col rack__22">
                            23
                        </div>
                        <div class="rack__col rack__23">
                            23
                        </div>
                    </div>
                    <div class="rack__row">
                        <div class="rack__col rack__31">
                            31
                        </div>
                        <div class="rack__col rack__32">
                            32
                        </div>
                        <div class="rack__col rack__33">
                            33
                        </div>
                        <div class="rack__col rack__34">
                            34
                        </div>
                    </div>
                    <div class="rack__row">
                        <div class="rack__col rack__41">
                            41
                        </div>
                        <div class="rack__col rack__42">
                            42
                        </div>
                        <div class="rack__col rack__43">
                            43
                        </div>
                        <div class="rack__col rack__44">
                            44
                        </div>
                        <div class="rack__col rack__45">
                            45
                        </div>
                    </div>
                    <div class="rack__row">
                        <div class="rack__col rack__51">
                            51
                        </div>
                        <div class="rack__col rack__52">
                            52
                        </div>
                        <div class="rack__col rack__53">
                            53
                        </div>
                        <div class="rack__col rack__54">
                            54
                        </div>
                        <div class="rack__col rack__55">
                            55
                        </div>
                        <div class="rack__col rack__56">
                            56
                        </div>
                    </div>
                </div>
                <p class="deck__stack">R A C K</p>
            </div>
            <div class="decks__deck decks_deck2">
                <p class="deck__player">player name</p>
                <div class="deck__rack">
                    <div class="rack__row">
                        <div class="rack__col rack__11">
                            11
                        </div>
                        <div class="rack__col rack__12">
                            12
                        </div>
                    </div>
                    <div class="rack__row">
                        <div class="rack__col rack__21">
                            21
                        </div>
                        <div class="rack__col rack__22">
                            23
                        </div>
                        <div class="rack__col rack__23">
                            23
                        </div>
                    </div>
                    <div class="rack__row">
                        <div class="rack__col rack__31">
                            31
                        </div>
                        <div class="rack__col rack__32">
                            32
                        </div>
                        <div class="rack__col rack__33">
                            33
                        </div>
                        <div class="rack__col rack__34">
                            34
                        </div>
                    </div>
                    <div class="rack__row">
                        <div class="rack__col rack__41">
                            41
                        </div>
                        <div class="rack__col rack__42">
                            42
                        </div>
                        <div class="rack__col rack__43">
                            43
                        </div>
                        <div class="rack__col rack__44">
                            44
                        </div>
                        <div class="rack__col rack__45">
                            45
                        </div>
                    </div>
                    <div class="rack__row">
                        <div class="rack__col rack__51">
                            51
                        </div>
                        <div class="rack__col rack__52">
                            52
                        </div>
                        <div class="rack__col rack__53">
                            53
                        </div>
                        <div class="rack__col rack__54">
                            54
                        </div>
                        <div class="rack__col rack__55">
                            55
                        </div>
                        <div class="rack__col rack__56">
                            56
                        </div>
                    </div>
                </div>
                <p class="deck__stack">R A C K</p>
            </div>
            <div class="decks__deck decks_deck3">
                <p class="deck__player">player name</p>
                <div class="deck__rack">
                    <div class="rack__row">
                        <div class="rack__col rack__11">
                            11
                        </div>
                        <div class="rack__col rack__12">
                            12
                        </div>
                    </div>
                    <div class="rack__row">
                        <div class="rack__col rack__21">
                            21
                        </div>
                        <div class="rack__col rack__22">
                            23
                        </div>
                        <div class="rack__col rack__23">
                            23
                        </div>
                    </div>
                    <div class="rack__row">
                        <div class="rack__col rack__31">
                            31
                        </div>
                        <div class="rack__col rack__32">
                            32
                        </div>
                        <div class="rack__col rack__33">
                            33
                        </div>
                        <div class="rack__col rack__34">
                            34
                        </div>
                    </div>
                    <div class="rack__row">
                        <div class="rack__col rack__41">
                            41
                        </div>
                        <div class="rack__col rack__42">
                            42
                        </div>
                        <div class="rack__col rack__43">
                            43
                        </div>
                        <div class="rack__col rack__44">
                            44
                        </div>
                        <div class="rack__col rack__45">
                            45
                        </div>
                    </div>
                    <div class="rack__row">
                        <div class="rack__col rack__51">
                            51
                        </div>
                        <div class="rack__col rack__52">
                            52
                        </div>
                        <div class="rack__col rack__53">
                            53
                        </div>
                        <div class="rack__col rack__54">
                            54
                        </div>
                        <div class="rack__col rack__55">
                            55
                        </div>
                        <div class="rack__col rack__56">
                            56
                        </div>
                    </div>
                </div>
                <p class="deck__stack">R A C K</p>
            </div>
            <div class="decks__deck decks_deck4">
                <p class="deck__player">player name</p>
                <div class="deck__rack">
                    <div class="rack__row">
                        <div class="rack__col rack__11">
                            11
                        </div>
                        <div class="rack__col rack__12">
                            12
                        </div>
                    </div>
                    <div class="rack__row">
                        <div class="rack__col rack__21">
                            21
                        </div>
                        <div class="rack__col rack__22">
                            23
                        </div>
                        <div class="rack__col rack__23">
                            23
                        </div>
                    </div>
                    <div class="rack__row">
                        <div class="rack__col rack__31">
                            31
                        </div>
                        <div class="rack__col rack__32">
                            32
                        </div>
                        <div class="rack__col rack__33">
                            33
                        </div>
                        <div class="rack__col rack__34">
                            34
                        </div>
                    </div>
                    <div class="rack__row">
                        <div class="rack__col rack__41">
                            41
                        </div>
                        <div class="rack__col rack__42">
                            42
                        </div>
                        <div class="rack__col rack__43">
                            43
                        </div>
                        <div class="rack__col rack__44">
                            44
                        </div>
                        <div class="rack__col rack__45">
                            45
                        </div>
                    </div>
                    <div class="rack__row">
                        <div class="rack__col rack__51">
                            51
                        </div>
                        <div class="rack__col rack__52">
                            52
                        </div>
                        <div class="rack__col rack__53">
                            53
                        </div>
                        <div class="rack__col rack__54">
                            54
                        </div>
                        <div class="rack__col rack__55">
                            55
                        </div>
                        <div class="rack__col rack__56">
                            56
                        </div>
                    </div>
                </div>
                <p class="deck__stack">R A C K</p>
            </div>
            <div class="decks__deck">
                <p class="deck__player">player name</p>
                <div class="deck__rack">
                    <div class="rack__row">
                        <div class="rack__col rack__11">
                            11
                        </div>
                        <div class="rack__col rack__12">
                            12
                        </div>
                    </div>
                    <div class="rack__row">
                        <div class="rack__col rack__21">
                            21
                        </div>
                        <div class="rack__col rack__22">
                            23
                        </div>
                        <div class="rack__col rack__23">
                            23
                        </div>
                    </div>
                    <div class="rack__row">
                        <div class="rack__col rack__31">
                            31
                        </div>
                        <div class="rack__col rack__32">
                            32
                        </div>
                        <div class="rack__col rack__33">
                            33
                        </div>
                        <div class="rack__col rack__34">
                            34
                        </div>
                    </div>
                    <div class="rack__row">
                        <div class="rack__col rack__41">
                            41
                        </div>
                        <div class="rack__col rack__42">
                            42
                        </div>
                        <div class="rack__col rack__43">
                            43
                        </div>
                        <div class="rack__col rack__44">
                            44
                        </div>
                        <div class="rack__col rack__45">
                            45
                        </div>
                    </div>
                    <div class="rack__row">
                        <div class="rack__col rack__51">
                            51
                        </div>
                        <div class="rack__col rack__52">
                            52
                        </div>
                        <div class="rack__col rack__53">
                            53
                        </div>
                        <div class="rack__col rack__54">
                            54
                        </div>
                        <div class="rack__col rack__55">
                            55
                        </div>
                        <div class="rack__col rack__56">
                            56
                        </div>
                    </div>
                </div>
                <p class="deck__stack">R A C K</p>
            </div>
            <div class="decks__deck">
                <p class="deck__player">player name</p>
                <div class="deck__rack">
                    <div class="rack__row">
                        <div class="rack__col rack__11">
                            11
                        </div>
                        <div class="rack__col rack__12">
                            12
                        </div>
                    </div>
                    <div class="rack__row">
                        <div class="rack__col rack__21">
                            21
                        </div>
                        <div class="rack__col rack__22">
                            23
                        </div>
                        <div class="rack__col rack__23">
                            23
                        </div>
                    </div>
                    <div class="rack__row">
                        <div class="rack__col rack__31">
                            31
                        </div>
                        <div class="rack__col rack__32">
                            32
                        </div>
                        <div class="rack__col rack__33">
                            33
                        </div>
                        <div class="rack__col rack__34">
                            34
                        </div>
                    </div>
                    <div class="rack__row">
                        <div class="rack__col rack__41">
                            41
                        </div>
                        <div class="rack__col rack__42">
                            42
                        </div>
                        <div class="rack__col rack__43">
                            43
                        </div>
                        <div class="rack__col rack__44">
                            44
                        </div>
                        <div class="rack__col rack__45">
                            45
                        </div>
                    </div>
                    <div class="rack__row">
                        <div class="rack__col rack__51">
                            51
                        </div>
                        <div class="rack__col rack__52">
                            52
                        </div>
                        <div class="rack__col rack__53">
                            53
                        </div>
                        <div class="rack__col rack__54">
                            54
                        </div>
                        <div class="rack__col rack__55">
                            55
                        </div>
                        <div class="rack__col rack__56">
                            56
                        </div>
                    </div>
                </div>
                <p class="deck__stack">R A C K</p>
            </div>
            <div class="decks__deck">
                <p class="deck__player">player name</p>
                <div class="deck__rack">
                    <div class="rack__row">
                        <div class="rack__col rack__11">
                            11
                        </div>
                        <div class="rack__col rack__12">
                            12
                        </div>
                    </div>
                    <div class="rack__row">
                        <div class="rack__col rack__21">
                            21
                        </div>
                        <div class="rack__col rack__22">
                            23
                        </div>
                        <div class="rack__col rack__23">
                            23
                        </div>
                    </div>
                    <div class="rack__row">
                        <div class="rack__col rack__31">
                            31
                        </div>
                        <div class="rack__col rack__32">
                            32
                        </div>
                        <div class="rack__col rack__33">
                            33
                        </div>
                        <div class="rack__col rack__34">
                            34
                        </div>
                    </div>
                    <div class="rack__row">
                        <div class="rack__col rack__41">
                            41
                        </div>
                        <div class="rack__col rack__42">
                            42
                        </div>
                        <div class="rack__col rack__43">
                            43
                        </div>
                        <div class="rack__col rack__44">
                            44
                        </div>
                        <div class="rack__col rack__45">
                            45
                        </div>
                    </div>
                    <div class="rack__row">
                        <div class="rack__col rack__51">
                            51
                        </div>
                        <div class="rack__col rack__52">
                            52
                        </div>
                        <div class="rack__col rack__53">
                            53
                        </div>
                        <div class="rack__col rack__54">
                            54
                        </div>
                        <div class="rack__col rack__55">
                            55
                        </div>
                        <div class="rack__col rack__56">
                            56
                        </div>
                    </div>
                </div>
                <p class="deck__stack">R A C K</p>
            </div>
        </div>
    </main>
</template>

<script>
export default {
  data() {
    return {
      durationInSeconds: 180,
      timeRemaining: 0,
      timerInterval: null,
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
<<<<<<< Updated upstream
=======
    generateRandomStack() {
        const alphabet = ['a', 'b', 'c', 'd', 'e', ]
        for (let i = 0; i <= 20; i++) {
            const element = array[i];
            Math.floor(Math.random() * this.array.length);
        }
    },
>>>>>>> Stashed changes
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
.main__decks {
    display: flex;
}

.decks__deck {
    width: 25%;
}

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
</style>