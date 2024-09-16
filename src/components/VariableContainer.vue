<script setup lang="ts">
import '../assets/cssComponents/VariableContainer.css'

import VariableHeader from './VariableHeader.vue'
import EthicalBox from './EthicalBox.vue'
import TechnicalBox from './TechnicalBox.vue'
</script>

<template>
    <div class="layout-variable-container">
        <VariableHeader></VariableHeader>
        <EthicalBox></EthicalBox>
        <TechnicalBox></TechnicalBox>
    </div>
</template>

