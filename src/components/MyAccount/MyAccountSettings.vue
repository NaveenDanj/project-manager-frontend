<template>
  <div class="pa-5">

    <h3>My Settings</h3>
    <br />

    <form>

      <div class="d-flex" style="width:100%">

        <v-avatar class="mr-5">
            <img src="https://cdn.vuetifyjs.com/images/lists/2.jpg"  />
        </v-avatar>

        <div style="width:100%">

          <div>
            <label style="font-weight: bold">Full Name</label>
            <v-text-field dense placeholder="Enter your full name" />
          </div>

          <div>
            <label style="font-weight: bold">Email</label>
            <v-text-field type="email" dense placeholder="Enter your email" />
          </div>

          <div>
            <label style="font-weight: bold">Password</label>
            <v-text-field
              type="password"
              dense
              placeholder="Enter your new password"
            />
          </div>

        </div>

      </div>

    </form><br/>

  </div>
</template>