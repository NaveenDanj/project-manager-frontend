<template>
    <v-dialog
        v-model="dialog"
        max-width="650px"
        transition="dialog-bottom-transition"
        persistent
    >

        <v-card>

            <v-toolbar dark color="primary" elevation="0">
                <v-btn icon dark @click="handleCancel">
                <v-icon>mdi-close</v-icon>
                </v-btn>

                <v-toolbar-title>{{ title }}</v-toolbar-title>
            </v-toolbar>


            <v-card-text class="mt-5">

                <h3>{{ question }}</h3>

            </v-card-text>

            <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn color="red" dark text @click="handleCancel">Cancel</v-btn>
                <v-btn color="primary" text @click="handleOk">OK</v-btn>
            </v-card-actions>

        </v-card>

    </v-dialog>

</template>

<script>
export default {

    props : ['title' , 'question' , 'dialog'],

    methods : {

        handleCancel(){
            this.$emit('comfirmResult' , false);
        },

        handleOk(){
            this.$emit('comfirmResult' , true);
        }

    }
    
}
</script>