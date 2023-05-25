<template>
  <div id="app">
    <h1>Filtros e Mixins</h1>
    <hr>
    <p>{{ cpf | inverter | formataCPF }}</p>
    <hr>
    <h2>Frutas</h2>
    <ul>
        <li v-for="fruta in frutas" :key="fruta">{{fruta}}</li>
    </ul>
    <input type="text" v-model="fruta" @keydown.enter="add" />
    <hr>
    <NovoFrutas />
  </div>
</template>

<script>
import NovoFrutas from './components/NovoFrutas';
import frutas from './mixins/frutas';

export default {
    components: {
        NovoFrutas
    },
    mixins: [frutas],
    filters: {
        formataCPF(valor) {
            const array = valor.split('');
            array.splice(3, 0, '.');
            array.splice(7, 0, '.');
            array.splice(11, 0, '-');
            return array.join('');
        },
        inverter(valor) {
            return valor.split('').reverse().join('');
        }
    },

    data() {
        return {
            cpf: '12345678910'
        }
    }
}
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, sans-serif;
        text-align: center;
        color: #2C3E50;
        margin-top: 60px;
        font-size: 2.5rem;
    }

    input {
        font-size: 2.5rem;
    }
</style>