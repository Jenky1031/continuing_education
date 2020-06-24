<template>
  <div class="home">
    <Main />
  </div>
</template>

<script>
import Main from "./components/Main";
export default {
  name: "Home",
  components: {
    Main
  }
};
</script>

<style lang="stylus" scoped>
.home
  background-color: #EEEEEE
</style>
