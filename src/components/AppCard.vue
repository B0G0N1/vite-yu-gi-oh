<script>
export default {
    props: {
        card: {
            type: Object,
            required: true
        }
    }
}
</script>
<template>
    <div class="card text-center p-3 mb-3 border-0">
        <img :src="card.card_images[0].image_url" :alt="card.name" class="card-img-top"/>
        <div class="bg-orange h-100 py-3">
            <h4 class="fw-bold text-uppercase text-white">{{ card.name }}</h4>
            <p class="card-text">{{ card.archetype ? card.archetype : '[No Archetype]' }}</p>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    @import "../styles/_partials/variables";
    .bg-orange {
        background-color: $primary-color;
    }
    h4 {
        font-size: 1rem;
    }
</style>