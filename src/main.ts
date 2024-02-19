import {createApp} from 'vue'
import './style.css'
import router from "./router";
import App from "./App.vue";
import VueScreen from 'vue-screen'


const app = createApp(App)
app.use(router)
app.use(VueScreen, 'tailwind')
app.mount('#app')
