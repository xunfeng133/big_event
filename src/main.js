import { createApp } from 'vue'
import './style.css'
import resetEl from './js/reset-el.js';
import App from './App.vue'
import elementResizeDetectorMaker from "element-resize-detector";
const HANDLER = "_vue_resize_handler";
const app= createApp(App);
app.directive("chart-resize",resetEl)
app.mount('#app')
