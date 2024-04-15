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
        store
      }
    },
    methods: {
    getCards() {
      this.store.loading = true
      axios.get(this.store.apiUrl).then( (res)=>{
        if(res.data.data.length > 0){
        this.store.cards=res.data.data
        }
      }).catch((error)=>{
        console.log(error)
      }).finally(()=>{
        this.store.loading = false
      })
    },
  },
  created() {
   this.getCards()
   console.log(this.cards)
  }
}
</script>

<style lang="scss" scoped>

</style>