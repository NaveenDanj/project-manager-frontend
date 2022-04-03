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
            />
          </div>

          <div>
            <label style="font-weight: bold">Email</label>
            <v-text-field readonly :value="email" type="email" dense placeholder="Enter your email" />
          </div>

          <div style="width: 100%">
            <v-btn type="submit" class="mr-2" color="primary">Update</v-btn>
          </div>

        </div>

      </div>

    </v-form>

    <form class="mt-10">
        
        <div class="d-flex" style="width: 100%">
            
            <div class="ml-16" style="width: 100%">

                <div>
                    <label style="font-weight: bold">Current Password</label>
                    <v-text-field
                      type="password"
                      dense
                      placeholder="Enter your current password"
                    />
                </div>

                <div>
                    <label style="font-weight: bold">New Password</label>
                    <v-text-field
                    type="password"
                    dense
                    placeholder="Enter your new password"
                    />
                </div>

                <div>
                    <label style="font-weight: bold">Confirm new Password</label>
                    <v-text-field
                    type="password"
                    dense
                    placeholder="Re enter your new password"
                    />
                </div>

                <div style="width: 100%">
                    <v-btn class="mr-2" color="primary">Reset</v-btn>
                </div>


            </div>

        </div>

    </form>

    <br />
  </div>
</template>


<script>

import {updateUser} from '../../Repository/Auth';

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
      email : '',
      error : '',
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

      try{

        let response = await updateUser(data);
        this.$store.commit('setCurrentUser', response.data.user);

        this.form.name = response.data.user.name;

      }catch(err){
        console.log(err.response.data);
      }


    }


  }


}
</script>