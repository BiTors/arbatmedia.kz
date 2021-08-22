<template>
    <div>
        <div class="dt" id="four">
            <h2>КАК МЫ РАБОТАЕМ</h2>
            <div class="title-line"></div>
        </div>
        <v-container>
        <v-row  class="mb-4">
            <v-col class="_a6">
                <div class="_ss" style="text-align: center;">
                    <div class="_mih">
                        <img class="_imw" src="/img/message.svg" alt="">
                    </div>
                    <div>
                        <div class="title-d-cont">
                            Заявка
                        </div>
                        <div class="_stw">
                            Вы выбираете услугу и заполняете форму заявки.
                        </div>
                    </div>
                </div>
            </v-col>
            <v-col class="_a6">
                <div class="_ss" style="text-align: center;">
                    <div class="_mih">
                        <img class="_imw" src="/img/man.svg" alt="">
                    </div>
                    <div>
                        <div class="title-d-cont">
                            Менеджер
                        </div>
                        <div class="_stw">
                            Наш менеджер обработает заявку, подготовит КП и свяжется с вами для обсуждения деталей и подготовки ТЗ.
                        </div>
                    </div>
                </div>
            </v-col>
            <v-col class="_a6">
                <div class="_ss" style="text-align: center;">
                    <div class="_mih">
                        <img class="_imw" src="/img/folder.svg" alt="">
                    </div>
                    <div>
                        <div class="title-d-cont">
                            Процесс работы
                        </div>
                        <div class="_stw">
                            Мы выполняем работу в соответствии с ТЗ, высылаем на согласование, вносим правки до трех этапов.
                        </div>
                    </div>
                </div>
            </v-col>
            <v-col class="_a6">
                <div class="_ss" style="text-align: center;">
                    <div class="_mih">
                        <img class="_imw" src="/img/complate.svg" alt="">
                    </div>
                    <div>
                        <div class="title-d-cont">
                           Результат
                        </div>
                        <div class="_stw">
                            Ваш текст готов!
                        </div>
                    </div>
                </div>
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
.title-d-cont/deep/{
    color: #5f6162;
    font-size: 1.3rem;
    margin: 10px 0px;
    font-family: 'SegoeUI';
}
._a6{
    display: flex;
    flex-direction: column;
    align-items: center;
}
._imw{
    width: 65px;
}
._mih{
    min-height: 75px;
}
._stw{
    font-size: var(--size);
}
</style>
