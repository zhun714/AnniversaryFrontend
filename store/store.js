import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
	state:{
		token:true,//true表示未登录渲染一键登录页面
		degree_bk:false,//0表示未加入班级，1表示本科，2表示硕士，3表示博士
		degree_ss:false,
		degree_bs:false,
		name: '未定义姓名',
		id:'',//用户id值
		openid:''//用户openid
	},
	mutations:{
		login(state,token)
		{
			state.token = token
		},
		
		change_degree_bk(state,degree_bk)//degree修改函数
		{
			state.degree_bk = degree_bk
		},
		change_degree_ss(state,degree_ss)//degree修改函数
		{
			state.degree_ss = degree_ss
		},
		change_degree_bs(state,degree_bs)//degree修改函数
		{
			state.degree_bs = degree_bs
		},
		change_name(state,name)
		{
			state.name = name
		},
		change_id(state,id)
		{
			state.id = id
		},
		get_openid(state,openid)
		{
			state.openid = openid
		}
		
	},
	actions:{
		
	}
})
export default store