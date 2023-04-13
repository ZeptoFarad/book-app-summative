import { createApp } from 'vue'
import App from './App.vue'
// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
 register();

//import router starts
import router from "./router";
//import router finish

 import './assets/main.css'

createApp(App)
    .use(router)
    .mount('#app')
