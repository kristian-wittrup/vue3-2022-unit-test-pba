<template>
  <div class="home">
    <h3>{{ textMsg }}</h3>
    <img alt="Vue logo" src="../assets/logo.png">
  </div>
</template>

<script>
// @ is an alias to /src
import { ref } from 'vue'

export default {

  name: 'HomeView',
  setup() {
    let textMsg = ref("Hello there") 

    return { textMsg }
  },
  components: {

  }
}
</script>
