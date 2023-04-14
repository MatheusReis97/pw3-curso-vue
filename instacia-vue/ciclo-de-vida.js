new Vue({
  el: "#app",

  template:`
    <div>
        <h1> {{titulo}}</h1>

        <button @click="titulo += '?'"> Alterar </button>
        <button @click=" $destroy()"> Destruir </button>
    </div>
  `,

  beforeCreated() {
    console.log('Antes de Criar');
  },

  data: {
    titulo: 'Ciclo de Vida'

  },

  created() {
    console.log('Criado')
  },

  methods: {

  },

  beforeMount() {
    console.log('Antes de montar (DOM)');
  },

  mounted() {
    console.log ('DOM montada');
  },

  beforeUpadte() {
    console.log('Antes de atualizar');

  },

  updated() {
    console.log('atualizado');

  },

  beforeDestroy() {
    console.log('Antes de Destruir');

  },

  destroy() {
    console.log('Destruido');

  },
});
