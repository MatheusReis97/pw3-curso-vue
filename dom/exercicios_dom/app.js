new Vue({
    el: '#desafio',
    data: {
        nome: 'Matheus',
        sobrenome: 'Reis',
        idade: 26,
        imagem: 'https://www.ahnegao.com.br/wp-content/uploads/2013/08/sailor.jpg',
        numero: 0,
        valor: '',
        valor2: 0,
        resultado: 0,

    },

watch: {
    resultado(valor)
    valor2(){
        setTimeout(()=>{
            this.valor2=0;
        },5000 )   }

},


methods: {
    nomeCompleto(){
        console.log(this);
        return ` Meu nome é ${this.nome} ${this.sobrenome} e tenho ${this.idade} anos`
    },

    numAleatorio(){
        return Math.random();
    },

    buttonAlerta(){
        window.alert('Tamo junto')
    },

    amrValor(event){
        this.valor = event.target.value;
    },
    altTexto() {

        return this.valor2 == 37 ? this.resultado = "Valor igual" : this.resultado = "Valor diferente";
      
    }


},
    }
)