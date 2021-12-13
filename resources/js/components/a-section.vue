<template>
    <div>
        <v-content>
            <SectionOne id="book"/>
            <v-container id="two">
                <div class="dt dt-m" >
                    <h2>КІТАП ТУРАЛЫ</h2>
                </div>
                <v-row class="mb-12 _med">
                     <v-col class="_a12" sm="12">
                         <div class="cot-a">
                             "Ағын" күйін іздеу, энергетикалық босаңдау және турбуленттік жолақ — міне, белсенді өмір сүруді
                             таңдаушылардың айнымас серіктері.
                         </div>
                     </v-col>
                        <v-col class="_a12" sm="12">
                            <div class="cot-a">
                                «ТОК» — осы "қуат" төмендегенде жәрдем беретін кітап. Сенің қолыңдағы жай ғана кезекті ғұмырнама
                                және әсерсіз әдіс құралы емес, бұл — Игорь Рыбаковтың өмірінің әртүрлі өмірлік жағдайларындағы
                                жетістіктерінің нығыздалған тәжірибесі. Бұл кітап саған - кәсіп, денсаулық, қарым-қатынас мәселелерінде
                                қолыңнан келетін дәрежеден кем болуға мүмкіндік бермейді
                            </div>
                        </v-col>
                </v-row>
                <div class="dt" >
                    <h2>Жалпы саптан шық, жаңа есіктерді ашуды таңда.</h2>
                </div>
                <v-row class="mb-12 _med">
                    <v-col class="_a12" sm="12">
                        <div class="cot-a">
                            <p> – Байқалмайтын қандай әдеттер жаңа нәтижелерге қол жеткізуге кедергі келтіреді?</p>
                            <p>   – Ақша сені өзі табу үшін не істеу керек?</p>
                            <p>  – Не үшін жаңашылдыққа ден қою керек және ол қалай іске асырылады?</p>
                            <p>  – "Өзіңді қайта құру" деген не және ол жаңа дәрежеге шығуға қалай көмектеспек?</p>
                        </div>
                    </v-col>
                </v-row>
                <div class="dt" id="four">
                    <div class="thu-im">
                        <img src="/img/thunder-img.png" alt="thunder">
                    </div>
                    <div class="title-line-r"></div>
                    <div class="title-line-l"></div>
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
import d_sec from './d-section.vue';
export default {
    name: "a-section",
    components:{
        d_sec
    },
    data(){
        return{
            one:'Приветствую вас! Меня зовут Газиза Габи. На протяжении 6 лет работы с самыми разными видами текста, я изнутри изучала редакторскую кухню от глянца до крупного книжного издательства в стране. И весь опыт стал основой для создания редакторского бюро.',
        }
    },
}
</script>

<style scoped>
.bts{
    padding: 0;
}
.win>svg{
    top: 10px;
    position: relative;
}
._med-m{
    display:none;
}
._wn{
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
}
.work{
    font-size: 4rem;
    font-family: 'fastweb';
    color: #fff;
}
.cot-a{
    font-family: 'SegoeUI';
    color: #C4C4C4;
    font-size: 1.2rem;
}

._a6i{
    width: 100%;

}
._back{
    background: #333;
    position: absolute;
    width: 100%;
    height: 100px;
}
._a61{
    text-align: center;
    opacity: 0.9;
    display: flex;
    align-items: center;

}
.cot-a{
    font-size: var(--size);
    font-family: system-ui;
    font-weight: 400;
    margin: 15px;
}
.thu-im>img{
    max-width: 60px;
}
.thu-im{
    text-align: center;
}
._ma{
    background: #fd506b;
    margin: 50px 0px;
    border-radius: 6px;
    padding: 50px 0px;
}
.a-section{
    background: #F5FAFF;
}
.section-in{
    background: #F5FAFF;
    max-width: 1390px;
    margin: 0 auto;
    border-radius: 8px;
    position: relative;
    bottom: 100px;
    min-height:200px;
}
.title-qu{
    color:var(--mainColor);
}
.title-block{
    display: flex;
    align-items: center;
    justify-content: flex-start;
}
.a-block{
    min-height: 155px;
    border-radius: 8px;
    max-width: 400px;
    margin: 15px;
    cursor: pointer;


}
.a-line{
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
}
.title-numb{
    font-size: 3rem;
    color: var(--mainColor);
    font-family: 'fastweb';
}
.title-sub{
    color: var(--mainColor);
    margin-left: 10px;
}
.alb{
    transform: rotate(
        279deg);
    top: -222px;
    position: absolute;
    /* bottom: 1000px; */
    left: -12px;
}
.albs{
    transform: rotate(
        20deg);
    bottom: 180px;
    position: absolute;
    /* bottom: 1000px; */
    right: -45px;
}
.a-cont{
    font-size: 16px;
    font-family: system-ui;
    font-weight: 400;

}
.a-block:hover{
    background:var(--mainColor);
    -o-transform: translateY(-8px);
    -ms-transform: translateY(-8px);
    -moz-transform: translateY(-8px);
    -webkit-transform: translateY(-8px);
    transform: translateY(-8px);
    -o-transition: all 0.2s ease-in-out;
    -moz-transition: all 0.2s ease-in-out;
    -webkit-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
}
.a-block:hover .title-numb, .a-block:hover .title-sub {
    color: #e4eaec;
    -o-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
}
.a-block:hover .a-cont{
    color: whitesmoke;
    /*font-weight: 500;*/
    /*-o-transition: all 0.5s ease-in-out;*/
    /*-moz-transition: all 0.5s ease-in-out;*/
    /*-webkit-transition: all 0.5s ease-in-out;*/
    /*transition: all 0.5s ease-in-out;*/
}
@media only screen and (max-width: 1360px){
    .section-in {
        position: inherit;
    }
    h2 {
        margin: 0;
    }
}
@media only screen and (min-width: 992px) and (max-width: 1359px) {
    .a-section{
        padding-bottom: 50px;
    }
}
@media only screen and (max-width: 720px) {
   /* ._med{
        display: none;
    }*/
    ._med-m{
        display: block;
    }
}
@media only screen and (max-width: 600px) {
    ._ma{
        flex-direction: column;
    }
    ._med{
        flex-direction: column;
    }
    .dt-m{

    }
    .v-application .mb-12 {
         margin-bottom: 0!important;
    }
    .title-line-r {
        height: 1px;
        left: 60%;
        background: #c4c4c4;
    }
    .title-line-l {
        height: 1px;
        right:60%;
        background: #c4c4c4;
    }
    .container{
        margin-top: 0!important;
    }
    .container {
        width: 100%!important;
    }

}

@media only screen and (max-width: 320px) {
    .title-line-r {
        height: 1px;
        left: 60%;
        background: #c4c4c4;
    }
    .title-line-l {
        height: 1px;
        right: 60%;
        background: #c4c4c4;
    }
}

@media only screen and (max-width: 768px) {
    .title-line-r {
        height: 1px;
        left: 60%;
        background: #c4c4c4;
    }
    .title-line-l {
        height: 1px;
        right: 60%;
        background: #c4c4c4;
    }
}

@media only screen and (max-width: 1024px) {
    .container{
        width: 80%;
    }
}

</style>
