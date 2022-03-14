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

        <form>

          <div v-if="false">
            <v-alert dense outlined type="error">
              I'm a dense alert with the <strong>outlined</strong> prop and a
              <strong>type</strong> of error </v-alert
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
              ></v-text-field>

            </v-col>

            <v-col cols="12" md="6" sm="12">

              <v-text-field
                label="Client Name"
                placeholder="Enter client name"
                outlined
                dense
                rounded
              ></v-text-field>

            </v-col>

          </v-row>

          <v-row no-gutters>
            <v-col cols="12" md="12">

              <v-text-field
                type="date"
                label="Started Date"
                placeholder="Enter select the start date"
                outlined
                dense
                rounded
              ></v-text-field>

            </v-col>

          </v-row>

        </form>

      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn color="primary" text @click="dialog = false">Cancel</v-btn>
        <v-btn color="primary" text @click="dialog = false">Add</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {

    data : (() => ({
        dialog : false,
    }))

};
</script>