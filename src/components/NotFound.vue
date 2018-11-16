<template>
  <v-layout>
    <v-flex xs6 offset-xs3>
      <h1>{{msg}}</h1>
      <router-link :to="`/`">
        Voltar á pagina principal
      </router-link>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Página não encontrada'
    }
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
