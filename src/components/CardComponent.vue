<template>
    <div class="card">
        <img :src="image" class="card-img-top" :alt="title" >
        <div class="card-body">
            <h5 class="card-title">{{ title }}</h5>
            <p class="card-text">{{ type }}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name:"CardComponent",
        props: ['id', 'title', 'image', 'type'],
    }
</script>

<style lang="scss" scoped>

</style>