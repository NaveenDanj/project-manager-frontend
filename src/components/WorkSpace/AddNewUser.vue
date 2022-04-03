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

      <template v-slot:[`item.action`]="{item}">
        <div class="dflex">
          
          <v-btn @click="handleOpenConfirm(item)" icon x-small>
            <v-icon>mdi-delete</v-icon>
          </v-btn>
        </div>
      </template>
      
    </v-data-table>

    <CommonComfirmDialog 
      :dialog="confirmDialogShow" 
      title="Delete user from this workspace"
      question="Are you sure you want to delete this user from this workspace?"
      @comfirmResult="handleComfirmResult"
    />


  </v-container>
</template>

<script>

import AddNewUserDialog from './Dialog/AddNewUserDialog.vue';
import CommonComfirmDialog from '../Dialogs/CommonComfirmDialog.vue';

import {getWorkspace , removeUser} from './../../Repository/Workspace'

export default {

  components : {
    AddNewUserDialog,
    CommonComfirmDialog
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

      selectedItem : null,
      confirmDialogShow : false,


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


    },

    handleOpenConfirm(item){
      console.log(item);
      this.selectedItem = item;
      this.confirmDialogShow = true;
    },

    async handleComfirmResult(result){

      if(result){

        // api call to delete user from workspace
        let data = {
          workspace_id : localStorage.getItem('current_workspace'),
          user_id : this.selectedItem.id
        }

        try{
          let workspace_id = localStorage.getItem('current_workspace');
          let response = await removeUser(data , workspace_id);
          this.loadWorkspaceUsers();

        }catch(err){
          console.log(err);
        }

        this.confirmDialogShow = false;
        
      }else{
        this.confirmDialogShow = false;
      }
      this.selectedItem = null;

    }


  }




};
</script>