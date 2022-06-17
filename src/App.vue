<script setup>
import { CBtn } from 'chusho';

import Step from './components/Step.vue';
</script>

<template>
  <main class="grid grid-rows-[auto_1fr] min-h-screen">
    <div class="bg-green-700 text-white px-10 py-5">
      <h1 class="h3">Chūshō workshop</h1>
    </div>

    <ul class="grid divide-y-2 divide-warm-grey-200">
      <li class="grid">
        <Step :index="1">
          <template #instructions>
            <p class="mb-4">
              Edit <code>chusho.config.js</code> to give all buttons a basic
              style, for example by applying the following classes:
            </p>
            <pre>
inline-block px-5 py-3 font-bold border bg-white transition border-warm-grey-300 hover:border-warm-grey-1000 hover:bg-warm-grey-1000 hover:text-white</pre
            >
          </template>

          <template #playground>
            <CBtn>Default button</CBtn>
          </template>
        </Step>
      </li>

      <li class="grid">
        <Step :index="2">
          <template #instructions>
            <p class="mb-4">
              Introduce a <code>primary</code> button variant with a different
              style, without changing the default styling on step 1. Styling
              example:
            </p>
            <pre>
inline-block px-5 py-3 font-bold border bg-white transition text-green-700 border-green-700 hover:bg-green-700 hover:text-white</pre
            >
          </template>

          <template #playground>
            <CBtn variant="primary">Primary button</CBtn>
          </template>
        </Step>
      </li>

      <li class="grid">
        <Step :index="3">
          <template #instructions>
            <p class="mb-4">
              Create a very specific button that doesn’t inherit the styling
              from the config, without changing step 1 & 2 rendering. For
              example with these classes:
            </p>
            <pre>
inline-block px-8 py-4 text-white text-lg font-bold uppercase bg-red-700 rounded-full</pre
            >
          </template>

          <template #playground>
            <CBtn>Special button</CBtn>
          </template>
        </Step>
      </li>

      <li class="grid">
        <Step :index="4">
          <template #instructions>
            <p class="mb-4">
              Globally style all <code>CBtn</code> that are rendered as links
              with a more appropriate style, for example using these classes:
            </p>
            <pre>text-green-700 underline</pre>
          </template>

          <template #playground>
            <CBtn href="https://www.liip.ch" target="_blank"
              >Link me if you can</CBtn
            >
          </template>
        </Step>
      </li>
    </ul>
  </main>
</template>
