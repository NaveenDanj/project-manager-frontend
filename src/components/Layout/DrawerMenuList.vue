<template>
  <v-list dense>
    <v-list-item v-for="item in items" :key="item.title" link>
      <v-list-item-icon>
        <v-icon>{{ item.icon }}</v-icon>
      </v-list-item-icon>

      <v-list-item-content>
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script>
export default {
  data: () => ({
    items: [
      { title: "Work Space", icon: "mdi-home-city" },
      { title: "My Account", icon: "mdi-account" },
      { title: "Notifications", icon: "mdi-bell" },
    ],
  }),
};
</script>