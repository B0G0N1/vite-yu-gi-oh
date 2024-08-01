<script>
import { store } from '../store.js';
import AppCard from './AppCard.vue';

export default {
    components: {
        AppCard
    },
    data() {
        return {
            store
        }
    }
}
</script>
<template>
    <main class="bg-orange">
        <div class="container py-3">
            <select id="yugioh-races" name="yugioh-races" class="p-2 mb-3">
                <option value="dragon">Dragon</option>
                <option value="spellcaster">Spellcaster</option>
                <option value="zombie">Zombie</option>
                <option value="warrior">Warrior</option>
                <option value="beast">Beast</option>
                <option value="machine">Machine</option>
                <option value="fairy">Fairy</option>
                <option value="fiend">Fiend</option>
                <option value="aqua">Aqua</option>
                <option value="pyro">Pyro</option>
            </select>
            <div class="content bg-white p-5">
                <div class="row bg-lightblack text-white fw-bold p-3 mb-3">
                    <p class="m-0">Found {{ store.cardList.length }} cards</p>
                </div>
                <div class="row row-cols-5">
                    <AppCard 
                        class="col" 
                        v-for="(card, index) in store.cardList" 
                        :key="`card-${card.id}`" 
                        :card="card"
                    />
                </div>
            </div>
        </div>
    </main>
</template>
<style lang="scss">
    @import "../styles/_partials/variables";
    .bg-orange {
        background-color: $primary-color;
    }
    .bg-lightblack {
        background-color: $secondary-color;
    }
</style>