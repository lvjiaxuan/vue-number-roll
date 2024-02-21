import Vue from 'vue'
import App from './App.vue'
import 'virtual:uno.css'
import '@unocss/reset/normalize.css'

// eslint-disable-next-line ts/no-unsafe-argument
new Vue({ render: h => h(App) }).$mount('#app')
