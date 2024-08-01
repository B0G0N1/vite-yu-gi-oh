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
        // Inizializza l'URL di base per l'API delle carte e ne limita il risultato a 50
        let myUrl = `${store.cardApiUrl}?num=50&offset=0`;
        
        // Verifica se ci sono filtri di ricerca attivi e in caso aggiurna l'URL API
        if (store.searchText != null) {
          myUrl += `&fname=${store.searchText.toLowerCase()}`;
        }
        if (store.archetypeName !== "All") {
          myUrl += `&archetype=${store.archetypeName}`;
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