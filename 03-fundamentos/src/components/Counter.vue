<template>
  <h2>{{title || 'Counter'}}</h2>
  <p>{{counter}} <sup>2</sup> = {{squareCounter}} </p>
  <div>
    <button @click="increase">+1</button>
    <button @click="decrease">-1</button>
  </div>
</template>

<script>
export default {
  props: ['title', 'start'],
  data() {
    return {
      counter: this.start
    }
  },
  methods: {
    getSquareValue() {
      return this.counter * this.counter
    },
    // Increase
    increase() {
      this.counter++
    },
    // Decrease
    decrease() {
      this.counter--
    },

  },
  computed: {
    squareCounter() {
      console.log('computed squareCounter')
      return this.counter * this.counter
    },
    customTitle() {

    }
  }
}
</script>

<style>
button{
  background-color: #64BB87;
  border-radius: 5px;
  padding: 5px 15px;
  cursor: pointer;
  border: 1px solid white;
  color: white;
  transition: 0.3s ease-in-out;
  margin: 0 5px;
}

button:hover {
  background-color: #5aa67b;
  transition: 0.3s ease-in-out;
}
</style>