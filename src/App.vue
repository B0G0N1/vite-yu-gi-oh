<script>
  import { store } from './store.js';  // Importa l'oggetto store dal file store.js
  import axios from 'axios';  // Importa axios per effettuare richieste HTTP

  import AppHeaderVue from './components/AppHeader.vue';  // Importa il componente AppHeaderVue
  import AppMainContent from './components/AppMainContent.vue';  // Importa il componente AppMainContent

  export default {
    components: {
      AppHeaderVue,  // Registra il componente AppHeaderVue
      AppMainContent,  // Registra il componente AppMainContent
    },
    created() {
      this.getCardList();  // Chiama il metodo getCardList quando il componente viene creato
      this.getArchetypeList();  // Chiama il metodo getArchetypeList quando il componente viene creato
    },
    methods: {
      // Metodo per ottenere la lista delle carte
      getCardList() {
        let myUrl = `${store.cardApiUrl}`;  // Inizializza l'URL di base per l'API delle carte
        
        // Verifica se ci sono filtri di ricerca attivi
        if (store.searchText != null || store.archetypeName != "All") {
          // Se c'è solo il filtro per il testo di ricerca
          if (store.searchText != null && store.archetypeName == "All") {
            myUrl += `?fname=${store.searchText.toLowerCase()}`;
          }
          // Se c'è solo il filtro per il nome dell'archetipo
          if (store.searchText == null && store.archetypeName != "All") {
            myUrl += `?archetype=${store.archetypeName}`;
          }
          // Se ci sono entrambi i filtri
          if (store.searchText != null && store.archetypeName != "All") {
            myUrl += `?fname=${store.searchText.toLowerCase()}&archetype=${store.archetypeName}`;
          }
          myUrl += '&num=20&offset=0';  // Aggiunge i parametri per il numero di risultati e l'offset
        } else {
          myUrl += '?num=50&offset=0';  // Se non ci sono filtri, imposta i parametri di default
        }
        
        // Effettua la richiesta GET all'API
        axios.get(myUrl).then((result) => {
          store.cardList = result.data.data;  // Aggiorna la lista delle carte nello store
        }).catch((error) => {
          store.cardList = [];  // In caso di errore, imposta una lista vuota
        });
      },
      // Metodo per ottenere la lista degli archetipi
      getArchetypeList() {
        axios.get(store.archetypeApiUrl).then((result) => {
          store.archetypeList = result.data;  // Aggiorna la lista degli archetipi nello store
          store.archetypeList.unshift({"archetype_name": "All"});  // Aggiunge l'opzione "All" in cima alla lista
        });
      }
    },
    data() {
      return {
        store  // Rende lo store disponibile nel template del componente
      }
    }
  }
</script>

<template lang="html">
  <AppHeaderVue/>  <!-- Utilizza il componente AppHeaderVue nel template -->
  <AppMainContent @cardFilter="getCardList"/>  <!-- Utilizza il componente AppMainContent nel template -->
</template>

<style lang="scss">
  @use './styles/generals.scss';  // Importa gli stili generali dal file generals.scss
</style>