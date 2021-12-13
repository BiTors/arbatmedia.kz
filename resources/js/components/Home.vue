<template>
<div>
    <vue_header></vue_header>
    <a_sec></a_sec>
    <f_sec></f_sec>
    <portfolio></portfolio>
    <partner></partner>
    <b_sec></b_sec>
</div>
</template>

<script>
import vue_header from './v-header.vue';
import a_sec from './a-section.vue';
import f_sec from './f-section.vue';
import portfolio from './portfolio.vue';
import partner from './partner.vue';
import b_sec from './b-section.vue';
import contacts from './contacts.vue';
export default {
    name: "Home",
    metaInfo() {
        return {
            title: "Редакторское бюро DAGNA",
            meta: [
                { charset: 'utf-8' },
                { name: 'description', content:  'Услуги профессиональных редакторов по редактированию текстов любой сложности, книг, рукописей, статей и других материалов.'},
                { property: 'og:title', content: "Редакторское бюро DAGNA"},
                { property: 'og:site_name', content: 'dagna.kz'},
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
        b_sec,
        contacts
    }
}
</script>

<style scoped>

</style>
