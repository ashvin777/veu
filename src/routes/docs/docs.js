import markdown from '../../components/markdown/markdown.vue';

export default {

  data() {
    return {
      docId: ''
    }
  },

  components: {
    markdown
  },

  mounted() {
    if (this.$route.params && this.$route.params.docId) {
      this.docId = this.$route.params.docId;
    }
  }
}
