<template>
    <!-- <div ref="chart" v-chart-resize class="chart"></div> -->
    <div>
        <div class="charts1"  v-chart-resize  ref="c1">

        </div>
    </div>
</template>
<script lang="ts">
import { Ref, ref, onMounted, defineComponent, watch } from 'vue';
import * as echarts from 'echarts';
export default defineComponent({
    name: 'left1',
    props: {
        city: {
            type: String
        }
    },
    setup(props, ctx) {
        const data = {
            title: [
                {
                    text: `${props.city}市人口增长数据`
                }
            ],
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                inverse: true,
                animationDuration: 300,
                animationDurationUpdate: 300,
            },
            yAxis: {
                type: 'value'
            },
            animationDuration: 0,
            animationDurationUpdate: 500,
            animationEasing: 'linear',
            animationEasingUpdate: 'linear',
            series: [
                {
                    data: [120, 200, 150, 80, 70, 110, 130],
                    type: 'bar'
                }
            ]
        };
        let ctx1 = null;
        const c1 = ref<HTMLElement>();

        const setEcharts = () => {
            data.title[0].text = `${props.city}市人口增长数据`;
            data.series[0].data = [1, 2, 3, 4, 5, 6, 7].map(i => {
                return Math.ceil(Math.random() * 1000)
            })
            ctx1.setOption(data);
        }
        onMounted(() => {
            ctx1 = echarts.init(c1.value);
            setEcharts();
        })
        watch(() => props.city, (newval, oldval) => {

            setEcharts();
        })
        return {
            c1
        }
    },

})
</script>
<style lang="scss" scoped>
.charts1 {
    height: vh(400);
    border-image-source: url('../assets/border.png');
    border-image-slice: 52 37 17 100;
    border-style: solid;
    border-width: vw(40);
}
</style>