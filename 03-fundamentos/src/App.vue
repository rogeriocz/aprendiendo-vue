<template>
  <img alt="Vue logo" src="./assets/logo.png">

  <Counter title='Batman'/>
  
  <Counter start="15"/>
  
</template>

<script>
import Counter from './components/Counter.vue'

Counter

export default {
  name: 'Batman',
  components: {
    Counter
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
