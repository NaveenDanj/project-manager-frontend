<template>
  <div class="home">
    <UpperMenuBar />
    <SprintLayout />
  </div>
</template>

<script>

import UpperMenuBar from '@/components/WorkSpace/UpperMenuBar.vue';
import SprintLayout from '@/components/Project/SprintLayout.vue';

export default {
    
    name: "Project",

    components : {
        UpperMenuBar,
        SprintLayout
    }

}
</script>

<style scoped>

  .home{
    height: 100vh;
    background-color: #EEEEEE;
  }


</style>