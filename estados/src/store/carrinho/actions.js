export default {
    adicionarProduto(context, payload) {
        setTimeout(() => {
            context.commit('adicionarProduto', payload)
        }, 500);
    }
}