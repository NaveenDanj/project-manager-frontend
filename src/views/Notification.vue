<template>

  <div class="home">

    <UpperMenuBar />

    <v-card class="justify-center mx-auto mt-5" style="width : 65%" >

      <label>Notification</label>

    </v-card>

    
  </div>

</template>

<script>
import UpperMenuBar from '@/components/WorkSpace/UpperMenuBar.vue';


export default {

  components : {
    UpperMenuBar,
  }

}
</script>

<style scoped>

  .home{
    background-color: #EEEEEE;
    min-height : 100vh;
  }


</style>
