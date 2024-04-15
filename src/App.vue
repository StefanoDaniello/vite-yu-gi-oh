<template>
  <HeaderComponent />
  <MainComponents />
</template>

<script>
import { store } from './store.js';
import axios from 'axios';
import HeaderComponent from './components/HeaderComponent.vue';
import MainComponents from './components/MainComponent.vue';
  export default {
    name: 'App',
    components: {
      HeaderComponent,
      MainComponents,
    },
    data() {
      return {
        store,
        cards: [],
      }
    },
    methods: {
    getCards() {
      axios.get(this.store.apiUrl).then( (res)=>{
      this.cards = res.data.data
      }
     )} 
    },

  created() {
   this.getCards()
  }
}
</script>

<style lang="scss" scoped>

</style>