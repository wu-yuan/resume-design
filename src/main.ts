import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import '@/style/normalize.css';
import component from '@/utils/registerCom';
import '@/style/global.less';
// 注册所有图标
import SvgIcon from '@/components/SvgIcon/SvgIcon.vue';
import elementIcons from '@/components/SvgIcon/svgicon';
// 颜色选择控件
import ColorPicker from 'colorpicker-v3'; // 注册组件
import 'colorpicker-v3/style.css'; // 引入样式文件
// 图标
import '@/assets/iconfont/iconfont.js';

// pdf预览
import VuePdf from 'vue3-pdfjs';

// 滚动条
import CScrollbar from 'c-scrollbar';

// 创建vue实例
const app = createApp(App);
app.use(store);
app.use(router);
app.use(ElementPlus, { size: 'small' });
app.use(component);
app.use(elementIcons);
app.use(ColorPicker);
app.use(VuePdf);
app.use(CScrollbar);
app.component('SvgIcon', SvgIcon);

// 挂载实例
app.mount('#app');
