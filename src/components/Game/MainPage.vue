<template>
    <h1>Game page</h1>
    <main class="main__wrapper">
        <div class="main__infobox">
            <p id="infobox__time">Time Remaining: 10:00</p>
            <a href="#" class="button" id="infobox__end">End game</a>
        </div>
        <div class="main__decks">
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

</script>

<style>
.main__wrapper {
    margin: 15px;
}

.button {
    display: inline-block;
    text-decoration: none;
    color: #000;
    padding: 10px;
    background-color: #888;
    border: #888 solid 1px;
}

/* Deck */
.decks__deck p {
    text-align: center;
}

.deck__rack {
    margin: 15px 0px;
}

.rack__col {
    background-color: #B1AFFF;
    padding: 10px;
    border: #000 solid 1px;
    display: inline-block;
}

.rack__row {
    display: flex;
    justify-content: center;
}

/* Infobox */
.main__infobox {
    background-color: #C8FFD4;
    text-align: center;
    border: #000 solid 1px;
    padding: 15px;
}

.main__infobox p {
    margin: 15px;
}
</style>