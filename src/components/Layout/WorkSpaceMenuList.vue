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
      { title: "Project 1", icon: "mdi-folder-table" },
      { title: "Project 2", icon: "mdi-folder-table" },
      { title: "Project 3", icon: "mdi-folder-table" },
    ],
  }),
};
</script>