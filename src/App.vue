<template>
    <div id="app"><router-view/></div>
</template>

<script>
    export default {
        name: 'App'
    }
</script>

<style lang="scss">
    html {
        height: calc(100%);
    }
    body {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        margin: 0;
        padding: 0;
        height: calc(100%);
    }
    #app{
        height: calc(100%);
    }
</style>
