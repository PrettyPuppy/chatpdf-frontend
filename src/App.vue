<template>
  <div>
    <Header />
    <RouterView />
  </div>
</template>

<script setup>

import { RouterView } from 'vue-router';
import Header from './components/Header.vue'

</script>

<style lang="scss" scoped>

</style>