<template>
    <main class="bg-warning">
        <div class="container bg-light p-3 st-radius">
            <div class="bg-black st-radius">
                <span class="text-white px-2"> Found {{ store.cards.length }} cards</span>
            </div>
            <div class="row gy-4" v-if="!store.loading">
                <div class="col-12 col-md-6 col-lg-3" v-for="card  in store.cards" :key="card.id">
                    <CardComponent   
                    :id="card.id" 
                    :title="card.title"
                    :type="card.type"
                    :archetype="card.archetype"
                    :image="card.image"
                    />
                </div>
            </div>
            <ApiLoader v-else />
        </div>
    </main>
</template>

<script>
import { store } from '../store.js';
import ApiLoader from './ApiLoader.vue';
import CardComponent from './CardComponent.vue';

export default {
    name: 'MainComponent',
    components:{
        CardComponent,
        ApiLoader,
    },
    data(){
        return{
            store
        }
    },
}
</script>

<style lang="scss" scoped>
    .st-radius{
        border-radius: 10px;
        padding: 10px;
    }
</style>