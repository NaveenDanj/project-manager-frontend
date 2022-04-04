<template>
  <v-dialog
    v-model="dialog"
    max-width="650px"
    transition="dialog-bottom-transition"
    persistent
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="primary" v-bind="attrs" v-on="on">ADD NEW PROJECT</v-btn>
    </template>

    <v-card>
      <v-toolbar dark color="primary" elevation="0">
        <v-btn icon dark @click="dialog = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>

        <v-toolbar-title>ADD NEW PROJECT</v-toolbar-title>
      </v-toolbar>

      <v-card-text class="mt-5">
        <v-form lazy-validation ref="submitForm" @submit.prevent="handleFormSubmit">
          <div v-if="error != '' ">
            <v-alert dense outlined type="error">{{ error }}</v-alert
            ><br />
          </div>

          <v-row no-gutters>
            <v-col cols="12" md="6" sm="12">
              <v-text-field
                label="Project Name"
                outlined
                dense
                placeholder="Enter project name"
                rounded
                v-model="form.name"
                :rules="[
                  (v) => !!v || 'Project name is required',
                  (v) =>
                    v.length <= 50 ||
                    'Project name must be less than 50 characters',
                ]"
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="6" sm="12">
              <v-text-field
                label="Client Name"
                placeholder="Enter client name"
                outlined
                dense
                rounded
                v-model="form.client_name"
                :rules="[
                  (v) => !!v || 'Client name is required',
                  (v) =>
                    v.length <= 50 ||
                    'Client name must be less than 50 characters',
                ]"
              ></v-text-field>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12" md="12" sm="12">
              <v-textarea
                label="Description"
                placeholder="Enter project description"
                outlined
                dense
                rounded
                v-model="form.description"
                :rules="[
                  (v) => !!v || 'Description is required',
                  (v) =>
                    v.length <= 255 ||
                    'Description must be less than 255 characters',
                ]"
              ></v-textarea>
            </v-col>
          </v-row>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn color="red" text @click="dialog = false">Cancel</v-btn>
            <v-btn color="primary" text type="submit">Add</v-btn>
          </v-card-actions>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>

import {createProject} from '../../../Repository/Project';

export default {

  data: () => ({
    dialog: false,
    error: "",
    form: {
      name: "",
      client_name: "",
      description: "",
      workspace_id : null
    },
  }),

  methods: {

    async handleFormSubmit() {
      this.error = "";

      if(!this.$refs.submitForm.validate()){
        return;
      }


      try {

        this.form.workspace_id = localStorage.getItem('current_workspace');
        const response = await createProject(this.form);

        this.dialog = false;
        this.form = {
          name: "",
          client_name: "",
          description: "",
          started_date: "",
        };

        
      } catch (e) {
        this.error = e.message;
      }
    },


  },
};
</script>