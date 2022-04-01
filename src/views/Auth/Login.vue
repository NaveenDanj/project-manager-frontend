<template>
    
    <div class="mainContainer gradient-background">
        
        <div class="formContainer">
            <center><h1>Welcome back!</h1></center>

            <v-form ref="loginForm" lazy-validation class="pt-5" @submit.prevent="handleLogin" >

                <v-alert v-if=" error != '' " type="error" outlined dense>{{ error }}</v-alert>
                
                <v-text-field
                    v-model="form.email"
                    type="email"
                    rounded
                    dense
                    outlined
                    label="Email"
                    placeholder="Enter your email"
                    :rules="[
                        v => !!v || 'Email is required',
                    ]"
                />

                <v-text-field
                    v-model="form.password"
                    type="password"
                    rounded
                    dense
                    outlined
                    label="Password"
                    placeholder="Enter your password"
                    :rules="[
                        v => !!v || 'Password is required',
                    ]"
                />

                <v-btn type="submit" rounded class="purple" dark width="100%">Login</v-btn><br/>

                <center class="mt-2"><v-btn @click="() => this.$router.push('/register')" text class=" blue--text" >Or register now</v-btn></center>

            </v-form>



        </div>


    </div>

</template>


<script>

import {login} from '../../Repository/Auth.js'

export default {

    data(){

        return {

            form : {
                email: '',
                password: '',
            },

            error : ''

        }

    },
    
    methods : {

        async handleLogin(){

            if(!this.$refs.loginForm.validate() ){
                return;
            }
            
            try{

                this.error = '';

                const response = await login(this.form)    
                this.$store.commit('setCurrentUser', response.data.user);
                localStorage.setItem('token' , response.data.token);
                this.$router.push('/')

            }catch(err){
                this.error = err.response.data.message
            }
        
        }

    }

}
</script>



<style scoped>

    .mainContainer {
        min-width: 100vw;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-family: 'Roboto', sans-serif;
    }

    .formContainer{
        min-width: 30%;
        max-width: 650px;
        background: white;
        padding : 15px;
        border-radius: 5px;
        box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
    }

    
    .gradient-background {
        background: linear-gradient(300deg,deepskyblue,darkviolet,blue);
        background-size: 180% 180%;
        animation: gradient-animation 18s ease infinite;
    }
    
    @keyframes gradient-animation {
        0% {
        background-position: 0% 50%;
        }
        50% {
        background-position: 100% 50%;
        }
        100% {
        background-position: 0% 50%;
        }
    }

</style>