<template>
    <div class="login-container">
        login
        <div class="login-taiji"> </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
export default defineComponent({
    name: 'Login',
    setup() {
        const data = reactive({})
        return {
            ...toRefs(data),
        }
    },
})
</script>

<style lang="less" scoped>
@taiji-width: 20em;
@taiji-border-width: 10em;

.login-container {
.login-taiji {
    width: 0;
    height: @taiji-width;
    position: relative;
    margin: 50px auto;
    border-left: @taiji-border-width solid #000;
    border-right: @taiji-border-width solid #fff;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);
    // border-radius: @taiji-width;
}
}
</style>
