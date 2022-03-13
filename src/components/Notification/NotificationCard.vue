<template>

    <v-card class="justify-center mx-auto mt-5" style="width : 65%" >
        
        <div>

            <v-card-title>
                <v-toolbar-title>
                    <v-btn icon x-small>
                        <v-icon>mdi-rectangle </v-icon>
                    </v-btn>
                    <label style="font-weight: bold; font-size : 15px;"> API creation for Backup data generation </label>
                </v-toolbar-title>
            </v-card-title>

            <v-divider></v-divider>

            <v-list class="pa-2">

                <div>

                    <v-list-item>
                    
                        <v-list-item-avatar>
                            <v-img src="https://cdn.vuetifyjs.com/images/lists/2.jpg"></v-img>
                        </v-list-item-avatar>
                        
                        <label>Naveen Hettiwaththa</label>

                        <v-chip class="ml-5" small color="green" dark>Added Watcher</v-chip>


                    </v-list-item>

                    <v-divider></v-divider>

                </div>

                <div>
                    <v-list-item>
                    
                        <v-list-item-avatar>
                            <v-img src="https://cdn.vuetifyjs.com/images/lists/2.jpg"></v-img>
                        </v-list-item-avatar>
                        
                        <label>Naveen Hettiwaththa</label>
                        
                        <v-chip class="ml-5 mr-2" small color="green" dark>CHANGED NAME</v-chip>

                        <label>API creation for Forgot Password</label>

                    </v-list-item>

                    <v-divider></v-divider>
                </div>

                



            </v-list>

        </div>

    </v-card>

</template>

<script>
export default {
    
}
</script>