<template>
    <main class="bg-warning">
        <SelectComponents />
        <div class="container bg-light ">
            <div class="bg-black">
                <span class="text-white px-2"> Found {{ store.cards.length }} cards</span>
            </div>
            <div class="row gy-4" v-if="!store.loading">
                <div class="col-12 col-md-6 col-lg-3" v-for="character in store.cards" :key="apiUrl">
                    <CardComponent   
                    :id="character.id" 
                    :title="character.name"
                    :image="character.card_images[0].image_url"
                    :type="character.type" />
                </div>
            </div>
            <ApiLoader v-else />
        </div>
    </main>
</template>

<script>
import { store } from '../store.js';
import ApiLoader from './ApiLoader.vue';
import SelectComponents from './SelectComponents.vue';
import CardComponent from './CardComponent.vue';

export default {
    name: 'MainComponent',
    components:{
        CardComponent,
        ApiLoader,
        SelectComponents
    },
    data(){
        return{
            store
        }
    },
}
</script>

<style lang="scss" scoped>

</style>