# mathjax-vue
Vue components for MathJax

## Installation

Vue2
```
// npm
npm i --save mathjax-vue

// yarn
yarn add mathjax-vue

```

Vue3
```
// vue 3
npm i --save mathjax-vue3

// yarn
yarn add mathjax-vue3
```

## Usage
```
import MathJax, { initMathJax, renderByMathjax } from 'mathjax-vue'

// Rewrite pageReady method, optimizing MathJax as required rendering and render to avoid them
// ❗️❗️ For example '<span>$$Not a formula$$</span>' is not going to render, but in fact will be rendered into formula， As below is not the el

function onMathJaxReady() {
  // The parent node of need to be rendered into the formula node set
  const el = document.getElementById('elementId')
  // ❗️❗️ When there is no el will begin to render the default root node
  renderByMathjax(el)
}

initMathJax({}, onMathJaxReady)

// vue 2
Vue.use(MathJax)

// vue3
createApp(App).use(MathJax)
```

OR
```
import { MathJax } from 'mathjax-vue'
export default {
  ...
  components: {
    MathJax,
  },
  ...
```

Component
```
<template>
  // inline
  <math-jax :latex="formula" />
  // block
  <math-jax :latex="formula" :block="true" />
</template>
```

Functional
```
import { initMathJax, renderByMathjax } from 'mathjax-vue'

initMathJax({})

// After the completion of the MathJax load can success
renderByMathjax()

```

## Props

|   prop   | Type | Description | Default |
| :------: | :--: | :---------: | :-----: |
|  latex  | String | Latex string | "" |
|  block  | Boolean | Css display is block | false |

## Online demo
https://codesandbox.io/s/funny-silence-cgzn5

## note
The default package version for Vue2, if you want Vue3.
1. Update the rollup-plugin-vue version to 6.
2. Delete the node_modules and reinstall.