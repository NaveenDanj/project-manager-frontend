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
            <v-icon>mdi-delete</v-icon>
          </v-btn>
        </div>
      </template>
      
    </v-data-table>
  </v-container>
</template>

<script>

import AddNewUserDialog from './Dialog/AddNewUserDialog.vue';
import {getWorkspace} from './../../Repository/Workspace'

export default {

  components : {
    AddNewUserDialog
  },

  created(){
    this.loadWorkspaceUsers();
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
        { text: "Full Name", value: "name" },
        { text: "Email", value: "email" },
        { text: "Added Date", value: "created_at" },
        { text: "ACTION", value: "action" },
      ],

      users: [],
    };
  },

  methods : {

    async loadWorkspaceUsers(){

      this.users = [];

      try{
        let workspace_id = localStorage.getItem('current_workspace');
        let response = await getWorkspace(workspace_id);
        this.users = response.data.workspace.users;

      }catch(err){
        console.log(err);
      }


    }


  }




};
</script>