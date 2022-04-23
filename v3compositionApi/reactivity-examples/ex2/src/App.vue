<script setup>
import { ref } from 'vue'

const header = ref('Shopping List App')

// as an array of objects
const editing = ref(false)
const items = ref([
/*
  {id: 1, label: "10 party hats"},
  {id: 2, label: "2 board games"},
  {id: 3, label: "20 cups"},
  {id: 4, label: "1 awesome vue course"},
*/
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
//const iceCreamFlavors = ref([])

// encapsulating the logic into a named method simplifies the 
// code in the template
// also note vue allows omitting the trailing '()' in named methods
const saveItem = ()=>{
  //items.push({id: items.length + 1, label: newItem})
  // use .value because vue uses proxies for reactive data
  items.value.push({id: items.value.length + 1, label: newItem.value})
	newItem.value = ""
}
const doEdit = (e)=>{
  editing.value = e
  newItem.value = ""
}
</script>

<template>
  <div class="header">
	  <h1>{{ header }}</h1>
    <button v-if="editing" class="btn" @click="doEdit(false)">
      Cancel
    </button>
		<button v-else class="btn btn-primary" @click="doEdit(true)">
			Add Item
    </button>
  </div>
  <!--
  <form
        class="add-item-form"
        @:submit.prevent="items.push({id: items.length + 1, label: newItem})"
	>
-->
  <form class="add-item-form"
        v-if="editing"
        @submit.prevent="saveItem">
    

  <!--
  <input type="text" placeholder="Add an item">
	-->
    <!--
  <input v-model.trim="newItem" v-on:keyup.enter="items.push({id: items.length + 1, label: newItem})" type="text" placeholder="Add an item">
-->
  <input
         v-model.trim="newItem"
         type="text"
         placeholder="Add an item"
	>

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
<!--
    <button
          v-on:click="items.push({id: items.length + 1, label: newItem})"
          class="btn btn-primary">
			    Save Item
  </button>
    -->
  <button
          :disabled="newItem.length === 0"
          class="btn btn-primary">
			    Save Item
  </button>

  </form>
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
  <p v-if="!items.length">
    Nothing to see here
  </p>
</template>	