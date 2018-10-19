import 'highlight.js/styles/atom-one-light.css';
import hljs from 'highlight.js/lib/index';
import docs from './markdown/';
import navbar from '../../components/navbar/navbar.vue';

export default {

  name: 'docs',

  data() {
    return {
      docs: docs,
      docId: null
    }
  },

  components: {
    navbar
  },

  watch: {
    $route() {
      this.updateDoc();
    }
  },

  mounted() {
    this.updateDoc();
  },

  methods: {
    updateDoc() {
      if (this.$route.params && this.$route.params.docId) {
        this.docId = this.$route.params.docId;
      }
      setTimeout(() => {
        let code = this.$refs.md.querySelectorAll('code');
        Array.from(code).forEach(el => hljs.highlightBlock(el))
      });
    }
  }
}