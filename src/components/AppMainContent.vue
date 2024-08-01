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
    },
    methods: {
        // Metodo per gestire il cambiamento dei parametri
        parametersChange() {
            this.$emit('cardFilter');  // Emette un evento per filtrare le carte
        }
    }
}
</script>

<template lang="html">
    <main class="bg-orange">  <!-- Contenitore principale con sfondo arancione -->
        <div class="container py-4">  <!-- Contenitore centrale con padding verticale -->
            <div class="d-sm-flex justify-content-between">
                <!-- Sezione per la selezione dell'archetipo -->
                <div>
                    <h6>Archetipo</h6>
                    <select v-model="store.archetypeName" id="yugioh-archetype" name="yugioh-archetype" class="p-2 mb-3 w-100" @change="parametersChange">
                        <option
                            v-for="(archetype, index) in store.archetypeList"
                            :key="`archetype-${index}`"
                            :value="archetype.archetype_name">
                            {{ archetype.archetype_name }}
                        </option>
                    </select>
                </div>
                <!-- Sezione per il filtro di testo -->
                <div>
                    <h6>Filtra</h6>
                    <input class="w-100" type="text" placeholder="&nbsp;&nbsp;Inserisci testo" v-model="store.searchText" @input="parametersChange">
                </div>
            </div>
            <!-- Contenitore per visualizzare i risultati -->
            <div class="content bg-white p-4 pb-0">
                <div class="d-sm-flex justify-content-between bg-lightblack text-white fw-bold p-3 mb-3">
                    <p class="m-0">Found {{ store.cardList.length }} cards</p>  <!-- Mostra il numero di carte trovate -->
                    <p class="m-0">[Limited to 50 cards for not overload it]</p>
                </div>
                <!-- Contenitore per le carte con layout responsive -->
                <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-5">
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
    input {
        height: 2.5rem;  // Imposta l'altezza dell'input
    }
</style>