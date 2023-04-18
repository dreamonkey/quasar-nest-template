<template>
  <q-page class="column items-center justify-center">
    <q-btn label="test api" @click="getHello()" />
  </q-page>
</template>

<script setup lang="ts">
import { Notify } from 'quasar';

const BASE_API_URL = process.env.API_URL as string;

async function getHello() {
  const res = await fetch(`${BASE_API_URL}`, {
    method: 'GET',
  });

  Notify.create({
    message: await res.text(),
    color: res.ok ? 'positive' : 'negative',
  });
}
</script>
