<template>
        <v-footer class="secondary"
                  absolute="absolute"
        >
            <v-col
                class="text-center"
                cols="12"
            >
                <v-card-text>
                    <v-btn
                        v-for="icon in icons"
                        :key="icon"
                        class="mx-4 white--text"
                        icon
                    >
                        <v-icon size="24px">
                            {{ icon }}
                        </v-icon>
                    </v-btn>
                </v-card-text>

                <strong  class="white--text">{{ new Date().getFullYear() }} — DAGNA.KZ</strong>
            </v-col>
        </v-footer>
</template>

<script>
export default {
name: "footer-c",
    data(){
        return{
            icons: [
                'mdi-facebook',
                'mdi-instagram',
                'mdi-telegram',
            ],
            absolute:true,
        }
    }
}
</script>

<style scoped>

</style>
