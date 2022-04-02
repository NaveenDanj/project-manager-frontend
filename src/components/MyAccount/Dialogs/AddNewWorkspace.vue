<template>
    
    <v-dialog
        v-model="dialog"
        max-width="650px"
        transition="dialog-bottom-transition"
        persistent
    >

        <template v-slot:activator="{ on, attrs }">
            <v-btn icon text  v-bind="attrs" v-on="on">
                <label style="color:black; font-weight:bold; font-size : 25px;">+</label>
            </v-btn>
        </template>

        <v-card>

            <v-toolbar dark color="primary" elevation="0">
                <v-btn icon dark @click="() => {
                    dialog = false;
                    error = '';
                    workspaceName = '';
                    $refs.form.reset();
                }">
                <v-icon>mdi-close</v-icon>
                </v-btn>

                <v-toolbar-title>Add New Workspace</v-toolbar-title>
            </v-toolbar>

            <v-card-text class="mt-5">

                <v-form ref="form" lazy-validation @submit.prevent="handleAddWorkspace">

                    <v-alert v-if="error != '' " type="error" outlined dense>{{error}}</v-alert>

                    <v-text-field
                        label="Workspace Name"
                        outlined
                        dense
                        placeholder="Enter workspace name"
                        rounded
                        v-model="workspaceName"
                        :rules="[
                            v => !!v || 'Workspace name is required',
                            v => (v && v.length <= 191) || 'Workspace name must be less than 191 characters',
                        ]"

                    ></v-text-field>

                    <v-btn type="submit" rounded class="purple" dark >Add</v-btn>

                </v-form>


            </v-card-text>

        </v-card>

    </v-dialog>

</template>

<script>
export default {
    
    data(){
        return {
            workspaceName : '',
            dialog : false,
            error : '',
        }
    },

    methods : {

        handleAddWorkspace(){

            if( !this.$refs.form.validate() ){
                return;
            }

            let data = {
                workspaceName : this.workspaceName,
            }

        }

    }

}
</script>