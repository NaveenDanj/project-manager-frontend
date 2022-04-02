<template>

    <div class="pa-5">
        <h3>My Workspace</h3>

        <div class="d-flex">

            <v-avatar style="width : 90px; height : 90px;" dark class="red mt-5 mr-3">
                <label style="color:white; font-weight:bold; font-size : 25px;">K</label>
            </v-avatar>

            <v-avatar style="width : 90px; height : 90px; border : 1px solid black;" dark class="mt-5">
                <AddNewWorkspace />
            </v-avatar>


        </div>

        

    </div>

</template>


<script>
import AddNewWorkspace from "./Dialogs/AddNewWorkspace.vue";


export default {
    
    components : {
        AddNewWorkspace
    }

}
</script>