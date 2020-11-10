<template>
  <div class="home">
    <div class="container">
    <Todos />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Todos from '@/components/Todos.vue'

export default {
  name: 'Home',
  components: {
    Todos
  }
}
</script>

<style>

body {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  line-height: 1.6;
  background: azure;
}
.container {
  max-width: 1100px;
  margin: auto;
  overflow: auto;
  padding: 0 2rem; 
}


</style>
