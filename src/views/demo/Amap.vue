<template>
    <div id="canvas"></div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, onMounted } from 'vue'
export default defineComponent({
    name: 'HelloWorld',
    setup() {
        const data = reactive({})

        onMounted(() => {
            /** @type { HTMLCanvasElement } */
            const canvas = document.createElement('canvas') as HTMLCanvasElement
            console.log('ratio', window.devicePixelRatio)

            const width = 800
            const height = 600
            canvas.width = width
            canvas.height = height
            const ctx = canvas.getContext('2d')

            if (ctx) {
                ctx.beginPath()
                ctx.fillStyle = 'rgba(0,0,0,0)'
                ctx.fillRect(0, 0, width, height)
                ctx.closePath()
                ctx.beginPath()
                ctx.strokeStyle = 'rgb(40,83,149)'

                ctx.moveTo(10, 50)
                ctx.lineTo(10, 100)
                ctx.lineTo(180, 100)
                ctx.lineTo(180, 50)
                ctx.lineTo(10, 50)

                ctx.fillStyle = 'rgba(0,0,0,0)'
                ctx.fill()
                ctx.stroke()
                ctx.closePath()

                ctx.textAlign = 'center'
                ctx.fillStyle = 'rgba(0,0,0,0.6)'
                ctx.font = '12px Arial'
                ctx.fillText('楚门的世界', 65, 75)

                //  ctx.arc()
            }

            console.log(canvas.getBoundingClientRect(), 2)
            document.getElementById('canvas')?.addEventListener('click', (e) => {
                console.log('ee', e)
            })
            document.getElementById('canvas')?.appendChild(canvas)
        })
        return { ...toRefs(data) }
    },
})
</script>

<style scoped lang="less">
#canvas {
    width: 800px;
    height: 600px;
    margin: 50px auto;
}
</style>
