<template>

  <div class="home">

    <UpperMenuBar />
    <NotificationCard/>
    <NotificationCard/>
    <NotificationCard/>
    <NotificationCard/>
    <NotificationCard/>
    <NotificationCard/>
    <NotificationCard/>
    <NotificationCard/>
  </div>

</template>

<script>
import UpperMenuBar from '@/components/WorkSpace/UpperMenuBar.vue';
import NotificationCard from '@/components/Notification/NotificationCard.vue';

export default {

  components : {
    UpperMenuBar,
    NotificationCard
  }

}
</script>

<style scoped>

  .home{
    background-color: #EEEEEE;
    min-height : 100vh;
  }


</style>
