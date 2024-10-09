<script lang="ts" setup>
import '../assets/cssComponents/SideBar.css'
import '../assets/cssComponents/SideBarItem.css'

import SideBarItem from '../components/SideBarItem.vue'

import { useVariableStore } from '@/stores/variables'

const store = useVariableStore()
const dataVariables = store.variables
</script>

<template>
  <div class="layout-sidebar">
    <h2>Variables</h2>
    <SideBarItem
      class="layout-sidebaritem"
      v-for="dataVariable in dataVariables"
      :key="dataVariable.id"
      :_variableName="dataVariable.name"
    ></SideBarItem>
  </div>
</template>

<style></style>
