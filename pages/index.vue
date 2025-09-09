<script setup lang="ts">
import site from '~/data/site.json'
</script>

<template>
  <main class="min-h-screen">
    <section class="mx-auto max-w-4xl py-16 px-4" data-sb-object-id="data/site.json">
      <h1 class="text-4xl font-bold" data-sb-field-path="heroTitle">
        {{ site.heroTitle }}
      </h1>
      <p class="mt-3 text-lg opacity-80" data-sb-field-path="heroSubtitle">
        {{ site.heroSubtitle }}
      </p>

      <ul class="mt-8 grid gap-3 sm:grid-cols-3" data-sb-field-path="services">
        <li v-for="(s, i) in site.services" :key="i" class="rounded-xl border p-4" :data-sb-field-path="`.${i}`">
          {{ s }}
        </li>
      </ul>

      <a class="mt-8 inline-block underline" :href="`mailto:${site.contactEmail}`" data-sb-field-path="contactEmail">
        {{ site.contactEmail }}
      </a>
    </section>
  </main>
</template>
