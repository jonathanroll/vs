<script setup>
import { ref } from 'vue'

const header = ref('Shopping List App')

// as an array of objects

const items = ref([
  {id: 1, label: "10 party hats"},
  {id: 2, label: "2 board games"},
  {id: 3, label: "20 cups"},
  {id: 4, label: "1 awesome vue course"},
])
/*
// or as an object of objects
const items = ref({
  'item-1': {id: 1, label: "10 party hats"},
  'item-2': {id: 2, label: "2 board games"},
  'item-3': {id: 3, label: "20 cups"},
})
*/

const newItem = ref("")
//const newItemLzy = ref("")
//const newItemPriority = ref("")
const newItemHighPriority = ref(false)
const iceCreamFlavors = ref([])
</script>

<template>
  <h1>{{ header }}</h1>
  <!--
  <input type="text" placeholder="Add an item">
	-->
  <input v-model.trim="newItem" type="text" placeholder="Add an item">
  <!--
	{{ newItem }}
	-->
  <!--
  <br>
  <br>
  <input v-model.lazy="newItemLzy" type="text" placeholder="Add an item">
  {{ newItemLzy }}
	-->

  <!-- Priority Radio Button
  Priority:
  <label>
    <input type="radio" v-model="newItemPriority" value="low">
 	Low
  </label>
  <label>
    <input type="radio" v-model="newItemPriority" value="high">
 	High
  </label>
  <br>
  {{ newItemPriority }}
	-->

	<!-- Priority Select Dropdown -->
  <!--
  <label>
    Priority:
    <select v-model="newItemPriority">
      <option value="low">Low</option>
      <option value="high">High</option>
    </select>
  </label>
  <br>
  {{ newItemPriority }}
-->
  <!-- High Priority Checkbox -->
  <label>
  	<input type="checkbox" v-model="newItemHighPriority">
    High Priority
  </label>
    	{{ newItemHighPriority }}
  <br>
  <label>
    <input type="checkbox" value="vanilla" v-model="iceCreamFlavors">Vanilla</label>
  <label>
    <input type="checkbox" value="chocolate" v-model="iceCreamFlavors">Chocolate</label>
  <label>
    <input type="checkbox" value="strawberry" v-model="iceCreamFlavors">Strawberry</label>

  	{{ iceCreamFlavors }}
  <ul>
    <!--
    <li v-for="item in items" key="item.id">{{ item.label }}</li> 

		<li v-for="item in items" key="item.id">{{ item.label }}</li> 
				or destructure as in: 
    <li v-for="{ id, label } in items" :key="id">{{ label }}</li>
				...another example allowing for printing the index
		-->
    <li v-for="({ id, label },index) in items" :key="id">
			<!-- {{ index }} -->
			{{ label }}
		</li>

  </ul>
</template>	