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
                <label>Sprint Status lists</label>
            </div>
            
        </v-container>

    </div>
    

</template>

<script>
export default {
    
}
</script>

<style scoped>

    .mainContainer {

        background-color : '#EEEEEE';
        border : 1px solid gray;
    }

    .btn {
        cursor: pointer;
    }


</style>