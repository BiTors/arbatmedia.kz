<template>
 <div>
     <v-dialog
         transition="dialog-bottom-transition"
         fullscreen
         light
         max-width="700"
         v-model="getDialog" >
         <v-card  class="pa-2 _back"  loading="true">
             <v-card-title class="text-caption  text-md-body-1 text-uppercase white--text">
                 <v-spacer></v-spacer>
                 <v-btn
                     text
                     @click="close()">
                     <v-icon class="secondary--text">fa-times-circle</v-icon>
                 </v-btn>
             </v-card-title>
             <v-col  class="font-weight-bold text-center  text-uppercase" md="6" offset-md="3">
                     <v-col class="_title">
                         <div v-if="getSingle">
                             ДЛЯ ЗАКАЗА УСЛУГ ИЛИ КОНСУЛЬТАЦИИ, ЗАПОЛНИТЕ ФОРМУ НИЖЕ.
                         </div>
                         <div v-else>
                             {{getTitle}}
                         </div>
                     </v-col>
             </v-col>
             <v-col class="_wr-back" md="6" offset-md="3">
             <v-col class="font-weight-bold text-center  text-uppercase" md="10" offset-md="1">
                 <div v-if="getSingle"></div>
                 <div v-else>Для расчета цены и заказа услуг, заполните форму ниже.</div>
             </v-col>
             <v-col class="form-b vf">
                 <v-text-field
                     v-model="formT.Name"
                     :counter="30"
                     append-icon="fa-user"
                     :rules="formT.NameRules"
                     label="Введите Ваше имя"
                     outlined
                     dense
                     color="blue"
                     required>
                 </v-text-field>
             </v-col>
             <v-col class=" text-subtitle-2 text-center  text-uppercase" md="10" offset-md="1">
                 Выберите удобный способ связи:
             </v-col>
             <v-col>
                 <v-sheet class="mx-auto" max-width="700">
                     <v-slide-group v-model="b2b_active"  multiple >
                         <v-slide-item
                             v-for="n in b2b"
                             :key="n"
                             v-slot="{ active, toggle }">
                             <v-btn
                                 class="mx-2  text-sm-justify"
                                 :input-value="active"
                                 active-class="blue--text"
                                 depressed
                                 outlined
                                 @click="toggle"
                             >
                                 {{ n }}
                             </v-btn>
                         </v-slide-item>
                     </v-slide-group>
                 </v-sheet>
             </v-col>
             <v-col dense class=" vf form-b" >
                 <v-text-field
                     v-if="form.tel"
                     v-model="formT.tel"
                     :rules="formT.telRules"
                     outlined
                     dense
                     color="blue"
                     append-icon="fa-phone"
                     label="Номер телефона"
                     required>
                 </v-text-field>
                 <v-text-field
                     v-if="form.wp"
                     v-model="formT.wp"
                     :rules="formT.wpRules"
                     outlined
                     dense
                     color="blue"
                     append-icon="fa-whatsapp"
                     label="Номер WhatsApp"
                     required>
                 </v-text-field>
                 <v-text-field
                     v-if="form.tg"
                     v-model="formT.tg"
                     append-icon="fa-telegram"
                     :rules="formT.tgRules"
                     outlined
                     dense
                     color="blue"
                     label="Номер/Логин Telegtma"
                     required>
                 </v-text-field>
                 <v-text-field
                     v-if="form.vk"
                     v-model="formT.vk"
                     :rules="formT.vkRules"
                     outlined
                     dense
                     color="blue"
                     append-icon="fa-vk"
                     label="id vk"
                     required>
                 </v-text-field>
                 <v-text-field
                     v-if="form.fb"
                     v-model="formT.fb"
                     append-icon="fa-facebook-square"
                     outlined
                     dense
                     color="blue"
                     :rules="formT.fbRules"
                     label="id fb"
                     required>
                 </v-text-field>
             </v-col>
             <v-col v-if="getOptions.a === false && getSingle === false" class=" text-subtitle-2 text-center  text-uppercase" md="10" offset-md="1">
                 <div v-if="getOptions.b === 0 && getSingle === false">Выберите вид консультации, которую вы хотите получить от Газизы Габи:</div>
                 <div v-if="getOptions.b === 1 && getSingle === false">Выберите вид продающего текста, который вам нужен:</div>
                 <div v-if="getOptions.b === 2 && getSingle === false">Верите языковую пару для перевода: Переводы с русского на казахский:</div>
                 <v-col  dense class=" vf form-b">
                     <v-select v-if="getOptions.b === 1 && getSingle === false"
                         :items="service['options_one']"
                         v-model="subSelect"
                         label="Выберете услугу"
                         outlined
                         dense
                         color="blue"
                         required
                     ></v-select>
                     <v-select v-if="getOptions.b === 0 && getSingle === false"
                               :items="service['options_two']"
                               v-model="subSelect"
                               label="Выберете услугу"
                               outlined
                               dense
                               color="blue"
                               required
                     ></v-select>
                     <v-select v-if="getOptions.b === 2 && getSingle === false"
                               :items="service['options_free']"
                               v-model="subSelect"
                               label="Выберете услугу"
                               outlined
                               dense
                               color="blue"
                               required
                     ></v-select>
                 </v-col>
             </v-col>
             <v-col class=" text-subtitle-2 text-center  text-uppercase" md="10" offset-md="1">
                 <div v-if="getSingle">Ваше сообщение:</div>
                 <div v-else>Комментарий к заказу:</div>
             <v-col  dense class=" vf form-b">
                 <v-textarea v-if="getSingle === true"
                     outlined
                     color="blue"
                     v-model="msg"
                     name="input-7-4"
                     label="Ваше сообщение"
                 ></v-textarea>
                 <v-textarea v-if="getSingle === false"
                             outlined
                             color="blue"
                             v-model="msg"
                             name="input-7-4"
                             label="Комментарий к заказу"
                 ></v-textarea>
             </v-col>
             </v-col>
             </v-col>
             <div class="_mrg-btn footer text-center">
                 <v-btn :loading="getLoad" :disabled="isDisable"
                        color="primary"
                        @click="sendForm()"
                 >
                     Отправить
                 </v-btn>
             </div>
         </v-card>
     </v-dialog>
     <v-snackbar
         v-model="gSnackbar"
     >
         {{ getText }}

         <template color="green"  v-slot:action="{ attrs }">
             <v-btn
                 color="pink"
                 text
                 v-bind="attrs"
                 @click="Snackbars()"
             >
                 Закрыть
             </v-btn>
         </template>
     </v-snackbar>
 </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
export default {
    name: "steps",
    data () {
        return {
            msg:'',
            subSelect:'',
            formT: {
                tel: '',
                telRules: [],
                wp: '',
                wpRules: [],
                tg: '',
                tgRules: [],
                vk: '',
                vkRules: [],
                fb: '',
                fbRules: [],
                Name: '',
                NameRules: [Name => Name.length <= 30 || 'Макс 30 символов'],
            },
            b2b:['Телефон','WhatsApp','Telegram','VK','FB'],
            service: {
                options_one:[
                    'Текст для сайта',
                    'Коммерческое предложение',
                    'Тексты для социальных сетей',
                    'Легенда бренда (история компании)',
                    'Ведение тематического блога (SEO-оптимизированные статьи) ',
                    'Другое (напишите в графе комментарий к заказу) '],
                options_two:[
                    'Консультация по написанию книги',
                    'Консультации по бренд-стратегии для социальных сетей'],
                options_free:[
                    'Переводы с казахского на русский',
                    'Переводы с русского на английский',
                    'Переводы с английского на русский'],
    },
            b2b_active:[],
            form:{
                tel:false,
                wp:false,
                tg:false,
                vk:false,
                fb:false
            },
            total:'',
        }
    },
    beforeUpdate() {
        this.total = this.getBase.a
        this.form.tel = this.b2b_active.includes(0);
        this.form.wp = this.b2b_active.includes(1);
        this.form.tg = this.b2b_active.includes(2);
        this.form.vk = this.b2b_active.includes(3);
        this.form.fb = this.b2b_active.includes(4);

    },
    computed: {
        ...mapGetters({getSingle:'getSingle',getLoad:'getLoad',gSnackbar:'gSnackbar',getDialog:'getDialog',getBase:'getBase',getMsg:'getMsg',getOptions:'getOptions',getTitle:'getTitle',getText:'getText'}),
        isDisable() {
            this.msg = this.getMsg
       if(this.formT.Name.length > 0 && this.formT.Name.length <= 30){
           if(this.formT.fb.length > 3 || this.formT.vk.length > 3 || this.formT.tg.length > 3 || this.formT.wp.length > 10 || this.formT.tel.length > 10){
                 return false
            }
         }
       return true
       },
    },
    methods:{
        ...mapActions({actionClose:'actionClose',sendFormBot:'sendFormBot',aSnackbar:'aSnackbar'}),
        Snackbars(){
            this.aSnackbar();
        },
        async  sendForm(){
            await this.sendFormBot({message:this.msg,name:this.formT,ser:this.getBase.b,subDer:this.subSelect});
        },
        close() {
                this.formT.tel = ''
                this.formT.wp = ''
                this.formT.tg = ''
                this.formT.vk = ''
                this.formT.fb = ''
                this.formT.Name = ''
                this.subSelect=''
                this.actionClose()
        }
    },
}
</script>

<style scoped>
._title {
    text-align: center;
    font-size: 1.2rem;
    font-family: 'SegoeUI';
    background: #366bff;
    color: #faf8f8;
    border-radius: 6px;
    margin: 15px 0px;
}
.base{
    padding: 8px;
    background: #fe554e;
    border-radius: 5px;
    color: #fff;
}
theme--light.v-card {
    background: #f0f2f5!important;
}
</style>
