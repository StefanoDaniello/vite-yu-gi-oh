<template>
    <main class="bg-warning">
        <div class="container">
            <div class="row">
                <div class="col-12 col-md-6 col lg-3" v-for="character in cards" :key="apiUrl">
                    <CardComponent   
                    :id="character.id" 
                    :title="character.name"
                    :image="character.card_images[0].image_url"
                    :type="character.type" />
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import { store } from '../store.js';
import CardComponent from './CardComponent.vue';

export default {
    name: 'MainComponent',
    props:['cards'],
    components:{
        CardComponent
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