<script lang="ts" setup>
const prop  = defineProps(['_variableName'])
const greet = function() {
  alert('hello world' + prop._variableName)
}
</script>

<template>
  <div>
    <button class="button-6" role="button" v-on:click="greet">{{ prop._variableName }}</button>
  </div>
</template>

<style></style>
