<script>
import { store } from '../store.js';  // Importa l'oggetto store dal file store.js
import AppCard from './AppCard.vue';  // Importa il componente AppCard

export default {
    components: {
        AppCard  // Registra il componente AppCard
    },
    data() {
        return {
            store  // Rende lo store disponibile nel template del componente
        }
    }
}
</script>

<template>
    <main class="bg-orange">  <!-- Contenitore principale con sfondo arancione -->
        <div class="container py-3">  <!-- Contenitore centrale con padding verticale -->
            <select id="yugioh-races" name="yugioh-races" class="p-2 mb-3">  <!-- Dropdown per selezionare le categorie delle carte -->
                <option v-for="(archetipe, index) in store.archetipeList"  :value="archetipe.archetype_name">{{ archetipe.archetype_name }}</option>
            </select>
            <div class="content bg-white p-5">  <!-- Contenitore con sfondo bianco e padding -->
                <div class="row bg-lightblack text-white fw-bold p-3 mb-3">  <!-- Riga con sfondo nero chiaro, testo bianco e grassetto -->
                    <p class="m-0">Found {{ store.cardList.length }} cards</p>  <!-- Mostra il numero di carte trovate -->
                </div>
                <div class="row row-cols-5">  <!-- Contenitore per le carte con 5 colonne per riga -->
                    <AppCard 
                        class="col"  
                        v-for="(card, index) in store.cardList"  
                        :key="`card-${card.id}`"  
                        :card="card"  
                    />
                    <!-- Classe per ogni colonna -->
                    <!-- Ciclo per visualizzare ogni carta -->
                    <!-- Chiave unica per ogni carta -->
                    <!-- Passa i dati della carta al componente AppCard -->
                </div>
            </div>
        </div>
    </main>
</template>

<style lang="scss">
    @import "../styles/_partials/variables";  // Importa le variabili SCSS
    .bg-orange {
        background-color: $primary-color;  // Applica il colore primario di sfondo
    }
    .bg-lightblack {
        background-color: $secondary-color;  // Applica il colore secondario di sfondo
    }
</style>
