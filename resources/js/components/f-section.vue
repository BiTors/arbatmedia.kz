<template>
    <div>

        <v-container style="margin-top: 120px;" id="one">
        <v-row  class="mb-3 _med">
            <v-col mb="4" xl="4" lg="4">
                <div class="ry">
                    <img src="/img/rybakov.jpg" alt="Игорь Рыбаков">
                </div>
            </v-col>
            <v-col class="item-info-b2" mb="6"
                   xl="6"
                   lg="6">
                <h2 class="ctr"> Игорь Рыбаков <br> 47 жас</h2>
                <div class="cot-a">
                    <p>“Кәсіпкердің рөлі – әлемнің дамуына және одан әрі көркеюіне
                    жеткіліксіз нәрсені қосу. Мен өз борышымды осы деп білемін!„©</p>

                    <p> Игорь Рыбаков - ресейлік кәсіпкер, венчурлік инвестор, филантроп,
                    Forbes журналының нұсқасы бойынша Ресейдің ең бай адамдар
                    тізімінің қатысушы (№78 орын). Әлемнің 7 елінің 54 зауыты
                    тиесілі «ТЕХНОНИКОЛЬ» корпорациясының негізін салушы және
                    иеленушілерінің бірі. Экономикалық дамудың үдеу
                    Институтының (Рыбаков Фонд), сондай-ақ ол «Эквиум
                    бизнес-клубының, және SOK смарт-офистерінің иесі.
                    Larix атты венчурлік фондтың және PryTek компаниялар тобын
                    негіздеушілердің бірі. Ақшалай қаражатты басқаруының жалпы
                    сомасы – $200 миллион. Инвестициялаңған жобалар
                    саны – 50-ден асады.</p>


                    <p>World chess инвесторы, шахмат ойынын көпшілікке насихаттаумен
                    белсенді түрде айналысуда, Ресейде филантропияны танымал етуші.
                    Филантропия саласындағы жобаларды бастап, жүзеге асыруды
                    өңдейтін – Legacy Endowment Foundation ұйымының негізін
                    қалаушылардың бірі. YouTube, Instagram, Telegram желілеріндегі
                    арналарын жүргізетін алғаш ресейлік миллиардер-блогер.</p>

                </div>
            </v-col>
            <v-col class="wing"  mb="2" xl="2" lg="2">
                <div class="rb"></div>
            </v-col>
        </v-row>
        </v-container>
    </div>
</template>

<script>
export default {
    name: "f-section"
}
</script>

<style scoped>
.cot-a{
    color: #C4C4C4;
}
.cot-a>p{
    margin: 53px 0px 0px;
}
.item-info-b2{
    position: relative;
    bottom: 120px;
}
.rb{
    background: white;
    height: 100%;
    position: relative;
    max-height: 360px;
}
.wing{
    max-width: 40px;
}
.rb::before{
    content: "";
    display: block;
    width: 1000px;
    height: 100%;
    background: #FFF;
    position: absolute;
    top: 0px;
    left: 99.9%;
}
.ry>img{
    max-width: 360px;
    top: 7px;
    position: relative;
}
.ry::after{
    content: "";
    display: block;
    width: 1000px;
    height: 100%;
    background: #FFF;
    position: absolute;
    top: 0px;
    right: 99.9%;
}

.ry{
    position: relative;
    max-height: 420px;
    text-align: right;
    background: #fff;
}
.title-d-cont/deep/{
    color: #5f6162;
    font-size: 1.3rem;
    margin: 10px 0px;
    font-family: 'SegoeUI';
}
.cot-a {
    font-size: var(--size);
    font-family: system-ui;
    font-weight: 400;
    margin: 15px;
}
@media only screen and (max-width: 600px) {

    ._med{
        flex-direction: column;
        width: 100%!important;;
    }
    .ry>img {
        max-width: 100%;
    }
    .container{
        margin-top: 0!important;
    }
    .item-info-b2 {
       bottom: 0!important;
    }
.wing{
    display: none;
}
    .ry::after {
        display: none;

    }


}

@media only screen and (max-width: 768px) {

    ._med{
        flex-direction: column;
    }
    .ry>img {
        max-width: 100%;
    }
    .container{
        margin-top: 0!important;
    }
    .item-info-b2 {
        bottom: 0!important;
    }
    .wing{
        display: none;
    }
    .ry::after {
        display: none;

    }
    .ry {
        max-height: 100%;
    }
}@media only screen and (max-width: 1024px) {

    ._med{
        flex-direction: column;
        width: 80%;
        margin: 0 auto;
    }
    .ry>img {
        max-width: 100%;
    }
    .container{
        margin-top: 0!important;
    }
    .item-info-b2 {
        bottom: 0!important;
    }
    .wing{
        display: none;
    }
    .ry::after {
        display: none;

    }
    .ry {
        max-height: 100%;
    }
}
</style>
