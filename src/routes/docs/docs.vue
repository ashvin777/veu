<template>
  <div class="page-container page-docs">
    <nav>
      <ul>
        <li v-for="(doc, index) in docs" :key="index">
          <a :href="'#/docs/'+index">
            {{doc.title}}
          </a>
        </li>
      </ul>
    </nav>

    <div class="right-panel">
      <div class="markdown-body" ref="md">
        <div v-if="docId" v-html="docs[docId].md"></div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss" src="./docs.scss"></style>
<script src="./docs.js"></script>