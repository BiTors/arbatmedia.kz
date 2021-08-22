<template>
    <div>
        <v-container>
        <section class="c-section">
            <div class="c-section-in fast-web">
                <div class="at">
                    <h2>ОТЗЫВЫ</h2>
                    <div class="title-line"></div>
                </div>
                <div class="c-lines" >
                    <div>
                        <div  class="slider-arrow">
                            <div class="b-s">
                                <div v-on:click=(arrow(0),slider(isActive)) class="arrow-a"></div>
                            </div>
                            <div class="b-s">
                                <div v-on:click=(arrow(1),slider(isActive)) class="arrow-b"></div>
                            </div>
                        </div>

                        <div v-if="check" class="slider-numb" :class="step">
                            <div v-on:click=(slider(0)) :class="[{active_step: isActive === 0},'_sli-n']">01</div>
                            <div v-on:click=(slider(1)) :class="[{active_step: isActive === 1},'_sli-n']">02</div>
                            <div v-on:click=(slider(2)) :class="[{active_step: isActive === 2},'_sli-n']">03</div>
                            <div v-on:click=(slider(3)) :class="[{active_step: isActive === 3},'_sli-n']">04</div>
                        </div>
                        <div v-else class="slider-numb">
                            <div v-on:click=(slider(0)) :class="[{active_step: isActive === 0},'_sli-n']">01</div>
                            <div v-on:click=(slider(1)) :class="[{active_step: isActive === 1},'_sli-n']">02</div>
                            <div v-on:click=(slider(2)) :class="[{active_step: isActive === 2},'_sli-n']">03</div>
                            <div v-on:click=(slider(3)) :class="[{active_step: isActive === 3},'_sli-n']">04</div>
                        </div>
                    </div>
                    <div class="slider-work">
                        <div class="slide-c" style="opacity: 1;">
                            <div class="box-slider">

                               <img src="/img/slide.png" alt="img" class="laptop">
                                <div v-if="check" class="slider-numb-img" :class="steps">
                                    <div v-on:click=(slider(0)) :class="[{active_step: isActive === 0},'_sli-n-img']"><img  src="/img/reviews_01.jpg"  alt="img" class="im-a-img"></div>
                                    <div v-on:click=(slider(1)) :class="[{active_step: isActive === 1},'_sli-n-img']"><img  src="/img/reviews_02.jpg"  alt="img" class="im-a-img"></div>
                                    <div v-on:click=(slider(2)) :class="[{active_step: isActive === 2},'_sli-n-img']"><img  src="/img/reviews_03.jpg"  alt="img" class="im-a-img"></div>
                                    <div v-on:click=(slider(3)) :class="[{active_step: isActive === 3},'_sli-n-img']"><img  src="/img/reviews_04.jpg"  alt="img" class="im-a-img"></div>

                                    <!--<img v-if="isActive === 0" src="/img/reviews_01.jpg"  alt="img" class="im-a">-->
                                </div>
                                <!--      <transition name="fade">
                                         <img v-if="isActive === 1" src="/img/curse.png"  alt="img" class="im-a">
                                     </transition>
                                     <transition name="fade">
                                         <img v-if="isActive === 2" src="/img/kinder.png"  alt="img" class="im-a">
                                     </transition>
                                     <transition name="fade">
                                         <img v-if="isActive === 3" src="/img/fast.png"  alt="img" class="im-a">
                                     </transition>-->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </v-container>
    </div>
</template>

<script>
export default {
name: "contacts",
    data(){
        return{
            step:'step-a',
            steps:'step-a-img',
            check:Boolean,
            isActive:0,
            cont:{
                t:'Разработка тактики сплит-тестирования элементов',
                c:'Чтобы точнее соответствовать ожиданиям вашей целевой аудитории мы предложим варианты тестирования отдельных элементов и текстов на посадочной страницы.',
            }

        }
    },
    created() {
        if(window.innerWidth <= 180){
            this.check = false
        }else{this.check = true}
        window.addEventListener('resize', this.updateWidth);
    },
    methods:{
        arrow(e){
            if(this.isActive < 3 && e === 1){
                this.isActive +=1
            }else if(this.isActive > 0 && e === 0){
                this.isActive -=1
            }
        },
        updateWidth(){
            if(window.innerWidth <= 180){
                this.check = false
            }  else{this.check = true}
        },
        slider(e){
            switch(e) {
                case 0: this.step = 'step-a'
                    this.steps = 'step-a-img';
                    this.isActive = 0
                    this.cont.t ='Разработка тактики сплит-тестирования элементов'
                    this.cont.c ='Чтобы точнее соответствовать ожиданиям вашей целевой аудитории мы предложим варианты тестирования отдельных элементов и текстов на посадочной страницы.'
                    break;
                case 1: this.step = 'step-b'
                    this.steps = 'step-b-img';
                    this.isActive = 1
                    this.cont.t ='Рекомендации по содержанию, качеству фото- и видео для сайта'
                    this.cont.c ='Фото и Видеоконтент, которые отлично работали ещё 1 год назад, уже не так эффективны. Мы подготовим рекомендации по наполнению лендинга актуальными и релевантными материалами.'
                    break;
                case 2: this.step = 'step-c'
                    this.steps = 'step-c-img';
                    this.isActive = 2
                    this.cont.t ='Рекомендации по содержанию, качеству фото и видео для сайта'
                    this.cont.c ='Фото и Видеоконтент, которые отлично работали ещё 1 год назад, уже не так эффективны. Мы подготовим рекомендации по наполнению лендинга актуальными и релевантными материалами.'
                    break;
                case 3: this.step = 'step-d'
                    this.steps = 'step-d-img';
                    this.isActive = 3
                    this.cont.t ='Рекомендации по содержанию, качеству фото и видео для сайта'
                    this.cont.c ='Фото и Видеоконтент, которые отлично работали ещё 1 год назад, уже не так эффективны. Мы подготовим рекомендации по наполнению лендинга актуальными и релевантными материалами.'
                    break;
            }
        }
    },
}
</script>

<style scoped>
.b-s{
    cursor: pointer;
}
.c-section{
    background: #f5faff;
    overflow: hidden;
}
.arrow-a{
    background: url('/img/arrow-c.svg') no-repeat scroll 0 0;
    width: 30px;
    height: 30px;
    transform: rotate(
        180deg
    );
}
.arrow-b{
    background: url('/img/arrow-c.svg') no-repeat scroll 0 0;
    width: 30px;
    height: 30px;

}
.slider-arrow{
    display: flex;
    position: relative;
    justify-content: space-between;
}


.fade-enter-active {
    transition: all 2s ease;
}
.fade-enter-active, .fade-leave-active {
    transform: translate3d(0px, 0px, 0px);
}
.fade-enter, .fade-leave-to {
    transform: translate3d(-1010px, 0px, 0px);
}
.im-a{
    position: absolute;
    left: 120px;
    z-index: -1;
    top: 47px;
    /*transform: translate3d(0px, -1010px, 0px);*/
    /* transition: 2s all;*/
}
.box-slider{
    position: relative;
/*    overflow: hidden;*/
    max-height: 432px;
    z-index: 9;
}
.slide-c{
    position: relative;
}

._sli-n:before {
    content: "";
    display: block;
    width: 0px;
    height: 1px;
    background: var(--dark);
    position: absolute;
    top: 0px;
    bottom: 0px;
    left: 100%;
    margin: auto;
    -webkit-transition: 1s all;
    -moz-transition: 1s all;
    -ms-transition: 1s all;
    -o-transition: 1s all;
    transition: 1s all;
    margin-left: 10px;

}
.active_step{
    opacity: 1!important;
    font-size: 3rem!important;
    font-family: 'fastweb';
}

.c-section-in{
    max-width: 1390px;
    margin: 0 auto;
    border-radius: 8px;
    min-height:600px;
}
.slider-numb{
    width: 30rem;
}
.slider-work{
    /* width: 78%;*/
    display: flex;
}
.ti-a{
    font-size: 1.2rem;
    text-transform: uppercase;
}
.cot-a{
    font-size: 16px;
    font-family: system-ui;
    font-weight: 400;
    margin: 15px 0px;
}
.c-lines{
    display: flex;
    justify-content: center;
    margin: 0px 15px;
    flex-direction: column;
    align-items: center;
    text-align: center;
}
._sli-n{
    font-family: 'fastweb';
    height: 50px;
    position: relative;
    width: 90px;
    text-align: center;
    font-weight: 900;
    font-size: 30px;
    line-height: 53px;
    padding-bottom: 3px;
    opacity: 0.5;
    color: var(--mainColor);
    cursor: pointer;
    margin: 0px 10px;

}._sli-n-img{
     font-family: 'fastweb';
     height: 50px;
     position: relative;
     width: 90px;
     text-align: center;
     font-weight: 900;
     font-size: 30px;
     line-height: 53px;
     padding-bottom: 3px;
     opacity: 0.1;
     color: var(--mainColor);
     cursor: pointer;
     /* margin: 0px 10px; */
     margin: 3px 125px;
}
.step-a{
    height: 50px;
    transform: translate3d(0px, 0px, 0px);
    transition-duration: 0ms;
    transition: 0.3s all;
}
.step-b{
    height: 50px;
    transform: translate3d( -59px,0px, 0px);
    transition-duration: 0ms;
    transition: 0.3s all;
}
.step-c{
    height: 50px; transform:
    translate3d(-118px, 0px, 0px);
    transition-duration: 0ms;
    transition: 0.3s all;
}
.step-d{
    height: 50px;
    transform: translate3d(-177px, 0px, 0px);
    transition-duration: 0ms;
    transition: 0.3s all;
}
.step-a-img{
    height: 50px;
    transform: translate3d( 0px,0px, 0px);
    transition-duration: 0ms;
    transition: 0.3s all;
}
.step-b-img{
    height: 50px;
    transform: translate3d( -338px,0px, 0px);
    transition-duration: 0ms;
    transition: 0.3s all;
}
.step-c-img{
    height: 50px; transform:
    translate3d(-679px, 0px, 0px);
    transition-duration: 0ms;
    transition: 0.3s all;
}
.step-d-img{
    height: 50px;
    transform: translate3d(-1020px, 0px, 0px);
    transition-duration: 0ms;
    transition: 0.3s all;
}
@media only screen and (max-width: 340px) {
    h2 {
        font-size: 1.2rem;
        padding: 0!important;
    }

}
/*@media only screen and (min-width: 992px)  and (max-width: 1199px) {*/
/*    .laptop {*/
/*        width: 482px;*/
/*    }*/
/*    .im-a {*/
/*        left: 72px;*/
/*        top: 28px;*/
/*        width: 338px;*/
/*    }*/
/*    .box-slider {*/
/*        max-height: 257px;*/
/*    }*/
/*    .slider-numb{*/
/*        width: 100px;*/
/*    }*/

/*    .text-c {*/
/*        position: relative;*/
/*        left: 27px;*/
/*    }*/
/*    ._sli-n:before{*/
/*        margin-left: 0px;*/
/*    }*/
/*    .slider-arrow {*/
/*        justify-content: space-around;*/
/*        bottom: 0;*/
/*    }*/
/*    .b-s:hover{*/
/*        background: #e1e1e1b8;*/
/*        border-radius: 35px;*/
/*    }*/
/*    .arrow-a,.arrow-b{*/
/*        margin: 5px;*/
/*    }*/
/*}*/
/*@media only screen and (min-width: 720px) and (max-width: 992px){
    .arrow-a {
        transform: rotate(
            180deg
        );
    }
    .arrow-b {

    }
    .laptop {
        width: 482px;
    }
    .im-a {
        left: 72px;
        top: 28px;
        width: 338px;
    }
    .box-slider {
        max-height: 257px;
    }
    .slider-numb{
        display: flex;
        flex-direction: row;
        justify-content: center;
        width: 100%;
    }

    .text-c {
        width: 35rem!important;
    }
    ._sli-n:before{
        margin-left: 0px;
    }
    .slider-arrow {
        position: relative;
        top: 42px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin: 0px 40px;
    }
    .c-lines {
        display: flex;
        margin: 0px 15px;
        flex-direction: column;
    }
    .slider-work {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .b-s{
        background: none;
    }
}*/
/*@media only screen and (min-width: 576px) and (max-width: 720px) {
    .arrow-a {
        transform: rotate(
            180deg
        );
    }
    .arrow-b {

    }
    .laptop {
        width: 482px;
    }
    .im-a {
        left: 72px;
        top: 28px;
        width: 338px;
    }
    .box-slider {
        max-height: 257px;
    }
    .slider-numb{
        display: flex;
        flex-direction: row;
        justify-content: center;
        width: 100%;
    }


    .text-c {
        width: 450px!important;
    }
    ._sli-n:before{
        margin-left: 0px;
    }
    .slider-arrow {
        position: relative;
        top: 42px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin: 0px 40px;
    }
    .c-lines {
        display: flex;
        margin: 0px 15px;
        flex-direction: column;
    }
    .slider-work {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .b-s{
        background: none;
    }
}*/
/*@media only screen and (max-width: 360px) {

    .active_step {
        font-size: 2rem!important;
    }
    ._sli-n {
        width: 50px;
        font-size: 20px;
        margin-bottom: 0px;
    }
    .arrow-a {
        transform: rotate(
            180deg
        );
    }
    .arrow-b {

    }
    .laptop {
        width: 280px;
    }
    .im-a {
        left: 41px;
        top: 16px;
        width: 198px;
    }
    .box-slider {
        max-height: 149px;
    }
    .slider-numb{
        display: flex;
        flex-direction: row;
        justify-content: center;
        width: 100%;
    }

    .text-c {
        width: auto!important;
    }
    ._sli-n:before{
        margin-left: 0px;
    }
    .slider-arrow {
        display: flex;
        position: relative;
    }
    .c-lines {
        display: flex;
        margin: 0px 15px;
        flex-direction: column;
    }
    .slider-work {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .b-s{
        background: none;
    }
}*/

/*@media only screen and (min-width: 360px) and (max-width: 576px) {
    ._sli-n {
        width: 65px;
        margin-bottom: 15px;
    }
    .arrow-a {
        transform: rotate(
            180deg
        );
    }
    .arrow-b {

    }
    .laptop {
        width: 370px;
    }
    .im-a {
        left: 54px;
        top: 21px;
        width: 262px;
    }
    .box-slider {
        max-height: 197px;
    }
    .slider-numb{
        display: flex;
        flex-direction: row;
        justify-content: center;
        width: 100%;
    }

    .text-c {
        width: auto!important;
    }
    ._sli-n:before{
        margin-left: 0px;
    }
    .slider-arrow {
        display: flex;
        position: relative;
    }
    .c-lines {
        display: flex;
        margin: 0px 15px;
        flex-direction: column;
    }
    .slider-work {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .b-s{
        background: none;
    }
}
@media only screen and (max-width: 414px) {
    h2 {
        font-size: 1.2rem;
        padding: 0;
    }
}*/
@media only screen and (min-width: 180px)  {
    .slider-numb {
        width: 130px;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: stretch;
        left: 12px;
        position: relative;

    }
    .slider-numb-img {
        width: 130px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: stretch;
        /* left: 12px; */
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0!important;
        z-index: -1;
}
.text-c {
    position: relative;
    left: 35px;
}

.laptop {
    width:  298px;
}
.im-a {
    left: 88px;
    top: 35px;
    width: 426px;
}
    .im-a-img {
        left: -100px;
        top: 14px;
        max-width: 243px;
        position: relative;
}
.box-slider {
    max-height: 100%;
}
._sli-n:before{
    margin-left: 0;
}

.b-s:hover{
    background: #e1e1e1b8;
    border-radius: 35px;
}
.arrow-a,.arrow-b{
    margin: 5px;
}
}

.inner {
position: absolute;
top: 45px;
left: 0px;
right: 0px;
width: 100%;
max-width: 570px;
margin: 0 auto;
height: 360px;
overflow: hidden;

-webkit-transition: 1.5s all;
-moz-transition: 1.5s all;
-ms-transition: 1.5s all;
-o-transition: 1.5s all;
transition: 1.5s all;
}
.text-c{
width: 318px;
}
</style>

}

