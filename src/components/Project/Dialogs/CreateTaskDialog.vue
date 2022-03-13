
<template>
  <v-dialog
    v-model="dialog"
    max-width="650px"
    transition="dialog-bottom-transition"
  >
    <template v-slot:activator="{ on, attrs }">
      <!-- <v-btn color="primary" dark v-bind="attrs" v-on="on">
          Open Dialog
        </v-btn> -->

      <v-chip class="btn" v-bind="attrs" v-on="on">
        <v-icon class="mr-1" x-small>mdi-plus </v-icon>
        <label class="btn">New Task</label>
      </v-chip>
    </template>

    <v-card>
      <v-toolbar dark color="primary">
        <v-btn icon dark @click="dialog = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>

        <v-toolbar-title>NEW TASK</v-toolbar-title>
        <v-spacer></v-spacer>

        <v-toolbar-items>
          <v-btn dark text @click="dialog = false"> Save </v-btn>
        </v-toolbar-items>
      </v-toolbar>

      <!-- task header -->
      <CreateTaskHeader />

      <v-divider></v-divider>

      <v-card-text class="mt-5">

        <v-text-field
          label="Task Title"
          auto-grow
          outlined
          rows="1"
          row-height="15"
          dense
          value="Cloud web project creation"
        ></v-text-field>

        <v-textarea placeholder="Enter your task description here..." outlined></v-textarea>

        <!-- task meta data -->
        <TaskMetaData />

        <!-- sub task list -->
        <TodoList />


      </v-card-text>


    </v-card>
  </v-dialog>
</template>

<script>

import TodoList from './components/TodoList.vue'
import TaskMetaData from './components/TaskMetaData.vue'
import CreateTaskHeader from './components/CreateTaskHeader.vue'


export default {

  components : {
    TodoList,
    TaskMetaData,
    CreateTaskHeader
  },

  data() {
    return {
      dialog: false,
      notifications: false,
      sound: true,
      widgets: false,

      items: [
        {
          text: "Projects 1",
          disabled: false,
          href: "breadcrumbs_dashboard",
        },
        {
          text: "Sprint 1 (22/2/2022 - 06/03/2022)",
          disabled: false,
          href: "breadcrumbs_link_1",
        },
        {
          text: "COMPLETED",
          disabled: true,
          href: "breadcrumbs_link_2",
        },
      ],
    };
  },
};
</script>

<style scoped>
</style>