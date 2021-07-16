import { initMathJax, renderByMathjax } from './utils'
import MathJax from './components/MathJax.vue'
import version from './version'

function install (Vue) {
  Vue.component('MathJax', MathJax)
}

// Plugin
const plugin = {
  version,
  install
}

// Auto-install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default plugin

export {
  MathJax,
  initMathJax,
  renderByMathjax
}
