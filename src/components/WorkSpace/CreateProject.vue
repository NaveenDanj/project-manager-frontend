<template>

  <v-container>

    <v-data-table
      :headers="headers"
      :items="projects"
      :single-expand="singleExpand"
      :expanded.sync="expanded"
      item-key="id"
      hide-default-footer
      class="elevation-1"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title style="font-weight: bold">Projects in this work space</v-toolbar-title>
          <v-spacer></v-spacer>

          <AddNewProjectDialog />

          <!-- <v-switch
            v-model="singleExpand"
            label="Single expand"
            class="mt-2"
          ></v-switch> -->
        </v-toolbar>
      </template>

      <template v-slot:[`item.action`]="{}">

        <div class="dflex">
          
          <AddUserToProject />

          <!-- <v-btn icon x-small>
            <v-icon>mdi-delete</v-icon>
          </v-btn> -->

        </div>

      </template>

      

    </v-data-table>
    
  </v-container>
  
</template>

<script>

  import AddNewProjectDialog from './Dialog/AddNewProjectDialog.vue';
  import AddUserToProject from './Dialog/AddUserToProject.vue';
  import {getProjects} from '../../Repository/Project';

  export default {

    components : {
      AddNewProjectDialog,
      AddUserToProject
    },


    created(){
      this.loadProjects();
    },


    data () {
      return {

        expanded: [],

        singleExpand: false,

        headers: [
            {
                text: '#Project ID',
                align: 'start',
                sortable: false,
                value: 'id',
            },
            { text: 'Project Name', value: 'name' },
            { text: 'Client Name', value: 'client_name' },
            { text: 'Start Date', value: 'created_at' },
            { text: 'ACTION', value: 'action' },
        ],

        projects: [],
      
      }
    
    },

    methods : {

      async loadProjects(){

        try{

          let response = await getProjects();
          this.projects = response.data.workspace.projects;

        }catch(err){
          console.log(err);
        }

      }


    }


  }
</script>