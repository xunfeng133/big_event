<template>
    <div class="center-map" id="container">

    </div>
</template>
<script lang="ts">
import echarts from 'echarts';
import { ref, defineComponent, onMounted, defineEmits, defineProps } from 'vue';
import mapData from "@/js/shanghai.js";

export default defineComponent({
    name: 'map',
    props: {
        modelValue: {
            type: String
        }
    },
    setup(props, ctx) {
        const emit = defineEmits(["input"])
        onMounted(() => {
            var map = new AMap.Map("container", {
                mapStyle: "amap://styles/blue", //设置地图的显示样式
                center: [121.045332, 31.19884],
                zoom: 8.8
            });

            function addPolygon(data, name) {
                let polygon = new AMap.Polygon({
                    path: data,
                    fillColor: '#ccebc5',
                    strokeOpacity: 1,
                    fillOpacity: 0.5,
                    strokeColor: '#2b8cbe',
                    strokeWeight: 1,
                    name: name,
                    strokeStyle: 'dashed',
                    strokeDasharray: [5, 5],
                });
                polygon.on('click', (e) => {
                    ctx.emit('update:modelValue', e.target._opts.name)
                    polygon.setOptions({
                        fillOpacity: 0.7,
                        fillColor: '#7bccc4'
                    })
                })

                polygon.on('mouseout', () => {
                    polygon.setOptions({
                        fillOpacity: 0.5,
                        fillColor: '#ccebc5'

                    })
                })
                map.add(polygon);
            }
            addPolygon(mapData.shanghai, '上海');
            addPolygon(mapData.suzhou, '苏州');
            addPolygon(mapData.wuxi, '无锡');
        })
        return {
            props
        }
    }
})
</script>
<style lang="scss" scoped>
.center-map {
    height: 100%;
}
</style>
