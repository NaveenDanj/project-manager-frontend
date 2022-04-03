<template>

    <v-dialog
        v-model="dialog"
        max-width="650px"
        transition="dialog-bottom-transition"
        persistent
    >

        <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" v-bind="attrs" v-on="on">ADD NEW USER</v-btn>
        </template>


        <v-card>
            <v-toolbar dark color="primary" elevation="0">
                <v-btn icon dark @click="dialog = false">
                <v-icon>mdi-close</v-icon>
                </v-btn>

                <v-toolbar-title>ADD NEW USER</v-toolbar-title>
            </v-toolbar>

            <v-card-text class="mt-5">
                
                <v-form ref="addUserForm" @submit.prevent="handleAddUserForm" lazy-validation>

                    <div v-if="error != '' ">
                        <v-alert
                            dense
                            outlined
                            type="error"
                        >
                            {{ error }}
                        </v-alert><br />
                    </div>
                    


                    <v-row no-gutters>


                        <v-col cols="12" md="12" sm="12">
                            <v-text-field
                                type="email"
                                label="Email"
                                placeholder="Enter user email"
                                outlined
                                dense
                                rounded
                                :rules="[
                                    v => !!v || 'Email is required',
                                    v => /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(v) || 'Email is invalid',
                                ]"
                                v-model="form.email"
                            ></v-text-field>
                        </v-col>

                    </v-row>

                    <v-row no-gutters>

                        <v-col cols="12" md="12" >
                            <v-select
                                :items="['Admin', 'User']"
                                outlined
                                dense
                                rounded
                                label="Select user role"
                                disabled
                            ></v-select>
                        </v-col>

                    </v-row>

                    <v-card-actions>
                        <v-spacer></v-spacer>

                        <v-btn color="primary" text @click="() => {
                            dialog = false;
                            error = '';
                            form.email = '';
                            $refs.addUserForm.reset();
                        } ">Cancel</v-btn>
                        
                        <v-btn color="primary" type="submit" text >Add</v-btn>
                    </v-card-actions>


                </v-form>

            </v-card-text>

        </v-card>

    </v-dialog>

</template>

<script>

import {inviteUser} from '../../../Repository/Workspace'

export default {
    
    data : (() => ({
        dialog : false,

        form : {
            email : ''
        },

        error : ''

    })),

    methods : {

        async handleAddUserForm(){
            
            if(!this.$refs.addUserForm.validate()){
                return;
            }

            let data = {
                email : this.form.email,
            }

            let workspace_id = localStorage.getItem('current_workspace');

            try{

                let response = await inviteUser(data , workspace_id);
                this.dialog = false;
                this.$refs.addUserForm.reset();
                this.form.email = '';

            }catch(err){
                this.error = err.response.data.message;
            }


        },



    }

}
</script>