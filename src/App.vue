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
      let prova =[]
      axios.get(this.store.apiUrl).then( (res)=>{
        if(res.data.data.length > 0){
        prova = [...res.data.data]
        this.cards.push(prova)
        }
      }
     )} 
    },

  created() {
   this.getCards()
   console.log(this.cards)
  }
}
</script>

<style lang="scss" scoped>

</style>