<template>
    
    <div class="pa-5">
        <v-container class="mainContainer pa-2">

            <div class="d-flex">
                <v-chip class="mr-1">
                    <v-btn icon x-small class="mr-1">
                        <v-icon>mdi-chevron-down </v-icon>
                    </v-btn>
                    <label>POS Development Sprints</label>
                </v-chip>


                <!-- <v-chip class="btn ml-1">
                    <v-icon class="mr-1" x-small>mdi-clipboard-list-outline </v-icon>
                    <label class="btn">Sprint List</label>
                </v-chip> -->

            </div>
            
            <div class="pa-5">
                <SprintList />
            </div>
            
        </v-container>

    </div>


</template>

<script>

import SprintList from '@/components/Project/SprintList.vue'

export default {
    
    components : {
        SprintList
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