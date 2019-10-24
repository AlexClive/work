import Vue from 'vue'//引入vue
import Vuex from 'vuex'

//使用vuex
Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    token: '',
    isHidden:false
  },
  getters:{
    hidden(state){
      if(!state.isHidden){
        state.isHidden = JSON.parse(sessionStorage.getItem('isHidden'));
      }
      return state.isHidden;
    }
  },
  mutations: {
    userStatus(state,n){
      state.token = n;
    },
    Hidden(state,n){
      state.isHidden = n;
      //将值设置到session中
      sessionStorage.setItem('isHidden',JSON.stringify(n));
    }
  },
  actions:{
    userStatusFn(context,n){
      context.commit("reduction",n)
    },
    HiddenFn(context,n){
      console.log("no")
      context.commit('Hidden',n);
    }
  }
});

export default store


