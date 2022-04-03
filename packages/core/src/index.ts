interface IInjectOptions {
  url?: string
  loadType?: 'async' | 'defer'
}

/**
 * Mathjax to be injected into the document head
 * @param {IInjectOptions} options The script attribute
 * @returns void
 */
function _injectMathJax({ loadType, url }: IInjectOptions = {}): void {
  if (window.MathJax) return
  const script = document.createElement('script')
  script.src =
    url || 'https://cdn.bootcdn.net/ajax/libs/mathjax/3.2.0/es5/tex-svg.min.js'
  script[loadType || 'async'] = true
  document.head.appendChild(script)
}

/**
 * Global configuration MathJax
 * @param {IMathJaxProps} options Custom MathJax global configuration  reference: http://docs.mathjax.org/en/latest/
 * @param {FnType} callback Mathjax loading is completed, you need to perform the function
 */
export function initMathJax(
  options?: IMathJaxProps & IInjectOptions,
  callback?: FnType,
): void {
  const { loadType, url, ...configs } = options || {}
  _injectMathJax({ loadType, url })
  // Default configuration
  const defaultConfig: IMathJaxProps = {
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
  const mergeConfig = Object.assign({}, defaultConfig, configs)
  window.MathJax = mergeConfig
}

/**
 * Manual rendering formula, returns a Promise
 * @param {HTMLElement} el Need to be mathjax rendered HTMLElement
 * @returns Promise
 */
export function renderByMathjax(el: HTMLElement): Promise<any> {
  if (!window.MathJax || !window.MathJax.typesetPromise) return Promise.reject()

  if (el && !Array.isArray(el)) {
    el = [el] as any
  }

  return window.MathJax.typesetPromise(el)
}