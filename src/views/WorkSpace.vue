<template>
  <div class="home">
    <UpperMenuBar />

    <div class="pa-5">
      <h3>Work space Settings</h3>
      <br />

      <AddNewUser />

    </div>

  </div>
</template>

<script>
// @ is an alias to /src
import UpperMenuBar from '@/components/WorkSpace/UpperMenuBar.vue';
import AddNewUser from '@/components/WorkSpace/AddNewUser.vue';


export default {
  name: "Home",

  components: {
    UpperMenuBar,
    AddNewUser
  },

};
</script>

<style scoped>

  .home{
    height: 100vh;
    background-color: #EEEEEE;
  }


</style>
