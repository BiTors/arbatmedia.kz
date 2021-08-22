<template>
<div>
    <section class="e-section">
        <div class="e-section-in fast-web">
            <div class="et">
                <h2>ВЫЖМИ МАКСИМУМ,ПРОДАВАЙ БОЛЬШЕ.</br>
               УВЕЛИЧИЫВАЙ ПРОДАЖИ В СВЯЗКЕ, БУДЩЕГО<span class="title-qu"> LANDING PAGE </span>И РЕКЛАМОЙ </h2>
                <div class="title-line"></div>
            </div>
            <div class="ads">
                <div class="ads-e">
                    <div class="head-ads">
                        <div class="ico-e">
                            <img src="/img/focus.svg" alt="Настройка таргетированной рекламы" class="im-e im-svg">
                        </div>
                        <div class="title-ad">
                            Настройка таргетированной рекламы
                        </div>
                    </div>
                    <div class="cont-e-ads">
                        <div class="cont-f">
                            <div class="body-e">
                                Таргетированная реклама – это показ объявлений в социальных сетях только тем людям, которые подходят под портрет вашей целевой аудитории.
                            </div>
                            <div class="all">
                                <div class="disc-e">
                                    НАСТРОИМ ДЛЯ:
                                </div>
                                <div class="ads-prod">
                                    <div class="prod-e">
                                        <div class="all-e-p">
                                            <img src="/img/instagram.svg" alt="Настройка таргетированной рекламы" class="wiz im-e">
                                        </div>
                                        <div class="title-ads">
                                           instagram
                                        </div>
                                    </div>
                                    <div class="prod-e">
                                        <div class="all-e-p">
                                            <img src="/img/fa.svg" alt="Настройка таргетированной рекламы" class="im-e">
                                        </div>
                                        <div class="title-ads">
                                            facebook
                                        </div>
                                    </div>
                                    <div class="prod-e">
                                        <div class="all-e-p">
                                            <img src="/img/vk.svg" alt="Настройка таргетированной рекламы" class="im-e">
                                        </div>
                                        <div class="title-ads">
                                            вконтакте
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="foo">
                            <div class="time-e">
                                От настройки до запуска 1-2 дня
                            </div>
                            <div class="price-ads size">
                                <div class="disc-price">
                                    За одну социальную сеть:
                                </div>
                                <div class="total">
                                    10 000 ₸
                                </div>
                            </div>
                                <v-btn  @click="popups(soc.a)" class="secondary">Настроить рекламу
                                <div class="price-ads pl re">
                                    <div class="disc-price">
                                        За одну социальную сеть:
                                    </div>
                                    <div class="total">
                                        10 000 ₸
                                    </div>
                                </div>
                                </v-btn>

                        </div>
                    </div>
                </div>
                <div class="ads-e">
                    <div class="head-ads">
                        <div class="ico-e">
                            <img src="/img/7.svg" alt="Настройка таргетированной рекламы" class="im-e im-svg">
                        </div>
                        <div class="title-ad">
                            Настройка контекстная реклама
                        </div>
                    </div>
                    <div class="cont-e-ads">
                        <div class="cont-f">
                            <div class="body-e">
                                Реклама в поисковиках необходима для быстрого увеличения потока посетителей и продаж с вашего сайта. Она позволяет оказаться на первой строчке поисковой выдачи с первого дня запуска рекламы, чтобы обойти всех ваших конкурентов и получать заявки на товары и услуги от горячих клиентов.
                            </div>
                            <div class="all">
                                <div class="disc-e">
                                    НАСТРОИМ ДЛЯ:
                                </div>
                                <div class="ads-prod">
                                    <div class="prod-e">
                                        <div class="all-e-p">
                                            <img src="/img/google.svg" alt="Настройка таргетированной рекламы" class="wiz im-e">
                                        </div>
                                        <div class="title-ads">
                                            google
                                        </div>
                                    </div>
                                    <div class="prod-e">
                                        <div class="all-e-p">
                                            <img src="/img/yandex.svg" alt="Настройка таргетированной рекламы" class="im-e">
                                        </div>
                                        <div class="title-ads">
                                            yandex
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="foo">
                            <div class="time-e">
                                От настройки до запуска 1-2 дня
                            </div>
                            <div class="price-ads  size">
                                <div class="disc-price">
                                    За одну компанию:
                                </div>
                                <div class="total">
                                    10 000 ₸
                                </div>
                            </div>

                                <v-btn  @click="popups(soc.b)" class="secondary">Настроить рекламу
                                <div class="price-ads pr re">
                                    <div class="disc-price">
                                        За одну компанию:
                                    </div>
                                    <div class="total">
                                        10 000 ₸
                                    </div>
                                </div>
                                </v-btn>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
</div>
</template>

<script>

import {mapActions} from "vuex";

export default {
    name: "e-section",
    data(){
        return{
            soc: {
                a:0,
                b:1
            },
        }
    },
    computed:{

    },
    methods:{
        ...mapActions({actionAds:'actionAds'}),
        popups(e){
          //  this.actionAds({'total':a,'plan':b,'dialog':true,product:'landing page'})
        }
    },
}
</script>

<style scoped>
.e-section{
    background: #F5FAFF;
}
.size{
    display: none;
}
.e-section-in{
    max-width: 1390px;
    margin: 0 auto;
    border-radius: 8px;
    min-height:600px;
}
h2{
    padding: 0;
}
.title-e{
    padding: 50px 0px;
}
.title-ad{
    font-size: 1.2rem;
    text-transform: uppercase;
    margin: 0px 15px;
}
.ads{
    display: flex;
    justify-content: space-evenly;
}
.head-ads{
    display: flex;
    align-items: center;
    margin: 15px 0px;
}
.cont-e-ads{
    background: #ffffff;
    border-radius: 8px;
    min-height: 280px;
    position: relative;
}
.cont-f{
    display: flex;
    justify-content: space-around;
}
.title-ads{
    font-size: 1rem;
    margin-left: 10px;
}
.body-e{
    font-size: 16px;
    font-family: system-ui;
    font-weight: 400;
    margin: 15px;
}
.ads-e{
    max-width: 630px;
}
.all{
    min-width: 285px;
    display: flex;
    justify-content: space-around;
    margin: 15px;
}
.prod-e{
    display: flex;
}
.ads-prod{
    margin: 0px 10px;
    min-width: 111px;
}
.call{
    margin: 0;
}
.foo{
    display: flex;
    justify-content: space-around;
    padding: 10px 0px;
    position: absolute;
    bottom: 0px;
    left: 0;
    right: 0;
}
.disc-price{
    font-size: 0.8rem;
    margin: 0px 10px;
    text-transform: initial;
    color: #000000;
}
.price-ads{
    position: absolute;
    display: flex;
    align-items: center;
}
.pl{
    top: -40px;
    right: -40px;
}
.pr{
    top: -40px;
    right: -20px;
}
.total{
    color: var(--red);
}
.im-svg{
    width: 65px;
}


/*MEDIA*/
@media only screen and (min-width: 1360px) {
    .size{
        display: none;
    }
}
@media only screen and (min-width: 1200px) and (max-width: 1359px) {
    .cont-f{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .foo{
        align-items: center;
    }
    .cont-e-ads {
        min-height: 300px;
    }
    .price-ads{
/*        position: initial;
        margin: 10px 0px;*/
    }
    .ads-e {
        max-width: 550px;
    }
    .all {
         margin: 0;
    }
    .size{
        display: none;
    }
    .pl{
        right: -15px;
    }
}
@media only screen and (min-width: 992px)  and (max-width: 1199px) {
    .cont-f{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .foo{
        align-items: center;
        flex-direction: column;
    }
    .price-ads{
        /*        position: initial;
                margin: 10px 0px;*/
    }
    .ads-e {
        max-width: 450px;
    }
    .all {
        margin: 0;
    }
    .cont-e-ads {
        min-height: 350px;
    }
    .re{
        display: none;
    }
    .size{
        display: inherit;
        position: initial;
        margin: 10px 0px 10px 0px;
    }
}
@media only screen and (min-width: 575px) and (max-width: 992px){
    .ads {
        display: flex;
        flex-direction: column;
        align-items: center;
        flex-wrap: nowrap;
        margin: 0px 15px;
    }
    .cont-f{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .foo{
        align-items: center;
        flex-direction: column;
        position: relative;
    }
    .price-ads{
        /*        position: initial;
                margin: 10px 0px;*/
    }
    .ads-e {
        max-width: 450px;
    }
    .all {
        margin: 0;
    }
    .cont-e-ads {
        min-height: inherit;
    }
    .re{
        display: none;
    }
    .size{
        display: inherit;
        position: initial;
        margin: 10px 0px 10px 0px;
    }
}

@media only screen and (min-width: 320px) and (max-width: 575px){
    .im-svg{
        width: 55px;
    }
    .title-e {
        font-size: 0.9rem;
        margin: 0px 15px;
    }
    .title-ad {
        font-size: 1rem;
    }
    .ads {
        display: flex;
        flex-direction: column;
        align-items: center;
        flex-wrap: nowrap;
        margin: 0px 15px;
    }
    .cont-f{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .foo{
        align-items: center;
        flex-direction: column;
        position: relative;
    }
    .price-ads{
        /*        position: initial;
                margin: 10px 0px;*/
    }
    .ads-e {
        max-width: 450px;
    }
    .all {
        margin: 0;
    }
    .cont-e-ads {
        min-height: inherit;
    }
    .re{
        display: none;
    }
    .size{
        display: inherit;
        position: initial;
        margin: 10px 0px 10px 0px;
    }
    .call {
        margin: 10px 0px 0px 0px;
        font-size: 13px;
        padding: 10px;
    }
}
@media only screen and (max-width: 319px){
    .im-svg{
        width: 55px;
    }
    .title-e {
        font-size: 0.7rem;
        margin: 0px 15px;
    }
    .title-ad {
        font-size: 0.8rem;
    }
    .ads {
        display: flex;
        flex-direction: column;
        align-items: center;
        flex-wrap: nowrap;
    }
    .cont-f{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .foo{
        align-items: center;
        flex-direction: column;
        position: relative;
    }
    .price-ads{
        /*        position: initial;
                margin: 10px 0px;*/
    }
    .ads-e {
        max-width: 450px;
    }
    .all {
        margin: 0;
    }
    .cont-e-ads {
        min-height: 324px;
        border-radius: 0;
    }
    .re{
        display: none;
    }
    .size{
        display: inherit;
        position: initial;
        margin: 10px 0px 10px 0px;
    }
    .call {
        margin: 10px 0px 0px 0px;
        font-size: 13px;
        padding: 10px;
    }
    .head-ads {
        margin: 15px 15px;
    }
    .disc-e{
        margin: 0px 15px;
    }
    .ads-prod[data-v-d76abd7c] {
        margin: 0px 15px;
    }
}

/*MEDIA*/
</style>
