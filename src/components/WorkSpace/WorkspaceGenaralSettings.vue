<template>
    
    <v-container>

        <v-card>

            <v-card-text>
                
                <v-form ref="form" @submit.prevent="handleUpdateWorkspace" lazy-validation>
                    
                    <v-alert v-if="error != '' " type="error" outlined dense>{{error}}</v-alert>

                    <v-text-field 
                        dense
                        outlined
                        rounded
                        label="Workspace Name"
                        placeholder="Enter workspace name"
                        :rules="[
                            v => !!v || 'Workspace name is required',
                            v => (v && v.length <= 50) || 'Workspace name must be less than 50 characters',
                        ]"
                        v-model="form.name"
                    />

                    <v-text-field
                        dense
                        outlined
                        rounded
                        label="Workspace ID"
                        readonly
                        :value="workspaceId"
                    />

                    <v-textarea
                        dense
                        outlined
                        rounded
                        label="Workspace Description"
                        placeholder="Enter workspace description"
                        :rules="[
                            v => !!v || 'Workspace Description is required',
                            v => (v && v.length <= 255) || 'Workspace Description must be less than 255 characters',
                        ]"
                        v-model="form.description"
                    />

                    <v-btn type="submit" color="primary" class="mr-1" rounded>Update</v-btn>
                    <v-btn color="error" rounded>Disable</v-btn>

                </v-form>

            </v-card-text>

        </v-card>

    </v-container>

</template>

<script>

import {updateWorkspace , getWorkspace} from '../../Repository/Workspace';

export default {
    
    data(){
        return{
            form : {
                name : '',
                description : '',
            },
            workspaceId : null,
            error : ''
        }
    },

    created(){
        this.loadWorkspace();
    },

    methods : {

        async loadWorkspace(){
            try{
                let response = await getWorkspace();
                this.form.name = response.data.workspace.name;
                this.form.description = response.data.workspace.description;
                this.workspaceId = response.data.workspace.id;
            }catch(e){
                this.error = e.response.data.message;
            }
        },

        async handleUpdateWorkspace(){

            if(!this.$refs.form.validate()){
                return;
            }

            try{

                this.error = '';

                let response = await updateWorkspace(this.form , this.workspaceId);

                // update the workspace
                this.form.name = response.data.workspace.name;
                this.form.description = response.data.workspace.description;
                
                this.error = '';
            
            }catch(err){
                this.error = err.response.data.message;
            }

        }

    }


}
</script>