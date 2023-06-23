<template>
	<div id="app">
		<h1>Rotas com VueRouter</h1>
		<MainMenu />
		<router-view></router-view>
	</div>
</template>

<script>
import MainMenu from './components/MainMenu';

export default {
components:{
	MainMenu
}
}
</script>

<style>
	#app {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>

