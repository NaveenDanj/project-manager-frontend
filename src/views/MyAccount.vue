<template>
  <div class="home">
    <UpperMenuBar />
    <MyAccountSettings />
    <MyWorkSpace />
  </div>
</template>



<script>
import UpperMenuBar from '@/components/WorkSpace/UpperMenuBar.vue';
import MyAccountSettings from '@/components/MyAccount/MyAccountSettings.vue';
import MyWorkSpace from '@/components/MyAccount/MyWorkSpace.vue';


export default {
    name: "MyAccount",

    components: {
        UpperMenuBar,
        MyAccountSettings,
        MyWorkSpace
    },
}
</script>

<style scoped>

  .home{
    height: 100vh;
    background-color: #EEEEEE;
  }


</style>