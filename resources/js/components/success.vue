<template>
    <div>
        <v-container>
        <v-alert
            color="blue-grey"
            dark
            dense
            icon="mdi-cash-multiple"
            prominent
        >
            <v-row align="center">
                <v-col class="grow">
                  <strong>Төленді!</strong>  Біздің менеджер сізге жақын арада хабарласатын болады.
                </v-col>
                <v-col class="shrink">
                    <v-btn><router-link to="/">Гланая</router-link></v-btn>
                </v-col>
            </v-row>
        </v-alert>
        </v-container>
    </div>
</template>

<script>
export default {
    name: "success"
}
</script>

<style scoped>

</style>
