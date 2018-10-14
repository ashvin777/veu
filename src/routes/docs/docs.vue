<template>
  <div>
    <markdown v-if="docId === 'getting-started'" :doc="require('./markdown/getting-started.md')">
      hellow "Hello *World*!"
    </markdown>
  </div>
</template>

<style lang="scss" src="./docs.scss"></style>
<script src="./docs.js"></script>