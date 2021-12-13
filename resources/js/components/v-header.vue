<template>
    <div>
        <v-container class="area ">
            <div class="cont-area">
                <div class="book">
                    <img src="/img/tok.png" alt="tok">
                </div>
                <div id="rec114502490" class="tok-wrap sbs-anim-keyframes">
                    <div class="fs">
                        <div class="tok">
                            <img style="width: 391px; transform: scale(-1, 1)" src="/img/thunder.png" alt="thunder">
                        </div>
                        <div class="tok">
                            <img style="width: 391px;" src="/img/thunder.png" alt="thunder">
                        </div>
                    </div>
                </div>

            </div>
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

    }
}
</script>

<style scoped>

.fs{
    display: flex;
    justify-content: space-between;
    flex-direction: row;
}
#rec114502490 [data-elem-id="1557996723691"].t-sbs-anim_started .tn-atom__sbs-anim-wrapper {
animation: sbs-anim-rec114502490-1557996723691 2.9s infinite linear;
backface-visibility: hidden;
}

@keyframes sbs-anim-rec114502490-1557996723691 {
0% {opacity:1;transform:translateX(0px)translateY(0px)rotate(0deg)scale(1,1);animation-timing-function:linear;}
72.41% {opacity:0;transform:translateX(0px)translateY(0px)rotate(0deg)scale(1,1);animation-timing-function:linear;}
75.86% {opacity:1;transform:translateX(0px)translateY(0px)rotate(0deg)scale(1,1);animation-timing-function:linear;}
79.31% {opacity:0;transform:translateX(0px)translateY(0px)rotate(0deg)scale(1,1);animation-timing-function:linear;}
82.76% {opacity:1;transform:translateX(0px)translateY(0px)rotate(0deg)scale(1,1);animation-timing-function:linear;}
86.21% {opacity:0;transform:translateX(0px)translateY(0px)rotate(0deg)scale(1,1);animation-timing-function:linear;}
89.66% {opacity:1;transform:translateX(0px)translateY(0px)rotate(0deg)scale(1,1);animation-timing-function:linear;}
100% {opacity:0;transform:translateX(0px)translateY(0px)rotate(0deg)scale(1,1);}
}

#rec114502490 [data-elem-id="1557996821900"].t-sbs-anim_started .tn-atom__sbs-anim-wrapper {
animation: sbs-anim-rec114502490-1557996821900 2.6s infinite linear;
backface-visibility: hidden;
}

@keyframes sbs-anim-rec114502490-1557996821900 {
0% {opacity:0;transform:translateX(0px)translateY(0px)rotate(0deg)scale(1,1);}
1% {opacity:0;transform:translateX(0px)translateY(0px)rotate(0deg)scale(1,1);}
4.85% {opacity:1;transform:translateX(0px)translateY(0px)rotate(0deg)scale(1,1);}
8.7% {opacity:0;transform:translateX(0px)translateY(0px)rotate(0deg)scale(1,1);}
12.55% {opacity:1;transform:translateX(0px)translateY(0px)rotate(0deg)scale(1,1);}
24.09% {opacity:0;transform:translateX(0px)translateY(0px)rotate(0deg)scale(1,1);}
100% {opacity:0;transform:translateX(0px)translateY(0px)rotate(0deg)scale(1,1);}
}
.tok{
opacity: 0.8;
background-position: center center;
border-color: transparent;
border-style: solid;
}
.tok-wrap{
animation: sbs-anim-rec114502490-1557996723691 2.9s infinite linear;
backface-visibility: hidden;
    position: absolute;
    right: 0;
    left: 0;
    justify-content: space-between;
    align-items: center;
}
img{
    width: 100%;
}
.book{
margin: 0 auto;
    z-index: 9999;
}
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
@media only screen and (max-width: 320px) {

.area {
    height: 253px;
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
</style>
