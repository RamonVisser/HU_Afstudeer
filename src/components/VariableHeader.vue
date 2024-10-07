<script setup lang="ts">
import '../assets/cssComponents/VariableHeader.css'

const props = defineProps(['variableName', "variableExplanation"])
</script>

<template>
    <div class="variableHeader">
        <h3> {{ variableName}}</h3>
        <p> {{ variableExplanation }}</p>
    </div>
</template>