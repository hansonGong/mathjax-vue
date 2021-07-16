# mathjax-vue
Vue components for MathJax

## Installation

```
// npm
npm i --save mathjax-vue

// yarn
yarn add mathjax-vue

```

## Usage
```
import MathJax, { initMathJax, renderByMathjax } from 'mathjax-vue'

// Rewrite page Ready method, optimizing MathJax as required rendering and render to avoid them
// ❗️❗️ For example '<span>$$Not a formula$$</span>' is not going to render, but in fact will be rendered into formula， As below is not the el

function onMathJaxReady() {
  // The parent node of need to be rendered into the formula node set
  const el = document.getElementById('elementId')
  // ❗️❗️ When there is no el will begin to render the default root node
  renderByMathjax(el)
}

initMathJax({}, onMathJaxReady)

// vue 3
createApp(App).use(MathJax)

// vue 2
Vue.use(MathJax)
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

# Online demo
https://codesandbox.io/s/funny-silence-cgzn5
