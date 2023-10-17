<template>
  <Loader v-if="isLoading" />

  <div class="wrapper" v-else>
    <img :src="image" class="image" />
    <p class="text">{{ firstName }}</p>
    <p class="text">{{ secondName }}</p>
    <p class="email">{{ email }}</p>
    <button class="button" @click="logout">Выйти</button>
  </div>
</template>

<script>
import Loader from '../components/loader/Loader.vue'

export default {
  computed: {
    authenticated() {
      return this.$auth0.isAuthenticated.value
    },
    firstName() {
      return this.$auth0.user.value.given_name
    },
    secondName() {
      return this.$auth0.user.value.family_name
    },
    image() {
      return this.$auth0.user.value.picture
    },
    email() {
      return this.$auth0.user.value.email
    },
    isLoading() {
      return this.$auth0.isLoading.value
    }
  },
  components: {
    Loader
  },
  methods: {
    logout() {
      this.$auth0.logout()
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
.wrapper {
  width: 480px;
  height: 550px;
  background: var(--button-primary-color);
  position: relative;
  border-radius: 10px;
  box-shadow:
    0 2px 10px 0 rgba(0, 0, 0, 0.16),
    0 2px 10px 0 rgba(0, 0, 0, 0.12);
  padding: 90px 10px 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.image {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  position: absolute;
  top: -75px;
  left: 165px;
  border: 5px solid var(--background-secondary-color);
}

.email {
  font-size: 14px;
  margin-top: 25px;
}

.text {
  font-size: 24px;
}

.button {
  width: 200px;
  margin-top: 250px;
  padding: 10px 20px;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--button-secondary-color);
  background: var(--button-primary-color);
  color: var(--button-secondary-color);
  transition: 0.3s;
  cursor: pointer;
  font-size: 24px;
}
.button:hover {
  color: var(--button-primary-color);
  background: var(--button-secondary-color);
  transition: 0.3s;
}
</style>
