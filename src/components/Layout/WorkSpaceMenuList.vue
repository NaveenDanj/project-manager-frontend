<template>
  <div>
    <v-list dense>

        <v-list-item>
            <v-list-item-icon>
                <!-- <v-icon>mdi-home-city</v-icon> -->
            </v-list-item-icon>
    
            <v-list-item-content>
                <v-list-item-title style="font-weight: bold; font-size : 15px;">Projects</v-list-item-title>
            </v-list-item-content>
        </v-list-item>

      <v-list-item v-for="item in items" :key="item.title" link>
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
      { title: "Work Space", icon: "mdi-folder-table" },
      { title: "My Account", icon: "mdi-folder-table" },
      { title: "Notifications", icon: "mdi-folder-table" },
    ],
  }),
};
</script>