<script setup lang="ts">
import '../assets/cssComponents/VariableContainer.css'

import VariableHeader from './VariableHeader.vue'
import EthicalBox from './EthicalBox.vue'
import TechnicalBox from './TechnicalBox.vue'

import { variableInfo }from "../helpers/variableInfo"

import { defineStore } from 'pinia'

let testInfo: variableInfo = new variableInfo("test", 
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam turpis massa, interdum sed laoreet ut, blandit nec est. In pharetra.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis purus facilisis, lacinia velit sed, commodo est. Ut ultricies lacinia.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tortor mi, varius porta diam ut, condimentum sodales erat. Cras in.")

const variableStore = defineStore('variables', {
    state: () => ({ 
        activeVariable: testInfo,

    })
})

</script>

<template>
    <div class="layout-variable-container">
        <VariableHeader
        :variable-name= testInfo.name
        :variable-explanation= testInfo.variableExplanation
        ></VariableHeader>
        <EthicalBox
        :explanation= testInfo.ethicalExplanation
        ></EthicalBox>
        <TechnicalBox
        :explanation= testInfo.technicalExplanation
        ></TechnicalBox>
    </div>
</template>

