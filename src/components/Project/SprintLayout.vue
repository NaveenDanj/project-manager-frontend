<template>
    
    <div class="pa-5">
        <v-container class="mainContainer pa-2">

            <div class="d-flex">
                <v-chip class="mr-1">
                    <v-btn icon x-small class="mr-1">
                        <v-icon>mdi-chevron-down </v-icon>
                    </v-btn>
                    <label>Sprint 1 (22/2/2022 - 06/03/2022)</label>
                </v-chip>

                <CreateTaskDialog />

                <v-chip @click="() => this.$router.push('/sprintlist')" class="btn ml-1">
                    <v-icon class="mr-1" x-small>mdi-clipboard-list-outline </v-icon>
                    <label class="btn">Sprint List</label>
                </v-chip>

            </div>
            
            <div class="pa-5">
                
                <CompletedSprintList />
                <InProgressSprintList />
                <PendingSprintList />
                <OpenSprintList />

            </div>
            
        </v-container>

    </div>
    

</template>

<script>

import CompletedSprintList from './ListComponents/CompletedSprintList.vue'
import InProgressSprintList from './ListComponents/InProgressSprintList.vue'
import PendingSprintList from './ListComponents/PendingSprintList.vue'
import OpenSprintList from './ListComponents/OpenSprintList.vue'
import CreateTaskDialog from './Dialogs/CreateTaskDialog.vue'


export default {
    
    components : {
        CompletedSprintList,
        InProgressSprintList,
        PendingSprintList,
        OpenSprintList,
        CreateTaskDialog
    }

}
</script>

<style scoped>

    .mainContainer {

        background-color : '#EEEEEE';
        border : 0.2px solid gray;
    }

    .btn {
        cursor: pointer;
    }


</style>