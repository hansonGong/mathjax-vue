import { defineComponent, ref, watch, onMounted, openBlock, createElementBlock } from "vue";
function e(e2, t2) {
  var a = e2 || {}, n = a.loadType, r = a.url, o = function(e3, t3) {
    var a2 = {};
    for (var n2 in e3)
      Object.prototype.hasOwnProperty.call(e3, n2) && t3.indexOf(n2) === -1 && (a2[n2] = e3[n2]);
    return a2;
  }(a, ["loadType", "url"]);
  !function(e3) {
    e3 === void 0 && (e3 = {});
    var t3 = e3.loadType, a2 = e3.url;
    if (!window.MathJax) {
      var n2 = document.createElement("script");
      n2.src = a2 || "https://cdn.bootcdn.net/ajax/libs/mathjax/3.2.0/es5/tex-svg.min.js", n2[t3 || "async"] = true, document.head.appendChild(n2);
    }
  }({ loadType: n, url: r });
  var s = { tex: { inlineMath: [["$", "$"]], displayMath: [["$$", "$$"]], processEnvironments: true, processRefs: true }, options: { skipHtmlTags: ["noscript", "style", "textarea", "pre", "code"], ignoreHtmlClass: "tex2jax_ignore" }, startup: { pageReady: function() {
    t2 && t2();
  } }, svg: { fontCache: "global" } }, i = Object.assign({}, s, o);
  window.MathJax = i;
}
function t(e2) {
  return window.MathJax && window.MathJax.typesetPromise ? (e2 && !Array.isArray(e2) && (e2 = [e2]), window.MathJax.typesetPromise(e2)) : Promise.reject();
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    latex: { default: "" },
    block: { type: Boolean, default: false }
  },
  setup(__props) {
    const props = __props;
    const ContainerRef = ref(null);
    const renderMathJax = () => {
      if (!ContainerRef.value)
        return;
      const el = ContainerRef.value;
      el.innerText = props.block ? `$$ ${props.latex} $$` : `$ ${props.latex} $`;
      t(el).catch((err) => console.warn(err));
    };
    watch(() => props.latex, () => {
      renderMathJax();
    }, { immediate: true });
    onMounted(() => renderMathJax());
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("span", {
        ref_key: "ContainerRef",
        ref: ContainerRef
      }, null, 512);
    };
  }
});
function install(Vue) {
  Vue.component("MathJax", _sfc_main);
}
const plugin = {
  version: "1.0.0",
  install
};
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}
export { _sfc_main as MathJax, plugin as default, e as initMathJax, t as renderByMathjax };
