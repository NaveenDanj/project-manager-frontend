<template>

  <v-container>

    <v-data-table
      :headers="dessertHeaders"
      :items="desserts"
      :single-expand="singleExpand"
      :expanded.sync="expanded"
      item-key="id"
      show-expand
      hide-default-footer
      class="elevation-0"
    >
    
      <template v-slot:top>

        <v-toolbar flat>

          <v-toolbar-title style="font-weight:bold;">PENDING</v-toolbar-title>
          <v-spacer></v-spacer>

          <v-btn color=" primary ">ADD TASK</v-btn>

          <!-- <v-switch
            v-model="singleExpand"
            label="Single expand"
            class="mt-2"
          ></v-switch> -->

        </v-toolbar>

      </template>

      <template v-slot:[`item.action`]="{  }">
        <div class="dflex">
            <v-btn icon x-small>
                <v-icon>mdi-plus</v-icon>
            </v-btn>

            <v-btn icon x-small>
                <v-icon>mdi-delete</v-icon>
            </v-btn>

        </div>
      </template>


      <template v-slot:expanded-item="{ headers, item }">
        <td :colspan="headers.length">More info about {{ item.name }}</td>
      </template>

    </v-data-table>

  </v-container>

</template>

<script>
  export default {
    data () {
      return {

        expanded: [],

        singleExpand: false,

        dessertHeaders: [
            {
                text: 'Task',
                align: 'start',
                sortable: false,
                value: 'task',
            },
            { text: 'ASSIGNEE', value: 'assignee' },
            { text: 'DUE DATE', value: 'due_date' },
            { text: 'PRIORITY', value: 'priority' },
            { text: 'ACTION', value: 'action' },
        ],

        desserts: [
          
            {
                id : 1,
                task: 'Authentication Application creation for future usage',
                assignee: 'Naveen | Lahiru',
                due_date: '22/2/2022',
                priority: 'High',
            },

            {
                id : 2,
                task: 'Authentication Application creation for future usage',
                assignee: 'Naveen | Lahiru',
                due_date: '22/2/2022',
                priority: 'High',
            },

            {
                id : 3,
                task: 'Authentication Application creation for future usage',
                assignee: 'Naveen | Lahiru',
                due_date: '22/2/2022',
                priority: 'High',
            },


            {
                id : 4,
                task: 'Authentication Application creation for future usage',
                assignee: 'Naveen | Lahiru',
                due_date: '22/2/2022',
                priority: 'High',
            },

            {
                id : 5,
                task: 'Authentication Application creation for future usage',
                assignee: 'Naveen | Lahiru',
                due_date: '22/2/2022',
                priority: 'High',
            },

            {
                id : 6,
                task: 'Authentication Application creation for future usage',
                assignee: 'Naveen | Lahiru',
                due_date: '22/2/2022',
                priority: 'High',
            },

        ],
      
      }
    
    },
  }
</script>