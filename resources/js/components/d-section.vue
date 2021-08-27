<template>
    <div>
        <v-row class="mb-3">
            <v-col>
                    <div v-on:click="send(edit,'Обратная связь',true,9)" :loading="active" class="step_work center">
                        <div class="im-d-cont b-ic">
                            <img src="/img/1.svg"  alt="Редактирование" class="im-d">
                        </div>
                        <div class="title-d-cont">
                            Редактирование
                        </div>
                        <div class="body-d-cont">

                        </div>
                        <div color="" class=" num-d-cont">
                            01
                        </div>
                    </div>
            </v-col>
            <v-col>
                <div  v-on:click="send(edit_a,'Корректура',true,9)" :loading="active" class="step_work center">
                    <div class="im-d-cont b-ic">
                        <img src="/img/proof.svg"  alt="Корректура" class="im-d">
                    </div>
                    <div class="title-d-cont">
                        Корректура
                    </div>
                    <div class="body-d-cont">

                    </div>
                    <div class="num-d-cont">
                        02
                    </div>
                </div>
            </v-col>
            <v-col>
                <div v-on:click="send(edit_b,'Транскрибация',true,9)" :loading="active" class="step_work center">
                    <div class="im-d-cont b-ic">
                        <img src="/img/trans.svg"  alt="Транскрибация" class="im-d">
                    </div>
                    <div class="title-d-cont">
                        Транскрибация
                    </div>
                    <div class="body-d-cont">

                    </div>
                    <div class="num-d-cont">
                        03
                    </div>
                </div>
            </v-col>
            <v-col>
                <div v-on:click="send(edit_c,'Копирайтинг',false,1)" :loading="active" class="step_work center">
                    <div class="im-d-cont b-ic">
                        <img src="/img/copy.svg"  alt="Копирайтинг" class="im-d">
                    </div>
                    <div class="title-d-cont">
                        Копирайтинг
                    </div>
                    <div class="body-d-cont">

                    </div>
                    <div class="num-d-cont">
                        04
                    </div>
                </div>
            </v-col>
        </v-row>
        <v-row class="mb-3">
            <v-col>
                <div v-on:click="send(edit_e,' Консалтинг',false,0)" class="step_work center">
                    <div class="im-d-cont b-ic">
                        <img src="/img/consultation.svg"  alt="Консультации" class="im-d">
                    </div>
                    <div class="title-d-cont">
                      Консалтинг
                    </div>
                    <div class="body-d-cont">

                    </div>
                    <div color="" class=" num-d-cont">
                        05
                    </div>
                </div>
            </v-col>
            <v-col>
                <div class="step_work center">
                    <div class="im-d-cont b-ic">
                        <img src="/img/Training.svg"  alt="Обучение" class="im-d">
                    </div>
                    <div class="title-d-cont">
                        Обучение
                    </div>
                    <div class="body-d-cont">

                    </div>
                    <div class="num-d-cont">
                        06
                    </div>
                </div>
            </v-col>
            <v-col>
                <div v-on:click="send(edit_f,'Переводы',false,2)" :loading="active" class="step_work center">
                    <div class="im-d-cont b-ic">
                        <img src="/img/translate.svg"  alt="Переводы" class="im-d">
                    </div>
                    <div class="title-d-cont">
                        Переводы
                    </div>
                    <div class="body-d-cont">

                    </div>
                    <div class="num-d-cont">
                        07
                    </div>
                </div>
            </v-col>
            <v-col>
                <div v-on:click="send(edit_d,'Пиар-статьи',true,9)" class="step_work center">
                    <div class="im-d-cont b-ic">
                        <img src="/img/pr.svg"  alt="Пиар-статьи" class="im-d">
                    </div>
                    <div class="title-d-cont">
                        Пиар-статьи
                    </div>
                    <div class="body-d-cont">

                    </div>
                    <div class="num-d-cont">
                        08
                    </div>
                </div>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import {KinesisContainer, KinesisElement} from "vue-kinesis";
export default {
    name: "d-section",
    components:{
        KinesisContainer, KinesisElement
    },
    data() {
        return{
            active:false,
            edit:'Услуги профессиональных редакторов  по редактированию текстов любой сложности, книг, рукописей, статей и других материалов.',
            edit_a:'Услуги профессиональных корректоров  по проверке текста на опечатки, орфографические и пунктуационные ошибки',
            edit_b:'Услуги по расшифровке аудио-, видеоматериалов в текст',
            edit_c:'Услуги по написанию продающего текста для бизнеса',
            edit_d:'Услуги по написанию и продвижению репутационных статей в СМИ',
            edit_e:'Консалтинговые услуги по написанию текстов',
            edit_f:'Переводческие услуги русский-казахский-английский',

        }
    },
    computed: {
        ...mapGetters({getDialog:'getDialog',}),
    },
    methods:{
        ...mapActions({actionFormService:'actionFormService'}),
        send(body,type,bool,options){
            this.actionFormService({'name':'УСЛУГА','type':type,'title':body,'bool':bool,'options':options})
        }
    },
}
</script>

<style scoped>
.d-section{
    margin: 0px 15px;
}
.d-section-in{
    max-width: 1390px;
    margin: 0 auto;
    border-radius: 8px;
    min-height: 437px;
}

.step_work{
    margin: 15px;
    height: 137px;
    border-radius: 6px;
    position: relative;
    border: 1px solid #8c8f92;
    margin: 0 auto;
    cursor: pointer;
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
.m-work{
    display: none;
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
@media only screen and (min-width:404px) and (max-width: 447px){
    .title-d-cont {
        font-size: 1rem;
    }
    .step_work {
        width: 178px;
    }
}
@media only screen and (max-width:307px){
    .title-d-cont {
        font-size: 1rem;
    }
    .row {
        flex-direction: column;
    }
}
@media only screen and (min-width:308px) and (max-width: 404px){
    .title-d-cont {
        font-size: 1rem;
    }
    .step_work {
        width: 130px;
        height: auto;
    }
}
@media only screen and (min-width: 577px) and (max-width: 720px){
    .step_work {
        width: 250px;
    }
}
@media only screen and (min-width:448px) and (max-width: 576px){
    .work{
        display: none;
    }
    .m-work{
        display: block;
    }
    .kos{
        display: flex;
        align-items: center;
        margin: 15px 0px;
        position: relative;
        border-radius: 8px;
        background: #dbeaf2;
        padding: 15px 0px;
    }
    .im-d-cont{
        border-radius: 100%;
        width: 80px;
        height: 80px;
        display: flex;
        justify-content: space-around;
        flex-wrap: nowrap;
        align-items: stretch;
        margin: 0 auto;
    }
    .step_work {
        width: 200px;
    }
    .t-c{
        margin: 0px 10px;
        position: relative;
    }
    .title-d-cont{
        margin: 0;
    }
    .body-d-cont{
        margin: 0;
    }

}
</style>
