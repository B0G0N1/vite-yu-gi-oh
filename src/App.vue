  <script>
  import { store } from './store.js';
  import axios from 'axios';

  import AppHeaderVue from './components/AppHeader.vue';
  import AppMainContent from './components/AppMainContent.vue';

  export default {
    components: {
      AppHeaderVue,
      AppMainContent,
    },
    created() {
      this.getCardList();
    },
    methods: {
      getCardList() {
        axios.get(store.apiUrl).then((result) => {
          store.cardList = result.data.data;
        });
      }
    },
    data() {
      return {
        store
      }
    }
  }
  </script>
  <template lang="">
    <AppHeaderVue/>
    <AppMainContent/>
  </template>
  <style lang="scss">
    @use './styles/generals.scss'
  </style>