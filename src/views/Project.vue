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
    background-color: #EEEEEE;
    min-height : 100vh;
  }


</style>