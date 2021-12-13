<template>
<div>
    <v-content>
        <SectionOne id="pay"/>
    <v-container>
            <div class="info-pay" >
                <div>
                    <div class="dt" id="four">
                        <div class="thu-im">
                            <img src="/img/tok.png" alt="thunder">
                        </div>
                    </div>
                </div>
                <div class="_a12" sm="12">
                    <div class="author">
                        Игорь Рыбаковтың кітабы
                    </div>
                    <div class="item-pay">
                        <div class="item-pay-title">
                            «ТОК»
                        </div>
                        <div class="item-pay-body">
                            Кітаптың қағаз нұсқасын
                            сатып алу
                        </div>
                        <div class="item-pay-info">
                            <div class="item-pay-info-price">
                                5000 ₸
                            </div>
                            <div id="pay" class="item-pay-info-action">
                              <v-btn
                                  rounded
                                  color="primary"
                                  dark
                              >
                                  Сатып алу
                              </v-btn>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="item-tok">
                <div id="rec114502490" class="tok-wrap sbs-anim-keyframes">
                    <div class="fs">
                        <div class="tok alb">
                            <img style="width: 391px; transform: scale(-1, 1)" src="/img/thunder.png" alt="thunder">
                        </div>

                    </div>
                </div>
            </div>
    </v-container>
    </v-content>
</div>
</template>

<script>
export default {
    name: "partner"
}
</script>

<style scoped>
.info-pay{
    display: flex;
    justify-content: center;
    color: #fff;
    position: relative;
    align-items: center;
    z-index: 9;
}
.item-pay-info{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.item-pay-title{
    font-size: 2rem;
    font-weight: 800;
}
.thu-im>img{
    max-width: 288px;
    border: 4px solid #fff;
    margin: 0px 15px;
}
._a12{
    margin: 0px 15px;
}
.author{
    position: absolute;
    top: 6px;
    text-transform: uppercase;
    color: #6B6969;
    font-weight: 700;
}

@media only screen and (max-width: 600px) {
    .info-pay{
        flex-direction: column;
        margin: 50px 0px;
    }
    .author{
        position: initial;
    }
    .item-pay-info{
        margin: 15px 0px;
    }
}
@media only screen and (max-width: 280px) {
    .thu-im>img {
        max-width: 100%;
        border: 4px solid #fff;
        margin: 0;
    }
}

.alb{
    transform: rotate(
        52deg);
    position: absolute;
    bottom: 2px;
    right: -12px;
}
</style>
