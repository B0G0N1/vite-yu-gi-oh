<script>
export default {
    
}
</script>
<template lang="html">
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
            <div class="content bg-white p-4">
                <div class="bg-lightblack text-white fw-bold p-3 mb-3">
                    <p class="m-0">Found {{ 39 }} cards </p>
                </div>
                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid porro reprehenderit explicabo quidem veritatis quod harum repellendus a! Possimus, in mollitia ea praesentium itaque aliquid voluptates recusandae totam distinctio corrupti.</div>
            </div>
        </div>
    </main>
</template>
<style lang="scss">
    @import '../styles/variables';
    .bg-orange {
        background-color: $primary-color;
    }
    .bg-lightblack {
        background-color: $secondary-color;
    }
    * {
        border: 1px solid red;
    }
</style>