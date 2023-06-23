<template>
	<div class="usuario">
		<h2>Usuarío</h2>
        <hr>
        <ul class="lista">
        <router-link tag="li" class="item-lista"  to="/usuario/1">User 1</router-link>
        <router-link tag="li" class="item-lista"  to="/usuario/2">User 2</router-link>
        <router-link tag="li" class="item-lista" to="/usuario/3">User 3</router-link>
        </ul>
        <hr>
        {{'Completo: ' + $route.query.completo}}
        {{'Idioma: '+ $route.query.idioma}}
        <hr>
        <router-view></router-view>
        <hr>
        <button sucesso @click="irParaInicio">Voltar</button>
	</div>
</template>

<script>
export default {
    props:['id'],
	methods: {
        irParaInicio(){
        this.$router.push({name: 'inicio'});
        }
    }
}
</script>