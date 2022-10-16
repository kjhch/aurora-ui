<script setup lang="ts">
import { onBeforeMount, ref } from 'vue'
import { auroraService } from '../services/aurora'

defineProps<{ msg: string }>()

const count = ref(0)
const author = ref()

onBeforeMount(async () => {
  author.value = await auroraService.getAuthor()
})
</script>

<template>
  <h1>{{ msg }}</h1>

  <p class="read-the-docs">author: {{ author }}</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
