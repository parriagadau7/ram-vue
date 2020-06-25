<template>
    <div class="container">
        <div class="row my-5">
            <div v-for="character in characters" class="col-md-3 col-6 my-1 d-flex">
                <b-card no-body text-variant="white">
                    <b-card-header class="position-relative">
                        <b-img :src="character.image" class="card-img" alt="..." />
                        <div class="card-img-overlay pb-2 pt-2">
                            <h3 class="card-title m-0">{{character.name}}</h3>
                            <p class="card-text">id: {{character.id}} - created {{character.created | formatDate}}</p>
                        </div>
                    </b-card-header>
                    <b-card-body>
                        <b-table-simple borderless>
                            <b-tbody>
                                <b-tr>
                                    <b-td>STATUS</b-td>
                                    <b-td>{{character.status}}</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td>SPECIES</b-td>
                                    <b-td>{{character.species}}</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td>GENDER</b-td>
                                    <b-td>{{character.gender}}</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td>ORIGIN</b-td>
                                    <b-td>{{character.origin.name}}</b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td>LAST LOCATION</b-td>
                                    <b-td>{{character.location.name}}</b-td>
                                </b-tr>
                            </b-tbody>
                        </b-table-simple>
                    </b-card-body>
                </b-card>
            </div>
        </div>
    </div>
</template>

<script>
    import {formatDate} from "../filter/FormatDate";
    export default {
        name: "Character",
        props: ['characters']
    }
</script>

<style scoped>
    .card-header {
        padding: 0;
    }

    .card-body {
        background-color: #333333;
        color: #FF9800;
        margin-top: -1px;
    }

    .card-body .table {
        color: inherit;
    }

    .card-body .table td {
        font-size: 0.9rem;
        font-weight: 200;
        padding: 0.75rem;
        vertical-align: middle;
    }

    .card-body .table td:first-child {
        color: #9E9E9E;
        font-size: 0.7rem;
        font-weight: 400;
        padding: 14px 0;
    }

    .card-body .table tr {
        border-bottom: 1pt solid #444444;
    }

    .card-img-overlay {
        top: initial;
        background-color: #202329;
        opacity: 0.8
    }
</style>
