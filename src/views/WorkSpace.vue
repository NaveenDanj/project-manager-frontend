<template>
  <div class="home">
    <UpperMenuBar />

    <div class="pa-5">
      <h3>Work space Settings</h3> 

      <v-chip class="btn mt-2 mb-2">
        <v-icon class="mr-1" x-small>mdi-location-exit</v-icon>
        <label class="btn">Leave Workspace</label>
      </v-chip>

      <br />

      <AddNewUser />
      <CreateProject />

    </div>

    <div class="pa-5">
      <h3>Workspace genaral settings</h3>
      <br />
      <WorkspaceGenaralSettings />
    </div>



  </div>
</template>

<script>
// @ is an alias to /src
import UpperMenuBar from '@/components/WorkSpace/UpperMenuBar.vue';
import AddNewUser from '@/components/WorkSpace/AddNewUser.vue';
import CreateProject from '@/components/WorkSpace/CreateProject.vue';
import WorkspaceGenaralSettings from '@/components/WorkSpace/WorkspaceGenaralSettings.vue';


export default {
  name: "Home",

  components: {
    UpperMenuBar,
    AddNewUser,
    CreateProject,
    WorkspaceGenaralSettings
  },

};
</script>

<style scoped>

  .home{
    min-height: 100vh;
    background-color: #EEEEEE;
  }

</style>
