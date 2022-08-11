<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useCounterStore } from '../stores/use-counter-store'

const store = useCounterStore()
</script>

<template>
  <BaseContainer>
    <h1>Buttons</h1>
    <h2>Round</h2>
    <div class="space-x-2 mb-4">
      <BaseButton round type="primary">
        Primary
      </BaseButton>
    </div>
    <h2>Icons</h2>
    <div class="gap-2 flex mb-4">
      <BaseButton type="primary">
        <template #icon>
          <IconsMail class="-ml-0.5 mr-2" />
        </template>
        Normal
      </BaseButton>
      <BaseButton trailing type="primary">
        <template #icon>
          <IconsMail class="-mr-0.5 ml-2" />
        </template>
        Trailing
      </BaseButton>
    </div>
    <h2>Components</h2>
    <div class="gap-2 flex mb-4">
      <BaseButton target="_blank" href="https://www.ebay.de">
        Link
      </BaseButton>
      <BaseButton to="/">
        Nuxt Link
      </BaseButton>
      <BaseButton>
        Button
      </BaseButton>
    </div>
    <h2>Types</h2>
    <div class="gap-2 flex mb-4">
      <BaseButton type="primary" @click="store.increment">
        Primary
      </BaseButton>
      <BaseButton type="danger" @click="store.increment">
        Danger
      </BaseButton>
      <BaseButton type="secondary" @click="store.increment">
        Secondary
      </BaseButton>
      <BaseButton type="white" @click="store.increment">
        White
      </BaseButton>
      <BaseButton round type="primary" @click="store.increment">
        Primary
      </BaseButton>
      <BaseButton disabled round type="primary" @click="store.increment">
        Disabled
      </BaseButton>
    </div>
    <h2>Sizes</h2>
    <div class="space-x-2 mb-4">
      <BaseButton size="xs" type="primary">
        Button
      </BaseButton>
      <BaseButton size="sm" type="primary">
        Button
      </BaseButton>
      <BaseButton size="base" type="primary">
        Button
      </BaseButton>
      <BaseButton size="lg" type="primary">
        Button
      </BaseButton>
      <BaseButton size="xl" type="primary">
        Button
      </BaseButton>
    </div>
  </BaseContainer>
</template>

