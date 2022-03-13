
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

      <div class="pa-3 d-flex justify-space-between grow">
        <div class="my-auto">
          <v-btn color="green" dark>
            IN REVIEW
            <v-icon>mdi-arrow-right-thin</v-icon>
          </v-btn>
        </div>

        <div class="justify-space-between d-flex" style="width: auto">
          <div class="mr-1">
            <v-avatar class="my-auto mr-1" color="red" dark size="35">
              <label style="color: white; font-weight: bold">L</label>
            </v-avatar>

            <v-avatar class="my-auto" color="purple" dark size="35">
              <label style="color: white; font-weight: bold">N</label>
            </v-avatar>
          </div>

          <v-avatar class="my-auto" outline dark size="35">
            <v-btn icon>
              <v-icon>mdi-flag</v-icon>
            </v-btn>
          </v-avatar>

          <v-btn icon>
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </div>
      </div>

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

        <v-textarea placeholder="Enter your task description here..." outlined>

        </v-textarea>


        <!-- task meta data -->
        <div class="pa-0">
          <table
            border="1"
            style="width: 100%; border-collapse: collapse; border-radius: 5px"
          >
            <tbody>
              <tr>
                <td class="pa-1">
                  <v-icon class="ml-1 mr-1">mdi-comment</v-icon>
                  <label style="font-weight:bold;">Comments</label>
                </td>
                <td class="pa-1">

                  <textarea
                    style="width: 100%; border: 1px solid black; padding-left: 5px"
                    type="text"
                    rows="1"
                  ></textarea>
                </td>
              </tr>

              <tr>
                <td>
                  <v-icon class="ml-1 mr-1">mdi-heart-remove</v-icon>
                  <label style="font-weight:bold;">Risk</label>
                </td>

                <td class="pa-1">
                  <select
                    style="width: 100%; border: 1px solid black; padding-left: 5px"
                  >
                    <option>Very Likely</option>
                    <option>Likely</option>
                    <option>At Risk</option>
                    <option>High Risk</option>
                    <option>Low Risk</option>
                  </select>
                </td>

              </tr>

              <tr>
                <td>
                  <v-icon class="ml-1 mr-1"> mdi-flag-checkered </v-icon>
                  <label style="font-weight:bold;">Sprint Goal</label>
                </td>

                <td class="pa-1">
                  <select
                    style="width: 100%; border: 1px solid black; padding-left: 5px"
                  >
                    <option>Goal 1</option>
                    <option>Goal 2</option>
                  </select>
                </td>

              </tr>

              <tr>
                <td>
                  <v-icon class="ml-1 mr-1"> mdi-clipboard-text-clock</v-icon>
                  <label style="font-weight:bold;">Due Date</label>
                </td>

                <td class="pa-1">
                  <input
                    type="date"
                    style="width: 100%; border: 1px solid black; padding-left: 5px"
                  />
                  
                </td>

              </tr>

            </tbody>

          </table>
        </div>

        <!-- sub task list -->
        <TodoList />


      </v-card-text>


    </v-card>
  </v-dialog>
</template>

<script>

import TodoList from './components/TodoList.vue'


export default {

  components : {
    TodoList
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