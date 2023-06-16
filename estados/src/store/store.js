import Vue from 'vue';
import Vuex from 'vuex';

import carrinho from './carrinho/carrinho';
import parametros from './parametros/parametros';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: { carrinho, parametros }
});