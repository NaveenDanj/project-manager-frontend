<template>
    
    <div class="pa-5">
        <v-container class="mainContainer pa-2">

            <v-chip class="mr-1">
                <v-btn icon x-small class="mr-1">
                    <v-icon>mdi-chevron-down </v-icon>
                </v-btn>
                <label>Sprint 1 (22/2/2022 - 06/03/2022)</label>
            </v-chip>

            <v-chip class="btn">
                <v-icon class="mr-1" x-small>mdi-plus </v-icon>
                <label class="btn">New Task</label>
            </v-chip>

            <div class="pa-5">
                
                <CompletedSprintList />
                <InProgressSprintList />
                
            </div>
            
        </v-container>

    </div>
    

</template>

<script>

import CompletedSprintList from './ListComponents/CompletedSprintList.vue'
import InProgressSprintList from './ListComponents/InProgressSprintList.vue'


export default {
    
    components : {
        CompletedSprintList,
        InProgressSprintList
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