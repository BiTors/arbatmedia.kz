<template>
<div>
    <vue_header></vue_header>
    <a_sec></a_sec>
    <f_sec></f_sec>
    <portfolio></portfolio>
    <partner></partner>
</div>
</template>

<script>
import vue_header from './v-header.vue';
import a_sec from './a-section.vue';
import f_sec from './f-section.vue';
import portfolio from './portfolio.vue';
import partner from './partner.vue';

export default {
    name: "Home",
    metaInfo() {
        return {
            title: "Игорь Рыбоков \"ТОК\" arbatbooks.kz",
            meta: [
                { charset: 'utf-8' },
                { name: 'description', content:  '«ТОК» — осы "қуат" төмендегенде жәрдем беретін кітап. Сенің қолыңдағы жай ғана кезекті ғұмырнама және әсерсіз әдіс құралы емес, бұл — Игорь Рыбаковтың өмірінің әртүрлі өмірлік жағдайларындағы жетістіктерінің нығыздалған тәжірибесі. Бұл кітап саған - кәсіп, денсаулық, қарым-қатынас мәселелерінде қолыңнан келетін дәрежеден кем болуға мүмкіндік бермейді'},
                { property: 'og:title', content: "Игорь Рыбаков \"ТОК\" arbatbooks.kz"},
                { property: 'og:site_name', content: 'arbatbooks.kz'},
                {property: 'og:type', content: 'website'},
                {name: 'robots', content: 'index,follow'}
            ]
        }
    },
    components: {
        vue_header,
        a_sec,
        f_sec,
        portfolio,
        partner,
    }
}
</script>

<style scoped>

</style>
