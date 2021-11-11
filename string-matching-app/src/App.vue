<template>
  <div>
    <img  src="./assets/string-matching.jpg" style="width:300px;height:300px;">
    <StringMatching />
  </div>
</template>

<script>
import StringMatching from './components/StringMatching.vue'

export default {
  name: 'App',
  components: {
    StringMatching
  }
}
</script>

<style>
/* # means this style is just effecting the element which has id app */
/*  using .app will effect all of the elements that has the class property as 'app' */

#app { 
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
