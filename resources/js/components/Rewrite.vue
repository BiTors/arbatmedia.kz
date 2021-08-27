<template>
    <div>
        <div class="dt" id="four">
            <h2>Рерайт текста онлайн (Альфа)</h2>
            <div class="title-line"></div>
        </div>
        <v-container>
            <v-row  class="">
                <v-col  md-6 class="_a6 ">
                        <v-textarea
                            label="Ведите текст для рерайта"
                            :rules="rules"
                            :value="value"
                            v-model="textRewrite"
                            counter="200"
                        ></v-textarea>
                    <div class="text-center">
                        <v-btn
                            :disabled="textRewrite.length > 200 "
                            :loading="dialog"
                            class="white--text"
                            color="primary"
                            @click="sendRewrite(textRewrite)"
                        >
                           Перефразировать
                        </v-btn>
                        <v-dialog
                            v-model="dialog"
                            hide-overlay
                            persistent
                            width="300"
                        >
                            <v-card
                                color="primary"
                            >
                                <v-card-text
                                    class="white--text">
                                   Идет обработка
                                    <v-progress-linear
                                        indeterminate
                                        class="mb-0 white--text"
                                    ></v-progress-linear>
                                </v-card-text>
                            </v-card>
                        </v-dialog>
                    </div>
                </v-col>
                <v-col md-6 class="_a6 ">
                    <div></div>
                    <div v-html="getRewrite"> </div>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
export default {
    name: "Rewrite",
    data(){
        return{
            dialog:false,
            textRewrite:'',
            value:'',
            rules: [v => v.length <= 200 || 'Максимум 200 символов'],
            er:''
        }
    },

    computed:{
        ...mapGetters({getRewrite:'getRewrite'}),
    },
    methods:{
        ...mapActions({actionRewrite:'actionRewrite'}),
            async sendRewrite(e){
                if(this.textRewrite.length > 200){
                    this.er = "Ой, что то пошло не так, мы уже выехали для устранения неполадок..."
                }else
                {
                    this.er = ''
                    this.dialog = true
                    await  this.actionRewrite({data:e})
                    this.dialog = false
            }
        }
    },
}
</script>

<style scoped>
._a6{
    min-width: 300px;
}
</style>
