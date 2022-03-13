<template>
  <div class="home">
    <UpperMenuBar />

    <div class="pa-5">
      <h3>Work space Settings</h3>
      <br />

      <AddNewUser />
      <CreateProject />

    </div>

  </div>
</template>

<script>
// @ is an alias to /src
import UpperMenuBar from '@/components/WorkSpace/UpperMenuBar.vue';
import AddNewUser from '@/components/WorkSpace/AddNewUser.vue';
import CreateProject from '@/components/WorkSpace/CreateProject.vue';

export default {
  name: "Home",

  components: {
    UpperMenuBar,
    AddNewUser,
    CreateProject
  },

};
</script>

<style scoped>

  .home{
    height: 100vh;
    background-color: #EEEEEE;
  }


</style>
