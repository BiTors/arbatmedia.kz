<template>
<div class="error-page">
        <div class="error-m"> Страницы не существует! 404 </div>
         <div class="error-m"> <router-link to="/rewrite">Главная</router-link></div>
</div>
</template>

<script>
export default {
    name: "404"
}
</script>

<style scoped>
.error-page{
    position: absolute;
    display: flex;
    align-items: center;
    height: 100%;
    width: 100%;
    text-align: center;
    justify-content: center;
    background: #374653;
    color: #ededee;
    z-index: 9;
    flex-direction: column;
}
.error-m{
    font-size: 2rem;
    text-decoration: none;
}
</style>
