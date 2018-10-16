import gettingStarted from 'html-loader!markdown-loader!./getting-started.md';
import button from 'html-loader!markdown-loader!./button.md';

export default {
  'getting-started': {
    title: 'Getting started',
    md: gettingStarted
  },
  button: {
    title: 'Button',
    md: button
  }
};
