import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
	state:{
		token:true
	},
	mutations:{
		login(state,token)
		{
			state.token = token
		}
	},
	actions:{
		
	}
})
export default store