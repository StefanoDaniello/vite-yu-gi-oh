<template>
  <HeaderComponent @select-type="setParams"/>
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
    // watch: {
    //     'store.statusFiler'(newVal, oldVal){
    //       if(newVal !== oldVal){
    //         this.setParams()
    //       }
    //     }
    // },
    methods: {
      setParams(){
        // const options={}
        // if(this.store.statusFilter){
        //   options.params={
        //     status:this.store.statusFilter,
        //   }
        // }
        if(this.store.statusFilter){
          this.store.options.params.archetype = this.store.statusFilter
        }else{
          delete this.store.options.params.archetype
        }
        this.getCards()
      },
    getCards() {
      this.store.loading = true
      this.store.error.message = null
        axios.get(this.store.apiUrl + this.store.endPoint.card, this.store.options).then( (res)=>{
        this.store.cards=res.data.data.map((card)=>{
          return {
            id:card.id,
            title:card.name,
            type:card.type,
            archetype:card.archetype,
            image:card.card_images[0].image_url
          }
        });
      }).catch((error)=>{
        this.store.error.message = error.message
      }).finally(()=>{
        this.store.loading = false
      })
    },
    getArchetypes() {
    axios.get(this.store.apiUrl + this.store.endPoint.archetype).then( (res)=>{
      this.store.archetypes = res.data.slice(0, 10);
      console.log(this.store.archetypes)
    }).catch((error)=>{
      this.store.error.message = error.message
    }).finally(()=>{
      this.store.loading = false
    })
  },
  },
  
  created() {
   this.getCards()
   this.getArchetypes() 
  }
}
</script>

<style lang="scss" scoped>

</style>