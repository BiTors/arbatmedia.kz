<template>
        <v-main>
            <v-container class="p_five rb" >
                <div class="dt">
                    <h2 class="ctr">Кітап – самғай бастағандарға емес,  шарықтау кезінде шаршағандар үшін.</h2>
                    <h2  class="ctr">Кәсібін – өзі деп көруші адамдар үшін</h2>
                </div>
                <div class="item-body">
                    <div class="item-block-info">
                        <div class="item-flex">
                            <div>
                                <img style="max-width: 60px;" src="/img/thunder-img.png" alt="tok">
                            </div>
                            <div class="item-block-info">
                                <div class="ti">
                                    Бейімділік
                                </div>
                                <div class="ti-body">
                                    Кәсіптегі алғашқы қадамын бұрын жасаған, сондай-ақ енді ғана жасай бастаған адамдар үшін powerbank-кітап
                                </div>
                            </div>
                        </div>
                        <div class="item-flex">
                            <div>
                                <img style="max-width: 60px;" src="/img/thunder-img.png" alt="tok">
                            </div>
                            <div class="item-block-info">
                                <div class="ti">
                                    Энергиямен қуаттану
                                </div>
                                <div class="ti-body">
                                    Өз өмірін өздігінен сүруді таңдағандар үшін қуат күші
                                </div>
                            </div>
                        </div>
                        <div class="item-flex">
                            <div>
                                <img style="max-width: 60px;" src="/img/thunder-img.png" alt="tok">
                            </div>
                            <div class="item-block-info">
                                <div class="ti">
                                    Өмірлік тәжірибе
                                </div>
                                <div class="ti-body">
                                    Сәтті тәжірибелер мен автордың жетістікке жетуіне септігін тигізген мағыналар жиынтығы.
                                </div>
                            </div>
                        </div>
                        <div class="item-flex">
                            <div>
                                <img style="max-width: 60px;" src="/img/thunder-img.png" alt="tok">
                            </div>
                            <div class="item-block-info">
                                <div class="ti">
                                    Жауынгерлік даярлық
                                </div>
                                <div class="ti-body">
                                    Сергіп, жаңа жауынгерлік даярлыққа қайту үшін жылдам әрі қысқа разряд.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="item-img">
                        <img src="img/lost.png" alt="Игорь Рыбаков">
                    </div>
                </div>
            </v-container>
        </v-main>
</template>

<script>

export default {
    name: "portfolio",
    data() {
        return {
            po:{
            },
        }
    },
    components: {

    },
    computed:{

    },
    methods:{

    },
}
</script>

<style scoped>
.rb::before {
    content: "";
    display: block;
    width: 1000px;
    height: 100%;
    background: #FFF;
    position: absolute;
    top: 0px;
    left: 99.9%;
}
.rb::after {
    content: "";
    display: block;
    width: 1000px;
    height: 100%;
    background: #FFF;
    position: absolute;
    top: 0px;
    right: 99.9%;
}
.item-img>img{
    max-width: 320px;
    top: 19px;
    position: relative;
}
.item-flex{
    display: flex;
    max-width: 450px;
    align-items: center;
    margin: 10px 0px;
}
.item-block-info{
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.ti{
    text-transform: uppercase;
    font-weight: bolder;
    color: #585858;
}

.item-body{
    display: flex;
    justify-content: space-around;
}
._cc>.v-btn{
    width: 100%!important;
    padding: 0!important;
    border-radius: 0!important;
}

.p_five{
    background: #fff;
    position: relative;
}
.chips-img>img{
    width: 25px;
    padding: 5px;
}
h2 {
    color: #585858;
}

@media only screen and (max-width: 600px) {


    .item-img>img {
        max-width: 283px;
        top: 1px;
        position: relative;
        left: 172px;
        opacity: 0.5;
    }
    .item-img {
        position: absolute;
        z-index: 0;
    }
    .p_five{
        overflow: hidden;
    }
}
@media only screen and (max-width: 1024px) {
    .p_five{
        overflow: hidden;
    }
    .item-body{
        width: 80%;
        margin: 0 auto;
    }
    .dt{
        width: 80%;
        margin: 0 auto;
    }
    .item-img>img {
        max-width: 283px;
        top: 1px;
        position: relative;
        left: 172px;
        opacity: 0.5;
    }
    .item-img {
        position: absolute;
        z-index: 0;
    }
}
@media only screen and (max-width: 280px) {
    .p_five{
        overflow: hidden;
    }
    .item-body{
        width: 100%;
        margin: 0 auto;
    }
    .dt{
        width: 100%;
        margin: 0 auto;
    }
    .item-img>img {
        max-width: 283px;
        top: 1px;
        position: relative;
        left: 104px;
        opacity: 0.5;
    }
    .item-img {
        position: absolute;
        z-index: 0;
    }
}@media only screen and (max-width: 320px) {
    .item-body{
        width: 100%;
        margin: 0 auto;
    }
}
</style>
