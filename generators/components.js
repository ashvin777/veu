const fs = require('fs');


let path = process.argv[2];

fs.mkdirSync(path);

let pathSplit = path.split('/');

let componentName = pathSplit[pathSplit.length - 1];

let vueSource = `<template>
  <h1>${componentName}</h1>
</template>

<style lang="scss" src="./${componentName}.scss"></style>
<script src="./${componentName}.js"></script>`;

let jsSource = `export default {}`;
fs.writeFileSync(`${path}/${componentName}.scss`, '');
fs.writeFileSync(`${path}/${componentName}.js`, jsSource, 'utf8');
fs.writeFileSync(`${path}/${componentName}.vue`, vueSource, 'utf8');

console.log(`File created at ${path}`);