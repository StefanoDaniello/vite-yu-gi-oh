<template>
    <div class="bg-light d-flex align-items-center">
        <div class="img-select-container">
            <img src="http://vignette1.wikia.nocookie.net/yugiohenespanol/images/a/aa/Yugioh_anime_logo.jpg/revision/latest?cb=20130310042737&path-prefix=es" alt="Logo di Yu-Gi-Oh!">
        </div>
        <h1>Yu-Gi-Oh Api</h1>
        <div class="img-select-container">
        <select class="form-select" aria-label="Default select example" @change="$emit('select-type')" v-model='store.statusFilter'>
            <option selected value="">All</option>
            <option :value="archetype.archetype_name" v-for="archetype in store.archetypes" :key="archetype">
                {{ archetype.archetype_name }}</option>
        </select>
    </div>
    </div>

</template>

<script>
import { store } from '../store.js';
    export default {
        name: 'HeaderComponent',
        data() {
            return {
                store
            }
        }
    }
</script>

<style lang="scss" scoped>
    .img-select-container{
        width: 200px;
       padding: 10px;
    }
</style>