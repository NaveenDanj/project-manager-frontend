<template>
    <v-dialog
        v-model="dialog"
        max-width="650px"
        transition="dialog-bottom-transition"
        persistent
    >

        <template v-slot:activator="{ on, attrs }">
            <v-btn color=" primary " v-bind="attrs" v-on="on">ADD SPRINT</v-btn>
        </template>

        <v-card>
            <v-toolbar dark color="primary" elevation="0">
                <v-btn icon dark @click="dialog = false">
                <v-icon>mdi-close</v-icon>
                </v-btn>

                <v-toolbar-title>ADD NEW SPRINT</v-toolbar-title>
            </v-toolbar>

            <v-card-text class="mt-5">
                
                <form>

                    <div v-if="false">
                        <v-alert dense outlined type="error">
                        I'm a dense alert with the <strong>outlined</strong> prop and a
                        <strong>type</strong> of error </v-alert
                        ><br />
                    </div>

                    <v-row no-gutters>

                        <v-col cols="12" md="6" sm="12">

                            <v-text-field
                                label="Sprint Name"
                                outlined
                                dense
                                placeholder="Sprint name"
                                rounded
                            ></v-text-field>

                        </v-col>

                        <v-col cols="12" md="6" sm="12">

                            <v-select
                                :items="['POS Development' , 'Project 2' , 'Project 3']"
                                label="Project Name"
                                placeholder="Select Project"
                                outlined
                                dense
                                rounded
                            ></v-select>

                        </v-col>

                    </v-row>

                    <v-row no-gutters>

                        <v-col cols="12" md="12">

                            <v-text-field
                                type="date"
                                label="Sprint Starting Date"
                                placeholder="Enter select the starting date"
                                outlined
                                dense
                                rounded
                            ></v-text-field>

                        </v-col>

                    </v-row>

                    <v-row no-gutters>

                        <v-col cols="12" md="12">

                            <v-text-field
                                type="date"
                                label="Sprint Ending Date"
                                placeholder="Enter select the ending date"
                                outlined
                                dense
                                rounded
                            ></v-text-field>

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
    
    data(){
        return {
            dialog : false,
        }
    }

}
</script>