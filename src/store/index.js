import Vue from 'vue'
import Vuex from 'vuex';

import User from './module/user';
import Message from './module/message';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    user: User,
    message: Message
  }
})

export default store;
