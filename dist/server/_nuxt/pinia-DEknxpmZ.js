import { ref, defineComponent, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { d as defineStore } from "../server.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "defu";
import "klona";
import "@vue/devtools-api";
import "destr";
import "devalue";
import "cookie-es";
import "ohash";
const useCounter = defineStore("counter", {
  state: () => ({
    n: 5,
    myRef: ref("hello")
  }),
  actions: {
    increment() {
      this.n++;
    }
  }
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "pinia",
  __ssrInlineRender: true,
  setup(__props) {
    const counter = useCounter();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="global-text"><pre>${ssrInterpolate(unref(counter).$state)}</pre><p> N: ${ssrInterpolate(unref(counter).n)} <br> myRef: ${ssrInterpolate(unref(counter).myRef)}</p><input${ssrRenderAttr("value", unref(counter).myRef)} class="text-black" type="text"><br><input${ssrRenderAttr("value", unref(counter).n)} class="text-black" type="number"></div><button class="global-text p-4"> +1 number click </button></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/pinia.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=pinia-DEknxpmZ.js.map
