<template>
    <h1>{{ msg }}</h1>
    <a-radio v-model:checked="checked">Radio</a-radio>
    <a-radio-group v-model:value="value1" button-style="solid">
        <a-radio-button value="a">Hangzhou</a-radio-button>
        <a-radio-button value="b">Shanghai</a-radio-button>
        <a-radio-button value="c">Beijing</a-radio-button>
        <a-radio-button value="d">Chengdu</a-radio-button>
    </a-radio-group>
</template>

<script lang="ts">
import { ref, defineComponent, reactive, toRefs, getCurrentInstance } from 'vue'

let labelArray = [
    {
        label: '1',
        value: 1,
    },
]

export default defineComponent({
    name: 'HelloWorld',
    props: {
        msg: {
            type: String,
            required: true,
        },
    },
    setup() {
        const count = ref(0)
        let mapList = labelArray.map((v) => v)
        const data = reactive({
            checked: true,
            value1: 'a',
        })

        console.log(getCurrentInstance())

        return { ...toRefs(data), count, mapList }
    },
})
</script>

<style scoped>
a {
    color: #42b983;
}

label {
    margin: 0 0.5em;
    font-weight: bold;
}

code {
    background-color: #eee;
    padding: 2px 4px;
    border-radius: 4px;
    color: #304455;
}
</style>
