import { _ as __nuxt_component_1 } from "./UnoIcon-Dt4Lj93g.js";
import { a as useI18n } from "../server.mjs";
import { defineComponent, computed, resolveComponent, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
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
function useLang() {
  const { t } = useI18n();
  return {
    t
  };
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "lang",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useLang();
    const lists = computed(() => [
      { id: 1, title: "Pinia Store", url: "pinia", icon: "i-carbon-store" },
      { id: 1, title: t("modal"), url: "modal", icon: "i-carbon-collapse-all" },
      { id: 1, title: "Menu", url: "menu", icon: "i-carbon-menu" },
      { id: 1, title: "Naive UI", url: "naive", icon: "i-carbon-milestone" },
      { id: 1, title: "New soon...", url: "", icon: "i-carbon-milestone" }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UnoIcon = __nuxt_component_1;
      const _component_List = resolveComponent("List");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen" }, _attrs))}><div class="flex flex-col"><h1>${ssrInterpolate(unref(t)("follow"))}</h1><div class="flex w-full items-center justify-between py-2"><img class="h-20 w-20 rounded-full" height="160" width="160" src="https://avatars.githubusercontent.com/u/38668796?v=4" alt="productdevbook"><div class="place-items-centerr grid grid-cols-3 justify-items-center gap-4 [&amp;&gt;*]:flex [&amp;&gt;*]:items-center [&amp;&gt;*]:justify-center [&amp;&gt;*]:rounded-md [&amp;&gt;*]:bg-gray-100 [&amp;&gt;*]:p-3 dark:[&amp;&gt;*]:bg-gray-600"><a target="blank" class="font-bold text-gray-900 hover:bg-gray-300 dark:text-white dark:hover:bg-gray-400" href="https://github.com/productdevbook">`);
      _push(ssrRenderComponent(_component_UnoIcon, { class: "i-ph-github-logo-duotone" }, null, _parent));
      _push(`</a><a class="hover:bg-gray-300 dark:hover:bg-gray-400" href="https://twitter.com/productdevbook" target="_blank">`);
      _push(ssrRenderComponent(_component_UnoIcon, { class: "i-ph-twitter-logo-duotone" }, null, _parent));
      _push(`</a><a target="blank" class="font-bold text-gray-900 hover:bg-gray-300 dark:text-white dark:hover:bg-gray-400" href="https://discord.gg/UN8mqgC79S">`);
      _push(ssrRenderComponent(_component_UnoIcon, { class: "i-ph-discord-logo-duotone" }, null, _parent));
      _push(`</a></div></div></div><ul role="list" class="mt-10 space-y-4"><!--[-->`);
      ssrRenderList(unref(lists), (item) => {
        _push(`<li>`);
        _push(ssrRenderComponent(_component_List, {
          link: {
            id: item.id,
            title: item.title,
            url: item.url,
            icon: item.icon
          }
        }, null, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/lang.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=lang-BZKUK9o8.js.map
