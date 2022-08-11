<script setup lang="ts">
const { count, double, increment, decrement } = useCounterComposable()
const counter = useCounterComposable()
</script>

<template>
  <BaseContainer>
    <div>
      <h1>UseCounterComposable</h1>
      <h2>Count: {{ count }}</h2>
      <h2>Double: {{ double }}</h2>
      <BaseButton type="secondary" size="sm" @click="decrement">
        Decrement
      </BaseButton>
      <BaseButton class="ml-2" type="secondary" size="sm" @click="increment">
        Increment
      </BaseButton>
    </div>
    <div class="mt-8">
      <h1>UseCounterComposable Second Instance</h1>
      <h2>Count: {{ counter.count }}</h2>
      <h2>Double: {{ counter.double }}</h2>
      <BaseButton type="secondary" size="sm" @click="counter.decrement">
        Decrement
      </BaseButton>
      <BaseButton class="ml-2" type="secondary" size="sm" @click="counter.increment">
        Increment
      </BaseButton>
    </div>
  </BaseContainer>
</template>

