<template>
    <div>
        <h1>Rules</h1>
        <div id="border">
            <p>
                <span>- Er zijn 20 tegels waarmee je zo snel mogelijk 5 woorden moet maken.</span><br>
                <span>- Een timer van standaard 3 min.</span><br>
                <span>- Kiezen in welke taal je gaat spelen voor begin van de spel. Je moet wel in 2 talen kunnen spelen
                    (NL/EN).</span><br>
                <span>- Eerste die alle woorden heeft stopt de timer, dan stopt iedereen met het spel en telt iedereen
                    zijn
                    punten of als de timer op is, telt iedereen zijn punten ook op.</span><br>
                <span>- Wanneer er geen winnaar is met 5 woorden, zal elke speler zijn overige woorden optellen en die som
                    zal dan bij elke andere speler gaan.</span><br>
                <span>- Andere spelers kunnen jouw woorden zien.</span><br>
                <span>- Woorden tegels: 142</span><br>
                <span>- Blank tegels: 2</span><br>
                <span>- Apostrof tegels: 2</span>
            </p>
        </div>
        <div id="buttons">
            <router-link class="button" id="buttonHome" to="/">Home</router-link>
        </div>
    </div>
</template>
  
<script>

</script>
  
<style scoped>
.button2 {
    margin-top: 10px;
    padding: 5px;
    font-size: 20px;
    background-color: #C9FFD5;
    border-radius: 5px;
    border: 2px solid black;
    width: 200px;
    text-decoration: none;
    color: black;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    cursor: pointer;
}

.button2:hover {
    background-color: #FDFDBE;
}

@media (max-width: 600px) {
    .rules-page {
        padding: 20px;
        font-size: 16px;
    }

    h1 {
        font-size: 36px;
    }
}
</style>