<template>
    <div>
        <v-lazy id="p_five">
            <v-container class="p_five" >
                <div class="dt">
                    <h2>Кітап – самғай бастағандарға емес,  шарықтау кезінде шаршағандар үшін.</h2>
                    <h2>Кәсібін – өзі деп көруші адамдар үшін</h2>
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
                                    Бейімділік
                                </div>
                                <div class="ti-body">
                                    Кәсіптегі алғашқы қадамын бұрын жасаған, сондай-ақ енді ғана жасай бастаған адамдар үшін powerbank-кітап
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="item-img">
                        <img src="img/lost.png" alt="Игорь Рыбаков">
                    </div>
                </div>
            </v-container>
        </v-lazy>
    </div>
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
.item-img>img{
    max-width: 320px;
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
    font-weight: 900;
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
}
.chips-img>img{
    width: 25px;
    padding: 5px;
}
h2 {
    color: #585858;
}
</style>
