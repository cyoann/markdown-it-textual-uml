'use strict'

const functions = {
  options: {},

  initialize(options) {
    if (options) {
      this.options = options;
    }
  },

  getMarkup(code) {
    return `<pre class="mermaid">\n${code}\n</pre>\n`
  }
}

module.exports = {
  functions
};
