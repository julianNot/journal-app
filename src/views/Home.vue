<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
  </div>
  <h2>Hola uwu</h2>
  <button @click="goToDaybook" class="btn btn-primary">Boton</button>
  <button @click="goToDaybook" class="btn btn-secondary">Boton</button>
  <button @click="goToDaybook" class="btn btn-success">Boton</button>
</template>

<script>
export default {
  methods: {
    goToDaybook(){
      this.$router.push({name : 'no-entry'})
    }
  }
}
</script>