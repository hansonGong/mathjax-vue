/* Global function declaration */
declare type FnType<T = void, V = unknown> = (...arg: V[]) => T

declare type Indexable<T = any> = Record<string, T>

/** MathJax attribute declaration  */
declare interface IMathJaxProps extends Indexable {
  version?: string
  typesetPromise?: FnType<Promise<any>>
  tex?: Indexable
  options?: Indexable
  startup?: Indexable
  svg?: Indexable
}

declare interface Window {
  MathJax: IMathJaxProps
}
