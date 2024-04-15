<template>
    <div class="container">
        <div class="row">
            <div class="col-12 col-md-6 col lg-3">

            </div>
        </div>
    </div>
</template>

<script>
import { store } from '../store.js';
import CharacterComponent from './CharacterComponent.vue';
    export default {
        name: 'CharacterList',
        components: {
            CharacterComponent
        },
        data(){
            store
        }
    }
</script>

<style lang="scss" scoped>

</style>