<template>
<div>
    <vue_header></vue_header>
    <a_sec></a_sec>
    <f_sec></f_sec>
    <portfolio></portfolio>
    <partner></partner>
    <contacts></contacts>
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
