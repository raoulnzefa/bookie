import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import bookModule from './modules/book.module'
export default new Vuex.Store({
  strict: true,
  modules: {
    bookModule
  },
  state: {
    loggedInUser: {
      _id: 'u101',
      email: 'bobby@gmail.com',
      userName: 'bob-the-builder101',
      firstName: 'Bobby',
      lastName: 'Brown',
      address: 'Dimona',
    },
    userMsg: {
      type: null,
      txt: '',
    }
  },
  getters: {
    loggedInUser(state) {
      return state.loggedInUser
    },
    userMsg(state) {
      return state.userMsg
    }
  },
  mutations: {
    setLoggedInUser(state, { user }) {
      state.loggedInUser = user
    },
    setUserMsg(state, { userMsg }) {
      state.userMsg.type = userMsg.type;
      state.userMsg.txt = userMsg.txt;
    },
  },
  actions: {
    setUserMsg({ commit }, { userMsg }) {
      commit({ type: 'setUserMsg', userMsg })
      setTimeout(() => {
        commit({
          type: 'setUserMsg',
          userMsg: {
            type: null,
            txt: '',
          }
        })
      }, 8000);
    },
  },
})
