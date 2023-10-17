<template>
  <main>
    <div class="container" v-if="!authenticated">
      Войдите в свой аккаунт, чтобы продолжить
      <button class="button" @click="login">Войти</button>
    </div>
  </main>
</template>

<script lang="ts">
export default {
  updated() {
    if (this.$auth0.isAuthenticated.value) {
      this.$router.push('/profile')
    }
  },
  methods: {
    login() {
      this.$auth0.loginWithRedirect()
    }
  },
  computed: {
    authenticated() {
      return this.$auth0.isAuthenticated.value
    }
  }
}
</script>

<style scoped>
.button {
  width: 200px;
  margin-top: 15px;
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

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 700;
  font-size: 32px;
}
</style>
