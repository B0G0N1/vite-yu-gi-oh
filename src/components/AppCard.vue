<script>
export default {
    props: {
        card: {
            type: Object,  // Definisce la proprietà card come un oggetto
            required: true  // Indica che la proprietà card è obbligatoria
        }
    }
}
</script>

<template>
    <div class="card text-center p-3 mb-3 border-0">
        <!-- Contenitore principale con classi Bootstrap per stile e layout -->
        <img :src="card.card_images[0].image_url" :alt="card.name" class="card-img-top"/>
        <!-- Immagine della carta con binding dinamico per src e alt -->
        <div class="bg-orange h-100 py-3">
            <!-- Contenitore interno con sfondo arancione e padding verticale -->
            <h4 class="fw-bold text-uppercase text-white">{{ card.name }}</h4>
            <!-- Titolo della carta con testo in grassetto, maiuscolo e bianco -->
            <p class="card-text">{{ card.archetype ? card.archetype : '[No Archetype]' }}</p>
            <!-- Paragrafo con il tipo di archetipo della carta, se presente -->
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @import "../styles/_partials/variables";  // Importa le variabili SCSS
    .bg-orange {
        background-color: $primary-color;  // Applica il colore primario di sfondo
    }
    h4 {
        font-size: 1rem;  // Imposta la dimensione del font del titolo a 1rem
    }
</style>