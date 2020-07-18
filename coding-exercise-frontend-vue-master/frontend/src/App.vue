<template>
  <div id="app">

    <router-view />
  </div>
</template>
<script>
import router from '@/router'

export default {
  computed:{
    current(){
      return this.$route.path;
    }
  }
}
</script>
<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
