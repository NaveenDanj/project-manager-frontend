<template>

  <v-container>

    <v-data-table
      :headers="dessertHeaders"
      :items="desserts"
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


  export default {

    components : {
      AddNewProjectDialog,
      AddUserToProject
    },

    data () {
      return {

        expanded: [],

        singleExpand: false,

        dessertHeaders: [
            {
                text: '#Project ID',
                align: 'start',
                sortable: false,
                value: 'id',
            },
            { text: 'Project Name', value: 'project_name' },
            { text: 'Client Name', value: 'client_name' },
            { text: 'Start Date', value: 'start_date' },
            { text: 'Members', value: 'members' },
            { text: 'ACTION', value: 'action' },
        ],

        desserts: [
          
          {
            id : 1,
            project_name: 'Authentication Application creation for future usage',
            client_name: 'Naveen | Lahiru',
            start_date: '22/2/2022',
            members: 'High',
          },

          {
            id : 2,
            project_name: 'Authentication Application creation for future usage',
            client_name: 'Naveen | Lahiru',
            start_date: '22/2/2022',
            members: 'High',
          },

          {
            id : 3,
            project_name: 'Authentication Application creation for future usage',
            client_name: 'Naveen | Lahiru',
            start_date: '22/2/2022',
            members: 'High',
          },

           
        ],
      
      }
    
    },
  }
</script>