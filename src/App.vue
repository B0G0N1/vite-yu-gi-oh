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
    },
    methods: {
      getCardList() {
        axios.get(store.apiUrl).then((result) => {  // Effettua una richiesta GET all'API usando l'url da store
          store.cardList = result.data.data;  // Assegna i dati delle carte alla lista cardList nello store
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

<template lang="">
  <AppHeaderVue/>  <!-- Utilizza il componente AppHeaderVue nel template -->
  <AppMainContent/>  <!-- Utilizza il componente AppMainContent nel template -->
</template>

<style lang="scss">
  @use './styles/generals.scss'  // Importa gli stili generali dal file generals.scss
</style>