<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useCounterStore } from '../stores/use-counter-store'

const store = useCounterStore()
const { count, double } = storeToRefs(store)
</script>

<template>
  <BaseContainer>
    <h1>UseStoreCounter</h1>
    <h2>Count: {{ count }}</h2>
    <h2>Double: {{ double }}</h2>
    <BaseButton type="secondary" size="sm" @click="store.decrement">
      Decrement
    </BaseButton>
    <BaseButton class="ml-2" type="secondary" size="sm" @click="store.increment">
      Increment
    </BaseButton>
  </BaseContainer>
</template>

