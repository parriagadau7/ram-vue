<template>
    <div id="app" class="container-fluid">
        <Header></Header>
        <div class="row">
            <router-view></router-view>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
    import Header from "./Header.vue";
    import Footer from "./Footer.vue";

    export default {
        name: "Layout",
        components: {Footer, Header}
    }
</script>

<style scoped>

</style>
