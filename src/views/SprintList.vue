<template>
  <div class="home">
    <UpperMenuBar />
    <SprintListLayout />
  </div>
</template>

<script>
import UpperMenuBar from '@/components/WorkSpace/UpperMenuBar.vue';
import SprintListLayout from '@/components/Project/SprintListLayout.vue';

export default {

    components : {
        UpperMenuBar,
        SprintListLayout
    }
    
}
</script>

<style scoped>

  .home{
    background-color: #EEEEEE;
    min-height : 100vh;
  }


</style>