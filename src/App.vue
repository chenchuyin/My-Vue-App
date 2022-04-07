<script lang="ts" setup>
const title = '楚门的世界'
</script>
<template>
    <div id="app">
        {{ title }}
        <Title />
        <a-button type="primary">Primary Button</a-button>
    </div>
</template>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    overflow: hidden;
}
</style>
