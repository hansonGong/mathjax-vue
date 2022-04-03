import { DefineComponent } from 'vue';
export * from '@mathjax/core';
import MathJax from './components/MathJax.vue';
export { MathJax };
declare function install(Vue: DefineComponent): void;
declare const plugin: {
    version: string;
    install: typeof install;
};
export default plugin;
