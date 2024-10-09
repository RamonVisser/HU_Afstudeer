<script lang="ts" setup>
import { useVariableStore } from '@/stores/variables'

const prop = defineProps(['_variableName'])
const store = useVariableStore()

const updateActiveVariable = function () {
  store.setActiveVariableBasedOnName(prop._variableName)
  console.log(store.$state.activeVariable)
}
</script>

<template>
  <div>
    <button class="button-6" role="button" v-on:click="updateActiveVariable">
      {{ prop._variableName }}
    </button>
  </div>
</template>

<style></style>
