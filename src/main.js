import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createAuth0 } from '@auth0/auth0-vue'
// import { domain, clientId } from '../auth_config.json'

const app = createApp(App)

console.log(import.meta.env)

app.use(router)

app.use(
  createAuth0({
    domain: import.meta.env.DOMAIN,
    clientId: import.meta.env.CLIENT_ID,
    authorizationParams: {
      redirect_uri: 'https://auth-vue-5d5d.vercel.app'
    }
  })
)

app.mount('#app')
