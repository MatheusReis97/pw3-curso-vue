export default {
    data() {
        return {
            frutas: ['maçã', 'morango', 'kiwi'],
            fruta: ''
        }
    },
    methods: {
        add() {
            this.frutas.push(this.fruta);
            this.fruta = '';
        }
    }
}