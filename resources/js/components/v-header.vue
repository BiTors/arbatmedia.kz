<template>
    <div>
        <div class="v-headers">
            <div class="header-panel ">
                <div class="logo">
                    <img class="img-logo" src="/img/dagna.png" alt="">
                </div>
                <nav class="nav-top-m">
                        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
                    <v-navigation-drawer
                        v-model="drawer"
                        absolute
                    >
                        <v-list
                            nav
                            dense
                        >
                            <v-list-item-group
                                v-model="group"
                                active-class="deep-purple--text text--accent-4"
                            >
                                <v-list-item>
                                    <v-list-item-title><a href="#one">ГЛАВНАЯ</a> </v-list-item-title>
                                </v-list-item>

                                <v-list-item>
                                    <v-list-item-title><a href="#two">О НАС</a> </v-list-item-title>
                                </v-list-item>

                                <v-list-item>
                                    <v-list-item-title><a href="#three">УСЛУГИ</a></v-list-item-title>
                                </v-list-item>

                                <v-list-item>
                                    <v-list-item-title><a href="#four">КАК МЫ РАБОТАЕМ</a></v-list-item-title>
                                </v-list-item>

                                <v-list-item>
                                    <v-list-item-title><a href="#five"> ПОРТФОЛИО</a></v-list-item-title>
                                </v-list-item>


                            </v-list-item-group>
                        </v-list>
                    </v-navigation-drawer>
                </nav>
                <div class="v-header">
                    <nav class="nav-top">
                        <ul class="navbar-nav">
                            <li class="mm active"><a href="#one">Главная</a></li>
                            <li class="mm"><a href="#two">О нас</a></li>
                            <li class="mm"><a href="#three">Услуги</a></li>
                            <li class="mm"><a href="#four">Как мы работаем</a></li>
                            <li class="mm"><a href="#five">Портфолио</a></li>
                        </ul>
                    </nav>
                   <!-- <div class="_ml">
                        <v-btn v-on:click="send()"  class="small secondary">Оставить заявку</v-btn>
                   </div>-->
                </div>
            </div>
       </div>

        <v-container class="area ">
            <kinesis-container class="area-t">

                 <div class="cont-area">
                     <div class="main-area">
                         <div class="title-box">
                         <div class="_ght">
                             <span class="_gth">РЕДАКТОРСКОЕ БЮРО</span>
                         </div>
                             <div class="_gtx">ГАЗИЗЫ ГАБИ</div>
                         </div>
                         <div  class="main-disp fast-web">
                             Чтобы остаться в истории, нужно просто начать ее писать.
                         </div>
                     </div>
                     <div class="form-area">
                         <div class="form-b">
                              <div class="_f0">Мы вам перезвоним</div>
                             <div class="group-f">
                                 <v-form  ref="form" v-model="valid" lazy-validation>
                                     <v-text-field
                                         v-model="name"
                                         color="var(--subtitle)"

                                         :rules="nameRules"
                                         label="Ваше имя"
                                         required
                                     ></v-text-field>
                                     <v-text-field
                                         v-model="email"
                                         color="var(--subtitle)"
                                         :rules="emailRules"
                                         label="E-mail"
                                         required

                                     ></v-text-field>
                                     <v-text-field
                                         v-model="phoneNumber"
                                         color="var(--subtitle)"
                                         :error-messages="errors"
                                         label="Телефон"
                                         required

                                     ></v-text-field>
                                 </v-form>
                                 <v-btn v-on:click="send()" :loading="getLoad" class="secondary">Отправить</v-btn>
                             </div>
                             <img src="/img/circle.svg" class="_im-rotate">
                         </div>
                     </div>
                 </div>

                    <kinesis-element  class="doted" style="position: absolute">
                        <img src="/img/pa.png" alt="dot">
                    </kinesis-element>
                <kinesis-element class="doted-long">
                    <img src="/img/pat.png" alt="dot" >
                </kinesis-element>
            </kinesis-container>
<!--            <div class="editor">
                <img src="/img/editor.png" class="_editor">
            </div>-->


             </v-container>
   </div>
</template>

<script>
import { KinesisContainer, KinesisElement} from 'vue-kinesis'
import {mapActions, mapGetters} from "vuex";
export default {
    name: "v-header",
    components:{
        KinesisContainer, KinesisElement
    },
    data() {
        return{
            active:false,
            drawer: false,
            group: null,
            headerSlider:0,
            length: 2,
            content: {
               1: ['Кто основатель?','Приветствую вас! Меня зовут Газиза Габи. После 6 лет упорного труда и накопления собственного опыта с самыми разными видами текста, я изучила редакторскую кухню изнутри от глянца до самого крупного книжного издательства в стране и создала редакторское бюро.'],
               2: ['А для чего?','В нынешнем веке всё более актуальной становится проблема грамотности, а точнее её отсутствия. Часто можно заметить, что пунктуационными, речевыми и орфографическими ошибками грешат как печатные издания, так и создатели статей, размещаемых в Интернете. Наша основная задача состоит в искоренении безграмотности и помощи авторам в создании текстов, которые будут приятны для чтения и легки для понимания.']
            },
        clientHeight: 0,
            valid:'',
            name:'',
            email:'',
            emailRules:[],
            phoneNumber:'',
            errors:'',
            nameRules:[],

        }
    },
    computed: {
        ...mapGetters({getDialog:'getDialog',getLoad:'getLoad'}),
    },
    watch: {
        group () {
            this.drawer = false
        },
    },
        methods:{
            ...mapActions({actionTopForm:'actionTopForm'}),
            next () {
                this.onboarding = this.onboarding + 1 === this.length
                    ? 0
                    : this.onboarding + 1
            },
            prev () {
                this.onboarding = this.onboarding - 1 < 0
                    ? this.length - 1
                    : this.onboarding - 1
            },

        send(){
            this.actionTopForm({name:this.name,email:this.email,phone:this.phoneNumber})
        }
    },
    mounted() {
        console.log(this.$vuetify.theme)
    }
}
</script>

<style scoped>
._im-rotate{
    position: absolute;
    width: 400px;
    z-index: -1;
    top: -13px;
    bottom: 0;
    right: 0;
    left: -40px;
    opacity: 0.1;
    -webkit-animation-name: rotation;
    animation-name: rotation;
    -webkit-animation-duration: 20s;
    animation-duration: 30s;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
    -webkit-animation-timing-function: linear;
}
@keyframes rotation {
0% {
    transform:rotate(0deg);
}
100% {
    transform:rotate(360deg);
}
}

._ml{
margin: 0px 30px;
}
.mm>a{
    color: var(--mainText);
    margin: 0px 10px;
}
form{
width: 90%;
}

.doted{

top: 10px;
left: -36px;
opacity: 0.2;
}
@media only screen and (min-width: 1360px) {
.doted{
    position: absolute;
    top: -31px;
    left: 12px;
    opacity: 0.1;
}
.doted-long{
    position: absolute;
    bottom: -97px;
    left: 432px;
    opacity: 0.1;
    transform: rotate(
        360deg
    );
}
.area{

    height: 620px;
}
}
@media only screen and (min-width: 1200px) and (max-width: 1359px) {
.doted{
    position: absolute;
    top: 10px;
    left: -36px;
    opacity: 0.1;
}
.doted-long{
    position: absolute;
    bottom: 136px;
    right: -156px;
    opacity: 0.1;
    transform: rotate(
        90deg
    );
}
.area {
    padding-bottom: 65px;
    height: 620px;

}
}

@media only screen and (min-width: 992px) and (max-width: 1199px) {
.doted{
    position: absolute;
    top: -85px;
    left: 282px;
    opacity: 0.1;
}
.doted-long{
    position: absolute;
    bottom: 136px;
    right: -156px;
    opacity: 0.1;
    transform: rotate(
        90deg
    );
}
.area {
    padding-bottom: 65px;
    height: 620px;
}
}
@media only screen and (max-width: 1030px){
    .cont-area {
        display: flex;
        max-width: 1390px;
        align-items: center;
        flex-direction: row;
        text-align: center;
    }
    .main-disp {
         border: none;

    }
}
@media only screen and (min-width: 768px) and (max-width: 992px) {
.doted{
    position: absolute;
    top: 461px;
    left: -71px;
    opacity: 0.1;
}
.doted-long{
    position: absolute;
    bottom: 231px;
    right: -273px;
    opacity: 0.1;
    transform: rotate(
        90deg
    );
}
.area {
    padding-bottom: 45px;
    height: 480px;
}
    ._gtx {
        font-size: 4rem;
    }
}

._ml{
    display: none;
}
.v-header{
    justify-content: flex-end;
    min-width: 150px;
    display: block;
}

@media only screen and (min-width: 576px) and (max-width: 768px) {

.doted{
    position: absolute;
    top: 324px;
    left: -135px;
    opacity: 0.1;
}
.doted-long{
    position: absolute;
    bottom: 231px;
    right: -273px;
    opacity: 0.1;
    transform: rotate(
        90deg
    );
}
    .area {
        padding-bottom: 45px;
        height: 480px;
    }
    ._gth {
        font-size: 2rem;
    }
    ._gtx {
        font-size: 4rem;
    }
}
@media only screen and (min-width: 390px) and (max-width: 576px) {
.doted{
    position: absolute;
    top: 324px;
    left: -135px;
    opacity: 0.1;
}
.doted-long{
    position: absolute;
    bottom: 231px;
    right: -273px;
    opacity: 0.1;
    transform: rotate(
        90deg
    );
}
.area {
    padding-bottom: 45px;
    height: 420px;


}
    ._gth {
        font-size: 1.7rem;
    }
    ._gtx {
        font-size: 3rem;
    }
}
@media only screen and (min-width: 320px) and (max-width: 389px) {
    .area {
        height: 253px;
        padding-top: 45px;
    }
    ._gth {
        font-size: 1.2rem;
    }
    ._gtx {
        font-size: 2rem;
    }
    .doted-long{
        position: absolute;
        bottom: 231px;
        right: -273px;
        opacity: 0.1;
        transform: rotate(
            90deg
        );
    }
}
@media only screen and (max-width: 620px) {
.v-header{
    justify-content: flex-end;
    min-width: 90px;
}
}
@media only screen and (max-width: 320px) {
    .v-header{
        justify-content: flex-end;
        min-width: 70px;
    }
    .v-headers{
        top: 10px;
    }
    .area {
        height: 253px;
    }
    .img-logo {
        width: 132px;
    }
    ._gtx {
        font-size: 1.4rem;
    }
    ._gth {
        font-size: 1rem;
    }
    ._gtx{
        text-align: center;
    }
    ._ght{
        text-align: center;
    }
    .doted-long{
        position: absolute;
        bottom: 231px;
        right: -273px;
        opacity: 0.1;
        transform: rotate(
            90deg
        );
    }
}
@media only screen and (max-width: 260px) {
    .img-logo {
        width: 110px;
    }
    .main-disp {
        font-size: 0.8rem;
    }
    ._gtx {
        font-size: 1rem;
    }
    ._gth {
        font-size: 0.8rem;
    }
    ._gtx{
        text-align: center;
    }
    ._ght{
        text-align: center;
    }
    .doted-long{
        position: absolute;
        bottom: 231px;
        right: -273px;
        opacity: 0.1;
        transform: rotate(
            90deg
        );
    }
}
@media only screen and (max-width: 920px) {
    .v-header {
        display: none;

    }
}
</style>
