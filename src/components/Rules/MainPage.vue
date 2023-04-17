<template>
    <div class="rules-page">
        <h1>RULES</h1>
        <div id="border">
            <p>
                <span>- 2-4 spelers.</span><br>
                <span>- 20 tegels waarmee je zo snel mogelijk 5 woorden moet maken.</span><br>
                <span>- Een timer van standaard 3 min.</span><br>
                <span>- Kiezen in welke taal je gaat spelen voor begin van de spel. Je moet wel in 2 talen kunnen spelen
                    (NL/EN).</span><br>
                <span>- Eerste die alle woorden heeft stopt de timer, dan stopt iedereen met het spel en telt iedereen zijn
                    punten
                    of als de timer op is, telt iedereen zijn punten ook op.</span><br>
                <span>- Wanneer er geen winnaar is met 5 woorden, zal elke speler zijn overige woorden optellen en die som
                    zal
                    dan
                    bij elke andere speler gaan.</span><br>
                <span>- Andere spelers kunnen jouw woorden zien.</span><br>
                <span>- Woorden tegels: 142</span><br>
                <span>- Blank tegels: 2</span><br>
                <span>- Apostrof tegels: 2</span>
            </p>
        </div>
    </div>
</template>
  
<script>

</script>
  
<style>
.rules-page {
    margin: 0 auto;
    font-family: Arial, sans-serif;
    line-height: 1.5;
    text-align: justify;
    background-color: #B9E9FC;
    height: 100%;
}

h1 {
    text-align: center;
    font-size: 90px;
    font-family: 'Segoe UI', Tahoma, Verdana, sans-serif;
    color: #B2B0FF;
}

#border {
    background-color: #B2B0FF;
    border: 2px solid #333;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    max-width: 800px;
    margin: 0 auto;
}

p {
    margin-bottom: 20px;
    padding-left: 20px;
    text-indent: -20px;
    text-indent: 0;
    font-size: 18px;
    font-weight: bold;
}

p:first-of-type {
    padding-top: 0;
}

p:last-of-type {
    margin-bottom: 0;
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