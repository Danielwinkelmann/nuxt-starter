<template>
  <div class="min-h-screen w-full flex flex-col justify-between">
    <BaseHeader>
      <template #logo>
        <NuxtLink to="/">
          <svg
            xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true"
            role="img" class="text-gray-100" width="32" height="32" preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 48 48"
          >
            <mask id="IconifyId1828c02494346abe44">
              <g fill="none" stroke="#fff" stroke-linejoin="round" stroke-width="4">
                <rect width="38" height="8" x="5" y="6" fill="#555" rx="2" />
                <path d="M8 14v26a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V14" />
                <path
                  fill="#f5f5f" stroke-linecap="round"
                  d="M31 29.067C31 32.896 27.866 36 24 36s-7-3.104-7-6.933c0-3.83 2.692-5.334 3.77-9.067c4.307 1.867 4.307 7.467 4.307 7.467s1.077-3.2 4.308-4C29.654 26.4 31 27.432 31 29.067Z"
                />
              </g>
            </mask>
            <path fill="currentColor" d="M0 0h48v48H0z" mask="url(#IconifyId1828c02494346abe44)" />
          </svg>
        </NuxtLink>
      </template>
      <template #buttons>
        <BaseButton size="lg" type="secondary">
          <strong>Hello</strong>
        </BaseButton>
        <BaseButton size="lg" type="white">
          <strong>World</strong>
        </BaseButton>
      </template>
    </BaseHeader>
    <main>
      <slot />
    </main>
    <BaseFooter />
  </div>
</template>
