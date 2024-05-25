import { useSSRContext, mergeProps, defineComponent, ref, withCtx, unref, openBlock, createBlock, createVNode, createTextVNode, toDisplayString } from "vue";
import { ssrRenderAttrs, ssrRenderClass, ssrRenderAttr, ssrInterpolate, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import { _ as __nuxt_component_7, B as Button } from "./Tooltip-XMy4JM2p.js";
const _sfc_main$3 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1.1em",
    height: "1.1em",
    viewBox: "0 0 16 16"
  }, _attrs))}><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m2.75 8.75l3.5 3.5l7-7.5"></path></svg>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icons/tick.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1.1em",
    height: "1.1em",
    viewBox: "0 0 24 24"
  }, _attrs))}><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16.004V17a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-1M12 4.5v11m3.5-3.5L12 15.5L8.5 12"></path></svg>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icons/download.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1.1em",
    height: "1.1em",
    viewBox: "0 0 24 24"
  }, _attrs))}><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><path d="M10 13.229q.213.349.504.654a3.56 3.56 0 0 0 4.454.59q.391-.24.73-.59l3.239-3.372c1.43-1.49 1.43-3.904 0-5.394a3.564 3.564 0 0 0-5.183 0l-.714.743"></path><path d="m10.97 18.14l-.713.743a3.564 3.564 0 0 1-5.184 0c-1.43-1.49-1.43-3.905 0-5.394l3.24-3.372a3.564 3.564 0 0 1 5.183 0q.291.305.504.654"></path></g></svg>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icons/url.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Card",
  __ssrInlineRender: true,
  props: {
    url: {}
  },
  setup(__props) {
    const colorStyle = (color) => {
      return {
        bg: `bg-${color}-50/50 border-${color}-100 hover:border-${color}-200`,
        title: `text-${color}-400 border-${color}-100`,
        img: `group-hover:ring-${color}-300`,
        name: `group-hover:text-${color}-500`
      };
    };
    const isExported = ref(false);
    const onExporting = async (content) => {
      let data = "";
      await content.items.forEach((item, idx) => {
        data += `${item.name}: ${item.link}`;
        if (idx < content.items.length - 1) {
          data += ", ";
        }
      });
      let a = (void 0).createElement("a");
      let blob = new Blob([JSON.stringify(data)], { "type": "text/plain" });
      a.href = (void 0).URL.createObjectURL(blob);
      a.download = `${content.title}.txt`;
      a.click();
      isExported.value = true;
      setTimeout(() => {
        isExported.value = false;
      }, 1e3);
    };
    const isCopying = ref(false);
    const onCopyUrl = (text) => {
      (void 0).clipboard.writeText(`${(void 0).location.href}id/${text}`).then(() => {
        isCopying.value = true;
        setTimeout(() => {
          isCopying.value = false;
        }, 1e3);
      }, (err) => {
        console.error("Async: Could not copy text: ", err);
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NTooltip = __nuxt_component_7;
      const _component_NButton = Button;
      const _component_IconsTick = __nuxt_component_2;
      const _component_IconsDownload = __nuxt_component_3;
      const _component_IconsUrl = __nuxt_component_4;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: `break-inside group/card h-fit border-2 p-2 rounded-xl mb-4 ${colorStyle(_ctx.url.color).bg}`,
        id: _ctx.url.id
      }, _attrs))}><div class="${ssrRenderClass(`text-base font-medium border rounded-md px-2 py-1 flex justify-between items-center ${colorStyle(_ctx.url.color).title}`)}"><div class="righteous_font flex items-center space-x-1 whitespace-nowrap overflow-hidden max-w-[calc(100%-82px)]"><img${ssrRenderAttr("src", _ctx.url.icon)}${ssrRenderAttr("alt", `${_ctx.url.title} icon`)} width="16" height="16" class="w-4 h-4"><h3>${ssrInterpolate(_ctx.url.title)}</h3></div><div class="flex md:hidden md:group-hover/card:flex items-center space-x-1.5 ml-2">`);
      _push(ssrRenderComponent(_component_NTooltip, { class: "cursor-pointer bg-black text-white whitespace-nowrap px-1 rounded" }, {
        trigger: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_NButton, { class: "border border-slate-100 hover:bg-white rounded-md p-0.5" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (unref(isExported)) {
                    _push3(ssrRenderComponent(_component_IconsTick, null, null, _parent3, _scopeId2));
                  } else {
                    _push3(ssrRenderComponent(_component_IconsDownload, {
                      onClick: ($event) => onExporting(_ctx.url)
                    }, null, _parent3, _scopeId2));
                  }
                } else {
                  return [
                    unref(isExported) ? (openBlock(), createBlock(_component_IconsTick, { key: 0 })) : (openBlock(), createBlock(_component_IconsDownload, {
                      key: 1,
                      onClick: ($event) => onExporting(_ctx.url)
                    }, null, 8, ["onClick"]))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_NButton, { class: "border border-slate-100 hover:bg-white rounded-md p-0.5" }, {
                default: withCtx(() => [
                  unref(isExported) ? (openBlock(), createBlock(_component_IconsTick, { key: 0 })) : (openBlock(), createBlock(_component_IconsDownload, {
                    key: 1,
                    onClick: ($event) => onExporting(_ctx.url)
                  }, null, 8, ["onClick"]))
                ]),
                _: 1
              })
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Export data `);
          } else {
            return [
              createTextVNode(" Export data ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NTooltip, { class: "cursor-pointer bg-black text-white whitespace-nowrap px-1 rounded" }, {
        trigger: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_NButton, { class: "border border-slate-100 hover:bg-white rounded-md p-0.5" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (unref(isCopying)) {
                    _push3(ssrRenderComponent(_component_IconsTick, null, null, _parent3, _scopeId2));
                  } else {
                    _push3(ssrRenderComponent(_component_IconsUrl, {
                      onClick: ($event) => onCopyUrl(_ctx.url.id)
                    }, null, _parent3, _scopeId2));
                  }
                } else {
                  return [
                    unref(isCopying) ? (openBlock(), createBlock(_component_IconsTick, { key: 0 })) : (openBlock(), createBlock(_component_IconsUrl, {
                      key: 1,
                      onClick: ($event) => onCopyUrl(_ctx.url.id)
                    }, null, 8, ["onClick"]))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_NButton, { class: "border border-slate-100 hover:bg-white rounded-md p-0.5" }, {
                default: withCtx(() => [
                  unref(isCopying) ? (openBlock(), createBlock(_component_IconsTick, { key: 0 })) : (openBlock(), createBlock(_component_IconsUrl, {
                    key: 1,
                    onClick: ($event) => onCopyUrl(_ctx.url.id)
                  }, null, 8, ["onClick"]))
                ]),
                _: 1
              })
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` ${ssrInterpolate(unref(isCopying) ? "Copied" : "Copy url to share")}`);
          } else {
            return [
              createTextVNode(" " + toDisplayString(unref(isCopying) ? "Copied" : "Copy url to share"), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><ul class="flex flex-wrap w-full mt-3 gap-5"><!--[-->`);
      ssrRenderList(_ctx.url.items, (item, i) => {
        _push(`<li class="flex flex-col items-center space-y-1.5 group text-xs cursor-pointer last:mr-0 max-w-16"${ssrRenderAttr("id", item.name)}${ssrRenderAttr("title", item.name)}><figure class="${ssrRenderClass(`rounded-full h-10 w-10 group-hover:shadow-md bg-white overflow-hidden border ${colorStyle(_ctx.url.color).img} group-hover:ring-[2px] ease-linear duration-200`)}"><img${ssrRenderAttr("src", item.img)}${ssrRenderAttr("alt", item.name)} width="40" height="40" class="w-full h-full"></figure><span class="${ssrRenderClass(`${colorStyle(_ctx.url.color).name} ease-linear duration-200 truncate max-w-full`)}">${ssrInterpolate(item.name)}</span></li>`);
      });
      _push(`<!--]--></ul></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/lists/Card.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
//# sourceMappingURL=Card-HdnqawJn.js.map
