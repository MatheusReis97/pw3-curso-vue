export default {
    valorTotal(state) {
        return state.produtos.map(p => p.quantidade * p.preco)
            .reduce((total, atual) => total + atual, 0)
    },
    getProdutos(state) {
        return state.produtos;
    }
}