<template>
    <div id="app">
        <img src="./assets/logo.png">
        <div class="box"></div>
        <router-view/>
    </div>
</template>

<script>
    export default {
        name: 'App'
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
    .box{
        width: 300px;
        height: 400px;
        background-color: #e4393c;
        margin: auto;
    }
</style>
