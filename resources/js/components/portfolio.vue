<template>
    <div>
        <v-lazy>
        <v-container id="five">
        <div class="dt">
            <h2>ПОРТФОЛИО</h2>
            <div class="title-line"></div>
        </div>
            <div class="_wr">
            <div class="label">
            <v-col class="_sub-t">
                Книги
            </v-col>
        </div>
        <swiper :navigation="true" ref="mySwiper" :options="swiperOptions">
            <swiper-slide>
                <div class="card">
                    <div class="stic">
                        <v-tooltip left>
                            <template v-slot:activator="{ on, attrs }">
                            <div class="_label-m"
                                 v-bind="attrs"
                                 v-on="on"
                            >
                                <div class="chips-img"><img  src="/img/t1.svg" alt=""></div>
                            </div>
                            </template>
                            <span>Транскрибация</span>
                        </v-tooltip>
                        <v-tooltip left>
                            <template v-slot:activator="{ on, attrs }">
                                <div class="_label-m"
                                     v-bind="attrs"
                                     v-on="on"
                                >
                            <div class="_sh blue chips-img"><img src="/img/t2.svg" alt=""></div>
                        </div>
                            </template>
                            <span>Корректура</span>
                        </v-tooltip>
                        <v-tooltip left>
                            <template v-slot:activator="{ on, attrs }">
                                <div class="_label-m"
                                     v-bind="attrs"
                                     v-on="on"
                                >
                            <div class="_sh green chips-img"><img src="/img/t3.svg" alt=""></div>
                        </div>
                            </template>
                            <span>Редактирование</span>
                        </v-tooltip>
                    </div>

                    <div class="image-wrapper">
                        <div class="_c"></div>
                        <img class="_w" src="/img/metr.png" alt="Как я создал метры">
                        <div class="_cc">
                            <v-btn class="white--text" color="var(--blue)">Подробнее</v-btn>
                        </div>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="card">
                    <div class="stic">
                        <v-tooltip left>
                            <template v-slot:activator="{ on, attrs }">
                                <div class="_label-m"
                                     v-bind="attrs"
                                     v-on="on"
                                >
                                    <div class="chips-img"><img  src="/img/t1.svg" alt=""></div>
                                </div>
                            </template>
                            <span>Транскрибация</span>
                        </v-tooltip>
                        <v-tooltip left>
                            <template v-slot:activator="{ on, attrs }">
                                <div class="_label-m"
                                     v-bind="attrs"
                                     v-on="on"
                                >
                                    <div class="_sh blue chips-img"><img src="/img/t2.svg" alt=""></div>
                                </div>
                            </template>
                            <span>Корректура</span>
                        </v-tooltip>
                        <v-tooltip left>
                            <template v-slot:activator="{ on, attrs }">
                                <div class="_label-m"
                                     v-bind="attrs"
                                     v-on="on"
                                >
                                    <div class="_sh green chips-img"><img src="/img/t3.svg" alt=""></div>
                                </div>
                            </template>
                            <span>Редактирование</span>
                        </v-tooltip>
                    </div>
                    <div class="image-wrapper">
                        <div class="_c"></div>
                        <img class="_w" src="/img/rmm.png" alt="Как я создал метры">
                        <div class="_cc">
                            <v-btn class="white--text" color="var(--blue)">Подробнее</v-btn>
                        </div>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="card">
                    <div class="stic">
                        <v-tooltip left>
                            <template v-slot:activator="{ on, attrs }">
                                <div class="_label-m"
                                     v-bind="attrs"
                                     v-on="on"
                                >
                                    <div class="chips-img"><img  src="/img/t1.svg" alt=""></div>
                                </div>
                            </template>
                            <span>Транскрибация</span>
                        </v-tooltip>
                        <v-tooltip left>
                            <template v-slot:activator="{ on, attrs }">
                                <div class="_label-m"
                                     v-bind="attrs"
                                     v-on="on"
                                >
                                    <div class="_sh blue chips-img"><img src="/img/t2.svg" alt=""></div>
                                </div>
                            </template>
                            <span>Корректура</span>
                        </v-tooltip>
                        <v-tooltip left>
                            <template v-slot:activator="{ on, attrs }">
                                <div class="_label-m"
                                     v-bind="attrs"
                                     v-on="on"
                                >
                                    <div class="_sh green chips-img"><img src="/img/t3.svg" alt=""></div>
                                </div>
                            </template>
                            <span>Редактирование</span>
                        </v-tooltip>
                    </div>
                    <div class="image-wrapper">
                        <div class="_c"></div>
                        <img class="_w" src="/img/sav.png" alt="Как я создал метры">
                        <div class="_cc">
                            <v-btn class="white--text" color="var(--blue)">Подробнее</v-btn>
                        </div>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="card">
                    <div class="stic">
                        <v-tooltip left>
                            <template v-slot:activator="{ on, attrs }">
                                <div class="_label-m"
                                     v-bind="attrs"
                                     v-on="on"
                                >
                                    <div class="chips-img"><img  src="/img/t1.svg" alt=""></div>
                                </div>
                            </template>
                            <span>Транскрибация</span>
                        </v-tooltip>
                        <v-tooltip left>
                            <template v-slot:activator="{ on, attrs }">
                                <div class="_label-m"
                                     v-bind="attrs"
                                     v-on="on"
                                >
                                    <div class="_sh blue chips-img"><img src="/img/t2.svg" alt=""></div>
                                </div>
                            </template>
                            <span>Корректура</span>
                        </v-tooltip>
                        <v-tooltip left>
                            <template v-slot:activator="{ on, attrs }">
                                <div class="_label-m"
                                     v-bind="attrs"
                                     v-on="on"
                                >
                                    <div class="_sh green chips-img"><img src="/img/t3.svg" alt=""></div>
                                </div>
                            </template>
                            <span>Редактирование</span>
                        </v-tooltip>
                    </div>
                    <div class="image-wrapper">
                        <div class="_c"></div>
                        <img class="_w" src="/img/dn.png" alt="Как я создал метры">
                        <div class="_cc">
                            <v-btn class="white--text" color="var(--blue)">Подробнее</v-btn>
                        </div>
                    </div>
                </div>
            </swiper-slide>

            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
</div>
        </v-container>
        </v-lazy>
        <div>
            <v-lazy>
            <v-container id="five">
                <div class="_wr">
                    <div class="label">
                        <v-col class="_sub-t">
                            Статьи
                        </v-col>
                    </div>
                <swiper :navigation="true" ref="mySwiper" :options="swiperOptions">
                    <swiper-slide>
                        <div class="card">
                            <div class="image-wrapper">
                                <div class="_c"></div>
                                <img class="_w" src="/img/admi_1.png" alt="Как я создал метры">
                                <div class="_cc">
                                    <v-btn @click="portfolio(0)" class="white--text" color="var(--blue)">Подробнее</v-btn>
                                </div>
                            </div>

                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="card">
                            <div class="image-wrapper">
                                <div class="_c"></div>
                                <img class="_w" src="/img/admi_2.png" alt="Как я создал метры">
                                <div class="_cc">
                                    <v-btn @click="portfolio(1)" class="white--text" color="var(--blue)">Подробнее</v-btn>
                                </div>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="card">
                            <div class="image-wrapper">
                                <div class="_c"></div>
                                <img class="_w" src="/img/vint2.png" alt="Как я создал метры">
                                <div class="_cc">
                                    <v-btn @click="portfolio(2)" class="white--text" color="var(--blue)">Подробнее</v-btn>
                                </div>
                            </div>
                        </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="card">
                                <div class="image-wrapper">
                                    <div class="_c"></div>
                                    <img class="_w" src="/img/vint.png" alt="Как я создал метры">
                                    <div class="_cc">
                                        <v-btn @click="portfolio(3)" class="white--text" color="var(--blue)">Подробнее</v-btn>
                                    </div>
                                </div>
                            </div>
                        </swiper-slide>
                    <div class="swiper-button-prev" slot="button-prev"></div>
                    <div class="swiper-button-next" slot="button-next"></div>
                    <div class="swiper-pagination" slot="pagination"></div>
                </swiper>
                </div>
                <v-row>
                    <v-col class="_a6 component">
                        <blockquote class="callout quote EN">
                            Автобиография — текст, написанный в розовых очках.
                            <cite> - Ашот Сергеевич Наданян армянский шахматист 1972</cite>
                        </blockquote>
                    </v-col>
                </v-row>
            </v-container>
            </v-lazy>
        </div>

    </div>

</template>

<script>
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper"

// import style (>= Swiper 6.x)
import "swiper/swiper-bundle.css"

// import style (<= Swiper 5.x)
import "swiper/swiper.scss"
import "swiper/components/navigation/navigation.min.css"
// import Swiper core and required modules
import SwiperCore, {
    Navigation
} from 'swiper/core';
import {mapActions, mapGetters} from "vuex";
// install Swiper modules
SwiperCore.use([Navigation]);

export default {
    name: "portfolio",
    data() {
        return {
            po:{
                0:{
                    title:'10 правил счастливой семейной жизни, которые на самом деле не работают',
                    body:'Статья на познавательно-развлекательном сайте. Была переведена на английский и испанский языки. Набрала около 1 700 000 просмотров.',
                    link:'https://www.adme.ru/svoboda-psihologiya/10-pravil-schastlivoj-semejnoj-zhizni-kotorye-na-samom-dele-ne-rabotayut-1524165/',
                    linkImg:'/img/admi_1.png',
                },
                1:{
                    title:'6 приложений, которые уберегут от неудачных экспериментов с внешностью',
                    body:'Статья на познавательно-развлекательном сайте. Была переведена на английский и испанский языки. Набрала около 900 000 просмотров.',
                    link:'https://www.adme.ru/svoboda-sdelaj-sam/6-prilozhenij-kotorye-uberegut-ot-neudachnyh-eksperimentov-s-vneshnostyu-1517365/',
                    linkImg:'/img/admi_2.png',
                },
                2:'Во воласти медиа',
                3:'Роскошный brunello cucinelli',
            },
            swiperOptions: {
                pagination: {
                    el: '.swiper-pagination'
                },
                hashNavigation: true,
                breakpoints: {
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                        navigation: {
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        },

                    },
                    480: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                        navigation: {
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        },
                    },
                    // when window width is >= 640px
                    640: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                        navigation: {
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        },
                    },
                    1200: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                        navigation: {
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        },
                    }
                },

                // Some Swiper option/callback...
            }
        }
    },
    components: {
        Swiper,
        SwiperSlide,

    },
    directives: {
        swiper: directive
    },
    computed:{
        ...mapGetters({getWork:'getWork'})

    },
    methods:{
        ...mapActions({actionWork:'actionWork'}),
        portfolio(a){
            this.actionWork({info:this.po[a]})
        }
    },

}
</script>

<style scoped>
.card{

    margin: 0px 15px;
    padding: 15px 0px;
    border-radius: 6px;
}
._w{
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    transition: 0.2s ease-in;
}
._c{
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100%;
    background: linear-gradient(
        0deg
        , rgb(0 0 0 / 14%) 0%, rgba(240, 244, 253, 0.2) 100%);
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-end;
}
._ims{
    filter: brightness(0) invert(1);
}
._cc{
    text-align: center;
    width: 100%;
    /* padding: 10px 0px; */
    position: absolute;
    bottom: -2px;
    z-index: 2;

}
._cc>.v-btn{
    width: 100%!important;
    padding: 0!important;
    border-radius: 0!important;
}
.stic{
    position: absolute;
    top: 18px;
    right: 25px;
    display: flex;
    flex-wrap: nowrap;
    align-content: flex-end;
    flex-direction: column;
    align-items: center;
    z-index: 2;
}
.v-btn{
    margin: 2px 0px;
}
.label{
    z-index: 2;
}
._wr{
    position: relative;
}
.image-wrapper {
    -webkit-box-shadow: 2px 2px 12px -8px rgb(0 0 0);
    -moz-box-shadow: 2px 2px 12px -8px rgba(34, 60, 80, 1);
    box-shadow: 2px 3px 13px -8px rgb(0 0 0);
    border-radius: 12px;
    overflow: hidden;
    width: 100%;
    height: auto;
    position: relative;
    flex-basis: 48%;
    display: flex;
}
.chips-img{
    background: #fe554e;
    height: 36px;
    border-radius: 5px;
}
.chips-img>img{
    width: 25px;
    padding: 5px;
}
._label-m{
    margin: 5px 0px;
}
._sub-t{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    font-size: 1.5rem;
    font-weight: 700;
    color: #5f6162;
}
.swiper-button-prev, .swiper-button-next {
    background: #fe554e!important;
    border-radius: 37px!important;
    width: 45px!important;
    height: 45px!important;
}
</style>
