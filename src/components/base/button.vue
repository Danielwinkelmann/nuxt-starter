<script setup lang="ts">
import { NuxtLink } from '~~/.nuxt/components'
const { size = 'base', type = 'primary', round = false, trailing = false, href, to } = defineProps<{
  href?: string
  to?: string
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl'
  type?: 'primary' | 'secondary' | 'white' | 'danger'
  round?: boolean
  trailing?: boolean
}>()
const baseClasses = 'inline-flex items-center border border-transparent shadow-sm  font-medium  focus:outline-none focus:ring-2 focus:ring-offset-2'
const disabledClasses = 'disabled:text-gray-50 disabled:cursor-not-allowed disabled:bg-gray-300 disabled:hover:bg-gray-300 disabled:focus:ring-transparent'
const sizeClasses = {
  xs: 'px-2.5 py-1.5 text-xs',
  sm: 'px-3 py-2 text-sm leading-4',
  base: 'px-4 py-2 text-sm',
  lg: 'px-4 py-2 text-base',
  xl: 'px-6 py-3 text-base',
}
const typeClasses = {
  primary: 'text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500',
  secondary: 'text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:ring-indigo-500',
  white: 'text-gray-700 bg-white hover:bg-gray-50 focus:ring-indigo-500',
  danger: 'text-white bg-red-600 hover:bg-red-700 focus:ring-red-500',
}
const roundClasses = (rounded: boolean) => rounded ? 'rounded-full' : 'rounded-md'
const trailingClasses = (trailing: boolean) => trailing ? 'flex-row-reverse' : 'flex-row'

const classes = computed(() => [baseClasses, sizeClasses[size], typeClasses[type], roundClasses(round), trailingClasses(trailing), disabledClasses].join(' '))
</script>

<template>
  <component :is="href ? 'a' : to ? NuxtLink : 'button'" :href="href" :to="to" :class="classes">
    <slot name="icon" />
    <slot />
  </component>
</template>

