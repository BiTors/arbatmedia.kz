<template>
        <v-footer class="black"

        >
            <v-col
                class="text-center"
                cols="12"
            >
                <v-col
                    class="text-center"
                    cols="12"
                >
                    <div class="v-header">
                        <nav class="nav-top">
                            <ul class="navbar-nav">
                                <li class="mm active"><router-link to="#"  v-scroll-to="'#author'">АВТОР ТУРАЛЫ</router-link></li>
                                <li class="mm"><router-link to="#"  v-scroll-to="'#book'">КІТАП ТУРАЛЫ</router-link></li>
                                <li class="mm"><router-link to="#"  v-scroll-to="'#pay'">САТЫП АЛУ</router-link></li>
                            </ul>
                        </nav>
                    </div>
                </v-col>
                <div class="item-f-w">
                    <div>
                        <div class="item-f-img">
                            <img src="/img/logo-arbat.png" alt="">
                        </div>
                    </div>
                    <div>
                        <div class="item-f-c">
                            <div>
                                info@arbatbooks.kz
                            </div>
                            <div>
                                <v-card-text>
                                    <v-btn
                                        v-for="icon in icons"
                                        :key="icon"
                                        class="soc mx-4 white--text"
                                        icon
                                    >
                                        <v-icon size="24px">
                                            {{ icon }}
                                        </v-icon>
                                    </v-btn>
                                </v-card-text>
                            </div>
                        </div>
                    </div>
                </div>
                <strong  class="white--text">{{ new Date().getFullYear() }} — ©arbatmedia.kz</strong>
            </v-col>
        </v-footer>
</template>

<script>
export default {
name: "footer-c",
    data(){
        return{
            icons: [
                'mdi-facebook',
                'mdi-instagram',
                'mdi-telegram',
            ],
            absolute:true,
        }
    }
}
</script>

<style scoped>
.v-application a {
    color: #525254;
}
.soc {
     margin-right: 0px!important;
    margin-left: 0px!important;
}
.mm>a {
     color: #525254;
     margin: 0px 10px;
 }
.item-f-img>img{
    height: 46px;
}
.item-f-img{
    margin: 0px 15px;
}
.item-f-w{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}
.item-f-c{
    display: flex;
    color: #fff;
    align-items: center;
    margin: 0px 15px;
}
</style>
