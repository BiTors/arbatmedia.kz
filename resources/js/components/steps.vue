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
                             Оформление заказа онлайн
                         </div>
                     </v-col>
             </v-col>
             <v-col class="_wr-back" md="6" offset-md="3">
             <v-col class="font-weight-bold text-center  text-uppercase" md="10" offset-md="1">
                 <div v-if="getSingle">Для заказа заполните форму.</div>
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

                     <v-text-field
                         v-model="formT.Phone"
                         type="number"
                         append-icon="fa-phone"
                         :rules="formT.PhoneRules"
                         label="Номер телефона"
                         outlined
                         dense
                         color="blue"
                         required>
                     </v-text-field>
             </v-col>

             <v-col class=" text-subtitle-2" md="10" offset-md="1">
                 <v-radio-group v-model="radios">
                     <template v-slot:label>
                         <div> <strong>Доставка:</strong></div>
                     </template>
                     <v-radio  value="Pickup">
                         <template v-slot:label>
                             <div>Самовывоз(г.Алматы)<strong class="green--text"> Кофе в подарок!</strong></div>
                         </template>
                     </v-radio>
                     <v-radio value="Courier">
                         <template v-slot:label>
                             <div>Курьером(г.Алматы) <strong class="green--text"> Бесплатно</strong></div>
                         </template>
                     </v-radio>
                 </v-radio-group>
             </v-col>
            <v-col v-if="radios === 'Pickup'">
                <strong>Пункт самовывоза:</strong> г.Алматы ул.Кашгарская 69<br>
                <strong>В буднии дни</strong> с 9.00 до 18.00
                <v-col class="form-b vf">
                    <v-radio-group v-model="pay">
                        <template v-slot:label>
                            <div> <strong>Оплата:</strong></div>
                        </template>
                        <v-radio  value="online">
                            <template v-slot:label>
                                <div>Онлайн на сайте</div>
                            </template>
                        </v-radio>
                        <v-radio value="cach">
                            <template v-slot:label>
                                <div>Наличными при получении</div>
                            </template>
                        </v-radio>
                    </v-radio-group>
                </v-col>
            </v-col>
            <v-col v-if="radios === 'Courier'">
                Доставка в пределах г.Алматы,бесплатно<br>
               В буднии дни с 9.00 до 18.00
                <v-col class="form-b vf">
                    <v-radio-group v-model="pay">
                        <template v-slot:label>
                            <div> <strong>Оплата:</strong></div>
                        </template>
                        <v-radio  value="online">
                            <template v-slot:label>
                                <div>Онлайн на сайте</div>
                            </template>
                        </v-radio>
                        <v-radio value="cach">
                            <template v-slot:label>
                                <div>Наличными курьеру</div>
                            </template>
                        </v-radio>
                    </v-radio-group>
                </v-col>
            </v-col>
             </v-col>
             <div class="_mrg-btn footer text-center">
                 <v-btn :loading="false" :disabled="isDisable"
                        color="primary"
                        @click="sendForm()"
                 >
                     {{btn}}
                 </v-btn>
             </div>
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
            deliv:'',
            pay:'',
            getOptions:'',
            radios:'',
            msg:'',
            subSelect:'',
            formT: {
                Name: '',
                NameRules: [Name => Name.length <= 30 || 'Макс 30 символов'],
                Phone: '',
                PhoneRules: [Name => Name.length <= 12 || 'Ошибка'],
            },
            b2b_active:[],
        }
    },
    beforeUpdate() {
        /*this.total = this.getBase.a*/
    },
    computed: {
        ...mapGetters({getSingle:'getSingle',getDialog:'getDialog'}),
        isDisable() {
            if(this.pay === ""){
                return true
            }
            if(this.pay === 'online'){
                this.btn = 'Оплатить'
            }else{
                this.btn = 'Оформить'
            }
            return false
        },
    },
    methods:{
        ...mapActions({payBook:'payBook'}),

        async  sendForm(){
            await this.payBook();
            this.empty()
        },
        close() {
                this.empty()
                this.actionClose()
        },
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
