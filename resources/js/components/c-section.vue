<template>
    <div>
        <section class="c-section">
            <div class="c-section-in fast-web">
                <div class="at">
                    <h2>ПРИМЕРЫ РАБОТ</h2>
                    <div class="title-line"></div>
                </div>
                <div class="c-lines" >
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
                    <div class="slider-work">
                        <div class="text-c">
                            <div class="ti-a">
                                {{cont.t}}
                            </div>
                            <div class="cot-a">
                                {{cont.c}}
                            </div>
                        </div>
                        <div class="slide-c" style="opacity: 1;">
                            <div class="box-slider">
                                <img src="/img/slide.png" alt="img" class="laptop">
                                <transition name="fade">
                                    <img v-if="isActive === 0" src="/img/Acadwmy.png"  alt="img" class="im-a">
                                </transition>
                                <transition name="fade">
                                    <img v-if="isActive === 1" src="/img/curse.png"  alt="img" class="im-a">
                                </transition>
                                <transition name="fade">
                                    <img v-if="isActive === 2" src="/img/kinder.png"  alt="img" class="im-a">
                                </transition>
                                <transition name="fade">
                                    <img v-if="isActive === 3" src="/img/fast.png"  alt="img" class="im-a">
                                </transition>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: "c-section",
    data(){
        return{
            step:'step-a',
            check:Boolean,
            isActive:0,
            cont:{
                t:'Разработка тактики сплит-тестирования элементов',
                c:'Чтобы точнее соответствовать ожиданиям вашей целевой аудитории мы предложим варианты тестирования отдельных элементов и текстов на посадочной страницы.',
            }

        }
    },
    created() {
        if(window.innerWidth <= 992){
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
            if(window.innerWidth <= 992){
                this.check = false
            }  else{this.check = true}
        },
        slider(e){
            switch(e) {
                case 0: this.step = 'step-a'
                        this.isActive = 0
                        this.cont.t ='Разработка тактики сплит-тестирования элементов'
                        this.cont.c ='Чтобы точнее соответствовать ожиданиям вашей целевой аудитории мы предложим варианты тестирования отдельных элементов и текстов на посадочной страницы.'
                    break;
                case 1: this.step = 'step-b'
                        this.isActive = 1
                        this.cont.t ='Рекомендации по содержанию, качеству фото- и видео для сайта'
                        this.cont.c ='Фото и Видеоконтент, которые отлично работали ещё 1 год назад, уже не так эффективны. Мы подготовим рекомендации по наполнению лендинга актуальными и релевантными материалами.'
                    break;
                case 2: this.step = 'step-c'
                        this.isActive = 2
                        this.cont.t ='Рекомендации по содержанию, качеству фото и видео для сайта'
                        this.cont.c ='Фото и Видеоконтент, которые отлично работали ещё 1 год назад, уже не так эффективны. Мы подготовим рекомендации по наполнению лендинга актуальными и релевантными материалами.'
                        break;
                case 3: this.step = 'step-d'
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
        270deg
    );
}
.arrow-b{
    background: url('/img/arrow-c.svg') no-repeat scroll 0 0;
    width: 30px;
    height: 30px;
    transform: rotate(
       90deg
    );
}
.slider-arrow{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    position: relative;
    bottom: 50px;
}


.fade-enter-active {
    transition: all 2s ease;
}
.fade-enter-active, .fade-leave-active {
    transform: translate3d(0px, 0px, 0px);
}
.fade-enter, .fade-leave-to {
    transform: translate3d(0px, -1010px, 0px);
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
    overflow: hidden;
    max-height: 432px;
    z-index: 9;
}
.slide-c{
    position: relative;
}
.active_step:before{
 /*   min-width: 50px!important;*/
    width: 100%!important;
    max-width: 65px!important;
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
}
._sli-n{
    font-family: 'fastweb';
    height: 50px;
    margin-bottom: 40px;
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

}
@media only screen and (max-width: 340px) {
    h2 {
        font-size: 1.2rem;
        padding: 0!important;
    }

}
@media only screen and (min-width: 992px)  and (max-width: 1199px) {
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
        width: 100px;
    }
    .active_step:before {
        max-width: 20px!important;
    }
    .text-c {
        position: relative;
        left: 27px;
    }
    ._sli-n:before{
        margin-left: 0px;
    }
    .slider-arrow {
        justify-content: space-around;
        bottom: 0;
    }
    .b-s:hover{
        background: #e1e1e1b8;
        border-radius: 35px;
    }
    .arrow-a,.arrow-b{
        margin: 5px;
    }
}
@media only screen and (min-width: 720px) and (max-width: 992px){
    .arrow-a {
        transform: rotate(
            180deg
        );
    }
    .arrow-b {
        transform: rotate(
            360deg
        );
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
    .active_step:before {
       display: none;
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
}
@media only screen and (min-width: 576px) and (max-width: 720px) {
    .arrow-a {
        transform: rotate(
            180deg
        );
    }
    .arrow-b {
        transform: rotate(
            360deg
        );
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
    .active_step:before {
        display: none;
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
}
@media only screen and (max-width: 360px) {

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
        transform: rotate(
            360deg
        );
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
    .active_step:before {
        display: none;
    }
    .text-c {
        width: auto!important;
    }
    ._sli-n:before{
        margin-left: 0px;
    }
    .slider-arrow {
        position: relative;
        display: flex;
        flex-direction: row;
        top: 0px;
        justify-content: space-around;
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

@media only screen and (min-width: 360px) and (max-width: 576px) {
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
        transform: rotate(
            360deg
        );
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
    .active_step:before {
        display: none;
    }
    .text-c {
        width: auto!important;
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
}
@media only screen and (min-width: 1200px) and (max-width: 1359px) {
    .slider-numb {
        width: 130px;
    }
    .text-c {
        position: relative;
        left: 35px;
    }

    .laptop {
        width:  600px;
    }
    .im-a {
        left: 88px;
        top: 35px;
        width: 426px;
    }
    .box-slider {
        max-height: 320px;
    }
    ._sli-n:before{
        margin-left: 0;
    }
    .active_step:before {
        max-width: 55px!important;
    }
    .slider-arrow {
        bottom: 0px;
        justify-content: space-evenly;
    }
    .b-s:hover{
        background: #e1e1e1b8;
        border-radius: 35px;
    }
    .arrow-a,.arrow-b{
        margin: 5px;
    }
}
@media only screen and (min-width: 1360px) {
    .active_step:before {
        width: 40px;
    }
    .slider-numb {
        width: 171px;
    }
    .laptop{
        width: 800px;
    }
    .slider-arrow {
        justify-content: space-evenly;
    }
     .im-a {
         left: 119px;
         top: 46px;
         width: 563px;
     }
    .box-slider {
        max-height: 427px;
    }
    ._sli-n:before{
        margin-left: 0;
    }
    .active_step:before {
        max-width: 60px!important;
    }
    .b-s:hover{
        background: #e1e1e1b8;
        border-radius: 35px;
    }
    .arrow-a,.arrow-b{
        margin: 5px;
    }
}
@media only screen and (max-width: 280px) {
    h2 {
        font-size: 1.2rem;
        padding: 0!important;
    }
}
.step-a{
    height: 50px;
    transform: translate3d(0px, 0px, 0px);
    transition-duration: 0ms;
    transition: 0.3s all;
}
.step-b{
    height: 50px;
    transform: translate3d(0px, -90px, 0px);
    transition-duration: 0ms;
    transition: 0.3s all;
}
.step-c{
    height: 50px; transform:
    translate3d(0px, -180px, 0px);
    transition-duration: 0ms;
    transition: 0.3s all;
}
.step-d{
    height: 50px;
    transform: translate3d(0px, -270px, 0px);
    transition-duration: 0ms;
    transition: 0.3s all;
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
