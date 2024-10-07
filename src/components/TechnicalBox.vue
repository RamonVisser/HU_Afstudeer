<script setup lang="ts">
import '../assets/cssComponents/TechnicalBox.css'

const props = defineProps(['explanation'])
</script>

<template>
    <div class="technicalBox">
        <p>{{ explanation }}</p>
    </div>
</template>