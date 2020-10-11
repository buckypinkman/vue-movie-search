import { createApp } from 'vue'
import App from './App.vue'
import Navbar from './components/UI/Navbar.vue'

const app = createApp(App)

app.component('navbar', Navbar)
app.mount('#app')
