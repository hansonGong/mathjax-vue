// Mathjax to be injected into the document head
export function injectMathJax() {
  if (!window.MathJax) {
    const script = document.createElement('script')
    script.src =
      'https://cdn.bootcdn.net/ajax/libs/mathjax/3.2.0/es5/tex-chtml.js'
    script.async = true
    document.head.appendChild(script)
  }
}

/**
 * Global configuration MathJax
 * @param options Custom MathJax global configuration  reference: http://docs.mathjax.org/en/latest/
 * @param callback Mathjax loading is completed, you need to perform the function
 */
export function initMathJax(options = {}, callback) {
  injectMathJax()
  // The default global configuration
  const defaultConfig = {
    tex: {
      inlineMath: [['$', '$']],
      displayMath: [['$$', '$$']],
      processEnvironments: true,
      processRefs: true,
    },
    options: {
      skipHtmlTags: ['noscript', 'style', 'textarea', 'pre', 'code'],
      ignoreHtmlClass: 'tex2jax_ignore',
    },
    startup: {
      pageReady: () => {
        callback && callback()
      },
    },
    svg: {
      fontCache: 'global',
    },
  }
  // Merge configuration
  const mergeConfig = Object.assign({}, defaultConfig, options)
  window.MathJax = mergeConfig
}

/**
 * Manual rendering formula, returns a Promise
 * @param el Need to be mathjax rendered HTMLElement
 * @returns Promise
 */
export function renderByMathjax(el) {
  if (!window.MathJax.version) {
    return
  }

  if (el && !Array.isArray(el)) {
    el = [el]
  }

  return new Promise((resolve, reject) => {
    window.MathJax.typesetPromise(el)
      .then(() => {
        resolve(void 0)
      })
      .catch((err) => reject(err))
  })
}
