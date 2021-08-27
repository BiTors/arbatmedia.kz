<template>
<div>
    <header></header>
    <a_sec></a_sec>
    <f_sec></f_sec>
    <portfolio></portfolio>
    <partner></partner>
    <contacts></contacts>
    <b_sec></b_sec>
    <steps></steps>
    <e_sec></e_sec>
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
import e_sec from './e-section.vue';
import steps from './steps.vue';

export default {
    name: "Home",
    components: {
        vue_header,
        a_sec,
        f_sec,
        portfolio,
        partner,
        b_sec,
        e_sec,
        steps,
        contacts
    }
}
</script>

<style scoped>

</style>
