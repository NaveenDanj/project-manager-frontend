import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import {getUser} from './Repository/Auth'


Vue.config.productionTip = false;

const initApp = async () => {

  //check if user is logged in

  try{

    const response = await getUser();
    if(response.data.user){
      store.commit('setCurrentUser', response.data.user);
    }

    new Vue({
      router,
      store,
      vuetify,
      render: (h) => h(App),
    }).$mount("#app");

  }catch(err){

    new Vue({
      router,
      store,
      vuetify,
      render: (h) => h(App),
    }).$mount("#app");

  }

}

initApp();
