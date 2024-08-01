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
      this.getArchetypeList();
    },
    methods: {
      getCardList() {
        let myUrl = `${store.cardApiUrl}`;
        if (store.searchText != null || store.archetypeName != "All") {
            if (store.searchText != null && store.archetypeName == "All") {
                myUrl += `?fname=${store.searchText.toLowerCase()}`
            }

            if (store.searchText == null && store.archetypeName != "All") {
                myUrl += `?archetype=${store.archetypeName}`
            }

            if (store.searchText != null && store.archetypeName != "All") {
                myUrl += `?fname=${store.searchText.toLowerCase()}&archetype=${store.archetypeName}`
            }
        }
        else {
          myUrl += '?num=200&offset=0';
        }
        axios.get(myUrl).then((result) => {
            store.cardList = result.data.data;
        });
      },
      getArchetypeList() {
        axios.get(store.archetypeApiUrl).then((result) => {
          store.archetypeList = result.data;
          store.archetypeList.unshift({"archetype_name": "All"});
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
  @use './styles/generals.scss'  // Importa gli stili generali dal file generals.scss
</style>