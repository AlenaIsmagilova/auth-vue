import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createAuth0 } from '@auth0/auth0-vue'

const app = createApp(App)

app.use(router)

app.use(
  createAuth0({
    domain: 'dev-s2kjzkf3eqkybh0b.us.auth0.com',
    clientId: 'ebhmqMf0Ly5Fd7p3CGoDmhwCIgNOFeXQ',
    authorizationParams: {
      redirect_uri: 'https://auth-vue-5d5d.vercel.app/'
    }
  })
)

app.mount('#app')
