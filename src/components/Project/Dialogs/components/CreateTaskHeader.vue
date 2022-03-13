<template>
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
</template>