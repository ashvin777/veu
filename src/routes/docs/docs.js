import Vue from 'vue';
import hljs from 'highlight.js/lib/highlight';
import javascript from 'highlight.js/lib/languages/javascript';
import 'highlight.js/styles/atom-one-light.css';

const DOC_REFS = [
  'getting-started'
];

export default {

  data() {
    return {
      docs: {}
    }
  },

  mounted() {

    hljs.registerLanguage('javascript', javascript);
    hljs.initHighlightingOnLoad();

    DOC_REFS.forEach(ref => {
      let doc = require(`html-loader!markdown-loader!./markdown/${ref}.md`);
      Vue.set(this.docs, ref, doc);
    });

    if (this.$route.params && this.$route.params.docId) {
      this.docId = this.$route.params.docId;
    }
  }
}