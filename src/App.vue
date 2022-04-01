<template>
  <div>

    <!-- authenticated user -->
    <v-app v-if=" currentRoute != 'Login' && currentRoute != 'Register' ">
      <v-navigation-drawer
        app
        v-model="drawer"
        :mini-variant.sync="mini"
        permanent
      >
        <v-list-item class="px-2">
          <v-list-item-avatar>
            <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
          </v-list-item-avatar>

          <v-list-item-title>
            John Leider<br />
            <label style="font-size: 12px; font-weight: bold"
              >@ShiftX Media
            </label>
          </v-list-item-title>

          <v-btn icon @click.stop="mini = !mini">
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
        </v-list-item>

        <v-divider></v-divider>

        <DrawerMenuList />

        <v-divider></v-divider>

        <!-- workspace menu list -->
        <WorkSpaceMenuList />
      </v-navigation-drawer>

      <v-app-bar app color="white" dense elevation="1">
        <v-app-bar-nav-icon @click.stop="mini = !mini"></v-app-bar-nav-icon>

        <v-toolbar-title>
          <v-chip class="ma-2" color="pink" label text-color="white">P</v-chip>
          <label style="font-weight: bold">POS Development</label>
        </v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-menu left bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon v-bind="attrs" v-on="on">
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </template>

          <v-list>
            <v-list-item v-for="n in 5" :key="n" @click="() => {}">
              <v-list-item-title>Option {{ n }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-app-bar>

      <!-- Sizes your content based upon application components -->
      <v-main>
        <!-- Provides the application the proper gutter -->
        <div>
          <!-- If using vue-router -->
          <router-view></router-view>
        </div>
      </v-main>

      <v-footer app>
        <!-- -->
      </v-footer>
    </v-app>

    <!-- unauthenticated user -->
    <v-app v-else>
      <router-view></router-view>
    </v-app>


  </div>
</template>

<script>
import DrawerMenuList from "@/components/Layout/DrawerMenuList.vue";
import WorkSpaceMenuList from "@/components/Layout/WorkSpaceMenuList.vue";

export default {
  name: "App",

  watch:{
    $route (to, from){
      console.log('to', to , 'from', from);
      this.currentRoute = to.name;
    }
  },

  components: {
    DrawerMenuList,
    WorkSpaceMenuList,
  },

  data: () => ({
    drawer: true,
    mini: false,
    currentRoute: '',
  }),
};
</script>
