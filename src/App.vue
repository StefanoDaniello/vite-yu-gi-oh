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
       axios.get(this.store.apiUrl + this.store.endPoint.names).then((res)=>
       this.store.names = res.data.data;
      )} 

    },
    created(){
      console.log( getCards())
    }
  }
</script>

<style lang="scss" scoped>

</style>