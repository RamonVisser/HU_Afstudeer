<script setup lang="ts">
import '../assets/cssComponents/EthicalBox.css'

const props = defineProps(['explanation'])
</script>

<template>
    <div class="ethicalBox">
        <p>{{ explanation }}</p>
    </div>
</template>