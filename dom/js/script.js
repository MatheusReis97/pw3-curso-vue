new Vue({
    el: '#app',
    data: {
        nome: 'Matheus',
        sobrenome: 'Reis',
        link: 'https://www.google.com.br',
        linkHtml: '<a href="https://www.microsoft.com.br">Ir para a Microsoft</a>',
        pais: 'Argentina',

        contador: 0,
        contador2: 0,

        x: 0,
        y: 0,



        titulo: 'Qualquer coisa',
    },

    watch: {
        contador(valorNovo,valorAntigo){
            console.log (`Valor Antigo: ${valorAntigo}`);
            console.log (`Valor Antigo: ${valorNovo}`);
            setTimeout(()=>{

                this.contador=0;

            
            },3000)
        }
    },

    computed: {
    verificadordoContador(){
        console.log('Me Chamou bbe');
        return this.contador > 49 ? "Maior que 49" : "Menor que 49"
    }
                },
    methods: {
        nomeCompleto() {
            console.log(this);
            return `${this.nome} ${this.sobrenome}`
        },
        mudarPais() {
            this.pais = 'Brasil';
        },
        somar(passo, blablabla) {
            this.contador = this.contador + passo;
            console.log(blablabla);
        },
        atualizarPosicaoMouse(event) {
            this.x = event.clientX;
            this.y = event.clientY;
        },
        foiProGoogle() {
            window.alert('Foi pro google');
            window.open(this.link, '_blank');
        },
        exibirAlerta() {
            window.alert('Isso é um alerta!');
        },

      
    }
});