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

// Rewrite pageReady method, optimizing MathJax as required rendering and render to avoid them
// ❗️❗️ For example '<span>$$Not a formula$$</span>' is not going to render, but in fact will be rendered into formula， As below is not the el

function onMathJaxReady() {
  // The parent node of need to be rendered into the formula node set
  const el = document.getElementById('elementId')
  // ❗️❗️ When there is no el will begin to render the default root node
  renderByMathjax(el)
}

initMathJax({}, onMathJaxReady)

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

API
```
import { initMathJax, renderByMathjax } from 'mathjax-vue'

initMathJax({})

// The default mathJax CDN link is https://cdn.bootcdn.net/ajax/libs/mathjax/3.2.0/es5/tex-svg.min.js
// If you don't want to use it or can't access it, you can replace it in the following ways

initMathJax({ url: 'Link of mathJax' })

// After the completion of the MathJax load can success
renderByMathjax(el)

```

## Props

|   prop   | Type | Description | Default |
| :------: | :--: | :---------: | :-----: |
|  latex  | String | Latex string | "" |
|  block  | Boolean | Css display is block | false |

## Online demo
https://codesandbox.io/s/funny-silence-cgzn5


## Note
The project uses PNPM as a package management tool.
If you want to try the project locally, you can follow these steps:

```
// Make sure your node version is above 16

npm install -g pnpm

cd xx/mathjax-vue

pnpm i/pnpm install

```