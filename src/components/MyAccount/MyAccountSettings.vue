<template>
  <div class="pa-5">
    <h3>My Settings</h3>
    <br /><br />

    <form>
      <div class="d-flex" style="width: 100%">
        <v-avatar class="mr-5">
          <img src="https://cdn.vuetifyjs.com/images/lists/2.jpg" />
        </v-avatar>

        <div style="width: 100%">
          <div>
            <label style="font-weight: bold">Full Name</label>
            <v-text-field
              type="text"
              dense
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label style="font-weight: bold">Email</label>
            <v-text-field type="email" dense placeholder="Enter your email" />
          </div>

          <div style="width: 100%">
            <v-btn class="mr-2" color="primary">Update</v-btn>
            <v-btn color="red" dark>Reset</v-btn>
          </div>

        </div>

      </div>

    </form>

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