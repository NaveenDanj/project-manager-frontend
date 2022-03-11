<template>
  <div class="home">
    <UpperMenuBar />
    
    <div class="pa-3">
      <h3>Home Page</h3>
    </div>


  </div>
</template>

<script>
// @ is an alias to /src
import UpperMenuBar from '@/components/WorkSpace/UpperMenuBar.vue';

export default {
  name: "Home",

  components: {
    UpperMenuBar,
  },

};
</script>

<style scoped>

  .home{
    height: 100vh;
    background-color: #EEEEEE;
  }


</style>
