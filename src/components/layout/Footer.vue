<template>
    <footer class="page-footer font-small blue">
        <div class="row">
            <div class="col-12">
                <p class="footer-copyright text-center py-3">© 2020 Copyright.
                    <a href="/">Rick and Morty</a>
                </p>
            </div>
        </div>
    </footer>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style scoped>
    footer.page-footer .footer-copyright {
        overflow: hidden;
        background-color: rgb(26, 120, 194);
        color: rgba(255, 255, 255, .6);
    }

    footer.page-footer a {
        color: #fff;
    }

</style>
