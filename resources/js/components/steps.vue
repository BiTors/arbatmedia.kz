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
                 <div class="pay-head col-md-6">
                         <img style="width: 8rem;" src="/img/ArbatBOOKS.png" alt="">
                     <v-btn
                         text
                         @click="close()">
                         <v-icon class="secondary--text">fa-times-circle</v-icon>
                     </v-btn>
                 </div>
             </v-card-title>
             <v-col class="_wr-back" md="6" offset-md="3">
             <v-col class="font-weight-bold text-center  text-uppercase" md="10" offset-md="1">
                 <div v-if="getSingle">Жеткізу және төлеу турін таңдаңыз.</div>
                 <div v-if="getStep">Форманы толтырыңыз.</div>
             </v-col>
             <v-col v-if="getStep"  class="form-b">
                     <v-text-field
                         v-model="formT.Name"
                         :counter="30"
                         append-icon="fa-user"
                         label="ТАӘ"
                         outlined
                         dense
                         color="blue"
                         required
                         >
                     </v-text-field>
                 <div class="input-group">
                     <v-text-field
                         append-icon="fa-phone"
                          v-model="formT.Phone"
                         label="Ұялы телефон"
                         required
                         outlined
                         dense
                         color="blue"
                         v-mask="'+7(###)-###-##-##'"
                     >
                     </v-text-field>
                 </div>

                     <v-text-field v-if="radios === 'Courier' "
                         v-model="adress"
                         type="text"
                         label="Жеткізу мекенжайы"
                         outlined
                         dense
                         color="blue"
                         required>
                     </v-text-field>
                 <v-text-field v-if="radios === 'ems'"
                               v-model="obl"
                               type="text"
                               label="Область"
                               outlined
                               dense
                               color="blue"
                               required>
                 </v-text-field>
                 <v-text-field v-if="radios === 'ems'"
                               v-model="city"
                               type="text"
                               label="Город"
                               outlined
                               dense
                               color="blue"
                               required>
                 </v-text-field>
                 <v-text-field v-if="radios === 'ems'"
                               v-model="zip"
                               type="text"
                               label="Почтовый индекс"
                               outlined
                               dense
                               color="blue"
                               required>
                 </v-text-field>
                 <v-text-field v-if="radios === 'ems'"
                               v-model="strit"
                               type="text"
                               label="Улица/Микрорайон"
                               outlined
                               dense
                               color="blue"
                               required>
                 </v-text-field>
                 <v-text-field v-if="radios === 'ems'"
                               v-model="home"
                               type="text"
                               label="Дом"
                               outlined
                               dense
                               color="blue"
                               required>
                 </v-text-field>
                 <v-text-field v-if="radios === 'ems'"
                               v-model="aps"
                               type="text"
                               label="Квартира/офис"
                               outlined
                               dense
                               color="blue"
                               required>
                 </v-text-field>
             </v-col>
                 <v-col class="form-b" v-if="getStep">
                    <div>Ақысы: <span style="font-weight: bold">{{getInfo.WMI_PAYMENT_AMOUNT}} теңге</span></div>
                     <div>Тапсырыс нөмірі: <span style="font-weight: bold">{{getInfo.WMI_PAYMENT_NO}}</span></div>
                     <div v-if="radios ==='Pickup'"><v-icon>mdi-gift-outline</v-icon> <span style="font-weight: bold"> Кофе сыйлыққа беріледі!</span></div>
                     <div v-else> <v-icon>mdi-truck-delivery-outline</v-icon><span style="font-weight: bold"> Жеткізу тегін!</span></div>
                 </v-col>

             <v-col v-if="getSingle" class="text-subtitle-2" md="10" offset-md="1">
                 <v-radio-group v-model="radios">
                     <template v-slot:label>
                         <div class="s-t"> <strong> <v-icon>mdi-truck-delivery-outline</v-icon> Жеткізу</strong></div>
                     </template>
                     <v-radio color="blue-grey" value="Pickup">
                         <template v-slot:label>
                             <div>Өздігінен алып кету(г.Алматы)<strong class="green--text"> кофе сыйлыққа!</strong></div>
                         </template>
                     </v-radio>
                     <v-radio color="blue-grey" value="Courier">
                         <template v-slot:label>
                             <div>Курьер арқылы(г.Алматы) <strong class="green--text"> Тегін</strong></div>
                         </template>
                     </v-radio>
                     <v-radio color="blue-grey" value="ems">
                         <template v-slot:label>
                             <div>EMS(РК)</div>
                         </template>
                     </v-radio>
                 </v-radio-group>
             </v-col>
            <v-col v-if="radios === 'Pickup' && getSingle" class="text-subtitle-2" md="10" offset-md="1">
                <v-alert
                    color="blue-grey"
                    dark
                    dense
                    icon="mdi-map-marker-radius-outline"
                    prominent
                >
                    <strong>Өздігінен алып кету пункті (нүктесі):</strong> Алматы қ. Кашгарская 69 көшесі<br>
                    Жұмыс күндері 9.00-ден 18.00 дейін
                </v-alert>
                    <v-radio-group v-model="pay">
                        <template v-slot:label>
                            <div class="s-t"> <strong> <v-icon>mdi-credit-card-scan-outline</v-icon> Төлем</strong></div>
                        </template>
                        <v-radio color="blue-grey" value="online">
                            <template v-slot:label>
                                <div>Сайтта онлайн</div>
                            </template>
                        </v-radio>
                        <v-radio color="blue-grey" value="cach">
                            <template v-slot:label>
                                <div>Наличными при получении</div>
                            </template>
                        </v-radio>
                    </v-radio-group>
            </v-col>
            <v-col v-if="radios === 'Courier' && getSingle" class="text-subtitle-2" md="10" offset-md="1">
                <v-alert
                    color="blue-grey"
                    dark
                    dense
                    icon="mdi-map-marker-distance"
                    prominent
                >
                    Алматы қаласының ішінде жеткізу тегін<br>
                    Жұмыс күндері сағат 9- 18:00 дейін
                </v-alert>
                    <v-radio-group v-model="pay">
                        <template v-slot:label>
                            <div class="s-t"> <strong> <v-icon>mdi-credit-card-scan-outline</v-icon> Төлем</strong></div>
                        </template>
                        <v-radio color="blue-grey" value="online">
                            <template v-slot:label>
                                <div>Сайтта онлайн</div>
                            </template>
                        </v-radio>
                        <v-radio color="blue-grey" value="cach">
                            <template v-slot:label>
                                <div>Қолма-қол курьерге</div>
                            </template>
                        </v-radio>
                    </v-radio-group>
            </v-col>
                 <v-col v-if="radios === 'ems' && getSingle" class="text-subtitle-2" md="10" offset-md="1">
                     <v-alert
                         color="blue-grey"
                         dark
                         dense
                         icon="mdi-package-variant"
                         prominent
                     >
                         EMS пошта арқылы жеткізу
                     </v-alert>
                     <v-radio-group v-model="pay">
                         <template v-slot:label>
                             <div class="s-t"> <strong> <v-icon>mdi-credit-card-scan-outline</v-icon> Төлем</strong></div>
                         </template>
                         <v-radio color="blue-grey" value="online">
                             <template v-slot:label>
                                 <div>Сайтта онлайн</div>
                             </template>
                         </v-radio>
                     </v-radio-group>
                 </v-col>
                 <v-col v-if="getStep" class="form-b">

                 </v-col>
                 <div v-if="getSingle" class="_mrg-btn footer text-center">
                     <v-btn :disabled="isDisable || getLoad"
                            color="primary"
                            :loading="getLoad"
                            @click="sendForm()"
                     >
                         {{btn}}
                     </v-btn>
                 </div>

                 <div v-if="getStep" class="_mrg-btn footer text-center">
                     <div class="b-step">
                         <v-btn type="submit"
                                class="pad"
                                color="gray"
                                @click="back"
                         >
                             <v-icon dark>
                                 mdi-arrow-left
                             </v-icon>
                         </v-btn>
                         <form v-if="pay === 'online'" action='https://wl.walletone.com/checkout/checkout/Index' ref="form" method='POST'>
                             <div v-for="(info,index) in getInfo">
                                 <input  type='hidden' :name='index' :value='info'/>
                             </div>
                             <v-btn @click="PayOnline(1)"
                                    :disabled="isd"
                                    class="pad"
                                    color="primary"
                             >
                                 {{ endStep }}
                             </v-btn>
                         </form>
                         <v-btn v-if="pay === 'cach'"
                                :disabled="isd || getLoad"
                                @click="sendPay(2)"
                                :loading="getLoad"
                                class="pad"
                                color="primary"
                         >
                             {{ endStep }}
                         </v-btn>
                     </div>
                 </div>
             </v-col>
         </v-card>
     </v-dialog>
 </div>
</template>

<script>

import {mapActions, mapGetters} from "vuex";
export default {
    name: "steps",
    data () {
        return {
            btn:'Оформить',
            dc:'+7(',
            end:'',
            fio:'',
            adress:'',
            deliv:'',
            obl:'',
            strit:'',
            home:'',
            aps:'',
            zip:'',
            city:'',
            pay:'',
            getOptions:'',
            radios:'',
            msg:'',
            subSelect:'',
            formT: {
                Name: '',
                NameRules: [Name => Name.length <= 30 || 'Макс 30 символов'],
                Phone: '+7(',

            },
            b2b_active:[],
        }
    },
    beforeUpdate() {

    },
    computed: {
        ...mapGetters({
            getSingle:'getSingle',
            getDialog:'getDialog',
            getStep:'getStep',
            getInfo:'getInfo',
            getLoad:'getLoad',
        }),

        isd(){
            if(this.radios === "Pickup" && this.formT.Phone.length === 17 && this.formT.Name.length >= 3){
                return false
            }
            if(this.radios === "Courier" && this.formT.Phone.length === 17 && this.formT.Name.length >= 3 && this.adress.length >= 5 ){
                return false
            }
            if(this.radios === "ems" && this.formT.Phone.length === 17 && this.formT.Name.length >= 3 && this.obl.length >= 5 &&  this.strit.length >= 5 &&  this.home.length >= 1 && this.zip.length >= 3 && this.city.length >= 2 ){
                return false
            }
            return true
        },
        isDisable() {
            if(this.pay === ""){
                return true
            }
            if(this.pay === 'online'){
                this.btn = 'әрі қарай'
            }else{
                this.btn = 'әрі қарай'
            }
            return false
        },
        endStep(){
            if(this.pay === 'online'){
                return 'Төлеуге'
            }else{
                return 'Тапсырыс беру'
            }
        },

    },
    methods:{
        ...mapActions({
            payBook:'payBook',
            PayСash:'PayСash',
            payBack:'payBack',
            actionClose:'actionClose',
            actionSingle:'actionSingle',
            actionPayOnline:'actionPayOnline',
            actionPayOnlineEms:'actionPayOnlineEms'
        }),
        async sendPay(){
            await this.PayСash({
                'phone':this.formT.Phone,
                'address':this.adress,
                'name':this.formT.Name,
                'delivery':this.radios,
                'pay':this.pay,
                'numPay':this.getInfo.WMI_PAYMENT_NO
            })
        },
        async PayOnline(){
            if(this.radios === 'ems'){
                await this.actionPayOnlineEms({
                    'phone':this.formT.Phone,
                    'name':this.formT.Name,
                    'delivery':this.radios,
                    'pay':this.pay,
                    'numPay':this.getInfo.WMI_PAYMENT_NO,
                    'obl': this.obl,
                    'strit':this.strit,
                    'home':this.home,
                    'zip':this.zip,
                    'city': this.city,
                    'aps':this.aps
                })
            }else{
                await this.actionPayOnline({
                'phone':this.formT.Phone,
                'address':this.adress,
                'name':this.formT.Name,
                'delivery':this.radios,
                'pay':this.pay,
                'numPay':this.getInfo.WMI_PAYMENT_NO
                })
            }
                this.$refs.form.submit()
        },
        async  sendForm(){
            await this.payBook();
            //this.empty()
        },
        async close() {
            await  this.actionClose()
        },
        async back(){
            await this.payBack();
        },

    },
}
</script>

<style scoped>
.s-t{
    font-size: 1.2rem;
}
.pay-head{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
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
.b-step{
    display: flex;
    justify-content: center;
}
.pad{
    margin: 0px 5px;
}
</style>
