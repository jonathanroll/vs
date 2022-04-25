<script setup>
import { ref, reactive } from 'vue'

const state = reactive({count: 0, iLable: 'Increment'})
const increment = () => state.count++
const decrement = () => state.count--
</script>

<template>
<h1>{{ state.count }}</h1>
<!-- <button @click="state.count++"> -->
<button @click="increment">
{{ state.iLable }}
</button>
<button @click="decrement">
Decrement
</button>
</template>