<template>
    <!-- <div id="canvas"></div> -->
    <FlowEchart />
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs } from 'vue'

import { propTypes } from '/@/utils/propTypes'

export default defineComponent({
    name: 'Flow',
    props: {
        width: propTypes.number.def(800),
        height: propTypes.number.def(600),
    },
    setup() {
        const data = reactive({})

        onMounted(() => {
            /** padding */
            const wrapPadding = 0

            /** create Canvas Element */
            const canvas = document.createElement('canvas')
            const ctx = canvas.getContext('2d') as CanvasRenderingContext2D
            const wrap = document.getElementById('canvas')
            const width = wrap?.offsetWidth as number
            const height = wrap?.offsetHeight as number
            canvas.width = width
            canvas.height = height

            const _itemWidth = (width - 6 * 20 - 6 * 20) / 6

            /** create grid */
            const _marginInt = 20

            const _gridNum_X = 6
            const _gridInt_X = (width - wrapPadding * 2) / _gridNum_X

            Array.from({ length: _gridNum_X }).map((_v, i) => {
                console.log(Math.floor(i * _gridInt_X))
                ctx.beginPath()
                ctx.strokeStyle = 'red'
                // ctx.arc(Math.floor(i * _gridInt_X) + _marginInt + wrapPadding * 2, 10, 6, 0, 2 * Math.PI, false)
                ctx.rect(Math.floor(i * _gridInt_X) + _marginInt, 50, _itemWidth, 40)
                ctx.stroke()
            })

            document.getElementById('canvas')?.append(canvas)
        })

        return {
            ...toRefs(data),
        }
    },
})
</script>

<style lang="less">
// #canvas {
//     width: 1264px;
//     height: 450px;
//     border: 1px solid #ccc;
//     margin: 0 auto;
//     box-sizing: border-box;
// }
@namespace: chenguo;
@prefix-cls: ~'@{namespace}-Flow';
.@{prefix-cls} {
&__wrap {
    width: 1264px;
    height: 450px;
}
}
</style>
