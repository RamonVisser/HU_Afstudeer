<script setup lang="ts">
import '../assets/cssComponents/VariableContainer.css'

import VariableHeader from './VariableHeader.vue'
import EthicalBox from './EthicalBox.vue'
import TechnicalBox from './TechnicalBox.vue'

import { defineStore } from 'pinia'

// function variableData(name: string, variableExplanation: String, TechnicalExplanation: String, EthicalExplanation: String) {
//     this._name = name;
//     _variableExplanation: String = variableExplanation

// }
const test = {
    name: 'test'
};

const variableStore = defineStore('variables', {
    state: () => ({ activeVariable: 'relationNumber'})
})

</script>

<template>
    <div class="layout-variable-container">
        <VariableHeader></VariableHeader>
        <EthicalBox></EthicalBox>
        <TechnicalBox></TechnicalBox>
    </div>
</template>

