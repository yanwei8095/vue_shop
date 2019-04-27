/* 
包含n个用于直接更新状态数据的方法的对象
 */
import {
	RECEIVE_ADDRESS,
	RECEIVE_SHOPS,
	RECEIVE_CATEGORYS,
	RECEIVE_USER
} from './mutation-types'

export default{
	[RECEIVE_ADDRESS](state,address){
		state.address=address
	},
	[RECEIVE_SHOPS](state,shop){
		state.shop=shop
	},
	[RECEIVE_CATEGORYS](state,categorys){
		state.categorys=categorys
	},
	[RECEIVE_USER](state, user) {
	  state.user = user
	},
}