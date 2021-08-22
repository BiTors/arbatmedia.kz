<template>
    <div>
        <v-dialog
            transition="dialog-bottom-transition"
            fullscreen
            light
            max-width="700"
            v-model="getWork">
            <v-card  class="pa-2 _back">
                <v-card-title class="text-caption  text-md-body-1 text-uppercase white--text">
                    <v-spacer></v-spacer>
                    <v-btn
                        text
                        @click="close()">
                        <v-icon class="secondary--text">fa-times-circle</v-icon>
                    </v-btn>
                </v-card-title>
                    <v-col  class="font-weight-bold text-center  text-uppercase" md="6" offset-md="3">
                        <v-col class="_title">
                           {{options.title}}
                        </v-col>
                    </v-col>
                <v-col class="_wr-back" md="6" offset-md="3">
                    <v-row>
                    <v-col class="font-weight-bold" md="5" offset-md="1">
                        {{options.body}}
                    </v-col>
                        <v-col class="text-center" md="5" offset-md="1">
                            <img class="img_p" :src="options.linkImg" :alt="options.title">
                        </v-col>
                    </v-row>
                    </v-col>
                <div class="_mrg-btn footer text-center">
                    <v-btn
                           color="var(blue)"
                           :href="options.link"
                    >
                        Перейти к статье
                    </v-btn>
                    <v-btn color="primary"
                           @click="close()"
                    >
                        Закрыть
                    </v-btn>
                </div>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
export default {
    name: "b-section",
    data () {
        return {

        }
    },
    computed: {
        ...mapGetters({getWork:'getWork',options:'getWorkOptions'}),
    },
    methods:{
        ...mapActions({actionWorkClose:'actionWorkClose'}),
        close(){
            this.actionWorkClose()
        },
    },

}
</script>

<style scoped>
._title {
    text-align: center;
    font-size: 1.2rem;
    font-family: 'SegoeUI';
    background: #366bff;
    color: #faf8f8;
    border-radius: 6px;
    margin: 15px 0px;
}
.base{
    padding: 8px;
    background: #fe554e;
    border-radius: 5px;
    color: #fff;
}
._dg_just{
    justify-content: center;
}
.img_p{
    width: 100%;
    max-width: 300px;
    min-width: 250px;
}
</style>

