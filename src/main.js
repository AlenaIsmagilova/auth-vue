import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createAuth0 } from '@auth0/auth0-vue'

const app = createApp(App)

app.use(router)

app.use(
  createAuth0({
    // domain: domain,
    // clientId: clientId,
    domain: import.meta.env.DOMAIN || '',
    clientId: import.meta.env.CLIENT_ID || '',
    authorizationParams: {
      redirect_uri: 'https://auth-vue-5d5d.vercel.app/'
    }
  })
)

app.mount('#app')
