const state = {
  Authorization: localStorage.getItem('Authorization') ? localStorage.getItem('Authorization') : '' 
}

const getters = {
  loginStatus: (state) => {
    // console.log(state.Authorization ? true : false) // 正常
    return state.Authorization ? true : false  // 由本地token值存在与否判断登陆状态
  }
}

const mutations = {
  changeLogin(state, userToken) { // 将后端返回的token值存在vuex和本地中
    state.Authorization = userToken.Authorization
    localStorage.setItem('Authorization', userToken.Authorization)
  },
  
  exitStatus(state) {
    if(localStorage.getItem('Authorization')) {
      localStorage.removeItem('Authorization')
      state.Authorization = ''
    }
  }
}

const actions = {

}

export default {
  namespaced: true, // 添加命名空间
  state,
  getters,
  mutations,
  actions
}