  <script>
  import AppHeaderVue from './components/AppHeader.vue'
  import AppMainContent from './components/AppMainContent.vue';

  export default {
    components: {
      AppHeaderVue,
      AppMainContent
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