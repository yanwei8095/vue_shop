/* 包含n个用于间接更新状态数据的方法的对象 */
import {
  reqAddress,
  reqCategorys,
  reqShops,
  reqUser,
  reqLogout
}from '../api'

import{
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_USER,
  RESET_USER
}from './mutation-types'

export default{
  /* 获取地址的异步action */
  async getAddress({commit,state}){

    const {longitude,latitude}=state
    //1.执行异步请求
    const result =await reqAddress(longitude,latitude)
    //2.根据结果,提交mutation
    if(result.code===0){
      const address=result.data
      commit(RECEIVE_ADDRESS,address)
    }
  },

  /* 获取分类列表的异步action */
  async getCategorys({commit}){
    //执行异步请求
    const result = await reqCategorys()
    //根据结果,提交mutation
    const categorys=result.data
    commit(RECEIVE_CATEGORYS,categorys)
  },

  /* 获取商家列表的异步action */
  async getShops({commit,state}){
    const {longitude,latitude}=state
    //执行异步请求
    const result =await reqShops(
      {longitude,latitude}
    )
    //根据结果,提交mutation
    if(result.code===0){
      // debugger
      const shops=result.data
      commit(RECEIVE_SHOPS,shops)
    }
  },
  /* 获取当前用户的异步action */
  async getUser({commit}){
    const result = await reqUser()
    if(result.code===0){
      const user=result.data
      commit(RECEIVE_USER,user)
    }
  },

  /*
  获取当前用户的异步action
   */
  async getUser ({commit}) {
    const result = await reqUser()
    if(result.code===0) {
      const user = result.data
      commit(RECEIVE_USER, user)
    }
  },
  /*
  退出登陆的异步action
   */
  async logout ({commit}) {
    const result = await reqLogout()
    if(result.code===0) {
      commit(RESET_USER)
    }
  },
}