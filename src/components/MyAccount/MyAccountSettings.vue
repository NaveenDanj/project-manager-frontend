<template>
  <div class="pa-5">
    <h3>My Settings</h3>
    <br /><br />

    <v-form @submit.prevent="handleUpdateUserData" ref="detailForm" lazy-validation>

      <div class="d-flex" style="width: 100%">
        <v-avatar class="mr-5">
          <img src="https://cdn.vuetifyjs.com/images/lists/2.jpg" />
        </v-avatar>

        

        <div style="width: 100%">

          <v-alert
              class="mb-2"
              dense
              outlined
              type="error"
              v-if="error != '' "
            > {{ error }} </v-alert><br />

          <div>
            <label style="font-weight: bold">Full Name</label>
            <v-text-field
              type="text"
              dense
              placeholder="Enter your full name"
              v-model="form.name"
              required
            />
          </div>

          <div>
            <label style="font-weight: bold">Email</label>
            <v-text-field readonly :value="email" type="email" dense placeholder="Enter your email" aria-required />
          </div>

          <div style="width: 100%">
            <v-btn type="submit" class="mr-2" color="primary">Update</v-btn>
          </div>

        </div>

      </div>

    </v-form>

    <v-form lazy-validation ref="resetPasswordForm" @submit.prevent="handleResetPassword" class="mt-10">
        
        <div class="d-flex" style="width: 100%">
            
            <div class="ml-16" style="width: 100%">

                <v-alert
                  class="mb-2"
                  dense
                  outlined
                  type="error"
                  v-if="error2 != '' "
                > {{ error2 }} </v-alert><br />


                <div>
                    <label style="font-weight: bold">Current Password</label>
                    <v-text-field
                      type="password"
                      dense
                      placeholder="Enter your current password"
                      v-model="resetPasswordForm.currentPassword"
                      :rules="[
                          v => !!v || 'Current Password is required',
                          v => (v && v.length >= 6) || 'Current Password must be at least 6 characters',
                      ]"
                    />
                </div>

                <div>
                    <label style="font-weight: bold">New Password</label>
                    <v-text-field
                      type="password"
                      dense
                      placeholder="Enter your new password"
                      v-model="resetPasswordForm.newPassword"
                      :rules="[
                          v => !!v || 'New Password is required',
                          v => (v && v.length >= 6) || 'New Password must be at least 6 characters',
                      ]"

                    />
                </div>

                <div>
                    <label style="font-weight: bold">Confirm new Password</label>
                    <v-text-field
                      type="password"
                      dense
                      placeholder="Re enter your new password"
                      v-model="resetPasswordForm.confirmNewPassword"
                      :rules="[
                          v => !!v || 'Confirm new Password is required',
                          v => (v && v.length >= 6) || 'Confirm new Password must be at least 6 characters',
                      ]"
                    />
                </div>

                <div style="width: 100%">
                    <v-btn type="submit" class="mr-2" color="primary">Reset</v-btn>
                </div>


            </div>

        </div>

    </v-form>

    <br />
  </div>
</template>


<script>

import {updateUser , resetPassword} from '../../Repository/Auth';

export default {
  
  created(){
    let currentUser = this.$store.state.currentUser;
    this.form.name = currentUser.name;
    this.email = currentUser.email;
  },

  data(){
    return{
      form : {
        name : ''
      },

      resetPasswordForm : {
        currentPassword : '',
        newPassword : '',
        confirmNewPassword : ''
      },


      email : '',
      error : '',
      error2 : ''
    }
  },

  methods : {

    async handleUpdateUserData(){

      if( !this.$refs.detailForm.validate() ){
        return;
      }

      let data = {
        name : this.form.name,
      }

      this.error = '';

      try{

        let response = await updateUser(data);
        this.$store.commit('setCurrentUser', response.data.user);
        this.form.name = response.data.user.name;

      }catch(err){
        console.log(err.response.data);
        this.error = err.response.data.error;
      }


    },

    async handleResetPassword(){

      if( !this.$refs.resetPasswordForm.validate() ){
        return;
      }

      if( this.resetPasswordForm.newPassword != this.resetPasswordForm.confirmNewPassword ){
        this.error2 = 'New password and confirm new password does not match';
        return;
      }

      let data = {
        password : this.resetPasswordForm.currentPassword,
        new_password : this.resetPasswordForm.newPassword,
      }

      this.error2 = '';

      try{

        let response = await resetPassword(data);
        this.$store.commit('setCurrentUser', response.data.user);
        this.form.name = response.data.user.name;

      }catch(err){
        console.log(err.response.data);
        this.error2 = err.response.data.message;
      }

    }


  }


}
</script>