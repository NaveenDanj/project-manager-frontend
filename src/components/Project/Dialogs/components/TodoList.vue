<template>
  <div class="mt-5">
    <h2>TO DO</h2><br />

    <label style="font-weight:bold;">6 SUBTASKS</label>

    <v-list class="pa-3">

        <v-list-item v-for="i in [1,2,3,4,5,6]" :key="i" dense>

            <v-list-item-icon>
                <v-btn icon>
                    <v-icon>mdi-delete</v-icon>
                </v-btn>
            </v-list-item-icon>

            <v-list-item-content class="mt-2">
                <label>CI/CD for Backend and Frontend</label>
            </v-list-item-content>

        </v-list-item>

    </v-list>
    
    <div class="pl-3 pr-3 mt-0">
        <v-text-field >
            <v-btn icon slot="append">
                <v-icon
                    color="red"
                >
                    mdi-plus
                </v-icon>
            </v-btn>
            
    </v-text-field>
    </div>
    


  </div>
</template>