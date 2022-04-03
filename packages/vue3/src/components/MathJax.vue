<template>
  <span ref="ContainerRef"></span>
</template>

<script lang="ts" setup>
import { ref, onMounted, watch } from 'vue'
import { renderByMathjax } from '@mathjax/core'

interface IMathJaxProps {
  latex: string
  block?: boolean
}

const props = withDefaults(defineProps<IMathJaxProps>(), {
  block: false,
  latex: '',
})

const ContainerRef = ref(null)

const renderMathJax = () => {
  if (!ContainerRef.value) return
  const el = ContainerRef.value as HTMLElement
  el.innerText = props.block ? `$$ ${props.latex} $$` : `$ ${props.latex} $`
  renderByMathjax(el).catch((err) => console.warn(err));
}

watch(
  () => props.latex,
  () => {
    renderMathJax()
  },
  { immediate: true },
)

onMounted(() => renderMathJax())
</script>
