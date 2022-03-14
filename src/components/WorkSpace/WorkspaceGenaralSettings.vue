<template>
    
    <v-container>

        <v-card>

            <v-card-text>
                
                <form>

                    <v-text-field 
                        dense
                        outlined
                        rounded
                        label="Workspace Name"
                    />

                    <v-text-field
                        dense
                        outlined
                        rounded
                        label="Workspace ID"
                        readonly
                    />

                    <v-textarea
                        dense
                        outlined
                        rounded
                        label="Workspace Description"
                    />

                    <v-btn color="primary" class="mr-1" rounded>Update</v-btn>
                    <v-btn color="error" rounded>Disable</v-btn>

                </form>

            </v-card-text>

        </v-card>

    </v-container>

</template>

<script>
export default {
    
}
</script>