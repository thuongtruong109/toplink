import { _ as __nuxt_component_0$4 } from "./nuxt-link-D70GC1Tl.js";
import { useSSRContext, mergeProps, withCtx, createTextVNode, defineComponent, ref, computed, inject, watchEffect, onMounted, cloneVNode, h as h$1, Fragment, provide, onUnmounted, watch, shallowRef, unref, getCurrentInstance, Teleport, reactive, nextTick, toRaw, normalizeClass, createVNode, withDirectives, isRef, vModelText, openBlock, createBlock, renderList, toDisplayString, Transition } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderSlot } from "vue/server-renderer";
import { publicAssetsURL } from "#internal/nuxt/paths";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import { c as useRouter } from "../server.mjs";
import { u as useUrl } from "./url-8nyDhu56.js";
import { _ as __nuxt_component_1$2 } from "./UnoIcon-Dt4Lj93g.js";
import { u as useColorMode } from "./composables-K6fOgyxT.js";
import "ofetch";
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
const _imports_0$1 = publicAssetsURL("/logo/logo.svg");
const _sfc_main$9 = {};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$4;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center space-x-1" }, _attrs))}><img${ssrRenderAttr("src", _imports_0$1)} alt="logo" width="26" height="26" class="drop-shadow-lg">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/",
    class: "rubik_wet_font text-2xl drop-shadow-md bg-clip-text text-transparent bg-gradient-to-l from-blue-400 to-teal-500"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Toplink`);
      } else {
        return [
          createTextVNode("Toplink")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/header/Logo.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const __nuxt_component_0$3 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender$6]]);
const _sfc_main$8 = {};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 48 48",
    width: "1.8em",
    height: "1.8em",
    baseProfile: "basic"
  }, _attrs))}><path fill="#ff5f01" d="M24.839,35.239c2.343-0.745,4.452-2.012,6.189-3.666s3.102-3.695,3.956-5.988 l-0.631-0.631c-1.364-1.364-3.156-2.046-4.949-2.046s-3.585,0.682-4.95,2.047s-2.047,3.157-2.047,4.95s0.682,3.585,2.047,4.95 L24.839,35.239z" opacity=".1"></path><path fill="#ff5f01" d="M25.161,25.661c-1.17,1.17-1.755,2.706-1.755,4.243s0.585,3.073,1.755,4.243 l0.638,0.638c1.969-0.696,3.749-1.802,5.234-3.216s2.674-3.135,3.461-5.06l-0.848-0.848c-1.17-1.169-2.706-1.754-4.242-1.754 S26.331,24.491,25.161,25.661z" opacity=".2"></path><path fill="#ff5f01" d="M25.868,26.368c-0.975,0.975-1.463,2.255-1.463,3.536s0.488,2.56,1.463,3.536 l0.891,0.891c1.595-0.647,3.046-1.593,4.279-2.766s2.246-2.574,2.966-4.131l-1.065-1.065c-0.975-0.975-2.255-1.462-3.535-1.462 S26.844,25.393,25.868,26.368z" opacity=".3"></path><path fill="#ff5f01" d="M26.575,27.075c-0.781,0.781-1.171,1.804-1.171,2.828s0.39,2.048,1.171,2.828 l1.144,1.145c1.221-0.598,2.343-1.384,3.324-2.317s1.818-2.014,2.471-3.203l-1.282-1.282c-0.78-0.78-1.804-1.17-2.828-1.17 S27.356,26.295,26.575,27.075z" opacity=".4"></path><path fill="#ff5f01" d="M28.68,33.423c0.847-0.55,1.64-1.174,2.368-1.867s1.391-1.453,1.976-2.274l-1.499-1.499 c-0.586-0.586-1.354-0.879-2.121-0.879s-1.536,0.293-2.121,0.879h0c-0.586,0.586-0.879,1.354-0.879,2.121s0.293,1.536,0.879,2.121 L28.68,33.423z" opacity=".5"></path><linearGradient id="TzfY4TRVXOoqh3bcHqxCWa" x1="7.309" x2="-14.935" y1="-1.993" y2="16.856" gradientTransform="matrix(.7071 -.7071 .8141 .8141 31.652 27.55)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ffda03"></stop><stop offset=".256" stop-color="#ffba02"></stop><stop offset="1" stop-color="#ff5f01"></stop></linearGradient><path fill="url(#TzfY4TRVXOoqh3bcHqxCWa)" d="M42.75,43.25L42.75,43.25c-1.172,1.172-3.071,1.172-4.243,0L27.282,32.025	c-1.172-1.172-1.172-3.071,0-4.243l0,0c1.172-1.172,3.071-1.172,4.243,0L42.75,39.007C43.922,40.179,43.922,42.078,42.75,43.25z"></path><path fill="#ff5f01" d="M31.525,27.782c-1.172-1.172-3.071-1.172-4.243,0h0c-1.172,1.172-1.172,3.071,0,4.243 l3.558,3.558c1.652-1.153,3.102-2.565,4.315-4.171L31.525,27.782z" opacity=".1"></path><path fill="#ff5f01" d="M31.525,27.782c-1.172-1.172-3.071-1.172-4.243,0h0c-1.172,1.172-1.172,3.071,0,4.243 l3.126,3.126c1.66-1.142,3.115-2.554,4.319-4.166L31.525,27.782z" opacity=".15"></path><path fill="#ff5f01" d="M31.525,27.782c-1.172-1.172-3.071-1.172-4.243,0h0c-1.172,1.172-1.172,3.071,0,4.243 l2.695,2.695c1.669-1.131,3.127-2.542,4.323-4.162L31.525,27.782z" opacity=".2"></path><path fill="#ff5f01" d="M31.525,27.782c-1.172-1.172-3.071-1.172-4.243,0h0c-1.172,1.172-1.172,3.071,0,4.243 l2.264,2.264c1.678-1.12,3.139-2.531,4.327-4.158L31.525,27.782z" opacity=".25"></path><path fill="#ff5f01" d="M31.525,27.782c-1.172-1.172-3.071-1.172-4.243,0h0c-1.172,1.172-1.172,3.071,0,4.243 l1.833,1.833c1.686-1.109,3.152-2.52,4.332-4.154L31.525,27.782z" opacity=".3"></path><path fill="#ff5f01" d="M31.525,27.782c-1.172-1.172-3.071-1.172-4.243,0h0c-1.172,1.172-1.172,3.071,0,4.243 l1.401,1.401c1.695-1.099,3.164-2.508,4.336-4.149L31.525,27.782z" opacity=".35"></path><linearGradient id="TzfY4TRVXOoqh3bcHqxCWb" x1="35.79" x2="8.408" y1="35.79" y2="8.408" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fff" stop-opacity=".4"></stop><stop offset="1" stop-color="#f4805d" stop-opacity=".3"></stop></linearGradient><circle cx="20" cy="20" r="16" fill="url(#TzfY4TRVXOoqh3bcHqxCWb)"></circle><linearGradient id="TzfY4TRVXOoqh3bcHqxCWc" x1="13.665" x2="35.637" y1="13.292" y2="36.557" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f4805d" stop-opacity=".4"></stop><stop offset="1" stop-color="ivory" stop-opacity=".2"></stop></linearGradient><path fill="url(#TzfY4TRVXOoqh3bcHqxCWc)" d="M20,4.5c8.547,0,15.5,6.953,15.5,15.5	S28.547,35.5,20,35.5S4.5,28.547,4.5,20S11.453,4.5,20,4.5 M20,4C11.163,4,4,11.163,4,20s7.163,16,16,16s16-7.163,16-16	S28.837,4,20,4L20,4z"></path></svg>`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icons/searchToggle.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_0$2 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$5]]);
const _sfc_main$7 = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "1.2em",
    height: "1.2em",
    class: "DocSearch-Search-Icon",
    viewBox: "0 0 20 20"
  }, _attrs))}><path d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icons/searchLabel.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "Keyboard",
  __ssrInlineRender: true,
  props: {
    text: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<kbd${ssrRenderAttrs(mergeProps({ class: "px-1 py-0.5 text-xs font-medium text-gray-600 bg-gray-100 border border-gray-200 rounded dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500" }, _attrs))}>${ssrInterpolate(_ctx.text)}</kbd>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/Keyboard.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _imports_0 = "" + __buildAssetsURL("empty.HwOLLezK.png");
function d$5(u2, e2, r2) {
  let i2 = ref(r2 == null ? void 0 : r2.value), f2 = computed(() => u2.value !== void 0);
  return [computed(() => f2.value ? u2.value : i2.value), function(t2) {
    return f2.value || (i2.value = t2), e2 == null ? void 0 : e2(t2);
  }];
}
function t$5(e2) {
  typeof queueMicrotask == "function" ? queueMicrotask(e2) : Promise.resolve().then(e2).catch((o2) => setTimeout(() => {
    throw o2;
  }));
}
function o$4() {
  let a2 = [], s3 = { addEventListener(e2, t2, r2, i2) {
    return e2.addEventListener(t2, r2, i2), s3.add(() => e2.removeEventListener(t2, r2, i2));
  }, requestAnimationFrame(...e2) {
    let t2 = requestAnimationFrame(...e2);
    s3.add(() => cancelAnimationFrame(t2));
  }, nextFrame(...e2) {
    s3.requestAnimationFrame(() => {
      s3.requestAnimationFrame(...e2);
    });
  }, setTimeout(...e2) {
    let t2 = setTimeout(...e2);
    s3.add(() => clearTimeout(t2));
  }, microTask(...e2) {
    let t2 = { current: true };
    return t$5(() => {
      t2.current && e2[0]();
    }), s3.add(() => {
      t2.current = false;
    });
  }, style(e2, t2, r2) {
    let i2 = e2.style.getPropertyValue(t2);
    return Object.assign(e2.style, { [t2]: r2 }), this.add(() => {
      Object.assign(e2.style, { [t2]: i2 });
    });
  }, group(e2) {
    let t2 = o$4();
    return e2(t2), this.add(() => t2.dispose());
  }, add(e2) {
    return a2.push(e2), () => {
      let t2 = a2.indexOf(e2);
      if (t2 >= 0)
        for (let r2 of a2.splice(t2, 1))
          r2();
    };
  }, dispose() {
    for (let e2 of a2.splice(0))
      e2();
  } };
  return s3;
}
let t$4 = Symbol("headlessui.useid"), i$5 = 0;
function I$1() {
  return inject(t$4, () => `${++i$5}`)();
}
function o$3(e2) {
  var l2;
  if (e2 == null || e2.value == null)
    return null;
  let n2 = (l2 = e2.value.$el) != null ? l2 : e2.value;
  return n2 instanceof Node ? n2 : null;
}
function u$7(r2, n2, ...a2) {
  if (r2 in n2) {
    let e2 = n2[r2];
    return typeof e2 == "function" ? e2(...a2) : e2;
  }
  let t2 = new Error(`Tried to handle "${r2}" but there is no handler defined. Only defined handlers are: ${Object.keys(n2).map((e2) => `"${e2}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(t2, u$7), t2;
}
var i$4 = Object.defineProperty;
var d$4 = (t2, e2, r2) => e2 in t2 ? i$4(t2, e2, { enumerable: true, configurable: true, writable: true, value: r2 }) : t2[e2] = r2;
var n$3 = (t2, e2, r2) => (d$4(t2, typeof e2 != "symbol" ? e2 + "" : e2, r2), r2);
let s$4 = class s {
  constructor() {
    n$3(this, "current", this.detect());
    n$3(this, "currentId", 0);
  }
  set(e2) {
    this.current !== e2 && (this.currentId = 0, this.current = e2);
  }
  reset() {
    this.set(this.detect());
  }
  nextId() {
    return ++this.currentId;
  }
  get isServer() {
    return this.current === "server";
  }
  get isClient() {
    return this.current === "client";
  }
  detect() {
    return "server";
  }
};
let c$3 = new s$4();
function i$3(r2) {
  if (c$3.isServer)
    return null;
  if (r2 instanceof Node)
    return r2.ownerDocument;
  if (r2 != null && r2.hasOwnProperty("value")) {
    let n2 = o$3(r2);
    if (n2)
      return n2.ownerDocument;
  }
  return void 0;
}
let c$2 = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e2) => `${e2}:not([tabindex='-1'])`).join(",");
var N$4 = ((n2) => (n2[n2.First = 1] = "First", n2[n2.Previous = 2] = "Previous", n2[n2.Next = 4] = "Next", n2[n2.Last = 8] = "Last", n2[n2.WrapAround = 16] = "WrapAround", n2[n2.NoScroll = 32] = "NoScroll", n2))(N$4 || {}), T$2 = ((o2) => (o2[o2.Error = 0] = "Error", o2[o2.Overflow = 1] = "Overflow", o2[o2.Success = 2] = "Success", o2[o2.Underflow = 3] = "Underflow", o2))(T$2 || {}), F$1 = ((t2) => (t2[t2.Previous = -1] = "Previous", t2[t2.Next = 1] = "Next", t2))(F$1 || {});
function E$3(e2 = (void 0).body) {
  return e2 == null ? [] : Array.from(e2.querySelectorAll(c$2)).sort((r2, t2) => Math.sign((r2.tabIndex || Number.MAX_SAFE_INTEGER) - (t2.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var h = ((t2) => (t2[t2.Strict = 0] = "Strict", t2[t2.Loose = 1] = "Loose", t2))(h || {});
function w$4(e2, r2 = 0) {
  var t2;
  return e2 === ((t2 = i$3(e2)) == null ? void 0 : t2.body) ? false : u$7(r2, { [0]() {
    return e2.matches(c$2);
  }, [1]() {
    let l2 = e2;
    for (; l2 !== null; ) {
      if (l2.matches(c$2))
        return true;
      l2 = l2.parentElement;
    }
    return false;
  } });
}
var y$2 = ((t2) => (t2[t2.Keyboard = 0] = "Keyboard", t2[t2.Mouse = 1] = "Mouse", t2))(y$2 || {});
function S$1(e2) {
  e2 == null || e2.focus({ preventScroll: true });
}
let H$2 = ["textarea", "input"].join(",");
function I(e2) {
  var r2, t2;
  return (t2 = (r2 = e2 == null ? void 0 : e2.matches) == null ? void 0 : r2.call(e2, H$2)) != null ? t2 : false;
}
function O(e2, r2 = (t2) => t2) {
  return e2.slice().sort((t2, l2) => {
    let o2 = r2(t2), i2 = r2(l2);
    if (o2 === null || i2 === null)
      return 0;
    let n2 = o2.compareDocumentPosition(i2);
    return n2 & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : n2 & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function P(e2, r2, { sorted: t2 = true, relativeTo: l2 = null, skipElements: o2 = [] } = {}) {
  var m2;
  let i2 = (m2 = Array.isArray(e2) ? e2.length > 0 ? e2[0].ownerDocument : void 0 : e2 == null ? void 0 : e2.ownerDocument) != null ? m2 : void 0, n2 = Array.isArray(e2) ? t2 ? O(e2) : e2 : E$3(e2);
  o2.length > 0 && n2.length > 1 && (n2 = n2.filter((s3) => !o2.includes(s3))), l2 = l2 != null ? l2 : i2.activeElement;
  let x2 = (() => {
    if (r2 & 5)
      return 1;
    if (r2 & 10)
      return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), p2 = (() => {
    if (r2 & 1)
      return 0;
    if (r2 & 2)
      return Math.max(0, n2.indexOf(l2)) - 1;
    if (r2 & 4)
      return Math.max(0, n2.indexOf(l2)) + 1;
    if (r2 & 8)
      return n2.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), L2 = r2 & 32 ? { preventScroll: true } : {}, a2 = 0, d2 = n2.length, u2;
  do {
    if (a2 >= d2 || a2 + d2 <= 0)
      return 0;
    let s3 = p2 + a2;
    if (r2 & 16)
      s3 = (s3 + d2) % d2;
    else {
      if (s3 < 0)
        return 3;
      if (s3 >= d2)
        return 1;
    }
    u2 = n2[s3], u2 == null || u2.focus(L2), a2 += x2;
  } while (u2 !== i2.activeElement);
  return r2 & 6 && I(u2) && u2.select(), 2;
}
function t$3() {
  return /iPhone/gi.test((void 0).navigator.platform) || /Mac/gi.test((void 0).navigator.platform) && (void 0).navigator.maxTouchPoints > 0;
}
function i$2() {
  return /Android/gi.test((void 0).navigator.userAgent);
}
function n$2() {
  return t$3() || i$2();
}
function u$6(e2, t2, n2) {
  c$3.isServer || watchEffect((o2) => {
    (void 0).addEventListener(e2, t2, n2), o2(() => (void 0).removeEventListener(e2, t2, n2));
  });
}
function w$3(e2, n2, t2) {
  c$3.isServer || watchEffect((o2) => {
    (void 0).addEventListener(e2, n2, t2), o2(() => (void 0).removeEventListener(e2, n2, t2));
  });
}
function w$2(f2, m2, l2 = computed(() => true)) {
  function a2(e2, r2) {
    if (!l2.value || e2.defaultPrevented)
      return;
    let t2 = r2(e2);
    if (t2 === null || !t2.getRootNode().contains(t2))
      return;
    let c2 = function o2(n2) {
      return typeof n2 == "function" ? o2(n2()) : Array.isArray(n2) || n2 instanceof Set ? n2 : [n2];
    }(f2);
    for (let o2 of c2) {
      if (o2 === null)
        continue;
      let n2 = o2 instanceof HTMLElement ? o2 : o$3(o2);
      if (n2 != null && n2.contains(t2) || e2.composed && e2.composedPath().includes(n2))
        return;
    }
    return !w$4(t2, h.Loose) && t2.tabIndex !== -1 && e2.preventDefault(), m2(e2, t2);
  }
  let u2 = ref(null);
  u$6("pointerdown", (e2) => {
    var r2, t2;
    l2.value && (u2.value = ((t2 = (r2 = e2.composedPath) == null ? void 0 : r2.call(e2)) == null ? void 0 : t2[0]) || e2.target);
  }, true), u$6("mousedown", (e2) => {
    var r2, t2;
    l2.value && (u2.value = ((t2 = (r2 = e2.composedPath) == null ? void 0 : r2.call(e2)) == null ? void 0 : t2[0]) || e2.target);
  }, true), u$6("click", (e2) => {
    n$2() || u2.value && (a2(e2, () => u2.value), u2.value = null);
  }, true), u$6("touchend", (e2) => a2(e2, () => e2.target instanceof HTMLElement ? e2.target : null), true), w$3("blur", (e2) => a2(e2, () => (void 0).document.activeElement instanceof HTMLIFrameElement ? (void 0).document.activeElement : null), true);
}
function r$1(t2, e2) {
  if (t2)
    return t2;
  let n2 = e2 != null ? e2 : "button";
  if (typeof n2 == "string" && n2.toLowerCase() === "button")
    return "button";
}
function s$3(t2, e2) {
  let n2 = ref(r$1(t2.value.type, t2.value.as));
  return onMounted(() => {
    n2.value = r$1(t2.value.type, t2.value.as);
  }), watchEffect(() => {
    var u2;
    n2.value || o$3(e2) && o$3(e2) instanceof HTMLButtonElement && !((u2 = o$3(e2)) != null && u2.hasAttribute("type")) && (n2.value = "button");
  }), n2;
}
function r(e2) {
  return [e2.screenX, e2.screenY];
}
function u$5() {
  let e2 = ref([-1, -1]);
  return { wasMoved(n2) {
    let t2 = r(n2);
    return e2.value[0] === t2[0] && e2.value[1] === t2[1] ? false : (e2.value = t2, true);
  }, update(n2) {
    e2.value = r(n2);
  } };
}
var N$3 = ((o2) => (o2[o2.None = 0] = "None", o2[o2.RenderStrategy = 1] = "RenderStrategy", o2[o2.Static = 2] = "Static", o2))(N$3 || {}), S = ((e2) => (e2[e2.Unmount = 0] = "Unmount", e2[e2.Hidden = 1] = "Hidden", e2))(S || {});
function A$3({ visible: r2 = true, features: t2 = 0, ourProps: e2, theirProps: o2, ...i2 }) {
  var a2;
  let n2 = j(o2, e2), l2 = Object.assign(i2, { props: n2 });
  if (r2 || t2 & 2 && n2.static)
    return y$1(l2);
  if (t2 & 1) {
    let d2 = (a2 = n2.unmount) == null || a2 ? 0 : 1;
    return u$7(d2, { [0]() {
      return null;
    }, [1]() {
      return y$1({ ...i2, props: { ...n2, hidden: true, style: { display: "none" } } });
    } });
  }
  return y$1(l2);
}
function y$1({ props: r2, attrs: t2, slots: e2, slot: o2, name: i2 }) {
  var m2, h2;
  let { as: n2, ...l2 } = T$1(r2, ["unmount", "static"]), a2 = (m2 = e2.default) == null ? void 0 : m2.call(e2, o2), d2 = {};
  if (o2) {
    let u2 = false, c2 = [];
    for (let [p2, f2] of Object.entries(o2))
      typeof f2 == "boolean" && (u2 = true), f2 === true && c2.push(p2);
    u2 && (d2["data-headlessui-state"] = c2.join(" "));
  }
  if (n2 === "template") {
    if (a2 = b(a2 != null ? a2 : []), Object.keys(l2).length > 0 || Object.keys(t2).length > 0) {
      let [u2, ...c2] = a2 != null ? a2 : [];
      if (!v(u2) || c2.length > 0)
        throw new Error(['Passing props on "template"!', "", `The current component <${i2} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(l2).concat(Object.keys(t2)).map((s3) => s3.trim()).filter((s3, g2, R2) => R2.indexOf(s3) === g2).sort((s3, g2) => s3.localeCompare(g2)).map((s3) => `  - ${s3}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((s3) => `  - ${s3}`).join(`
`)].join(`
`));
      let p2 = j((h2 = u2.props) != null ? h2 : {}, l2, d2), f2 = cloneVNode(u2, p2, true);
      for (let s3 in p2)
        s3.startsWith("on") && (f2.props || (f2.props = {}), f2.props[s3] = p2[s3]);
      return f2;
    }
    return Array.isArray(a2) && a2.length === 1 ? a2[0] : a2;
  }
  return h$1(n2, Object.assign({}, l2, d2), { default: () => a2 });
}
function b(r2) {
  return r2.flatMap((t2) => t2.type === Fragment ? b(t2.children) : [t2]);
}
function j(...r2) {
  if (r2.length === 0)
    return {};
  if (r2.length === 1)
    return r2[0];
  let t2 = {}, e2 = {};
  for (let i2 of r2)
    for (let n2 in i2)
      n2.startsWith("on") && typeof i2[n2] == "function" ? (e2[n2] != null || (e2[n2] = []), e2[n2].push(i2[n2])) : t2[n2] = i2[n2];
  if (t2.disabled || t2["aria-disabled"])
    return Object.assign(t2, Object.fromEntries(Object.keys(e2).map((i2) => [i2, void 0])));
  for (let i2 in e2)
    Object.assign(t2, { [i2](n2, ...l2) {
      let a2 = e2[i2];
      for (let d2 of a2) {
        if (n2 instanceof Event && n2.defaultPrevented)
          return;
        d2(n2, ...l2);
      }
    } });
  return t2;
}
function E$2(r2) {
  let t2 = Object.assign({}, r2);
  for (let e2 in t2)
    t2[e2] === void 0 && delete t2[e2];
  return t2;
}
function T$1(r2, t2 = []) {
  let e2 = Object.assign({}, r2);
  for (let o2 of t2)
    o2 in e2 && delete e2[o2];
  return e2;
}
function v(r2) {
  return r2 == null ? false : typeof r2.type == "string" || typeof r2.type == "object" || typeof r2.type == "function";
}
var u$4 = ((e2) => (e2[e2.None = 1] = "None", e2[e2.Focusable = 2] = "Focusable", e2[e2.Hidden = 4] = "Hidden", e2))(u$4 || {});
let f$3 = defineComponent({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(t2, { slots: n2, attrs: i2 }) {
  return () => {
    var r2;
    let { features: e2, ...d2 } = t2, o2 = { "aria-hidden": (e2 & 2) === 2 ? true : (r2 = d2["aria-hidden"]) != null ? r2 : void 0, hidden: (e2 & 4) === 4 ? true : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(e2 & 4) === 4 && (e2 & 2) !== 2 && { display: "none" } } };
    return A$3({ ourProps: o2, theirProps: d2, slot: {}, attrs: i2, slots: n2, name: "Hidden" });
  };
} });
let n$1 = Symbol("Context");
var i$1 = ((e2) => (e2[e2.Open = 1] = "Open", e2[e2.Closed = 2] = "Closed", e2[e2.Closing = 4] = "Closing", e2[e2.Opening = 8] = "Opening", e2))(i$1 || {});
function s$2() {
  return l$2() !== null;
}
function l$2() {
  return inject(n$1, null);
}
function t$2(o2) {
  provide(n$1, o2);
}
var o$2 = ((r2) => (r2.Space = " ", r2.Enter = "Enter", r2.Escape = "Escape", r2.Backspace = "Backspace", r2.Delete = "Delete", r2.ArrowLeft = "ArrowLeft", r2.ArrowUp = "ArrowUp", r2.ArrowRight = "ArrowRight", r2.ArrowDown = "ArrowDown", r2.Home = "Home", r2.End = "End", r2.PageUp = "PageUp", r2.PageDown = "PageDown", r2.Tab = "Tab", r2))(o$2 || {});
let t$1 = [];
function u$3(l2) {
  throw new Error("Unexpected object: " + l2);
}
var c$1 = ((i2) => (i2[i2.First = 0] = "First", i2[i2.Previous = 1] = "Previous", i2[i2.Next = 2] = "Next", i2[i2.Last = 3] = "Last", i2[i2.Specific = 4] = "Specific", i2[i2.Nothing = 5] = "Nothing", i2))(c$1 || {});
function f$2(l2, n2) {
  let t2 = n2.resolveItems();
  if (t2.length <= 0)
    return null;
  let r2 = n2.resolveActiveIndex(), s3 = r2 != null ? r2 : -1;
  switch (l2.focus) {
    case 0: {
      for (let e2 = 0; e2 < t2.length; ++e2)
        if (!n2.resolveDisabled(t2[e2], e2, t2))
          return e2;
      return r2;
    }
    case 1: {
      s3 === -1 && (s3 = t2.length);
      for (let e2 = s3 - 1; e2 >= 0; --e2)
        if (!n2.resolveDisabled(t2[e2], e2, t2))
          return e2;
      return r2;
    }
    case 2: {
      for (let e2 = s3 + 1; e2 < t2.length; ++e2)
        if (!n2.resolveDisabled(t2[e2], e2, t2))
          return e2;
      return r2;
    }
    case 3: {
      for (let e2 = t2.length - 1; e2 >= 0; --e2)
        if (!n2.resolveDisabled(t2[e2], e2, t2))
          return e2;
      return r2;
    }
    case 4: {
      for (let e2 = 0; e2 < t2.length; ++e2)
        if (n2.resolveId(t2[e2], e2, t2) === l2.id)
          return e2;
      return r2;
    }
    case 5:
      return null;
    default:
      u$3(l2);
  }
}
function e$1(i2 = {}, s3 = null, t2 = []) {
  for (let [r2, n2] of Object.entries(i2))
    o$1(t2, f$1(s3, r2), n2);
  return t2;
}
function f$1(i2, s3) {
  return i2 ? i2 + "[" + s3 + "]" : s3;
}
function o$1(i2, s3, t2) {
  if (Array.isArray(t2))
    for (let [r2, n2] of t2.entries())
      o$1(i2, f$1(s3, r2.toString()), n2);
  else
    t2 instanceof Date ? i2.push([s3, t2.toISOString()]) : typeof t2 == "boolean" ? i2.push([s3, t2 ? "1" : "0"]) : typeof t2 == "string" ? i2.push([s3, t2]) : typeof t2 == "number" ? i2.push([s3, `${t2}`]) : t2 == null ? i2.push([s3, ""]) : e$1(t2, s3, i2);
}
function E$1(n2, e2, o2, r2) {
  c$3.isServer || watchEffect((t2) => {
    n2 = n2 != null ? n2 : void 0, n2.addEventListener(e2, o2, r2), t2(() => n2.removeEventListener(e2, o2, r2));
  });
}
var d$3 = ((r2) => (r2[r2.Forwards = 0] = "Forwards", r2[r2.Backwards = 1] = "Backwards", r2))(d$3 || {});
function n() {
  let o2 = ref(0);
  return w$3("keydown", (e2) => {
    e2.key === "Tab" && (o2.value = e2.shiftKey ? 1 : 0);
  }), o2;
}
function B(t2) {
  if (!t2)
    return /* @__PURE__ */ new Set();
  if (typeof t2 == "function")
    return new Set(t2());
  let n2 = /* @__PURE__ */ new Set();
  for (let r2 of t2.value) {
    let l2 = o$3(r2);
    l2 instanceof HTMLElement && n2.add(l2);
  }
  return n2;
}
var A$2 = ((e2) => (e2[e2.None = 1] = "None", e2[e2.InitialFocus = 2] = "InitialFocus", e2[e2.TabLock = 4] = "TabLock", e2[e2.FocusLock = 8] = "FocusLock", e2[e2.RestoreFocus = 16] = "RestoreFocus", e2[e2.All = 30] = "All", e2))(A$2 || {});
let ue = Object.assign(defineComponent({ name: "FocusTrap", props: { as: { type: [Object, String], default: "div" }, initialFocus: { type: Object, default: null }, features: { type: Number, default: 30 }, containers: { type: [Object, Function], default: ref(/* @__PURE__ */ new Set()) } }, inheritAttrs: false, setup(t2, { attrs: n$12, slots: r2, expose: l2 }) {
  let o2 = ref(null);
  l2({ el: o2, $el: o2 });
  let i2 = computed(() => i$3(o2)), e2 = ref(false);
  onMounted(() => e2.value = true), onUnmounted(() => e2.value = false), $$2({ ownerDocument: i2 }, computed(() => e2.value && Boolean(t2.features & 16)));
  let m2 = z$1({ ownerDocument: i2, container: o2, initialFocus: computed(() => t2.initialFocus) }, computed(() => e2.value && Boolean(t2.features & 2)));
  J({ ownerDocument: i2, container: o2, containers: t2.containers, previousActiveElement: m2 }, computed(() => e2.value && Boolean(t2.features & 8)));
  let f2 = n();
  function a2(u2) {
    let T2 = o$3(o2);
    if (!T2)
      return;
    ((w2) => w2())(() => {
      u$7(f2.value, { [d$3.Forwards]: () => {
        P(T2, N$4.First, { skipElements: [u2.relatedTarget] });
      }, [d$3.Backwards]: () => {
        P(T2, N$4.Last, { skipElements: [u2.relatedTarget] });
      } });
    });
  }
  let s3 = ref(false);
  function F2(u2) {
    u2.key === "Tab" && (s3.value = true, requestAnimationFrame(() => {
      s3.value = false;
    }));
  }
  function H2(u2) {
    if (!e2.value)
      return;
    let T2 = B(t2.containers);
    o$3(o2) instanceof HTMLElement && T2.add(o$3(o2));
    let d2 = u2.relatedTarget;
    d2 instanceof HTMLElement && d2.dataset.headlessuiFocusGuard !== "true" && (N$2(T2, d2) || (s3.value ? P(o$3(o2), u$7(f2.value, { [d$3.Forwards]: () => N$4.Next, [d$3.Backwards]: () => N$4.Previous }) | N$4.WrapAround, { relativeTo: u2.target }) : u2.target instanceof HTMLElement && S$1(u2.target)));
  }
  return () => {
    let u2 = {}, T2 = { ref: o2, onKeydown: F2, onFocusout: H2 }, { features: d2, initialFocus: w2, containers: Q2, ...O2 } = t2;
    return h$1(Fragment, [Boolean(d2 & 4) && h$1(f$3, { as: "button", type: "button", "data-headlessui-focus-guard": true, onFocus: a2, features: u$4.Focusable }), A$3({ ourProps: T2, theirProps: { ...n$12, ...O2 }, slot: u2, attrs: n$12, slots: r2, name: "FocusTrap" }), Boolean(d2 & 4) && h$1(f$3, { as: "button", type: "button", "data-headlessui-focus-guard": true, onFocus: a2, features: u$4.Focusable })]);
  };
} }), { features: A$2 });
function W$1(t2) {
  let n2 = ref(t$1.slice());
  return watch([t2], ([r2], [l2]) => {
    l2 === true && r2 === false ? t$5(() => {
      n2.value.splice(0);
    }) : l2 === false && r2 === true && (n2.value = t$1.slice());
  }, { flush: "post" }), () => {
    var r2;
    return (r2 = n2.value.find((l2) => l2 != null && l2.isConnected)) != null ? r2 : null;
  };
}
function $$2({ ownerDocument: t2 }, n2) {
  let r2 = W$1(n2);
  onMounted(() => {
    watchEffect(() => {
      var l2, o2;
      n2.value || ((l2 = t2.value) == null ? void 0 : l2.activeElement) === ((o2 = t2.value) == null ? void 0 : o2.body) && S$1(r2());
    }, { flush: "post" });
  }), onUnmounted(() => {
    n2.value && S$1(r2());
  });
}
function z$1({ ownerDocument: t2, container: n2, initialFocus: r2 }, l2) {
  let o2 = ref(null), i2 = ref(false);
  return onMounted(() => i2.value = true), onUnmounted(() => i2.value = false), onMounted(() => {
    watch([n2, r2, l2], (e2, m2) => {
      if (e2.every((a2, s3) => (m2 == null ? void 0 : m2[s3]) === a2) || !l2.value)
        return;
      let f2 = o$3(n2);
      f2 && t$5(() => {
        var F2, H2;
        if (!i2.value)
          return;
        let a2 = o$3(r2), s3 = (F2 = t2.value) == null ? void 0 : F2.activeElement;
        if (a2) {
          if (a2 === s3) {
            o2.value = s3;
            return;
          }
        } else if (f2.contains(s3)) {
          o2.value = s3;
          return;
        }
        a2 ? S$1(a2) : P(f2, N$4.First | N$4.NoScroll) === T$2.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), o2.value = (H2 = t2.value) == null ? void 0 : H2.activeElement;
      });
    }, { immediate: true, flush: "post" });
  }), o2;
}
function J({ ownerDocument: t2, container: n2, containers: r2, previousActiveElement: l2 }, o2) {
  var i2;
  E$1((i2 = t2.value) == null ? void 0 : i2.defaultView, "focus", (e2) => {
    if (!o2.value)
      return;
    let m2 = B(r2);
    o$3(n2) instanceof HTMLElement && m2.add(o$3(n2));
    let f2 = l2.value;
    if (!f2)
      return;
    let a2 = e2.target;
    a2 && a2 instanceof HTMLElement ? N$2(m2, a2) ? (l2.value = a2, S$1(a2)) : (e2.preventDefault(), e2.stopPropagation(), S$1(f2)) : S$1(l2.value);
  }, true);
}
function N$2(t2, n2) {
  for (let r2 of t2)
    if (r2.contains(n2))
      return true;
  return false;
}
function m$2(t2) {
  let e2 = shallowRef(t2.getSnapshot());
  return onUnmounted(t2.subscribe(() => {
    e2.value = t2.getSnapshot();
  })), e2;
}
function a$2(o2, r2) {
  let t2 = o2(), n2 = /* @__PURE__ */ new Set();
  return { getSnapshot() {
    return t2;
  }, subscribe(e2) {
    return n2.add(e2), () => n2.delete(e2);
  }, dispatch(e2, ...s3) {
    let i2 = r2[e2].call(t2, ...s3);
    i2 && (t2 = i2, n2.forEach((c2) => c2()));
  } };
}
function c() {
  let o2;
  return { before({ doc: e2 }) {
    var l2;
    let n2 = e2.documentElement;
    o2 = ((l2 = e2.defaultView) != null ? l2 : void 0).innerWidth - n2.clientWidth;
  }, after({ doc: e2, d: n2 }) {
    let t2 = e2.documentElement, l2 = t2.clientWidth - t2.offsetWidth, r2 = o2 - l2;
    n2.style(t2, "paddingRight", `${r2}px`);
  } };
}
function w$1() {
  return t$3() ? { before({ doc: r2, d: n2, meta: c2 }) {
    function a2(o2) {
      return c2.containers.flatMap((l2) => l2()).some((l2) => l2.contains(o2));
    }
    n2.microTask(() => {
      var s3;
      if ((void 0).getComputedStyle(r2.documentElement).scrollBehavior !== "auto") {
        let t2 = o$4();
        t2.style(r2.documentElement, "scrollBehavior", "auto"), n2.add(() => n2.microTask(() => t2.dispose()));
      }
      let o2 = (s3 = (void 0).scrollY) != null ? s3 : (void 0).pageYOffset, l2 = null;
      n2.addEventListener(r2, "click", (t2) => {
        if (t2.target instanceof HTMLElement)
          try {
            let e2 = t2.target.closest("a");
            if (!e2)
              return;
            let { hash: f2 } = new URL(e2.href), i2 = r2.querySelector(f2);
            i2 && !a2(i2) && (l2 = i2);
          } catch {
          }
      }, true), n2.addEventListener(r2, "touchstart", (t2) => {
        if (t2.target instanceof HTMLElement)
          if (a2(t2.target)) {
            let e2 = t2.target;
            for (; e2.parentElement && a2(e2.parentElement); )
              e2 = e2.parentElement;
            n2.style(e2, "overscrollBehavior", "contain");
          } else
            n2.style(t2.target, "touchAction", "none");
      }), n2.addEventListener(r2, "touchmove", (t2) => {
        if (t2.target instanceof HTMLElement) {
          if (t2.target.tagName === "INPUT")
            return;
          if (a2(t2.target)) {
            let e2 = t2.target;
            for (; e2.parentElement && e2.dataset.headlessuiPortal !== "" && !(e2.scrollHeight > e2.clientHeight || e2.scrollWidth > e2.clientWidth); )
              e2 = e2.parentElement;
            e2.dataset.headlessuiPortal === "" && t2.preventDefault();
          } else
            t2.preventDefault();
        }
      }, { passive: false }), n2.add(() => {
        var e2;
        let t2 = (e2 = (void 0).scrollY) != null ? e2 : (void 0).pageYOffset;
        o2 !== t2 && (void 0).scrollTo(0, o2), l2 && l2.isConnected && (l2.scrollIntoView({ block: "nearest" }), l2 = null);
      });
    });
  } } : {};
}
function l$1() {
  return { before({ doc: e2, d: o2 }) {
    o2.style(e2.documentElement, "overflow", "hidden");
  } };
}
function m$1(e2) {
  let n2 = {};
  for (let t2 of e2)
    Object.assign(n2, t2(n2));
  return n2;
}
let a$1 = a$2(() => /* @__PURE__ */ new Map(), { PUSH(e2, n2) {
  var o2;
  let t2 = (o2 = this.get(e2)) != null ? o2 : { doc: e2, count: 0, d: o$4(), meta: /* @__PURE__ */ new Set() };
  return t2.count++, t2.meta.add(n2), this.set(e2, t2), this;
}, POP(e2, n2) {
  let t2 = this.get(e2);
  return t2 && (t2.count--, t2.meta.delete(n2)), this;
}, SCROLL_PREVENT({ doc: e2, d: n2, meta: t2 }) {
  let o2 = { doc: e2, d: n2, meta: m$1(t2) }, c$12 = [w$1(), c(), l$1()];
  c$12.forEach(({ before: r2 }) => r2 == null ? void 0 : r2(o2)), c$12.forEach(({ after: r2 }) => r2 == null ? void 0 : r2(o2));
}, SCROLL_ALLOW({ d: e2 }) {
  e2.dispose();
}, TEARDOWN({ doc: e2 }) {
  this.delete(e2);
} });
a$1.subscribe(() => {
  let e2 = a$1.getSnapshot(), n2 = /* @__PURE__ */ new Map();
  for (let [t2] of e2)
    n2.set(t2, t2.documentElement.style.overflow);
  for (let t2 of e2.values()) {
    let o2 = n2.get(t2.doc) === "hidden", c2 = t2.count !== 0;
    (c2 && !o2 || !c2 && o2) && a$1.dispatch(t2.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", t2), t2.count === 0 && a$1.dispatch("TEARDOWN", t2);
  }
});
function d$2(t2, a2, n2) {
  let i2 = m$2(a$1), l2 = computed(() => {
    let e2 = t2.value ? i2.value.get(t2.value) : void 0;
    return e2 ? e2.count > 0 : false;
  });
  return watch([t2, a2], ([e2, m2], [r2], o2) => {
    if (!e2 || !m2)
      return;
    a$1.dispatch("PUSH", e2, n2);
    let f2 = false;
    o2(() => {
      f2 || (a$1.dispatch("POP", r2 != null ? r2 : e2, n2), f2 = true);
    });
  }, { immediate: true }), l2;
}
let i = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Map();
function E(d2, f2 = ref(true)) {
  watchEffect((o2) => {
    var a2;
    if (!f2.value)
      return;
    let e2 = o$3(d2);
    if (!e2)
      return;
    o2(function() {
      var u2;
      if (!e2)
        return;
      let r2 = (u2 = t.get(e2)) != null ? u2 : 1;
      if (r2 === 1 ? t.delete(e2) : t.set(e2, r2 - 1), r2 !== 1)
        return;
      let n2 = i.get(e2);
      n2 && (n2["aria-hidden"] === null ? e2.removeAttribute("aria-hidden") : e2.setAttribute("aria-hidden", n2["aria-hidden"]), e2.inert = n2.inert, i.delete(e2));
    });
    let l2 = (a2 = t.get(e2)) != null ? a2 : 0;
    t.set(e2, l2 + 1), l2 === 0 && (i.set(e2, { "aria-hidden": e2.getAttribute("aria-hidden"), inert: e2.inert }), e2.setAttribute("aria-hidden", "true"), e2.inert = true);
  });
}
function N$1({ defaultContainers: o2 = [], portals: i2, mainTreeNodeRef: H2 } = {}) {
  let t2 = ref(null), r2 = i$3(t2);
  function u2() {
    var l2, f2, a2;
    let n2 = [];
    for (let e2 of o2)
      e2 !== null && (e2 instanceof HTMLElement ? n2.push(e2) : "value" in e2 && e2.value instanceof HTMLElement && n2.push(e2.value));
    if (i2 != null && i2.value)
      for (let e2 of i2.value)
        n2.push(e2);
    for (let e2 of (l2 = r2 == null ? void 0 : r2.querySelectorAll("html > *, body > *")) != null ? l2 : [])
      e2 !== (void 0).body && e2 !== (void 0).head && e2 instanceof HTMLElement && e2.id !== "headlessui-portal-root" && (e2.contains(o$3(t2)) || e2.contains((a2 = (f2 = o$3(t2)) == null ? void 0 : f2.getRootNode()) == null ? void 0 : a2.host) || n2.some((M2) => e2.contains(M2)) || n2.push(e2));
    return n2;
  }
  return { resolveContainers: u2, contains(n2) {
    return u2().some((l2) => l2.contains(n2));
  }, mainTreeNodeRef: t2, MainTreeNode() {
    return H2 != null ? null : h$1(f$3, { features: u$4.Hidden, ref: t2 });
  } };
}
let e = Symbol("ForcePortalRootContext");
function s$1() {
  return inject(e, false);
}
let u$2 = defineComponent({ name: "ForcePortalRoot", props: { as: { type: [Object, String], default: "template" }, force: { type: Boolean, default: false } }, setup(o2, { slots: t2, attrs: r2 }) {
  return provide(e, o2.force), () => {
    let { force: f2, ...n2 } = o2;
    return A$3({ theirProps: n2, ourProps: {}, slot: {}, slots: t2, attrs: r2, name: "ForcePortalRoot" });
  };
} });
let u$1 = Symbol("StackContext");
var s2 = ((e2) => (e2[e2.Add = 0] = "Add", e2[e2.Remove = 1] = "Remove", e2))(s2 || {});
function y() {
  return inject(u$1, () => {
  });
}
function R$1({ type: o2, enabled: r2, element: e2, onUpdate: i2 }) {
  let a2 = y();
  function t2(...n2) {
    i2 == null || i2(...n2), a2(...n2);
  }
  onMounted(() => {
    watch(r2, (n2, d2) => {
      n2 ? t2(0, o2, e2) : d2 === true && t2(1, o2, e2);
    }, { immediate: true, flush: "sync" });
  }), onUnmounted(() => {
    r2.value && t2(1, o2, e2);
  }), provide(u$1, t2);
}
let u = Symbol("DescriptionContext");
function w() {
  let t2 = inject(u, null);
  if (t2 === null)
    throw new Error("Missing parent");
  return t2;
}
function k({ slot: t2 = ref({}), name: o2 = "Description", props: s3 = {} } = {}) {
  let e2 = ref([]);
  function r2(n2) {
    return e2.value.push(n2), () => {
      let i2 = e2.value.indexOf(n2);
      i2 !== -1 && e2.value.splice(i2, 1);
    };
  }
  return provide(u, { register: r2, slot: t2, name: o2, props: s3 }), computed(() => e2.value.length > 0 ? e2.value.join(" ") : void 0);
}
defineComponent({ name: "Description", props: { as: { type: [Object, String], default: "p" }, id: { type: String, default: null } }, setup(t2, { attrs: o2, slots: s3 }) {
  var n2;
  let e2 = (n2 = t2.id) != null ? n2 : `headlessui-description-${I$1()}`, r2 = w();
  return onMounted(() => onUnmounted(r2.register(e2))), () => {
    let { name: i2 = "Description", slot: l2 = ref({}), props: d2 = {} } = r2, { ...c2 } = t2, f2 = { ...Object.entries(d2).reduce((a2, [g2, m2]) => Object.assign(a2, { [g2]: unref(m2) }), {}), id: e2 };
    return A$3({ ourProps: f2, theirProps: c2, slot: l2.value, attrs: o2, slots: s3, name: i2 });
  };
} });
function x(e2) {
  let t2 = i$3(e2);
  if (!t2) {
    if (e2 === null)
      return null;
    throw new Error(`[Headless UI]: Cannot find ownerDocument for contextElement: ${e2}`);
  }
  let l2 = t2.getElementById("headlessui-portal-root");
  if (l2)
    return l2;
  let r2 = t2.createElement("div");
  return r2.setAttribute("id", "headlessui-portal-root"), t2.body.appendChild(r2);
}
const f = /* @__PURE__ */ new WeakMap();
function U(e2) {
  var t2;
  return (t2 = f.get(e2)) != null ? t2 : 0;
}
function M(e2, t2) {
  let l2 = t2(U(e2));
  return l2 <= 0 ? f.delete(e2) : f.set(e2, l2), l2;
}
let $$1 = defineComponent({ name: "Portal", props: { as: { type: [Object, String], default: "div" } }, setup(e2, { slots: t2, attrs: l2 }) {
  let r2 = ref(null), i2 = computed(() => i$3(r2)), o2 = s$1(), u2 = inject(H$1, null), n2 = ref(o2 === true || u2 == null ? x(r2.value) : u2.resolveTarget());
  n2.value && M(n2.value, (a2) => a2 + 1);
  let c2 = ref(false);
  onMounted(() => {
    c2.value = true;
  }), watchEffect(() => {
    o2 || u2 != null && (n2.value = u2.resolveTarget());
  });
  let v2 = inject(d$1, null), g2 = false, b2 = getCurrentInstance();
  return watch(r2, () => {
    if (g2 || !v2)
      return;
    let a2 = o$3(r2);
    a2 && (onUnmounted(v2.register(a2), b2), g2 = true);
  }), onUnmounted(() => {
    var P2, T2;
    let a2 = (P2 = i2.value) == null ? void 0 : P2.getElementById("headlessui-portal-root");
    !a2 || n2.value !== a2 || M(n2.value, (L2) => L2 - 1) || n2.value.children.length > 0 || (T2 = n2.value.parentElement) == null || T2.removeChild(n2.value);
  }), () => {
    if (!c2.value || n2.value === null)
      return null;
    let a2 = { ref: r2, "data-headlessui-portal": "" };
    return h$1(Teleport, { to: n2.value }, A$3({ ourProps: a2, theirProps: e2, slot: {}, attrs: l2, slots: t2, name: "Portal" }));
  };
} }), d$1 = Symbol("PortalParentContext");
function q() {
  let e2 = inject(d$1, null), t2 = ref([]);
  function l2(o2) {
    return t2.value.push(o2), e2 && e2.register(o2), () => r2(o2);
  }
  function r2(o2) {
    let u2 = t2.value.indexOf(o2);
    u2 !== -1 && t2.value.splice(u2, 1), e2 && e2.unregister(o2);
  }
  let i2 = { register: l2, unregister: r2, portals: t2 };
  return [t2, defineComponent({ name: "PortalWrapper", setup(o2, { slots: u2 }) {
    return provide(d$1, i2), () => {
      var n2;
      return (n2 = u2.default) == null ? void 0 : n2.call(u2);
    };
  } })];
}
let H$1 = Symbol("PortalGroupContext"), z = defineComponent({ name: "PortalGroup", props: { as: { type: [Object, String], default: "template" }, target: { type: Object, default: null } }, setup(e2, { attrs: t2, slots: l2 }) {
  let r2 = reactive({ resolveTarget() {
    return e2.target;
  } });
  return provide(H$1, r2), () => {
    let { target: i2, ...o2 } = e2;
    return A$3({ theirProps: o2, ourProps: {}, slot: {}, attrs: t2, slots: l2, name: "PortalGroup" });
  };
} });
var Te$1 = ((l2) => (l2[l2.Open = 0] = "Open", l2[l2.Closed = 1] = "Closed", l2))(Te$1 || {});
let H = Symbol("DialogContext");
function T(t2) {
  let i2 = inject(H, null);
  if (i2 === null) {
    let l2 = new Error(`<${t2} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(l2, T), l2;
  }
  return i2;
}
let A$1 = "DC8F892D-2EBD-447C-A4C8-A03058436FF4", Ye = defineComponent({ name: "Dialog", inheritAttrs: false, props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true }, open: { type: [Boolean, String], default: A$1 }, initialFocus: { type: Object, default: null }, id: { type: String, default: null }, role: { type: String, default: "dialog" } }, emits: { close: (t2) => true }, setup(t2, { emit: i2, attrs: l2, slots: p2, expose: s$12 }) {
  var q$1, W2;
  let n2 = (q$1 = t2.id) != null ? q$1 : `headlessui-dialog-${I$1()}`, u2 = ref(false);
  onMounted(() => {
    u2.value = true;
  });
  let r2 = false, g2 = computed(() => t2.role === "dialog" || t2.role === "alertdialog" ? t2.role : (r2 || (r2 = true, console.warn(`Invalid role [${g2}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)), "dialog")), D = ref(0), S2 = l$2(), R2 = computed(() => t2.open === A$1 && S2 !== null ? (S2.value & i$1.Open) === i$1.Open : t2.open), m2 = ref(null), E$22 = computed(() => i$3(m2));
  if (s$12({ el: m2, $el: m2 }), !(t2.open !== A$1 || S2 !== null))
    throw new Error("You forgot to provide an `open` prop to the `Dialog`.");
  if (typeof R2.value != "boolean")
    throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${R2.value === A$1 ? void 0 : t2.open}`);
  let c2 = computed(() => u2.value && R2.value ? 0 : 1), k$1 = computed(() => c2.value === 0), w2 = computed(() => D.value > 1), N2 = inject(H, null) !== null, [Q2, X] = q(), { resolveContainers: B2, mainTreeNodeRef: K, MainTreeNode: Z } = N$1({ portals: Q2, defaultContainers: [computed(() => {
    var e2;
    return (e2 = h2.panelRef.value) != null ? e2 : m2.value;
  })] }), ee = computed(() => w2.value ? "parent" : "leaf"), U2 = computed(() => S2 !== null ? (S2.value & i$1.Closing) === i$1.Closing : false), te = computed(() => N2 || U2.value ? false : k$1.value), le = computed(() => {
    var e2, a2, d2;
    return (d2 = Array.from((a2 = (e2 = E$22.value) == null ? void 0 : e2.querySelectorAll("body > *")) != null ? a2 : []).find((f2) => f2.id === "headlessui-portal-root" ? false : f2.contains(o$3(K)) && f2 instanceof HTMLElement)) != null ? d2 : null;
  });
  E(le, te);
  let ae = computed(() => w2.value ? true : k$1.value), oe = computed(() => {
    var e2, a2, d2;
    return (d2 = Array.from((a2 = (e2 = E$22.value) == null ? void 0 : e2.querySelectorAll("[data-headlessui-portal]")) != null ? a2 : []).find((f2) => f2.contains(o$3(K)) && f2 instanceof HTMLElement)) != null ? d2 : null;
  });
  E(oe, ae), R$1({ type: "Dialog", enabled: computed(() => c2.value === 0), element: m2, onUpdate: (e2, a2) => {
    if (a2 === "Dialog")
      return u$7(e2, { [s2.Add]: () => D.value += 1, [s2.Remove]: () => D.value -= 1 });
  } });
  let re = k({ name: "DialogDescription", slot: computed(() => ({ open: R2.value })) }), M2 = ref(null), h2 = { titleId: M2, panelRef: ref(null), dialogState: c2, setTitleId(e2) {
    M2.value !== e2 && (M2.value = e2);
  }, close() {
    i2("close", false);
  } };
  provide(H, h2);
  let ne = computed(() => !(!k$1.value || w2.value));
  w$2(B2, (e2, a2) => {
    e2.preventDefault(), h2.close(), nextTick(() => a2 == null ? void 0 : a2.focus());
  }, ne);
  let ie = computed(() => !(w2.value || c2.value !== 0));
  E$1((W2 = E$22.value) == null ? void 0 : W2.defaultView, "keydown", (e2) => {
    ie.value && (e2.defaultPrevented || e2.key === o$2.Escape && (e2.preventDefault(), e2.stopPropagation(), h2.close()));
  });
  let ue$1 = computed(() => !(U2.value || c2.value !== 0 || N2));
  return d$2(E$22, ue$1, (e2) => {
    var a2;
    return { containers: [...(a2 = e2.containers) != null ? a2 : [], B2] };
  }), watchEffect((e2) => {
    if (c2.value !== 0)
      return;
    let a2 = o$3(m2);
    if (!a2)
      return;
    let d2 = new ResizeObserver((f2) => {
      for (let L2 of f2) {
        let x2 = L2.target.getBoundingClientRect();
        x2.x === 0 && x2.y === 0 && x2.width === 0 && x2.height === 0 && h2.close();
      }
    });
    d2.observe(a2), e2(() => d2.disconnect());
  }), () => {
    let { open: e2, initialFocus: a2, ...d2 } = t2, f2 = { ...l2, ref: m2, id: n2, role: g2.value, "aria-modal": c2.value === 0 ? true : void 0, "aria-labelledby": M2.value, "aria-describedby": re.value }, L2 = { open: c2.value === 0 };
    return h$1(u$2, { force: true }, () => [h$1($$1, () => h$1(z, { target: m2.value }, () => h$1(u$2, { force: false }, () => h$1(ue, { initialFocus: a2, containers: B2, features: k$1.value ? u$7(ee.value, { parent: ue.features.RestoreFocus, leaf: ue.features.All & ~ue.features.FocusLock }) : ue.features.None }, () => h$1(X, {}, () => A$3({ ourProps: f2, theirProps: { ...d2, ...l2 }, slot: L2, attrs: l2, slots: p2, visible: c2.value === 0, features: N$3.RenderStrategy | N$3.Static, name: "Dialog" })))))), h$1(Z)]);
  };
} }), _e = defineComponent({ name: "DialogOverlay", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: null } }, setup(t2, { attrs: i2, slots: l2 }) {
  var u2;
  let p2 = (u2 = t2.id) != null ? u2 : `headlessui-dialog-overlay-${I$1()}`, s3 = T("DialogOverlay");
  function n2(r2) {
    r2.target === r2.currentTarget && (r2.preventDefault(), r2.stopPropagation(), s3.close());
  }
  return () => {
    let { ...r2 } = t2;
    return A$3({ ourProps: { id: p2, "aria-hidden": true, onClick: n2 }, theirProps: r2, slot: { open: s3.dialogState.value === 0 }, attrs: i2, slots: l2, name: "DialogOverlay" });
  };
} });
defineComponent({ name: "DialogBackdrop", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: null } }, inheritAttrs: false, setup(t2, { attrs: i2, slots: l2, expose: p2 }) {
  var r2;
  let s3 = (r2 = t2.id) != null ? r2 : `headlessui-dialog-backdrop-${I$1()}`, n2 = T("DialogBackdrop"), u2 = ref(null);
  return p2({ el: u2, $el: u2 }), onMounted(() => {
    if (n2.panelRef.value === null)
      throw new Error("A <DialogBackdrop /> component is being used, but a <DialogPanel /> component is missing.");
  }), () => {
    let { ...g2 } = t2, D = { id: s3, ref: u2, "aria-hidden": true };
    return h$1(u$2, { force: true }, () => h$1($$1, () => A$3({ ourProps: D, theirProps: { ...i2, ...g2 }, slot: { open: n2.dialogState.value === 0 }, attrs: i2, slots: l2, name: "DialogBackdrop" })));
  };
} });
defineComponent({ name: "DialogPanel", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: null } }, setup(t2, { attrs: i2, slots: l2, expose: p2 }) {
  var r2;
  let s3 = (r2 = t2.id) != null ? r2 : `headlessui-dialog-panel-${I$1()}`, n2 = T("DialogPanel");
  p2({ el: n2.panelRef, $el: n2.panelRef });
  function u2(g2) {
    g2.stopPropagation();
  }
  return () => {
    let { ...g2 } = t2, D = { id: s3, ref: n2.panelRef, onClick: u2 };
    return A$3({ ourProps: D, theirProps: g2, slot: { open: n2.dialogState.value === 0 }, attrs: i2, slots: l2, name: "DialogPanel" });
  };
} });
defineComponent({ name: "DialogTitle", props: { as: { type: [Object, String], default: "h2" }, id: { type: String, default: null } }, setup(t2, { attrs: i2, slots: l2 }) {
  var n2;
  let p2 = (n2 = t2.id) != null ? n2 : `headlessui-dialog-title-${I$1()}`, s3 = T("DialogTitle");
  return onMounted(() => {
    s3.setTitleId(p2), onUnmounted(() => s3.setTitleId(null));
  }), () => {
    let { ...u2 } = t2;
    return A$3({ ourProps: { id: p2 }, theirProps: u2, slot: { open: s3.dialogState.value === 0 }, attrs: i2, slots: l2, name: "DialogTitle" });
  };
} });
let a = /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;
function o(e2) {
  var r2, i2;
  let n2 = (r2 = e2.innerText) != null ? r2 : "", t2 = e2.cloneNode(true);
  if (!(t2 instanceof HTMLElement))
    return n2;
  let u2 = false;
  for (let f2 of t2.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))
    f2.remove(), u2 = true;
  let l2 = u2 ? (i2 = t2.innerText) != null ? i2 : "" : n2;
  return a.test(l2) && (l2 = l2.replace(a, "")), l2;
}
function g$2(e2) {
  let n2 = e2.getAttribute("aria-label");
  if (typeof n2 == "string")
    return n2.trim();
  let t2 = e2.getAttribute("aria-labelledby");
  if (t2) {
    let u2 = t2.split(" ").map((l2) => {
      let r2 = (void 0).getElementById(l2);
      if (r2) {
        let i2 = r2.getAttribute("aria-label");
        return typeof i2 == "string" ? i2.trim() : o(r2).trim();
      }
      return null;
    }).filter(Boolean);
    if (u2.length > 0)
      return u2.join(", ");
  }
  return o(e2).trim();
}
function p(a2) {
  let t2 = ref(""), r2 = ref("");
  return () => {
    let e2 = o$3(a2);
    if (!e2)
      return "";
    let l2 = e2.innerText;
    if (t2.value === l2)
      return r2.value;
    let u2 = g$2(e2).trim().toLowerCase();
    return t2.value = l2, r2.value = u2, u2;
  };
}
function pe$1(o2, b2) {
  return o2 === b2;
}
var ce$1 = ((r2) => (r2[r2.Open = 0] = "Open", r2[r2.Closed = 1] = "Closed", r2))(ce$1 || {}), ve = ((r2) => (r2[r2.Single = 0] = "Single", r2[r2.Multi = 1] = "Multi", r2))(ve || {}), be = ((r2) => (r2[r2.Pointer = 0] = "Pointer", r2[r2.Other = 1] = "Other", r2))(be || {});
function me$1(o2) {
  requestAnimationFrame(() => requestAnimationFrame(o2));
}
let $ = Symbol("ListboxContext");
function A(o2) {
  let b2 = inject($, null);
  if (b2 === null) {
    let r2 = new Error(`<${o2} /> is missing a parent <Listbox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r2, A), r2;
  }
  return b2;
}
let Ie = defineComponent({ name: "Listbox", emits: { "update:modelValue": (o2) => true }, props: { as: { type: [Object, String], default: "template" }, disabled: { type: [Boolean], default: false }, by: { type: [String, Function], default: () => pe$1 }, horizontal: { type: [Boolean], default: false }, modelValue: { type: [Object, String, Number, Boolean], default: void 0 }, defaultValue: { type: [Object, String, Number, Boolean], default: void 0 }, form: { type: String, optional: true }, name: { type: String, optional: true }, multiple: { type: [Boolean], default: false } }, inheritAttrs: false, setup(o2, { slots: b2, attrs: r2, emit: w2 }) {
  let n2 = ref(1), e2 = ref(null), f2 = ref(null), v2 = ref(null), s3 = ref([]), m2 = ref(""), p2 = ref(null), a2 = ref(1);
  function u2(t2 = (i2) => i2) {
    let i2 = p2.value !== null ? s3.value[p2.value] : null, l2 = O(t2(s3.value.slice()), (O2) => o$3(O2.dataRef.domRef)), d2 = i2 ? l2.indexOf(i2) : null;
    return d2 === -1 && (d2 = null), { options: l2, activeOptionIndex: d2 };
  }
  let D = computed(() => o2.multiple ? 1 : 0), [y2, L2] = d$5(computed(() => o2.modelValue), (t2) => w2("update:modelValue", t2), computed(() => o2.defaultValue)), M2 = computed(() => y2.value === void 0 ? u$7(D.value, { [1]: [], [0]: void 0 }) : y2.value), k2 = { listboxState: n2, value: M2, mode: D, compare(t2, i2) {
    if (typeof o2.by == "string") {
      let l2 = o2.by;
      return (t2 == null ? void 0 : t2[l2]) === (i2 == null ? void 0 : i2[l2]);
    }
    return o2.by(t2, i2);
  }, orientation: computed(() => o2.horizontal ? "horizontal" : "vertical"), labelRef: e2, buttonRef: f2, optionsRef: v2, disabled: computed(() => o2.disabled), options: s3, searchQuery: m2, activeOptionIndex: p2, activationTrigger: a2, closeListbox() {
    o2.disabled || n2.value !== 1 && (n2.value = 1, p2.value = null);
  }, openListbox() {
    o2.disabled || n2.value !== 0 && (n2.value = 0);
  }, goToOption(t2, i2, l2) {
    if (o2.disabled || n2.value === 1)
      return;
    let d2 = u2(), O2 = f$2(t2 === c$1.Specific ? { focus: c$1.Specific, id: i2 } : { focus: t2 }, { resolveItems: () => d2.options, resolveActiveIndex: () => d2.activeOptionIndex, resolveId: (h2) => h2.id, resolveDisabled: (h2) => h2.dataRef.disabled });
    m2.value = "", p2.value = O2, a2.value = l2 != null ? l2 : 1, s3.value = d2.options;
  }, search(t2) {
    if (o2.disabled || n2.value === 1)
      return;
    let l2 = m2.value !== "" ? 0 : 1;
    m2.value += t2.toLowerCase();
    let O2 = (p2.value !== null ? s3.value.slice(p2.value + l2).concat(s3.value.slice(0, p2.value + l2)) : s3.value).find((I2) => I2.dataRef.textValue.startsWith(m2.value) && !I2.dataRef.disabled), h2 = O2 ? s3.value.indexOf(O2) : -1;
    h2 === -1 || h2 === p2.value || (p2.value = h2, a2.value = 1);
  }, clearSearch() {
    o2.disabled || n2.value !== 1 && m2.value !== "" && (m2.value = "");
  }, registerOption(t2, i2) {
    let l2 = u2((d2) => [...d2, { id: t2, dataRef: i2 }]);
    s3.value = l2.options, p2.value = l2.activeOptionIndex;
  }, unregisterOption(t2) {
    let i2 = u2((l2) => {
      let d2 = l2.findIndex((O2) => O2.id === t2);
      return d2 !== -1 && l2.splice(d2, 1), l2;
    });
    s3.value = i2.options, p2.value = i2.activeOptionIndex, a2.value = 1;
  }, theirOnChange(t2) {
    o2.disabled || L2(t2);
  }, select(t2) {
    o2.disabled || L2(u$7(D.value, { [0]: () => t2, [1]: () => {
      let i2 = toRaw(k2.value.value).slice(), l2 = toRaw(t2), d2 = i2.findIndex((O2) => k2.compare(l2, toRaw(O2)));
      return d2 === -1 ? i2.push(l2) : i2.splice(d2, 1), i2;
    } }));
  } };
  w$2([f2, v2], (t2, i2) => {
    var l2;
    k2.closeListbox(), w$4(i2, h.Loose) || (t2.preventDefault(), (l2 = o$3(f2)) == null || l2.focus());
  }, computed(() => n2.value === 0)), provide($, k2), t$2(computed(() => u$7(n2.value, { [0]: i$1.Open, [1]: i$1.Closed })));
  let C = computed(() => {
    var t2;
    return (t2 = o$3(f2)) == null ? void 0 : t2.closest("form");
  });
  return onMounted(() => {
    watch([C], () => {
      if (!C.value || o2.defaultValue === void 0)
        return;
      function t2() {
        k2.theirOnChange(o2.defaultValue);
      }
      return C.value.addEventListener("reset", t2), () => {
        var i2;
        (i2 = C.value) == null || i2.removeEventListener("reset", t2);
      };
    }, { immediate: true });
  }), () => {
    let { name: t2, modelValue: i2, disabled: l2, form: d2, ...O2 } = o2, h2 = { open: n2.value === 0, disabled: l2, value: M2.value };
    return h$1(Fragment, [...t2 != null && M2.value != null ? e$1({ [t2]: M2.value }).map(([I2, Q2]) => h$1(f$3, E$2({ features: u$4.Hidden, key: I2, as: "input", type: "hidden", hidden: true, readOnly: true, form: d2, disabled: l2, name: I2, value: Q2 }))) : [], A$3({ ourProps: {}, theirProps: { ...r2, ...T$1(O2, ["defaultValue", "onUpdate:modelValue", "horizontal", "multiple", "by"]) }, slot: h2, slots: b2, attrs: r2, name: "Listbox" })]);
  };
} });
defineComponent({ name: "ListboxLabel", props: { as: { type: [Object, String], default: "label" }, id: { type: String, default: null } }, setup(o2, { attrs: b2, slots: r2 }) {
  var f2;
  let w2 = (f2 = o2.id) != null ? f2 : `headlessui-listbox-label-${I$1()}`, n2 = A("ListboxLabel");
  function e2() {
    var v2;
    (v2 = o$3(n2.buttonRef)) == null || v2.focus({ preventScroll: true });
  }
  return () => {
    let v2 = { open: n2.listboxState.value === 0, disabled: n2.disabled.value }, { ...s3 } = o2, m2 = { id: w2, ref: n2.labelRef, onClick: e2 };
    return A$3({ ourProps: m2, theirProps: s3, slot: v2, attrs: b2, slots: r2, name: "ListboxLabel" });
  };
} });
let je = defineComponent({ name: "ListboxButton", props: { as: { type: [Object, String], default: "button" }, id: { type: String, default: null } }, setup(o2, { attrs: b2, slots: r2, expose: w2 }) {
  var p2;
  let n2 = (p2 = o2.id) != null ? p2 : `headlessui-listbox-button-${I$1()}`, e2 = A("ListboxButton");
  w2({ el: e2.buttonRef, $el: e2.buttonRef });
  function f2(a2) {
    switch (a2.key) {
      case o$2.Space:
      case o$2.Enter:
      case o$2.ArrowDown:
        a2.preventDefault(), e2.openListbox(), nextTick(() => {
          var u2;
          (u2 = o$3(e2.optionsRef)) == null || u2.focus({ preventScroll: true }), e2.value.value || e2.goToOption(c$1.First);
        });
        break;
      case o$2.ArrowUp:
        a2.preventDefault(), e2.openListbox(), nextTick(() => {
          var u2;
          (u2 = o$3(e2.optionsRef)) == null || u2.focus({ preventScroll: true }), e2.value.value || e2.goToOption(c$1.Last);
        });
        break;
    }
  }
  function v2(a2) {
    switch (a2.key) {
      case o$2.Space:
        a2.preventDefault();
        break;
    }
  }
  function s3(a2) {
    e2.disabled.value || (e2.listboxState.value === 0 ? (e2.closeListbox(), nextTick(() => {
      var u2;
      return (u2 = o$3(e2.buttonRef)) == null ? void 0 : u2.focus({ preventScroll: true });
    })) : (a2.preventDefault(), e2.openListbox(), me$1(() => {
      var u2;
      return (u2 = o$3(e2.optionsRef)) == null ? void 0 : u2.focus({ preventScroll: true });
    })));
  }
  let m2 = s$3(computed(() => ({ as: o2.as, type: b2.type })), e2.buttonRef);
  return () => {
    var y2, L2;
    let a2 = { open: e2.listboxState.value === 0, disabled: e2.disabled.value, value: e2.value.value }, { ...u2 } = o2, D = { ref: e2.buttonRef, id: n2, type: m2.value, "aria-haspopup": "listbox", "aria-controls": (y2 = o$3(e2.optionsRef)) == null ? void 0 : y2.id, "aria-expanded": e2.listboxState.value === 0, "aria-labelledby": e2.labelRef.value ? [(L2 = o$3(e2.labelRef)) == null ? void 0 : L2.id, n2].join(" ") : void 0, disabled: e2.disabled.value === true ? true : void 0, onKeydown: f2, onKeyup: v2, onClick: s3 };
    return A$3({ ourProps: D, theirProps: u2, slot: a2, attrs: b2, slots: r2, name: "ListboxButton" });
  };
} }), Ae = defineComponent({ name: "ListboxOptions", props: { as: { type: [Object, String], default: "ul" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true }, id: { type: String, default: null } }, setup(o2, { attrs: b2, slots: r2, expose: w2 }) {
  var p2;
  let n2 = (p2 = o2.id) != null ? p2 : `headlessui-listbox-options-${I$1()}`, e2 = A("ListboxOptions"), f2 = ref(null);
  w2({ el: e2.optionsRef, $el: e2.optionsRef });
  function v2(a2) {
    switch (f2.value && clearTimeout(f2.value), a2.key) {
      case o$2.Space:
        if (e2.searchQuery.value !== "")
          return a2.preventDefault(), a2.stopPropagation(), e2.search(a2.key);
      case o$2.Enter:
        if (a2.preventDefault(), a2.stopPropagation(), e2.activeOptionIndex.value !== null) {
          let u2 = e2.options.value[e2.activeOptionIndex.value];
          e2.select(u2.dataRef.value);
        }
        e2.mode.value === 0 && (e2.closeListbox(), nextTick(() => {
          var u2;
          return (u2 = o$3(e2.buttonRef)) == null ? void 0 : u2.focus({ preventScroll: true });
        }));
        break;
      case u$7(e2.orientation.value, { vertical: o$2.ArrowDown, horizontal: o$2.ArrowRight }):
        return a2.preventDefault(), a2.stopPropagation(), e2.goToOption(c$1.Next);
      case u$7(e2.orientation.value, { vertical: o$2.ArrowUp, horizontal: o$2.ArrowLeft }):
        return a2.preventDefault(), a2.stopPropagation(), e2.goToOption(c$1.Previous);
      case o$2.Home:
      case o$2.PageUp:
        return a2.preventDefault(), a2.stopPropagation(), e2.goToOption(c$1.First);
      case o$2.End:
      case o$2.PageDown:
        return a2.preventDefault(), a2.stopPropagation(), e2.goToOption(c$1.Last);
      case o$2.Escape:
        a2.preventDefault(), a2.stopPropagation(), e2.closeListbox(), nextTick(() => {
          var u2;
          return (u2 = o$3(e2.buttonRef)) == null ? void 0 : u2.focus({ preventScroll: true });
        });
        break;
      case o$2.Tab:
        a2.preventDefault(), a2.stopPropagation();
        break;
      default:
        a2.key.length === 1 && (e2.search(a2.key), f2.value = setTimeout(() => e2.clearSearch(), 350));
        break;
    }
  }
  let s3 = l$2(), m2 = computed(() => s3 !== null ? (s3.value & i$1.Open) === i$1.Open : e2.listboxState.value === 0);
  return () => {
    var y2, L2;
    let a2 = { open: e2.listboxState.value === 0 }, { ...u2 } = o2, D = { "aria-activedescendant": e2.activeOptionIndex.value === null || (y2 = e2.options.value[e2.activeOptionIndex.value]) == null ? void 0 : y2.id, "aria-multiselectable": e2.mode.value === 1 ? true : void 0, "aria-labelledby": (L2 = o$3(e2.buttonRef)) == null ? void 0 : L2.id, "aria-orientation": e2.orientation.value, id: n2, onKeydown: v2, role: "listbox", tabIndex: 0, ref: e2.optionsRef };
    return A$3({ ourProps: D, theirProps: u2, slot: a2, attrs: b2, slots: r2, features: N$3.RenderStrategy | N$3.Static, visible: m2.value, name: "ListboxOptions" });
  };
} }), Fe = defineComponent({ name: "ListboxOption", props: { as: { type: [Object, String], default: "li" }, value: { type: [Object, String, Number, Boolean] }, disabled: { type: Boolean, default: false }, id: { type: String, default: null } }, setup(o2, { slots: b2, attrs: r2, expose: w2 }) {
  var C;
  let n2 = (C = o2.id) != null ? C : `headlessui-listbox-option-${I$1()}`, e2 = A("ListboxOption"), f2 = ref(null);
  w2({ el: f2, $el: f2 });
  let v2 = computed(() => e2.activeOptionIndex.value !== null ? e2.options.value[e2.activeOptionIndex.value].id === n2 : false), s3 = computed(() => u$7(e2.mode.value, { [0]: () => e2.compare(toRaw(e2.value.value), toRaw(o2.value)), [1]: () => toRaw(e2.value.value).some((t2) => e2.compare(toRaw(t2), toRaw(o2.value))) })), m2 = computed(() => u$7(e2.mode.value, { [1]: () => {
    var i2;
    let t2 = toRaw(e2.value.value);
    return ((i2 = e2.options.value.find((l2) => t2.some((d2) => e2.compare(toRaw(d2), toRaw(l2.dataRef.value))))) == null ? void 0 : i2.id) === n2;
  }, [0]: () => s3.value })), p$1 = p(f2), a2 = computed(() => ({ disabled: o2.disabled, value: o2.value, get textValue() {
    return p$1();
  }, domRef: f2 }));
  onMounted(() => e2.registerOption(n2, a2)), onUnmounted(() => e2.unregisterOption(n2)), onMounted(() => {
    watch([e2.listboxState, s3], () => {
      e2.listboxState.value === 0 && s3.value && u$7(e2.mode.value, { [1]: () => {
        m2.value && e2.goToOption(c$1.Specific, n2);
      }, [0]: () => {
        e2.goToOption(c$1.Specific, n2);
      } });
    }, { immediate: true });
  }), watchEffect(() => {
    e2.listboxState.value === 0 && v2.value && e2.activationTrigger.value !== 0 && nextTick(() => {
      var t2, i2;
      return (i2 = (t2 = o$3(f2)) == null ? void 0 : t2.scrollIntoView) == null ? void 0 : i2.call(t2, { block: "nearest" });
    });
  });
  function u2(t2) {
    if (o2.disabled)
      return t2.preventDefault();
    e2.select(o2.value), e2.mode.value === 0 && (e2.closeListbox(), nextTick(() => {
      var i2;
      return (i2 = o$3(e2.buttonRef)) == null ? void 0 : i2.focus({ preventScroll: true });
    }));
  }
  function D() {
    if (o2.disabled)
      return e2.goToOption(c$1.Nothing);
    e2.goToOption(c$1.Specific, n2);
  }
  let y2 = u$5();
  function L2(t2) {
    y2.update(t2);
  }
  function M2(t2) {
    y2.wasMoved(t2) && (o2.disabled || v2.value || e2.goToOption(c$1.Specific, n2, 0));
  }
  function k2(t2) {
    y2.wasMoved(t2) && (o2.disabled || v2.value && e2.goToOption(c$1.Nothing));
  }
  return () => {
    let { disabled: t2 } = o2, i2 = { active: v2.value, selected: s3.value, disabled: t2 }, { value: l2, disabled: d2, ...O2 } = o2, h2 = { id: n2, ref: f2, role: "option", tabIndex: t2 === true ? void 0 : -1, "aria-disabled": t2 === true ? true : void 0, "aria-selected": s3.value, disabled: void 0, onClick: u2, onFocus: D, onPointerenter: L2, onMouseenter: L2, onPointermove: M2, onMousemove: M2, onPointerleave: k2, onMouseleave: k2 };
    return A$3({ ourProps: h2, theirProps: O2, slot: i2, attrs: r2, slots: b2, name: "ListboxOption" });
  };
} });
function l(r2) {
  let e2 = { called: false };
  return (...t2) => {
    if (!e2.called)
      return e2.called = true, r2(...t2);
  };
}
function m(e2, ...t2) {
  e2 && t2.length > 0 && e2.classList.add(...t2);
}
function d(e2, ...t2) {
  e2 && t2.length > 0 && e2.classList.remove(...t2);
}
var g$1 = ((i2) => (i2.Finished = "finished", i2.Cancelled = "cancelled", i2))(g$1 || {});
function F(e2, t2) {
  let i2 = o$4();
  if (!e2)
    return i2.dispose;
  let { transitionDuration: n2, transitionDelay: a2 } = getComputedStyle(e2), [l2, s3] = [n2, a2].map((o2) => {
    let [u2 = 0] = o2.split(",").filter(Boolean).map((r2) => r2.includes("ms") ? parseFloat(r2) : parseFloat(r2) * 1e3).sort((r2, c2) => c2 - r2);
    return u2;
  });
  return l2 !== 0 ? i2.setTimeout(() => t2("finished"), l2 + s3) : t2("finished"), i2.add(() => t2("cancelled")), i2.dispose;
}
function L$1(e2, t2, i2, n2, a2, l$12) {
  let s3 = o$4(), o2 = l$12 !== void 0 ? l(l$12) : () => {
  };
  return d(e2, ...a2), m(e2, ...t2, ...i2), s3.nextFrame(() => {
    d(e2, ...i2), m(e2, ...n2), s3.add(F(e2, (u2) => (d(e2, ...n2, ...t2), m(e2, ...a2), o2(u2))));
  }), s3.add(() => d(e2, ...t2, ...i2, ...n2, ...a2)), s3.add(() => o2("cancelled")), s3.dispose;
}
function g(e2 = "") {
  return e2.split(/\s+/).filter((t2) => t2.length > 1);
}
let R = Symbol("TransitionContext");
var pe = ((a2) => (a2.Visible = "visible", a2.Hidden = "hidden", a2))(pe || {});
function me() {
  return inject(R, null) !== null;
}
function Te() {
  let e2 = inject(R, null);
  if (e2 === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e2;
}
function ge() {
  let e2 = inject(N, null);
  if (e2 === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e2;
}
let N = Symbol("NestingContext");
function L(e2) {
  return "children" in e2 ? L(e2.children) : e2.value.filter(({ state: t2 }) => t2 === "visible").length > 0;
}
function Q(e2) {
  let t2 = ref([]), a2 = ref(false);
  onMounted(() => a2.value = true), onUnmounted(() => a2.value = false);
  function s3(n2, r2 = S.Hidden) {
    let l2 = t2.value.findIndex(({ id: f2 }) => f2 === n2);
    l2 !== -1 && (u$7(r2, { [S.Unmount]() {
      t2.value.splice(l2, 1);
    }, [S.Hidden]() {
      t2.value[l2].state = "hidden";
    } }), !L(t2) && a2.value && (e2 == null || e2()));
  }
  function h2(n2) {
    let r2 = t2.value.find(({ id: l2 }) => l2 === n2);
    return r2 ? r2.state !== "visible" && (r2.state = "visible") : t2.value.push({ id: n2, state: "visible" }), () => s3(n2, S.Unmount);
  }
  return { children: t2, register: h2, unregister: s3 };
}
let W = N$3.RenderStrategy, he = defineComponent({ props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: true }, appear: { type: [Boolean], default: false }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => true, afterEnter: () => true, beforeLeave: () => true, afterLeave: () => true }, setup(e2, { emit: t2, attrs: a2, slots: s3, expose: h2 }) {
  let n2 = ref(0);
  function r2() {
    n2.value |= i$1.Opening, t2("beforeEnter");
  }
  function l2() {
    n2.value &= ~i$1.Opening, t2("afterEnter");
  }
  function f2() {
    n2.value |= i$1.Closing, t2("beforeLeave");
  }
  function S$12() {
    n2.value &= ~i$1.Closing, t2("afterLeave");
  }
  if (!me() && s$2())
    return () => h$1(Se, { ...e2, onBeforeEnter: r2, onAfterEnter: l2, onBeforeLeave: f2, onAfterLeave: S$12 }, s3);
  let d2 = ref(null), y2 = computed(() => e2.unmount ? S.Unmount : S.Hidden);
  h2({ el: d2, $el: d2 });
  let { show: v2, appear: A2 } = Te(), { register: D, unregister: H2 } = ge(), i2 = ref(v2.value ? "visible" : "hidden"), I2 = { value: true }, c2 = I$1(), b2 = { value: false }, P2 = Q(() => {
    !b2.value && i2.value !== "hidden" && (i2.value = "hidden", H2(c2), S$12());
  });
  onMounted(() => {
    let o2 = D(c2);
    onUnmounted(o2);
  }), watchEffect(() => {
    if (y2.value === S.Hidden && c2) {
      if (v2.value && i2.value !== "visible") {
        i2.value = "visible";
        return;
      }
      u$7(i2.value, { ["hidden"]: () => H2(c2), ["visible"]: () => D(c2) });
    }
  });
  let j2 = g(e2.enter), M2 = g(e2.enterFrom), X = g(e2.enterTo), _ = g(e2.entered), Y = g(e2.leave), Z = g(e2.leaveFrom), ee = g(e2.leaveTo);
  onMounted(() => {
    watchEffect(() => {
      if (i2.value === "visible") {
        let o2 = o$3(d2);
        if (o2 instanceof Comment && o2.data === "")
          throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
      }
    });
  });
  function te(o2) {
    let E2 = I2.value && !A2.value, p2 = o$3(d2);
    !p2 || !(p2 instanceof HTMLElement) || E2 || (b2.value = true, v2.value && r2(), v2.value || f2(), o2(v2.value ? L$1(p2, j2, M2, X, _, (V) => {
      b2.value = false, V === g$1.Finished && l2();
    }) : L$1(p2, Y, Z, ee, _, (V) => {
      b2.value = false, V === g$1.Finished && (L(P2) || (i2.value = "hidden", H2(c2), S$12()));
    })));
  }
  return onMounted(() => {
    watch([v2], (o2, E2, p2) => {
      te(p2), I2.value = false;
    }, { immediate: true });
  }), provide(N, P2), t$2(computed(() => u$7(i2.value, { ["visible"]: i$1.Open, ["hidden"]: i$1.Closed }) | n2.value)), () => {
    let { appear: o2, show: E2, enter: p2, enterFrom: V, enterTo: Ce, entered: ye, leave: be2, leaveFrom: Ee, leaveTo: Ve, ...U2 } = e2, ne = { ref: d2 }, re = { ...U2, ...A2.value && v2.value && c$3.isServer ? { class: normalizeClass([a2.class, U2.class, ...j2, ...M2]) } : {} };
    return A$3({ theirProps: re, ourProps: ne, slot: {}, slots: s3, attrs: a2, features: W, visible: i2.value === "visible", name: "TransitionChild" });
  };
} }), ce = he, Se = defineComponent({ inheritAttrs: false, props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: true }, appear: { type: [Boolean], default: false }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => true, afterEnter: () => true, beforeLeave: () => true, afterLeave: () => true }, setup(e2, { emit: t2, attrs: a2, slots: s3 }) {
  let h2 = l$2(), n2 = computed(() => e2.show === null && h2 !== null ? (h2.value & i$1.Open) === i$1.Open : e2.show);
  watchEffect(() => {
    if (![true, false].includes(n2.value))
      throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.');
  });
  let r2 = ref(n2.value ? "visible" : "hidden"), l2 = Q(() => {
    r2.value = "hidden";
  }), f2 = ref(true), S2 = { show: n2, appear: computed(() => e2.appear || !f2.value) };
  return onMounted(() => {
    watchEffect(() => {
      f2.value = false, n2.value ? r2.value = "visible" : L(l2) || (r2.value = "hidden");
    });
  }), provide(N, l2), provide(R, S2), () => {
    let d2 = T$1(e2, ["show", "appear", "unmount", "onBeforeEnter", "onBeforeLeave", "onAfterEnter", "onAfterLeave"]), y2 = { unmount: e2.unmount };
    return A$3({ ourProps: { ...y2, as: "template" }, theirProps: {}, slot: {}, slots: { ...s3, default: () => [h$1(ce, { onBeforeEnter: () => t2("beforeEnter"), onAfterEnter: () => t2("afterEnter"), onBeforeLeave: () => t2("beforeLeave"), onAfterLeave: () => t2("afterLeave"), ...a2, ...y2, ...d2 }, s3.default)] }, attrs: {}, features: W, visible: r2.value === "visible", name: "Transition" });
  };
} });
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const urlStore = useUrl();
    const input = ref("");
    const filtedList = computed(() => urlStore.getCategories.filter((i2) => i2.title.toLowerCase().includes(input.value.toLowerCase())));
    const router = useRouter();
    const onSelect = (id) => {
      open.value = false;
      router.push(`#${id}`);
    };
    const open = ref(false);
    const itemStyle = (color) => `bg-${color}-50/50 border-${color}-100 hover:border-${color}-200 text-${color}-400`;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IconsSearchToggle = __nuxt_component_0$2;
      const _component_IconsSearchLabel = __nuxt_component_1$1;
      const _component_UiKeyboard = _sfc_main$6;
      _push(`<div${ssrRenderAttrs(_attrs)}><div><button class="rounded-lg hover:bg-white p-[5px] block md:hidden">`);
      _push(ssrRenderComponent(_component_IconsSearchToggle, null, null, _parent));
      _push(`</button><button class="rounded-lg border border-slate-200 dark:border-slate-600 text-gray-400 bg-white/70 dark:bg-white/10 opacity-60 dark:opacity-100 px-2 py-1.5 h-9 hidden md:flex items-center space-x-1">`);
      _push(ssrRenderComponent(_component_IconsSearchLabel, null, null, _parent));
      _push(`<span class="w-20 text-left text-sm md:text-base">Search</span><div class="flex items-center space-x-1">`);
      _push(ssrRenderComponent(_component_UiKeyboard, { text: "Ctrl" }, null, _parent));
      _push(ssrRenderComponent(_component_UiKeyboard, { text: "K" }, null, _parent));
      _push(`</div></button></div>`);
      _push(ssrRenderComponent(unref(Se), {
        as: "template",
        show: unref(open)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Ye), {
              as: "div",
              class: "fixed inset-0 z-10 overflow-y-auto",
              onClose: ($event) => open.value = false
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex min-h-screen items-center justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(he), {
                    as: "template",
                    enter: "ease-out duration-300",
                    "enter-from": "opacity-0",
                    "enter-to": "opacity-100",
                    leave: "ease-in duration-200",
                    "leave-from": "opacity-100",
                    "leave-to": "opacity-0"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_e), { class: "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(_e), { class: "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<span class="hidden sm:inline-block sm:h-screen sm:align-middle" aria-hidden="true"${_scopeId2}>​</span>`);
                  _push3(ssrRenderComponent(unref(he), {
                    as: "template",
                    enter: "ease-out duration-300",
                    "enter-from": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
                    "enter-to": "opacity-100 translate-y-0 sm:scale-100",
                    leave: "ease-in duration-200",
                    "leave-from": "opacity-100 translate-y-0 sm:scale-100",
                    "leave-to": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="inline-block transform overflow-hidden rounded-lg bg-white p-2 md:p-4 text-left align-bottom shadow-xl transition-all sm:my-8 w-full sm:max-w-sm md:max-w-md lg:max-w-lg sm:align-middle"${_scopeId3}><div class="border rounded-lg flex items-center space-x-2 p-2 w-full"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_IconsSearchLabel, null, null, _parent4, _scopeId3));
                        _push4(`<input type="text" placeholder="Search links" class="border-none w-full"${ssrRenderAttr("value", unref(input))}${_scopeId3}></div>`);
                        if (unref(filtedList).length == 0) {
                          _push4(`<figure class="flex flex-col justify-center items-center mt-4 md:mt-6 h-40 text-sm text-gray-400"${_scopeId3}><img${ssrRenderAttr("src", _imports_0)} alt="empty" width="148" height="148"${_scopeId3}><span${_scopeId3}>Not match result!</span></figure>`);
                        } else {
                          _push4(`<ul class="mt-4 md:mt-6 max-h-60 h-60 overflow-y-auto flex flex-col space-y-1 pr-2"${_scopeId3}><!--[-->`);
                          ssrRenderList(unref(filtedList), (field) => {
                            _push4(`<li class="${ssrRenderClass([itemStyle(field.color), "inline-flex w-full justify-center cursor-pointer rounded-md border border-transparent px-4 py-1.5 text-base shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:ring-offset-1 sm:text-sm"])}"${_scopeId3}>${ssrInterpolate(field.title)}</li>`);
                          });
                          _push4(`<!--]--></ul>`);
                        }
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "inline-block transform overflow-hidden rounded-lg bg-white p-2 md:p-4 text-left align-bottom shadow-xl transition-all sm:my-8 w-full sm:max-w-sm md:max-w-md lg:max-w-lg sm:align-middle" }, [
                            createVNode("div", { class: "border rounded-lg flex items-center space-x-2 p-2 w-full" }, [
                              createVNode(_component_IconsSearchLabel),
                              withDirectives(createVNode("input", {
                                type: "text",
                                placeholder: "Search links",
                                class: "border-none w-full",
                                "onUpdate:modelValue": ($event) => isRef(input) ? input.value = $event : null
                              }, null, 8, ["onUpdate:modelValue"]), [
                                [vModelText, unref(input)]
                              ])
                            ]),
                            unref(filtedList).length == 0 ? (openBlock(), createBlock("figure", {
                              key: 0,
                              class: "flex flex-col justify-center items-center mt-4 md:mt-6 h-40 text-sm text-gray-400"
                            }, [
                              createVNode("img", {
                                src: _imports_0,
                                alt: "empty",
                                width: "148",
                                height: "148"
                              }),
                              createVNode("span", null, "Not match result!")
                            ])) : (openBlock(), createBlock("ul", {
                              key: 1,
                              class: "mt-4 md:mt-6 max-h-60 h-60 overflow-y-auto flex flex-col space-y-1 pr-2"
                            }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(filtedList), (field) => {
                                return openBlock(), createBlock("li", {
                                  key: field.id,
                                  class: ["inline-flex w-full justify-center cursor-pointer rounded-md border border-transparent px-4 py-1.5 text-base shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:ring-offset-1 sm:text-sm", itemStyle(field.color)],
                                  onClick: ($event) => onSelect(field.id)
                                }, toDisplayString(field.title), 11, ["onClick"]);
                              }), 128))
                            ]))
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex min-h-screen items-center justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0" }, [
                      createVNode(unref(he), {
                        as: "template",
                        enter: "ease-out duration-300",
                        "enter-from": "opacity-0",
                        "enter-to": "opacity-100",
                        leave: "ease-in duration-200",
                        "leave-from": "opacity-100",
                        "leave-to": "opacity-0"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(_e), { class: "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" })
                        ]),
                        _: 1
                      }),
                      createVNode("span", {
                        class: "hidden sm:inline-block sm:h-screen sm:align-middle",
                        "aria-hidden": "true"
                      }, "​"),
                      createVNode(unref(he), {
                        as: "template",
                        enter: "ease-out duration-300",
                        "enter-from": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
                        "enter-to": "opacity-100 translate-y-0 sm:scale-100",
                        leave: "ease-in duration-200",
                        "leave-from": "opacity-100 translate-y-0 sm:scale-100",
                        "leave-to": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "inline-block transform overflow-hidden rounded-lg bg-white p-2 md:p-4 text-left align-bottom shadow-xl transition-all sm:my-8 w-full sm:max-w-sm md:max-w-md lg:max-w-lg sm:align-middle" }, [
                            createVNode("div", { class: "border rounded-lg flex items-center space-x-2 p-2 w-full" }, [
                              createVNode(_component_IconsSearchLabel),
                              withDirectives(createVNode("input", {
                                type: "text",
                                placeholder: "Search links",
                                class: "border-none w-full",
                                "onUpdate:modelValue": ($event) => isRef(input) ? input.value = $event : null
                              }, null, 8, ["onUpdate:modelValue"]), [
                                [vModelText, unref(input)]
                              ])
                            ]),
                            unref(filtedList).length == 0 ? (openBlock(), createBlock("figure", {
                              key: 0,
                              class: "flex flex-col justify-center items-center mt-4 md:mt-6 h-40 text-sm text-gray-400"
                            }, [
                              createVNode("img", {
                                src: _imports_0,
                                alt: "empty",
                                width: "148",
                                height: "148"
                              }),
                              createVNode("span", null, "Not match result!")
                            ])) : (openBlock(), createBlock("ul", {
                              key: 1,
                              class: "mt-4 md:mt-6 max-h-60 h-60 overflow-y-auto flex flex-col space-y-1 pr-2"
                            }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(filtedList), (field) => {
                                return openBlock(), createBlock("li", {
                                  key: field.id,
                                  class: ["inline-flex w-full justify-center cursor-pointer rounded-md border border-transparent px-4 py-1.5 text-base shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:ring-offset-1 sm:text-sm", itemStyle(field.color)],
                                  onClick: ($event) => onSelect(field.id)
                                }, toDisplayString(field.title), 11, ["onClick"]);
                              }), 128))
                            ]))
                          ])
                        ]),
                        _: 1
                      })
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Ye), {
                as: "div",
                class: "fixed inset-0 z-10 overflow-y-auto",
                onClose: ($event) => open.value = false
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "flex min-h-screen items-center justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0" }, [
                    createVNode(unref(he), {
                      as: "template",
                      enter: "ease-out duration-300",
                      "enter-from": "opacity-0",
                      "enter-to": "opacity-100",
                      leave: "ease-in duration-200",
                      "leave-from": "opacity-100",
                      "leave-to": "opacity-0"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(_e), { class: "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" })
                      ]),
                      _: 1
                    }),
                    createVNode("span", {
                      class: "hidden sm:inline-block sm:h-screen sm:align-middle",
                      "aria-hidden": "true"
                    }, "​"),
                    createVNode(unref(he), {
                      as: "template",
                      enter: "ease-out duration-300",
                      "enter-from": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
                      "enter-to": "opacity-100 translate-y-0 sm:scale-100",
                      leave: "ease-in duration-200",
                      "leave-from": "opacity-100 translate-y-0 sm:scale-100",
                      "leave-to": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "inline-block transform overflow-hidden rounded-lg bg-white p-2 md:p-4 text-left align-bottom shadow-xl transition-all sm:my-8 w-full sm:max-w-sm md:max-w-md lg:max-w-lg sm:align-middle" }, [
                          createVNode("div", { class: "border rounded-lg flex items-center space-x-2 p-2 w-full" }, [
                            createVNode(_component_IconsSearchLabel),
                            withDirectives(createVNode("input", {
                              type: "text",
                              placeholder: "Search links",
                              class: "border-none w-full",
                              "onUpdate:modelValue": ($event) => isRef(input) ? input.value = $event : null
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [vModelText, unref(input)]
                            ])
                          ]),
                          unref(filtedList).length == 0 ? (openBlock(), createBlock("figure", {
                            key: 0,
                            class: "flex flex-col justify-center items-center mt-4 md:mt-6 h-40 text-sm text-gray-400"
                          }, [
                            createVNode("img", {
                              src: _imports_0,
                              alt: "empty",
                              width: "148",
                              height: "148"
                            }),
                            createVNode("span", null, "Not match result!")
                          ])) : (openBlock(), createBlock("ul", {
                            key: 1,
                            class: "mt-4 md:mt-6 max-h-60 h-60 overflow-y-auto flex flex-col space-y-1 pr-2"
                          }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(filtedList), (field) => {
                              return openBlock(), createBlock("li", {
                                key: field.id,
                                class: ["inline-flex w-full justify-center cursor-pointer rounded-md border border-transparent px-4 py-1.5 text-base shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:ring-offset-1 sm:text-sm", itemStyle(field.color)],
                                onClick: ($event) => onSelect(field.id)
                              }, toDisplayString(field.title), 11, ["onClick"]);
                            }), 128))
                          ]))
                        ])
                      ]),
                      _: 1
                    })
                  ])
                ]),
                _: 1
              }, 8, ["onClose"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/search/index.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1.4em",
    height: "1.4em",
    viewBox: "0 0 100 100"
  }, _attrs))}><path d="M0 0 C8.5368633 6.67876368 16.68678784 15.02658034 19 26 C19.5785305 31.47104155 19.97004308 36.20362392 17.3125 41.125 C13.39454454 44.30172064 9.5530291 45.15694206 4.625 45.75 C-0.87365484 46.67882683 -4.47524099 48.6439299 -8 53 C-9.47097893 57.41293679 -8.96992091 61.88523122 -8.78515625 66.48828125 C-8.65758056 73.06422827 -9.98100829 77.59903689 -14.3125 82.75 C-19.77579197 87.32391886 -23.98890269 88.5149221 -31.01171875 88.27734375 C-43.36563408 87.13077122 -54.99283881 82.20596806 -63.48046875 72.93359375 C-66.43406155 69.1751659 -68.81385022 65.24629668 -71 61 C-71.41636719 60.21367188 -71.83273438 59.42734375 -72.26171875 58.6171875 C-76.91465425 48.20114241 -76.67237529 34.28589049 -73.5 23.4375 C-68.78088401 11.69766409 -59.88524779 1.56426138 -48.4375 -3.875 C-46.6371051 -4.61355979 -44.82521569 -5.32510737 -43 -6 C-42.34515625 -6.24621094 -41.6903125 -6.49242187 -41.015625 -6.74609375 C-27.61642972 -10.89755383 -11.35978545 -8.02571837 0 0 Z M-35.9375 62.0625 C-37.6140629 65.11976176 -37.36528977 67.5906288 -37 71 C-36.08333333 73.08333333 -36.08333333 73.08333333 -34 74 C-30.5906288 74.36528977 -28.11976176 74.6140629 -25.0625 72.9375 C-23.3859371 69.88023824 -23.63471023 67.4093712 -24 64 C-24.91666667 61.91666667 -24.91666667 61.91666667 -27 61 C-30.4093712 60.63471023 -32.88023824 60.3859371 -35.9375 62.0625 Z " fill="#F3C175" transform="translate(78,10)"></path><path d="M0 0 C8.5368633 6.67876368 16.68678784 15.02658034 19 26 C19.5785305 31.47104155 19.97004308 36.20362392 17.3125 41.125 C13.39454454 44.30172064 9.5530291 45.15694206 4.625 45.75 C-0.87365484 46.67882683 -4.47524099 48.6439299 -8 53 C-9.47097893 57.41293679 -8.96992091 61.88523122 -8.78515625 66.48828125 C-8.65758056 73.06422827 -9.98100829 77.59903689 -14.3125 82.75 C-19.77579197 87.32391886 -23.98890269 88.5149221 -31.01171875 88.27734375 C-43.36563408 87.13077122 -54.99283881 82.20596806 -63.48046875 72.93359375 C-66.43406155 69.1751659 -68.81385022 65.24629668 -71 61 C-71.41636719 60.21367188 -71.83273438 59.42734375 -72.26171875 58.6171875 C-76.91465425 48.20114241 -76.67237529 34.28589049 -73.5 23.4375 C-68.78088401 11.69766409 -59.88524779 1.56426138 -48.4375 -3.875 C-46.6371051 -4.61355979 -44.82521569 -5.32510737 -43 -6 C-42.34515625 -6.24621094 -41.6903125 -6.49242187 -41.015625 -6.74609375 C-27.61642972 -10.89755383 -11.35978545 -8.02571837 0 0 Z M-61 9 C-70.9553305 21.03391598 -73.17447553 32.47697059 -72.21875 47.74169922 C-71.20363921 58.22135859 -65.13267097 67.42739627 -57.38671875 74.328125 C-47.13571037 82.1577495 -35.9903681 86.37545074 -23 85 C-18.54853749 82.81473658 -15.81114855 80.0605479 -13 76 C-12.04669797 73.1400939 -11.93944919 71.75170026 -12.11328125 68.83203125 C-12.7650126 53.67436294 -12.7650126 53.67436294 -9.4375 49 C-4.80966119 44.32911153 0.36673353 43.06272767 6.6875 42.0625 C9.78390959 41.51807634 11.90031046 41.05332231 14.6875 39.5625 C16.979234 35.08816218 16.81484514 30.89529105 16 26 C11.53275883 13.45068292 3.68245892 5.12012105 -8 -1 C-26.45804195 -9.47869407 -46.64032506 -5.04057105 -61 9 Z " fill="#C49853" transform="translate(78,10)"></path><path d="M0 0 C2.5 1.5 2.5 1.5 4 4 C4.7099846 8.9698922 4.79117716 10.84919686 1.9375 15 C-1 17 -1 17 -4.5 17.6875 C-8 17 -8 17 -10.9375 14.375 C-13.18818265 10.69206475 -13.89426216 9.20303214 -13 5 C-9.2217441 -0.43124286 -6.19885712 -0.88555102 0 0 Z " fill="#F58C8C" transform="translate(28,53)"></path><path d="M0 0 C2.5 1.5 2.5 1.5 4 4 C4.66840123 7.74919308 4.42841568 10.88611924 3.0625 14.4375 C-0.30767596 16.99066361 -3.83041283 17.54766907 -8 17 C-11.39716336 14.15747556 -12.73945755 12.27665801 -13.625 7.9375 C-11.99158083 0.26042991 -6.87722671 -0.98246096 0 0 Z " fill="#88B4ED" transform="translate(73,18)"></path><path d="M0 0 C3.0625 1.9375 3.0625 1.9375 5 5 C6.03945854 9.75058323 5.669717 12.94141507 3.0625 17.0625 C-1.05858493 19.669717 -4.24941677 20.03945854 -9 19 C-12.0625 17.0625 -12.0625 17.0625 -14 14 C-15.03945854 9.24941677 -14.669717 6.05858493 -12.0625 1.9375 C-7.94141507 -0.669717 -4.75058323 -1.03945854 0 0 Z M-9.9375 4.0625 C-11.6140629 7.11976176 -11.36528977 9.5906288 -11 13 C-10.08333333 15.08333333 -10.08333333 15.08333333 -8 16 C-4.5906288 16.36528977 -2.11976176 16.6140629 0.9375 14.9375 C2.6140629 11.88023824 2.36528977 9.4093712 2 6 C1.08333333 3.91666667 1.08333333 3.91666667 -1 3 C-4.4093712 2.63471023 -6.88023824 2.3859371 -9.9375 4.0625 Z " fill="#C39753" transform="translate(52,68)"></path><path d="M0 0 C2.15502531 3.23253796 2.46856135 4.25150923 2 8 C0.9375 9.8125 0.9375 9.8125 -1 11 C-4.5625 11.3125 -4.5625 11.3125 -8 11 C-10 9 -10 9 -10.3125 5.5625 C-10 2 -10 2 -8.9375 0 C-5.77203476 -1.63378851 -3.34979714 -0.85267564 0 0 Z " fill="#FCEB9F" transform="translate(28,31)"></path><path d="M0 0 C2.15502531 3.23253796 2.46856135 4.25150923 2 8 C0.9375 9.8125 0.9375 9.8125 -1 11 C-4.5625 11.3125 -4.5625 11.3125 -8 11 C-10 9 -10 9 -10.3125 5.5625 C-10 2 -10 2 -8.9375 0 C-5.77203476 -1.63378851 -3.34979714 -0.85267564 0 0 Z " fill="#B6DDBA" transform="translate(48,16)"></path><path d="M0 0 C2.5 1.5 2.5 1.5 4 4 C4.7099846 8.9698922 4.79117716 10.84919686 1.9375 15 C-1 17 -1 17 -4.5 17.6875 C-8 17 -8 17 -10.9375 14.375 C-13.18818265 10.69206475 -13.89426216 9.20303214 -13 5 C-9.2217441 -0.43124286 -6.19885712 -0.88555102 0 0 Z M-8.8125 3.0625 C-10.646921 6.05550269 -10.31107576 8.57816663 -10 12 C-8.06268472 14.36410488 -8.06268472 14.36410488 -4.5625 14.3125 C-1.15035582 14.24664745 -1.15035582 14.24664745 1 12.9375 C2.63378851 9.77203476 1.85267564 7.34979714 1 4 C-2.51767212 1.65488525 -5.01091691 0.83398578 -8.8125 3.0625 Z " fill="#CE534D" transform="translate(28,53)"></path><path d="M0 0 C2.5 1.5 2.5 1.5 4 4 C4.7099846 8.9698922 4.79117716 10.84919686 1.9375 15 C-1 17 -1 17 -4.5 17.6875 C-8 17 -8 17 -10.9375 14.375 C-13.18818265 10.69206475 -13.89426216 9.20303214 -13 5 C-9.2217441 -0.43124286 -6.19885712 -0.88555102 0 0 Z M-8.8125 3.0625 C-10.646921 6.05550269 -10.31107576 8.57816663 -10 12 C-8.06268472 14.36410488 -8.06268472 14.36410488 -4.5625 14.3125 C-1.15035582 14.24664745 -1.15035582 14.24664745 1 12.9375 C2.63378851 9.77203476 1.85267564 7.34979714 1 4 C-2.51767212 1.65488525 -5.01091691 0.83398578 -8.8125 3.0625 Z " fill="#C0A04E" transform="translate(28,28)"></path><path d="M0 0 C2.5 1.5 2.5 1.5 4 4 C4.66840123 7.74919308 4.42841568 10.88611924 3.0625 14.4375 C-0.30767596 16.99066361 -3.83041283 17.54766907 -8 17 C-11.39716336 14.15747556 -12.73945755 12.27665801 -13.625 7.9375 C-11.99158083 0.26042991 -6.87722671 -0.98246096 0 0 Z M-8.8125 3.0625 C-10.646921 6.05550269 -10.31107576 8.57816663 -10 12 C-8.06268472 14.36410488 -8.06268472 14.36410488 -4.5625 14.3125 C-1.15035582 14.24664745 -1.15035582 14.24664745 1 12.9375 C2.63378851 9.77203476 1.85267564 7.34979714 1 4 C-2.51767212 1.65488525 -5.01091691 0.83398578 -8.8125 3.0625 Z " fill="#5980B4" transform="translate(73,18)"></path><path d="M0 0 C2.5 1.5 2.5 1.5 4 4 C4.66840123 7.74919308 4.42841568 10.88611924 3.0625 14.4375 C-0.30767596 16.99066361 -3.83041283 17.54766907 -8 17 C-11.39716336 14.15747556 -12.73945755 12.27665801 -13.625 7.9375 C-11.99158083 0.26042991 -6.87722671 -0.98246096 0 0 Z M-8.8125 3.0625 C-10.646921 6.05550269 -10.31107576 8.57816663 -10 12 C-8.06268472 14.36410488 -8.06268472 14.36410488 -4.5625 14.3125 C-1.15035582 14.24664745 -1.15035582 14.24664745 1 12.9375 C2.63378851 9.77203476 1.85267564 7.34979714 1 4 C-2.51767212 1.65488525 -5.01091691 0.83398578 -8.8125 3.0625 Z " fill="#6BA179" transform="translate(48,13)"></path><path d="M0 0 C7.2 -0.48 7.2 -0.48 10.5 1.5 C12.68405234 5.14008723 12.28023018 7.79654733 12 12 C11.34 11.67 10.68 11.34 10 11 C9.26924352 8.6859378 8.59861742 6.35171131 8 4 C5.36 3.34 2.72 2.68 0 2 C0 1.34 0 0.68 0 0 Z " fill="#C94845" transform="translate(20,53)"></path><path d="M0 0 C0.61875 0.804375 1.2375 1.60875 1.875 2.4375 C3.74164041 5.03874519 3.74164041 5.03874519 6 6 C6 6.66 6 7.32 6 8 C3.13275314 7.42655063 2.1385485 7.1385485 0 5 C-0.125 2.375 -0.125 2.375 0 0 Z " fill="#C84644" transform="translate(16,61)"></path><path d="M0 0 C0.61875 0.804375 1.2375 1.60875 1.875 2.4375 C3.74164041 5.03874519 3.74164041 5.03874519 6 6 C6 6.66 6 7.32 6 8 C3.13275314 7.42655063 2.1385485 7.1385485 0 5 C-0.125 2.375 -0.125 2.375 0 0 Z " fill="#619D76" transform="translate(36,21)"></path></svg>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icons/theme.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Theme",
  __ssrInlineRender: true,
  setup(__props) {
    const colorMode = useColorMode();
    const availableColor = ref([
      {
        id: 1,
        name: "system",
        icon: "i-ph-laptop-duotone"
      },
      {
        id: 2,
        name: "dark",
        icon: "i-ph-moon-stars-duotone"
      },
      {
        id: 3,
        name: "light",
        icon: "i-ph-sun-dim-duotone"
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IconsTheme = __nuxt_component_0$1;
      const _component_UnoIcon = __nuxt_component_1$2;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(unref(Ie), {
        modelValue: _ctx.$colorMode.preference,
        "onUpdate:modelValue": ($event) => _ctx.$colorMode.preference = $event,
        as: "div",
        class: "relative flex items-center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(je), {
              type: "button",
              title: "Change Color"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex h-9 w-9 items-center justify-center rounded-lg bg-green-500/10 md:bg-transparent md:hover:bg-white dark:bg-white/20 dark:hover:bg-white/30"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_IconsTheme, null, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex h-9 w-9 items-center justify-center rounded-lg bg-green-500/10 md:bg-transparent md:hover:bg-white dark:bg-white/20 dark:hover:bg-white/30" }, [
                      createVNode(_component_IconsTheme)
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(``);
            _push2(ssrRenderComponent(unref(Ae), { class: "absolute top-full origin-top-right right-0 z-[999] mt-1 w-36 p-1 overflow-hidden rounded-lg bg-white text-sm font-semibold text-gray-700 shadow-lg shadow-gray-300 outline-none dark:bg-gray-800 dark:text-white dark:shadow-gray-500 dark:ring-0 flex flex-col space-y-0.5" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(unref(availableColor), (color) => {
                    _push3(ssrRenderComponent(unref(Fe), {
                      key: color.id,
                      value: color.name,
                      class: ["flex w-full cursor-pointer items-center justify-between py-1.5 px-2 rounded-md", {
                        "text-white-500 bg-green-500/10 dark:bg-gray-500/50 border border-green-500/20": unref(colorMode).preference === color.name,
                        "hover:bg-gray-100 dark:hover:bg-gray-700/30": unref(colorMode).preference !== color.name
                      }]
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<span class="truncate capitalize"${_scopeId3}>${ssrInterpolate(color.name)}</span><span class="flex items-center justify-center text-sm"${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_UnoIcon, {
                            class: [color.icon, "text-base"]
                          }, null, _parent4, _scopeId3));
                          _push4(`</span>`);
                        } else {
                          return [
                            createVNode("span", { class: "truncate capitalize" }, toDisplayString(color.name), 1),
                            createVNode("span", { class: "flex items-center justify-center text-sm" }, [
                              createVNode(_component_UnoIcon, {
                                class: [color.icon, "text-base"]
                              }, null, 8, ["class"])
                            ])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(availableColor), (color) => {
                      return openBlock(), createBlock(unref(Fe), {
                        key: color.id,
                        value: color.name,
                        class: ["flex w-full cursor-pointer items-center justify-between py-1.5 px-2 rounded-md", {
                          "text-white-500 bg-green-500/10 dark:bg-gray-500/50 border border-green-500/20": unref(colorMode).preference === color.name,
                          "hover:bg-gray-100 dark:hover:bg-gray-700/30": unref(colorMode).preference !== color.name
                        }]
                      }, {
                        default: withCtx(() => [
                          createVNode("span", { class: "truncate capitalize" }, toDisplayString(color.name), 1),
                          createVNode("span", { class: "flex items-center justify-center text-sm" }, [
                            createVNode(_component_UnoIcon, {
                              class: [color.icon, "text-base"]
                            }, null, 8, ["class"])
                          ])
                        ]),
                        _: 2
                      }, 1032, ["value", "class"]);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(je), {
                type: "button",
                title: "Change Color"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "flex h-9 w-9 items-center justify-center rounded-lg bg-green-500/10 md:bg-transparent md:hover:bg-white dark:bg-white/20 dark:hover:bg-white/30" }, [
                    createVNode(_component_IconsTheme)
                  ])
                ]),
                _: 1
              }),
              createVNode(Transition, {
                "enter-active-class": "transition duration-100 ease-out",
                "enter-from-class": "transform scale-95 opacity-0",
                "enter-to-class": "transform scale-100 opacity-100",
                "leave-active-class": "transition duration-75 ease-in",
                "leave-from-class": "transform scale-100 opacity-100",
                "leave-to-class": "transform scale-95 opacity-0"
              }, {
                default: withCtx(() => [
                  createVNode(unref(Ae), { class: "absolute top-full origin-top-right right-0 z-[999] mt-1 w-36 p-1 overflow-hidden rounded-lg bg-white text-sm font-semibold text-gray-700 shadow-lg shadow-gray-300 outline-none dark:bg-gray-800 dark:text-white dark:shadow-gray-500 dark:ring-0 flex flex-col space-y-0.5" }, {
                    default: withCtx(() => [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(availableColor), (color) => {
                        return openBlock(), createBlock(unref(Fe), {
                          key: color.id,
                          value: color.name,
                          class: ["flex w-full cursor-pointer items-center justify-between py-1.5 px-2 rounded-md", {
                            "text-white-500 bg-green-500/10 dark:bg-gray-500/50 border border-green-500/20": unref(colorMode).preference === color.name,
                            "hover:bg-gray-100 dark:hover:bg-gray-700/30": unref(colorMode).preference !== color.name
                          }]
                        }, {
                          default: withCtx(() => [
                            createVNode("span", { class: "truncate capitalize" }, toDisplayString(color.name), 1),
                            createVNode("span", { class: "flex items-center justify-center text-sm" }, [
                              createVNode(_component_UnoIcon, {
                                class: [color.icon, "text-base"]
                              }, null, 8, ["class"])
                            ])
                          ]),
                          _: 2
                        }, 1032, ["value", "class"]);
                      }), 128))
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/header/Theme.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  const _component_HeaderLogo = __nuxt_component_0$3;
  const _component_Search = _sfc_main$5;
  const _component_HeaderTheme = _sfc_main$3;
  _push(`<header${ssrRenderAttrs(mergeProps({ class: "mb-10 flex items-center justify-around" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_HeaderLogo, null, null, _parent));
  _push(`<div class="flex space-x-2">`);
  _push(ssrRenderComponent(_component_Search, null, null, _parent));
  _push(ssrRenderComponent(_component_HeaderTheme, null, null, _parent));
  _push(`</div></header>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/header/index.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "p-2" }, _attrs))}><p class="text-center text-xs text-gray-400 dark:text-gray-300">Copyright ©Tran Nguyen Thuong Truong, 2024</p></footer>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/footer/index.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Header = __nuxt_component_0;
  const _component_Footer = __nuxt_component_1;
  _push(`<main${ssrRenderAttrs(mergeProps({ class: "mx-auto mt-4 container" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_Header, null, null, _parent));
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(ssrRenderComponent(_component_Footer, null, null, _parent));
  _push(`</main>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  _default as default
};
//# sourceMappingURL=default-Bd8TJDrs.js.map
