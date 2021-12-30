<template>
<div>
    <div class=" _ms">
        <v-btn v-on:click="send()" :loading="active" class="mx-2" elevation="0" small fab dark color="primary">
            <v-icon>mdi-cart-plus</v-icon>
        </v-btn>

    </div>
</div>
</template>

<script>

import {mapActions, mapGetters} from "vuex";

export default {
    name: "e-section",
    data(){
        return{
            active:false,
            soc: {
                a:0,
                b:1
            },
        }
    },
    computed: {
        ...mapGetters({getDialog:'getDialog',}),
    },
    methods:{
        ...mapActions({actionSingle:'actionSingle'}),
        send(){
            this.actionSingle()
        },
    },
}
</script>

<style scoped>


.svs{
    width: 22px;
}
    ._ms{
        display: none;
        position: fixed;
        bottom: 0;
        right: 0;
        margin: 20px;
        z-index: 4;
    }
    @media only screen and (max-width: 920px) {
        ._ms {
            display: block;

        }
        ._ms > img {
            background: #184541;
            width: 25px;
            position: absolute;
            top: 0;
            right: 0;
            left: 0;
            bottom: 0;
            margin: auto;
        }
    }
    @media only screen and (max-width: 320px) {
        ._ms>img {
            width: 20px;
        }
    }
._ms{
    z-index: 999;
}
</style>
