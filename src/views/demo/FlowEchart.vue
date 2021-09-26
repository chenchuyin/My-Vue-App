<!--决策服务材料-决策服务-流程图插件-->
<template>
    <div class="flowChart">
        <a-input-number v-model="number" class="number_ipt" :min="1" :max="10" @change="initChart" />
        <div ref="content" class="content">
            <div class="item first">
                <div class="block">
                    <span class="line" :style="{ right: -itemLineWidth + 'px', width: itemLineWidth + 'px' }"></span>
                </div>
            </div>
            <div class="item">
                <div v-for="(item, i) in number" :key="i" class="block">
                    <span class="line-l" :style="{ left: -itemLineWidth + 'px', width: itemLineWidth + 'px' }">
                        <span
                            v-show="!(i + 1 === number) && isShow(i)"
                            class="vertical-line"
                            :style="{ height: itemMargin * 2 + 'px' }"
                        ></span>
                    </span>
                    <span class="line-r" :style="{ right: -itemLineWidth + 'px', width: itemLineWidth + 'px' }"></span>
                </div>
            </div>
            <div class="item">
                <div v-for="(item, i) in number" :key="i" class="block">
                    <span class="line-l" :style="{ left: -itemLineWidth + 'px', width: itemLineWidth + 'px' }"></span>
                    <span class="line-r" :style="{ right: -itemLineWidth + 'px', width: itemLineWidth + 'px' }"></span>
                </div>
            </div>
            <div class="item">
                <div v-for="(item, i) in number" :key="i" class="block">
                    <span class="line-l" :style="{ left: -itemLineWidth + 'px', width: itemLineWidth + 'px' }"></span>
                    <span class="line-r" :style="{ right: -itemLineWidth + 'px', width: itemLineWidth + 'px' }">
                        <span
                            v-show="!(i + 1 === number) && isShow(i)"
                            class="vertical-line"
                            :style="{ height: itemMargin * 2 + 'px' }"
                        ></span>
                    </span>
                </div>
            </div>
            <div class="item end">
                <div class="block">
                    <span class="line" :style="{ left: -itemLineWidth + 'px', width: itemLineWidth + 'px' }"></span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'FlowEchart',
    components: {},
    setup() {
        return {
            number: 3,
            /** 容器 */
            scrollWidth: 0,
            scrollHeight: 0,
            /** 计算属性 */
            itemMargin: 0,
            itemHeight: 53,
            itemLineWidth: 0,
        }
    },
    watch: {},
    mounted() {
        // all-padding
        this.initChart()
    },
    methods: {
        isShow() {
            // if (this.number % 2 === 0) {
            return true
            // }
        },
        initChart() {
            this.scrollHeight = this.$refs.content.offsetHeight

            this.itemLineWidth = ((this.$refs.content.offsetWidth / 5) * 15) / 100
            this.itemMargin =
                (this.scrollHeight - this.number * this.itemHeight) / (this.number * 2) + this.itemHeight / 2

            console.log(this.itemLineWidth, this.itemMargin)
        },
    },
})
</script>

<style scoped lang="less">
.flowChart {
    width: 100%;
    height: 100%;
    background-color: #fff;
    padding: 80px 120px;
    position: relative;

.number_ipt {
    position: absolute;
    right: 10px;
    top: 12px;
    width: 150px;
}

.content {
    width: 100%;
    height: 100%;
    background-color: #ccc;
    display: flex;
    text-align: center;
.item {
    flex: 1;
    // border: 1px solid #fff;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-around;
.block {
    width: 70%;
    height: 53px;
    background: #eff2f7;
    // border: 1px solid #dde9fd;
    box-sizing: border-box;
    position: relative;
.line-l {
    position: absolute;
    height: 1px;
    background-color: #fff;
    top: 51%;
.vertical-line {
    height: 100px;
    width: 1px;
    position: absolute;
    background-color: #fff;
    left: -0;
    top: 0;
}
}
.line-r {
    position: absolute;
    height: 1px;
    background-color: #fff;
    top: 51%;
.vertical-line {
    height: 100px;
    width: 1px;
    position: absolute;
    background-color: #fff;
    right: -1px;
    top: 0;
}
}
}
}
.first {
.block {
.line {
    position: absolute;
    height: 1px;
    background-color: #fff;
    top: 50%;
}
}
}
.end {
.block {
.line {
    position: absolute;
    height: 1px;
    background-color: #fff;
    top: 50%;
}
}
}
}
}
</style>
