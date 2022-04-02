<template>

    <div class="pa-5">
        <h3>My Workspace</h3>

        <div class="d-flex">

            <v-avatar @click="handleLoadWorkspace(item)" v-for="(item , index) in workspaces" :key="index" style="width : 90px; height : 90px; cursor:pointer;" dark class="red mt-5 mr-3">
                <label style="color:white; font-weight:bold; font-size : 25px; cursor:pointer;">{{ item.name[0] }}</label>
            </v-avatar>

            <v-avatar style="width : 90px; height : 90px; border : 1px solid black;" dark class="mt-5">
                <AddNewWorkspace />
            </v-avatar>


        </div>

        

    </div>

</template>


<script>
import AddNewWorkspace from "./Dialogs/AddNewWorkspace.vue";
import  {getUserWorkSpaces} from '../../Repository/Workspace'

export default {
    
    components : {
        AddNewWorkspace
    },

    data(){
        return {
            workspaces : []
        }
    },

    created(){
        this.loadWorkspaces();
    },

    methods : {

        async loadWorkspaces(){
                        
            try{
                
                let resposne = await getUserWorkSpaces()

                resposne.data.workspaces.forEach(element => {
                    this.workspaces.push(element);
                });

                console.log(resposne.data.workspaces);

            }catch(err){
                console.log(err);
            }
        
        
        },

        handleLoadWorkspace(item){
            this.$store.commit('setCurrentWorkspace' , item);
            localStorage.setItem('current_workspace' , item.id);
        }

    }



}
</script>