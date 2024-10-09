<script setup lang="ts">
import '../assets/cssComponents/VariableContainer.css'

import VariableHeader from './VariableHeader.vue'
import EthicalBox from './EthicalBox.vue'
import TechnicalBox from './TechnicalBox.vue'

import { useVariableStore } from '@/stores/variables'

const store = useVariableStore()
</script>

<template>
  <div class="layout-variable-container">
    <VariableHeader
      :variable-name="store.activeVariable.name"
      :variable-explanation="store.activeVariable.variableExplanation"
    ></VariableHeader>
    <EthicalBox :explanation="store.activeVariable.ethicalExplanation"></EthicalBox>
    <TechnicalBox :explanation="store.activeVariable.technicalExplanation"></TechnicalBox>
  </div>
</template>
