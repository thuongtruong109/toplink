import { _ as _sfc_main$1 } from "./Card-HdnqawJn.js";
import { defineComponent, ref, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { useRoute } from "vue-router";
import { u as useUrl } from "./url-8nyDhu56.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./Tooltip-XMy4JM2p.js";
import "vooks";
import "seemly";
import "../server.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "radix3";
import "defu";
import "klona";
import "@vue/devtools-api";
import "destr";
import "devalue";
import "cookie-es";
import "ohash";
import "vdirs";
import "lodash-es";
import "css-render";
import "@css-render/plugin-bem";
import "evtd";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    useUrl();
    useRoute();
    const url = ref({});
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ListsCard = _sfc_main$1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "min-h-screen p-2 pr-4 flex justify-center" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_ListsCard, {
        url: unref(url),
        class: "w-full sm:max-w-sm md:max-w-md lg:max-w-lg"
      }, null, _parent));
      _push(`</section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/id/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=_id_-CJrA-TpG.js.map
