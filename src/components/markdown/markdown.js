import { markdown } from 'markdown';

export default {
  props: ['doc'],

  data() {
    return {
      html: '#'
    };
  },

  created() {
    console.log(this.doc);
    this.html = markdown.toHTML(this.doc || '');
  }
}