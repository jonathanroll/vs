<template>
<h1>{{name}}</h1>

<button @click="placeOrder">Place Order</button>

<YummyMeal name="Hamburger 🍔" :price="5" @addToCart="addItemToCart"/>

</template>

<script>
import { createDOMCompilerError } from "@vue/compiler-dom"
import YummyMealVue from "./components/YummyMeal.vue"
import { ref } from "vue"

export default {
	components: {
		YummyMeal: YummyMealVue,
	},
  setup() {
		const name = ref("The Snazzy Burger")

		// traditional function syntax
		/*
		function placeOrder() {
			alert(`Order for ${name} placed!`)
		}
		*/

		// arrow function syntax
		const placeOrder = () => alert(`Order for ${name} placed!`)
		
		const addItemToCart = (item) => alert(`${item} added to cart!`)

		return {
		  name,
		  placeOrder,
		  addItemToCart
	  }
  },
  // 'created()' Hook
  /*
  created() {
	  console.log("App created:", this.name)	
  },
  */
}
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}	
</style>