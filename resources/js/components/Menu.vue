<template>
<div>
    <div class="v-headers">
        <div class="header-panel ">
            <div class="logo">
                <router-link to="/">  <img class="img-logo" src="/img/logo-arbat.png" alt=""></router-link>
            </div>
            <nav class="nav-top-m">
                <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
                <v-navigation-drawer
                    v-model="drawer"
                    absolute
                >
                    <v-list
                        nav
                        dense
                    >
                        <v-list-item-group
                            v-model="group"
                            active-class="primary--text text--accent-4"
                            color="var(--mainColor)"
                        >
                            <a  v-scroll-to="'#author'" href="#">
                                <v-list-item>
                                    <v-list-item-title class="mm">АВТОР ТУРАЛЫ</v-list-item-title>
                                </v-list-item>
                            </a>

                            <a  v-scroll-to="'#book'" href="#">
                                <v-list-item>
                                    <v-list-item-title class="mm">КІТАП ТУРАЛЫ</v-list-item-title>
                                </v-list-item>
                            </a>
                            <a  v-scroll-to="'#pay'" href="#">
                                <v-list-item>
                                    <v-list-item-title class="mm">САТЫП АЛУ</v-list-item-title>
                                </v-list-item>
                            </a>

                        </v-list-item-group>
                    </v-list>
                </v-navigation-drawer>
            </nav>
            <div class="v-header">
                <nav class="nav-top">
                    <ul class="navbar-nav">
                        <li class="mm active"><router-link to="#"  v-scroll-to="'#author'">АВТОР ТУРАЛЫ</router-link></li>
                        <li class="mm"><router-link to="#"  v-scroll-to="'#book'">КІТАП ТУРАЛЫ</router-link></li>
                        <li class="mm"><router-link to="#"  v-scroll-to="'#pay'">САТЫП АЛУ</router-link></li>
                    </ul>
                </nav>
            </div>
            <div class="v-info">
                <div class="soc">
                    <v-card-text>
                        <v-btn
                            v-for="icon in icons"
                            :key="icon"
                            class="socs mx-4 white--text"
                            icon
                        >
                            <v-icon >
                                {{ icon }}
                            </v-icon>
                        </v-btn>
                    </v-card-text>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "Menu",
    data() {
        return {
            drawer: false,
            group: null,
            icons: [
                'mdi-facebook',
                'mdi-instagram',
                'mdi-telegram',
            ],
        }
    },
    watch: {
        group () {
            this.drawer = false
        },
    },
}
</script>

<style scoped>
/*.v-info{
    width: 160px;
}*/
.soc{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: row;
  /*  width: 120px;*/
    float: right;
}
.soc>a{
    padding: 0px 5px;
}
.soc-im{
    max-width: 25px;
}
.socs {
    margin-right: 0px!important;
    margin-left: 0px!important;
}
@keyframes rotation {
    0% {
        transform:rotate(0deg);
    }
    100% {
        transform:rotate(360deg);
    }
}

.mm>a{
    color: #525254;
    margin: 0px 10px;
}
form{
    width: 90%;
}
._ml{
    display: none;
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
}
@media only screen and (max-width: 1030px){

}
@media only screen and (min-width: 768px) and (max-width: 992px) {
    .v-header {
        justify-content: flex-end;
        min-width: 150px;
        display: block;
    }
}
@media only screen and (min-width: 576px) and (max-width: 768px) {

}
@media only screen and (min-width: 390px) and (max-width: 576px) {

}
@media only screen and (min-width: 320px) and (max-width: 389px) {

}
@media only screen and (max-width: 620px) {
    .v-header{
        justify-content: flex-end;
        min-width: 90px;
    }
}
@media only screen and (max-width: 320px) {
    .v-header {
        justify-content: flex-end;
        min-width: 70px;
    }

    .v-headers {
        top: 10px;
    }

    .img-logo {
        width: 109px;
    }
}
@media only screen and (max-width: 260px) {
    .img-logo {
        width: 110px;
    }
}
@media only screen and (max-width: 920px) {
    .v-header {
        display: none;
    }
}
.nav-top-m>button{
    color:#fff!important;
}
</style>
