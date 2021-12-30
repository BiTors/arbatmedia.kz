<template>
        <v-footer class="black"

        >
            <v-col
                class="text-center"
                cols="12"
            >
                <v-col
                    class="text-center"
                    cols="12"
                >
                    <div class="v-header">
                        <nav class="nav-top">
                            <ul class="navbar-nav">
                                <li class="mm active"><router-link :to="{ path: '/' }"  v-scroll-to="'#author'">АВТОР ТУРАЛЫ</router-link></li>
                                <li class="mm"><router-link :to="{ path: '/' }"  v-scroll-to="'#book'">КІТАП ТУРАЛЫ</router-link></li>
                                <li class="mm"><router-link :to="{ path: '/' }"  v-scroll-to="'#pay'">САТЫП АЛУ</router-link></li>
                            </ul>
                        </nav>
                    </div>
                </v-col>
                <div class="item-f-w">
                    <div>
                        <div class="item-f-img">
                            <img src="/img/logo-arbat.png" alt="">
                        </div>
                    </div>
                    <div>
                        <div class="item-f-c">
                            <div>
                                info@arbatbooks.kz<br>
                                +7 706 400-4500
                            </div>
                            <div>
                                <v-card-text>
                                    <v-btn
                                        v-for="(icon,index) in icons"
                                        :key="icon"
                                        class="socs mx-4 white--text"
                                        icon
                                    >
                                        <a class="ai" :href="link[index]" target="_blank">
                                            <v-icon >
                                                {{icon}}
                                            </v-icon>
                                        </a>
                                    </v-btn>
                                </v-card-text>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="item-f-w" style="padding: 15px 0px;">
                    <div>
                        <div class="item-f-c">
                            <router-link :to="{ path: '/oferta'}" v-scroll-to="'#start'">Публичная оферта</router-link>
                        </div>
                    </div>
                    <div>
                        <div class="item-f-c">
                            <div>
                                <router-link :to="{ path: '/delivery'}" v-scroll-to="'#start'">Доставка и оплата</router-link>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="item-f-w">
                    <div>
                        <div class="item-f-c">
                           ТОО Холдинговая компания "ТАН Медиа Групп"
                        </div>
                    </div>
                    <div>
                        <div class="item-f-c">
                            <div>
                                БИН:150640011016
                            </div>
                        </div>
                    </div>
                </div>
                <div class="item-f-w">
                    <div  class="ml4 white--text">{{ new Date().getFullYear() }} — ©arbatmedia.kz</div>
                    <div  class= "ml4 white--text">Сайт разработан:<a class="web" href="https://wa.me/77715054743" target="_blank">click <v-icon>mdi-cursor-default-click-outline</v-icon></a> </div>
                </div>
            </v-col>

            <v-dialog
                v-model="dialogpay "
                max-width="290"
            >
                <v-card>
                    <v-card-title v-if="getStatus === 1" class="text-h5">
                        <v-alert
                            dense
                            text
                            type="green"
                        >
                            Тапсырыс рәсімделді!
                        </v-alert>
                    </v-card-title>
                    <v-card-title v-else class="text-h5">
                        <v-alert
                            dense
                            outlined
                            type="error"
                        >
                            Ошибка!
                        </v-alert>
                    </v-card-title>

                    <v-card-text v-if="getStatus === 1">
                        <div><strong>{{getName}}!</strong> Біздің менеджер сізге жақын арада хабарласатын болады.</div>
                        <div>Тапсырыс нөмірі: <strong>{{getInfo.WMI_PAYMENT_NO}}</strong></div>
                    </v-card-text>
                    <v-card-text v-else>
                        Пожалуйста обратитесь по телефону: +7(771)373-80-17
                    </v-card-text>

                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                            color="green darken-1"
                            text
                            @click="payClose()"
                        >
                            Закрыть
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>


        </v-footer>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
name: "footer-c",
    data(){
        return{
            icons: [
                'mdi-facebook',
                'mdi-instagram',
            ],
            link:[
                'https://www.facebook.com/arbatbookskz',
                'https://www.instagram.com/rybakov.kz/'
            ],
            absolute:true,
        }
    },
    computed: {
        ...mapGetters({
            dialogpay:'getDialogpay',
            getStatus:'getStatus',
            getInfo:'getInfo',
            getName:'getName'
        }),
    },
        methods: {
            ...mapActions({
                payСashClose: 'payСashClose',
            }),
            payClose(){
                this.payСashClose()
            }
        },

}
</script>

<style scoped>
.web{
    background: #fff70c;
    color: black!important;
    padding: 5px;
    border-radius: 30px;
    margin-left: 5px;
}
.web>i{
    color: black;
}
.ai>i{
    color:#fff!important;
}
.v-application a {
    color: #525254;
}
.v-card{
    padding: 0px 15px;
}
.socs {
     margin-right: 0px!important;
    margin-left: 0px!important;
}
.ml4{
    margin: 10px;
}
.mm>a {
     color: #525254;
     margin: 0px 10px;
 }
.item-f-img>img{
    height: 46px;
}
.item-f-img{
    margin: 0px 15px;
}
.item-f-w{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}
.item-f-c{
    display: flex;
    color: #fff;
    margin: 0px 15px;
    padding: 10px 0px;
    flex-wrap: nowrap;
    flex-direction: column;
}
</style>
