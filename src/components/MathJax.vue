<template>
  <span></span>
</template>

<script>
import { renderByMathjax } from '../utils'

export default {
  name: 'MathJax',
  props: {
    latex: {
      type: String,
      default: '',
    },
    block: {
      type: Boolean,
      default: false,
    },
  },
  watch: {
    latex() {
      this.renderMathJax()
    },
  },
  mounted() {
    this.renderMathJax()
  },
  methods: {
    renderMathJax() {
      this.$el.innerText = this.block
        ? `$$ ${this.latex} $$`
        : `$ ${this.latex} $`
      renderByMathjax(this.$el)
    },
  },
}
</script>
