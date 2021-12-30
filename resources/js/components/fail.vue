<template>
    <div>
        <v-container>
            <v-alert
                prominent
                type="error"
            >
                <v-row align="center">
                    <v-col class="grow">
                        Ошибка!
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
    name: "fail"
}
</script>

<style scoped>

</style>
