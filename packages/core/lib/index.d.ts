interface IInjectOptions {
    url?: string;
    loadType?: 'async' | 'defer';
}
/**
 * Global configuration MathJax
 * @param {IMathJaxProps} options Custom MathJax global configuration  reference: http://docs.mathjax.org/en/latest/
 * @param {FnType} callback Mathjax loading is completed, you need to perform the function
 */
export declare function initMathJax(options?: IMathJaxProps & IInjectOptions, callback?: FnType): void;
/**
 * Manual rendering formula, returns a Promise
 * @param {HTMLElement} el Need to be mathjax rendered HTMLElement
 * @returns Promise
 */
export declare function renderByMathjax(el: HTMLElement): Promise<any>;
export {};
