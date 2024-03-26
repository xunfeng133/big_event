const HANDLER = "_vue_resize_handler";
import * as Echarts from 'echarts';
import elementResizeDetectorMaker from "element-resize-detector";
export default {
    mounted(el, binding) {
        el[HANDLER] = binding.value
            ? binding.value
            : () => {
                let chart = ECharts.getInstanceByDom(el);
                if (!chart) {
                    return;
                }
                chart.resize();
            };
        // 监听绑定的div大小变化，更新 echarts 大小
        elementResizeDetectorMaker().listenTo(el, el[HANDLER]);
    },
    unmounted(el, binding) {
        elementResizeDetectorMaker().removeListener(el, el[HANDLER]);
        delete el[HANDLER];
    }
}
