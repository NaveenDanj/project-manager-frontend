<template>
  <div class="home">
    <UpperMenuBar />
    
    <div class="pa-3">
      <h3>My Account</h3>
    </div>


  </div>
</template>



<script>
import UpperMenuBar from '@/components/WorkSpace/UpperMenuBar.vue';


export default {
    name: "MyAccount",

    components: {
        UpperMenuBar,
    },
}
</script>

<style scoped>

  .home{
    height: 100vh;
    background-color: #EEEEEE;
  }


</style>