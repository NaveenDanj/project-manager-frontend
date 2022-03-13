<template>
  <div class="home">
    <UpperMenuBar />
    <MyAccountSettings />
  </div>
</template>



<script>
import UpperMenuBar from '@/components/WorkSpace/UpperMenuBar.vue';
import MyAccountSettings from '@/components/MyAccount/MyAccountSettings.vue';

export default {
    name: "MyAccount",

    components: {
        UpperMenuBar,
        MyAccountSettings
    },
}
</script>

<style scoped>

  .home{
    height: 100vh;
    background-color: #EEEEEE;
  }


</style>