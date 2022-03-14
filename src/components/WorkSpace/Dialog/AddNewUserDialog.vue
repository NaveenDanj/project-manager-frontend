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
                
                <form>

                    <div v-if="false">
                        <v-alert
                            dense
                            outlined
                            type="error"
                        >
                            I'm a dense alert with the <strong>outlined</strong> prop and a <strong>type</strong> of error
                        </v-alert><br />
                    </div>
                    


                    <v-row no-gutters>

                        <v-col cols="12" md="6" sm="12">
                            <v-text-field
                                label="Full Name"
                                outlined
                                dense
                                placeholder="Enter user full name"
                                rounded
                            ></v-text-field>
                        </v-col>

                        <v-col cols="12" md="6" sm="12">
                            <v-text-field
                                type="email"
                                label="Email"
                                placeholder="Enter user email"
                                outlined
                                dense
                                rounded
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
                            ></v-select>
                        </v-col>

                    </v-row>



                </form>

            </v-card-text>

            <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn color="primary" text @click="dialog = false">Cancel</v-btn>
                <v-btn color="primary" text @click="dialog = false">Add</v-btn>
            </v-card-actions>

        </v-card>

    </v-dialog>

</template>

<script>
export default {
    
    data : (() => ({
        dialog : false,
    }))

}
</script>