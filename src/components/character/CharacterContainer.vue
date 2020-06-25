<template>
    <Character v-bind:characters="characters"></Character>
</template>

<script>
    import {mapState, mapActions} from 'vuex';
    import Character from "./Character.vue";

    export default {
        name: "CharacterContainer",
        components: {Character},
        mounted() {
            const valor = Math.floor(Math.random() * 25) + 1;
            this.listCharacters(valor);
        },
        computed: {
            ...mapState(['characters'])

        },
        methods: {
            ...mapActions(['listCharacters'])
        }
    }
</script>

<style scoped>

</style>
