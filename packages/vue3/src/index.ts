import { DefineComponent } from 'vue'

export * from '@mathjax/core'

import MathJax from './components/MathJax.vue'

export {
  MathJax
}

function install(Vue: DefineComponent): void {
  Vue.component('MathJax', MathJax)
}

// Plugin
const plugin = {
  version: __buildVersion,
  install
}

// Auto-install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default plugin
