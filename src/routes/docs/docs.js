import 'highlight.js/styles/atom-one-light.css';

import hljs from 'highlight.js/lib/index';

import docs from './markdown/';

export default {

  data() {
    return {
      docs: docs,
      docId: null
    }
  },

  watch: {
    $route() {
      this.updateDoc();
    }
  },

  mounted() {
    hljs.initHighlightingOnLoad();
    this.updateDoc();
  },

  methods: {
    updateDoc() {
      console.log(hljs, hljs.fixMarkup(this.docs['getting-started'].md));

      // hljs.highlightBlock(document.querySelector('.markdown-body'));
      // // hljs.listLanguages()
      // hljs.initHighlighting.called = false;


      if (this.$route.params && this.$route.params.docId) {
        this.docId = this.$route.params.docId;
      }


    }
  }
}