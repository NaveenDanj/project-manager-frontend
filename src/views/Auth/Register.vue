<template>
    
    <div class="mainContainer gradient-background">
        
        <div class="formContainer">
            <center><h1>Let's go!</h1></center>

            <v-form ref="registerForm" lazy-validation @submit.prevent="handleRegister" class="pt-5">

                <v-alert v-if="false" type="error" outlined dense>Error</v-alert>

                <v-text-field 
                    type="text"
                    rounded
                    dense
                    outlined
                    label="Full Name"
                    placeholder="Enter your full name" 
                    :rules="[
                        v => !!v || 'Name is required',
                        v => (v && v.length <= 191) || 'Name must be less than 191 characters',
                    ]"
                    v-model="form.name"
                />
                
                <v-text-field 
                    type="email"
                    rounded
                    dense
                    outlined
                    label="Email"
                    placeholder="Enter your email"
                    :rules="[
                        v => !!v || 'Email is required',
                    ]"
                    v-model="form.email"
                />

                <v-text-field
                    type="password"
                    rounded
                    dense
                    outlined
                    label="Password"
                    placeholder="Enter your password"
                    :rules="[
                        v => !!v || 'Password is required',
                    ]"
                    v-model="form.password"
                />

                <v-btn type="submit" rounded class="purple" dark width="100%">Register</v-btn><br/>

                <center class="mt-2"><v-btn @click="() => this.$router.push('/login')" text class=" blue--text" >Or login now</v-btn></center>

            </v-form>

        </div>

    </div>

</template>

<script>

import {register} from '../../Repository/Auth';


export default {
    

    data(){

        return {
                
            form : {
                name: '',
                email: '',
                password: '',
            },

            error: '',
        }

    },

    methods : {

        handleRegister(){

            if(!this.$refs.registerForm.validate()){
                return;
            }

            this.error = '';

            let data = {
                name: this.form.name,
                email: this.form.email,
                password: this.form.password,
            }

            register(data).then(response => {
                this.$router.push('/login')
            }).catch(error => {
                this.error = error.response.data.message
                console.log(error.response.data);
            })


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

