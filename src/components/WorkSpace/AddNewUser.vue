<template>
  <v-container>
    <v-data-table
      :headers="headers"
      :items="users"
      item-key="id"
      hide-default-footer
      class="elevation-1"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title style="font-weight: bold"
            >Users in this work space</v-toolbar-title
          >
          <v-spacer></v-spacer>

          <AddNewUserDialog />

          <!-- <v-switch
            v-model="singleExpand"
            label="Single expand"
            class="mt-2"
          ></v-switch> -->
        </v-toolbar>
      </template>

      <template v-slot:[`item.action`]="{}">
        <div class="dflex">
          <v-btn icon x-small>
            <v-icon>mdi-plus</v-icon>
          </v-btn>

          <v-btn icon x-small>
            <v-icon>mdi-delete</v-icon>
          </v-btn>
        </div>
      </template>
      
    </v-data-table>
  </v-container>
</template>

<script>

import AddNewUserDialog from './Dialog/AddNewUserDialog.vue';


export default {

  components : {
    AddNewUserDialog
  },

  data() {
    return {

      headers: [
        {
          text: "#User ID",
          align: "start",
          sortable: false,
          value: "id",
        },
        { text: "Full Name", value: "fullname" },
        { text: "Email", value: "email" },
        { text: "Role", value: "role" },
        { text: "Added Date", value: "added" },
        { text: "ACTION", value: "action" },
      ],

      users: [
        {
          id: 1,
          fullname: "Naveen Hettiwaththa",
          email: "naveenhettiwaththa@gmail.com",
          role : "Admin",
          added: "22/2/2022",
        },
        {
          id: 2,
          fullname: "Naveen Hettiwaththa",
          email: "naveenhettiwaththa@gmail.com",
          role : "User",
          added: "22/2/2022",
        },
        {
          id: 3,
          fullname: "Naveen Hettiwaththa",
          email: "naveenhettiwaththa@gmail.com",
          role : "User",
          added: "22/2/2022",
        },

      ],
    };
  },
};
</script>