<template>
    <div class="card">
        <img :src="image" class="card-img-top" :alt="title" >
        <div class="card-body">
            <h5 class="card-title text-center text-white ">{{ title }}</h5>
            <p class="card-text text-center">{{ archetype }}</p>
            <p class="card-text text-center">{{ type }}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name:"CardComponent",
        props: ['id', 'title', 'image', 'type', 'archetype'],
    }
</script>

<style lang="scss" scoped>
    .card{
        background-color: #D48F38;
        height: 600px;
        margin: 10px 0px;
    }
</style>