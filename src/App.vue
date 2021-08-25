<template>
  <main id="app">
    <Itenary />
  </main>
</template>

<script>
import Itenary from './components/content/Itenary/Itenary.vue';

export default {
  name: 'App',
  components: {
    Itenary,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
