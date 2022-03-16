<template>

    <v-container>

        <v-data-table
            :headers="headers"
            :items="sprints"
            item-key="id"
            class="elevation-0"
        >
        
        <template v-slot:top>

            <v-toolbar flat>

                <v-toolbar-title style="font-weight:bold;">Sprint List</v-toolbar-title>
                <v-spacer></v-spacer>

                <AddSprintDialog />

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

        </v-data-table>

    </v-container>

</template>

<script>

import AddSprintDialog from '@/components/Project/Dialogs/AddSprintDialog.vue'

export default {

    components : {
        AddSprintDialog
    },
    
    data () {
      return {

        headers: [
            {
                text: 'Sprint Name',
                align: 'start',
                sortable: false,
                value: 'task',
            },
            { text: 'Project Name', value: 'assignee' },
            { text: 'Starting Date', value: 'due_date' },
            { text: 'Due Date', value: 'priority' },
            { text: 'ACTION', value: 'action' },
        ],

        sprints: [
          
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