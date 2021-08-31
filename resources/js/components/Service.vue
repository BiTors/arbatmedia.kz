<template>
<div>
    <v-container>
    <v-row class="mb-3">
        <v-col>
           <router-link class="al" :to="{ name: 'rewrite'}">
            <div  class="step_work center">
                <div class="im-d-cont b-ic">
                    <img src="/img/brain.svg"  alt="Рерайт текста онлайн" class="im-d">
                </div>
                <div class="title-d-cont">
                    Re-DAGNA
                </div>
                <div class="body-d-cont">
                    Онлайн-сервис для перефразирования текста с помощью ИИ
                </div>
                <div color="" class=" num-d-cont">
                   AI
                </div>
            </div>
           </router-link>
        </v-col>
    </v-row>
    </v-container>
</div>
</template>

<script>
export default {
    name: "Service",
    metaInfo() {
        return {
            title: "Сервисы DAGNA.KZ",
            meta: [
                { charset: 'utf-8' },
                { name: 'description', content:  'Сервисы для работы с текстами онлайн - DAGNA.KZ'},
                { property: 'og:title', content: "Сервисы DAGNA.KZ"},
                { property: 'og:site_name', content: 'dagna.kz'},
                {property: 'og:type', content: 'website'},
                {name: 'robots', content: 'index,follow'}
            ]
        }
    },
}
</script>

<style scoped>

.step_work{
    margin: 15px;
    height: 200px;
    border-radius: 6px;
    position: relative;
    border: 1px solid #8c8f92;
    /*margin: 0 auto;*/
    cursor: pointer;
    max-width: 300px;
}

.center{
    text-align: center;
}
.im-d-cont{
    margin-top: 15px;
}
.title-d-cont/deep/{
    color: #5f6162;
    font-size: 1.2rem;
    margin: 10px 0px;
}
.body-d-cont{
    font-size: 16px;
    font-family: system-ui;
    font-weight: 400;
    margin: 15px 0px;
}
.al{
    text-decoration: none;
    color: var(--mainText);
}
.num-d-cont{
    position: absolute;
    left: 0;
    right: 105px;
    bottom: -20px;
    font-size: 5rem;
    font-family: 'fastweb';
    color: var(--mainColor);
    opacity: 0.1;
}
@media only screen and (max-width: 920px){
    .step_work {
        margin: 0 auto!important;
    }
}
/*@media only screen and (max-width:307px) {*/
/*    .title-d-cont {*/
/*        font-size: 1rem;*/
/*    }*/
/*}*/
/*@media only screen and (min-width:308px) and (max-width: 404px){*/
/*    .title-d-cont {*/
/*        font-size: 1rem;*/
/*    }*/
/*    .step_work {*/
/*        width: 130px;*/
/*        height: auto;*/
/*    }*/
/*}*/
/*@media only screen and (min-width: 577px) and (max-width: 720px){*/
/*    .step_work {*/
/*        width: 250px;*/
/*    }*/
/*}*/
/*@media only screen and (min-width:448px) and (max-width: 576px){*/

/*    .im-d-cont{*/
/*        border-radius: 100%;*/
/*        width: 80px;*/
/*        height: 80px;*/
/*        display: flex;*/
/*        justify-content: space-around;*/
/*        flex-wrap: nowrap;*/
/*        align-items: stretch;*/
/*        margin: 0 auto;*/
/*    }*/
/*    .step_work {*/
/*        width: 200px;*/
/*    }*/
/*    .title-d-cont{*/
/*        margin: 0;*/
/*    }*/
/*    .body-d-cont{*/
/*        margin: 0;*/
/*    }*/

/*}*/
</style>
