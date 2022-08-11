<template>
  <header class="bg-indigo-600 ">
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
      <div class="w-full py-6 flex items-center justify-between border-b border-indigo-500 lg:border-none">
        <div class="flex items-center">
          <slot name="logo" />
          <div class="hidden ml-10 space-x-8 lg:block">
            <NuxtLink to="/buttons" class="text-base font-medium text-white hover:text-indigo-50">
              Buttons
            </NuxtLink>

            <NuxtLink to="/store" class="text-base font-medium text-white hover:text-indigo-50">
              Store
            </NuxtLink>

            <NuxtLink to="/composable" class="text-base font-medium text-white hover:text-indigo-50">
              Composable
            </NuxtLink>
          </div>
        </div>
        <div class="ml-10 space-x-4">
          <slot name="buttons" />
        </div>
      </div>
    </nav>
  </header>
</template>
