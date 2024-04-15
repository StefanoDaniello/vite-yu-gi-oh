<template>
    <div class="select-conteiner">
        <select class="form-select" aria-label="Default select example" @change="Changevalue">
            <option selected value="">All</option>
            <option value="?type=Fusion Monster">Fusion Monster</option>
            <option value="?type=Spell Card">Two</option>
            <option value="?type=Effect Monster">Three</option>
        </select>
    </div>
</template>

<script>
import { store } from '../store.js';
    export default {
        name: 'SelectComponents',
        data() {
            return {
                store
            }
        },
        methods: {
            Changevalue(event){
              this.store.apiUrl += event.target.value
              console.log(this.store.apiUrl += event.target.value)
            }
        },
          
        
    }
</script>

<style lang="scss" scoped>
   .select-conteiner{
       width: 200px;
       padding: 10px;
   }
</style>