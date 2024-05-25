import { u as useColorMode } from "./composables-K6fOgyxT.js";
import { defineComponent, computed, ref, h, mergeProps, inject, toRef, watchEffect, provide, watch, nextTick, TransitionGroup, getCurrentInstance, Fragment, Transition, withDirectives, markRaw, renderSlot, isProxy, toRaw, Comment, onUnmounted, resolveComponent, unref, withCtx, createTextVNode, createVNode, useSSRContext } from "vue";
import { b as useSsrAdapter, c as useRouter } from "../server.mjs";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { c as cssrAnchorMetaName, V as VResizeObserver, a as c, b as configProviderInjectionKey, d as cB, e as c$1, u as useStyle, f as cM, g as cNotM, h as commonVariables$k, i as derived$1, j as cE, k as useConfig, l as useTheme, m as createKey, n as useThemeClass, s as self$1f, o as createTheme, p as scrollbarLight, q as self$1g, w as warnOnce, r as useRtl, t as color2Class, v as resolveWrappedSlot, x as createInjectionKey, y as call, z as iconSwitchTransition, N as NIconSwitchTransition, A as resolveSlot, C as NBaseLoading, D as popoverLight, E as fadeInWidthExpandTransition, F as NFadeInExpandTransition, G as resolveSlotWithProps, H as useFormItem, S as Scrollbar, I as isSlotEmpty, J as NBaseWave, K as self$1h, L as buttonGroupInjectionKey, M as buttonLight, O as insideModal, P as insidePopover, B as Button, Q as warn, R as useAdjustedTo, T as Binder, U as VTarget, W as VFollower, X as defaultClsPrefix, Y as commonVars$d, Z as tooltipLight, $ as throwError, a0 as XButton, a1 as formItemInjectionKey, a2 as flatten, a3 as formatLength, a4 as __nuxt_component_6, a5 as keep, a6 as popoverBaseProps, _ as __nuxt_component_7 } from "./Tooltip-XMy4JM2p.js";
import { depx, pxfy, beforeNextFrameOnce, rgba, scaleColor, composite, changeColor, getMargin, getPadding, toHexaString, toHslaString, rgb2hsl, toHsvaString, rgb2hsv, toRgbaString, hsla, hsl2rgb, hsl2hsv, hsva, hsv2rgb, hsv2hsl, toHexString, toHslString, toRgbString, toHsvString, getPreciseEventTarget, createId, happensIn, getGap } from "seemly";
import { useMemo, useMergedState, useIsMounted, useKeyboard, useCompitable } from "vooks";
import { upperFirst, merge, kebabCase } from "lodash-es";
import { hash } from "css-render";
import { on, off } from "evtd";
import { clickoutside } from "vdirs";
import require$$0 from "@babel/runtime/helpers/interopRequireDefault";
import require$$1 from "@babel/runtime/helpers/typeof";
import _typeof from "@babel/runtime/helpers/esm/typeof";
import _createForOfIteratorHelper from "@babel/runtime/helpers/esm/createForOfIteratorHelper";
import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _createSuper from "@babel/runtime/helpers/esm/createSuper";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
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
import "@css-render/plugin-bem";
function getSlot(instance, slotName = "default", fallback = []) {
  const slots = instance.$slots;
  const slot = slots[slotName];
  if (slot === void 0)
    return fallback;
  return slot();
}
function omit(object, keys = [], rest) {
  const omitedObject = {};
  const originalKeys = Object.getOwnPropertyNames(object);
  originalKeys.forEach((originalKey) => {
    if (!keys.includes(originalKey)) {
      omitedObject[originalKey] = object[originalKey];
    }
  });
  return Object.assign(omitedObject, rest);
}
function keysOf(obj) {
  return Object.keys(obj);
}
function smallerSize(size) {
  switch (size) {
    case "tiny":
      return "mini";
    case "small":
      return "tiny";
    case "medium":
      return "small";
    case "large":
      return "medium";
    case "huge":
      return "large";
  }
  throw Error(`${size} has no smaller size.`);
}
function getTitleAttribute(value) {
  switch (typeof value) {
    case "string":
      return value || void 0;
    case "number":
      return String(value);
    default:
      return void 0;
  }
}
const eventSet = /* @__PURE__ */ new WeakSet();
function markEventEffectPerformed(event) {
  eventSet.add(event);
}
function lowBit(n) {
  return n & -n;
}
class FinweckTree {
  /**
   * @param l length of the array
   * @param min min value of the array
   */
  constructor(l, min) {
    this.l = l;
    this.min = min;
    const ft = new Array(l + 1);
    for (let i2 = 0; i2 < l + 1; ++i2) {
      ft[i2] = 0;
    }
    this.ft = ft;
  }
  /**
   * Add arr[i] by n, start from 0
   * @param i the index of the element to be added
   * @param n the value to be added
   */
  add(i2, n) {
    if (n === 0)
      return;
    const { l, ft } = this;
    i2 += 1;
    while (i2 <= l) {
      ft[i2] += n;
      i2 += lowBit(i2);
    }
  }
  /**
   * Get the value of index i
   * @param i index
   * @returns value of the index
   */
  get(i2) {
    return this.sum(i2 + 1) - this.sum(i2);
  }
  /**
   * Get the sum of first i elements
   * @param i count of head elements to be added
   * @returns the sum of first i elements
   */
  sum(i2) {
    if (i2 === void 0)
      i2 = this.l;
    if (i2 <= 0)
      return 0;
    const { ft, min, l } = this;
    if (i2 > l)
      throw new Error("[FinweckTree.sum]: `i` is larger than length.");
    let ret = i2 * min;
    while (i2 > 0) {
      ret += ft[i2];
      i2 -= lowBit(i2);
    }
    return ret;
  }
  /**
   * Get the largest count of head elements whose sum are <= threshold
   * @param threshold
   * @returns the largest count of head elements whose sum are <= threshold
   */
  getBound(threshold) {
    let l = 0;
    let r = this.l;
    while (r > l) {
      const m3 = Math.floor((l + r) / 2);
      const sumM = this.sum(m3);
      if (sumM > threshold) {
        r = m3;
        continue;
      } else if (sumM < threshold) {
        if (l === m3) {
          if (this.sum(l + 1) <= threshold)
            return l + 1;
          return m3;
        }
        l = m3;
      } else {
        return m3;
      }
    }
    return l;
  }
}
function ensureMaybeTouch() {
  return false;
}
function ensureWheelScale() {
  return 1;
}
const styles = c(".v-vl", {
  maxHeight: "inherit",
  height: "100%",
  overflow: "auto",
  minWidth: "1px"
  // a zero width container won't be scrollable
}, [
  c("&:not(.v-vl--show-scrollbar)", {
    scrollbarWidth: "none"
  }, [
    c("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb", {
      width: 0,
      height: 0,
      display: "none"
    })
  ])
]);
const VVirtualList = defineComponent({
  name: "VirtualList",
  inheritAttrs: false,
  props: {
    showScrollbar: {
      type: Boolean,
      default: true
    },
    items: {
      type: Array,
      default: () => []
    },
    // it is suppose to be the min height
    itemSize: {
      type: Number,
      required: true
    },
    itemResizable: Boolean,
    itemsStyle: [String, Object],
    visibleItemsTag: {
      type: [String, Object],
      default: "div"
    },
    visibleItemsProps: Object,
    ignoreItemResize: Boolean,
    onScroll: Function,
    onWheel: Function,
    onResize: Function,
    defaultScrollKey: [Number, String],
    defaultScrollIndex: Number,
    keyField: {
      type: String,
      default: "key"
    },
    // Whether it is a good API?
    // ResizeObserver + footer & header is not enough.
    // Too complex for simple case
    paddingTop: {
      type: [Number, String],
      default: 0
    },
    paddingBottom: {
      type: [Number, String],
      default: 0
    }
  },
  setup(props) {
    const ssrAdapter = useSsrAdapter();
    styles.mount({
      id: "vueuc/virtual-list",
      head: true,
      anchorMetaName: cssrAnchorMetaName,
      ssr: ssrAdapter
    });
    const keyIndexMapRef = computed(() => {
      const map = /* @__PURE__ */ new Map();
      const { keyField } = props;
      props.items.forEach((item, index) => {
        map.set(item[keyField], index);
      });
      return map;
    });
    const listElRef = ref(null);
    const listHeightRef = ref(void 0);
    const keyToHeightOffset = /* @__PURE__ */ new Map();
    const finweckTreeRef = computed(() => {
      const { items, itemSize, keyField } = props;
      const ft = new FinweckTree(items.length, itemSize);
      items.forEach((item, index) => {
        const key = item[keyField];
        const heightOffset = keyToHeightOffset.get(key);
        if (heightOffset !== void 0) {
          ft.add(index, heightOffset);
        }
      });
      return ft;
    });
    const finweckTreeUpdateTrigger = ref(0);
    const scrollTopRef = ref(0);
    const startIndexRef = useMemo(() => {
      return Math.max(finweckTreeRef.value.getBound(scrollTopRef.value - depx(props.paddingTop)) - 1, 0);
    });
    const viewportItemsRef = computed(() => {
      const { value: listHeight } = listHeightRef;
      if (listHeight === void 0)
        return [];
      const { items, itemSize } = props;
      const startIndex = startIndexRef.value;
      const endIndex = Math.min(startIndex + Math.ceil(listHeight / itemSize + 1), items.length - 1);
      const viewportItems = [];
      for (let i2 = startIndex; i2 <= endIndex; ++i2) {
        viewportItems.push(items[i2]);
      }
      return viewportItems;
    });
    const scrollTo = (options, y3) => {
      if (typeof options === "number") {
        scrollToPosition(options, y3, "auto");
        return;
      }
      const { left, top, index, key, position, behavior, debounce = true } = options;
      if (left !== void 0 || top !== void 0) {
        scrollToPosition(left, top, behavior);
      } else if (index !== void 0) {
        scrollToIndex(index, behavior, debounce);
      } else if (key !== void 0) {
        const toIndex = keyIndexMapRef.value.get(key);
        if (toIndex !== void 0)
          scrollToIndex(toIndex, behavior, debounce);
      } else if (position === "bottom") {
        scrollToPosition(0, Number.MAX_SAFE_INTEGER, behavior);
      } else if (position === "top") {
        scrollToPosition(0, 0, behavior);
      }
    };
    let anchorIndex;
    let anchorTimerId = null;
    function scrollToIndex(index, behavior, debounce) {
      const { value: ft } = finweckTreeRef;
      const targetTop = ft.sum(index) + depx(props.paddingTop);
      if (!debounce) {
        listElRef.value.scrollTo({
          left: 0,
          top: targetTop,
          behavior
        });
      } else {
        anchorIndex = index;
        if (anchorTimerId !== null) {
          (void 0).clearTimeout(anchorTimerId);
        }
        anchorTimerId = (void 0).setTimeout(() => {
          anchorIndex = void 0;
          anchorTimerId = null;
        }, 16);
        const { scrollTop, offsetHeight } = listElRef.value;
        if (targetTop > scrollTop) {
          const itemSize = ft.get(index);
          if (targetTop + itemSize <= scrollTop + offsetHeight)
            ;
          else {
            listElRef.value.scrollTo({
              left: 0,
              top: targetTop + itemSize - offsetHeight,
              behavior
            });
          }
        } else {
          listElRef.value.scrollTo({
            left: 0,
            top: targetTop,
            behavior
          });
        }
      }
    }
    function scrollToPosition(left, top, behavior) {
      listElRef.value.scrollTo({
        left,
        top,
        behavior
      });
    }
    function handleItemResize(key, entry) {
      var _a, _b, _c;
      if (props.ignoreItemResize)
        return;
      if (isHideByVShow(entry.target))
        return;
      const { value: ft } = finweckTreeRef;
      const index = keyIndexMapRef.value.get(key);
      const previousHeight = ft.get(index);
      const height = (_c = (_b = (_a = entry.borderBoxSize) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.blockSize) !== null && _c !== void 0 ? _c : entry.contentRect.height;
      if (height === previousHeight)
        return;
      const offset = height - props.itemSize;
      if (offset === 0) {
        keyToHeightOffset.delete(key);
      } else {
        keyToHeightOffset.set(key, height - props.itemSize);
      }
      const delta = height - previousHeight;
      if (delta === 0)
        return;
      ft.add(index, delta);
      const listEl = listElRef.value;
      if (listEl != null) {
        if (anchorIndex === void 0) {
          const previousHeightSum = ft.sum(index);
          if (listEl.scrollTop > previousHeightSum) {
            listEl.scrollBy(0, delta);
          }
        } else {
          if (index < anchorIndex) {
            listEl.scrollBy(0, delta);
          } else if (index === anchorIndex) {
            const previousHeightSum = ft.sum(index);
            if (height + previousHeightSum > // Note, listEl shouldn't have border, nor offsetHeight won't be
            // correct
            listEl.scrollTop + listEl.offsetHeight) {
              listEl.scrollBy(0, delta);
            }
          }
        }
        syncViewport();
      }
      finweckTreeUpdateTrigger.value++;
    }
    const mayUseWheel = !ensureMaybeTouch();
    let wheelCatched = false;
    function handleListScroll(e2) {
      var _a;
      (_a = props.onScroll) === null || _a === void 0 ? void 0 : _a.call(props, e2);
      if (!mayUseWheel || !wheelCatched) {
        syncViewport();
      }
    }
    function handleListWheel(e2) {
      var _a;
      (_a = props.onWheel) === null || _a === void 0 ? void 0 : _a.call(props, e2);
      if (mayUseWheel) {
        const listEl = listElRef.value;
        if (listEl != null) {
          if (e2.deltaX === 0) {
            if (listEl.scrollTop === 0 && e2.deltaY <= 0) {
              return;
            }
            if (listEl.scrollTop + listEl.offsetHeight >= listEl.scrollHeight && e2.deltaY >= 0) {
              return;
            }
          }
          e2.preventDefault();
          listEl.scrollTop += e2.deltaY / ensureWheelScale();
          listEl.scrollLeft += e2.deltaX / ensureWheelScale();
          syncViewport();
          wheelCatched = true;
          beforeNextFrameOnce(() => {
            wheelCatched = false;
          });
        }
      }
    }
    function handleListResize(entry) {
      if (isHideByVShow(entry.target))
        return;
      if (entry.contentRect.height === listHeightRef.value)
        return;
      listHeightRef.value = entry.contentRect.height;
      const { onResize } = props;
      if (onResize !== void 0)
        onResize(entry);
    }
    function syncViewport() {
      const { value: listEl } = listElRef;
      if (listEl == null)
        return;
      scrollTopRef.value = listEl.scrollTop;
      listEl.scrollLeft;
    }
    function isHideByVShow(el) {
      let cursor = el;
      while (cursor !== null) {
        if (cursor.style.display === "none")
          return true;
        cursor = cursor.parentElement;
      }
      return false;
    }
    return {
      listHeight: listHeightRef,
      listStyle: {
        overflow: "auto"
      },
      keyToIndex: keyIndexMapRef,
      itemsStyle: computed(() => {
        const { itemResizable } = props;
        const height = pxfy(finweckTreeRef.value.sum());
        finweckTreeUpdateTrigger.value;
        return [
          props.itemsStyle,
          {
            boxSizing: "content-box",
            height: itemResizable ? "" : height,
            minHeight: itemResizable ? height : "",
            paddingTop: pxfy(props.paddingTop),
            paddingBottom: pxfy(props.paddingBottom)
          }
        ];
      }),
      visibleItemsStyle: computed(() => {
        finweckTreeUpdateTrigger.value;
        return {
          transform: `translateY(${pxfy(finweckTreeRef.value.sum(startIndexRef.value))})`
        };
      }),
      viewportItems: viewportItemsRef,
      listElRef,
      itemsElRef: ref(null),
      scrollTo,
      handleListResize,
      handleListScroll,
      handleListWheel,
      handleItemResize
    };
  },
  render() {
    const { itemResizable, keyField, keyToIndex, visibleItemsTag } = this;
    return h(VResizeObserver, {
      onResize: this.handleListResize
    }, {
      default: () => {
        var _a, _b;
        return h("div", mergeProps(this.$attrs, {
          class: ["v-vl", this.showScrollbar && "v-vl--show-scrollbar"],
          onScroll: this.handleListScroll,
          onWheel: this.handleListWheel,
          ref: "listElRef"
        }), [
          this.items.length !== 0 ? h("div", {
            ref: "itemsElRef",
            class: "v-vl-items",
            style: this.itemsStyle
          }, [
            h(visibleItemsTag, Object.assign({
              class: "v-vl-visible-items",
              style: this.visibleItemsStyle
            }, this.visibleItemsProps), {
              default: () => this.viewportItems.map((item) => {
                const key = item[keyField];
                const index = keyToIndex.get(key);
                const itemVNode = this.$slots.default({
                  item,
                  index
                })[0];
                if (itemResizable) {
                  return h(VResizeObserver, {
                    key,
                    onResize: (entry) => this.handleItemResize(key, entry)
                  }, {
                    default: () => itemVNode
                  });
                }
                itemVNode.key = key;
                return itemVNode;
              })
            })
          ]) : (_b = (_a = this.$slots).empty) === null || _b === void 0 ? void 0 : _b.call(_a)
        ]);
      }
    });
  }
});
const enUS$1 = {
  name: "en-US",
  global: {
    undo: "Undo",
    redo: "Redo",
    confirm: "Confirm",
    clear: "Clear"
  },
  Popconfirm: {
    positiveText: "Confirm",
    negativeText: "Cancel"
  },
  Cascader: {
    placeholder: "Please Select",
    loading: "Loading",
    loadingRequiredMessage: (label) => `Please load all ${label}'s descendants before checking it.`
  },
  Time: {
    dateFormat: "yyyy-MM-dd",
    dateTimeFormat: "yyyy-MM-dd HH:mm:ss"
  },
  DatePicker: {
    yearFormat: "yyyy",
    monthFormat: "MMM",
    dayFormat: "eeeeee",
    yearTypeFormat: "yyyy",
    monthTypeFormat: "yyyy-MM",
    dateFormat: "yyyy-MM-dd",
    dateTimeFormat: "yyyy-MM-dd HH:mm:ss",
    quarterFormat: "yyyy-qqq",
    weekFormat: "yyyy-w",
    clear: "Clear",
    now: "Now",
    confirm: "Confirm",
    selectTime: "Select Time",
    selectDate: "Select Date",
    datePlaceholder: "Select Date",
    datetimePlaceholder: "Select Date and Time",
    monthPlaceholder: "Select Month",
    yearPlaceholder: "Select Year",
    quarterPlaceholder: "Select Quarter",
    weekPlaceholder: "Select Week",
    startDatePlaceholder: "Start Date",
    endDatePlaceholder: "End Date",
    startDatetimePlaceholder: "Start Date and Time",
    endDatetimePlaceholder: "End Date and Time",
    startMonthPlaceholder: "Start Month",
    endMonthPlaceholder: "End Month",
    monthBeforeYear: true,
    firstDayOfWeek: 6,
    today: "Today"
  },
  DataTable: {
    checkTableAll: "Select all in the table",
    uncheckTableAll: "Unselect all in the table",
    confirm: "Confirm",
    clear: "Clear"
  },
  LegacyTransfer: {
    sourceTitle: "Source",
    targetTitle: "Target"
  },
  Transfer: {
    selectAll: "Select all",
    unselectAll: "Unselect all",
    clearAll: "Clear",
    total: (num) => `Total ${num} items`,
    selected: (num) => `${num} items selected`
  },
  Empty: {
    description: "No Data"
  },
  Select: {
    placeholder: "Please Select"
  },
  TimePicker: {
    placeholder: "Select Time",
    positiveText: "OK",
    negativeText: "Cancel",
    now: "Now",
    clear: "Clear"
  },
  Pagination: {
    goto: "Goto",
    selectionSuffix: "page"
  },
  DynamicTags: {
    add: "Add"
  },
  Log: {
    loading: "Loading"
  },
  Input: {
    placeholder: "Please Input"
  },
  InputNumber: {
    placeholder: "Please Input"
  },
  DynamicInput: {
    create: "Create"
  },
  ThemeEditor: {
    title: "Theme Editor",
    clearAllVars: "Clear All Variables",
    clearSearch: "Clear Search",
    filterCompName: "Filter Component Name",
    filterVarName: "Filter Variable Name",
    import: "Import",
    export: "Export",
    restore: "Reset to Default"
  },
  Image: {
    tipPrevious: "Previous picture (←)",
    tipNext: "Next picture (→)",
    tipCounterclockwise: "Counterclockwise",
    tipClockwise: "Clockwise",
    tipZoomOut: "Zoom out",
    tipZoomIn: "Zoom in",
    tipDownload: "Download",
    tipClose: "Close (Esc)",
    // TODO: translation
    tipOriginalSize: "Zoom to original size"
  }
};
function buildFormatLongFn$1(args) {
  return function() {
    var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var width = options.width ? String(options.width) : args.defaultWidth;
    var format2 = args.formats[width] || args.formats[args.defaultWidth];
    return format2;
  };
}
function requiredArgs$1(required, args) {
  if (args.length < required) {
    throw new TypeError(required + " argument" + (required > 1 ? "s" : "") + " required, but only " + args.length + " present");
  }
}
function toDate$2(argument) {
  requiredArgs$1(1, arguments);
  var argStr = Object.prototype.toString.call(argument);
  if (argument instanceof Date || _typeof(argument) === "object" && argStr === "[object Date]") {
    return new Date(argument.getTime());
  } else if (typeof argument === "number" || argStr === "[object Number]") {
    return new Date(argument);
  } else {
    if ((typeof argument === "string" || argStr === "[object String]") && typeof console !== "undefined") {
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments");
      console.warn(new Error().stack);
    }
    return /* @__PURE__ */ new Date(NaN);
  }
}
function toInteger$2(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }
  var number = Number(dirtyNumber);
  if (isNaN(number)) {
    return number;
  }
  return number < 0 ? Math.ceil(number) : Math.floor(number);
}
var defaultOptions$2 = {};
function getDefaultOptions$1() {
  return defaultOptions$2;
}
function startOfUTCWeek$1(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
  requiredArgs$1(1, arguments);
  var defaultOptions2 = getDefaultOptions$1();
  var weekStartsOn = toInteger$2((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions2.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions2.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0);
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  }
  var date = toDate$2(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}
function buildLocalizeFn$1(args) {
  return function(dirtyIndex, options) {
    var context = options !== null && options !== void 0 && options.context ? String(options.context) : "standalone";
    var valuesArray;
    if (context === "formatting" && args.formattingValues) {
      var defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      var width = options !== null && options !== void 0 && options.width ? String(options.width) : defaultWidth;
      valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      var _defaultWidth = args.defaultWidth;
      var _width = options !== null && options !== void 0 && options.width ? String(options.width) : args.defaultWidth;
      valuesArray = args.values[_width] || args.values[_defaultWidth];
    }
    var index = args.argumentCallback ? args.argumentCallback(dirtyIndex) : dirtyIndex;
    return valuesArray[index];
  };
}
function buildMatchFn$1(args) {
  return function(string) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var width = options.width;
    var matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
    var matchResult = string.match(matchPattern);
    if (!matchResult) {
      return null;
    }
    var matchedString = matchResult[0];
    var parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
    var key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, function(pattern) {
      return pattern.test(matchedString);
    }) : findKey(parsePatterns, function(pattern) {
      return pattern.test(matchedString);
    });
    var value;
    value = args.valueCallback ? args.valueCallback(key) : key;
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value,
      rest
    };
  };
}
function findKey(object, predicate) {
  for (var key in object) {
    if (object.hasOwnProperty(key) && predicate(object[key])) {
      return key;
    }
  }
  return void 0;
}
function findIndex(array, predicate) {
  for (var key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }
  return void 0;
}
function buildMatchPatternFn$1(args) {
  return function(string) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var matchResult = string.match(args.matchPattern);
    if (!matchResult)
      return null;
    var matchedString = matchResult[0];
    var parseResult = string.match(args.parsePattern);
    if (!parseResult)
      return null;
    var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value,
      rest
    };
  };
}
var formatDistanceLocale = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
};
var formatDistance$1 = function formatDistance(token, count, options) {
  var result;
  var tokenValue = formatDistanceLocale[token];
  if (typeof tokenValue === "string") {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace("{{count}}", count.toString());
  }
  if (options !== null && options !== void 0 && options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return "in " + result;
    } else {
      return result + " ago";
    }
  }
  return result;
};
var dateFormats = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
};
var timeFormats = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
};
var dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
};
var formatLong$1 = {
  date: buildFormatLongFn$1({
    formats: dateFormats,
    defaultWidth: "full"
  }),
  time: buildFormatLongFn$1({
    formats: timeFormats,
    defaultWidth: "full"
  }),
  dateTime: buildFormatLongFn$1({
    formats: dateTimeFormats,
    defaultWidth: "full"
  })
};
var formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
};
var formatRelative$1 = function formatRelative(token, _date, _baseDate, _options) {
  return formatRelativeLocale[token];
};
var eraValues = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
};
var quarterValues = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
};
var monthValues = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
};
var dayValues = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
};
var dayPeriodValues = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
};
var ordinalNumber = function ordinalNumber2(dirtyNumber, _options) {
  var number = Number(dirtyNumber);
  var rem100 = number % 100;
  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + "st";
      case 2:
        return number + "nd";
      case 3:
        return number + "rd";
    }
  }
  return number + "th";
};
var localize$1 = {
  ordinalNumber,
  era: buildLocalizeFn$1({
    values: eraValues,
    defaultWidth: "wide"
  }),
  quarter: buildLocalizeFn$1({
    values: quarterValues,
    defaultWidth: "wide",
    argumentCallback: function argumentCallback(quarter) {
      return quarter - 1;
    }
  }),
  month: buildLocalizeFn$1({
    values: monthValues,
    defaultWidth: "wide"
  }),
  day: buildLocalizeFn$1({
    values: dayValues,
    defaultWidth: "wide"
  }),
  dayPeriod: buildLocalizeFn$1({
    values: dayPeriodValues,
    defaultWidth: "wide",
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: "wide"
  })
};
var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
};
var parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
var parseMonthPatterns = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
};
var matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
var parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
};
var match$1 = {
  ordinalNumber: buildMatchPatternFn$1({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: function valueCallback(value) {
      return parseInt(value, 10);
    }
  }),
  era: buildMatchFn$1({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseEraPatterns,
    defaultParseWidth: "any"
  }),
  quarter: buildMatchFn$1({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: "any",
    valueCallback: function valueCallback2(index) {
      return index + 1;
    }
  }),
  month: buildMatchFn$1({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: "any"
  }),
  day: buildMatchFn$1({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseDayPatterns,
    defaultParseWidth: "any"
  }),
  dayPeriod: buildMatchFn$1({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: "any",
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: "any"
  })
};
var locale = {
  code: "en-US",
  formatDistance: formatDistance$1,
  formatLong: formatLong$1,
  formatRelative: formatRelative$1,
  localize: localize$1,
  match: match$1,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
const dateEnUs = {
  name: "en-US",
  locale
};
function addDays(dirtyDate, dirtyAmount) {
  requiredArgs$1(2, arguments);
  var date = toDate$2(dirtyDate);
  var amount = toInteger$2(dirtyAmount);
  if (isNaN(amount)) {
    return /* @__PURE__ */ new Date(NaN);
  }
  if (!amount) {
    return date;
  }
  date.setDate(date.getDate() + amount);
  return date;
}
function addMonths(dirtyDate, dirtyAmount) {
  requiredArgs$1(2, arguments);
  var date = toDate$2(dirtyDate);
  var amount = toInteger$2(dirtyAmount);
  if (isNaN(amount)) {
    return /* @__PURE__ */ new Date(NaN);
  }
  if (!amount) {
    return date;
  }
  var dayOfMonth = date.getDate();
  var endOfDesiredMonth = new Date(date.getTime());
  endOfDesiredMonth.setMonth(date.getMonth() + amount + 1, 0);
  var daysInMonth = endOfDesiredMonth.getDate();
  if (dayOfMonth >= daysInMonth) {
    return endOfDesiredMonth;
  } else {
    date.setFullYear(endOfDesiredMonth.getFullYear(), endOfDesiredMonth.getMonth(), dayOfMonth);
    return date;
  }
}
function addMilliseconds$1(dirtyDate, dirtyAmount) {
  requiredArgs$1(2, arguments);
  var timestamp = toDate$2(dirtyDate).getTime();
  var amount = toInteger$2(dirtyAmount);
  return new Date(timestamp + amount);
}
function startOfWeek(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
  requiredArgs$1(1, arguments);
  var defaultOptions2 = getDefaultOptions$1();
  var weekStartsOn = toInteger$2((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions2.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions2.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0);
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  }
  var date = toDate$2(dirtyDate);
  var day = date.getDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setDate(date.getDate() - diff);
  date.setHours(0, 0, 0, 0);
  return date;
}
function getTimezoneOffsetInMilliseconds$2(date) {
  var utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
  utcDate.setUTCFullYear(date.getFullYear());
  return date.getTime() - utcDate.getTime();
}
function startOfDay(dirtyDate) {
  requiredArgs$1(1, arguments);
  var date = toDate$2(dirtyDate);
  date.setHours(0, 0, 0, 0);
  return date;
}
function addQuarters(dirtyDate, dirtyAmount) {
  requiredArgs$1(2, arguments);
  var amount = toInteger$2(dirtyAmount);
  var months = amount * 3;
  return addMonths(dirtyDate, months);
}
function addYears(dirtyDate, dirtyAmount) {
  requiredArgs$1(2, arguments);
  var amount = toInteger$2(dirtyAmount);
  return addMonths(dirtyDate, amount * 12);
}
var millisecondsInMinute = 6e4;
var millisecondsInHour = 36e5;
var millisecondsInSecond = 1e3;
function isSameDay(dirtyDateLeft, dirtyDateRight) {
  requiredArgs$1(2, arguments);
  var dateLeftStartOfDay = startOfDay(dirtyDateLeft);
  var dateRightStartOfDay = startOfDay(dirtyDateRight);
  return dateLeftStartOfDay.getTime() === dateRightStartOfDay.getTime();
}
function isDate$1(value) {
  requiredArgs$1(1, arguments);
  return value instanceof Date || _typeof(value) === "object" && Object.prototype.toString.call(value) === "[object Date]";
}
function isValid$1(dirtyDate) {
  requiredArgs$1(1, arguments);
  if (!isDate$1(dirtyDate) && typeof dirtyDate !== "number") {
    return false;
  }
  var date = toDate$2(dirtyDate);
  return !isNaN(Number(date));
}
function getQuarter(dirtyDate) {
  requiredArgs$1(1, arguments);
  var date = toDate$2(dirtyDate);
  var quarter = Math.floor(date.getMonth() / 3) + 1;
  return quarter;
}
function startOfMinute(dirtyDate) {
  requiredArgs$1(1, arguments);
  var date = toDate$2(dirtyDate);
  date.setSeconds(0, 0);
  return date;
}
function startOfQuarter(dirtyDate) {
  requiredArgs$1(1, arguments);
  var date = toDate$2(dirtyDate);
  var currentMonth = date.getMonth();
  var month = currentMonth - currentMonth % 3;
  date.setMonth(month, 1);
  date.setHours(0, 0, 0, 0);
  return date;
}
function startOfMonth(dirtyDate) {
  requiredArgs$1(1, arguments);
  var date = toDate$2(dirtyDate);
  date.setDate(1);
  date.setHours(0, 0, 0, 0);
  return date;
}
function startOfYear(dirtyDate) {
  requiredArgs$1(1, arguments);
  var cleanDate = toDate$2(dirtyDate);
  var date = /* @__PURE__ */ new Date(0);
  date.setFullYear(cleanDate.getFullYear(), 0, 1);
  date.setHours(0, 0, 0, 0);
  return date;
}
function subMilliseconds$1(dirtyDate, dirtyAmount) {
  requiredArgs$1(2, arguments);
  var amount = toInteger$2(dirtyAmount);
  return addMilliseconds$1(dirtyDate, -amount);
}
var MILLISECONDS_IN_DAY = 864e5;
function getUTCDayOfYear$1(dirtyDate) {
  requiredArgs$1(1, arguments);
  var date = toDate$2(dirtyDate);
  var timestamp = date.getTime();
  date.setUTCMonth(0, 1);
  date.setUTCHours(0, 0, 0, 0);
  var startOfYearTimestamp = date.getTime();
  var difference = timestamp - startOfYearTimestamp;
  return Math.floor(difference / MILLISECONDS_IN_DAY) + 1;
}
function startOfUTCISOWeek$1(dirtyDate) {
  requiredArgs$1(1, arguments);
  var weekStartsOn = 1;
  var date = toDate$2(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}
function getUTCISOWeekYear$1(dirtyDate) {
  requiredArgs$1(1, arguments);
  var date = toDate$2(dirtyDate);
  var year = date.getUTCFullYear();
  var fourthOfJanuaryOfNextYear = /* @__PURE__ */ new Date(0);
  fourthOfJanuaryOfNextYear.setUTCFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = startOfUTCISOWeek$1(fourthOfJanuaryOfNextYear);
  var fourthOfJanuaryOfThisYear = /* @__PURE__ */ new Date(0);
  fourthOfJanuaryOfThisYear.setUTCFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = startOfUTCISOWeek$1(fourthOfJanuaryOfThisYear);
  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}
function startOfUTCISOWeekYear$1(dirtyDate) {
  requiredArgs$1(1, arguments);
  var year = getUTCISOWeekYear$1(dirtyDate);
  var fourthOfJanuary = /* @__PURE__ */ new Date(0);
  fourthOfJanuary.setUTCFullYear(year, 0, 4);
  fourthOfJanuary.setUTCHours(0, 0, 0, 0);
  var date = startOfUTCISOWeek$1(fourthOfJanuary);
  return date;
}
var MILLISECONDS_IN_WEEK$1 = 6048e5;
function getUTCISOWeek$1(dirtyDate) {
  requiredArgs$1(1, arguments);
  var date = toDate$2(dirtyDate);
  var diff = startOfUTCISOWeek$1(date).getTime() - startOfUTCISOWeekYear$1(date).getTime();
  return Math.round(diff / MILLISECONDS_IN_WEEK$1) + 1;
}
function getUTCWeekYear$1(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$firstWeekCon, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
  requiredArgs$1(1, arguments);
  var date = toDate$2(dirtyDate);
  var year = date.getUTCFullYear();
  var defaultOptions2 = getDefaultOptions$1();
  var firstWeekContainsDate = toInteger$2((_ref = (_ref2 = (_ref3 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions2.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions2.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref !== void 0 ? _ref : 1);
  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  }
  var firstWeekOfNextYear = /* @__PURE__ */ new Date(0);
  firstWeekOfNextYear.setUTCFullYear(year + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = startOfUTCWeek$1(firstWeekOfNextYear, options);
  var firstWeekOfThisYear = /* @__PURE__ */ new Date(0);
  firstWeekOfThisYear.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeekOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = startOfUTCWeek$1(firstWeekOfThisYear, options);
  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}
function startOfUTCWeekYear$1(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$firstWeekCon, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
  requiredArgs$1(1, arguments);
  var defaultOptions2 = getDefaultOptions$1();
  var firstWeekContainsDate = toInteger$2((_ref = (_ref2 = (_ref3 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions2.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions2.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref !== void 0 ? _ref : 1);
  var year = getUTCWeekYear$1(dirtyDate, options);
  var firstWeek = /* @__PURE__ */ new Date(0);
  firstWeek.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeek.setUTCHours(0, 0, 0, 0);
  var date = startOfUTCWeek$1(firstWeek, options);
  return date;
}
var MILLISECONDS_IN_WEEK = 6048e5;
function getUTCWeek$1(dirtyDate, options) {
  requiredArgs$1(1, arguments);
  var date = toDate$2(dirtyDate);
  var diff = startOfUTCWeek$1(date, options).getTime() - startOfUTCWeekYear$1(date, options).getTime();
  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}
function addLeadingZeros$2(number, targetLength) {
  var sign = number < 0 ? "-" : "";
  var output = Math.abs(number).toString();
  while (output.length < targetLength) {
    output = "0" + output;
  }
  return sign + output;
}
var formatters$3 = {
  // Year
  y: function y(date, token) {
    var signedYear = date.getUTCFullYear();
    var year = signedYear > 0 ? signedYear : 1 - signedYear;
    return addLeadingZeros$2(token === "yy" ? year % 100 : year, token.length);
  },
  // Month
  M: function M(date, token) {
    var month = date.getUTCMonth();
    return token === "M" ? String(month + 1) : addLeadingZeros$2(month + 1, 2);
  },
  // Day of the month
  d: function d(date, token) {
    return addLeadingZeros$2(date.getUTCDate(), token.length);
  },
  // AM or PM
  a: function a(date, token) {
    var dayPeriodEnumValue = date.getUTCHours() / 12 >= 1 ? "pm" : "am";
    switch (token) {
      case "a":
      case "aa":
        return dayPeriodEnumValue.toUpperCase();
      case "aaa":
        return dayPeriodEnumValue;
      case "aaaaa":
        return dayPeriodEnumValue[0];
      case "aaaa":
      default:
        return dayPeriodEnumValue === "am" ? "a.m." : "p.m.";
    }
  },
  // Hour [1-12]
  h: function h2(date, token) {
    return addLeadingZeros$2(date.getUTCHours() % 12 || 12, token.length);
  },
  // Hour [0-23]
  H: function H(date, token) {
    return addLeadingZeros$2(date.getUTCHours(), token.length);
  },
  // Minute
  m: function m(date, token) {
    return addLeadingZeros$2(date.getUTCMinutes(), token.length);
  },
  // Second
  s: function s(date, token) {
    return addLeadingZeros$2(date.getUTCSeconds(), token.length);
  },
  // Fraction of second
  S: function S(date, token) {
    var numberOfDigits = token.length;
    var milliseconds = date.getUTCMilliseconds();
    var fractionalSeconds = Math.floor(milliseconds * Math.pow(10, numberOfDigits - 3));
    return addLeadingZeros$2(fractionalSeconds, token.length);
  }
};
var dayPeriodEnum = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
};
var formatters$2 = {
  // Era
  G: function G(date, token, localize2) {
    var era = date.getUTCFullYear() > 0 ? 1 : 0;
    switch (token) {
      case "G":
      case "GG":
      case "GGG":
        return localize2.era(era, {
          width: "abbreviated"
        });
      case "GGGGG":
        return localize2.era(era, {
          width: "narrow"
        });
      case "GGGG":
      default:
        return localize2.era(era, {
          width: "wide"
        });
    }
  },
  // Year
  y: function y2(date, token, localize2) {
    if (token === "yo") {
      var signedYear = date.getUTCFullYear();
      var year = signedYear > 0 ? signedYear : 1 - signedYear;
      return localize2.ordinalNumber(year, {
        unit: "year"
      });
    }
    return formatters$3.y(date, token);
  },
  // Local week-numbering year
  Y: function Y(date, token, localize2, options) {
    var signedWeekYear = getUTCWeekYear$1(date, options);
    var weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear;
    if (token === "YY") {
      var twoDigitYear = weekYear % 100;
      return addLeadingZeros$2(twoDigitYear, 2);
    }
    if (token === "Yo") {
      return localize2.ordinalNumber(weekYear, {
        unit: "year"
      });
    }
    return addLeadingZeros$2(weekYear, token.length);
  },
  // ISO week-numbering year
  R: function R(date, token) {
    var isoWeekYear = getUTCISOWeekYear$1(date);
    return addLeadingZeros$2(isoWeekYear, token.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function u(date, token) {
    var year = date.getUTCFullYear();
    return addLeadingZeros$2(year, token.length);
  },
  // Quarter
  Q: function Q(date, token, localize2) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);
    switch (token) {
      case "Q":
        return String(quarter);
      case "QQ":
        return addLeadingZeros$2(quarter, 2);
      case "Qo":
        return localize2.ordinalNumber(quarter, {
          unit: "quarter"
        });
      case "QQQ":
        return localize2.quarter(quarter, {
          width: "abbreviated",
          context: "formatting"
        });
      case "QQQQQ":
        return localize2.quarter(quarter, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQ":
      default:
        return localize2.quarter(quarter, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function q(date, token, localize2) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);
    switch (token) {
      case "q":
        return String(quarter);
      case "qq":
        return addLeadingZeros$2(quarter, 2);
      case "qo":
        return localize2.ordinalNumber(quarter, {
          unit: "quarter"
        });
      case "qqq":
        return localize2.quarter(quarter, {
          width: "abbreviated",
          context: "standalone"
        });
      case "qqqqq":
        return localize2.quarter(quarter, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqq":
      default:
        return localize2.quarter(quarter, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function M2(date, token, localize2) {
    var month = date.getUTCMonth();
    switch (token) {
      case "M":
      case "MM":
        return formatters$3.M(date, token);
      case "Mo":
        return localize2.ordinalNumber(month + 1, {
          unit: "month"
        });
      case "MMM":
        return localize2.month(month, {
          width: "abbreviated",
          context: "formatting"
        });
      case "MMMMM":
        return localize2.month(month, {
          width: "narrow",
          context: "formatting"
        });
      case "MMMM":
      default:
        return localize2.month(month, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone month
  L: function L(date, token, localize2) {
    var month = date.getUTCMonth();
    switch (token) {
      case "L":
        return String(month + 1);
      case "LL":
        return addLeadingZeros$2(month + 1, 2);
      case "Lo":
        return localize2.ordinalNumber(month + 1, {
          unit: "month"
        });
      case "LLL":
        return localize2.month(month, {
          width: "abbreviated",
          context: "standalone"
        });
      case "LLLLL":
        return localize2.month(month, {
          width: "narrow",
          context: "standalone"
        });
      case "LLLL":
      default:
        return localize2.month(month, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Local week of year
  w: function w(date, token, localize2, options) {
    var week = getUTCWeek$1(date, options);
    if (token === "wo") {
      return localize2.ordinalNumber(week, {
        unit: "week"
      });
    }
    return addLeadingZeros$2(week, token.length);
  },
  // ISO week of year
  I: function I(date, token, localize2) {
    var isoWeek = getUTCISOWeek$1(date);
    if (token === "Io") {
      return localize2.ordinalNumber(isoWeek, {
        unit: "week"
      });
    }
    return addLeadingZeros$2(isoWeek, token.length);
  },
  // Day of the month
  d: function d2(date, token, localize2) {
    if (token === "do") {
      return localize2.ordinalNumber(date.getUTCDate(), {
        unit: "date"
      });
    }
    return formatters$3.d(date, token);
  },
  // Day of year
  D: function D(date, token, localize2) {
    var dayOfYear = getUTCDayOfYear$1(date);
    if (token === "Do") {
      return localize2.ordinalNumber(dayOfYear, {
        unit: "dayOfYear"
      });
    }
    return addLeadingZeros$2(dayOfYear, token.length);
  },
  // Day of week
  E: function E(date, token, localize2) {
    var dayOfWeek = date.getUTCDay();
    switch (token) {
      case "E":
      case "EE":
      case "EEE":
        return localize2.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting"
        });
      case "EEEEE":
        return localize2.day(dayOfWeek, {
          width: "narrow",
          context: "formatting"
        });
      case "EEEEEE":
        return localize2.day(dayOfWeek, {
          width: "short",
          context: "formatting"
        });
      case "EEEE":
      default:
        return localize2.day(dayOfWeek, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function e(date, token, localize2, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
    switch (token) {
      case "e":
        return String(localDayOfWeek);
      case "ee":
        return addLeadingZeros$2(localDayOfWeek, 2);
      case "eo":
        return localize2.ordinalNumber(localDayOfWeek, {
          unit: "day"
        });
      case "eee":
        return localize2.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting"
        });
      case "eeeee":
        return localize2.day(dayOfWeek, {
          width: "narrow",
          context: "formatting"
        });
      case "eeeeee":
        return localize2.day(dayOfWeek, {
          width: "short",
          context: "formatting"
        });
      case "eeee":
      default:
        return localize2.day(dayOfWeek, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function c2(date, token, localize2, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
    switch (token) {
      case "c":
        return String(localDayOfWeek);
      case "cc":
        return addLeadingZeros$2(localDayOfWeek, token.length);
      case "co":
        return localize2.ordinalNumber(localDayOfWeek, {
          unit: "day"
        });
      case "ccc":
        return localize2.day(dayOfWeek, {
          width: "abbreviated",
          context: "standalone"
        });
      case "ccccc":
        return localize2.day(dayOfWeek, {
          width: "narrow",
          context: "standalone"
        });
      case "cccccc":
        return localize2.day(dayOfWeek, {
          width: "short",
          context: "standalone"
        });
      case "cccc":
      default:
        return localize2.day(dayOfWeek, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function i(date, token, localize2) {
    var dayOfWeek = date.getUTCDay();
    var isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;
    switch (token) {
      case "i":
        return String(isoDayOfWeek);
      case "ii":
        return addLeadingZeros$2(isoDayOfWeek, token.length);
      case "io":
        return localize2.ordinalNumber(isoDayOfWeek, {
          unit: "day"
        });
      case "iii":
        return localize2.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting"
        });
      case "iiiii":
        return localize2.day(dayOfWeek, {
          width: "narrow",
          context: "formatting"
        });
      case "iiiiii":
        return localize2.day(dayOfWeek, {
          width: "short",
          context: "formatting"
        });
      case "iiii":
      default:
        return localize2.day(dayOfWeek, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function a2(date, token, localize2) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";
    switch (token) {
      case "a":
      case "aa":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function b(date, token, localize2) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;
    if (hours === 12) {
      dayPeriodEnumValue = dayPeriodEnum.noon;
    } else if (hours === 0) {
      dayPeriodEnumValue = dayPeriodEnum.midnight;
    } else {
      dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";
    }
    switch (token) {
      case "b":
      case "bb":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function B(date, token, localize2) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;
    if (hours >= 17) {
      dayPeriodEnumValue = dayPeriodEnum.evening;
    } else if (hours >= 12) {
      dayPeriodEnumValue = dayPeriodEnum.afternoon;
    } else if (hours >= 4) {
      dayPeriodEnumValue = dayPeriodEnum.morning;
    } else {
      dayPeriodEnumValue = dayPeriodEnum.night;
    }
    switch (token) {
      case "B":
      case "BB":
      case "BBB":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function h3(date, token, localize2) {
    if (token === "ho") {
      var hours = date.getUTCHours() % 12;
      if (hours === 0)
        hours = 12;
      return localize2.ordinalNumber(hours, {
        unit: "hour"
      });
    }
    return formatters$3.h(date, token);
  },
  // Hour [0-23]
  H: function H2(date, token, localize2) {
    if (token === "Ho") {
      return localize2.ordinalNumber(date.getUTCHours(), {
        unit: "hour"
      });
    }
    return formatters$3.H(date, token);
  },
  // Hour [0-11]
  K: function K(date, token, localize2) {
    var hours = date.getUTCHours() % 12;
    if (token === "Ko") {
      return localize2.ordinalNumber(hours, {
        unit: "hour"
      });
    }
    return addLeadingZeros$2(hours, token.length);
  },
  // Hour [1-24]
  k: function k(date, token, localize2) {
    var hours = date.getUTCHours();
    if (hours === 0)
      hours = 24;
    if (token === "ko") {
      return localize2.ordinalNumber(hours, {
        unit: "hour"
      });
    }
    return addLeadingZeros$2(hours, token.length);
  },
  // Minute
  m: function m2(date, token, localize2) {
    if (token === "mo") {
      return localize2.ordinalNumber(date.getUTCMinutes(), {
        unit: "minute"
      });
    }
    return formatters$3.m(date, token);
  },
  // Second
  s: function s2(date, token, localize2) {
    if (token === "so") {
      return localize2.ordinalNumber(date.getUTCSeconds(), {
        unit: "second"
      });
    }
    return formatters$3.s(date, token);
  },
  // Fraction of second
  S: function S2(date, token) {
    return formatters$3.S(date, token);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function X(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();
    if (timezoneOffset === 0) {
      return "Z";
    }
    switch (token) {
      case "X":
        return formatTimezoneWithOptionalMinutes$1(timezoneOffset);
      case "XXXX":
      case "XX":
        return formatTimezone$1(timezoneOffset);
      case "XXXXX":
      case "XXX":
      default:
        return formatTimezone$1(timezoneOffset, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function x(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();
    switch (token) {
      case "x":
        return formatTimezoneWithOptionalMinutes$1(timezoneOffset);
      case "xxxx":
      case "xx":
        return formatTimezone$1(timezoneOffset);
      case "xxxxx":
      case "xxx":
      default:
        return formatTimezone$1(timezoneOffset, ":");
    }
  },
  // Timezone (GMT)
  O: function O(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();
    switch (token) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + formatTimezoneShort$1(timezoneOffset, ":");
      case "OOOO":
      default:
        return "GMT" + formatTimezone$1(timezoneOffset, ":");
    }
  },
  // Timezone (specific non-location)
  z: function z(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();
    switch (token) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + formatTimezoneShort$1(timezoneOffset, ":");
      case "zzzz":
      default:
        return "GMT" + formatTimezone$1(timezoneOffset, ":");
    }
  },
  // Seconds timestamp
  t: function t(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = Math.floor(originalDate.getTime() / 1e3);
    return addLeadingZeros$2(timestamp, token.length);
  },
  // Milliseconds timestamp
  T: function T(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = originalDate.getTime();
    return addLeadingZeros$2(timestamp, token.length);
  }
};
function formatTimezoneShort$1(offset, dirtyDelimiter) {
  var sign = offset > 0 ? "-" : "+";
  var absOffset = Math.abs(offset);
  var hours = Math.floor(absOffset / 60);
  var minutes = absOffset % 60;
  if (minutes === 0) {
    return sign + String(hours);
  }
  var delimiter = dirtyDelimiter;
  return sign + String(hours) + delimiter + addLeadingZeros$2(minutes, 2);
}
function formatTimezoneWithOptionalMinutes$1(offset, dirtyDelimiter) {
  if (offset % 60 === 0) {
    var sign = offset > 0 ? "-" : "+";
    return sign + addLeadingZeros$2(Math.abs(offset) / 60, 2);
  }
  return formatTimezone$1(offset, dirtyDelimiter);
}
function formatTimezone$1(offset, dirtyDelimiter) {
  var delimiter = dirtyDelimiter || "";
  var sign = offset > 0 ? "-" : "+";
  var absOffset = Math.abs(offset);
  var hours = addLeadingZeros$2(Math.floor(absOffset / 60), 2);
  var minutes = addLeadingZeros$2(absOffset % 60, 2);
  return sign + hours + delimiter + minutes;
}
var dateLongFormatter = function dateLongFormatter2(pattern, formatLong2) {
  switch (pattern) {
    case "P":
      return formatLong2.date({
        width: "short"
      });
    case "PP":
      return formatLong2.date({
        width: "medium"
      });
    case "PPP":
      return formatLong2.date({
        width: "long"
      });
    case "PPPP":
    default:
      return formatLong2.date({
        width: "full"
      });
  }
};
var timeLongFormatter = function timeLongFormatter2(pattern, formatLong2) {
  switch (pattern) {
    case "p":
      return formatLong2.time({
        width: "short"
      });
    case "pp":
      return formatLong2.time({
        width: "medium"
      });
    case "ppp":
      return formatLong2.time({
        width: "long"
      });
    case "pppp":
    default:
      return formatLong2.time({
        width: "full"
      });
  }
};
var dateTimeLongFormatter = function dateTimeLongFormatter2(pattern, formatLong2) {
  var matchResult = pattern.match(/(P+)(p+)?/) || [];
  var datePattern = matchResult[1];
  var timePattern = matchResult[2];
  if (!timePattern) {
    return dateLongFormatter(pattern, formatLong2);
  }
  var dateTimeFormat;
  switch (datePattern) {
    case "P":
      dateTimeFormat = formatLong2.dateTime({
        width: "short"
      });
      break;
    case "PP":
      dateTimeFormat = formatLong2.dateTime({
        width: "medium"
      });
      break;
    case "PPP":
      dateTimeFormat = formatLong2.dateTime({
        width: "long"
      });
      break;
    case "PPPP":
    default:
      dateTimeFormat = formatLong2.dateTime({
        width: "full"
      });
      break;
  }
  return dateTimeFormat.replace("{{date}}", dateLongFormatter(datePattern, formatLong2)).replace("{{time}}", timeLongFormatter(timePattern, formatLong2));
};
var longFormatters$1 = {
  p: timeLongFormatter,
  P: dateTimeLongFormatter
};
var protectedDayOfYearTokens$1 = ["D", "DD"];
var protectedWeekYearTokens$1 = ["YY", "YYYY"];
function isProtectedDayOfYearToken$1(token) {
  return protectedDayOfYearTokens$1.indexOf(token) !== -1;
}
function isProtectedWeekYearToken$1(token) {
  return protectedWeekYearTokens$1.indexOf(token) !== -1;
}
function throwProtectedError$1(token, format2, input) {
  if (token === "YYYY") {
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(format2, "`) for formatting years to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  } else if (token === "YY") {
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(format2, "`) for formatting years to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  } else if (token === "D") {
    throw new RangeError("Use `d` instead of `D` (in `".concat(format2, "`) for formatting days of the month to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  } else if (token === "DD") {
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(format2, "`) for formatting days of the month to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  }
}
var formattingTokensRegExp$1 = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;
var longFormattingTokensRegExp$1 = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
var escapedStringRegExp$1 = /^'([^]*?)'?$/;
var doubleQuoteRegExp$1 = /''/g;
var unescapedLatinCharacterRegExp$1 = /[a-zA-Z]/;
function format$3(dirtyDate, dirtyFormatStr, options) {
  var _ref, _options$locale, _ref2, _ref3, _ref4, _options$firstWeekCon, _options$locale2, _options$locale2$opti, _defaultOptions$local, _defaultOptions$local2, _ref5, _ref6, _ref7, _options$weekStartsOn, _options$locale3, _options$locale3$opti, _defaultOptions$local3, _defaultOptions$local4;
  requiredArgs$1(2, arguments);
  var formatStr = String(dirtyFormatStr);
  var defaultOptions2 = getDefaultOptions$1();
  var locale$1 = (_ref = (_options$locale = options === null || options === void 0 ? void 0 : options.locale) !== null && _options$locale !== void 0 ? _options$locale : defaultOptions2.locale) !== null && _ref !== void 0 ? _ref : locale;
  var firstWeekContainsDate = toInteger$2((_ref2 = (_ref3 = (_ref4 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale2 = options.locale) === null || _options$locale2 === void 0 ? void 0 : (_options$locale2$opti = _options$locale2.options) === null || _options$locale2$opti === void 0 ? void 0 : _options$locale2$opti.firstWeekContainsDate) !== null && _ref4 !== void 0 ? _ref4 : defaultOptions2.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : (_defaultOptions$local = defaultOptions2.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : 1);
  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  }
  var weekStartsOn = toInteger$2((_ref5 = (_ref6 = (_ref7 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale3 = options.locale) === null || _options$locale3 === void 0 ? void 0 : (_options$locale3$opti = _options$locale3.options) === null || _options$locale3$opti === void 0 ? void 0 : _options$locale3$opti.weekStartsOn) !== null && _ref7 !== void 0 ? _ref7 : defaultOptions2.weekStartsOn) !== null && _ref6 !== void 0 ? _ref6 : (_defaultOptions$local3 = defaultOptions2.locale) === null || _defaultOptions$local3 === void 0 ? void 0 : (_defaultOptions$local4 = _defaultOptions$local3.options) === null || _defaultOptions$local4 === void 0 ? void 0 : _defaultOptions$local4.weekStartsOn) !== null && _ref5 !== void 0 ? _ref5 : 0);
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  }
  if (!locale$1.localize) {
    throw new RangeError("locale must contain localize property");
  }
  if (!locale$1.formatLong) {
    throw new RangeError("locale must contain formatLong property");
  }
  var originalDate = toDate$2(dirtyDate);
  if (!isValid$1(originalDate)) {
    throw new RangeError("Invalid time value");
  }
  var timezoneOffset = getTimezoneOffsetInMilliseconds$2(originalDate);
  var utcDate = subMilliseconds$1(originalDate, timezoneOffset);
  var formatterOptions = {
    firstWeekContainsDate,
    weekStartsOn,
    locale: locale$1,
    _originalDate: originalDate
  };
  var result = formatStr.match(longFormattingTokensRegExp$1).map(function(substring) {
    var firstCharacter = substring[0];
    if (firstCharacter === "p" || firstCharacter === "P") {
      var longFormatter = longFormatters$1[firstCharacter];
      return longFormatter(substring, locale$1.formatLong);
    }
    return substring;
  }).join("").match(formattingTokensRegExp$1).map(function(substring) {
    if (substring === "''") {
      return "'";
    }
    var firstCharacter = substring[0];
    if (firstCharacter === "'") {
      return cleanEscapedString$1(substring);
    }
    var formatter = formatters$2[firstCharacter];
    if (formatter) {
      if (!(options !== null && options !== void 0 && options.useAdditionalWeekYearTokens) && isProtectedWeekYearToken$1(substring)) {
        throwProtectedError$1(substring, dirtyFormatStr, String(dirtyDate));
      }
      if (!(options !== null && options !== void 0 && options.useAdditionalDayOfYearTokens) && isProtectedDayOfYearToken$1(substring)) {
        throwProtectedError$1(substring, dirtyFormatStr, String(dirtyDate));
      }
      return formatter(utcDate, substring, locale$1.localize, formatterOptions);
    }
    if (firstCharacter.match(unescapedLatinCharacterRegExp$1)) {
      throw new RangeError("Format string contains an unescaped latin alphabet character `" + firstCharacter + "`");
    }
    return substring;
  }).join("");
  return result;
}
function cleanEscapedString$1(input) {
  var matched = input.match(escapedStringRegExp$1);
  if (!matched) {
    return input;
  }
  return matched[1].replace(doubleQuoteRegExp$1, "'");
}
function assign$1(target, object) {
  if (target == null) {
    throw new TypeError("assign requires that input parameter not be null or undefined");
  }
  for (var property in object) {
    if (Object.prototype.hasOwnProperty.call(object, property)) {
      target[property] = object[property];
    }
  }
  return target;
}
function getDate(dirtyDate) {
  requiredArgs$1(1, arguments);
  var date = toDate$2(dirtyDate);
  var dayOfMonth = date.getDate();
  return dayOfMonth;
}
function getDay(dirtyDate) {
  requiredArgs$1(1, arguments);
  var date = toDate$2(dirtyDate);
  var day = date.getDay();
  return day;
}
function getDaysInMonth(dirtyDate) {
  requiredArgs$1(1, arguments);
  var date = toDate$2(dirtyDate);
  var year = date.getFullYear();
  var monthIndex = date.getMonth();
  var lastDayOfMonth = /* @__PURE__ */ new Date(0);
  lastDayOfMonth.setFullYear(year, monthIndex + 1, 0);
  lastDayOfMonth.setHours(0, 0, 0, 0);
  return lastDayOfMonth.getDate();
}
function getHours(dirtyDate) {
  requiredArgs$1(1, arguments);
  var date = toDate$2(dirtyDate);
  var hours = date.getHours();
  return hours;
}
function getMilliseconds(dirtyDate) {
  requiredArgs$1(1, arguments);
  var date = toDate$2(dirtyDate);
  var milliseconds = date.getMilliseconds();
  return milliseconds;
}
function getMinutes(dirtyDate) {
  requiredArgs$1(1, arguments);
  var date = toDate$2(dirtyDate);
  var minutes = date.getMinutes();
  return minutes;
}
function getMonth(dirtyDate) {
  requiredArgs$1(1, arguments);
  var date = toDate$2(dirtyDate);
  var month = date.getMonth();
  return month;
}
function getSeconds(dirtyDate) {
  requiredArgs$1(1, arguments);
  var date = toDate$2(dirtyDate);
  var seconds = date.getSeconds();
  return seconds;
}
function getTime(dirtyDate) {
  requiredArgs$1(1, arguments);
  var date = toDate$2(dirtyDate);
  var timestamp = date.getTime();
  return timestamp;
}
function getYear(dirtyDate) {
  requiredArgs$1(1, arguments);
  return toDate$2(dirtyDate).getFullYear();
}
var TIMEZONE_UNIT_PRIORITY = 10;
var Setter = /* @__PURE__ */ function() {
  function Setter2() {
    _classCallCheck(this, Setter2);
    _defineProperty(this, "priority", void 0);
    _defineProperty(this, "subPriority", 0);
  }
  _createClass(Setter2, [{
    key: "validate",
    value: function validate(_utcDate, _options) {
      return true;
    }
  }]);
  return Setter2;
}();
var ValueSetter = /* @__PURE__ */ function(_Setter) {
  _inherits(ValueSetter2, _Setter);
  var _super = _createSuper(ValueSetter2);
  function ValueSetter2(value, validateValue, setValue, priority, subPriority) {
    var _this;
    _classCallCheck(this, ValueSetter2);
    _this = _super.call(this);
    _this.value = value;
    _this.validateValue = validateValue;
    _this.setValue = setValue;
    _this.priority = priority;
    if (subPriority) {
      _this.subPriority = subPriority;
    }
    return _this;
  }
  _createClass(ValueSetter2, [{
    key: "validate",
    value: function validate(utcDate, options) {
      return this.validateValue(utcDate, this.value, options);
    }
  }, {
    key: "set",
    value: function set2(utcDate, flags, options) {
      return this.setValue(utcDate, flags, this.value, options);
    }
  }]);
  return ValueSetter2;
}(Setter);
var DateToSystemTimezoneSetter = /* @__PURE__ */ function(_Setter2) {
  _inherits(DateToSystemTimezoneSetter2, _Setter2);
  var _super2 = _createSuper(DateToSystemTimezoneSetter2);
  function DateToSystemTimezoneSetter2() {
    var _this2;
    _classCallCheck(this, DateToSystemTimezoneSetter2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this2 = _super2.call.apply(_super2, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this2), "priority", TIMEZONE_UNIT_PRIORITY);
    _defineProperty(_assertThisInitialized(_this2), "subPriority", -1);
    return _this2;
  }
  _createClass(DateToSystemTimezoneSetter2, [{
    key: "set",
    value: function set2(date, flags) {
      if (flags.timestampIsSet) {
        return date;
      }
      var convertedDate = /* @__PURE__ */ new Date(0);
      convertedDate.setFullYear(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
      convertedDate.setHours(date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds(), date.getUTCMilliseconds());
      return convertedDate;
    }
  }]);
  return DateToSystemTimezoneSetter2;
}(Setter);
var Parser = /* @__PURE__ */ function() {
  function Parser2() {
    _classCallCheck(this, Parser2);
    _defineProperty(this, "incompatibleTokens", void 0);
    _defineProperty(this, "priority", void 0);
    _defineProperty(this, "subPriority", void 0);
  }
  _createClass(Parser2, [{
    key: "run",
    value: function run(dateString, token, match2, options) {
      var result = this.parse(dateString, token, match2, options);
      if (!result) {
        return null;
      }
      return {
        setter: new ValueSetter(result.value, this.validate, this.set, this.priority, this.subPriority),
        rest: result.rest
      };
    }
  }, {
    key: "validate",
    value: function validate(_utcDate, _value, _options) {
      return true;
    }
  }]);
  return Parser2;
}();
var EraParser = /* @__PURE__ */ function(_Parser) {
  _inherits(EraParser2, _Parser);
  var _super = _createSuper(EraParser2);
  function EraParser2() {
    var _this;
    _classCallCheck(this, EraParser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "priority", 140);
    _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", ["R", "u", "t", "T"]);
    return _this;
  }
  _createClass(EraParser2, [{
    key: "parse",
    value: function parse2(dateString, token, match2) {
      switch (token) {
        case "G":
        case "GG":
        case "GGG":
          return match2.era(dateString, {
            width: "abbreviated"
          }) || match2.era(dateString, {
            width: "narrow"
          });
        case "GGGGG":
          return match2.era(dateString, {
            width: "narrow"
          });
        case "GGGG":
        default:
          return match2.era(dateString, {
            width: "wide"
          }) || match2.era(dateString, {
            width: "abbreviated"
          }) || match2.era(dateString, {
            width: "narrow"
          });
      }
    }
  }, {
    key: "set",
    value: function set2(date, flags, value) {
      flags.era = value;
      date.setUTCFullYear(value, 0, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    }
  }]);
  return EraParser2;
}(Parser);
var numericPatterns = {
  month: /^(1[0-2]|0?\d)/,
  // 0 to 12
  date: /^(3[0-1]|[0-2]?\d)/,
  // 0 to 31
  dayOfYear: /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,
  // 0 to 366
  week: /^(5[0-3]|[0-4]?\d)/,
  // 0 to 53
  hour23h: /^(2[0-3]|[0-1]?\d)/,
  // 0 to 23
  hour24h: /^(2[0-4]|[0-1]?\d)/,
  // 0 to 24
  hour11h: /^(1[0-1]|0?\d)/,
  // 0 to 11
  hour12h: /^(1[0-2]|0?\d)/,
  // 0 to 12
  minute: /^[0-5]?\d/,
  // 0 to 59
  second: /^[0-5]?\d/,
  // 0 to 59
  singleDigit: /^\d/,
  // 0 to 9
  twoDigits: /^\d{1,2}/,
  // 0 to 99
  threeDigits: /^\d{1,3}/,
  // 0 to 999
  fourDigits: /^\d{1,4}/,
  // 0 to 9999
  anyDigitsSigned: /^-?\d+/,
  singleDigitSigned: /^-?\d/,
  // 0 to 9, -0 to -9
  twoDigitsSigned: /^-?\d{1,2}/,
  // 0 to 99, -0 to -99
  threeDigitsSigned: /^-?\d{1,3}/,
  // 0 to 999, -0 to -999
  fourDigitsSigned: /^-?\d{1,4}/
  // 0 to 9999, -0 to -9999
};
var timezonePatterns = {
  basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
  basic: /^([+-])(\d{2})(\d{2})|Z/,
  basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
  extended: /^([+-])(\d{2}):(\d{2})|Z/,
  extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/
};
function mapValue(parseFnResult, mapFn) {
  if (!parseFnResult) {
    return parseFnResult;
  }
  return {
    value: mapFn(parseFnResult.value),
    rest: parseFnResult.rest
  };
}
function parseNumericPattern(pattern, dateString) {
  var matchResult = dateString.match(pattern);
  if (!matchResult) {
    return null;
  }
  return {
    value: parseInt(matchResult[0], 10),
    rest: dateString.slice(matchResult[0].length)
  };
}
function parseTimezonePattern(pattern, dateString) {
  var matchResult = dateString.match(pattern);
  if (!matchResult) {
    return null;
  }
  if (matchResult[0] === "Z") {
    return {
      value: 0,
      rest: dateString.slice(1)
    };
  }
  var sign = matchResult[1] === "+" ? 1 : -1;
  var hours = matchResult[2] ? parseInt(matchResult[2], 10) : 0;
  var minutes = matchResult[3] ? parseInt(matchResult[3], 10) : 0;
  var seconds = matchResult[5] ? parseInt(matchResult[5], 10) : 0;
  return {
    value: sign * (hours * millisecondsInHour + minutes * millisecondsInMinute + seconds * millisecondsInSecond),
    rest: dateString.slice(matchResult[0].length)
  };
}
function parseAnyDigitsSigned(dateString) {
  return parseNumericPattern(numericPatterns.anyDigitsSigned, dateString);
}
function parseNDigits(n, dateString) {
  switch (n) {
    case 1:
      return parseNumericPattern(numericPatterns.singleDigit, dateString);
    case 2:
      return parseNumericPattern(numericPatterns.twoDigits, dateString);
    case 3:
      return parseNumericPattern(numericPatterns.threeDigits, dateString);
    case 4:
      return parseNumericPattern(numericPatterns.fourDigits, dateString);
    default:
      return parseNumericPattern(new RegExp("^\\d{1," + n + "}"), dateString);
  }
}
function parseNDigitsSigned(n, dateString) {
  switch (n) {
    case 1:
      return parseNumericPattern(numericPatterns.singleDigitSigned, dateString);
    case 2:
      return parseNumericPattern(numericPatterns.twoDigitsSigned, dateString);
    case 3:
      return parseNumericPattern(numericPatterns.threeDigitsSigned, dateString);
    case 4:
      return parseNumericPattern(numericPatterns.fourDigitsSigned, dateString);
    default:
      return parseNumericPattern(new RegExp("^-?\\d{1," + n + "}"), dateString);
  }
}
function dayPeriodEnumToHours(dayPeriod) {
  switch (dayPeriod) {
    case "morning":
      return 4;
    case "evening":
      return 17;
    case "pm":
    case "noon":
    case "afternoon":
      return 12;
    case "am":
    case "midnight":
    case "night":
    default:
      return 0;
  }
}
function normalizeTwoDigitYear(twoDigitYear, currentYear) {
  var isCommonEra = currentYear > 0;
  var absCurrentYear = isCommonEra ? currentYear : 1 - currentYear;
  var result;
  if (absCurrentYear <= 50) {
    result = twoDigitYear || 100;
  } else {
    var rangeEnd = absCurrentYear + 50;
    var rangeEndCentury = Math.floor(rangeEnd / 100) * 100;
    var isPreviousCentury = twoDigitYear >= rangeEnd % 100;
    result = twoDigitYear + rangeEndCentury - (isPreviousCentury ? 100 : 0);
  }
  return isCommonEra ? result : 1 - result;
}
function isLeapYearIndex$1(year) {
  return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
}
var YearParser = /* @__PURE__ */ function(_Parser) {
  _inherits(YearParser2, _Parser);
  var _super = _createSuper(YearParser2);
  function YearParser2() {
    var _this;
    _classCallCheck(this, YearParser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "priority", 130);
    _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", ["Y", "R", "u", "w", "I", "i", "e", "c", "t", "T"]);
    return _this;
  }
  _createClass(YearParser2, [{
    key: "parse",
    value: function parse2(dateString, token, match2) {
      var valueCallback3 = function valueCallback4(year) {
        return {
          year,
          isTwoDigitYear: token === "yy"
        };
      };
      switch (token) {
        case "y":
          return mapValue(parseNDigits(4, dateString), valueCallback3);
        case "yo":
          return mapValue(match2.ordinalNumber(dateString, {
            unit: "year"
          }), valueCallback3);
        default:
          return mapValue(parseNDigits(token.length, dateString), valueCallback3);
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value.isTwoDigitYear || value.year > 0;
    }
  }, {
    key: "set",
    value: function set2(date, flags, value) {
      var currentYear = date.getUTCFullYear();
      if (value.isTwoDigitYear) {
        var normalizedTwoDigitYear = normalizeTwoDigitYear(value.year, currentYear);
        date.setUTCFullYear(normalizedTwoDigitYear, 0, 1);
        date.setUTCHours(0, 0, 0, 0);
        return date;
      }
      var year = !("era" in flags) || flags.era === 1 ? value.year : 1 - value.year;
      date.setUTCFullYear(year, 0, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    }
  }]);
  return YearParser2;
}(Parser);
var LocalWeekYearParser = /* @__PURE__ */ function(_Parser) {
  _inherits(LocalWeekYearParser2, _Parser);
  var _super = _createSuper(LocalWeekYearParser2);
  function LocalWeekYearParser2() {
    var _this;
    _classCallCheck(this, LocalWeekYearParser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "priority", 130);
    _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", ["y", "R", "u", "Q", "q", "M", "L", "I", "d", "D", "i", "t", "T"]);
    return _this;
  }
  _createClass(LocalWeekYearParser2, [{
    key: "parse",
    value: function parse2(dateString, token, match2) {
      var valueCallback3 = function valueCallback4(year) {
        return {
          year,
          isTwoDigitYear: token === "YY"
        };
      };
      switch (token) {
        case "Y":
          return mapValue(parseNDigits(4, dateString), valueCallback3);
        case "Yo":
          return mapValue(match2.ordinalNumber(dateString, {
            unit: "year"
          }), valueCallback3);
        default:
          return mapValue(parseNDigits(token.length, dateString), valueCallback3);
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value.isTwoDigitYear || value.year > 0;
    }
  }, {
    key: "set",
    value: function set2(date, flags, value, options) {
      var currentYear = getUTCWeekYear$1(date, options);
      if (value.isTwoDigitYear) {
        var normalizedTwoDigitYear = normalizeTwoDigitYear(value.year, currentYear);
        date.setUTCFullYear(normalizedTwoDigitYear, 0, options.firstWeekContainsDate);
        date.setUTCHours(0, 0, 0, 0);
        return startOfUTCWeek$1(date, options);
      }
      var year = !("era" in flags) || flags.era === 1 ? value.year : 1 - value.year;
      date.setUTCFullYear(year, 0, options.firstWeekContainsDate);
      date.setUTCHours(0, 0, 0, 0);
      return startOfUTCWeek$1(date, options);
    }
  }]);
  return LocalWeekYearParser2;
}(Parser);
var ISOWeekYearParser = /* @__PURE__ */ function(_Parser) {
  _inherits(ISOWeekYearParser2, _Parser);
  var _super = _createSuper(ISOWeekYearParser2);
  function ISOWeekYearParser2() {
    var _this;
    _classCallCheck(this, ISOWeekYearParser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "priority", 130);
    _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", ["G", "y", "Y", "u", "Q", "q", "M", "L", "w", "d", "D", "e", "c", "t", "T"]);
    return _this;
  }
  _createClass(ISOWeekYearParser2, [{
    key: "parse",
    value: function parse2(dateString, token) {
      if (token === "R") {
        return parseNDigitsSigned(4, dateString);
      }
      return parseNDigitsSigned(token.length, dateString);
    }
  }, {
    key: "set",
    value: function set2(_date, _flags, value) {
      var firstWeekOfYear = /* @__PURE__ */ new Date(0);
      firstWeekOfYear.setUTCFullYear(value, 0, 4);
      firstWeekOfYear.setUTCHours(0, 0, 0, 0);
      return startOfUTCISOWeek$1(firstWeekOfYear);
    }
  }]);
  return ISOWeekYearParser2;
}(Parser);
var ExtendedYearParser = /* @__PURE__ */ function(_Parser) {
  _inherits(ExtendedYearParser2, _Parser);
  var _super = _createSuper(ExtendedYearParser2);
  function ExtendedYearParser2() {
    var _this;
    _classCallCheck(this, ExtendedYearParser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "priority", 130);
    _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", ["G", "y", "Y", "R", "w", "I", "i", "e", "c", "t", "T"]);
    return _this;
  }
  _createClass(ExtendedYearParser2, [{
    key: "parse",
    value: function parse2(dateString, token) {
      if (token === "u") {
        return parseNDigitsSigned(4, dateString);
      }
      return parseNDigitsSigned(token.length, dateString);
    }
  }, {
    key: "set",
    value: function set2(date, _flags, value) {
      date.setUTCFullYear(value, 0, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    }
  }]);
  return ExtendedYearParser2;
}(Parser);
var QuarterParser = /* @__PURE__ */ function(_Parser) {
  _inherits(QuarterParser2, _Parser);
  var _super = _createSuper(QuarterParser2);
  function QuarterParser2() {
    var _this;
    _classCallCheck(this, QuarterParser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "priority", 120);
    _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", ["Y", "R", "q", "M", "L", "w", "I", "d", "D", "i", "e", "c", "t", "T"]);
    return _this;
  }
  _createClass(QuarterParser2, [{
    key: "parse",
    value: function parse2(dateString, token, match2) {
      switch (token) {
        case "Q":
        case "QQ":
          return parseNDigits(token.length, dateString);
        case "Qo":
          return match2.ordinalNumber(dateString, {
            unit: "quarter"
          });
        case "QQQ":
          return match2.quarter(dateString, {
            width: "abbreviated",
            context: "formatting"
          }) || match2.quarter(dateString, {
            width: "narrow",
            context: "formatting"
          });
        case "QQQQQ":
          return match2.quarter(dateString, {
            width: "narrow",
            context: "formatting"
          });
        case "QQQQ":
        default:
          return match2.quarter(dateString, {
            width: "wide",
            context: "formatting"
          }) || match2.quarter(dateString, {
            width: "abbreviated",
            context: "formatting"
          }) || match2.quarter(dateString, {
            width: "narrow",
            context: "formatting"
          });
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value >= 1 && value <= 4;
    }
  }, {
    key: "set",
    value: function set2(date, _flags, value) {
      date.setUTCMonth((value - 1) * 3, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    }
  }]);
  return QuarterParser2;
}(Parser);
var StandAloneQuarterParser = /* @__PURE__ */ function(_Parser) {
  _inherits(StandAloneQuarterParser2, _Parser);
  var _super = _createSuper(StandAloneQuarterParser2);
  function StandAloneQuarterParser2() {
    var _this;
    _classCallCheck(this, StandAloneQuarterParser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "priority", 120);
    _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", ["Y", "R", "Q", "M", "L", "w", "I", "d", "D", "i", "e", "c", "t", "T"]);
    return _this;
  }
  _createClass(StandAloneQuarterParser2, [{
    key: "parse",
    value: function parse2(dateString, token, match2) {
      switch (token) {
        case "q":
        case "qq":
          return parseNDigits(token.length, dateString);
        case "qo":
          return match2.ordinalNumber(dateString, {
            unit: "quarter"
          });
        case "qqq":
          return match2.quarter(dateString, {
            width: "abbreviated",
            context: "standalone"
          }) || match2.quarter(dateString, {
            width: "narrow",
            context: "standalone"
          });
        case "qqqqq":
          return match2.quarter(dateString, {
            width: "narrow",
            context: "standalone"
          });
        case "qqqq":
        default:
          return match2.quarter(dateString, {
            width: "wide",
            context: "standalone"
          }) || match2.quarter(dateString, {
            width: "abbreviated",
            context: "standalone"
          }) || match2.quarter(dateString, {
            width: "narrow",
            context: "standalone"
          });
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value >= 1 && value <= 4;
    }
  }, {
    key: "set",
    value: function set2(date, _flags, value) {
      date.setUTCMonth((value - 1) * 3, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    }
  }]);
  return StandAloneQuarterParser2;
}(Parser);
var MonthParser = /* @__PURE__ */ function(_Parser) {
  _inherits(MonthParser2, _Parser);
  var _super = _createSuper(MonthParser2);
  function MonthParser2() {
    var _this;
    _classCallCheck(this, MonthParser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", ["Y", "R", "q", "Q", "L", "w", "I", "D", "i", "e", "c", "t", "T"]);
    _defineProperty(_assertThisInitialized(_this), "priority", 110);
    return _this;
  }
  _createClass(MonthParser2, [{
    key: "parse",
    value: function parse2(dateString, token, match2) {
      var valueCallback3 = function valueCallback4(value) {
        return value - 1;
      };
      switch (token) {
        case "M":
          return mapValue(parseNumericPattern(numericPatterns.month, dateString), valueCallback3);
        case "MM":
          return mapValue(parseNDigits(2, dateString), valueCallback3);
        case "Mo":
          return mapValue(match2.ordinalNumber(dateString, {
            unit: "month"
          }), valueCallback3);
        case "MMM":
          return match2.month(dateString, {
            width: "abbreviated",
            context: "formatting"
          }) || match2.month(dateString, {
            width: "narrow",
            context: "formatting"
          });
        case "MMMMM":
          return match2.month(dateString, {
            width: "narrow",
            context: "formatting"
          });
        case "MMMM":
        default:
          return match2.month(dateString, {
            width: "wide",
            context: "formatting"
          }) || match2.month(dateString, {
            width: "abbreviated",
            context: "formatting"
          }) || match2.month(dateString, {
            width: "narrow",
            context: "formatting"
          });
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value >= 0 && value <= 11;
    }
  }, {
    key: "set",
    value: function set2(date, _flags, value) {
      date.setUTCMonth(value, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    }
  }]);
  return MonthParser2;
}(Parser);
var StandAloneMonthParser = /* @__PURE__ */ function(_Parser) {
  _inherits(StandAloneMonthParser2, _Parser);
  var _super = _createSuper(StandAloneMonthParser2);
  function StandAloneMonthParser2() {
    var _this;
    _classCallCheck(this, StandAloneMonthParser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "priority", 110);
    _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", ["Y", "R", "q", "Q", "M", "w", "I", "D", "i", "e", "c", "t", "T"]);
    return _this;
  }
  _createClass(StandAloneMonthParser2, [{
    key: "parse",
    value: function parse2(dateString, token, match2) {
      var valueCallback3 = function valueCallback4(value) {
        return value - 1;
      };
      switch (token) {
        case "L":
          return mapValue(parseNumericPattern(numericPatterns.month, dateString), valueCallback3);
        case "LL":
          return mapValue(parseNDigits(2, dateString), valueCallback3);
        case "Lo":
          return mapValue(match2.ordinalNumber(dateString, {
            unit: "month"
          }), valueCallback3);
        case "LLL":
          return match2.month(dateString, {
            width: "abbreviated",
            context: "standalone"
          }) || match2.month(dateString, {
            width: "narrow",
            context: "standalone"
          });
        case "LLLLL":
          return match2.month(dateString, {
            width: "narrow",
            context: "standalone"
          });
        case "LLLL":
        default:
          return match2.month(dateString, {
            width: "wide",
            context: "standalone"
          }) || match2.month(dateString, {
            width: "abbreviated",
            context: "standalone"
          }) || match2.month(dateString, {
            width: "narrow",
            context: "standalone"
          });
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value >= 0 && value <= 11;
    }
  }, {
    key: "set",
    value: function set2(date, _flags, value) {
      date.setUTCMonth(value, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    }
  }]);
  return StandAloneMonthParser2;
}(Parser);
function setUTCWeek(dirtyDate, dirtyWeek, options) {
  requiredArgs$1(2, arguments);
  var date = toDate$2(dirtyDate);
  var week = toInteger$2(dirtyWeek);
  var diff = getUTCWeek$1(date, options) - week;
  date.setUTCDate(date.getUTCDate() - diff * 7);
  return date;
}
var LocalWeekParser = /* @__PURE__ */ function(_Parser) {
  _inherits(LocalWeekParser2, _Parser);
  var _super = _createSuper(LocalWeekParser2);
  function LocalWeekParser2() {
    var _this;
    _classCallCheck(this, LocalWeekParser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "priority", 100);
    _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "i", "t", "T"]);
    return _this;
  }
  _createClass(LocalWeekParser2, [{
    key: "parse",
    value: function parse2(dateString, token, match2) {
      switch (token) {
        case "w":
          return parseNumericPattern(numericPatterns.week, dateString);
        case "wo":
          return match2.ordinalNumber(dateString, {
            unit: "week"
          });
        default:
          return parseNDigits(token.length, dateString);
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value >= 1 && value <= 53;
    }
  }, {
    key: "set",
    value: function set2(date, _flags, value, options) {
      return startOfUTCWeek$1(setUTCWeek(date, value, options), options);
    }
  }]);
  return LocalWeekParser2;
}(Parser);
function setUTCISOWeek(dirtyDate, dirtyISOWeek) {
  requiredArgs$1(2, arguments);
  var date = toDate$2(dirtyDate);
  var isoWeek = toInteger$2(dirtyISOWeek);
  var diff = getUTCISOWeek$1(date) - isoWeek;
  date.setUTCDate(date.getUTCDate() - diff * 7);
  return date;
}
var ISOWeekParser = /* @__PURE__ */ function(_Parser) {
  _inherits(ISOWeekParser2, _Parser);
  var _super = _createSuper(ISOWeekParser2);
  function ISOWeekParser2() {
    var _this;
    _classCallCheck(this, ISOWeekParser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "priority", 100);
    _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", ["y", "Y", "u", "q", "Q", "M", "L", "w", "d", "D", "e", "c", "t", "T"]);
    return _this;
  }
  _createClass(ISOWeekParser2, [{
    key: "parse",
    value: function parse2(dateString, token, match2) {
      switch (token) {
        case "I":
          return parseNumericPattern(numericPatterns.week, dateString);
        case "Io":
          return match2.ordinalNumber(dateString, {
            unit: "week"
          });
        default:
          return parseNDigits(token.length, dateString);
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value >= 1 && value <= 53;
    }
  }, {
    key: "set",
    value: function set2(date, _flags, value) {
      return startOfUTCISOWeek$1(setUTCISOWeek(date, value));
    }
  }]);
  return ISOWeekParser2;
}(Parser);
var DAYS_IN_MONTH$1 = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var DAYS_IN_MONTH_LEAP_YEAR$1 = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var DateParser = /* @__PURE__ */ function(_Parser) {
  _inherits(DateParser2, _Parser);
  var _super = _createSuper(DateParser2);
  function DateParser2() {
    var _this;
    _classCallCheck(this, DateParser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "priority", 90);
    _defineProperty(_assertThisInitialized(_this), "subPriority", 1);
    _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", ["Y", "R", "q", "Q", "w", "I", "D", "i", "e", "c", "t", "T"]);
    return _this;
  }
  _createClass(DateParser2, [{
    key: "parse",
    value: function parse2(dateString, token, match2) {
      switch (token) {
        case "d":
          return parseNumericPattern(numericPatterns.date, dateString);
        case "do":
          return match2.ordinalNumber(dateString, {
            unit: "date"
          });
        default:
          return parseNDigits(token.length, dateString);
      }
    }
  }, {
    key: "validate",
    value: function validate(date, value) {
      var year = date.getUTCFullYear();
      var isLeapYear = isLeapYearIndex$1(year);
      var month = date.getUTCMonth();
      if (isLeapYear) {
        return value >= 1 && value <= DAYS_IN_MONTH_LEAP_YEAR$1[month];
      } else {
        return value >= 1 && value <= DAYS_IN_MONTH$1[month];
      }
    }
  }, {
    key: "set",
    value: function set2(date, _flags, value) {
      date.setUTCDate(value);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    }
  }]);
  return DateParser2;
}(Parser);
var DayOfYearParser = /* @__PURE__ */ function(_Parser) {
  _inherits(DayOfYearParser2, _Parser);
  var _super = _createSuper(DayOfYearParser2);
  function DayOfYearParser2() {
    var _this;
    _classCallCheck(this, DayOfYearParser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "priority", 90);
    _defineProperty(_assertThisInitialized(_this), "subpriority", 1);
    _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", ["Y", "R", "q", "Q", "M", "L", "w", "I", "d", "E", "i", "e", "c", "t", "T"]);
    return _this;
  }
  _createClass(DayOfYearParser2, [{
    key: "parse",
    value: function parse2(dateString, token, match2) {
      switch (token) {
        case "D":
        case "DD":
          return parseNumericPattern(numericPatterns.dayOfYear, dateString);
        case "Do":
          return match2.ordinalNumber(dateString, {
            unit: "date"
          });
        default:
          return parseNDigits(token.length, dateString);
      }
    }
  }, {
    key: "validate",
    value: function validate(date, value) {
      var year = date.getUTCFullYear();
      var isLeapYear = isLeapYearIndex$1(year);
      if (isLeapYear) {
        return value >= 1 && value <= 366;
      } else {
        return value >= 1 && value <= 365;
      }
    }
  }, {
    key: "set",
    value: function set2(date, _flags, value) {
      date.setUTCMonth(0, value);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    }
  }]);
  return DayOfYearParser2;
}(Parser);
function setUTCDay(dirtyDate, dirtyDay, options) {
  var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
  requiredArgs$1(2, arguments);
  var defaultOptions2 = getDefaultOptions$1();
  var weekStartsOn = toInteger$2((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions2.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions2.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0);
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  }
  var date = toDate$2(dirtyDate);
  var day = toInteger$2(dirtyDay);
  var currentDay = date.getUTCDay();
  var remainder = day % 7;
  var dayIndex = (remainder + 7) % 7;
  var diff = (dayIndex < weekStartsOn ? 7 : 0) + day - currentDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
}
var DayParser = /* @__PURE__ */ function(_Parser) {
  _inherits(DayParser2, _Parser);
  var _super = _createSuper(DayParser2);
  function DayParser2() {
    var _this;
    _classCallCheck(this, DayParser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "priority", 90);
    _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", ["D", "i", "e", "c", "t", "T"]);
    return _this;
  }
  _createClass(DayParser2, [{
    key: "parse",
    value: function parse2(dateString, token, match2) {
      switch (token) {
        case "E":
        case "EE":
        case "EEE":
          return match2.day(dateString, {
            width: "abbreviated",
            context: "formatting"
          }) || match2.day(dateString, {
            width: "short",
            context: "formatting"
          }) || match2.day(dateString, {
            width: "narrow",
            context: "formatting"
          });
        case "EEEEE":
          return match2.day(dateString, {
            width: "narrow",
            context: "formatting"
          });
        case "EEEEEE":
          return match2.day(dateString, {
            width: "short",
            context: "formatting"
          }) || match2.day(dateString, {
            width: "narrow",
            context: "formatting"
          });
        case "EEEE":
        default:
          return match2.day(dateString, {
            width: "wide",
            context: "formatting"
          }) || match2.day(dateString, {
            width: "abbreviated",
            context: "formatting"
          }) || match2.day(dateString, {
            width: "short",
            context: "formatting"
          }) || match2.day(dateString, {
            width: "narrow",
            context: "formatting"
          });
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value >= 0 && value <= 6;
    }
  }, {
    key: "set",
    value: function set2(date, _flags, value, options) {
      date = setUTCDay(date, value, options);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    }
  }]);
  return DayParser2;
}(Parser);
var LocalDayParser = /* @__PURE__ */ function(_Parser) {
  _inherits(LocalDayParser2, _Parser);
  var _super = _createSuper(LocalDayParser2);
  function LocalDayParser2() {
    var _this;
    _classCallCheck(this, LocalDayParser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "priority", 90);
    _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "E", "i", "c", "t", "T"]);
    return _this;
  }
  _createClass(LocalDayParser2, [{
    key: "parse",
    value: function parse2(dateString, token, match2, options) {
      var valueCallback3 = function valueCallback4(value) {
        var wholeWeekDays = Math.floor((value - 1) / 7) * 7;
        return (value + options.weekStartsOn + 6) % 7 + wholeWeekDays;
      };
      switch (token) {
        case "e":
        case "ee":
          return mapValue(parseNDigits(token.length, dateString), valueCallback3);
        case "eo":
          return mapValue(match2.ordinalNumber(dateString, {
            unit: "day"
          }), valueCallback3);
        case "eee":
          return match2.day(dateString, {
            width: "abbreviated",
            context: "formatting"
          }) || match2.day(dateString, {
            width: "short",
            context: "formatting"
          }) || match2.day(dateString, {
            width: "narrow",
            context: "formatting"
          });
        case "eeeee":
          return match2.day(dateString, {
            width: "narrow",
            context: "formatting"
          });
        case "eeeeee":
          return match2.day(dateString, {
            width: "short",
            context: "formatting"
          }) || match2.day(dateString, {
            width: "narrow",
            context: "formatting"
          });
        case "eeee":
        default:
          return match2.day(dateString, {
            width: "wide",
            context: "formatting"
          }) || match2.day(dateString, {
            width: "abbreviated",
            context: "formatting"
          }) || match2.day(dateString, {
            width: "short",
            context: "formatting"
          }) || match2.day(dateString, {
            width: "narrow",
            context: "formatting"
          });
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value >= 0 && value <= 6;
    }
  }, {
    key: "set",
    value: function set2(date, _flags, value, options) {
      date = setUTCDay(date, value, options);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    }
  }]);
  return LocalDayParser2;
}(Parser);
var StandAloneLocalDayParser = /* @__PURE__ */ function(_Parser) {
  _inherits(StandAloneLocalDayParser2, _Parser);
  var _super = _createSuper(StandAloneLocalDayParser2);
  function StandAloneLocalDayParser2() {
    var _this;
    _classCallCheck(this, StandAloneLocalDayParser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "priority", 90);
    _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "E", "i", "e", "t", "T"]);
    return _this;
  }
  _createClass(StandAloneLocalDayParser2, [{
    key: "parse",
    value: function parse2(dateString, token, match2, options) {
      var valueCallback3 = function valueCallback4(value) {
        var wholeWeekDays = Math.floor((value - 1) / 7) * 7;
        return (value + options.weekStartsOn + 6) % 7 + wholeWeekDays;
      };
      switch (token) {
        case "c":
        case "cc":
          return mapValue(parseNDigits(token.length, dateString), valueCallback3);
        case "co":
          return mapValue(match2.ordinalNumber(dateString, {
            unit: "day"
          }), valueCallback3);
        case "ccc":
          return match2.day(dateString, {
            width: "abbreviated",
            context: "standalone"
          }) || match2.day(dateString, {
            width: "short",
            context: "standalone"
          }) || match2.day(dateString, {
            width: "narrow",
            context: "standalone"
          });
        case "ccccc":
          return match2.day(dateString, {
            width: "narrow",
            context: "standalone"
          });
        case "cccccc":
          return match2.day(dateString, {
            width: "short",
            context: "standalone"
          }) || match2.day(dateString, {
            width: "narrow",
            context: "standalone"
          });
        case "cccc":
        default:
          return match2.day(dateString, {
            width: "wide",
            context: "standalone"
          }) || match2.day(dateString, {
            width: "abbreviated",
            context: "standalone"
          }) || match2.day(dateString, {
            width: "short",
            context: "standalone"
          }) || match2.day(dateString, {
            width: "narrow",
            context: "standalone"
          });
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value >= 0 && value <= 6;
    }
  }, {
    key: "set",
    value: function set2(date, _flags, value, options) {
      date = setUTCDay(date, value, options);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    }
  }]);
  return StandAloneLocalDayParser2;
}(Parser);
function setUTCISODay(dirtyDate, dirtyDay) {
  requiredArgs$1(2, arguments);
  var day = toInteger$2(dirtyDay);
  if (day % 7 === 0) {
    day = day - 7;
  }
  var weekStartsOn = 1;
  var date = toDate$2(dirtyDate);
  var currentDay = date.getUTCDay();
  var remainder = day % 7;
  var dayIndex = (remainder + 7) % 7;
  var diff = (dayIndex < weekStartsOn ? 7 : 0) + day - currentDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
}
var ISODayParser = /* @__PURE__ */ function(_Parser) {
  _inherits(ISODayParser2, _Parser);
  var _super = _createSuper(ISODayParser2);
  function ISODayParser2() {
    var _this;
    _classCallCheck(this, ISODayParser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "priority", 90);
    _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", ["y", "Y", "u", "q", "Q", "M", "L", "w", "d", "D", "E", "e", "c", "t", "T"]);
    return _this;
  }
  _createClass(ISODayParser2, [{
    key: "parse",
    value: function parse2(dateString, token, match2) {
      var valueCallback3 = function valueCallback4(value) {
        if (value === 0) {
          return 7;
        }
        return value;
      };
      switch (token) {
        case "i":
        case "ii":
          return parseNDigits(token.length, dateString);
        case "io":
          return match2.ordinalNumber(dateString, {
            unit: "day"
          });
        case "iii":
          return mapValue(match2.day(dateString, {
            width: "abbreviated",
            context: "formatting"
          }) || match2.day(dateString, {
            width: "short",
            context: "formatting"
          }) || match2.day(dateString, {
            width: "narrow",
            context: "formatting"
          }), valueCallback3);
        case "iiiii":
          return mapValue(match2.day(dateString, {
            width: "narrow",
            context: "formatting"
          }), valueCallback3);
        case "iiiiii":
          return mapValue(match2.day(dateString, {
            width: "short",
            context: "formatting"
          }) || match2.day(dateString, {
            width: "narrow",
            context: "formatting"
          }), valueCallback3);
        case "iiii":
        default:
          return mapValue(match2.day(dateString, {
            width: "wide",
            context: "formatting"
          }) || match2.day(dateString, {
            width: "abbreviated",
            context: "formatting"
          }) || match2.day(dateString, {
            width: "short",
            context: "formatting"
          }) || match2.day(dateString, {
            width: "narrow",
            context: "formatting"
          }), valueCallback3);
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value >= 1 && value <= 7;
    }
  }, {
    key: "set",
    value: function set2(date, _flags, value) {
      date = setUTCISODay(date, value);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    }
  }]);
  return ISODayParser2;
}(Parser);
var AMPMParser = /* @__PURE__ */ function(_Parser) {
  _inherits(AMPMParser2, _Parser);
  var _super = _createSuper(AMPMParser2);
  function AMPMParser2() {
    var _this;
    _classCallCheck(this, AMPMParser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "priority", 80);
    _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", ["b", "B", "H", "k", "t", "T"]);
    return _this;
  }
  _createClass(AMPMParser2, [{
    key: "parse",
    value: function parse2(dateString, token, match2) {
      switch (token) {
        case "a":
        case "aa":
        case "aaa":
          return match2.dayPeriod(dateString, {
            width: "abbreviated",
            context: "formatting"
          }) || match2.dayPeriod(dateString, {
            width: "narrow",
            context: "formatting"
          });
        case "aaaaa":
          return match2.dayPeriod(dateString, {
            width: "narrow",
            context: "formatting"
          });
        case "aaaa":
        default:
          return match2.dayPeriod(dateString, {
            width: "wide",
            context: "formatting"
          }) || match2.dayPeriod(dateString, {
            width: "abbreviated",
            context: "formatting"
          }) || match2.dayPeriod(dateString, {
            width: "narrow",
            context: "formatting"
          });
      }
    }
  }, {
    key: "set",
    value: function set2(date, _flags, value) {
      date.setUTCHours(dayPeriodEnumToHours(value), 0, 0, 0);
      return date;
    }
  }]);
  return AMPMParser2;
}(Parser);
var AMPMMidnightParser = /* @__PURE__ */ function(_Parser) {
  _inherits(AMPMMidnightParser2, _Parser);
  var _super = _createSuper(AMPMMidnightParser2);
  function AMPMMidnightParser2() {
    var _this;
    _classCallCheck(this, AMPMMidnightParser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "priority", 80);
    _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", ["a", "B", "H", "k", "t", "T"]);
    return _this;
  }
  _createClass(AMPMMidnightParser2, [{
    key: "parse",
    value: function parse2(dateString, token, match2) {
      switch (token) {
        case "b":
        case "bb":
        case "bbb":
          return match2.dayPeriod(dateString, {
            width: "abbreviated",
            context: "formatting"
          }) || match2.dayPeriod(dateString, {
            width: "narrow",
            context: "formatting"
          });
        case "bbbbb":
          return match2.dayPeriod(dateString, {
            width: "narrow",
            context: "formatting"
          });
        case "bbbb":
        default:
          return match2.dayPeriod(dateString, {
            width: "wide",
            context: "formatting"
          }) || match2.dayPeriod(dateString, {
            width: "abbreviated",
            context: "formatting"
          }) || match2.dayPeriod(dateString, {
            width: "narrow",
            context: "formatting"
          });
      }
    }
  }, {
    key: "set",
    value: function set2(date, _flags, value) {
      date.setUTCHours(dayPeriodEnumToHours(value), 0, 0, 0);
      return date;
    }
  }]);
  return AMPMMidnightParser2;
}(Parser);
var DayPeriodParser = /* @__PURE__ */ function(_Parser) {
  _inherits(DayPeriodParser2, _Parser);
  var _super = _createSuper(DayPeriodParser2);
  function DayPeriodParser2() {
    var _this;
    _classCallCheck(this, DayPeriodParser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "priority", 80);
    _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", ["a", "b", "t", "T"]);
    return _this;
  }
  _createClass(DayPeriodParser2, [{
    key: "parse",
    value: function parse2(dateString, token, match2) {
      switch (token) {
        case "B":
        case "BB":
        case "BBB":
          return match2.dayPeriod(dateString, {
            width: "abbreviated",
            context: "formatting"
          }) || match2.dayPeriod(dateString, {
            width: "narrow",
            context: "formatting"
          });
        case "BBBBB":
          return match2.dayPeriod(dateString, {
            width: "narrow",
            context: "formatting"
          });
        case "BBBB":
        default:
          return match2.dayPeriod(dateString, {
            width: "wide",
            context: "formatting"
          }) || match2.dayPeriod(dateString, {
            width: "abbreviated",
            context: "formatting"
          }) || match2.dayPeriod(dateString, {
            width: "narrow",
            context: "formatting"
          });
      }
    }
  }, {
    key: "set",
    value: function set2(date, _flags, value) {
      date.setUTCHours(dayPeriodEnumToHours(value), 0, 0, 0);
      return date;
    }
  }]);
  return DayPeriodParser2;
}(Parser);
var Hour1to12Parser = /* @__PURE__ */ function(_Parser) {
  _inherits(Hour1to12Parser2, _Parser);
  var _super = _createSuper(Hour1to12Parser2);
  function Hour1to12Parser2() {
    var _this;
    _classCallCheck(this, Hour1to12Parser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "priority", 70);
    _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", ["H", "K", "k", "t", "T"]);
    return _this;
  }
  _createClass(Hour1to12Parser2, [{
    key: "parse",
    value: function parse2(dateString, token, match2) {
      switch (token) {
        case "h":
          return parseNumericPattern(numericPatterns.hour12h, dateString);
        case "ho":
          return match2.ordinalNumber(dateString, {
            unit: "hour"
          });
        default:
          return parseNDigits(token.length, dateString);
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value >= 1 && value <= 12;
    }
  }, {
    key: "set",
    value: function set2(date, _flags, value) {
      var isPM = date.getUTCHours() >= 12;
      if (isPM && value < 12) {
        date.setUTCHours(value + 12, 0, 0, 0);
      } else if (!isPM && value === 12) {
        date.setUTCHours(0, 0, 0, 0);
      } else {
        date.setUTCHours(value, 0, 0, 0);
      }
      return date;
    }
  }]);
  return Hour1to12Parser2;
}(Parser);
var Hour0to23Parser = /* @__PURE__ */ function(_Parser) {
  _inherits(Hour0to23Parser2, _Parser);
  var _super = _createSuper(Hour0to23Parser2);
  function Hour0to23Parser2() {
    var _this;
    _classCallCheck(this, Hour0to23Parser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "priority", 70);
    _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", ["a", "b", "h", "K", "k", "t", "T"]);
    return _this;
  }
  _createClass(Hour0to23Parser2, [{
    key: "parse",
    value: function parse2(dateString, token, match2) {
      switch (token) {
        case "H":
          return parseNumericPattern(numericPatterns.hour23h, dateString);
        case "Ho":
          return match2.ordinalNumber(dateString, {
            unit: "hour"
          });
        default:
          return parseNDigits(token.length, dateString);
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value >= 0 && value <= 23;
    }
  }, {
    key: "set",
    value: function set2(date, _flags, value) {
      date.setUTCHours(value, 0, 0, 0);
      return date;
    }
  }]);
  return Hour0to23Parser2;
}(Parser);
var Hour0To11Parser = /* @__PURE__ */ function(_Parser) {
  _inherits(Hour0To11Parser2, _Parser);
  var _super = _createSuper(Hour0To11Parser2);
  function Hour0To11Parser2() {
    var _this;
    _classCallCheck(this, Hour0To11Parser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "priority", 70);
    _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", ["h", "H", "k", "t", "T"]);
    return _this;
  }
  _createClass(Hour0To11Parser2, [{
    key: "parse",
    value: function parse2(dateString, token, match2) {
      switch (token) {
        case "K":
          return parseNumericPattern(numericPatterns.hour11h, dateString);
        case "Ko":
          return match2.ordinalNumber(dateString, {
            unit: "hour"
          });
        default:
          return parseNDigits(token.length, dateString);
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value >= 0 && value <= 11;
    }
  }, {
    key: "set",
    value: function set2(date, _flags, value) {
      var isPM = date.getUTCHours() >= 12;
      if (isPM && value < 12) {
        date.setUTCHours(value + 12, 0, 0, 0);
      } else {
        date.setUTCHours(value, 0, 0, 0);
      }
      return date;
    }
  }]);
  return Hour0To11Parser2;
}(Parser);
var Hour1To24Parser = /* @__PURE__ */ function(_Parser) {
  _inherits(Hour1To24Parser2, _Parser);
  var _super = _createSuper(Hour1To24Parser2);
  function Hour1To24Parser2() {
    var _this;
    _classCallCheck(this, Hour1To24Parser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "priority", 70);
    _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", ["a", "b", "h", "H", "K", "t", "T"]);
    return _this;
  }
  _createClass(Hour1To24Parser2, [{
    key: "parse",
    value: function parse2(dateString, token, match2) {
      switch (token) {
        case "k":
          return parseNumericPattern(numericPatterns.hour24h, dateString);
        case "ko":
          return match2.ordinalNumber(dateString, {
            unit: "hour"
          });
        default:
          return parseNDigits(token.length, dateString);
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value >= 1 && value <= 24;
    }
  }, {
    key: "set",
    value: function set2(date, _flags, value) {
      var hours = value <= 24 ? value % 24 : value;
      date.setUTCHours(hours, 0, 0, 0);
      return date;
    }
  }]);
  return Hour1To24Parser2;
}(Parser);
var MinuteParser = /* @__PURE__ */ function(_Parser) {
  _inherits(MinuteParser2, _Parser);
  var _super = _createSuper(MinuteParser2);
  function MinuteParser2() {
    var _this;
    _classCallCheck(this, MinuteParser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "priority", 60);
    _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", ["t", "T"]);
    return _this;
  }
  _createClass(MinuteParser2, [{
    key: "parse",
    value: function parse2(dateString, token, match2) {
      switch (token) {
        case "m":
          return parseNumericPattern(numericPatterns.minute, dateString);
        case "mo":
          return match2.ordinalNumber(dateString, {
            unit: "minute"
          });
        default:
          return parseNDigits(token.length, dateString);
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value >= 0 && value <= 59;
    }
  }, {
    key: "set",
    value: function set2(date, _flags, value) {
      date.setUTCMinutes(value, 0, 0);
      return date;
    }
  }]);
  return MinuteParser2;
}(Parser);
var SecondParser = /* @__PURE__ */ function(_Parser) {
  _inherits(SecondParser2, _Parser);
  var _super = _createSuper(SecondParser2);
  function SecondParser2() {
    var _this;
    _classCallCheck(this, SecondParser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "priority", 50);
    _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", ["t", "T"]);
    return _this;
  }
  _createClass(SecondParser2, [{
    key: "parse",
    value: function parse2(dateString, token, match2) {
      switch (token) {
        case "s":
          return parseNumericPattern(numericPatterns.second, dateString);
        case "so":
          return match2.ordinalNumber(dateString, {
            unit: "second"
          });
        default:
          return parseNDigits(token.length, dateString);
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value >= 0 && value <= 59;
    }
  }, {
    key: "set",
    value: function set2(date, _flags, value) {
      date.setUTCSeconds(value, 0);
      return date;
    }
  }]);
  return SecondParser2;
}(Parser);
var FractionOfSecondParser = /* @__PURE__ */ function(_Parser) {
  _inherits(FractionOfSecondParser2, _Parser);
  var _super = _createSuper(FractionOfSecondParser2);
  function FractionOfSecondParser2() {
    var _this;
    _classCallCheck(this, FractionOfSecondParser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "priority", 30);
    _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", ["t", "T"]);
    return _this;
  }
  _createClass(FractionOfSecondParser2, [{
    key: "parse",
    value: function parse2(dateString, token) {
      var valueCallback3 = function valueCallback4(value) {
        return Math.floor(value * Math.pow(10, -token.length + 3));
      };
      return mapValue(parseNDigits(token.length, dateString), valueCallback3);
    }
  }, {
    key: "set",
    value: function set2(date, _flags, value) {
      date.setUTCMilliseconds(value);
      return date;
    }
  }]);
  return FractionOfSecondParser2;
}(Parser);
var ISOTimezoneWithZParser = /* @__PURE__ */ function(_Parser) {
  _inherits(ISOTimezoneWithZParser2, _Parser);
  var _super = _createSuper(ISOTimezoneWithZParser2);
  function ISOTimezoneWithZParser2() {
    var _this;
    _classCallCheck(this, ISOTimezoneWithZParser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "priority", 10);
    _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", ["t", "T", "x"]);
    return _this;
  }
  _createClass(ISOTimezoneWithZParser2, [{
    key: "parse",
    value: function parse2(dateString, token) {
      switch (token) {
        case "X":
          return parseTimezonePattern(timezonePatterns.basicOptionalMinutes, dateString);
        case "XX":
          return parseTimezonePattern(timezonePatterns.basic, dateString);
        case "XXXX":
          return parseTimezonePattern(timezonePatterns.basicOptionalSeconds, dateString);
        case "XXXXX":
          return parseTimezonePattern(timezonePatterns.extendedOptionalSeconds, dateString);
        case "XXX":
        default:
          return parseTimezonePattern(timezonePatterns.extended, dateString);
      }
    }
  }, {
    key: "set",
    value: function set2(date, flags, value) {
      if (flags.timestampIsSet) {
        return date;
      }
      return new Date(date.getTime() - value);
    }
  }]);
  return ISOTimezoneWithZParser2;
}(Parser);
var ISOTimezoneParser = /* @__PURE__ */ function(_Parser) {
  _inherits(ISOTimezoneParser2, _Parser);
  var _super = _createSuper(ISOTimezoneParser2);
  function ISOTimezoneParser2() {
    var _this;
    _classCallCheck(this, ISOTimezoneParser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "priority", 10);
    _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", ["t", "T", "X"]);
    return _this;
  }
  _createClass(ISOTimezoneParser2, [{
    key: "parse",
    value: function parse2(dateString, token) {
      switch (token) {
        case "x":
          return parseTimezonePattern(timezonePatterns.basicOptionalMinutes, dateString);
        case "xx":
          return parseTimezonePattern(timezonePatterns.basic, dateString);
        case "xxxx":
          return parseTimezonePattern(timezonePatterns.basicOptionalSeconds, dateString);
        case "xxxxx":
          return parseTimezonePattern(timezonePatterns.extendedOptionalSeconds, dateString);
        case "xxx":
        default:
          return parseTimezonePattern(timezonePatterns.extended, dateString);
      }
    }
  }, {
    key: "set",
    value: function set2(date, flags, value) {
      if (flags.timestampIsSet) {
        return date;
      }
      return new Date(date.getTime() - value);
    }
  }]);
  return ISOTimezoneParser2;
}(Parser);
var TimestampSecondsParser = /* @__PURE__ */ function(_Parser) {
  _inherits(TimestampSecondsParser2, _Parser);
  var _super = _createSuper(TimestampSecondsParser2);
  function TimestampSecondsParser2() {
    var _this;
    _classCallCheck(this, TimestampSecondsParser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "priority", 40);
    _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", "*");
    return _this;
  }
  _createClass(TimestampSecondsParser2, [{
    key: "parse",
    value: function parse2(dateString) {
      return parseAnyDigitsSigned(dateString);
    }
  }, {
    key: "set",
    value: function set2(_date, _flags, value) {
      return [new Date(value * 1e3), {
        timestampIsSet: true
      }];
    }
  }]);
  return TimestampSecondsParser2;
}(Parser);
var TimestampMillisecondsParser = /* @__PURE__ */ function(_Parser) {
  _inherits(TimestampMillisecondsParser2, _Parser);
  var _super = _createSuper(TimestampMillisecondsParser2);
  function TimestampMillisecondsParser2() {
    var _this;
    _classCallCheck(this, TimestampMillisecondsParser2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "priority", 20);
    _defineProperty(_assertThisInitialized(_this), "incompatibleTokens", "*");
    return _this;
  }
  _createClass(TimestampMillisecondsParser2, [{
    key: "parse",
    value: function parse2(dateString) {
      return parseAnyDigitsSigned(dateString);
    }
  }, {
    key: "set",
    value: function set2(_date, _flags, value) {
      return [new Date(value), {
        timestampIsSet: true
      }];
    }
  }]);
  return TimestampMillisecondsParser2;
}(Parser);
var parsers = {
  G: new EraParser(),
  y: new YearParser(),
  Y: new LocalWeekYearParser(),
  R: new ISOWeekYearParser(),
  u: new ExtendedYearParser(),
  Q: new QuarterParser(),
  q: new StandAloneQuarterParser(),
  M: new MonthParser(),
  L: new StandAloneMonthParser(),
  w: new LocalWeekParser(),
  I: new ISOWeekParser(),
  d: new DateParser(),
  D: new DayOfYearParser(),
  E: new DayParser(),
  e: new LocalDayParser(),
  c: new StandAloneLocalDayParser(),
  i: new ISODayParser(),
  a: new AMPMParser(),
  b: new AMPMMidnightParser(),
  B: new DayPeriodParser(),
  h: new Hour1to12Parser(),
  H: new Hour0to23Parser(),
  K: new Hour0To11Parser(),
  k: new Hour1To24Parser(),
  m: new MinuteParser(),
  s: new SecondParser(),
  S: new FractionOfSecondParser(),
  X: new ISOTimezoneWithZParser(),
  x: new ISOTimezoneParser(),
  t: new TimestampSecondsParser(),
  T: new TimestampMillisecondsParser()
};
var formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;
var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
var escapedStringRegExp = /^'([^]*?)'?$/;
var doubleQuoteRegExp = /''/g;
var notWhitespaceRegExp = /\S/;
var unescapedLatinCharacterRegExp = /[a-zA-Z]/;
function parse$1(dirtyDateString, dirtyFormatString, dirtyReferenceDate, options) {
  var _ref, _options$locale, _ref2, _ref3, _ref4, _options$firstWeekCon, _options$locale2, _options$locale2$opti, _defaultOptions$local, _defaultOptions$local2, _ref5, _ref6, _ref7, _options$weekStartsOn, _options$locale3, _options$locale3$opti, _defaultOptions$local3, _defaultOptions$local4;
  requiredArgs$1(3, arguments);
  var dateString = String(dirtyDateString);
  var formatString = String(dirtyFormatString);
  var defaultOptions2 = getDefaultOptions$1();
  var locale$1 = (_ref = (_options$locale = options === null || options === void 0 ? void 0 : options.locale) !== null && _options$locale !== void 0 ? _options$locale : defaultOptions2.locale) !== null && _ref !== void 0 ? _ref : locale;
  if (!locale$1.match) {
    throw new RangeError("locale must contain match property");
  }
  var firstWeekContainsDate = toInteger$2((_ref2 = (_ref3 = (_ref4 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale2 = options.locale) === null || _options$locale2 === void 0 ? void 0 : (_options$locale2$opti = _options$locale2.options) === null || _options$locale2$opti === void 0 ? void 0 : _options$locale2$opti.firstWeekContainsDate) !== null && _ref4 !== void 0 ? _ref4 : defaultOptions2.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : (_defaultOptions$local = defaultOptions2.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : 1);
  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  }
  var weekStartsOn = toInteger$2((_ref5 = (_ref6 = (_ref7 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale3 = options.locale) === null || _options$locale3 === void 0 ? void 0 : (_options$locale3$opti = _options$locale3.options) === null || _options$locale3$opti === void 0 ? void 0 : _options$locale3$opti.weekStartsOn) !== null && _ref7 !== void 0 ? _ref7 : defaultOptions2.weekStartsOn) !== null && _ref6 !== void 0 ? _ref6 : (_defaultOptions$local3 = defaultOptions2.locale) === null || _defaultOptions$local3 === void 0 ? void 0 : (_defaultOptions$local4 = _defaultOptions$local3.options) === null || _defaultOptions$local4 === void 0 ? void 0 : _defaultOptions$local4.weekStartsOn) !== null && _ref5 !== void 0 ? _ref5 : 0);
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  }
  if (formatString === "") {
    if (dateString === "") {
      return toDate$2(dirtyReferenceDate);
    } else {
      return /* @__PURE__ */ new Date(NaN);
    }
  }
  var subFnOptions = {
    firstWeekContainsDate,
    weekStartsOn,
    locale: locale$1
  };
  var setters = [new DateToSystemTimezoneSetter()];
  var tokens = formatString.match(longFormattingTokensRegExp).map(function(substring) {
    var firstCharacter = substring[0];
    if (firstCharacter in longFormatters$1) {
      var longFormatter = longFormatters$1[firstCharacter];
      return longFormatter(substring, locale$1.formatLong);
    }
    return substring;
  }).join("").match(formattingTokensRegExp);
  var usedTokens = [];
  var _iterator = _createForOfIteratorHelper(tokens), _step;
  try {
    var _loop = function _loop2() {
      var token = _step.value;
      if (!(options !== null && options !== void 0 && options.useAdditionalWeekYearTokens) && isProtectedWeekYearToken$1(token)) {
        throwProtectedError$1(token, formatString, dirtyDateString);
      }
      if (!(options !== null && options !== void 0 && options.useAdditionalDayOfYearTokens) && isProtectedDayOfYearToken$1(token)) {
        throwProtectedError$1(token, formatString, dirtyDateString);
      }
      var firstCharacter = token[0];
      var parser = parsers[firstCharacter];
      if (parser) {
        var incompatibleTokens = parser.incompatibleTokens;
        if (Array.isArray(incompatibleTokens)) {
          var incompatibleToken = usedTokens.find(function(usedToken) {
            return incompatibleTokens.includes(usedToken.token) || usedToken.token === firstCharacter;
          });
          if (incompatibleToken) {
            throw new RangeError("The format string mustn't contain `".concat(incompatibleToken.fullToken, "` and `").concat(token, "` at the same time"));
          }
        } else if (parser.incompatibleTokens === "*" && usedTokens.length > 0) {
          throw new RangeError("The format string mustn't contain `".concat(token, "` and any other token at the same time"));
        }
        usedTokens.push({
          token: firstCharacter,
          fullToken: token
        });
        var parseResult = parser.run(dateString, token, locale$1.match, subFnOptions);
        if (!parseResult) {
          return {
            v: /* @__PURE__ */ new Date(NaN)
          };
        }
        setters.push(parseResult.setter);
        dateString = parseResult.rest;
      } else {
        if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
          throw new RangeError("Format string contains an unescaped latin alphabet character `" + firstCharacter + "`");
        }
        if (token === "''") {
          token = "'";
        } else if (firstCharacter === "'") {
          token = cleanEscapedString(token);
        }
        if (dateString.indexOf(token) === 0) {
          dateString = dateString.slice(token.length);
        } else {
          return {
            v: /* @__PURE__ */ new Date(NaN)
          };
        }
      }
    };
    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
      var _ret = _loop();
      if (_typeof(_ret) === "object")
        return _ret.v;
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  if (dateString.length > 0 && notWhitespaceRegExp.test(dateString)) {
    return /* @__PURE__ */ new Date(NaN);
  }
  var uniquePrioritySetters = setters.map(function(setter2) {
    return setter2.priority;
  }).sort(function(a3, b2) {
    return b2 - a3;
  }).filter(function(priority, index, array) {
    return array.indexOf(priority) === index;
  }).map(function(priority) {
    return setters.filter(function(setter2) {
      return setter2.priority === priority;
    }).sort(function(a3, b2) {
      return b2.subPriority - a3.subPriority;
    });
  }).map(function(setterArray) {
    return setterArray[0];
  });
  var date = toDate$2(dirtyReferenceDate);
  if (isNaN(date.getTime())) {
    return /* @__PURE__ */ new Date(NaN);
  }
  var utcDate = subMilliseconds$1(date, getTimezoneOffsetInMilliseconds$2(date));
  var flags = {};
  var _iterator2 = _createForOfIteratorHelper(uniquePrioritySetters), _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
      var setter = _step2.value;
      if (!setter.validate(utcDate, subFnOptions)) {
        return /* @__PURE__ */ new Date(NaN);
      }
      var result = setter.set(utcDate, flags, subFnOptions);
      if (Array.isArray(result)) {
        utcDate = result[0];
        assign$1(flags, result[1]);
      } else {
        utcDate = result;
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  return utcDate;
}
function cleanEscapedString(input) {
  return input.match(escapedStringRegExp)[1].replace(doubleQuoteRegExp, "'");
}
function startOfHour(dirtyDate) {
  requiredArgs$1(1, arguments);
  var date = toDate$2(dirtyDate);
  date.setMinutes(0, 0, 0);
  return date;
}
function isSameWeek(dirtyDateLeft, dirtyDateRight, options) {
  requiredArgs$1(2, arguments);
  var dateLeftStartOfWeek = startOfWeek(dirtyDateLeft, options);
  var dateRightStartOfWeek = startOfWeek(dirtyDateRight, options);
  return dateLeftStartOfWeek.getTime() === dateRightStartOfWeek.getTime();
}
function isSameMonth(dirtyDateLeft, dirtyDateRight) {
  requiredArgs$1(2, arguments);
  var dateLeft = toDate$2(dirtyDateLeft);
  var dateRight = toDate$2(dirtyDateRight);
  return dateLeft.getFullYear() === dateRight.getFullYear() && dateLeft.getMonth() === dateRight.getMonth();
}
function isSameQuarter(dirtyDateLeft, dirtyDateRight) {
  requiredArgs$1(2, arguments);
  var dateLeftStartOfQuarter = startOfQuarter(dirtyDateLeft);
  var dateRightStartOfQuarter = startOfQuarter(dirtyDateRight);
  return dateLeftStartOfQuarter.getTime() === dateRightStartOfQuarter.getTime();
}
function startOfSecond(dirtyDate) {
  requiredArgs$1(1, arguments);
  var date = toDate$2(dirtyDate);
  date.setMilliseconds(0);
  return date;
}
function isSameYear(dirtyDateLeft, dirtyDateRight) {
  requiredArgs$1(2, arguments);
  var dateLeft = toDate$2(dirtyDateLeft);
  var dateRight = toDate$2(dirtyDateRight);
  return dateLeft.getFullYear() === dateRight.getFullYear();
}
function setMonth(dirtyDate, dirtyMonth) {
  requiredArgs$1(2, arguments);
  var date = toDate$2(dirtyDate);
  var month = toInteger$2(dirtyMonth);
  var year = date.getFullYear();
  var day = date.getDate();
  var dateWithDesiredMonth = /* @__PURE__ */ new Date(0);
  dateWithDesiredMonth.setFullYear(year, month, 15);
  dateWithDesiredMonth.setHours(0, 0, 0, 0);
  var daysInMonth = getDaysInMonth(dateWithDesiredMonth);
  date.setMonth(month, Math.min(day, daysInMonth));
  return date;
}
function set(dirtyDate, values) {
  requiredArgs$1(2, arguments);
  if (_typeof(values) !== "object" || values === null) {
    throw new RangeError("values parameter must be an object");
  }
  var date = toDate$2(dirtyDate);
  if (isNaN(date.getTime())) {
    return /* @__PURE__ */ new Date(NaN);
  }
  if (values.year != null) {
    date.setFullYear(values.year);
  }
  if (values.month != null) {
    date = setMonth(date, values.month);
  }
  if (values.date != null) {
    date.setDate(toInteger$2(values.date));
  }
  if (values.hours != null) {
    date.setHours(toInteger$2(values.hours));
  }
  if (values.minutes != null) {
    date.setMinutes(toInteger$2(values.minutes));
  }
  if (values.seconds != null) {
    date.setSeconds(toInteger$2(values.seconds));
  }
  if (values.milliseconds != null) {
    date.setMilliseconds(toInteger$2(values.milliseconds));
  }
  return date;
}
function setHours(dirtyDate, dirtyHours) {
  requiredArgs$1(2, arguments);
  var date = toDate$2(dirtyDate);
  var hours = toInteger$2(dirtyHours);
  date.setHours(hours);
  return date;
}
function setMinutes(dirtyDate, dirtyMinutes) {
  requiredArgs$1(2, arguments);
  var date = toDate$2(dirtyDate);
  var minutes = toInteger$2(dirtyMinutes);
  date.setMinutes(minutes);
  return date;
}
function setQuarter(dirtyDate, dirtyQuarter) {
  requiredArgs$1(2, arguments);
  var date = toDate$2(dirtyDate);
  var quarter = toInteger$2(dirtyQuarter);
  var oldQuarter = Math.floor(date.getMonth() / 3) + 1;
  var diff = quarter - oldQuarter;
  return setMonth(date, date.getMonth() + diff * 3);
}
function setSeconds(dirtyDate, dirtySeconds) {
  requiredArgs$1(2, arguments);
  var date = toDate$2(dirtyDate);
  var seconds = toInteger$2(dirtySeconds);
  date.setSeconds(seconds);
  return date;
}
function setYear(dirtyDate, dirtyYear) {
  requiredArgs$1(2, arguments);
  var date = toDate$2(dirtyDate);
  var year = toInteger$2(dirtyYear);
  if (isNaN(date.getTime())) {
    return /* @__PURE__ */ new Date(NaN);
  }
  date.setFullYear(year);
  return date;
}
function useLocale(ns) {
  const {
    mergedLocaleRef,
    mergedDateLocaleRef
  } = inject(configProviderInjectionKey, null) || {};
  const localeRef = computed(() => {
    var _a, _b;
    return (_b = (_a = mergedLocaleRef === null || mergedLocaleRef === void 0 ? void 0 : mergedLocaleRef.value) === null || _a === void 0 ? void 0 : _a[ns]) !== null && _b !== void 0 ? _b : enUS$1[ns];
  });
  const dateLocaleRef = computed(() => {
    var _a;
    return (_a = mergedDateLocaleRef === null || mergedDateLocaleRef === void 0 ? void 0 : mergedDateLocaleRef.value) !== null && _a !== void 0 ? _a : dateEnUs;
  });
  return {
    dateLocaleRef,
    localeRef
  };
}
const AddIcon = defineComponent({
  name: "Add",
  render() {
    return h("svg", {
      width: "512",
      height: "512",
      viewBox: "0 0 512 512",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, h("path", {
      d: "M256 112V400M400 256H112",
      stroke: "currentColor",
      "stroke-width": "32",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    }));
  }
});
const ArrowDownIcon = defineComponent({
  name: "ArrowDown",
  render() {
    return h("svg", {
      viewBox: "0 0 28 28",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg"
    }, h("g", {
      stroke: "none",
      "stroke-width": "1",
      "fill-rule": "evenodd"
    }, h("g", {
      "fill-rule": "nonzero"
    }, h("path", {
      d: "M23.7916,15.2664 C24.0788,14.9679 24.0696,14.4931 23.7711,14.206 C23.4726,13.9188 22.9978,13.928 22.7106,14.2265 L14.7511,22.5007 L14.7511,3.74792 C14.7511,3.33371 14.4153,2.99792 14.0011,2.99792 C13.5869,2.99792 13.2511,3.33371 13.2511,3.74793 L13.2511,22.4998 L5.29259,14.2265 C5.00543,13.928 4.53064,13.9188 4.23213,14.206 C3.93361,14.4931 3.9244,14.9679 4.21157,15.2664 L13.2809,24.6944 C13.6743,25.1034 14.3289,25.1034 14.7223,24.6944 L23.7916,15.2664 Z"
    }))));
  }
});
const ArrowUpIcon = defineComponent({
  name: "ArrowUp",
  render() {
    return h("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20"
    }, h("g", {
      fill: "none"
    }, h("path", {
      d: "M3.13 9.163a.5.5 0 1 0 .74.674L9.5 3.67V17.5a.5.5 0 0 0 1 0V3.672l5.63 6.165a.5.5 0 0 0 .738-.674l-6.315-6.916a.746.746 0 0 0-.632-.24a.746.746 0 0 0-.476.24L3.131 9.163z",
      fill: "currentColor"
    })));
  }
});
function replaceable(name, icon) {
  return defineComponent({
    name: upperFirst(name),
    setup() {
      var _a;
      const mergedIconsRef = (_a = inject(configProviderInjectionKey, null)) === null || _a === void 0 ? void 0 : _a.mergedIconsRef;
      return () => {
        var _a2;
        const iconOverride = (_a2 = mergedIconsRef === null || mergedIconsRef === void 0 ? void 0 : mergedIconsRef.value) === null || _a2 === void 0 ? void 0 : _a2[name];
        return iconOverride ? iconOverride() : icon;
      };
    }
  });
}
const BackwardIcon = defineComponent({
  name: "Backward",
  render() {
    return h("svg", {
      viewBox: "0 0 20 20",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, h("path", {
      d: "M12.2674 15.793C11.9675 16.0787 11.4927 16.0672 11.2071 15.7673L6.20572 10.5168C5.9298 10.2271 5.9298 9.7719 6.20572 9.48223L11.2071 4.23177C11.4927 3.93184 11.9675 3.92031 12.2674 4.206C12.5673 4.49169 12.5789 4.96642 12.2932 5.26634L7.78458 9.99952L12.2932 14.7327C12.5789 15.0326 12.5673 15.5074 12.2674 15.793Z",
      fill: "currentColor"
    }));
  }
});
const DateIcon = replaceable("date", h("svg", {
  width: "28px",
  height: "28px",
  viewBox: "0 0 28 28",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg"
}, h("g", {
  stroke: "none",
  "stroke-width": "1",
  "fill-rule": "evenodd"
}, h("g", {
  "fill-rule": "nonzero"
}, h("path", {
  d: "M21.75,3 C23.5449254,3 25,4.45507456 25,6.25 L25,21.75 C25,23.5449254 23.5449254,25 21.75,25 L6.25,25 C4.45507456,25 3,23.5449254 3,21.75 L3,6.25 C3,4.45507456 4.45507456,3 6.25,3 L21.75,3 Z M23.5,9.503 L4.5,9.503 L4.5,21.75 C4.5,22.7164983 5.28350169,23.5 6.25,23.5 L21.75,23.5 C22.7164983,23.5 23.5,22.7164983 23.5,21.75 L23.5,9.503 Z M21.75,4.5 L6.25,4.5 C5.28350169,4.5 4.5,5.28350169 4.5,6.25 L4.5,8.003 L23.5,8.003 L23.5,6.25 C23.5,5.28350169 22.7164983,4.5 21.75,4.5 Z"
})))));
const ChevronLeftIcon = defineComponent({
  name: "ChevronLeft",
  render() {
    return h("svg", {
      viewBox: "0 0 16 16",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, h("path", {
      d: "M10.3536 3.14645C10.5488 3.34171 10.5488 3.65829 10.3536 3.85355L6.20711 8L10.3536 12.1464C10.5488 12.3417 10.5488 12.6583 10.3536 12.8536C10.1583 13.0488 9.84171 13.0488 9.64645 12.8536L5.14645 8.35355C4.95118 8.15829 4.95118 7.84171 5.14645 7.64645L9.64645 3.14645C9.84171 2.95118 10.1583 2.95118 10.3536 3.14645Z",
      fill: "currentColor"
    }));
  }
});
const ChevronRightIcon = defineComponent({
  name: "ChevronRight",
  render() {
    return h("svg", {
      viewBox: "0 0 16 16",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, h("path", {
      d: "M5.64645 3.14645C5.45118 3.34171 5.45118 3.65829 5.64645 3.85355L9.79289 8L5.64645 12.1464C5.45118 12.3417 5.45118 12.6583 5.64645 12.8536C5.84171 13.0488 6.15829 13.0488 6.35355 12.8536L10.8536 8.35355C11.0488 8.15829 11.0488 7.84171 10.8536 7.64645L6.35355 3.14645C6.15829 2.95118 5.84171 2.95118 5.64645 3.14645Z",
      fill: "currentColor"
    }));
  }
});
const ErrorIcon = replaceable("close", h("svg", {
  viewBox: "0 0 12 12",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": true
}, h("g", {
  stroke: "none",
  "stroke-width": "1",
  fill: "none",
  "fill-rule": "evenodd"
}, h("g", {
  fill: "currentColor",
  "fill-rule": "nonzero"
}, h("path", {
  d: "M2.08859116,2.2156945 L2.14644661,2.14644661 C2.32001296,1.97288026 2.58943736,1.95359511 2.7843055,2.08859116 L2.85355339,2.14644661 L6,5.293 L9.14644661,2.14644661 C9.34170876,1.95118446 9.65829124,1.95118446 9.85355339,2.14644661 C10.0488155,2.34170876 10.0488155,2.65829124 9.85355339,2.85355339 L6.707,6 L9.85355339,9.14644661 C10.0271197,9.32001296 10.0464049,9.58943736 9.91140884,9.7843055 L9.85355339,9.85355339 C9.67998704,10.0271197 9.41056264,10.0464049 9.2156945,9.91140884 L9.14644661,9.85355339 L6,6.707 L2.85355339,9.85355339 C2.65829124,10.0488155 2.34170876,10.0488155 2.14644661,9.85355339 C1.95118446,9.65829124 1.95118446,9.34170876 2.14644661,9.14644661 L5.293,6 L2.14644661,2.85355339 C1.97288026,2.67998704 1.95359511,2.41056264 2.08859116,2.2156945 L2.14644661,2.14644661 L2.08859116,2.2156945 Z"
})))));
const EyeIcon = defineComponent({
  name: "Eye",
  render() {
    return h("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 512 512"
    }, h("path", {
      d: "M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 0 0-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 0 0 0-17.47C428.89 172.28 347.8 112 255.66 112z",
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "32"
    }), h("circle", {
      cx: "256",
      cy: "256",
      r: "80",
      fill: "none",
      stroke: "currentColor",
      "stroke-miterlimit": "10",
      "stroke-width": "32"
    }));
  }
});
const EyeOffIcon = defineComponent({
  name: "EyeOff",
  render() {
    return h("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 512 512"
    }, h("path", {
      d: "M432 448a15.92 15.92 0 0 1-11.31-4.69l-352-352a16 16 0 0 1 22.62-22.62l352 352A16 16 0 0 1 432 448z",
      fill: "currentColor"
    }), h("path", {
      d: "M255.66 384c-41.49 0-81.5-12.28-118.92-36.5c-34.07-22-64.74-53.51-88.7-91v-.08c19.94-28.57 41.78-52.73 65.24-72.21a2 2 0 0 0 .14-2.94L93.5 161.38a2 2 0 0 0-2.71-.12c-24.92 21-48.05 46.76-69.08 76.92a31.92 31.92 0 0 0-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416a239.13 239.13 0 0 0 75.8-12.58a2 2 0 0 0 .77-3.31l-21.58-21.58a4 4 0 0 0-3.83-1a204.8 204.8 0 0 1-51.16 6.47z",
      fill: "currentColor"
    }), h("path", {
      d: "M490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96a227.34 227.34 0 0 0-74.89 12.83a2 2 0 0 0-.75 3.31l21.55 21.55a4 4 0 0 0 3.88 1a192.82 192.82 0 0 1 50.21-6.69c40.69 0 80.58 12.43 118.55 37c34.71 22.4 65.74 53.88 89.76 91a.13.13 0 0 1 0 .16a310.72 310.72 0 0 1-64.12 72.73a2 2 0 0 0-.15 2.95l19.9 19.89a2 2 0 0 0 2.7.13a343.49 343.49 0 0 0 68.64-78.48a32.2 32.2 0 0 0-.1-34.78z",
      fill: "currentColor"
    }), h("path", {
      d: "M256 160a95.88 95.88 0 0 0-21.37 2.4a2 2 0 0 0-1 3.38l112.59 112.56a2 2 0 0 0 3.38-1A96 96 0 0 0 256 160z",
      fill: "currentColor"
    }), h("path", {
      d: "M165.78 233.66a2 2 0 0 0-3.38 1a96 96 0 0 0 115 115a2 2 0 0 0 1-3.38z",
      fill: "currentColor"
    }));
  }
});
const EmptyIcon = defineComponent({
  name: "Empty",
  render() {
    return h("svg", {
      viewBox: "0 0 28 28",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, h("path", {
      d: "M26 7.5C26 11.0899 23.0899 14 19.5 14C15.9101 14 13 11.0899 13 7.5C13 3.91015 15.9101 1 19.5 1C23.0899 1 26 3.91015 26 7.5ZM16.8536 4.14645C16.6583 3.95118 16.3417 3.95118 16.1464 4.14645C15.9512 4.34171 15.9512 4.65829 16.1464 4.85355L18.7929 7.5L16.1464 10.1464C15.9512 10.3417 15.9512 10.6583 16.1464 10.8536C16.3417 11.0488 16.6583 11.0488 16.8536 10.8536L19.5 8.20711L22.1464 10.8536C22.3417 11.0488 22.6583 11.0488 22.8536 10.8536C23.0488 10.6583 23.0488 10.3417 22.8536 10.1464L20.2071 7.5L22.8536 4.85355C23.0488 4.65829 23.0488 4.34171 22.8536 4.14645C22.6583 3.95118 22.3417 3.95118 22.1464 4.14645L19.5 6.79289L16.8536 4.14645Z",
      fill: "currentColor"
    }), h("path", {
      d: "M25 22.75V12.5991C24.5572 13.0765 24.053 13.4961 23.5 13.8454V16H17.5L17.3982 16.0068C17.0322 16.0565 16.75 16.3703 16.75 16.75C16.75 18.2688 15.5188 19.5 14 19.5C12.4812 19.5 11.25 18.2688 11.25 16.75L11.2432 16.6482C11.1935 16.2822 10.8797 16 10.5 16H4.5V7.25C4.5 6.2835 5.2835 5.5 6.25 5.5H12.2696C12.4146 4.97463 12.6153 4.47237 12.865 4H6.25C4.45507 4 3 5.45507 3 7.25V22.75C3 24.5449 4.45507 26 6.25 26H21.75C23.5449 26 25 24.5449 25 22.75ZM4.5 22.75V17.5H9.81597L9.85751 17.7041C10.2905 19.5919 11.9808 21 14 21L14.215 20.9947C16.2095 20.8953 17.842 19.4209 18.184 17.5H23.5V22.75C23.5 23.7165 22.7165 24.5 21.75 24.5H6.25C5.2835 24.5 4.5 23.7165 4.5 22.75Z",
      fill: "currentColor"
    }));
  }
});
const FastBackwardIcon = defineComponent({
  name: "FastBackward",
  render() {
    return h("svg", {
      viewBox: "0 0 20 20",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg"
    }, h("g", {
      stroke: "none",
      "stroke-width": "1",
      fill: "none",
      "fill-rule": "evenodd"
    }, h("g", {
      fill: "currentColor",
      "fill-rule": "nonzero"
    }, h("path", {
      d: "M8.73171,16.7949 C9.03264,17.0795 9.50733,17.0663 9.79196,16.7654 C10.0766,16.4644 10.0634,15.9897 9.76243,15.7051 L4.52339,10.75 L17.2471,10.75 C17.6613,10.75 17.9971,10.4142 17.9971,10 C17.9971,9.58579 17.6613,9.25 17.2471,9.25 L4.52112,9.25 L9.76243,4.29275 C10.0634,4.00812 10.0766,3.53343 9.79196,3.2325 C9.50733,2.93156 9.03264,2.91834 8.73171,3.20297 L2.31449,9.27241 C2.14819,9.4297 2.04819,9.62981 2.01448,9.8386 C2.00308,9.89058 1.99707,9.94459 1.99707,10 C1.99707,10.0576 2.00356,10.1137 2.01585,10.1675 C2.05084,10.3733 2.15039,10.5702 2.31449,10.7254 L8.73171,16.7949 Z"
    }))));
  }
});
const FastForwardIcon = defineComponent({
  name: "FastForward",
  render() {
    return h("svg", {
      viewBox: "0 0 20 20",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg"
    }, h("g", {
      stroke: "none",
      "stroke-width": "1",
      fill: "none",
      "fill-rule": "evenodd"
    }, h("g", {
      fill: "currentColor",
      "fill-rule": "nonzero"
    }, h("path", {
      d: "M11.2654,3.20511 C10.9644,2.92049 10.4897,2.93371 10.2051,3.23464 C9.92049,3.53558 9.93371,4.01027 10.2346,4.29489 L15.4737,9.25 L2.75,9.25 C2.33579,9.25 2,9.58579 2,10.0000012 C2,10.4142 2.33579,10.75 2.75,10.75 L15.476,10.75 L10.2346,15.7073 C9.93371,15.9919 9.92049,16.4666 10.2051,16.7675 C10.4897,17.0684 10.9644,17.0817 11.2654,16.797 L17.6826,10.7276 C17.8489,10.5703 17.9489,10.3702 17.9826,10.1614 C17.994,10.1094 18,10.0554 18,10.0000012 C18,9.94241 17.9935,9.88633 17.9812,9.83246 C17.9462,9.62667 17.8467,9.42976 17.6826,9.27455 L11.2654,3.20511 Z"
    }))));
  }
});
const ForwardIcon = defineComponent({
  name: "Forward",
  render() {
    return h("svg", {
      viewBox: "0 0 20 20",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, h("path", {
      d: "M7.73271 4.20694C8.03263 3.92125 8.50737 3.93279 8.79306 4.23271L13.7944 9.48318C14.0703 9.77285 14.0703 10.2281 13.7944 10.5178L8.79306 15.7682C8.50737 16.0681 8.03263 16.0797 7.73271 15.794C7.43279 15.5083 7.42125 15.0336 7.70694 14.7336L12.2155 10.0005L7.70694 5.26729C7.42125 4.96737 7.43279 4.49264 7.73271 4.20694Z",
      fill: "currentColor"
    }));
  }
});
const RemoveIcon = defineComponent({
  name: "Remove",
  render() {
    return h("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 512 512"
    }, h("line", {
      x1: "400",
      y1: "256",
      x2: "112",
      y2: "256",
      style: "\n        fill: none;\n        stroke: currentColor;\n        stroke-linecap: round;\n        stroke-linejoin: round;\n        stroke-width: 32px;\n      "
    }));
  }
});
const TimeIcon = replaceable("time", h("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 512 512"
}, h("path", {
  d: "M256,64C150,64,64,150,64,256s86,192,192,192,192-86,192-192S362,64,256,64Z",
  style: "\n        fill: none;\n        stroke: currentColor;\n        stroke-miterlimit: 10;\n        stroke-width: 32px;\n      "
}), h("polyline", {
  points: "256 128 256 272 352 272",
  style: "\n        fill: none;\n        stroke: currentColor;\n        stroke-linecap: round;\n        stroke-linejoin: round;\n        stroke-width: 32px;\n      "
})));
const WarningIcon = replaceable("warning", h("svg", {
  viewBox: "0 0 24 24",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg"
}, h("g", {
  stroke: "none",
  "stroke-width": "1",
  "fill-rule": "evenodd"
}, h("g", {
  "fill-rule": "nonzero"
}, h("path", {
  d: "M12,2 C17.523,2 22,6.478 22,12 C22,17.522 17.523,22 12,22 C6.477,22 2,17.522 2,12 C2,6.478 6.477,2 12,2 Z M12.0018002,15.0037242 C11.450254,15.0037242 11.0031376,15.4508407 11.0031376,16.0023869 C11.0031376,16.553933 11.450254,17.0010495 12.0018002,17.0010495 C12.5533463,17.0010495 13.0004628,16.553933 13.0004628,16.0023869 C13.0004628,15.4508407 12.5533463,15.0037242 12.0018002,15.0037242 Z M11.99964,7 C11.4868042,7.00018474 11.0642719,7.38637706 11.0066858,7.8837365 L11,8.00036004 L11.0018003,13.0012393 L11.00857,13.117858 C11.0665141,13.6151758 11.4893244,14.0010638 12.0021602,14.0008793 C12.514996,14.0006946 12.9375283,13.6145023 12.9951144,13.1171428 L13.0018002,13.0005193 L13,7.99964009 L12.9932303,7.8830214 C12.9352861,7.38570354 12.5124758,6.99981552 11.99964,7 Z"
})))));
const ChevronDownIcon = defineComponent({
  name: "ChevronDown",
  render() {
    return h("svg", {
      viewBox: "0 0 16 16",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, h("path", {
      d: "M3.14645 5.64645C3.34171 5.45118 3.65829 5.45118 3.85355 5.64645L8 9.79289L12.1464 5.64645C12.3417 5.45118 12.6583 5.45118 12.8536 5.64645C13.0488 5.84171 13.0488 6.15829 12.8536 6.35355L8.35355 10.8536C8.15829 11.0488 7.84171 11.0488 7.64645 10.8536L3.14645 6.35355C2.95118 6.15829 2.95118 5.84171 3.14645 5.64645Z",
      fill: "currentColor"
    }));
  }
});
const ClearIcon = replaceable("clear", h("svg", {
  viewBox: "0 0 16 16",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg"
}, h("g", {
  stroke: "none",
  "stroke-width": "1",
  fill: "none",
  "fill-rule": "evenodd"
}, h("g", {
  fill: "currentColor",
  "fill-rule": "nonzero"
}, h("path", {
  d: "M8,2 C11.3137085,2 14,4.6862915 14,8 C14,11.3137085 11.3137085,14 8,14 C4.6862915,14 2,11.3137085 2,8 C2,4.6862915 4.6862915,2 8,2 Z M6.5343055,5.83859116 C6.33943736,5.70359511 6.07001296,5.72288026 5.89644661,5.89644661 L5.89644661,5.89644661 L5.83859116,5.9656945 C5.70359511,6.16056264 5.72288026,6.42998704 5.89644661,6.60355339 L5.89644661,6.60355339 L7.293,8 L5.89644661,9.39644661 L5.83859116,9.4656945 C5.70359511,9.66056264 5.72288026,9.92998704 5.89644661,10.1035534 L5.89644661,10.1035534 L5.9656945,10.1614088 C6.16056264,10.2964049 6.42998704,10.2771197 6.60355339,10.1035534 L6.60355339,10.1035534 L8,8.707 L9.39644661,10.1035534 L9.4656945,10.1614088 C9.66056264,10.2964049 9.92998704,10.2771197 10.1035534,10.1035534 L10.1035534,10.1035534 L10.1614088,10.0343055 C10.2964049,9.83943736 10.2771197,9.57001296 10.1035534,9.39644661 L10.1035534,9.39644661 L8.707,8 L10.1035534,6.60355339 L10.1614088,6.5343055 C10.2964049,6.33943736 10.2771197,6.07001296 10.1035534,5.89644661 L10.1035534,5.89644661 L10.0343055,5.83859116 C9.83943736,5.70359511 9.57001296,5.72288026 9.39644661,5.89644661 L9.39644661,5.89644661 L8,7.293 L6.60355339,5.89644661 Z"
})))));
const ToIcon = replaceable("to", h("svg", {
  viewBox: "0 0 20 20",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg"
}, h("g", {
  stroke: "none",
  "stroke-width": "1",
  fill: "none",
  "fill-rule": "evenodd"
}, h("g", {
  fill: "currentColor",
  "fill-rule": "nonzero"
}, h("path", {
  d: "M11.2654,3.20511 C10.9644,2.92049 10.4897,2.93371 10.2051,3.23464 C9.92049,3.53558 9.93371,4.01027 10.2346,4.29489 L15.4737,9.25 L2.75,9.25 C2.33579,9.25 2,9.58579 2,10.0000012 C2,10.4142 2.33579,10.75 2.75,10.75 L15.476,10.75 L10.2346,15.7073 C9.93371,15.9919 9.92049,16.4666 10.2051,16.7675 C10.4897,17.0684 10.9644,17.0817 11.2654,16.797 L17.6826,10.7276 C17.8489,10.5703 17.9489,10.3702 17.9826,10.1614 C17.994,10.1094 18,10.0554 18,10.0000012 C18,9.94241 17.9935,9.88633 17.9812,9.83246 C17.9462,9.62667 17.8467,9.42976 17.6826,9.27455 L11.2654,3.20511 Z"
})))));
const style$q = cB("base-icon", `
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
 transform: translateZ(0);
`, [c$1("svg", `
 height: 1em;
 width: 1em;
 `)]);
const NBaseIcon = defineComponent({
  name: "BaseIcon",
  props: {
    role: String,
    ariaLabel: String,
    ariaDisabled: {
      type: Boolean,
      default: void 0
    },
    ariaHidden: {
      type: Boolean,
      default: void 0
    },
    clsPrefix: {
      type: String,
      required: true
    },
    onClick: Function,
    onMousedown: Function,
    onMouseup: Function
  },
  setup(props) {
    useStyle("-base-icon", style$q, toRef(props, "clsPrefix"));
  },
  render() {
    return h("i", {
      class: `${this.clsPrefix}-base-icon`,
      onClick: this.onClick,
      onMousedown: this.onMousedown,
      onMouseup: this.onMouseup,
      role: this.role,
      "aria-label": this.ariaLabel,
      "aria-hidden": this.ariaHidden,
      "aria-disabled": this.ariaDisabled
    }, this.$slots);
  }
});
const style$p = cB("base-close", `
 display: flex;
 align-items: center;
 justify-content: center;
 cursor: pointer;
 background-color: transparent;
 color: var(--n-close-icon-color);
 border-radius: var(--n-close-border-radius);
 height: var(--n-close-size);
 width: var(--n-close-size);
 font-size: var(--n-close-icon-size);
 outline: none;
 border: none;
 position: relative;
 padding: 0;
`, [cM("absolute", `
 height: var(--n-close-icon-size);
 width: var(--n-close-icon-size);
 `), c$1("&::before", `
 content: "";
 position: absolute;
 width: var(--n-close-size);
 height: var(--n-close-size);
 left: 50%;
 top: 50%;
 transform: translateY(-50%) translateX(-50%);
 transition: inherit;
 border-radius: inherit;
 `), cNotM("disabled", [c$1("&:hover", `
 color: var(--n-close-icon-color-hover);
 `), c$1("&:hover::before", `
 background-color: var(--n-close-color-hover);
 `), c$1("&:focus::before", `
 background-color: var(--n-close-color-hover);
 `), c$1("&:active", `
 color: var(--n-close-icon-color-pressed);
 `), c$1("&:active::before", `
 background-color: var(--n-close-color-pressed);
 `)]), cM("disabled", `
 cursor: not-allowed;
 color: var(--n-close-icon-color-disabled);
 background-color: transparent;
 `), cM("round", [c$1("&::before", `
 border-radius: 50%;
 `)])]);
const NBaseClose = defineComponent({
  name: "BaseClose",
  props: {
    isButtonTag: {
      type: Boolean,
      default: true
    },
    clsPrefix: {
      type: String,
      required: true
    },
    disabled: {
      type: Boolean,
      default: void 0
    },
    focusable: {
      type: Boolean,
      default: true
    },
    round: Boolean,
    onClick: Function,
    absolute: Boolean
  },
  setup(props) {
    useStyle("-base-close", style$p, toRef(props, "clsPrefix"));
    return () => {
      const {
        clsPrefix,
        disabled,
        absolute,
        round,
        isButtonTag
      } = props;
      const Tag = isButtonTag ? "button" : "div";
      return h(Tag, {
        type: isButtonTag ? "button" : void 0,
        tabindex: disabled || !props.focusable ? -1 : 0,
        "aria-disabled": disabled,
        "aria-label": "close",
        role: isButtonTag ? void 0 : "button",
        disabled,
        class: [`${clsPrefix}-base-close`, absolute && `${clsPrefix}-base-close--absolute`, disabled && `${clsPrefix}-base-close--disabled`, round && `${clsPrefix}-base-close--round`],
        onMousedown: (e2) => {
          if (!props.focusable) {
            e2.preventDefault();
          }
        },
        onClick: props.onClick
      }, h(NBaseIcon, {
        clsPrefix
      }, {
        default: () => h(ErrorIcon, null)
      }));
    };
  }
});
const FocusDetector = defineComponent({
  props: {
    onFocus: Function,
    onBlur: Function
  },
  setup(props) {
    return () => h("div", {
      style: "width: 0; height: 0",
      tabindex: 0,
      onFocus: props.onFocus,
      onBlur: props.onBlur
    });
  }
});
const base = {
  neutralBase: "#000",
  neutralInvertBase: "#fff",
  neutralTextBase: "#fff",
  neutralPopover: "rgb(72, 72, 78)",
  neutralCard: "rgb(24, 24, 28)",
  neutralModal: "rgb(44, 44, 50)",
  neutralBody: "rgb(16, 16, 20)",
  alpha1: "0.9",
  alpha2: "0.82",
  alpha3: "0.52",
  alpha4: "0.38",
  alpha5: "0.28",
  alphaClose: "0.52",
  alphaDisabled: "0.38",
  alphaDisabledInput: "0.06",
  alphaPending: "0.09",
  alphaTablePending: "0.06",
  alphaTableStriped: "0.05",
  alphaPressed: "0.05",
  alphaAvatar: "0.18",
  alphaRail: "0.2",
  alphaProgressRail: "0.12",
  alphaBorder: "0.24",
  alphaDivider: "0.09",
  alphaInput: "0.1",
  alphaAction: "0.06",
  alphaTab: "0.04",
  alphaScrollbar: "0.2",
  alphaScrollbarHover: "0.3",
  alphaCode: "0.12",
  alphaTag: "0.2",
  // primary
  primaryHover: "#7fe7c4",
  primaryDefault: "#63e2b7",
  primaryActive: "#5acea7",
  primarySuppl: "rgb(42, 148, 125)",
  // info
  infoHover: "#8acbec",
  infoDefault: "#70c0e8",
  infoActive: "#66afd3",
  infoSuppl: "rgb(56, 137, 197)",
  // error
  errorHover: "#e98b8b",
  errorDefault: "#e88080",
  errorActive: "#e57272",
  errorSuppl: "rgb(208, 58, 82)",
  // warning
  warningHover: "#f5d599",
  warningDefault: "#f2c97d",
  warningActive: "#e6c260",
  warningSuppl: "rgb(240, 138, 0)",
  // success
  successHover: "#7fe7c4",
  successDefault: "#63e2b7",
  successActive: "#5acea7",
  successSuppl: "rgb(42, 148, 125)"
};
const baseBackgroundRgb = rgba(base.neutralBase);
const baseInvertBackgroundRgb = rgba(base.neutralInvertBase);
const overlayPrefix = "rgba(" + baseInvertBackgroundRgb.slice(0, 3).join(", ") + ", ";
function overlay(alpha) {
  return overlayPrefix + String(alpha) + ")";
}
function neutral(alpha) {
  const overlayRgba = Array.from(baseInvertBackgroundRgb);
  overlayRgba[3] = Number(alpha);
  return composite(baseBackgroundRgb, overlayRgba);
}
const derived = Object.assign(Object.assign({
  name: "common"
}, commonVariables$k), {
  baseColor: base.neutralBase,
  // primary color
  primaryColor: base.primaryDefault,
  primaryColorHover: base.primaryHover,
  primaryColorPressed: base.primaryActive,
  primaryColorSuppl: base.primarySuppl,
  // info color
  infoColor: base.infoDefault,
  infoColorHover: base.infoHover,
  infoColorPressed: base.infoActive,
  infoColorSuppl: base.infoSuppl,
  // success color
  successColor: base.successDefault,
  successColorHover: base.successHover,
  successColorPressed: base.successActive,
  successColorSuppl: base.successSuppl,
  // warning color
  warningColor: base.warningDefault,
  warningColorHover: base.warningHover,
  warningColorPressed: base.warningActive,
  warningColorSuppl: base.warningSuppl,
  // error color
  errorColor: base.errorDefault,
  errorColorHover: base.errorHover,
  errorColorPressed: base.errorActive,
  errorColorSuppl: base.errorSuppl,
  // text color
  textColorBase: base.neutralTextBase,
  textColor1: overlay(base.alpha1),
  textColor2: overlay(base.alpha2),
  textColor3: overlay(base.alpha3),
  // textColor4: overlay(base.alpha4), // disabled, placeholder, icon
  // textColor5: overlay(base.alpha5),
  textColorDisabled: overlay(base.alpha4),
  placeholderColor: overlay(base.alpha4),
  placeholderColorDisabled: overlay(base.alpha5),
  iconColor: overlay(base.alpha4),
  iconColorDisabled: overlay(base.alpha5),
  iconColorHover: overlay(Number(base.alpha4) * 1.25),
  iconColorPressed: overlay(Number(base.alpha4) * 0.8),
  opacity1: base.alpha1,
  opacity2: base.alpha2,
  opacity3: base.alpha3,
  opacity4: base.alpha4,
  opacity5: base.alpha5,
  dividerColor: overlay(base.alphaDivider),
  borderColor: overlay(base.alphaBorder),
  // close
  closeIconColorHover: overlay(Number(base.alphaClose)),
  closeIconColor: overlay(Number(base.alphaClose)),
  closeIconColorPressed: overlay(Number(base.alphaClose)),
  closeColorHover: "rgba(255, 255, 255, .12)",
  closeColorPressed: "rgba(255, 255, 255, .08)",
  // clear
  clearColor: overlay(base.alpha4),
  clearColorHover: scaleColor(overlay(base.alpha4), {
    alpha: 1.25
  }),
  clearColorPressed: scaleColor(overlay(base.alpha4), {
    alpha: 0.8
  }),
  scrollbarColor: overlay(base.alphaScrollbar),
  scrollbarColorHover: overlay(base.alphaScrollbarHover),
  scrollbarWidth: "5px",
  scrollbarHeight: "5px",
  scrollbarBorderRadius: "5px",
  progressRailColor: overlay(base.alphaProgressRail),
  railColor: overlay(base.alphaRail),
  popoverColor: base.neutralPopover,
  tableColor: base.neutralCard,
  cardColor: base.neutralCard,
  modalColor: base.neutralModal,
  bodyColor: base.neutralBody,
  tagColor: neutral(base.alphaTag),
  avatarColor: overlay(base.alphaAvatar),
  invertedColor: base.neutralBase,
  inputColor: overlay(base.alphaInput),
  codeColor: overlay(base.alphaCode),
  tabColor: overlay(base.alphaTab),
  actionColor: overlay(base.alphaAction),
  tableHeaderColor: overlay(base.alphaAction),
  hoverColor: overlay(base.alphaPending),
  tableColorHover: overlay(base.alphaTablePending),
  tableColorStriped: overlay(base.alphaTableStriped),
  pressedColor: overlay(base.alphaPressed),
  opacityDisabled: base.alphaDisabled,
  inputColorDisabled: overlay(base.alphaDisabledInput),
  buttonColor2: "rgba(255, 255, 255, .08)",
  buttonColor2Hover: "rgba(255, 255, 255, .12)",
  buttonColor2Pressed: "rgba(255, 255, 255, .08)",
  boxShadow1: "0 1px 2px -2px rgba(0, 0, 0, .24), 0 3px 6px 0 rgba(0, 0, 0, .18), 0 5px 12px 4px rgba(0, 0, 0, .12)",
  boxShadow2: "0 3px 6px -4px rgba(0, 0, 0, .24), 0 6px 12px 0 rgba(0, 0, 0, .16), 0 9px 18px 8px rgba(0, 0, 0, .10)",
  boxShadow3: "0 6px 16px -9px rgba(0, 0, 0, .08), 0 9px 28px 0 rgba(0, 0, 0, .05), 0 12px 48px 16px rgba(0, 0, 0, .03)"
});
const commonVars$c = {
  iconSizeSmall: "34px",
  iconSizeMedium: "40px",
  iconSizeLarge: "46px",
  iconSizeHuge: "52px"
};
const self$1e = (vars) => {
  const {
    textColorDisabled,
    iconColor,
    textColor2,
    fontSizeSmall,
    fontSizeMedium,
    fontSizeLarge,
    fontSizeHuge
  } = vars;
  return Object.assign(Object.assign({}, commonVars$c), {
    fontSizeSmall,
    fontSizeMedium,
    fontSizeLarge,
    fontSizeHuge,
    textColor: textColorDisabled,
    iconColor,
    extraTextColor: textColor2
  });
};
const emptyLight = {
  name: "Empty",
  common: derived$1,
  self: self$1e
};
const emptyDark = {
  name: "Empty",
  common: derived,
  self: self$1e
};
const style$o = cB("empty", `
 display: flex;
 flex-direction: column;
 align-items: center;
 font-size: var(--n-font-size);
`, [cE("icon", `
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 line-height: var(--n-icon-size);
 color: var(--n-icon-color);
 transition:
 color .3s var(--n-bezier);
 `, [c$1("+", [cE("description", `
 margin-top: 8px;
 `)])]), cE("description", `
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `), cE("extra", `
 text-align: center;
 transition: color .3s var(--n-bezier);
 margin-top: 12px;
 color: var(--n-extra-text-color);
 `)]);
const emptyProps = Object.assign(Object.assign({}, useTheme.props), {
  description: String,
  showDescription: {
    type: Boolean,
    default: true
  },
  showIcon: {
    type: Boolean,
    default: true
  },
  size: {
    type: String,
    default: "medium"
  },
  renderIcon: Function
});
const __nuxt_component_20 = defineComponent({
  name: "Empty",
  props: emptyProps,
  setup(props) {
    const {
      mergedClsPrefixRef,
      inlineThemeDisabled
    } = useConfig(props);
    const themeRef = useTheme("Empty", "-empty", style$o, emptyLight, props, mergedClsPrefixRef);
    const {
      localeRef
    } = useLocale("Empty");
    const NConfigProvider = inject(configProviderInjectionKey, null);
    const mergedDescriptionRef = computed(() => {
      var _a, _b, _c;
      return (_a = props.description) !== null && _a !== void 0 ? _a : (_c = (_b = NConfigProvider === null || NConfigProvider === void 0 ? void 0 : NConfigProvider.mergedComponentPropsRef.value) === null || _b === void 0 ? void 0 : _b.Empty) === null || _c === void 0 ? void 0 : _c.description;
    });
    const mergedRenderIconRef = computed(() => {
      var _a, _b;
      return ((_b = (_a = NConfigProvider === null || NConfigProvider === void 0 ? void 0 : NConfigProvider.mergedComponentPropsRef.value) === null || _a === void 0 ? void 0 : _a.Empty) === null || _b === void 0 ? void 0 : _b.renderIcon) || (() => h(EmptyIcon, null));
    });
    const cssVarsRef = computed(() => {
      const {
        size
      } = props;
      const {
        common: {
          cubicBezierEaseInOut
        },
        self: {
          [createKey("iconSize", size)]: iconSize,
          [createKey("fontSize", size)]: fontSize,
          textColor,
          iconColor,
          extraTextColor
        }
      } = themeRef.value;
      return {
        "--n-icon-size": iconSize,
        "--n-font-size": fontSize,
        "--n-bezier": cubicBezierEaseInOut,
        "--n-text-color": textColor,
        "--n-icon-color": iconColor,
        "--n-extra-text-color": extraTextColor
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("empty", computed(() => {
      let hash2 = "";
      const {
        size
      } = props;
      hash2 += size[0];
      return hash2;
    }), cssVarsRef, props) : void 0;
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      mergedRenderIcon: mergedRenderIconRef,
      localizedDescription: computed(() => {
        return mergedDescriptionRef.value || localeRef.value.description;
      }),
      cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
    };
  },
  render() {
    const {
      $slots,
      mergedClsPrefix,
      onRender
    } = this;
    onRender === null || onRender === void 0 ? void 0 : onRender();
    return h("div", {
      class: [`${mergedClsPrefix}-empty`, this.themeClass],
      style: this.cssVars
    }, this.showIcon ? h("div", {
      class: `${mergedClsPrefix}-empty__icon`
    }, $slots.icon ? $slots.icon() : h(NBaseIcon, {
      clsPrefix: mergedClsPrefix
    }, {
      default: this.mergedRenderIcon
    })) : null, this.showDescription ? h("div", {
      class: `${mergedClsPrefix}-empty__description`
    }, $slots.default ? $slots.default() : this.localizedDescription) : null, $slots.extra ? h("div", {
      class: `${mergedClsPrefix}-empty__extra`
    }, $slots.extra()) : null);
  }
});
const scrollbarDark = {
  name: "Scrollbar",
  common: derived,
  self: self$1f
};
const commonVariables$j = {
  height: "calc(var(--n-option-height) * 7.6)",
  paddingSmall: "4px 0",
  paddingMedium: "4px 0",
  paddingLarge: "4px 0",
  paddingHuge: "4px 0",
  optionPaddingSmall: "0 12px",
  optionPaddingMedium: "0 12px",
  optionPaddingLarge: "0 12px",
  optionPaddingHuge: "0 12px",
  loadingSize: "18px"
};
const self$1d = (vars) => {
  const {
    borderRadius,
    popoverColor,
    textColor3,
    dividerColor,
    textColor2,
    primaryColorPressed,
    textColorDisabled,
    primaryColor,
    opacityDisabled,
    hoverColor,
    fontSizeSmall,
    fontSizeMedium,
    fontSizeLarge,
    fontSizeHuge,
    heightSmall,
    heightMedium,
    heightLarge,
    heightHuge
  } = vars;
  return Object.assign(Object.assign({}, commonVariables$j), {
    optionFontSizeSmall: fontSizeSmall,
    optionFontSizeMedium: fontSizeMedium,
    optionFontSizeLarge: fontSizeLarge,
    optionFontSizeHuge: fontSizeHuge,
    optionHeightSmall: heightSmall,
    optionHeightMedium: heightMedium,
    optionHeightLarge: heightLarge,
    optionHeightHuge: heightHuge,
    borderRadius,
    color: popoverColor,
    groupHeaderTextColor: textColor3,
    actionDividerColor: dividerColor,
    optionTextColor: textColor2,
    optionTextColorPressed: primaryColorPressed,
    optionTextColorDisabled: textColorDisabled,
    optionTextColorActive: primaryColor,
    optionOpacityDisabled: opacityDisabled,
    optionCheckColor: primaryColor,
    optionColorPending: hoverColor,
    optionColorActive: "rgba(0, 0, 0, 0)",
    optionColorActivePending: hoverColor,
    actionTextColor: textColor2,
    loadingColor: primaryColor
  });
};
const internalSelectMenuLight = createTheme({
  name: "InternalSelectMenu",
  common: derived$1,
  peers: {
    Scrollbar: scrollbarLight,
    Empty: emptyLight
  },
  self: self$1d
});
const internalSelectMenuDark = {
  name: "InternalSelectMenu",
  common: derived,
  peers: {
    Scrollbar: scrollbarDark,
    Empty: emptyDark
  },
  self: self$1d
};
const {
  cubicBezierEaseIn,
  cubicBezierEaseOut: cubicBezierEaseOut$1
} = commonVariables$k;
function fadeInScaleUpTransition({
  transformOrigin = "inherit",
  duration = ".2s",
  enterScale = ".9",
  originalTransform = "",
  originalTransition = ""
} = {}) {
  return [c$1("&.fade-in-scale-up-transition-leave-active", {
    transformOrigin,
    transition: `opacity ${duration} ${cubicBezierEaseIn}, transform ${duration} ${cubicBezierEaseIn} ${originalTransition && "," + originalTransition}`
  }), c$1("&.fade-in-scale-up-transition-enter-active", {
    transformOrigin,
    transition: `opacity ${duration} ${cubicBezierEaseOut$1}, transform ${duration} ${cubicBezierEaseOut$1} ${originalTransition && "," + originalTransition}`
  }), c$1("&.fade-in-scale-up-transition-enter-from, &.fade-in-scale-up-transition-leave-to", {
    opacity: 0,
    transform: `${originalTransform} scale(${enterScale})`
  }), c$1("&.fade-in-scale-up-transition-leave-from, &.fade-in-scale-up-transition-enter-to", {
    opacity: 1,
    transform: `${originalTransform} scale(1)`
  })];
}
const popoverDark = {
  name: "Popover",
  common: derived,
  self: self$1g
};
const commonVariables$i = {
  closeIconSizeTiny: "12px",
  closeIconSizeSmall: "12px",
  closeIconSizeMedium: "14px",
  closeIconSizeLarge: "14px",
  closeSizeTiny: "16px",
  closeSizeSmall: "16px",
  closeSizeMedium: "18px",
  closeSizeLarge: "18px",
  padding: "0 7px",
  closeMargin: "0 0 0 4px"
};
const tagDark = {
  name: "Tag",
  common: derived,
  self(vars) {
    const {
      textColor2,
      primaryColorHover,
      primaryColorPressed,
      primaryColor,
      infoColor,
      successColor,
      warningColor,
      errorColor,
      baseColor,
      borderColor,
      tagColor,
      opacityDisabled,
      closeIconColor,
      closeIconColorHover,
      closeIconColorPressed,
      closeColorHover,
      closeColorPressed,
      borderRadiusSmall: borderRadius,
      fontSizeMini,
      fontSizeTiny,
      fontSizeSmall,
      fontSizeMedium,
      heightMini,
      heightTiny,
      heightSmall,
      heightMedium,
      buttonColor2Hover,
      buttonColor2Pressed,
      fontWeightStrong
    } = vars;
    return Object.assign(Object.assign({}, commonVariables$i), {
      closeBorderRadius: borderRadius,
      heightTiny: heightMini,
      heightSmall: heightTiny,
      heightMedium: heightSmall,
      heightLarge: heightMedium,
      borderRadius,
      opacityDisabled,
      fontSizeTiny: fontSizeMini,
      fontSizeSmall: fontSizeTiny,
      fontSizeMedium: fontSizeSmall,
      fontSizeLarge: fontSizeMedium,
      fontWeightStrong,
      // checked
      textColorCheckable: textColor2,
      textColorHoverCheckable: textColor2,
      textColorPressedCheckable: textColor2,
      textColorChecked: baseColor,
      colorCheckable: "#0000",
      colorHoverCheckable: buttonColor2Hover,
      colorPressedCheckable: buttonColor2Pressed,
      colorChecked: primaryColor,
      colorCheckedHover: primaryColorHover,
      colorCheckedPressed: primaryColorPressed,
      // default
      border: `1px solid ${borderColor}`,
      textColor: textColor2,
      color: tagColor,
      colorBordered: "#0000",
      closeIconColor,
      closeIconColorHover,
      closeIconColorPressed,
      closeColorHover,
      closeColorPressed,
      borderPrimary: `1px solid ${changeColor(primaryColor, {
        alpha: 0.3
      })}`,
      textColorPrimary: primaryColor,
      colorPrimary: changeColor(primaryColor, {
        alpha: 0.16
      }),
      colorBorderedPrimary: "#0000",
      closeIconColorPrimary: scaleColor(primaryColor, {
        lightness: 0.7
      }),
      closeIconColorHoverPrimary: scaleColor(primaryColor, {
        lightness: 0.7
      }),
      closeIconColorPressedPrimary: scaleColor(primaryColor, {
        lightness: 0.7
      }),
      closeColorHoverPrimary: changeColor(primaryColor, {
        alpha: 0.16
      }),
      closeColorPressedPrimary: changeColor(primaryColor, {
        alpha: 0.12
      }),
      borderInfo: `1px solid ${changeColor(infoColor, {
        alpha: 0.3
      })}`,
      textColorInfo: infoColor,
      colorInfo: changeColor(infoColor, {
        alpha: 0.16
      }),
      colorBorderedInfo: "#0000",
      closeIconColorInfo: scaleColor(infoColor, {
        alpha: 0.7
      }),
      closeIconColorHoverInfo: scaleColor(infoColor, {
        alpha: 0.7
      }),
      closeIconColorPressedInfo: scaleColor(infoColor, {
        alpha: 0.7
      }),
      closeColorHoverInfo: changeColor(infoColor, {
        alpha: 0.16
      }),
      closeColorPressedInfo: changeColor(infoColor, {
        alpha: 0.12
      }),
      borderSuccess: `1px solid ${changeColor(successColor, {
        alpha: 0.3
      })}`,
      textColorSuccess: successColor,
      colorSuccess: changeColor(successColor, {
        alpha: 0.16
      }),
      colorBorderedSuccess: "#0000",
      closeIconColorSuccess: scaleColor(successColor, {
        alpha: 0.7
      }),
      closeIconColorHoverSuccess: scaleColor(successColor, {
        alpha: 0.7
      }),
      closeIconColorPressedSuccess: scaleColor(successColor, {
        alpha: 0.7
      }),
      closeColorHoverSuccess: changeColor(successColor, {
        alpha: 0.16
      }),
      closeColorPressedSuccess: changeColor(successColor, {
        alpha: 0.12
      }),
      borderWarning: `1px solid ${changeColor(warningColor, {
        alpha: 0.3
      })}`,
      textColorWarning: warningColor,
      colorWarning: changeColor(warningColor, {
        alpha: 0.16
      }),
      colorBorderedWarning: "#0000",
      closeIconColorWarning: scaleColor(warningColor, {
        alpha: 0.7
      }),
      closeIconColorHoverWarning: scaleColor(warningColor, {
        alpha: 0.7
      }),
      closeIconColorPressedWarning: scaleColor(warningColor, {
        alpha: 0.7
      }),
      closeColorHoverWarning: changeColor(warningColor, {
        alpha: 0.16
      }),
      closeColorPressedWarning: changeColor(warningColor, {
        alpha: 0.11
      }),
      borderError: `1px solid ${changeColor(errorColor, {
        alpha: 0.3
      })}`,
      textColorError: errorColor,
      colorError: changeColor(errorColor, {
        alpha: 0.16
      }),
      colorBorderedError: "#0000",
      closeIconColorError: scaleColor(errorColor, {
        alpha: 0.7
      }),
      closeIconColorHoverError: scaleColor(errorColor, {
        alpha: 0.7
      }),
      closeIconColorPressedError: scaleColor(errorColor, {
        alpha: 0.7
      }),
      closeColorHoverError: changeColor(errorColor, {
        alpha: 0.16
      }),
      closeColorPressedError: changeColor(errorColor, {
        alpha: 0.12
      })
    });
  }
};
const self$1c = (vars) => {
  const {
    textColor2,
    primaryColorHover,
    primaryColorPressed,
    primaryColor,
    infoColor,
    successColor,
    warningColor,
    errorColor,
    baseColor,
    borderColor,
    opacityDisabled,
    tagColor,
    closeIconColor,
    closeIconColorHover,
    closeIconColorPressed,
    borderRadiusSmall: borderRadius,
    fontSizeMini,
    fontSizeTiny,
    fontSizeSmall,
    fontSizeMedium,
    heightMini,
    heightTiny,
    heightSmall,
    heightMedium,
    closeColorHover,
    closeColorPressed,
    buttonColor2Hover,
    buttonColor2Pressed,
    fontWeightStrong
  } = vars;
  return Object.assign(Object.assign({}, commonVariables$i), {
    closeBorderRadius: borderRadius,
    heightTiny: heightMini,
    heightSmall: heightTiny,
    heightMedium: heightSmall,
    heightLarge: heightMedium,
    borderRadius,
    opacityDisabled,
    fontSizeTiny: fontSizeMini,
    fontSizeSmall: fontSizeTiny,
    fontSizeMedium: fontSizeSmall,
    fontSizeLarge: fontSizeMedium,
    fontWeightStrong,
    // checked
    textColorCheckable: textColor2,
    textColorHoverCheckable: textColor2,
    textColorPressedCheckable: textColor2,
    textColorChecked: baseColor,
    colorCheckable: "#0000",
    colorHoverCheckable: buttonColor2Hover,
    colorPressedCheckable: buttonColor2Pressed,
    colorChecked: primaryColor,
    colorCheckedHover: primaryColorHover,
    colorCheckedPressed: primaryColorPressed,
    // default
    border: `1px solid ${borderColor}`,
    textColor: textColor2,
    color: tagColor,
    colorBordered: "rgb(250, 250, 252)",
    closeIconColor,
    closeIconColorHover,
    closeIconColorPressed,
    closeColorHover,
    closeColorPressed,
    borderPrimary: `1px solid ${changeColor(primaryColor, {
      alpha: 0.3
    })}`,
    textColorPrimary: primaryColor,
    colorPrimary: changeColor(primaryColor, {
      alpha: 0.12
    }),
    colorBorderedPrimary: changeColor(primaryColor, {
      alpha: 0.1
    }),
    closeIconColorPrimary: primaryColor,
    closeIconColorHoverPrimary: primaryColor,
    closeIconColorPressedPrimary: primaryColor,
    closeColorHoverPrimary: changeColor(primaryColor, {
      alpha: 0.12
    }),
    closeColorPressedPrimary: changeColor(primaryColor, {
      alpha: 0.18
    }),
    borderInfo: `1px solid ${changeColor(infoColor, {
      alpha: 0.3
    })}`,
    textColorInfo: infoColor,
    colorInfo: changeColor(infoColor, {
      alpha: 0.12
    }),
    colorBorderedInfo: changeColor(infoColor, {
      alpha: 0.1
    }),
    closeIconColorInfo: infoColor,
    closeIconColorHoverInfo: infoColor,
    closeIconColorPressedInfo: infoColor,
    closeColorHoverInfo: changeColor(infoColor, {
      alpha: 0.12
    }),
    closeColorPressedInfo: changeColor(infoColor, {
      alpha: 0.18
    }),
    borderSuccess: `1px solid ${changeColor(successColor, {
      alpha: 0.3
    })}`,
    textColorSuccess: successColor,
    colorSuccess: changeColor(successColor, {
      alpha: 0.12
    }),
    colorBorderedSuccess: changeColor(successColor, {
      alpha: 0.1
    }),
    closeIconColorSuccess: successColor,
    closeIconColorHoverSuccess: successColor,
    closeIconColorPressedSuccess: successColor,
    closeColorHoverSuccess: changeColor(successColor, {
      alpha: 0.12
    }),
    closeColorPressedSuccess: changeColor(successColor, {
      alpha: 0.18
    }),
    borderWarning: `1px solid ${changeColor(warningColor, {
      alpha: 0.35
    })}`,
    textColorWarning: warningColor,
    colorWarning: changeColor(warningColor, {
      alpha: 0.15
    }),
    colorBorderedWarning: changeColor(warningColor, {
      alpha: 0.12
    }),
    closeIconColorWarning: warningColor,
    closeIconColorHoverWarning: warningColor,
    closeIconColorPressedWarning: warningColor,
    closeColorHoverWarning: changeColor(warningColor, {
      alpha: 0.12
    }),
    closeColorPressedWarning: changeColor(warningColor, {
      alpha: 0.18
    }),
    borderError: `1px solid ${changeColor(errorColor, {
      alpha: 0.23
    })}`,
    textColorError: errorColor,
    colorError: changeColor(errorColor, {
      alpha: 0.1
    }),
    colorBorderedError: changeColor(errorColor, {
      alpha: 0.08
    }),
    closeIconColorError: errorColor,
    closeIconColorHoverError: errorColor,
    closeIconColorPressedError: errorColor,
    closeColorHoverError: changeColor(errorColor, {
      alpha: 0.12
    }),
    closeColorPressedError: changeColor(errorColor, {
      alpha: 0.18
    })
  });
};
const tagLight = {
  name: "Tag",
  common: derived$1,
  self: self$1c
};
const commonProps = {
  color: Object,
  type: {
    type: String,
    default: "default"
  },
  round: Boolean,
  size: {
    type: String,
    default: "medium"
  },
  closable: Boolean,
  disabled: {
    type: Boolean,
    default: void 0
  }
};
const style$n = cB("tag", `
 --n-close-margin: var(--n-close-margin-top) var(--n-close-margin-right) var(--n-close-margin-bottom) var(--n-close-margin-left);
 white-space: nowrap;
 position: relative;
 box-sizing: border-box;
 cursor: default;
 display: inline-flex;
 align-items: center;
 flex-wrap: nowrap;
 padding: var(--n-padding);
 border-radius: var(--n-border-radius);
 color: var(--n-text-color);
 background-color: var(--n-color);
 transition: 
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 line-height: 1;
 height: var(--n-height);
 font-size: var(--n-font-size);
`, [cM("strong", `
 font-weight: var(--n-font-weight-strong);
 `), cE("border", `
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
 border: var(--n-border);
 transition: border-color .3s var(--n-bezier);
 `), cE("icon", `
 display: flex;
 margin: 0 4px 0 0;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 font-size: var(--n-avatar-size-override);
 `), cE("avatar", `
 display: flex;
 margin: 0 6px 0 0;
 `), cE("close", `
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `), cM("round", `
 padding: 0 calc(var(--n-height) / 3);
 border-radius: calc(var(--n-height) / 2);
 `, [cE("icon", `
 margin: 0 4px 0 calc((var(--n-height) - 8px) / -2);
 `), cE("avatar", `
 margin: 0 6px 0 calc((var(--n-height) - 8px) / -2);
 `), cM("closable", `
 padding: 0 calc(var(--n-height) / 4) 0 calc(var(--n-height) / 3);
 `)]), cM("icon, avatar", [cM("round", `
 padding: 0 calc(var(--n-height) / 3) 0 calc(var(--n-height) / 2);
 `)]), cM("disabled", `
 cursor: not-allowed !important;
 opacity: var(--n-opacity-disabled);
 `), cM("checkable", `
 cursor: pointer;
 box-shadow: none;
 color: var(--n-text-color-checkable);
 background-color: var(--n-color-checkable);
 `, [cNotM("disabled", [c$1("&:hover", "background-color: var(--n-color-hover-checkable);", [cNotM("checked", "color: var(--n-text-color-hover-checkable);")]), c$1("&:active", "background-color: var(--n-color-pressed-checkable);", [cNotM("checked", "color: var(--n-text-color-pressed-checkable);")])]), cM("checked", `
 color: var(--n-text-color-checked);
 background-color: var(--n-color-checked);
 `, [cNotM("disabled", [c$1("&:hover", "background-color: var(--n-color-checked-hover);"), c$1("&:active", "background-color: var(--n-color-checked-pressed);")])])])]);
const tagProps = Object.assign(Object.assign(Object.assign({}, useTheme.props), commonProps), {
  bordered: {
    type: Boolean,
    default: void 0
  },
  checked: Boolean,
  checkable: Boolean,
  strong: Boolean,
  triggerClickOnClose: Boolean,
  onClose: [Array, Function],
  onMouseenter: Function,
  onMouseleave: Function,
  "onUpdate:checked": Function,
  onUpdateChecked: Function,
  // private
  internalCloseFocusable: {
    type: Boolean,
    default: true
  },
  internalCloseIsButtonTag: {
    type: Boolean,
    default: true
  },
  // deprecated
  onCheckedChange: Function
});
const tagInjectionKey = createInjectionKey("n-tag");
const __nuxt_component_26 = defineComponent({
  name: "Tag",
  props: tagProps,
  setup(props) {
    if (process.env.NODE_ENV !== "production") {
      watchEffect(() => {
        if (props.onCheckedChange !== void 0) {
          warnOnce("tag", "`on-checked-change` is deprecated, please use `on-update:checked` instead");
        }
      });
    }
    const contentRef = ref(null);
    const {
      mergedBorderedRef,
      mergedClsPrefixRef,
      inlineThemeDisabled,
      mergedRtlRef
    } = useConfig(props);
    const themeRef = useTheme("Tag", "-tag", style$n, tagLight, props, mergedClsPrefixRef);
    provide(tagInjectionKey, {
      roundRef: toRef(props, "round")
    });
    function handleClick(e2) {
      if (!props.disabled) {
        if (props.checkable) {
          const {
            checked,
            onCheckedChange,
            onUpdateChecked,
            "onUpdate:checked": _onUpdateChecked
          } = props;
          if (onUpdateChecked)
            onUpdateChecked(!checked);
          if (_onUpdateChecked)
            _onUpdateChecked(!checked);
          if (onCheckedChange)
            onCheckedChange(!checked);
        }
      }
    }
    function handleCloseClick(e2) {
      if (!props.triggerClickOnClose) {
        e2.stopPropagation();
      }
      if (!props.disabled) {
        const {
          onClose
        } = props;
        if (onClose)
          call(onClose, e2);
      }
    }
    const tagPublicMethods = {
      setTextContent(textContent) {
        const {
          value
        } = contentRef;
        if (value)
          value.textContent = textContent;
      }
    };
    const rtlEnabledRef = useRtl("Tag", mergedRtlRef, mergedClsPrefixRef);
    const cssVarsRef = computed(() => {
      const {
        type,
        size,
        color: {
          color,
          textColor
        } = {}
      } = props;
      const {
        common: {
          cubicBezierEaseInOut
        },
        self: {
          padding,
          closeMargin,
          borderRadius,
          opacityDisabled,
          textColorCheckable,
          textColorHoverCheckable,
          textColorPressedCheckable,
          textColorChecked,
          colorCheckable,
          colorHoverCheckable,
          colorPressedCheckable,
          colorChecked,
          colorCheckedHover,
          colorCheckedPressed,
          closeBorderRadius,
          fontWeightStrong,
          [createKey("colorBordered", type)]: colorBordered,
          [createKey("closeSize", size)]: closeSize,
          [createKey("closeIconSize", size)]: closeIconSize,
          [createKey("fontSize", size)]: fontSize,
          [createKey("height", size)]: height,
          [createKey("color", type)]: typedColor,
          [createKey("textColor", type)]: typeTextColor,
          [createKey("border", type)]: border,
          [createKey("closeIconColor", type)]: closeIconColor,
          [createKey("closeIconColorHover", type)]: closeIconColorHover,
          [createKey("closeIconColorPressed", type)]: closeIconColorPressed,
          [createKey("closeColorHover", type)]: closeColorHover,
          [createKey("closeColorPressed", type)]: closeColorPressed
        }
      } = themeRef.value;
      const closeMarginDiscrete = getMargin(closeMargin);
      return {
        "--n-font-weight-strong": fontWeightStrong,
        "--n-avatar-size-override": `calc(${height} - 8px)`,
        "--n-bezier": cubicBezierEaseInOut,
        "--n-border-radius": borderRadius,
        "--n-border": border,
        "--n-close-icon-size": closeIconSize,
        "--n-close-color-pressed": closeColorPressed,
        "--n-close-color-hover": closeColorHover,
        "--n-close-border-radius": closeBorderRadius,
        "--n-close-icon-color": closeIconColor,
        "--n-close-icon-color-hover": closeIconColorHover,
        "--n-close-icon-color-pressed": closeIconColorPressed,
        "--n-close-icon-color-disabled": closeIconColor,
        "--n-close-margin-top": closeMarginDiscrete.top,
        "--n-close-margin-right": closeMarginDiscrete.right,
        "--n-close-margin-bottom": closeMarginDiscrete.bottom,
        "--n-close-margin-left": closeMarginDiscrete.left,
        "--n-close-size": closeSize,
        "--n-color": color || (mergedBorderedRef.value ? colorBordered : typedColor),
        "--n-color-checkable": colorCheckable,
        "--n-color-checked": colorChecked,
        "--n-color-checked-hover": colorCheckedHover,
        "--n-color-checked-pressed": colorCheckedPressed,
        "--n-color-hover-checkable": colorHoverCheckable,
        "--n-color-pressed-checkable": colorPressedCheckable,
        "--n-font-size": fontSize,
        "--n-height": height,
        "--n-opacity-disabled": opacityDisabled,
        "--n-padding": padding,
        "--n-text-color": textColor || typeTextColor,
        "--n-text-color-checkable": textColorCheckable,
        "--n-text-color-checked": textColorChecked,
        "--n-text-color-hover-checkable": textColorHoverCheckable,
        "--n-text-color-pressed-checkable": textColorPressedCheckable
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("tag", computed(() => {
      let hash2 = "";
      const {
        type,
        size,
        color: {
          color,
          textColor
        } = {}
      } = props;
      hash2 += type[0];
      hash2 += size[0];
      if (color) {
        hash2 += `a${color2Class(color)}`;
      }
      if (textColor) {
        hash2 += `b${color2Class(textColor)}`;
      }
      if (mergedBorderedRef.value) {
        hash2 += "c";
      }
      return hash2;
    }), cssVarsRef, props) : void 0;
    return Object.assign(Object.assign({}, tagPublicMethods), {
      rtlEnabled: rtlEnabledRef,
      mergedClsPrefix: mergedClsPrefixRef,
      contentRef,
      mergedBordered: mergedBorderedRef,
      handleClick,
      handleCloseClick,
      cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
    });
  },
  render() {
    var _a, _b;
    const {
      mergedClsPrefix,
      rtlEnabled,
      closable,
      color: {
        borderColor
      } = {},
      round,
      onRender,
      $slots
    } = this;
    onRender === null || onRender === void 0 ? void 0 : onRender();
    const avatarNode = resolveWrappedSlot($slots.avatar, (children) => children && h("div", {
      class: `${mergedClsPrefix}-tag__avatar`
    }, children));
    const iconNode = resolveWrappedSlot($slots.icon, (children) => children && h("div", {
      class: `${mergedClsPrefix}-tag__icon`
    }, children));
    return h("div", {
      class: [`${mergedClsPrefix}-tag`, this.themeClass, {
        [`${mergedClsPrefix}-tag--rtl`]: rtlEnabled,
        [`${mergedClsPrefix}-tag--strong`]: this.strong,
        [`${mergedClsPrefix}-tag--disabled`]: this.disabled,
        [`${mergedClsPrefix}-tag--checkable`]: this.checkable,
        [`${mergedClsPrefix}-tag--checked`]: this.checkable && this.checked,
        [`${mergedClsPrefix}-tag--round`]: round,
        [`${mergedClsPrefix}-tag--avatar`]: avatarNode,
        [`${mergedClsPrefix}-tag--icon`]: iconNode,
        [`${mergedClsPrefix}-tag--closable`]: closable
      }],
      style: this.cssVars,
      onClick: this.handleClick,
      onMouseenter: this.onMouseenter,
      onMouseleave: this.onMouseleave
    }, iconNode || avatarNode, h("span", {
      class: `${mergedClsPrefix}-tag__content`,
      ref: "contentRef"
    }, (_b = (_a = this.$slots).default) === null || _b === void 0 ? void 0 : _b.call(_a)), !this.checkable && closable ? h(NBaseClose, {
      clsPrefix: mergedClsPrefix,
      class: `${mergedClsPrefix}-tag__close`,
      disabled: this.disabled,
      onClick: this.handleCloseClick,
      focusable: this.internalCloseFocusable,
      round,
      isButtonTag: this.internalCloseIsButtonTag,
      absolute: true
    }) : null, !this.checkable && this.mergedBordered ? h("div", {
      class: `${mergedClsPrefix}-tag__border`,
      style: {
        borderColor
      }
    }) : null);
  }
});
const style$m = cB("base-clear", `
 flex-shrink: 0;
 height: 1em;
 width: 1em;
 position: relative;
`, [c$1(">", [cE("clear", `
 font-size: var(--n-clear-size);
 height: 1em;
 width: 1em;
 cursor: pointer;
 color: var(--n-clear-color);
 transition: color .3s var(--n-bezier);
 display: flex;
 `, [c$1("&:hover", `
 color: var(--n-clear-color-hover)!important;
 `), c$1("&:active", `
 color: var(--n-clear-color-pressed)!important;
 `)]), cE("placeholder", `
 display: flex;
 `), cE("clear, placeholder", `
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `, [iconSwitchTransition({
  originalTransform: "translateX(-50%) translateY(-50%)",
  left: "50%",
  top: "50%"
})])])]);
const NBaseClear = defineComponent({
  name: "BaseClear",
  props: {
    clsPrefix: {
      type: String,
      required: true
    },
    show: Boolean,
    onClear: Function
  },
  setup(props) {
    useStyle("-base-clear", style$m, toRef(props, "clsPrefix"));
    return {
      handleMouseDown(e2) {
        e2.preventDefault();
      }
    };
  },
  render() {
    const {
      clsPrefix
    } = this;
    return h("div", {
      class: `${clsPrefix}-base-clear`
    }, h(NIconSwitchTransition, null, {
      default: () => {
        var _a, _b;
        return this.show ? h("div", {
          key: "dismiss",
          class: `${clsPrefix}-base-clear__clear`,
          onClick: this.onClear,
          onMousedown: this.handleMouseDown,
          "data-clear": true
        }, resolveSlot(this.$slots.icon, () => [h(NBaseIcon, {
          clsPrefix
        }, {
          default: () => h(ClearIcon, null)
        })])) : h("div", {
          key: "icon",
          class: `${clsPrefix}-base-clear__placeholder`
        }, (_b = (_a = this.$slots).placeholder) === null || _b === void 0 ? void 0 : _b.call(_a));
      }
    }));
  }
});
const NBaseSuffix = defineComponent({
  name: "InternalSelectionSuffix",
  props: {
    clsPrefix: {
      type: String,
      required: true
    },
    showArrow: {
      type: Boolean,
      default: void 0
    },
    showClear: {
      type: Boolean,
      default: void 0
    },
    loading: {
      type: Boolean,
      default: false
    },
    onClear: Function
  },
  setup(props, {
    slots
  }) {
    return () => {
      const {
        clsPrefix
      } = props;
      return h(NBaseLoading, {
        clsPrefix,
        class: `${clsPrefix}-base-suffix`,
        strokeWidth: 24,
        scale: 0.85,
        show: props.loading
      }, {
        default: () => props.showArrow ? h(NBaseClear, {
          clsPrefix,
          show: props.showClear,
          onClear: props.onClear
        }, {
          placeholder: () => h(NBaseIcon, {
            clsPrefix,
            class: `${clsPrefix}-base-suffix__arrow`
          }, {
            default: () => resolveSlot(slots.default, () => [h(ChevronDownIcon, null)])
          })
        }) : null
      });
    };
  }
});
const commonVars$b = {
  paddingSingle: "0 26px 0 12px",
  paddingMultiple: "3px 26px 0 12px",
  clearSize: "16px",
  arrowSize: "16px"
};
const self$1b = (vars) => {
  const {
    borderRadius,
    textColor2,
    textColorDisabled,
    inputColor,
    inputColorDisabled,
    primaryColor,
    primaryColorHover,
    warningColor,
    warningColorHover,
    errorColor,
    errorColorHover,
    borderColor,
    iconColor,
    iconColorDisabled,
    clearColor,
    clearColorHover,
    clearColorPressed,
    placeholderColor,
    placeholderColorDisabled,
    fontSizeTiny,
    fontSizeSmall,
    fontSizeMedium,
    fontSizeLarge,
    heightTiny,
    heightSmall,
    heightMedium,
    heightLarge
  } = vars;
  return Object.assign(Object.assign({}, commonVars$b), {
    fontSizeTiny,
    fontSizeSmall,
    fontSizeMedium,
    fontSizeLarge,
    heightTiny,
    heightSmall,
    heightMedium,
    heightLarge,
    borderRadius,
    // default
    textColor: textColor2,
    textColorDisabled,
    placeholderColor,
    placeholderColorDisabled,
    color: inputColor,
    colorDisabled: inputColorDisabled,
    colorActive: inputColor,
    border: `1px solid ${borderColor}`,
    borderHover: `1px solid ${primaryColorHover}`,
    borderActive: `1px solid ${primaryColor}`,
    borderFocus: `1px solid ${primaryColorHover}`,
    boxShadowHover: "none",
    boxShadowActive: `0 0 0 2px ${changeColor(primaryColor, {
      alpha: 0.2
    })}`,
    boxShadowFocus: `0 0 0 2px ${changeColor(primaryColor, {
      alpha: 0.2
    })}`,
    caretColor: primaryColor,
    arrowColor: iconColor,
    arrowColorDisabled: iconColorDisabled,
    loadingColor: primaryColor,
    // warning
    borderWarning: `1px solid ${warningColor}`,
    borderHoverWarning: `1px solid ${warningColorHover}`,
    borderActiveWarning: `1px solid ${warningColor}`,
    borderFocusWarning: `1px solid ${warningColorHover}`,
    boxShadowHoverWarning: "none",
    boxShadowActiveWarning: `0 0 0 2px ${changeColor(warningColor, {
      alpha: 0.2
    })}`,
    boxShadowFocusWarning: `0 0 0 2px ${changeColor(warningColor, {
      alpha: 0.2
    })}`,
    colorActiveWarning: inputColor,
    caretColorWarning: warningColor,
    // error
    borderError: `1px solid ${errorColor}`,
    borderHoverError: `1px solid ${errorColorHover}`,
    borderActiveError: `1px solid ${errorColor}`,
    borderFocusError: `1px solid ${errorColorHover}`,
    boxShadowHoverError: "none",
    boxShadowActiveError: `0 0 0 2px ${changeColor(errorColor, {
      alpha: 0.2
    })}`,
    boxShadowFocusError: `0 0 0 2px ${changeColor(errorColor, {
      alpha: 0.2
    })}`,
    colorActiveError: inputColor,
    caretColorError: errorColor,
    clearColor,
    clearColorHover,
    clearColorPressed
  });
};
const internalSelectionLight = createTheme({
  name: "InternalSelection",
  common: derived$1,
  peers: {
    Popover: popoverLight
  },
  self: self$1b
});
const internalSelectionDark = {
  name: "InternalSelection",
  common: derived,
  peers: {
    Popover: popoverDark
  },
  self(vars) {
    const {
      borderRadius,
      textColor2,
      textColorDisabled,
      inputColor,
      inputColorDisabled,
      primaryColor,
      primaryColorHover,
      warningColor,
      warningColorHover,
      errorColor,
      errorColorHover,
      iconColor,
      iconColorDisabled,
      clearColor,
      clearColorHover,
      clearColorPressed,
      placeholderColor,
      placeholderColorDisabled,
      fontSizeTiny,
      fontSizeSmall,
      fontSizeMedium,
      fontSizeLarge,
      heightTiny,
      heightSmall,
      heightMedium,
      heightLarge
    } = vars;
    return Object.assign(Object.assign({}, commonVars$b), {
      fontSizeTiny,
      fontSizeSmall,
      fontSizeMedium,
      fontSizeLarge,
      heightTiny,
      heightSmall,
      heightMedium,
      heightLarge,
      borderRadius,
      // default
      textColor: textColor2,
      textColorDisabled,
      placeholderColor,
      placeholderColorDisabled,
      color: inputColor,
      colorDisabled: inputColorDisabled,
      colorActive: changeColor(primaryColor, {
        alpha: 0.1
      }),
      border: "1px solid #0000",
      borderHover: `1px solid ${primaryColorHover}`,
      borderActive: `1px solid ${primaryColor}`,
      borderFocus: `1px solid ${primaryColorHover}`,
      boxShadowHover: "none",
      boxShadowActive: `0 0 8px 0 ${changeColor(primaryColor, {
        alpha: 0.4
      })}`,
      boxShadowFocus: `0 0 8px 0 ${changeColor(primaryColor, {
        alpha: 0.4
      })}`,
      caretColor: primaryColor,
      arrowColor: iconColor,
      arrowColorDisabled: iconColorDisabled,
      loadingColor: primaryColor,
      // warning
      borderWarning: `1px solid ${warningColor}`,
      borderHoverWarning: `1px solid ${warningColorHover}`,
      borderActiveWarning: `1px solid ${warningColor}`,
      borderFocusWarning: `1px solid ${warningColorHover}`,
      boxShadowHoverWarning: "none",
      boxShadowActiveWarning: `0 0 8px 0 ${changeColor(warningColor, {
        alpha: 0.4
      })}`,
      boxShadowFocusWarning: `0 0 8px 0 ${changeColor(warningColor, {
        alpha: 0.4
      })}`,
      colorActiveWarning: changeColor(warningColor, {
        alpha: 0.1
      }),
      caretColorWarning: warningColor,
      // error
      borderError: `1px solid ${errorColor}`,
      borderHoverError: `1px solid ${errorColorHover}`,
      borderActiveError: `1px solid ${errorColor}`,
      borderFocusError: `1px solid ${errorColorHover}`,
      boxShadowHoverError: "none",
      boxShadowActiveError: `0 0 8px 0 ${changeColor(errorColor, {
        alpha: 0.4
      })}`,
      boxShadowFocusError: `0 0 8px 0 ${changeColor(errorColor, {
        alpha: 0.4
      })}`,
      colorActiveError: changeColor(errorColor, {
        alpha: 0.1
      }),
      caretColorError: errorColor,
      clearColor,
      clearColorHover,
      clearColorPressed
    });
  }
};
const SlotMachineNumber = defineComponent({
  name: "SlotMachineNumber",
  props: {
    clsPrefix: {
      type: String,
      required: true
    },
    value: {
      // could be '+', 1, 2, ...
      type: [Number, String],
      required: true
    },
    oldOriginalNumber: {
      type: Number,
      default: void 0
    },
    newOriginalNumber: {
      type: Number,
      default: void 0
    }
  },
  setup(props) {
    const numberRef = ref(null);
    const oldNumberRef = ref(props.value);
    const newNumberRef = ref(props.value);
    const scrollAnimationDirectionRef = ref("up");
    const activeRef = ref(false);
    const newNumberScrollAnimationClassRef = computed(() => {
      return activeRef.value ? `${props.clsPrefix}-base-slot-machine-current-number--${scrollAnimationDirectionRef.value}-scroll` : null;
    });
    const oldNumberScrollAnimationClassRef = computed(() => {
      return activeRef.value ? `${props.clsPrefix}-base-slot-machine-old-number--${scrollAnimationDirectionRef.value}-scroll` : null;
    });
    watch(toRef(props, "value"), (value, oldValue) => {
      oldNumberRef.value = oldValue;
      newNumberRef.value = value;
      void nextTick(scroll);
    });
    function scroll() {
      const newOriginalNumber = props.newOriginalNumber;
      const oldOriginalNumber = props.oldOriginalNumber;
      if (oldOriginalNumber === void 0 || newOriginalNumber === void 0) {
        return;
      }
      if (newOriginalNumber > oldOriginalNumber) {
        scrollByDir("up");
      } else if (oldOriginalNumber > newOriginalNumber) {
        scrollByDir("down");
      }
    }
    function scrollByDir(dir) {
      scrollAnimationDirectionRef.value = dir;
      activeRef.value = false;
      void nextTick(() => {
        var _a;
        void ((_a = numberRef.value) === null || _a === void 0 ? void 0 : _a.offsetWidth);
        activeRef.value = true;
      });
    }
    return () => {
      const {
        clsPrefix
      } = props;
      return h("span", {
        ref: numberRef,
        class: `${clsPrefix}-base-slot-machine-number`
      }, oldNumberRef.value !== null ? h("span", {
        class: [`${clsPrefix}-base-slot-machine-old-number ${clsPrefix}-base-slot-machine-old-number--top`, oldNumberScrollAnimationClassRef.value]
      }, oldNumberRef.value) : null, h("span", {
        class: [`${clsPrefix}-base-slot-machine-current-number`, newNumberScrollAnimationClassRef.value]
      }, h("span", {
        ref: "numberWrapper",
        class: [`${clsPrefix}-base-slot-machine-current-number__inner`, typeof props.value !== "number" && `${clsPrefix}-base-slot-machine-current-number__inner--not-number`]
      }, newNumberRef.value)), oldNumberRef.value !== null ? h("span", {
        class: [`${clsPrefix}-base-slot-machine-old-number ${clsPrefix}-base-slot-machine-old-number--bottom`, oldNumberScrollAnimationClassRef.value]
      }, oldNumberRef.value) : null);
    };
  }
});
const {
  cubicBezierEaseOut
} = commonVariables$k;
function fadeUpWidthExpandTransition({
  duration = ".2s"
} = {}) {
  return [c$1("&.fade-up-width-expand-transition-leave-active", {
    transition: `
 opacity ${duration} ${cubicBezierEaseOut},
 max-width ${duration} ${cubicBezierEaseOut},
 transform ${duration} ${cubicBezierEaseOut}
 `
  }), c$1("&.fade-up-width-expand-transition-enter-active", {
    transition: `
 opacity ${duration} ${cubicBezierEaseOut},
 max-width ${duration} ${cubicBezierEaseOut},
 transform ${duration} ${cubicBezierEaseOut}
 `
  }), c$1("&.fade-up-width-expand-transition-enter-to", {
    opacity: 1,
    transform: "translateX(0) translateY(0)"
  }), c$1("&.fade-up-width-expand-transition-enter-from", {
    maxWidth: "0 !important",
    opacity: 0,
    transform: "translateY(60%)"
  }), c$1("&.fade-up-width-expand-transition-leave-from", {
    opacity: 1,
    transform: "translateY(0)"
  }), c$1("&.fade-up-width-expand-transition-leave-to", {
    maxWidth: "0 !important",
    opacity: 0,
    transform: "translateY(60%)"
  })];
}
const style$l = c$1([c$1("@keyframes n-base-slot-machine-fade-up-in", `
 from {
 transform: translateY(60%);
 opacity: 0;
 }
 to {
 transform: translateY(0);
 opacity: 1;
 }
 `), c$1("@keyframes n-base-slot-machine-fade-down-in", `
 from {
 transform: translateY(-60%);
 opacity: 0;
 }
 to {
 transform: translateY(0);
 opacity: 1;
 }
 `), c$1("@keyframes n-base-slot-machine-fade-up-out", `
 from {
 transform: translateY(0%);
 opacity: 1;
 }
 to {
 transform: translateY(-60%);
 opacity: 0;
 }
 `), c$1("@keyframes n-base-slot-machine-fade-down-out", `
 from {
 transform: translateY(0%);
 opacity: 1;
 }
 to {
 transform: translateY(60%);
 opacity: 0;
 }
 `), cB("base-slot-machine", `
 overflow: hidden;
 white-space: nowrap;
 display: inline-block;
 height: 18px;
 line-height: 18px;
 `, [cB("base-slot-machine-number", `
 display: inline-block;
 position: relative;
 height: 18px;
 width: .6em;
 max-width: .6em;
 `, [
  fadeUpWidthExpandTransition({
    duration: ".2s"
  }),
  // use 0s, not 0
  fadeInWidthExpandTransition({
    duration: ".2s",
    delay: "0s"
  }),
  cB("base-slot-machine-old-number", `
 display: inline-block;
 opacity: 0;
 position: absolute;
 left: 0;
 right: 0;
 `, [cM("top", {
    transform: "translateY(-100%)"
  }), cM("bottom", {
    transform: "translateY(100%)"
  }), cM("down-scroll", {
    animation: "n-base-slot-machine-fade-down-out .2s cubic-bezier(0, 0, .2, 1)",
    animationIterationCount: 1
  }), cM("up-scroll", {
    animation: "n-base-slot-machine-fade-up-out .2s cubic-bezier(0, 0, .2, 1)",
    animationIterationCount: 1
  })]),
  cB("base-slot-machine-current-number", `
 display: inline-block;
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 right: 0;
 opacity: 1;
 transform: translateY(0);
 width: .6em;
 `, [cM("down-scroll", {
    animation: "n-base-slot-machine-fade-down-in .2s cubic-bezier(0, 0, .2, 1)",
    animationIterationCount: 1
  }), cM("up-scroll", {
    animation: "n-base-slot-machine-fade-up-in .2s cubic-bezier(0, 0, .2, 1)",
    animationIterationCount: 1
  }), cE("inner", `
 display: inline-block;
 position: absolute;
 right: 0;
 top: 0;
 width: .6em;
 `, [cM("not-number", `
 right: unset;
 left: 0;
 `)])])
])])]);
const NBaseSlotMachine = defineComponent({
  name: "BaseSlotMachine",
  props: {
    clsPrefix: {
      type: String,
      required: true
    },
    value: {
      type: [Number, String],
      default: 0
    },
    max: {
      type: Number,
      default: void 0
    },
    appeared: {
      type: Boolean,
      required: true
    }
  },
  setup(props) {
    useStyle("-base-slot-machine", style$l, toRef(props, "clsPrefix"));
    const oldValueRef = ref();
    const newValueRef = ref();
    const numbersRef = computed(() => {
      if (typeof props.value === "string")
        return [];
      if (props.value < 1)
        return [0];
      const numbers = [];
      let value = props.value;
      if (props.max !== void 0) {
        value = Math.min(props.max, value);
      }
      while (value >= 1) {
        numbers.push(value % 10);
        value /= 10;
        value = Math.floor(value);
      }
      numbers.reverse();
      return numbers;
    });
    watch(toRef(props, "value"), (value, oldValue) => {
      if (typeof value === "string") {
        newValueRef.value = void 0;
        oldValueRef.value = void 0;
      } else {
        if (typeof oldValue === "string") {
          newValueRef.value = value;
          oldValueRef.value = void 0;
        } else {
          newValueRef.value = value;
          oldValueRef.value = oldValue;
        }
      }
    });
    return () => {
      const {
        value,
        clsPrefix
      } = props;
      return typeof value === "number" ? h("span", {
        class: `${clsPrefix}-base-slot-machine`
      }, h(TransitionGroup, {
        name: "fade-up-width-expand-transition",
        tag: "span"
      }, {
        default: () => numbersRef.value.map((number, i2) => h(SlotMachineNumber, {
          clsPrefix,
          key: numbersRef.value.length - i2 - 1,
          oldOriginalNumber: oldValueRef.value,
          newOriginalNumber: newValueRef.value,
          value: number
        }))
      }), h(NFadeInExpandTransition, {
        key: "+",
        width: true
      }, {
        default: () => props.max !== void 0 && props.max < value ? h(SlotMachineNumber, {
          clsPrefix,
          value: "+"
        }) : null
      })) : h("span", {
        class: `${clsPrefix}-base-slot-machine`
      }, value);
    };
  }
});
const commonVars$a = {
  iconMargin: "11px 8px 0 12px",
  iconMarginRtl: "11px 12px 0 8px",
  iconSize: "24px",
  closeIconSize: "16px",
  closeSize: "20px",
  closeMargin: "13px 14px 0 0",
  closeMarginRtl: "13px 0 0 14px",
  padding: "13px"
};
const alertDark = {
  name: "Alert",
  common: derived,
  self(vars) {
    const {
      lineHeight,
      borderRadius,
      fontWeightStrong,
      dividerColor,
      inputColor,
      textColor1,
      textColor2,
      closeColorHover,
      closeColorPressed,
      closeIconColor,
      closeIconColorHover,
      closeIconColorPressed,
      infoColorSuppl,
      successColorSuppl,
      warningColorSuppl,
      errorColorSuppl,
      fontSize
    } = vars;
    return Object.assign(Object.assign({}, commonVars$a), {
      fontSize,
      lineHeight,
      titleFontWeight: fontWeightStrong,
      borderRadius,
      border: `1px solid ${dividerColor}`,
      color: inputColor,
      titleTextColor: textColor1,
      iconColor: textColor2,
      contentTextColor: textColor2,
      closeBorderRadius: borderRadius,
      closeColorHover,
      closeColorPressed,
      closeIconColor,
      closeIconColorHover,
      closeIconColorPressed,
      borderInfo: `1px solid ${changeColor(infoColorSuppl, {
        alpha: 0.35
      })}`,
      colorInfo: changeColor(infoColorSuppl, {
        alpha: 0.25
      }),
      titleTextColorInfo: textColor1,
      iconColorInfo: infoColorSuppl,
      contentTextColorInfo: textColor2,
      closeColorHoverInfo: closeColorHover,
      closeColorPressedInfo: closeColorPressed,
      closeIconColorInfo: closeIconColor,
      closeIconColorHoverInfo: closeIconColorHover,
      closeIconColorPressedInfo: closeIconColorPressed,
      borderSuccess: `1px solid ${changeColor(successColorSuppl, {
        alpha: 0.35
      })}`,
      colorSuccess: changeColor(successColorSuppl, {
        alpha: 0.25
      }),
      titleTextColorSuccess: textColor1,
      iconColorSuccess: successColorSuppl,
      contentTextColorSuccess: textColor2,
      closeColorHoverSuccess: closeColorHover,
      closeColorPressedSuccess: closeColorPressed,
      closeIconColorSuccess: closeIconColor,
      closeIconColorHoverSuccess: closeIconColorHover,
      closeIconColorPressedSuccess: closeIconColorPressed,
      borderWarning: `1px solid ${changeColor(warningColorSuppl, {
        alpha: 0.35
      })}`,
      colorWarning: changeColor(warningColorSuppl, {
        alpha: 0.25
      }),
      titleTextColorWarning: textColor1,
      iconColorWarning: warningColorSuppl,
      contentTextColorWarning: textColor2,
      closeColorHoverWarning: closeColorHover,
      closeColorPressedWarning: closeColorPressed,
      closeIconColorWarning: closeIconColor,
      closeIconColorHoverWarning: closeIconColorHover,
      closeIconColorPressedWarning: closeIconColorPressed,
      borderError: `1px solid ${changeColor(errorColorSuppl, {
        alpha: 0.35
      })}`,
      colorError: changeColor(errorColorSuppl, {
        alpha: 0.25
      }),
      titleTextColorError: textColor1,
      iconColorError: errorColorSuppl,
      contentTextColorError: textColor2,
      closeColorHoverError: closeColorHover,
      closeColorPressedError: closeColorPressed,
      closeIconColorError: closeIconColor,
      closeIconColorHoverError: closeIconColorHover,
      closeIconColorPressedError: closeIconColorPressed
    });
  }
};
const self$1a = (vars) => {
  const {
    lineHeight,
    borderRadius,
    fontWeightStrong,
    baseColor,
    dividerColor,
    actionColor,
    textColor1,
    textColor2,
    closeColorHover,
    closeColorPressed,
    closeIconColor,
    closeIconColorHover,
    closeIconColorPressed,
    infoColor,
    successColor,
    warningColor,
    errorColor,
    fontSize
  } = vars;
  return Object.assign(Object.assign({}, commonVars$a), {
    fontSize,
    lineHeight,
    titleFontWeight: fontWeightStrong,
    borderRadius,
    border: `1px solid ${dividerColor}`,
    color: actionColor,
    titleTextColor: textColor1,
    iconColor: textColor2,
    contentTextColor: textColor2,
    closeBorderRadius: borderRadius,
    closeColorHover,
    closeColorPressed,
    closeIconColor,
    closeIconColorHover,
    closeIconColorPressed,
    borderInfo: `1px solid ${composite(baseColor, changeColor(infoColor, {
      alpha: 0.25
    }))}`,
    colorInfo: composite(baseColor, changeColor(infoColor, {
      alpha: 0.08
    })),
    titleTextColorInfo: textColor1,
    iconColorInfo: infoColor,
    contentTextColorInfo: textColor2,
    closeColorHoverInfo: closeColorHover,
    closeColorPressedInfo: closeColorPressed,
    closeIconColorInfo: closeIconColor,
    closeIconColorHoverInfo: closeIconColorHover,
    closeIconColorPressedInfo: closeIconColorPressed,
    borderSuccess: `1px solid ${composite(baseColor, changeColor(successColor, {
      alpha: 0.25
    }))}`,
    colorSuccess: composite(baseColor, changeColor(successColor, {
      alpha: 0.08
    })),
    titleTextColorSuccess: textColor1,
    iconColorSuccess: successColor,
    contentTextColorSuccess: textColor2,
    closeColorHoverSuccess: closeColorHover,
    closeColorPressedSuccess: closeColorPressed,
    closeIconColorSuccess: closeIconColor,
    closeIconColorHoverSuccess: closeIconColorHover,
    closeIconColorPressedSuccess: closeIconColorPressed,
    borderWarning: `1px solid ${composite(baseColor, changeColor(warningColor, {
      alpha: 0.33
    }))}`,
    colorWarning: composite(baseColor, changeColor(warningColor, {
      alpha: 0.08
    })),
    titleTextColorWarning: textColor1,
    iconColorWarning: warningColor,
    contentTextColorWarning: textColor2,
    closeColorHoverWarning: closeColorHover,
    closeColorPressedWarning: closeColorPressed,
    closeIconColorWarning: closeIconColor,
    closeIconColorHoverWarning: closeIconColorHover,
    closeIconColorPressedWarning: closeIconColorPressed,
    borderError: `1px solid ${composite(baseColor, changeColor(errorColor, {
      alpha: 0.25
    }))}`,
    colorError: composite(baseColor, changeColor(errorColor, {
      alpha: 0.08
    })),
    titleTextColorError: textColor1,
    iconColorError: errorColor,
    contentTextColorError: textColor2,
    closeColorHoverError: closeColorHover,
    closeColorPressedError: closeColorPressed,
    closeIconColorError: closeIconColor,
    closeIconColorHoverError: closeIconColorHover,
    closeIconColorPressedError: closeIconColorPressed
  });
};
const alertLight = {
  name: "Alert",
  common: derived$1,
  self: self$1a
};
const commonVars$9 = {
  linkFontSize: "13px",
  linkPadding: "0 0 0 16px",
  railWidth: "4px"
};
const self$19 = (vars) => {
  const {
    borderRadius,
    railColor,
    primaryColor,
    primaryColorHover,
    primaryColorPressed,
    textColor2
  } = vars;
  return Object.assign(Object.assign({}, commonVars$9), {
    borderRadius,
    railColor,
    railColorActive: primaryColor,
    linkColor: changeColor(primaryColor, {
      alpha: 0.15
    }),
    linkTextColor: textColor2,
    linkTextColorHover: primaryColorHover,
    linkTextColorPressed: primaryColorPressed,
    linkTextColorActive: primaryColor
  });
};
const anchorLight = {
  name: "Anchor",
  common: derived$1,
  self: self$19
};
const anchorDark = {
  name: "Anchor",
  common: derived,
  self: self$19
};
const commonVariables$h = {
  paddingTiny: "0 8px",
  paddingSmall: "0 10px",
  paddingMedium: "0 12px",
  paddingLarge: "0 14px",
  clearSize: "16px"
};
const inputDark = {
  name: "Input",
  common: derived,
  self(vars) {
    const {
      textColor2,
      textColor3,
      textColorDisabled,
      primaryColor,
      primaryColorHover,
      inputColor,
      inputColorDisabled,
      warningColor,
      warningColorHover,
      errorColor,
      errorColorHover,
      borderRadius,
      lineHeight,
      fontSizeTiny,
      fontSizeSmall,
      fontSizeMedium,
      fontSizeLarge,
      heightTiny,
      heightSmall,
      heightMedium,
      heightLarge,
      clearColor,
      clearColorHover,
      clearColorPressed,
      placeholderColor,
      placeholderColorDisabled,
      iconColor,
      iconColorDisabled,
      iconColorHover,
      iconColorPressed
    } = vars;
    return Object.assign(Object.assign({}, commonVariables$h), {
      countTextColorDisabled: textColorDisabled,
      countTextColor: textColor3,
      heightTiny,
      heightSmall,
      heightMedium,
      heightLarge,
      fontSizeTiny,
      fontSizeSmall,
      fontSizeMedium,
      fontSizeLarge,
      lineHeight,
      lineHeightTextarea: lineHeight,
      borderRadius,
      iconSize: "16px",
      groupLabelColor: inputColor,
      textColor: textColor2,
      textColorDisabled,
      textDecorationColor: textColor2,
      groupLabelTextColor: textColor2,
      caretColor: primaryColor,
      placeholderColor,
      placeholderColorDisabled,
      color: inputColor,
      colorDisabled: inputColorDisabled,
      colorFocus: changeColor(primaryColor, {
        alpha: 0.1
      }),
      groupLabelBorder: "1px solid #0000",
      border: "1px solid #0000",
      borderHover: `1px solid ${primaryColorHover}`,
      borderDisabled: "1px solid #0000",
      borderFocus: `1px solid ${primaryColorHover}`,
      boxShadowFocus: `0 0 8px 0 ${changeColor(primaryColor, {
        alpha: 0.3
      })}`,
      loadingColor: primaryColor,
      // warning
      loadingColorWarning: warningColor,
      borderWarning: `1px solid ${warningColor}`,
      borderHoverWarning: `1px solid ${warningColorHover}`,
      colorFocusWarning: changeColor(warningColor, {
        alpha: 0.1
      }),
      borderFocusWarning: `1px solid ${warningColorHover}`,
      boxShadowFocusWarning: `0 0 8px 0 ${changeColor(warningColor, {
        alpha: 0.3
      })}`,
      caretColorWarning: warningColor,
      // error
      loadingColorError: errorColor,
      borderError: `1px solid ${errorColor}`,
      borderHoverError: `1px solid ${errorColorHover}`,
      colorFocusError: changeColor(errorColor, {
        alpha: 0.1
      }),
      borderFocusError: `1px solid ${errorColorHover}`,
      boxShadowFocusError: `0 0 8px 0 ${changeColor(errorColor, {
        alpha: 0.3
      })}`,
      caretColorError: errorColor,
      clearColor,
      clearColorHover,
      clearColorPressed,
      iconColor,
      iconColorDisabled,
      iconColorHover,
      iconColorPressed,
      suffixTextColor: textColor2
    });
  }
};
const self$18 = (vars) => {
  const {
    textColor2,
    textColor3,
    textColorDisabled,
    primaryColor,
    primaryColorHover,
    inputColor,
    inputColorDisabled,
    borderColor,
    warningColor,
    warningColorHover,
    errorColor,
    errorColorHover,
    borderRadius,
    lineHeight,
    fontSizeTiny,
    fontSizeSmall,
    fontSizeMedium,
    fontSizeLarge,
    heightTiny,
    heightSmall,
    heightMedium,
    heightLarge,
    actionColor,
    clearColor,
    clearColorHover,
    clearColorPressed,
    placeholderColor,
    placeholderColorDisabled,
    iconColor,
    iconColorDisabled,
    iconColorHover,
    iconColorPressed
  } = vars;
  return Object.assign(Object.assign({}, commonVariables$h), {
    countTextColorDisabled: textColorDisabled,
    countTextColor: textColor3,
    heightTiny,
    heightSmall,
    heightMedium,
    heightLarge,
    fontSizeTiny,
    fontSizeSmall,
    fontSizeMedium,
    fontSizeLarge,
    lineHeight,
    lineHeightTextarea: lineHeight,
    borderRadius,
    iconSize: "16px",
    groupLabelColor: actionColor,
    groupLabelTextColor: textColor2,
    textColor: textColor2,
    textColorDisabled,
    textDecorationColor: textColor2,
    caretColor: primaryColor,
    placeholderColor,
    placeholderColorDisabled,
    color: inputColor,
    colorDisabled: inputColorDisabled,
    colorFocus: inputColor,
    groupLabelBorder: `1px solid ${borderColor}`,
    border: `1px solid ${borderColor}`,
    borderHover: `1px solid ${primaryColorHover}`,
    borderDisabled: `1px solid ${borderColor}`,
    borderFocus: `1px solid ${primaryColorHover}`,
    boxShadowFocus: `0 0 0 2px ${changeColor(primaryColor, {
      alpha: 0.2
    })}`,
    loadingColor: primaryColor,
    // warning
    loadingColorWarning: warningColor,
    borderWarning: `1px solid ${warningColor}`,
    borderHoverWarning: `1px solid ${warningColorHover}`,
    colorFocusWarning: inputColor,
    borderFocusWarning: `1px solid ${warningColorHover}`,
    boxShadowFocusWarning: `0 0 0 2px ${changeColor(warningColor, {
      alpha: 0.2
    })}`,
    caretColorWarning: warningColor,
    // error
    loadingColorError: errorColor,
    borderError: `1px solid ${errorColor}`,
    borderHoverError: `1px solid ${errorColorHover}`,
    colorFocusError: inputColor,
    borderFocusError: `1px solid ${errorColorHover}`,
    boxShadowFocusError: `0 0 0 2px ${changeColor(errorColor, {
      alpha: 0.2
    })}`,
    caretColorError: errorColor,
    clearColor,
    clearColorHover,
    clearColorPressed,
    iconColor,
    iconColorDisabled,
    iconColorHover,
    iconColorPressed,
    suffixTextColor: textColor2
  });
};
const inputLight = {
  name: "Input",
  common: derived$1,
  self: self$18
};
const inputInjectionKey = createInjectionKey("n-input");
function len(s3) {
  let count = 0;
  for (const _ of s3) {
    count++;
  }
  return count;
}
function isEmptyInputValue(value) {
  return value === "" || value == null;
}
function useCursor(inputElRef) {
  const selectionRef = ref(null);
  function recordCursor() {
    const {
      value: input
    } = inputElRef;
    if (!(input === null || input === void 0 ? void 0 : input.focus)) {
      reset();
      return;
    }
    const {
      selectionStart,
      selectionEnd,
      value
    } = input;
    if (selectionStart == null || selectionEnd == null) {
      reset();
      return;
    }
    selectionRef.value = {
      start: selectionStart,
      end: selectionEnd,
      beforeText: value.slice(0, selectionStart),
      afterText: value.slice(selectionEnd)
    };
  }
  function restoreCursor() {
    var _a;
    const {
      value: selection
    } = selectionRef;
    const {
      value: inputEl
    } = inputElRef;
    if (!selection || !inputEl) {
      return;
    }
    const {
      value
    } = inputEl;
    const {
      start,
      beforeText,
      afterText
    } = selection;
    let startPos = value.length;
    if (value.endsWith(afterText)) {
      startPos = value.length - afterText.length;
    } else if (value.startsWith(beforeText)) {
      startPos = beforeText.length;
    } else {
      const beforeLastChar = beforeText[start - 1];
      const newIndex = value.indexOf(beforeLastChar, start - 1);
      if (newIndex !== -1) {
        startPos = newIndex + 1;
      }
    }
    (_a = inputEl.setSelectionRange) === null || _a === void 0 ? void 0 : _a.call(inputEl, startPos, startPos);
  }
  function reset() {
    selectionRef.value = null;
  }
  watch(inputElRef, reset);
  return {
    recordCursor,
    restoreCursor
  };
}
const WordCount = defineComponent({
  name: "InputWordCount",
  setup(_, {
    slots
  }) {
    const {
      mergedValueRef,
      maxlengthRef,
      mergedClsPrefixRef,
      countGraphemesRef
    } = (
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      inject(inputInjectionKey)
    );
    const wordCountRef = computed(() => {
      const {
        value: mergedValue
      } = mergedValueRef;
      if (mergedValue === null || Array.isArray(mergedValue))
        return 0;
      return (countGraphemesRef.value || len)(mergedValue);
    });
    return () => {
      const {
        value: maxlength
      } = maxlengthRef;
      const {
        value: mergedValue
      } = mergedValueRef;
      return h("span", {
        class: `${mergedClsPrefixRef.value}-input-word-count`
      }, resolveSlotWithProps(slots.default, {
        value: mergedValue === null || Array.isArray(mergedValue) ? "" : mergedValue
      }, () => [maxlength === void 0 ? wordCountRef.value : `${wordCountRef.value} / ${maxlength}`]));
    };
  }
});
const style$k = cB("input", `
 max-width: 100%;
 cursor: text;
 line-height: 1.5;
 z-index: auto;
 outline: none;
 box-sizing: border-box;
 position: relative;
 display: inline-flex;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 transition: background-color .3s var(--n-bezier);
 font-size: var(--n-font-size);
 --n-padding-vertical: calc((var(--n-height) - 1.5 * var(--n-font-size)) / 2);
`, [
  // common
  cE("input, textarea", `
 overflow: hidden;
 flex-grow: 1;
 position: relative;
 `),
  cE("input-el, textarea-el, input-mirror, textarea-mirror, separator, placeholder", `
 box-sizing: border-box;
 font-size: inherit;
 line-height: 1.5;
 font-family: inherit;
 border: none;
 outline: none;
 background-color: #0000;
 text-align: inherit;
 transition:
 -webkit-text-fill-color .3s var(--n-bezier),
 caret-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 text-decoration-color .3s var(--n-bezier);
 `),
  cE("input-el, textarea-el", `
 -webkit-appearance: none;
 scrollbar-width: none;
 width: 100%;
 min-width: 0;
 text-decoration-color: var(--n-text-decoration-color);
 color: var(--n-text-color);
 caret-color: var(--n-caret-color);
 background-color: transparent;
 `, [c$1("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb", `
 width: 0;
 height: 0;
 display: none;
 `), c$1("&::placeholder", `
 color: #0000;
 -webkit-text-fill-color: transparent !important;
 `), c$1("&:-webkit-autofill ~", [cE("placeholder", "display: none;")])]),
  cM("round", [cNotM("textarea", "border-radius: calc(var(--n-height) / 2);")]),
  cE("placeholder", `
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 overflow: hidden;
 color: var(--n-placeholder-color);
 `, [c$1("span", `
 width: 100%;
 display: inline-block;
 `)]),
  cM("textarea", [cE("placeholder", "overflow: visible;")]),
  cNotM("autosize", "width: 100%;"),
  cM("autosize", [cE("textarea-el, input-el", `
 position: absolute;
 top: 0;
 left: 0;
 height: 100%;
 `)]),
  // input
  cB("input-wrapper", `
 overflow: hidden;
 display: inline-flex;
 flex-grow: 1;
 position: relative;
 padding-left: var(--n-padding-left);
 padding-right: var(--n-padding-right);
 `),
  cE("input-mirror", `
 padding: 0;
 height: var(--n-height);
 line-height: var(--n-height);
 overflow: hidden;
 visibility: hidden;
 position: static;
 white-space: pre;
 pointer-events: none;
 `),
  cE("input-el", `
 padding: 0;
 height: var(--n-height);
 line-height: var(--n-height);
 `, [c$1("&[type=password]::-ms-reveal", "display: none;"), c$1("+", [cE("placeholder", `
 display: flex;
 align-items: center; 
 `)])]),
  cNotM("textarea", [cE("placeholder", "white-space: nowrap;")]),
  cE("eye", `
 display: flex;
 align-items: center;
 justify-content: center;
 transition: color .3s var(--n-bezier);
 `),
  // textarea
  cM("textarea", "width: 100%;", [cB("input-word-count", `
 position: absolute;
 right: var(--n-padding-right);
 bottom: var(--n-padding-vertical);
 `), cM("resizable", [cB("input-wrapper", `
 resize: vertical;
 min-height: var(--n-height);
 `)]), cE("textarea-el, textarea-mirror, placeholder", `
 height: 100%;
 padding-left: 0;
 padding-right: 0;
 padding-top: var(--n-padding-vertical);
 padding-bottom: var(--n-padding-vertical);
 word-break: break-word;
 display: inline-block;
 vertical-align: bottom;
 box-sizing: border-box;
 line-height: var(--n-line-height-textarea);
 margin: 0;
 resize: none;
 white-space: pre-wrap;
 scroll-padding-block-end: var(--n-padding-vertical);
 `), cE("textarea-mirror", `
 width: 100%;
 pointer-events: none;
 overflow: hidden;
 visibility: hidden;
 position: static;
 white-space: pre-wrap;
 overflow-wrap: break-word;
 `)]),
  // pair
  cM("pair", [cE("input-el, placeholder", "text-align: center;"), cE("separator", `
 display: flex;
 align-items: center;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 white-space: nowrap;
 `, [cB("icon", `
 color: var(--n-icon-color);
 `), cB("base-icon", `
 color: var(--n-icon-color);
 `)])]),
  cM("disabled", `
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `, [cE("border", "border: var(--n-border-disabled);"), cE("input-el, textarea-el", `
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 text-decoration-color: var(--n-text-color-disabled);
 `), cE("placeholder", "color: var(--n-placeholder-color-disabled);"), cE("separator", "color: var(--n-text-color-disabled);", [cB("icon", `
 color: var(--n-icon-color-disabled);
 `), cB("base-icon", `
 color: var(--n-icon-color-disabled);
 `)]), cB("input-word-count", `
 color: var(--n-count-text-color-disabled);
 `), cE("suffix, prefix", "color: var(--n-text-color-disabled);", [cB("icon", `
 color: var(--n-icon-color-disabled);
 `), cB("internal-icon", `
 color: var(--n-icon-color-disabled);
 `)])]),
  cNotM("disabled", [cE("eye", `
 color: var(--n-icon-color);
 cursor: pointer;
 `, [c$1("&:hover", `
 color: var(--n-icon-color-hover);
 `), c$1("&:active", `
 color: var(--n-icon-color-pressed);
 `)]), c$1("&:hover", [cE("state-border", "border: var(--n-border-hover);")]), cM("focus", "background-color: var(--n-color-focus);", [cE("state-border", `
 border: var(--n-border-focus);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),
  cE("border, state-border", `
 box-sizing: border-box;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border-radius: inherit;
 border: var(--n-border);
 transition:
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `),
  cE("state-border", `
 border-color: #0000;
 z-index: 1;
 `),
  cE("prefix", "margin-right: 4px;"),
  cE("suffix", `
 margin-left: 4px;
 `),
  cE("suffix, prefix", `
 transition: color .3s var(--n-bezier);
 flex-wrap: nowrap;
 flex-shrink: 0;
 line-height: var(--n-height);
 white-space: nowrap;
 display: inline-flex;
 align-items: center;
 justify-content: center;
 color: var(--n-suffix-text-color);
 `, [cB("base-loading", `
 font-size: var(--n-icon-size);
 margin: 0 2px;
 color: var(--n-loading-color);
 `), cB("base-clear", `
 font-size: var(--n-icon-size);
 `, [cE("placeholder", [cB("base-icon", `
 transition: color .3s var(--n-bezier);
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 `)])]), c$1(">", [cB("icon", `
 transition: color .3s var(--n-bezier);
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 `)]), cB("base-icon", `
 font-size: var(--n-icon-size);
 `)]),
  cB("input-word-count", `
 pointer-events: none;
 line-height: 1.5;
 font-size: .85em;
 color: var(--n-count-text-color);
 transition: color .3s var(--n-bezier);
 margin-left: 4px;
 font-variant: tabular-nums;
 `),
  ["warning", "error"].map((status) => cM(`${status}-status`, [cNotM("disabled", [cB("base-loading", `
 color: var(--n-loading-color-${status})
 `), cE("input-el, textarea-el", `
 caret-color: var(--n-caret-color-${status});
 `), cE("state-border", `
 border: var(--n-border-${status});
 `), c$1("&:hover", [cE("state-border", `
 border: var(--n-border-hover-${status});
 `)]), c$1("&:focus", `
 background-color: var(--n-color-focus-${status});
 `, [cE("state-border", `
 box-shadow: var(--n-box-shadow-focus-${status});
 border: var(--n-border-focus-${status});
 `)]), cM("focus", `
 background-color: var(--n-color-focus-${status});
 `, [cE("state-border", `
 box-shadow: var(--n-box-shadow-focus-${status});
 border: var(--n-border-focus-${status});
 `)])])]))
]);
cB("input", [cM("disabled", [cE("input-el, textarea-el", `
 -webkit-text-fill-color: var(--n-text-color-disabled);
 `)])]);
const inputProps = Object.assign(Object.assign({}, useTheme.props), {
  bordered: {
    type: Boolean,
    default: void 0
  },
  type: {
    type: String,
    default: "text"
  },
  placeholder: [Array, String],
  defaultValue: {
    type: [String, Array],
    default: null
  },
  value: [String, Array],
  disabled: {
    type: Boolean,
    default: void 0
  },
  size: String,
  rows: {
    type: [Number, String],
    default: 3
  },
  round: Boolean,
  minlength: [String, Number],
  maxlength: [String, Number],
  clearable: Boolean,
  autosize: {
    type: [Boolean, Object],
    default: false
  },
  pair: Boolean,
  separator: String,
  readonly: {
    type: [String, Boolean],
    default: false
  },
  passivelyActivated: Boolean,
  showPasswordOn: String,
  stateful: {
    type: Boolean,
    default: true
  },
  autofocus: Boolean,
  inputProps: Object,
  resizable: {
    type: Boolean,
    default: true
  },
  showCount: Boolean,
  loading: {
    type: Boolean,
    default: void 0
  },
  allowInput: Function,
  renderCount: Function,
  onMousedown: Function,
  onKeydown: Function,
  onKeyup: [Function, Array],
  onInput: [Function, Array],
  onFocus: [Function, Array],
  onBlur: [Function, Array],
  onClick: [Function, Array],
  onChange: [Function, Array],
  onClear: [Function, Array],
  countGraphemes: Function,
  status: String,
  "onUpdate:value": [Function, Array],
  onUpdateValue: [Function, Array],
  /** private */
  textDecoration: [String, Array],
  attrSize: {
    type: Number,
    default: 20
  },
  onInputBlur: [Function, Array],
  onInputFocus: [Function, Array],
  onDeactivate: [Function, Array],
  onActivate: [Function, Array],
  onWrapperFocus: [Function, Array],
  onWrapperBlur: [Function, Array],
  internalDeactivateOnEnter: Boolean,
  internalForceFocus: Boolean,
  internalLoadingBeforeSuffix: {
    type: Boolean,
    default: true
  },
  /** deprecated */
  showPasswordToggle: Boolean
});
const __nuxt_component_3 = defineComponent({
  name: "Input",
  props: inputProps,
  setup(props) {
    if (process.env.NODE_ENV !== "production") {
      watchEffect(() => {
        if (props.showPasswordToggle) {
          warnOnce("input", '`show-password-toggle` is deprecated, please use `showPasswordOn="click"` instead');
        }
      });
    }
    const {
      mergedClsPrefixRef,
      mergedBorderedRef,
      inlineThemeDisabled,
      mergedRtlRef
    } = useConfig(props);
    const themeRef = useTheme("Input", "-input", style$k, inputLight, props, mergedClsPrefixRef);
    const wrapperElRef = ref(null);
    const textareaElRef = ref(null);
    const textareaMirrorElRef = ref(null);
    const inputMirrorElRef = ref(null);
    const inputElRef = ref(null);
    const inputEl2Ref = ref(null);
    const currentFocusedInputRef = ref(null);
    const focusedInputCursorControl = useCursor(currentFocusedInputRef);
    const textareaScrollbarInstRef = ref(null);
    const {
      localeRef
    } = useLocale("Input");
    const uncontrolledValueRef = ref(props.defaultValue);
    const controlledValueRef = toRef(props, "value");
    const mergedValueRef = useMergedState(controlledValueRef, uncontrolledValueRef);
    const formItem = useFormItem(props);
    const {
      mergedSizeRef,
      mergedDisabledRef,
      mergedStatusRef
    } = formItem;
    const focusedRef = ref(false);
    const hoverRef = ref(false);
    const isComposingRef = ref(false);
    const activatedRef = ref(false);
    let syncSource = null;
    const mergedPlaceholderRef = computed(() => {
      const {
        placeholder,
        pair
      } = props;
      if (pair) {
        if (Array.isArray(placeholder)) {
          return placeholder;
        } else if (placeholder === void 0) {
          return ["", ""];
        }
        return [placeholder, placeholder];
      } else if (placeholder === void 0) {
        return [localeRef.value.placeholder];
      } else {
        return [placeholder];
      }
    });
    const showPlaceholder1Ref = computed(() => {
      const {
        value: isComposing
      } = isComposingRef;
      const {
        value: mergedValue
      } = mergedValueRef;
      const {
        value: mergedPlaceholder
      } = mergedPlaceholderRef;
      return !isComposing && (isEmptyInputValue(mergedValue) || Array.isArray(mergedValue) && isEmptyInputValue(mergedValue[0])) && mergedPlaceholder[0];
    });
    const showPlaceholder2Ref = computed(() => {
      const {
        value: isComposing
      } = isComposingRef;
      const {
        value: mergedValue
      } = mergedValueRef;
      const {
        value: mergedPlaceholder
      } = mergedPlaceholderRef;
      return !isComposing && mergedPlaceholder[1] && (isEmptyInputValue(mergedValue) || Array.isArray(mergedValue) && isEmptyInputValue(mergedValue[1]));
    });
    const mergedFocusRef = useMemo(() => {
      return props.internalForceFocus || focusedRef.value;
    });
    const showClearButton = useMemo(() => {
      if (mergedDisabledRef.value || props.readonly || !props.clearable || !mergedFocusRef.value && !hoverRef.value) {
        return false;
      }
      const {
        value: mergedValue
      } = mergedValueRef;
      const {
        value: mergedFocus
      } = mergedFocusRef;
      if (props.pair) {
        return !!(Array.isArray(mergedValue) && (mergedValue[0] || mergedValue[1])) && (hoverRef.value || mergedFocus);
      } else {
        return !!mergedValue && (hoverRef.value || mergedFocus);
      }
    });
    const mergedShowPasswordOnRef = computed(() => {
      const {
        showPasswordOn
      } = props;
      if (showPasswordOn) {
        return showPasswordOn;
      }
      if (props.showPasswordToggle)
        return "click";
      return void 0;
    });
    const passwordVisibleRef = ref(false);
    const textDecorationStyleRef = computed(() => {
      const {
        textDecoration
      } = props;
      if (!textDecoration)
        return ["", ""];
      if (Array.isArray(textDecoration)) {
        return textDecoration.map((v) => ({
          textDecoration: v
        }));
      }
      return [{
        textDecoration
      }];
    });
    const textAreaScrollContainerWidthRef = ref(void 0);
    const updateTextAreaStyle = () => {
      var _a, _b;
      if (props.type === "textarea") {
        const {
          autosize
        } = props;
        if (autosize) {
          textAreaScrollContainerWidthRef.value = (_b = (_a = textareaScrollbarInstRef.value) === null || _a === void 0 ? void 0 : _a.$el) === null || _b === void 0 ? void 0 : _b.offsetWidth;
        }
        if (!textareaElRef.value)
          return;
        if (typeof autosize === "boolean")
          return;
        const {
          paddingTop: stylePaddingTop,
          paddingBottom: stylePaddingBottom,
          lineHeight: styleLineHeight
        } = (void 0).getComputedStyle(textareaElRef.value);
        const paddingTop = Number(stylePaddingTop.slice(0, -2));
        const paddingBottom = Number(stylePaddingBottom.slice(0, -2));
        const lineHeight = Number(styleLineHeight.slice(0, -2));
        const {
          value: textareaMirrorEl
        } = textareaMirrorElRef;
        if (!textareaMirrorEl)
          return;
        if (autosize.minRows) {
          const minRows = Math.max(autosize.minRows, 1);
          const styleMinHeight = `${paddingTop + paddingBottom + lineHeight * minRows}px`;
          textareaMirrorEl.style.minHeight = styleMinHeight;
        }
        if (autosize.maxRows) {
          const styleMaxHeight = `${paddingTop + paddingBottom + lineHeight * autosize.maxRows}px`;
          textareaMirrorEl.style.maxHeight = styleMaxHeight;
        }
      }
    };
    const maxlengthRef = computed(() => {
      const {
        maxlength
      } = props;
      return maxlength === void 0 ? void 0 : Number(maxlength);
    });
    const vm = getCurrentInstance().proxy;
    function doUpdateValue(value, meta) {
      const {
        onUpdateValue,
        "onUpdate:value": _onUpdateValue,
        onInput
      } = props;
      const {
        nTriggerFormInput
      } = formItem;
      if (onUpdateValue)
        call(onUpdateValue, value, meta);
      if (_onUpdateValue)
        call(_onUpdateValue, value, meta);
      if (onInput)
        call(onInput, value, meta);
      uncontrolledValueRef.value = value;
      nTriggerFormInput();
    }
    function doChange(value, meta) {
      const {
        onChange
      } = props;
      const {
        nTriggerFormChange
      } = formItem;
      if (onChange)
        call(onChange, value, meta);
      uncontrolledValueRef.value = value;
      nTriggerFormChange();
    }
    function doBlur(e2) {
      const {
        onBlur
      } = props;
      const {
        nTriggerFormBlur
      } = formItem;
      if (onBlur)
        call(onBlur, e2);
      nTriggerFormBlur();
    }
    function doFocus(e2) {
      const {
        onFocus
      } = props;
      const {
        nTriggerFormFocus
      } = formItem;
      if (onFocus)
        call(onFocus, e2);
      nTriggerFormFocus();
    }
    function doClear(e2) {
      const {
        onClear
      } = props;
      if (onClear)
        call(onClear, e2);
    }
    function doUpdateValueBlur(e2) {
      const {
        onInputBlur
      } = props;
      if (onInputBlur)
        call(onInputBlur, e2);
    }
    function doUpdateValueFocus(e2) {
      const {
        onInputFocus
      } = props;
      if (onInputFocus)
        call(onInputFocus, e2);
    }
    function doDeactivate() {
      const {
        onDeactivate
      } = props;
      if (onDeactivate)
        call(onDeactivate);
    }
    function doActivate() {
      const {
        onActivate
      } = props;
      if (onActivate)
        call(onActivate);
    }
    function doClick(e2) {
      const {
        onClick
      } = props;
      if (onClick)
        call(onClick, e2);
    }
    function doWrapperFocus(e2) {
      const {
        onWrapperFocus
      } = props;
      if (onWrapperFocus)
        call(onWrapperFocus, e2);
    }
    function doWrapperBlur(e2) {
      const {
        onWrapperBlur
      } = props;
      if (onWrapperBlur)
        call(onWrapperBlur, e2);
    }
    function handleCompositionStart() {
      isComposingRef.value = true;
    }
    function handleCompositionEnd(e2) {
      isComposingRef.value = false;
      if (e2.target === inputEl2Ref.value) {
        handleInput(e2, 1);
      } else {
        handleInput(e2, 0);
      }
    }
    function handleInput(e2, index = 0, event = "input") {
      const targetValue = e2.target.value;
      syncMirror(targetValue);
      if (e2 instanceof InputEvent && !e2.isComposing) {
        isComposingRef.value = false;
      }
      if (props.type === "textarea") {
        const {
          value: textareaScrollbarInst
        } = textareaScrollbarInstRef;
        if (textareaScrollbarInst) {
          textareaScrollbarInst.syncUnifiedContainer();
        }
      }
      syncSource = targetValue;
      if (isComposingRef.value)
        return;
      focusedInputCursorControl.recordCursor();
      const isIncomingValueValid = allowInput(targetValue);
      if (isIncomingValueValid) {
        if (!props.pair) {
          event === "input" ? doUpdateValue(targetValue, {
            source: index
          }) : doChange(targetValue, {
            source: index
          });
        } else {
          let {
            value
          } = mergedValueRef;
          if (!Array.isArray(value)) {
            value = ["", ""];
          } else {
            value = [value[0], value[1]];
          }
          value[index] = targetValue;
          event === "input" ? doUpdateValue(value, {
            source: index
          }) : doChange(value, {
            source: index
          });
        }
      }
      vm.$forceUpdate();
      if (!isIncomingValueValid) {
        void nextTick(focusedInputCursorControl.restoreCursor);
      }
    }
    function allowInput(value) {
      const {
        countGraphemes,
        maxlength,
        minlength
      } = props;
      if (countGraphemes) {
        let graphemesCount;
        if (maxlength !== void 0) {
          if (graphemesCount === void 0) {
            graphemesCount = countGraphemes(value);
          }
          if (graphemesCount > Number(maxlength))
            return false;
        }
        if (minlength !== void 0) {
          if (graphemesCount === void 0) {
            graphemesCount = countGraphemes(value);
          }
          if (graphemesCount < Number(maxlength))
            return false;
        }
      }
      const {
        allowInput: allowInput2
      } = props;
      if (typeof allowInput2 === "function") {
        return allowInput2(value);
      }
      return true;
    }
    function handleInputBlur(e2) {
      doUpdateValueBlur(e2);
      if (e2.relatedTarget === wrapperElRef.value) {
        doDeactivate();
      }
      if (!(e2.relatedTarget !== null && (e2.relatedTarget === inputElRef.value || e2.relatedTarget === inputEl2Ref.value || e2.relatedTarget === textareaElRef.value))) {
        activatedRef.value = false;
      }
      dealWithEvent(e2, "blur");
      currentFocusedInputRef.value = null;
    }
    function handleInputFocus(e2, index) {
      doUpdateValueFocus(e2);
      focusedRef.value = true;
      activatedRef.value = true;
      doActivate();
      dealWithEvent(e2, "focus");
      if (index === 0) {
        currentFocusedInputRef.value = inputElRef.value;
      } else if (index === 1) {
        currentFocusedInputRef.value = inputEl2Ref.value;
      } else if (index === 2) {
        currentFocusedInputRef.value = textareaElRef.value;
      }
    }
    function handleWrapperBlur(e2) {
      if (props.passivelyActivated) {
        doWrapperBlur(e2);
        dealWithEvent(e2, "blur");
      }
    }
    function handleWrapperFocus(e2) {
      if (props.passivelyActivated) {
        focusedRef.value = true;
        doWrapperFocus(e2);
        dealWithEvent(e2, "focus");
      }
    }
    function dealWithEvent(e2, type) {
      if (e2.relatedTarget !== null && (e2.relatedTarget === inputElRef.value || e2.relatedTarget === inputEl2Ref.value || e2.relatedTarget === textareaElRef.value || e2.relatedTarget === wrapperElRef.value))
        ;
      else {
        if (type === "focus") {
          doFocus(e2);
          focusedRef.value = true;
        } else if (type === "blur") {
          doBlur(e2);
          focusedRef.value = false;
        }
      }
    }
    function handleChange(e2, index) {
      handleInput(e2, index, "change");
    }
    function handleClick(e2) {
      doClick(e2);
    }
    function handleClear(e2) {
      doClear(e2);
      clearValue();
    }
    function clearValue() {
      if (props.pair) {
        doUpdateValue(["", ""], {
          source: "clear"
        });
        doChange(["", ""], {
          source: "clear"
        });
      } else {
        doUpdateValue("", {
          source: "clear"
        });
        doChange("", {
          source: "clear"
        });
      }
    }
    function handleMouseDown(e2) {
      const {
        onMousedown
      } = props;
      if (onMousedown)
        onMousedown(e2);
      const {
        tagName
      } = e2.target;
      if (tagName !== "INPUT" && tagName !== "TEXTAREA") {
        if (props.resizable) {
          const {
            value: wrapperEl
          } = wrapperElRef;
          if (wrapperEl) {
            const {
              left,
              top,
              width,
              height
            } = wrapperEl.getBoundingClientRect();
            const resizeHandleSize = 14;
            if (left + width - resizeHandleSize < e2.clientX && e2.clientX < left + width && top + height - resizeHandleSize < e2.clientY && e2.clientY < top + height) {
              return;
            }
          }
        }
        e2.preventDefault();
        if (!focusedRef.value) {
          focus();
        }
      }
    }
    function handleMouseEnter() {
      var _a;
      hoverRef.value = true;
      if (props.type === "textarea") {
        (_a = textareaScrollbarInstRef.value) === null || _a === void 0 ? void 0 : _a.handleMouseEnterWrapper();
      }
    }
    function handleMouseLeave() {
      var _a;
      hoverRef.value = false;
      if (props.type === "textarea") {
        (_a = textareaScrollbarInstRef.value) === null || _a === void 0 ? void 0 : _a.handleMouseLeaveWrapper();
      }
    }
    function handlePasswordToggleClick() {
      if (mergedDisabledRef.value)
        return;
      if (mergedShowPasswordOnRef.value !== "click")
        return;
      passwordVisibleRef.value = !passwordVisibleRef.value;
    }
    function handlePasswordToggleMousedown(e2) {
      if (mergedDisabledRef.value)
        return;
      e2.preventDefault();
      const preventDefaultOnce = (e22) => {
        e22.preventDefault();
        off("mouseup", void 0, preventDefaultOnce);
      };
      on("mouseup", void 0, preventDefaultOnce);
      if (mergedShowPasswordOnRef.value !== "mousedown")
        return;
      passwordVisibleRef.value = true;
      const hidePassword = () => {
        passwordVisibleRef.value = false;
        off("mouseup", void 0, hidePassword);
      };
      on("mouseup", void 0, hidePassword);
    }
    function handleWrapperKeyup(e2) {
      if (props.onKeyup)
        call(props.onKeyup, e2);
    }
    function handleWrapperKeydown(e2) {
      if (props.onKeydown)
        call(props.onKeydown, e2);
      switch (e2.key) {
        case "Escape":
          handleWrapperKeydownEsc();
          break;
        case "Enter":
          handleWrapperKeydownEnter(e2);
          break;
      }
    }
    function handleWrapperKeydownEnter(e2) {
      var _a, _b;
      if (props.passivelyActivated) {
        const {
          value: focused
        } = activatedRef;
        if (focused) {
          if (props.internalDeactivateOnEnter) {
            handleWrapperKeydownEsc();
          }
          return;
        }
        e2.preventDefault();
        if (props.type === "textarea") {
          (_a = textareaElRef.value) === null || _a === void 0 ? void 0 : _a.focus();
        } else {
          (_b = inputElRef.value) === null || _b === void 0 ? void 0 : _b.focus();
        }
      }
    }
    function handleWrapperKeydownEsc() {
      if (props.passivelyActivated) {
        activatedRef.value = false;
        void nextTick(() => {
          var _a;
          (_a = wrapperElRef.value) === null || _a === void 0 ? void 0 : _a.focus();
        });
      }
    }
    function focus() {
      var _a, _b, _c;
      if (mergedDisabledRef.value)
        return;
      if (props.passivelyActivated) {
        (_a = wrapperElRef.value) === null || _a === void 0 ? void 0 : _a.focus();
      } else {
        (_b = textareaElRef.value) === null || _b === void 0 ? void 0 : _b.focus();
        (_c = inputElRef.value) === null || _c === void 0 ? void 0 : _c.focus();
      }
    }
    function blur() {
      var _a;
      if ((_a = wrapperElRef.value) === null || _a === void 0 ? void 0 : _a.contains((void 0).activeElement)) {
        (void 0).activeElement.blur();
      }
    }
    function select() {
      var _a, _b;
      (_a = textareaElRef.value) === null || _a === void 0 ? void 0 : _a.select();
      (_b = inputElRef.value) === null || _b === void 0 ? void 0 : _b.select();
    }
    function activate() {
      if (mergedDisabledRef.value)
        return;
      if (textareaElRef.value)
        textareaElRef.value.focus();
      else if (inputElRef.value)
        inputElRef.value.focus();
    }
    function deactivate() {
      const {
        value: wrapperEl
      } = wrapperElRef;
      if ((wrapperEl === null || wrapperEl === void 0 ? void 0 : wrapperEl.contains((void 0).activeElement)) && wrapperEl !== (void 0).activeElement) {
        handleWrapperKeydownEsc();
      }
    }
    function scrollTo(options) {
      if (props.type === "textarea") {
        const {
          value: textareaEl
        } = textareaElRef;
        textareaEl === null || textareaEl === void 0 ? void 0 : textareaEl.scrollTo(options);
      } else {
        const {
          value: inputEl
        } = inputElRef;
        inputEl === null || inputEl === void 0 ? void 0 : inputEl.scrollTo(options);
      }
    }
    function syncMirror(value) {
      const {
        type,
        pair,
        autosize
      } = props;
      if (!pair && autosize) {
        if (type === "textarea") {
          const {
            value: textareaMirrorEl
          } = textareaMirrorElRef;
          if (textareaMirrorEl) {
            textareaMirrorEl.textContent = (value !== null && value !== void 0 ? value : "") + "\r\n";
          }
        } else {
          const {
            value: inputMirrorEl
          } = inputMirrorElRef;
          if (inputMirrorEl) {
            if (value) {
              inputMirrorEl.textContent = value;
            } else {
              inputMirrorEl.innerHTML = "&nbsp;";
            }
          }
        }
      }
    }
    function handleTextAreaMirrorResize() {
      updateTextAreaStyle();
    }
    const placeholderStyleRef = ref({
      top: "0"
    });
    function handleTextAreaScroll(e2) {
      var _a;
      const {
        scrollTop
      } = e2.target;
      placeholderStyleRef.value.top = `${-scrollTop}px`;
      (_a = textareaScrollbarInstRef.value) === null || _a === void 0 ? void 0 : _a.syncUnifiedContainer();
    }
    let stopWatchMergedValue1 = null;
    watchEffect(() => {
      const {
        autosize,
        type
      } = props;
      if (autosize && type === "textarea") {
        stopWatchMergedValue1 = watch(mergedValueRef, (value) => {
          if (!Array.isArray(value) && value !== syncSource) {
            syncMirror(value);
          }
        });
      } else {
        stopWatchMergedValue1 === null || stopWatchMergedValue1 === void 0 ? void 0 : stopWatchMergedValue1();
      }
    });
    let stopWatchMergedValue2 = null;
    watchEffect(() => {
      if (props.type === "textarea") {
        stopWatchMergedValue2 = watch(mergedValueRef, (value) => {
          var _a;
          if (!Array.isArray(value) && value !== syncSource) {
            (_a = textareaScrollbarInstRef.value) === null || _a === void 0 ? void 0 : _a.syncUnifiedContainer();
          }
        });
      } else {
        stopWatchMergedValue2 === null || stopWatchMergedValue2 === void 0 ? void 0 : stopWatchMergedValue2();
      }
    });
    provide(inputInjectionKey, {
      mergedValueRef,
      maxlengthRef,
      mergedClsPrefixRef,
      countGraphemesRef: toRef(props, "countGraphemes")
    });
    const exposedProps = {
      wrapperElRef,
      inputElRef,
      textareaElRef,
      isCompositing: isComposingRef,
      clear: clearValue,
      focus,
      blur,
      select,
      deactivate,
      activate,
      scrollTo
    };
    const rtlEnabledRef = useRtl("Input", mergedRtlRef, mergedClsPrefixRef);
    const cssVarsRef = computed(() => {
      const {
        value: size
      } = mergedSizeRef;
      const {
        common: {
          cubicBezierEaseInOut
        },
        self: {
          color,
          borderRadius,
          textColor,
          caretColor,
          caretColorError,
          caretColorWarning,
          textDecorationColor,
          border,
          borderDisabled,
          borderHover,
          borderFocus,
          placeholderColor,
          placeholderColorDisabled,
          lineHeightTextarea,
          colorDisabled,
          colorFocus,
          textColorDisabled,
          boxShadowFocus,
          iconSize,
          colorFocusWarning,
          boxShadowFocusWarning,
          borderWarning,
          borderFocusWarning,
          borderHoverWarning,
          colorFocusError,
          boxShadowFocusError,
          borderError,
          borderFocusError,
          borderHoverError,
          clearSize,
          clearColor,
          clearColorHover,
          clearColorPressed,
          iconColor,
          iconColorDisabled,
          suffixTextColor,
          countTextColor,
          countTextColorDisabled,
          iconColorHover,
          iconColorPressed,
          loadingColor,
          loadingColorError,
          loadingColorWarning,
          [createKey("padding", size)]: padding,
          [createKey("fontSize", size)]: fontSize,
          [createKey("height", size)]: height
        }
      } = themeRef.value;
      const {
        left: paddingLeft,
        right: paddingRight
      } = getPadding(padding);
      return {
        "--n-bezier": cubicBezierEaseInOut,
        "--n-count-text-color": countTextColor,
        "--n-count-text-color-disabled": countTextColorDisabled,
        "--n-color": color,
        "--n-font-size": fontSize,
        "--n-border-radius": borderRadius,
        "--n-height": height,
        "--n-padding-left": paddingLeft,
        "--n-padding-right": paddingRight,
        "--n-text-color": textColor,
        "--n-caret-color": caretColor,
        "--n-text-decoration-color": textDecorationColor,
        "--n-border": border,
        "--n-border-disabled": borderDisabled,
        "--n-border-hover": borderHover,
        "--n-border-focus": borderFocus,
        "--n-placeholder-color": placeholderColor,
        "--n-placeholder-color-disabled": placeholderColorDisabled,
        "--n-icon-size": iconSize,
        "--n-line-height-textarea": lineHeightTextarea,
        "--n-color-disabled": colorDisabled,
        "--n-color-focus": colorFocus,
        "--n-text-color-disabled": textColorDisabled,
        "--n-box-shadow-focus": boxShadowFocus,
        "--n-loading-color": loadingColor,
        // form warning
        "--n-caret-color-warning": caretColorWarning,
        "--n-color-focus-warning": colorFocusWarning,
        "--n-box-shadow-focus-warning": boxShadowFocusWarning,
        "--n-border-warning": borderWarning,
        "--n-border-focus-warning": borderFocusWarning,
        "--n-border-hover-warning": borderHoverWarning,
        "--n-loading-color-warning": loadingColorWarning,
        // form error
        "--n-caret-color-error": caretColorError,
        "--n-color-focus-error": colorFocusError,
        "--n-box-shadow-focus-error": boxShadowFocusError,
        "--n-border-error": borderError,
        "--n-border-focus-error": borderFocusError,
        "--n-border-hover-error": borderHoverError,
        "--n-loading-color-error": loadingColorError,
        // clear-button
        "--n-clear-color": clearColor,
        "--n-clear-size": clearSize,
        "--n-clear-color-hover": clearColorHover,
        "--n-clear-color-pressed": clearColorPressed,
        "--n-icon-color": iconColor,
        "--n-icon-color-hover": iconColorHover,
        "--n-icon-color-pressed": iconColorPressed,
        "--n-icon-color-disabled": iconColorDisabled,
        "--n-suffix-text-color": suffixTextColor
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("input", computed(() => {
      const {
        value: size
      } = mergedSizeRef;
      return size[0];
    }), cssVarsRef, props) : void 0;
    return Object.assign(Object.assign({}, exposedProps), {
      // DOM ref
      wrapperElRef,
      inputElRef,
      inputMirrorElRef,
      inputEl2Ref,
      textareaElRef,
      textareaMirrorElRef,
      textareaScrollbarInstRef,
      // value
      rtlEnabled: rtlEnabledRef,
      uncontrolledValue: uncontrolledValueRef,
      mergedValue: mergedValueRef,
      passwordVisible: passwordVisibleRef,
      mergedPlaceholder: mergedPlaceholderRef,
      showPlaceholder1: showPlaceholder1Ref,
      showPlaceholder2: showPlaceholder2Ref,
      mergedFocus: mergedFocusRef,
      isComposing: isComposingRef,
      activated: activatedRef,
      showClearButton,
      mergedSize: mergedSizeRef,
      mergedDisabled: mergedDisabledRef,
      textDecorationStyle: textDecorationStyleRef,
      mergedClsPrefix: mergedClsPrefixRef,
      mergedBordered: mergedBorderedRef,
      mergedShowPasswordOn: mergedShowPasswordOnRef,
      placeholderStyle: placeholderStyleRef,
      mergedStatus: mergedStatusRef,
      textAreaScrollContainerWidth: textAreaScrollContainerWidthRef,
      // methods
      handleTextAreaScroll,
      handleCompositionStart,
      handleCompositionEnd,
      handleInput,
      handleInputBlur,
      handleInputFocus,
      handleWrapperBlur,
      handleWrapperFocus,
      handleMouseEnter,
      handleMouseLeave,
      handleMouseDown,
      handleChange,
      handleClick,
      handleClear,
      handlePasswordToggleClick,
      handlePasswordToggleMousedown,
      handleWrapperKeydown,
      handleWrapperKeyup,
      handleTextAreaMirrorResize,
      getTextareaScrollContainer: () => {
        return textareaElRef.value;
      },
      mergedTheme: themeRef,
      cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
    });
  },
  render() {
    var _a, _b;
    const {
      mergedClsPrefix,
      mergedStatus,
      themeClass,
      type,
      countGraphemes,
      onRender
    } = this;
    const $slots = this.$slots;
    onRender === null || onRender === void 0 ? void 0 : onRender();
    return h("div", {
      ref: "wrapperElRef",
      class: [`${mergedClsPrefix}-input`, themeClass, mergedStatus && `${mergedClsPrefix}-input--${mergedStatus}-status`, {
        [`${mergedClsPrefix}-input--rtl`]: this.rtlEnabled,
        [`${mergedClsPrefix}-input--disabled`]: this.mergedDisabled,
        [`${mergedClsPrefix}-input--textarea`]: type === "textarea",
        [`${mergedClsPrefix}-input--resizable`]: this.resizable && !this.autosize,
        [`${mergedClsPrefix}-input--autosize`]: this.autosize,
        [`${mergedClsPrefix}-input--round`]: this.round && !(type === "textarea"),
        [`${mergedClsPrefix}-input--pair`]: this.pair,
        [`${mergedClsPrefix}-input--focus`]: this.mergedFocus,
        [`${mergedClsPrefix}-input--stateful`]: this.stateful
      }],
      style: this.cssVars,
      tabindex: !this.mergedDisabled && this.passivelyActivated && !this.activated ? 0 : void 0,
      onFocus: this.handleWrapperFocus,
      onBlur: this.handleWrapperBlur,
      onClick: this.handleClick,
      onMousedown: this.handleMouseDown,
      onMouseenter: this.handleMouseEnter,
      onMouseleave: this.handleMouseLeave,
      onCompositionstart: this.handleCompositionStart,
      onCompositionend: this.handleCompositionEnd,
      onKeyup: this.handleWrapperKeyup,
      onKeydown: this.handleWrapperKeydown
    }, h("div", {
      class: `${mergedClsPrefix}-input-wrapper`
    }, resolveWrappedSlot($slots.prefix, (children) => children && h("div", {
      class: `${mergedClsPrefix}-input__prefix`
    }, children)), type === "textarea" ? h(Scrollbar, {
      ref: "textareaScrollbarInstRef",
      class: `${mergedClsPrefix}-input__textarea`,
      container: this.getTextareaScrollContainer,
      triggerDisplayManually: true,
      useUnifiedContainer: true,
      internalHoistYRail: true
    }, {
      default: () => {
        var _a2, _b2;
        const {
          textAreaScrollContainerWidth
        } = this;
        const scrollContainerWidthStyle = {
          width: this.autosize && textAreaScrollContainerWidth && `${textAreaScrollContainerWidth}px`
        };
        return h(Fragment, null, h("textarea", Object.assign({}, this.inputProps, {
          ref: "textareaElRef",
          class: [`${mergedClsPrefix}-input__textarea-el`, (_a2 = this.inputProps) === null || _a2 === void 0 ? void 0 : _a2.class],
          autofocus: this.autofocus,
          rows: Number(this.rows),
          placeholder: this.placeholder,
          value: this.mergedValue,
          disabled: this.mergedDisabled,
          maxlength: countGraphemes ? void 0 : this.maxlength,
          minlength: countGraphemes ? void 0 : this.minlength,
          readonly: this.readonly,
          tabindex: this.passivelyActivated && !this.activated ? -1 : void 0,
          style: [this.textDecorationStyle[0], (_b2 = this.inputProps) === null || _b2 === void 0 ? void 0 : _b2.style, scrollContainerWidthStyle],
          onBlur: this.handleInputBlur,
          onFocus: (e2) => {
            this.handleInputFocus(e2, 2);
          },
          onInput: this.handleInput,
          onChange: this.handleChange,
          onScroll: this.handleTextAreaScroll
        })), this.showPlaceholder1 ? h("div", {
          class: `${mergedClsPrefix}-input__placeholder`,
          style: [this.placeholderStyle, scrollContainerWidthStyle],
          key: "placeholder"
        }, this.mergedPlaceholder[0]) : null, this.autosize ? h(VResizeObserver, {
          onResize: this.handleTextAreaMirrorResize
        }, {
          default: () => h("div", {
            ref: "textareaMirrorElRef",
            class: `${mergedClsPrefix}-input__textarea-mirror`,
            key: "mirror"
          })
        }) : null);
      }
    }) : h("div", {
      class: `${mergedClsPrefix}-input__input`
    }, h("input", Object.assign({
      type: type === "password" && this.mergedShowPasswordOn && this.passwordVisible ? "text" : type
    }, this.inputProps, {
      ref: "inputElRef",
      class: [`${mergedClsPrefix}-input__input-el`, (_a = this.inputProps) === null || _a === void 0 ? void 0 : _a.class],
      style: [this.textDecorationStyle[0], (_b = this.inputProps) === null || _b === void 0 ? void 0 : _b.style],
      tabindex: this.passivelyActivated && !this.activated ? -1 : void 0,
      placeholder: this.mergedPlaceholder[0],
      disabled: this.mergedDisabled,
      maxlength: countGraphemes ? void 0 : this.maxlength,
      minlength: countGraphemes ? void 0 : this.minlength,
      value: Array.isArray(this.mergedValue) ? this.mergedValue[0] : this.mergedValue,
      readonly: this.readonly,
      autofocus: this.autofocus,
      size: this.attrSize,
      onBlur: this.handleInputBlur,
      onFocus: (e2) => {
        this.handleInputFocus(e2, 0);
      },
      onInput: (e2) => {
        this.handleInput(e2, 0);
      },
      onChange: (e2) => {
        this.handleChange(e2, 0);
      }
    })), this.showPlaceholder1 ? h("div", {
      class: `${mergedClsPrefix}-input__placeholder`
    }, h("span", null, this.mergedPlaceholder[0])) : null, this.autosize ? h("div", {
      class: `${mergedClsPrefix}-input__input-mirror`,
      key: "mirror",
      ref: "inputMirrorElRef"
    }, " ") : null), !this.pair && resolveWrappedSlot($slots.suffix, (children) => {
      return children || this.clearable || this.showCount || this.mergedShowPasswordOn || this.loading !== void 0 ? h("div", {
        class: `${mergedClsPrefix}-input__suffix`
      }, [resolveWrappedSlot($slots["clear-icon-placeholder"], (children2) => {
        return (this.clearable || children2) && h(NBaseClear, {
          clsPrefix: mergedClsPrefix,
          show: this.showClearButton,
          onClear: this.handleClear
        }, {
          placeholder: () => children2,
          icon: () => {
            var _a2, _b2;
            return (_b2 = (_a2 = this.$slots)["clear-icon"]) === null || _b2 === void 0 ? void 0 : _b2.call(_a2);
          }
        });
      }), !this.internalLoadingBeforeSuffix ? children : null, this.loading !== void 0 ? h(NBaseSuffix, {
        clsPrefix: mergedClsPrefix,
        loading: this.loading,
        showArrow: false,
        showClear: false,
        style: this.cssVars
      }) : null, this.internalLoadingBeforeSuffix ? children : null, this.showCount && this.type !== "textarea" ? h(WordCount, null, {
        default: (props) => {
          var _a2;
          return (_a2 = $slots.count) === null || _a2 === void 0 ? void 0 : _a2.call($slots, props);
        }
      }) : null, this.mergedShowPasswordOn && this.type === "password" ? h("div", {
        class: `${mergedClsPrefix}-input__eye`,
        onMousedown: this.handlePasswordToggleMousedown,
        onClick: this.handlePasswordToggleClick
      }, this.passwordVisible ? resolveSlot($slots["password-visible-icon"], () => [h(NBaseIcon, {
        clsPrefix: mergedClsPrefix
      }, {
        default: () => h(EyeIcon, null)
      })]) : resolveSlot($slots["password-invisible-icon"], () => [h(NBaseIcon, {
        clsPrefix: mergedClsPrefix
      }, {
        default: () => h(EyeOffIcon, null)
      })])) : null]) : null;
    })), this.pair ? h("span", {
      class: `${mergedClsPrefix}-input__separator`
    }, resolveSlot($slots.separator, () => [this.separator])) : null, this.pair ? h("div", {
      class: `${mergedClsPrefix}-input-wrapper`
    }, h("div", {
      class: `${mergedClsPrefix}-input__input`
    }, h("input", {
      ref: "inputEl2Ref",
      type: this.type,
      class: `${mergedClsPrefix}-input__input-el`,
      tabindex: this.passivelyActivated && !this.activated ? -1 : void 0,
      placeholder: this.mergedPlaceholder[1],
      disabled: this.mergedDisabled,
      maxlength: countGraphemes ? void 0 : this.maxlength,
      minlength: countGraphemes ? void 0 : this.minlength,
      value: Array.isArray(this.mergedValue) ? this.mergedValue[1] : void 0,
      readonly: this.readonly,
      style: this.textDecorationStyle[1],
      onBlur: this.handleInputBlur,
      onFocus: (e2) => {
        this.handleInputFocus(e2, 1);
      },
      onInput: (e2) => {
        this.handleInput(e2, 1);
      },
      onChange: (e2) => {
        this.handleChange(e2, 1);
      }
    }), this.showPlaceholder2 ? h("div", {
      class: `${mergedClsPrefix}-input__placeholder`
    }, h("span", null, this.mergedPlaceholder[1])) : null), resolveWrappedSlot($slots.suffix, (children) => {
      return (this.clearable || children) && h("div", {
        class: `${mergedClsPrefix}-input__suffix`
      }, [this.clearable && h(NBaseClear, {
        clsPrefix: mergedClsPrefix,
        show: this.showClearButton,
        onClear: this.handleClear
      }, {
        icon: () => {
          var _a2;
          return (_a2 = $slots["clear-icon"]) === null || _a2 === void 0 ? void 0 : _a2.call($slots);
        },
        placeholder: () => {
          var _a2;
          return (_a2 = $slots["clear-icon-placeholder"]) === null || _a2 === void 0 ? void 0 : _a2.call($slots);
        }
      }), children]);
    })) : null, this.mergedBordered ? h("div", {
      class: `${mergedClsPrefix}-input__border`
    }) : null, this.mergedBordered ? h("div", {
      class: `${mergedClsPrefix}-input__state-border`
    }) : null, this.showCount && type === "textarea" ? h(WordCount, null, {
      default: (props) => {
        var _a2;
        const {
          renderCount
        } = this;
        if (renderCount) {
          return renderCount(props);
        }
        return (_a2 = $slots.count) === null || _a2 === void 0 ? void 0 : _a2.call($slots, props);
      }
    }) : null);
  }
});
const style$j = cB("input-group", `
 display: inline-flex;
 width: 100%;
 flex-wrap: nowrap;
 vertical-align: bottom;
`, [c$1(">", [cB("input", [c$1("&:not(:last-child)", `
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `), c$1("&:not(:first-child)", `
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 margin-left: -1px!important;
 `)]), cB("button", [c$1("&:not(:last-child)", `
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `, [cE("state-border, border", `
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `)]), c$1("&:not(:first-child)", `
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `, [cE("state-border, border", `
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `)])]), c$1("*", [c$1("&:not(:last-child)", `
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `, [c$1(">", [cB("input", `
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `), cB("base-selection", [cB("base-selection-label", `
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `), cB("base-selection-tags", `
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `), cE("box-shadow, border, state-border", `
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `)])])]), c$1("&:not(:first-child)", `
 margin-left: -1px!important;
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `, [c$1(">", [cB("input", `
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `), cB("base-selection", [cB("base-selection-label", `
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `), cB("base-selection-tags", `
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `), cE("box-shadow, border, state-border", `
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `)])])])])])]);
const inputGroupProps = {};
const NInputGroup = defineComponent({
  name: "InputGroup",
  props: inputGroupProps,
  setup(props) {
    const {
      mergedClsPrefixRef
    } = useConfig(props);
    useStyle("-input-group", style$j, mergedClsPrefixRef);
    return {
      mergedClsPrefix: mergedClsPrefixRef
    };
  },
  render() {
    const {
      mergedClsPrefix
    } = this;
    return h("div", {
      class: `${mergedClsPrefix}-input-group`
    }, this.$slots);
  }
});
function self$17(vars) {
  const {
    boxShadow2
  } = vars;
  return {
    menuBoxShadow: boxShadow2
  };
}
const autoCompleteLight = createTheme({
  name: "AutoComplete",
  common: derived$1,
  peers: {
    InternalSelectMenu: internalSelectMenuLight,
    Input: inputLight
  },
  self: self$17
});
const autoCompleteDark = {
  name: "AutoComplete",
  common: derived,
  peers: {
    InternalSelectMenu: internalSelectMenuDark,
    Input: inputDark
  },
  self: self$17
};
const self$16 = (vars) => {
  const {
    borderRadius,
    avatarColor,
    cardColor,
    fontSize,
    heightTiny,
    heightSmall,
    heightMedium,
    heightLarge,
    heightHuge,
    modalColor,
    popoverColor
  } = vars;
  return {
    borderRadius,
    fontSize,
    border: `2px solid ${cardColor}`,
    heightTiny,
    heightSmall,
    heightMedium,
    heightLarge,
    heightHuge,
    color: composite(cardColor, avatarColor),
    colorModal: composite(modalColor, avatarColor),
    colorPopover: composite(popoverColor, avatarColor)
  };
};
const avatarLight = {
  name: "Avatar",
  common: derived$1,
  self: self$16
};
const avatarDark = {
  name: "Avatar",
  common: derived,
  self: self$16
};
const self$15 = () => {
  return {
    gap: "-12px"
  };
};
const avatarGroupLight = createTheme({
  name: "AvatarGroup",
  common: derived$1,
  peers: {
    Avatar: avatarLight
  },
  self: self$15
});
const avatarGroupDark = {
  name: "AvatarGroup",
  common: derived,
  peers: {
    Avatar: avatarDark
  },
  self: self$15
};
const commonVariables$g = {
  width: "44px",
  height: "44px",
  borderRadius: "22px",
  iconSize: "26px"
};
const backTopDark = {
  name: "BackTop",
  common: derived,
  self(vars) {
    const {
      popoverColor,
      textColor2,
      primaryColorHover,
      primaryColorPressed
    } = vars;
    return Object.assign(Object.assign({}, commonVariables$g), {
      color: popoverColor,
      textColor: textColor2,
      iconColor: textColor2,
      iconColorHover: primaryColorHover,
      iconColorPressed: primaryColorPressed,
      boxShadow: "0 2px 8px 0px rgba(0, 0, 0, .12)",
      boxShadowHover: "0 2px 12px 0px rgba(0, 0, 0, .18)",
      boxShadowPressed: "0 2px 12px 0px rgba(0, 0, 0, .18)"
    });
  }
};
const self$14 = (vars) => {
  const {
    popoverColor,
    textColor2,
    primaryColorHover,
    primaryColorPressed
  } = vars;
  return Object.assign(Object.assign({}, commonVariables$g), {
    color: popoverColor,
    textColor: textColor2,
    iconColor: textColor2,
    iconColorHover: primaryColorHover,
    iconColorPressed: primaryColorPressed,
    boxShadow: "0 2px 8px 0px rgba(0, 0, 0, .12)",
    boxShadowHover: "0 2px 12px 0px rgba(0, 0, 0, .18)",
    boxShadowPressed: "0 2px 12px 0px rgba(0, 0, 0, .18)"
  });
};
const backTopLight = {
  name: "BackTop",
  common: derived$1,
  self: self$14
};
const badgeDark = {
  name: "Badge",
  common: derived,
  self(vars) {
    const {
      errorColorSuppl,
      infoColorSuppl,
      successColorSuppl,
      warningColorSuppl,
      fontFamily
    } = vars;
    return {
      color: errorColorSuppl,
      colorInfo: infoColorSuppl,
      colorSuccess: successColorSuppl,
      colorError: errorColorSuppl,
      colorWarning: warningColorSuppl,
      fontSize: "12px",
      fontFamily
    };
  }
};
const self$13 = (vars) => {
  const {
    errorColor,
    infoColor,
    successColor,
    warningColor,
    fontFamily
  } = vars;
  return {
    color: errorColor,
    colorInfo: infoColor,
    colorSuccess: successColor,
    colorError: errorColor,
    colorWarning: warningColor,
    fontSize: "12px",
    fontFamily
  };
};
const badgeLight = {
  name: "Badge",
  common: derived$1,
  self: self$13
};
const style$i = c$1([c$1("@keyframes badge-wave-spread", {
  from: {
    boxShadow: "0 0 0.5px 0px var(--n-ripple-color)",
    opacity: 0.6
  },
  to: {
    // don't use exact 5px since chrome will display the animation with glitches
    boxShadow: "0 0 0.5px 4.5px var(--n-ripple-color)",
    opacity: 0
  }
}), cB("badge", `
 display: inline-flex;
 position: relative;
 vertical-align: middle;
 font-family: var(--n-font-family);
 `, [cM("as-is", [cB("badge-sup", {
  position: "static",
  transform: "translateX(0)"
}, [fadeInScaleUpTransition({
  transformOrigin: "left bottom",
  originalTransform: "translateX(0)"
})])]), cM("dot", [cB("badge-sup", `
 height: 8px;
 width: 8px;
 padding: 0;
 min-width: 8px;
 left: 100%;
 bottom: calc(100% - 4px);
 `, [c$1("::before", "border-radius: 4px;")])]), cB("badge-sup", `
 background: var(--n-color);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 color: #FFF;
 position: absolute;
 height: 18px;
 line-height: 18px;
 border-radius: 9px;
 padding: 0 6px;
 text-align: center;
 font-size: var(--n-font-size);
 transform: translateX(-50%);
 left: 100%;
 bottom: calc(100% - 9px);
 font-variant-numeric: tabular-nums;
 z-index: 1;
 display: flex;
 align-items: center;
 `, [fadeInScaleUpTransition({
  transformOrigin: "left bottom",
  originalTransform: "translateX(-50%)"
}), cB("base-wave", {
  zIndex: 1,
  animationDuration: "2s",
  animationIterationCount: "infinite",
  animationDelay: "1s",
  animationTimingFunction: "var(--n-ripple-bezier)",
  animationName: "badge-wave-spread"
}), c$1("&::before", `
 opacity: 0;
 transform: scale(1);
 border-radius: 9px;
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)])])]);
const badgeProps = Object.assign(Object.assign({}, useTheme.props), {
  value: [String, Number],
  max: Number,
  dot: Boolean,
  type: {
    type: String,
    default: "default"
  },
  show: {
    type: Boolean,
    default: true
  },
  showZero: Boolean,
  processing: Boolean,
  color: String,
  offset: Array
});
const __nuxt_component_28 = defineComponent({
  name: "Badge",
  props: badgeProps,
  setup(props, {
    slots
  }) {
    const {
      mergedClsPrefixRef,
      inlineThemeDisabled,
      mergedRtlRef
    } = useConfig(props);
    const themeRef = useTheme("Badge", "-badge", style$i, badgeLight, props, mergedClsPrefixRef);
    const appearedRef = ref(false);
    const handleAfterEnter = () => {
      appearedRef.value = true;
    };
    const handleAfterLeave = () => {
      appearedRef.value = false;
    };
    const showBadgeRef = computed(() => {
      return props.show && (props.dot || props.value !== void 0 && !(!props.showZero && Number(props.value) <= 0) || !isSlotEmpty(slots.value));
    });
    const rtlEnabledRef = useRtl("Badge", mergedRtlRef, mergedClsPrefixRef);
    const cssVarsRef = computed(() => {
      const {
        type,
        color: propColor
      } = props;
      const {
        common: {
          cubicBezierEaseInOut,
          cubicBezierEaseOut: cubicBezierEaseOut2
        },
        self: {
          [createKey("color", type)]: color,
          fontFamily,
          fontSize
        }
      } = themeRef.value;
      return {
        "--n-font-size": fontSize,
        "--n-font-family": fontFamily,
        "--n-color": propColor || color,
        "--n-ripple-color": propColor || color,
        "--n-bezier": cubicBezierEaseInOut,
        "--n-ripple-bezier": cubicBezierEaseOut2
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("badge", computed(() => {
      let hash2 = "";
      const {
        type,
        color
      } = props;
      if (type) {
        hash2 += type[0];
      }
      if (color) {
        hash2 += color2Class(color);
      }
      return hash2;
    }), cssVarsRef, props) : void 0;
    const offsetStyleRef = computed(() => {
      const {
        offset
      } = props;
      if (!offset)
        return void 0;
      const [x2, y3] = offset;
      const reslovedOffsetX = typeof x2 === "number" ? `${x2}px` : x2;
      const reslovedOffsetY = typeof y3 === "number" ? `${y3}px` : y3;
      return {
        transform: `translate(calc(${(rtlEnabledRef === null || rtlEnabledRef === void 0 ? void 0 : rtlEnabledRef.value) ? "50%" : "-50%"} + ${reslovedOffsetX}), ${reslovedOffsetY})`
      };
    });
    return {
      rtlEnabled: rtlEnabledRef,
      mergedClsPrefix: mergedClsPrefixRef,
      appeared: appearedRef,
      showBadge: showBadgeRef,
      handleAfterEnter,
      handleAfterLeave,
      cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender,
      offsetStyle: offsetStyleRef
    };
  },
  render() {
    var _a;
    const {
      mergedClsPrefix,
      onRender,
      themeClass,
      $slots
    } = this;
    onRender === null || onRender === void 0 ? void 0 : onRender();
    const children = (_a = $slots.default) === null || _a === void 0 ? void 0 : _a.call($slots);
    return h("div", {
      class: [`${mergedClsPrefix}-badge`, this.rtlEnabled && `${mergedClsPrefix}-badge--rtl`, themeClass, {
        [`${mergedClsPrefix}-badge--dot`]: this.dot,
        [`${mergedClsPrefix}-badge--as-is`]: !children
      }],
      style: this.cssVars
    }, children, h(Transition, {
      name: "fade-in-scale-up-transition",
      onAfterEnter: this.handleAfterEnter,
      onAfterLeave: this.handleAfterLeave
    }, {
      default: () => this.showBadge ? h("sup", {
        class: `${mergedClsPrefix}-badge-sup`,
        title: getTitleAttribute(this.value),
        style: this.offsetStyle
      }, resolveSlot($slots.value, () => [!this.dot ? h(NBaseSlotMachine, {
        clsPrefix: mergedClsPrefix,
        appeared: this.appeared,
        max: this.max,
        value: this.value
      }) : null]), this.processing ? h(NBaseWave, {
        clsPrefix: mergedClsPrefix
      }) : null) : null
    }));
  }
});
const commonVariables$f = {
  fontWeightActive: "400"
};
const self$12 = (vars) => {
  const {
    fontSize,
    textColor3,
    textColor2,
    borderRadius,
    buttonColor2Hover,
    buttonColor2Pressed
  } = vars;
  return Object.assign(Object.assign({}, commonVariables$f), {
    fontSize,
    itemLineHeight: "1.25",
    itemTextColor: textColor3,
    itemTextColorHover: textColor2,
    itemTextColorPressed: textColor2,
    itemTextColorActive: textColor2,
    itemBorderRadius: borderRadius,
    itemColorHover: buttonColor2Hover,
    itemColorPressed: buttonColor2Pressed,
    separatorColor: textColor3
  });
};
const breadcrumbLight = {
  name: "Breadcrumb",
  common: derived$1,
  self: self$12
};
const breadcrumbDark = {
  name: "Breadcrumb",
  common: derived,
  self: self$12
};
const buttonDark = {
  name: "Button",
  common: derived,
  self(vars) {
    const commonSelf = self$1h(vars);
    commonSelf.waveOpacity = "0.8";
    commonSelf.colorOpacitySecondary = "0.16";
    commonSelf.colorOpacitySecondaryHover = "0.2";
    commonSelf.colorOpacitySecondaryPressed = "0.12";
    return commonSelf;
  }
};
const zero = "0!important";
const n1 = "-1px!important";
function createLeftBorderStyle(type) {
  return cM(type + "-type", [c$1("& +", [cB("button", {}, [cM(type + "-type", [cE("border", {
    borderLeftWidth: zero
  }), cE("state-border", {
    left: n1
  })])])])]);
}
function createTopBorderStyle(type) {
  return cM(type + "-type", [c$1("& +", [cB("button", [cM(type + "-type", [cE("border", {
    borderTopWidth: zero
  }), cE("state-border", {
    top: n1
  })])])])]);
}
const style$h = cB("button-group", `
 flex-wrap: nowrap;
 display: inline-flex;
 position: relative;
`, [cNotM("vertical", {
  flexDirection: "row"
}, [cNotM("rtl", [cB("button", [c$1("&:first-child:not(:last-child)", `
 margin-right: ${zero};
 border-top-right-radius: ${zero};
 border-bottom-right-radius: ${zero};
 `), c$1("&:last-child:not(:first-child)", `
 margin-left: ${zero};
 border-top-left-radius: ${zero};
 border-bottom-left-radius: ${zero};
 `), c$1("&:not(:first-child):not(:last-child)", `
 margin-left: ${zero};
 margin-right: ${zero};
 border-radius: ${zero};
 `), createLeftBorderStyle("default"), cM("ghost", [createLeftBorderStyle("primary"), createLeftBorderStyle("info"), createLeftBorderStyle("success"), createLeftBorderStyle("warning"), createLeftBorderStyle("error")])])])]), cM("vertical", {
  flexDirection: "column"
}, [cB("button", [c$1("&:first-child:not(:last-child)", `
 margin-bottom: ${zero};
 margin-left: ${zero};
 margin-right: ${zero};
 border-bottom-left-radius: ${zero};
 border-bottom-right-radius: ${zero};
 `), c$1("&:last-child:not(:first-child)", `
 margin-top: ${zero};
 margin-left: ${zero};
 margin-right: ${zero};
 border-top-left-radius: ${zero};
 border-top-right-radius: ${zero};
 `), c$1("&:not(:first-child):not(:last-child)", `
 margin: ${zero};
 border-radius: ${zero};
 `), createTopBorderStyle("default"), cM("ghost", [createTopBorderStyle("primary"), createTopBorderStyle("info"), createTopBorderStyle("success"), createTopBorderStyle("warning"), createTopBorderStyle("error")])])])]);
const buttonGroupProps = {
  size: {
    type: String,
    default: void 0
  },
  vertical: Boolean
};
const NButtonGroup = defineComponent({
  name: "ButtonGroup",
  props: buttonGroupProps,
  setup(props) {
    const {
      mergedClsPrefixRef,
      mergedRtlRef
    } = useConfig(props);
    useStyle("-button-group", style$h, mergedClsPrefixRef);
    provide(buttonGroupInjectionKey, props);
    const rtlEnabledRef = useRtl("ButtonGroup", mergedRtlRef, mergedClsPrefixRef);
    return {
      rtlEnabled: rtlEnabledRef,
      mergedClsPrefix: mergedClsPrefixRef
    };
  },
  render() {
    const {
      mergedClsPrefix
    } = this;
    return h("div", {
      class: [`${mergedClsPrefix}-button-group`, this.rtlEnabled && `${mergedClsPrefix}-button-group--rtl`, this.vertical && `${mergedClsPrefix}-button-group--vertical`],
      role: "group"
    }, this.$slots);
  }
});
const START_YEAR = 1901;
const MONTH_ITEM_HEIGHT = 40;
const matcherMap = {
  date: isSameDay,
  month: isSameMonth,
  year: isSameYear,
  quarter: isSameQuarter
};
function makeWeekMatcher(firstDayOfWeek) {
  return (sourceTime, patternTime) => {
    const weekStartsOn = (firstDayOfWeek + 1) % 7;
    return isSameWeek(sourceTime, patternTime, {
      weekStartsOn
    });
  };
}
function matchDate(sourceTime, patternTime, type, firstDayOfWeek = 0) {
  const matcher = type === "week" ? makeWeekMatcher(firstDayOfWeek) : matcherMap[type];
  return matcher(sourceTime, patternTime);
}
function dateOrWeekItem(time2, monthTs, valueTs, currentTs, mode, firstDayOfWeek) {
  if (mode === "date") {
    return dateItem(time2, monthTs, valueTs, currentTs);
  } else {
    return weekItem(time2, monthTs, valueTs, currentTs, firstDayOfWeek);
  }
}
function dateItem(time2, monthTs, valueTs, currentTs) {
  let inSpan = false;
  let startOfSpan = false;
  let endOfSpan = false;
  if (Array.isArray(valueTs)) {
    if (valueTs[0] < time2 && time2 < valueTs[1]) {
      inSpan = true;
    }
    if (matchDate(valueTs[0], time2, "date"))
      startOfSpan = true;
    if (matchDate(valueTs[1], time2, "date"))
      endOfSpan = true;
  }
  const selected = valueTs !== null && (Array.isArray(valueTs) ? matchDate(valueTs[0], time2, "date") || matchDate(valueTs[1], time2, "date") : matchDate(valueTs, time2, "date"));
  return {
    type: "date",
    dateObject: {
      date: getDate(time2),
      month: getMonth(time2),
      year: getYear(time2)
    },
    inCurrentMonth: isSameMonth(time2, monthTs),
    isCurrentDate: matchDate(currentTs, time2, "date"),
    inSpan,
    inSelectedWeek: false,
    startOfSpan,
    endOfSpan,
    selected,
    ts: getTime(time2)
  };
}
function getMonthString(month, monthFormat, locale2) {
  const date = new Date(2e3, month, 1).getTime();
  return format$3(date, monthFormat, {
    locale: locale2
  });
}
function getYearString(year, yearFormat, locale2) {
  const date = new Date(year, 1, 1).getTime();
  return format$3(date, yearFormat, {
    locale: locale2
  });
}
function getQuarterString(quarter, quarterFormat, locale2) {
  const date = new Date(2e3, quarter * 3 - 2, 1).getTime();
  return format$3(date, quarterFormat, {
    locale: locale2
  });
}
function weekItem(time2, monthTs, valueTs, currentTs, firstDayOfWeek) {
  let inSpan = false;
  let startOfSpan = false;
  let endOfSpan = false;
  if (Array.isArray(valueTs)) {
    if (valueTs[0] < time2 && time2 < valueTs[1]) {
      inSpan = true;
    }
    if (matchDate(valueTs[0], time2, "week", firstDayOfWeek))
      startOfSpan = true;
    if (matchDate(valueTs[1], time2, "week", firstDayOfWeek))
      endOfSpan = true;
  }
  const inSelectedWeek = valueTs !== null && (Array.isArray(valueTs) ? matchDate(valueTs[0], time2, "week", firstDayOfWeek) || matchDate(valueTs[1], time2, "week", firstDayOfWeek) : matchDate(valueTs, time2, "week", firstDayOfWeek));
  return {
    type: "date",
    dateObject: {
      date: getDate(time2),
      month: getMonth(time2),
      year: getYear(time2)
    },
    inCurrentMonth: isSameMonth(time2, monthTs),
    isCurrentDate: matchDate(currentTs, time2, "date"),
    inSpan,
    startOfSpan,
    endOfSpan,
    selected: false,
    inSelectedWeek,
    ts: getTime(time2)
  };
}
function monthItem(monthTs, valueTs, currentTs, {
  monthFormat
}) {
  return {
    type: "month",
    monthFormat,
    dateObject: {
      month: getMonth(monthTs),
      year: getYear(monthTs)
    },
    isCurrent: isSameMonth(currentTs, monthTs),
    selected: valueTs !== null && matchDate(valueTs, monthTs, "month"),
    ts: getTime(monthTs)
  };
}
function yearItem(yearTs, valueTs, currentTs, {
  yearFormat
}) {
  return {
    type: "year",
    yearFormat,
    dateObject: {
      year: getYear(yearTs)
    },
    isCurrent: isSameYear(currentTs, yearTs),
    selected: valueTs !== null && matchDate(valueTs, yearTs, "year"),
    ts: getTime(yearTs)
  };
}
function quarterItem(quarterTs, valueTs, currentTs, {
  quarterFormat
}) {
  return {
    type: "quarter",
    quarterFormat,
    dateObject: {
      quarter: getQuarter(quarterTs),
      year: getYear(quarterTs)
    },
    isCurrent: isSameQuarter(currentTs, quarterTs),
    selected: valueTs !== null && matchDate(valueTs, quarterTs, "quarter"),
    ts: getTime(quarterTs)
  };
}
function dateArray(monthTs, valueTs, currentTs, startDay, strip = false, weekMode = false) {
  const granularity = weekMode ? "week" : "date";
  const displayMonth = getMonth(monthTs);
  let displayMonthIterator = getTime(startOfMonth(monthTs));
  let lastMonthIterator = getTime(addDays(displayMonthIterator, -1));
  const calendarDays = [];
  let protectLastMonthDateIsShownFlag = !strip;
  while (getDay(lastMonthIterator) !== startDay || protectLastMonthDateIsShownFlag) {
    calendarDays.unshift(dateOrWeekItem(lastMonthIterator, monthTs, valueTs, currentTs, granularity, startDay));
    lastMonthIterator = getTime(addDays(lastMonthIterator, -1));
    protectLastMonthDateIsShownFlag = false;
  }
  while (getMonth(displayMonthIterator) === displayMonth) {
    calendarDays.push(dateOrWeekItem(displayMonthIterator, monthTs, valueTs, currentTs, granularity, startDay));
    displayMonthIterator = getTime(addDays(displayMonthIterator, 1));
  }
  const endIndex = strip ? calendarDays.length <= 28 ? 28 : calendarDays.length <= 35 ? 35 : 42 : 42;
  while (calendarDays.length < endIndex) {
    calendarDays.push(dateOrWeekItem(displayMonthIterator, monthTs, valueTs, currentTs, granularity, startDay));
    displayMonthIterator = getTime(addDays(displayMonthIterator, 1));
  }
  return calendarDays;
}
function monthArray(yearAnchorTs, valueTs, currentTs, format2) {
  const calendarMonths = [];
  const yearStart = startOfYear(yearAnchorTs);
  for (let i2 = 0; i2 < 12; i2++) {
    calendarMonths.push(monthItem(getTime(addMonths(yearStart, i2)), valueTs, currentTs, format2));
  }
  return calendarMonths;
}
function quarterArray(yearAnchorTs, valueTs, currentTs, format2) {
  const calendarQuarters = [];
  const yearStart = startOfYear(yearAnchorTs);
  for (let i2 = 0; i2 < 4; i2++) {
    calendarQuarters.push(quarterItem(getTime(addQuarters(yearStart, i2)), valueTs, currentTs, format2));
  }
  return calendarQuarters;
}
function yearArray(valueTs, currentTs, format2) {
  const calendarYears = [];
  const time1900 = new Date(START_YEAR, 0, 1);
  for (let i2 = 0; i2 < 200; i2++) {
    calendarYears.push(yearItem(getTime(addYears(time1900, i2)), valueTs, currentTs, format2));
  }
  return calendarYears;
}
function strictParse(string, pattern, backup, option) {
  const result = parse$1(string, pattern, backup, option);
  if (!isValid$1(result))
    return result;
  else if (format$3(result, pattern, option) === string)
    return result;
  else
    return /* @__PURE__ */ new Date(NaN);
}
function getDefaultTime(timeValue) {
  if (timeValue === void 0) {
    return void 0;
  }
  if (typeof timeValue === "number") {
    return timeValue;
  }
  const [hour, minute, second] = timeValue.split(":");
  return {
    hours: Number(hour),
    minutes: Number(minute),
    seconds: Number(second)
  };
}
function pluckValueFromRange(value, type) {
  return Array.isArray(value) ? value[type === "start" ? 0 : 1] : null;
}
const commonVariables$e = {
  titleFontSize: "22px"
};
const self$11 = (vars) => {
  const {
    borderRadius,
    fontSize,
    lineHeight,
    textColor2,
    textColor1,
    textColorDisabled,
    dividerColor,
    fontWeightStrong,
    primaryColor,
    baseColor,
    hoverColor,
    cardColor,
    modalColor,
    popoverColor
  } = vars;
  return Object.assign(Object.assign({}, commonVariables$e), {
    borderRadius,
    borderColor: composite(cardColor, dividerColor),
    borderColorModal: composite(modalColor, dividerColor),
    borderColorPopover: composite(popoverColor, dividerColor),
    textColor: textColor2,
    titleFontWeight: fontWeightStrong,
    titleTextColor: textColor1,
    dayTextColor: textColorDisabled,
    fontSize,
    lineHeight,
    dateColorCurrent: primaryColor,
    dateTextColorCurrent: baseColor,
    cellColorHover: composite(cardColor, hoverColor),
    cellColorHoverModal: composite(modalColor, hoverColor),
    cellColorHoverPopover: composite(popoverColor, hoverColor),
    cellColor: cardColor,
    cellColorModal: modalColor,
    cellColorPopover: popoverColor,
    barColor: primaryColor
  });
};
const calendarLight = createTheme({
  name: "Calendar",
  common: derived$1,
  peers: {
    Button: buttonLight
  },
  self: self$11
});
const calendarDark = {
  name: "Calendar",
  common: derived,
  peers: {
    Button: buttonDark
  },
  self: self$11
};
const style$g = c$1([cB("calendar", `
 line-height: var(--n-line-height);
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 height: 720px;
 display: flex;
 flex-direction: column;
 `, [cB("calendar-prev-btn", `
 cursor: pointer;
 `), cB("calendar-next-btn", `
 cursor: pointer;
 `), cB("calendar-header", `
 display: flex;
 align-items: center;
 line-height: 1;
 font-size: var(--n-title-font-size);
 padding: 0 0 18px 0;
 justify-content: space-between;
 `, [cE("title", `
 color: var(--n-title-text-color);
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 `), cE("extra", `
 display: flex;
 align-items: center;
 `)]), cB("calendar-dates", `
 display: grid;
 grid-template-columns: repeat(7, minmax(0, 1fr));
 grid-auto-rows: 1fr;
 border-radius: var(--n-border-radius);
 flex: 1;
 border-top: 1px solid;
 border-left: 1px solid;
 border-color: var(--n-border-color);
 transition: border-color .3s var(--n-bezier);
 `), cB("calendar-cell", `
 box-sizing: border-box;
 padding: 10px;
 border-right: 1px solid;
 border-bottom: 1px solid;
 border-color: var(--n-border-color);
 cursor: pointer;
 position: relative;
 transition:
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `, [c$1("&:nth-child(7)", `
 border-top-right-radius: var(--n-border-radius);
 `), c$1("&:nth-last-child(7)", `
 border-bottom-left-radius: var(--n-border-radius);
 `), c$1("&:last-child", `
 border-bottom-right-radius: var(--n-border-radius);
 `), c$1("&:hover", `
 background-color: var(--n-cell-color-hover);
 `), cE("bar", `
 position: absolute;
 left: 0;
 right: 0;
 bottom: -1px;
 height: 3px;
 background-color: #0000;
 transition: background-color .3s var(--n-bezier);
 `), cM("selected", [cE("bar", `
 background-color: var(--n-bar-color);
 `)]), cB("calendar-date", `
 transition:
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 color: var(--n-text-color);
 `, [cE("date", `
 color: var(--n-text-color);
 `)]), cM("disabled, other-month", `
 color: var(--n-day-text-color);
 `, [cB("calendar-date", [cE("date", `
 color: var(--n-day-text-color);
 `)])]), cM("disabled", `
 cursor: not-allowed;
 `), cM("current", [cB("calendar-date", [cE("date", `
 color: var(--n-date-text-color-current);
 background-color: var(--n-date-color-current);
 `)])]), cB("calendar-date", `
 position: relative;
 line-height: 1;
 display: flex;
 align-items: center;
 height: 1em;
 justify-content: space-between;
 padding-bottom: .75em;
 `, [cE("date", `
 border-radius: 50%;
 display: flex;
 align-items: center;
 justify-content: center;
 margin-left: -0.4em;
 width: 1.8em;
 height: 1.8em;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `), cE("day", `
 color: var(--n-day-text-color);
 transition: color .3s var(--n-bezier);
 `)])])]), insideModal(cB("calendar", [cB("calendar-dates", `
 border-color: var(--n-border-color-modal);
 `), cB("calendar-cell", `
 border-color: var(--n-border-color-modal);
 `, [c$1("&:hover", `
 background-color: var(--n-cell-color-hover-modal);
 `)])])), insidePopover(cB("calendar", [cB("calendar-dates", `
 border-color: var(--n-border-color-popover);
 `), cB("calendar-cell", `
 border-color: var(--n-border-color-popover);
 `, [c$1("&:hover", `
 background-color: var(--n-cell-color-hover-popover);
 `)])]))]);
const calendarProps = Object.assign(Object.assign({}, useTheme.props), {
  isDateDisabled: Function,
  value: Number,
  defaultValue: {
    type: Number,
    default: null
  },
  onPanelChange: Function,
  "onUpdate:value": [Function, Array],
  onUpdateValue: [Function, Array]
});
const __nuxt_component_18 = defineComponent({
  name: "Calendar",
  props: calendarProps,
  setup(props) {
    var _a;
    const {
      mergedClsPrefixRef,
      inlineThemeDisabled
    } = useConfig(props);
    const themeRef = useTheme("Calendar", "-calendar", style$g, calendarLight, props, mergedClsPrefixRef);
    const {
      localeRef,
      dateLocaleRef
    } = useLocale("DatePicker");
    const now = Date.now();
    const monthTsRef = ref(startOfMonth((_a = props.defaultValue) !== null && _a !== void 0 ? _a : now).valueOf());
    const uncontrolledValueRef = ref(props.defaultValue || null);
    const mergedValueRef = useMergedState(toRef(props, "value"), uncontrolledValueRef);
    function doUpdateValue(value, time2) {
      const {
        onUpdateValue,
        "onUpdate:value": _onUpdateValue
      } = props;
      if (onUpdateValue) {
        call(onUpdateValue, value, time2);
      }
      if (_onUpdateValue) {
        call(_onUpdateValue, value, time2);
      }
      uncontrolledValueRef.value = value;
    }
    function handlePrevClick() {
      var _a2;
      const monthTs = addMonths(monthTsRef.value, -1).valueOf();
      monthTsRef.value = monthTs;
      (_a2 = props.onPanelChange) === null || _a2 === void 0 ? void 0 : _a2.call(props, {
        year: getYear(monthTs),
        month: getMonth(monthTs) + 1
      });
    }
    function handleNextClick() {
      var _a2;
      const monthTs = addMonths(monthTsRef.value, 1).valueOf();
      monthTsRef.value = monthTs;
      (_a2 = props.onPanelChange) === null || _a2 === void 0 ? void 0 : _a2.call(props, {
        year: getYear(monthTs),
        month: getMonth(monthTs) + 1
      });
    }
    function handleTodayClick() {
      var _a2;
      const {
        value: monthTs
      } = monthTsRef;
      const oldYear = getYear(monthTs);
      const oldMonth = getMonth(monthTs);
      const newMonthTs = startOfMonth(now).valueOf();
      monthTsRef.value = newMonthTs;
      const newYear = getYear(newMonthTs);
      const newMonth = getMonth(newMonthTs);
      if (oldYear !== newYear || oldMonth !== newMonth) {
        (_a2 = props.onPanelChange) === null || _a2 === void 0 ? void 0 : _a2.call(props, {
          year: newYear,
          month: newMonth + 1
        });
      }
    }
    const cssVarsRef = computed(() => {
      const {
        common: {
          cubicBezierEaseInOut
        },
        self: {
          borderColor,
          borderColorModal,
          borderColorPopover,
          borderRadius,
          titleFontSize,
          textColor,
          titleFontWeight,
          titleTextColor,
          dayTextColor,
          fontSize,
          lineHeight,
          dateColorCurrent,
          dateTextColorCurrent,
          cellColorHover,
          cellColor,
          cellColorModal,
          barColor,
          cellColorPopover,
          cellColorHoverModal,
          cellColorHoverPopover
        }
      } = themeRef.value;
      return {
        "--n-bezier": cubicBezierEaseInOut,
        "--n-border-color": borderColor,
        "--n-border-color-modal": borderColorModal,
        "--n-border-color-popover": borderColorPopover,
        "--n-border-radius": borderRadius,
        "--n-text-color": textColor,
        "--n-title-font-weight": titleFontWeight,
        "--n-title-font-size": titleFontSize,
        "--n-title-text-color": titleTextColor,
        "--n-day-text-color": dayTextColor,
        "--n-font-size": fontSize,
        "--n-line-height": lineHeight,
        "--n-date-color-current": dateColorCurrent,
        "--n-date-text-color-current": dateTextColorCurrent,
        "--n-cell-color": cellColor,
        "--n-cell-color-modal": cellColorModal,
        "--n-cell-color-popover": cellColorPopover,
        "--n-cell-color-hover": cellColorHover,
        "--n-cell-color-hover-modal": cellColorHoverModal,
        "--n-cell-color-hover-popover": cellColorHoverPopover,
        "--n-bar-color": barColor
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("calendar", void 0, cssVarsRef, props) : void 0;
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      locale: localeRef,
      dateLocale: dateLocaleRef,
      now,
      mergedValue: mergedValueRef,
      monthTs: monthTsRef,
      dateItems: computed(() => {
        return dateArray(monthTsRef.value, mergedValueRef.value, now, localeRef.value.firstDayOfWeek, true);
      }),
      doUpdateValue,
      handleTodayClick,
      handlePrevClick,
      handleNextClick,
      mergedTheme: themeRef,
      cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
    };
  },
  render() {
    const {
      isDateDisabled,
      mergedClsPrefix,
      monthTs,
      cssVars,
      mergedValue,
      mergedTheme,
      $slots,
      locale: {
        monthBeforeYear,
        today
      },
      dateLocale: {
        locale: locale2
      },
      handleTodayClick,
      handlePrevClick,
      handleNextClick,
      onRender
    } = this;
    onRender === null || onRender === void 0 ? void 0 : onRender();
    const normalizedValue = mergedValue && startOfDay(mergedValue).valueOf();
    const year = getYear(monthTs);
    const calendarMonth = getMonth(monthTs) + 1;
    return h("div", {
      class: [`${mergedClsPrefix}-calendar`, this.themeClass],
      style: cssVars
    }, h("div", {
      class: `${mergedClsPrefix}-calendar-header`
    }, h("div", {
      class: `${mergedClsPrefix}-calendar-header__title`
    }, resolveSlotWithProps($slots.header, {
      year,
      month: calendarMonth
    }, () => {
      const localeMonth = format$3(monthTs, "MMMM", {
        locale: locale2
      });
      return [monthBeforeYear ? `${localeMonth} ${year}` : `${year} ${localeMonth}`];
    })), h("div", {
      class: `${mergedClsPrefix}-calendar-header__extra`
    }, h(NButtonGroup, null, {
      default: () => h(Fragment, null, h(Button, {
        size: "small",
        onClick: handlePrevClick,
        theme: mergedTheme.peers.Button,
        themeOverrides: mergedTheme.peerOverrides.Button
      }, {
        icon: () => h(NBaseIcon, {
          clsPrefix: mergedClsPrefix,
          class: `${mergedClsPrefix}-calendar-prev-btn`
        }, {
          default: () => h(ChevronLeftIcon, null)
        })
      }), h(Button, {
        size: "small",
        onClick: handleTodayClick,
        theme: mergedTheme.peers.Button,
        themeOverrides: mergedTheme.peerOverrides.Button
      }, {
        default: () => today
      }), h(Button, {
        size: "small",
        onClick: handleNextClick,
        theme: mergedTheme.peers.Button,
        themeOverrides: mergedTheme.peerOverrides.Button
      }, {
        icon: () => h(NBaseIcon, {
          clsPrefix: mergedClsPrefix,
          class: `${mergedClsPrefix}-calendar-next-btn`
        }, {
          default: () => h(ChevronRightIcon, null)
        })
      }))
    }))), h("div", {
      class: `${mergedClsPrefix}-calendar-dates`
    }, this.dateItems.map(({
      dateObject,
      ts,
      inCurrentMonth,
      isCurrentDate
    }, index) => {
      var _a;
      const {
        year: year2,
        month,
        date
      } = dateObject;
      const fullDate = format$3(ts, "yyyy-MM-dd");
      const notInCurrentMonth = !inCurrentMonth;
      const disabled = (isDateDisabled === null || isDateDisabled === void 0 ? void 0 : isDateDisabled(ts)) === true;
      const selected = normalizedValue === startOfDay(ts).valueOf();
      return h("div", {
        key: `${calendarMonth}-${index}`,
        class: [`${mergedClsPrefix}-calendar-cell`, disabled && `${mergedClsPrefix}-calendar-cell--disabled`, notInCurrentMonth && `${mergedClsPrefix}-calendar-cell--other-month`, disabled && `${mergedClsPrefix}-calendar-cell--not-allowed`, isCurrentDate && `${mergedClsPrefix}-calendar-cell--current`, selected && `${mergedClsPrefix}-calendar-cell--selected`],
        onClick: () => {
          var _a2;
          if (disabled)
            return;
          const monthTs2 = startOfMonth(ts).valueOf();
          this.monthTs = monthTs2;
          if (notInCurrentMonth) {
            (_a2 = this.onPanelChange) === null || _a2 === void 0 ? void 0 : _a2.call(this, {
              year: getYear(monthTs2),
              month: getMonth(monthTs2) + 1
            });
          }
          this.doUpdateValue(ts, {
            year: year2,
            month: month + 1,
            date
          });
        }
      }, h("div", {
        class: `${mergedClsPrefix}-calendar-date`
      }, h("div", {
        class: `${mergedClsPrefix}-calendar-date__date`,
        title: fullDate
      }, date), index < 7 && h("div", {
        class: `${mergedClsPrefix}-calendar-date__day`,
        title: fullDate
      }, format$3(ts, "EEE", {
        locale: locale2
      }))), (_a = $slots.default) === null || _a === void 0 ? void 0 : _a.call($slots, {
        year: year2,
        month: month + 1,
        date
      }), h("div", {
        class: `${mergedClsPrefix}-calendar-cell__bar`
      }));
    })));
  }
});
const self$10 = (vars) => {
  const {
    fontSize,
    boxShadow2,
    popoverColor,
    textColor2,
    borderRadius,
    borderColor,
    heightSmall,
    heightMedium,
    heightLarge,
    fontSizeSmall,
    fontSizeMedium,
    fontSizeLarge,
    dividerColor
  } = vars;
  return {
    panelFontSize: fontSize,
    boxShadow: boxShadow2,
    color: popoverColor,
    textColor: textColor2,
    borderRadius,
    border: `1px solid ${borderColor}`,
    heightSmall,
    heightMedium,
    heightLarge,
    fontSizeSmall,
    fontSizeMedium,
    fontSizeLarge,
    dividerColor
  };
};
const colorPickerLight = createTheme({
  name: "ColorPicker",
  common: derived$1,
  peers: {
    Input: inputLight,
    Button: buttonLight
  },
  self: self$10
});
const colorPickerDark = {
  name: "ColorPicker",
  common: derived,
  peers: {
    Input: inputDark,
    Button: buttonDark
  },
  self: self$10
};
function deriveDefaultValue(modes, showAlpha) {
  const mode = modes[0];
  switch (mode) {
    case "hex":
      return showAlpha ? "#000000FF" : "#000000";
    case "rgb":
      return showAlpha ? "rgba(0, 0, 0, 1)" : "rgb(0, 0, 0)";
    case "hsl":
      return showAlpha ? "hsla(0, 0%, 0%, 1)" : "hsl(0, 0%, 0%)";
    case "hsv":
      return showAlpha ? "hsva(0, 0%, 0%, 1)" : "hsv(0, 0%, 0%)";
  }
  if (process.env.NODE_ENV !== "production")
    warn("color-picker", "props.modes is invalid.");
  return "#000000";
}
function getModeFromValue(color) {
  if (color === null)
    return null;
  if (/^ *#/.test(color))
    return "hex";
  if (color.includes("rgb"))
    return "rgb";
  if (color.includes("hsl"))
    return "hsl";
  if (color.includes("hsv"))
    return "hsv";
  return null;
}
function normalizeHue(hue) {
  hue = Math.round(hue);
  return hue >= 360 ? 359 : hue < 0 ? 0 : hue;
}
function normalizeAlpha(alpha) {
  alpha = Math.round(alpha * 100) / 100;
  return alpha > 1 ? 1 : alpha < 0 ? 0 : alpha;
}
const convert = {
  rgb: {
    hex(value) {
      return toHexaString(rgba(value));
    },
    hsl(value) {
      const [r, g, b2, a3] = rgba(value);
      return toHslaString([...rgb2hsl(r, g, b2), a3]);
    },
    hsv(value) {
      const [r, g, b2, a3] = rgba(value);
      return toHsvaString([...rgb2hsv(r, g, b2), a3]);
    }
  },
  hex: {
    rgb(value) {
      return toRgbaString(rgba(value));
    },
    hsl(value) {
      const [r, g, b2, a3] = rgba(value);
      return toHslaString([...rgb2hsl(r, g, b2), a3]);
    },
    hsv(value) {
      const [r, g, b2, a3] = rgba(value);
      return toHsvaString([...rgb2hsv(r, g, b2), a3]);
    }
  },
  hsl: {
    hex(value) {
      const [h4, s3, l, a3] = hsla(value);
      return toHexaString([...hsl2rgb(h4, s3, l), a3]);
    },
    rgb(value) {
      const [h4, s3, l, a3] = hsla(value);
      return toRgbaString([...hsl2rgb(h4, s3, l), a3]);
    },
    hsv(value) {
      const [h4, s3, l, a3] = hsla(value);
      return toHsvaString([...hsl2hsv(h4, s3, l), a3]);
    }
  },
  hsv: {
    hex(value) {
      const [h4, s3, v, a3] = hsva(value);
      return toHexaString([...hsv2rgb(h4, s3, v), a3]);
    },
    rgb(value) {
      const [h4, s3, v, a3] = hsva(value);
      return toRgbaString([...hsv2rgb(h4, s3, v), a3]);
    },
    hsl(value) {
      const [h4, s3, v, a3] = hsva(value);
      return toHslaString([...hsv2hsl(h4, s3, v), a3]);
    }
  }
};
function convertColor(value, mode, originalMode) {
  originalMode = originalMode || getModeFromValue(value);
  if (!originalMode)
    return null;
  if (originalMode === mode)
    return value;
  const conversions = convert[originalMode];
  return conversions[mode](value);
}
const HANDLE_SIZE$2 = "12px";
const HANDLE_SIZE_NUM$1 = 12;
const RADIUS$2 = "6px";
const RADIUS_NUM = 6;
const GRADIENT = "linear-gradient(90deg,red,#ff0 16.66%,#0f0 33.33%,#0ff 50%,#00f 66.66%,#f0f 83.33%,red)";
const HueSlider = defineComponent({
  name: "HueSlider",
  props: {
    clsPrefix: {
      type: String,
      required: true
    },
    hue: {
      type: Number,
      required: true
    },
    onUpdateHue: {
      type: Function,
      required: true
    },
    onComplete: Function
  },
  setup(props) {
    const railRef = ref(null);
    function handleMouseDown(e2) {
      if (!railRef.value)
        return;
      on("mousemove", void 0, handleMouseMove);
      on("mouseup", void 0, handleMouseUp);
      handleMouseMove(e2);
    }
    function handleMouseMove(e2) {
      const {
        value: railEl
      } = railRef;
      if (!railEl)
        return;
      const {
        width,
        left
      } = railEl.getBoundingClientRect();
      const newHue = normalizeHue((e2.clientX - left - RADIUS_NUM) / (width - HANDLE_SIZE_NUM$1) * 360);
      props.onUpdateHue(newHue);
    }
    function handleMouseUp() {
      var _a;
      off("mousemove", void 0, handleMouseMove);
      off("mouseup", void 0, handleMouseUp);
      (_a = props.onComplete) === null || _a === void 0 ? void 0 : _a.call(props);
    }
    return {
      railRef,
      handleMouseDown
    };
  },
  render() {
    const {
      clsPrefix
    } = this;
    return h("div", {
      class: `${clsPrefix}-color-picker-slider`,
      style: {
        height: HANDLE_SIZE$2,
        borderRadius: RADIUS$2
      }
    }, h("div", {
      ref: "railRef",
      style: {
        boxShadow: "inset 0 0 2px 0 rgba(0, 0, 0, .24)",
        boxSizing: "border-box",
        backgroundImage: GRADIENT,
        height: HANDLE_SIZE$2,
        borderRadius: RADIUS$2,
        position: "relative"
      },
      onMousedown: this.handleMouseDown
    }, h("div", {
      style: {
        position: "absolute",
        left: RADIUS$2,
        right: RADIUS$2,
        top: 0,
        bottom: 0
      }
    }, h("div", {
      class: `${clsPrefix}-color-picker-handle`,
      style: {
        left: `calc((${this.hue}%) / 359 * 100 - ${RADIUS$2})`,
        borderRadius: RADIUS$2,
        width: HANDLE_SIZE$2,
        height: HANDLE_SIZE$2
      }
    }, h("div", {
      class: `${clsPrefix}-color-picker-handle__fill`,
      style: {
        backgroundColor: `hsl(${this.hue}, 100%, 50%)`,
        borderRadius: RADIUS$2,
        width: HANDLE_SIZE$2,
        height: HANDLE_SIZE$2
      }
    })))));
  }
});
const HANDLE_SIZE$1 = "12px";
const HANDLE_SIZE_NUM = 12;
const RADIUS$1 = "6px";
const AlphaSlider = defineComponent({
  name: "AlphaSlider",
  props: {
    clsPrefix: {
      type: String,
      required: true
    },
    rgba: {
      type: Array,
      default: null
    },
    alpha: {
      type: Number,
      default: 0
    },
    onUpdateAlpha: {
      type: Function,
      required: true
    },
    onComplete: Function
  },
  setup(props) {
    const railRef = ref(null);
    function handleMouseDown(e2) {
      if (!railRef.value || !props.rgba)
        return;
      on("mousemove", void 0, handleMouseMove);
      on("mouseup", void 0, handleMouseUp);
      handleMouseMove(e2);
    }
    function handleMouseMove(e2) {
      const {
        value: railEl
      } = railRef;
      if (!railEl)
        return;
      const {
        width,
        left
      } = railEl.getBoundingClientRect();
      const newAlpha = (e2.clientX - left) / (width - HANDLE_SIZE_NUM);
      props.onUpdateAlpha(normalizeAlpha(newAlpha));
    }
    function handleMouseUp() {
      var _a;
      off("mousemove", void 0, handleMouseMove);
      off("mouseup", void 0, handleMouseUp);
      (_a = props.onComplete) === null || _a === void 0 ? void 0 : _a.call(props);
    }
    return {
      railRef,
      railBackgroundImage: computed(() => {
        const {
          rgba: rgba2
        } = props;
        if (!rgba2)
          return "";
        return `linear-gradient(to right, rgba(${rgba2[0]}, ${rgba2[1]}, ${rgba2[2]}, 0) 0%, rgba(${rgba2[0]}, ${rgba2[1]}, ${rgba2[2]}, 1) 100%)`;
      }),
      handleMouseDown
    };
  },
  render() {
    const {
      clsPrefix
    } = this;
    return h("div", {
      class: `${clsPrefix}-color-picker-slider`,
      ref: "railRef",
      style: {
        height: HANDLE_SIZE$1,
        borderRadius: RADIUS$1
      },
      onMousedown: this.handleMouseDown
    }, h("div", {
      style: {
        borderRadius: RADIUS$1,
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        overflow: "hidden"
      }
    }, h("div", {
      class: `${clsPrefix}-color-picker-checkboard`
    }), h("div", {
      class: `${clsPrefix}-color-picker-slider__image`,
      style: {
        backgroundImage: this.railBackgroundImage
      }
    })), this.rgba && h("div", {
      style: {
        position: "absolute",
        left: RADIUS$1,
        right: RADIUS$1,
        top: 0,
        bottom: 0
      }
    }, h("div", {
      class: `${clsPrefix}-color-picker-handle`,
      style: {
        left: `calc(${this.alpha * 100}% - ${RADIUS$1})`,
        borderRadius: RADIUS$1,
        width: HANDLE_SIZE$1,
        height: HANDLE_SIZE$1
      }
    }, h("div", {
      class: `${clsPrefix}-color-picker-handle__fill`,
      style: {
        backgroundColor: toRgbaString(this.rgba),
        borderRadius: RADIUS$1,
        width: HANDLE_SIZE$1,
        height: HANDLE_SIZE$1
      }
    }))));
  }
});
const HANDLE_SIZE = "12px";
const RADIUS = "6px";
const Pallete = defineComponent({
  name: "Pallete",
  props: {
    clsPrefix: {
      type: String,
      required: true
    },
    rgba: {
      type: Array,
      default: null
    },
    // 0 - 360
    displayedHue: {
      type: Number,
      required: true
    },
    displayedSv: {
      type: Array,
      required: true
    },
    onUpdateSV: {
      type: Function,
      required: true
    },
    onComplete: Function
  },
  setup(props) {
    const palleteRef = ref(null);
    function handleMouseDown(e2) {
      if (!palleteRef.value)
        return;
      on("mousemove", void 0, handleMouseMove);
      on("mouseup", void 0, handleMouseUp);
      handleMouseMove(e2);
    }
    function handleMouseMove(e2) {
      const {
        value: palleteEl
      } = palleteRef;
      if (!palleteEl)
        return;
      const {
        width,
        height,
        left,
        bottom
      } = palleteEl.getBoundingClientRect();
      const newV = (bottom - e2.clientY) / height;
      const newS = (e2.clientX - left) / width;
      const normalizedNewS = 100 * (newS > 1 ? 1 : newS < 0 ? 0 : newS);
      const normalizedNewV = 100 * (newV > 1 ? 1 : newV < 0 ? 0 : newV);
      props.onUpdateSV(normalizedNewS, normalizedNewV);
    }
    function handleMouseUp() {
      var _a;
      off("mousemove", void 0, handleMouseMove);
      off("mouseup", void 0, handleMouseUp);
      (_a = props.onComplete) === null || _a === void 0 ? void 0 : _a.call(props);
    }
    return {
      palleteRef,
      handleColor: computed(() => {
        const {
          rgba: rgba2
        } = props;
        if (!rgba2)
          return "";
        return `rgb(${rgba2[0]}, ${rgba2[1]}, ${rgba2[2]})`;
      }),
      handleMouseDown
    };
  },
  render() {
    const {
      clsPrefix
    } = this;
    return h("div", {
      class: `${clsPrefix}-color-picker-pallete`,
      onMousedown: this.handleMouseDown,
      ref: "palleteRef"
    }, h("div", {
      class: `${clsPrefix}-color-picker-pallete__layer`,
      style: {
        backgroundImage: `linear-gradient(90deg, white, hsl(${this.displayedHue}, 100%, 50%))`
      }
    }), h("div", {
      class: `${clsPrefix}-color-picker-pallete__layer ${clsPrefix}-color-picker-pallete__layer--shadowed`,
      style: {
        backgroundImage: "linear-gradient(180deg, rgba(0, 0, 0, 0%), rgba(0, 0, 0, 100%))"
      }
    }), this.rgba && h("div", {
      class: `${clsPrefix}-color-picker-handle`,
      style: {
        width: HANDLE_SIZE,
        height: HANDLE_SIZE,
        borderRadius: RADIUS,
        left: `calc(${this.displayedSv[0]}% - ${RADIUS})`,
        bottom: `calc(${this.displayedSv[1]}% - ${RADIUS})`
      }
    }, h("div", {
      class: `${clsPrefix}-color-picker-handle__fill`,
      style: {
        backgroundColor: this.handleColor,
        borderRadius: RADIUS,
        width: HANDLE_SIZE,
        height: HANDLE_SIZE
      }
    })));
  }
});
const colorPickerInjectionKey = createInjectionKey("n-color-picker");
function normalizeRgbUnit(value) {
  if (/^\d{1,3}\.?\d*$/.test(value.trim())) {
    return Math.max(0, Math.min(parseInt(value), 255));
  }
  return false;
}
function normalizeHueUnit(value) {
  if (/^\d{1,3}\.?\d*$/.test(value.trim())) {
    return Math.max(0, Math.min(parseInt(value), 360));
  }
  return false;
}
function normalizeSlvUnit(value) {
  if (/^\d{1,3}\.?\d*$/.test(value.trim())) {
    return Math.max(0, Math.min(parseInt(value), 100));
  }
  return false;
}
function normalizeHexaUnit(value) {
  const trimmedValue = value.trim();
  if (/^#[0-9a-fA-F]+$/.test(trimmedValue)) {
    return [4, 5, 7, 9].includes(trimmedValue.length);
  }
  return false;
}
function normalizeAlphaUnit(value) {
  if (/^\d{1,3}\.?\d*%$/.test(value.trim())) {
    return Math.max(0, Math.min(parseInt(value) / 100, 100));
  }
  return false;
}
const inputThemeOverrides = {
  paddingSmall: "0 4px"
};
const ColorInputUnit = defineComponent({
  name: "ColorInputUnit",
  props: {
    label: {
      type: String,
      required: true
    },
    value: {
      type: [Number, String],
      default: null
    },
    showAlpha: Boolean,
    onUpdateValue: {
      type: Function,
      required: true
    }
  },
  setup(props) {
    const inputValueRef = ref("");
    const {
      themeRef
    } = inject(colorPickerInjectionKey, null);
    watchEffect(() => {
      inputValueRef.value = getInputString();
    });
    function getInputString() {
      const {
        value
      } = props;
      if (value === null)
        return "";
      const {
        label
      } = props;
      if (label === "HEX") {
        return value;
      }
      if (label === "A") {
        return `${Math.floor(value * 100)}%`;
      }
      return String(Math.floor(value));
    }
    function handleInputUpdateValue(value) {
      inputValueRef.value = value;
    }
    function handleInputChange(value) {
      let unit;
      let valid;
      switch (props.label) {
        case "HEX":
          valid = normalizeHexaUnit(value);
          if (valid) {
            props.onUpdateValue(value);
          }
          inputValueRef.value = getInputString();
          break;
        case "H":
          unit = normalizeHueUnit(value);
          if (unit === false) {
            inputValueRef.value = getInputString();
          } else {
            props.onUpdateValue(unit);
          }
          break;
        case "S":
        case "L":
        case "V":
          unit = normalizeSlvUnit(value);
          if (unit === false) {
            inputValueRef.value = getInputString();
          } else {
            props.onUpdateValue(unit);
          }
          break;
        case "A":
          unit = normalizeAlphaUnit(value);
          if (unit === false) {
            inputValueRef.value = getInputString();
          } else {
            props.onUpdateValue(unit);
          }
          break;
        case "R":
        case "G":
        case "B":
          unit = normalizeRgbUnit(value);
          if (unit === false) {
            inputValueRef.value = getInputString();
          } else {
            props.onUpdateValue(unit);
          }
          break;
      }
    }
    return {
      mergedTheme: themeRef,
      inputValue: inputValueRef,
      handleInputChange,
      handleInputUpdateValue
    };
  },
  render() {
    const {
      mergedTheme
    } = this;
    return h(__nuxt_component_3, {
      size: "small",
      placeholder: this.label,
      theme: mergedTheme.peers.Input,
      themeOverrides: mergedTheme.peerOverrides.Input,
      builtinThemeOverrides: inputThemeOverrides,
      value: this.inputValue,
      onUpdateValue: this.handleInputUpdateValue,
      onChange: this.handleInputChange,
      // add more space for xxx% input
      style: this.label === "A" ? "flex-grow: 1.25;" : ""
    });
  }
});
const ColorInput = defineComponent({
  name: "ColorInput",
  props: {
    clsPrefix: {
      type: String,
      required: true
    },
    mode: {
      type: String,
      required: true
    },
    modes: {
      type: Array,
      required: true
    },
    showAlpha: {
      type: Boolean,
      required: true
    },
    value: {
      // for hex to get percise value
      type: String,
      default: null
    },
    valueArr: {
      type: Array,
      default: null
    },
    onUpdateValue: {
      type: Function,
      required: true
    },
    onUpdateMode: {
      type: Function,
      required: true
    }
  },
  setup(props) {
    return {
      handleUnitUpdateValue(index, value) {
        const {
          showAlpha
        } = props;
        if (props.mode === "hex") {
          props.onUpdateValue((showAlpha ? toHexaString : toHexString)(value));
          return;
        }
        let nextValueArr;
        if (props.valueArr === null) {
          nextValueArr = [0, 0, 0, 0];
        } else {
          nextValueArr = Array.from(props.valueArr);
        }
        switch (props.mode) {
          case "hsv":
            nextValueArr[index] = value;
            props.onUpdateValue((showAlpha ? toHsvaString : toHsvString)(nextValueArr));
            break;
          case "rgb":
            nextValueArr[index] = value;
            props.onUpdateValue((showAlpha ? toRgbaString : toRgbString)(nextValueArr));
            break;
          case "hsl":
            nextValueArr[index] = value;
            props.onUpdateValue((showAlpha ? toHslaString : toHslString)(nextValueArr));
            break;
        }
      }
    };
  },
  render() {
    const {
      clsPrefix,
      modes
    } = this;
    return h("div", {
      class: `${clsPrefix}-color-picker-input`
    }, h("div", {
      class: `${clsPrefix}-color-picker-input__mode`,
      onClick: this.onUpdateMode,
      style: {
        cursor: modes.length === 1 ? "" : "pointer"
      }
    }, this.mode.toUpperCase() + (this.showAlpha ? "A" : "")), h(NInputGroup, null, {
      default: () => {
        const {
          mode,
          valueArr,
          showAlpha
        } = this;
        if (mode === "hex") {
          let hexValue = null;
          try {
            hexValue = valueArr === null ? null : (showAlpha ? toHexaString : toHexString)(valueArr);
          } catch (_a) {
          }
          return h(ColorInputUnit, {
            label: "HEX",
            showAlpha,
            value: hexValue,
            onUpdateValue: (unitValue) => {
              this.handleUnitUpdateValue(0, unitValue);
            }
          });
        }
        return (mode + (showAlpha ? "a" : "")).split("").map((v, i2) => h(ColorInputUnit, {
          label: v.toUpperCase(),
          value: valueArr === null ? null : valueArr[i2],
          onUpdateValue: (unitValue) => {
            this.handleUnitUpdateValue(i2, unitValue);
          }
        }));
      }
    }));
  }
});
const ColorPickerTrigger = defineComponent({
  name: "ColorPickerTrigger",
  props: {
    clsPrefix: {
      type: String,
      required: true
    },
    value: {
      type: String,
      default: null
    },
    hsla: {
      type: Array,
      default: null
    },
    disabled: Boolean,
    onClick: Function
  },
  setup(props) {
    const {
      colorPickerSlots,
      renderLabelRef
    } = inject(colorPickerInjectionKey, null);
    return () => {
      const {
        hsla: hsla2,
        value,
        clsPrefix,
        onClick,
        disabled
      } = props;
      const renderLabel = colorPickerSlots.label || renderLabelRef.value;
      return h("div", {
        class: [`${clsPrefix}-color-picker-trigger`, disabled && `${clsPrefix}-color-picker-trigger--disabled`],
        onClick: disabled ? void 0 : onClick
      }, h("div", {
        class: `${clsPrefix}-color-picker-trigger__fill`
      }, h("div", {
        class: `${clsPrefix}-color-picker-checkboard`
      }), h("div", {
        style: {
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          backgroundColor: hsla2 ? toHslaString(hsla2) : ""
        }
      }), value && hsla2 ? h("div", {
        class: `${clsPrefix}-color-picker-trigger__value`,
        style: {
          color: hsla2[2] > 50 || hsla2[3] < 0.5 ? "black" : "white"
        }
      }, renderLabel ? renderLabel(value) : value) : null));
    };
  }
});
function normalizeColor(color, mode) {
  if (mode === "hsv") {
    const [h22, s3, v, a3] = hsva(color);
    return toRgbaString([...hsv2rgb(h22, s3, v), a3]);
  }
  return color;
}
function getHexFromName(color) {
  const ctx = (void 0).createElement("canvas").getContext("2d");
  if (!ctx) {
    return "#000000";
  }
  ctx.fillStyle = color;
  return ctx.fillStyle;
}
const ColorPickerSwatches = defineComponent({
  name: "ColorPickerSwatches",
  props: {
    clsPrefix: {
      type: String,
      required: true
    },
    mode: {
      type: String,
      required: true
    },
    swatches: {
      type: Array,
      required: true
    },
    onUpdateColor: {
      type: Function,
      required: true
    }
  },
  setup(props) {
    const parsedSwatchesRef = computed(() => props.swatches.map((value) => {
      const mode = getModeFromValue(value);
      return {
        value,
        mode,
        legalValue: normalizeColor(value, mode)
      };
    }));
    function normalizeOutput(parsed) {
      const {
        mode: modeProp
      } = props;
      let {
        value,
        mode: swatchColorMode
      } = parsed;
      if (!swatchColorMode) {
        swatchColorMode = "hex";
        if (/^[a-zA-Z]+$/.test(value)) {
          value = getHexFromName(value);
        } else {
          warn("color-picker", `color ${value} in swatches is invalid.`);
          value = "#000000";
        }
      }
      if (swatchColorMode === modeProp)
        return value;
      return convertColor(value, modeProp, swatchColorMode);
    }
    function handleSwatchSelect(parsed) {
      props.onUpdateColor(normalizeOutput(parsed));
    }
    function handleSwatchKeyDown(e2, parsed) {
      if (e2.key === "Enter")
        handleSwatchSelect(parsed);
    }
    return {
      parsedSwatchesRef,
      handleSwatchSelect,
      handleSwatchKeyDown
    };
  },
  render() {
    const {
      clsPrefix
    } = this;
    return h("div", {
      class: `${clsPrefix}-color-picker-swatches`
    }, this.parsedSwatchesRef.map((swatch) => h("div", {
      class: `${clsPrefix}-color-picker-swatch`,
      tabindex: 0,
      onClick: () => {
        this.handleSwatchSelect(swatch);
      },
      onKeydown: (e2) => {
        this.handleSwatchKeyDown(e2, swatch);
      }
    }, h("div", {
      class: `${clsPrefix}-color-picker-swatch__fill`,
      style: {
        background: swatch.legalValue
      }
    }))));
  }
});
const ColorPreview = defineComponent({
  name: "ColorPreview",
  props: {
    clsPrefix: {
      type: String,
      required: true
    },
    mode: {
      type: String,
      required: true
    },
    color: {
      type: String,
      default: null,
      validator: (value) => {
        const mode = getModeFromValue(value);
        return Boolean(!value || mode && mode !== "hsv");
      }
    },
    onUpdateColor: {
      type: Function,
      required: true
    }
  },
  setup(props) {
    function handleChange(e2) {
      var _a;
      const value = e2.target.value;
      (_a = props.onUpdateColor) === null || _a === void 0 ? void 0 : _a.call(props, convertColor(value.toUpperCase(), props.mode, "hex"));
      e2.stopPropagation();
    }
    return {
      handleChange
    };
  },
  render() {
    const {
      clsPrefix
    } = this;
    return h("div", {
      class: `${clsPrefix}-color-picker-preview__preview`
    }, h("span", {
      class: `${clsPrefix}-color-picker-preview__fill`,
      style: {
        background: this.color || "#000000"
      }
    }), h("input", {
      class: `${clsPrefix}-color-picker-preview__input`,
      type: "color",
      value: this.color,
      onChange: this.handleChange
    }));
  }
});
const style$f = c$1([cB("color-picker", `
 display: inline-block;
 box-sizing: border-box;
 height: var(--n-height);
 font-size: var(--n-font-size);
 width: 100%;
 position: relative;
 `), cB("color-picker-panel", `
 margin: 4px 0;
 width: 240px;
 font-size: var(--n-panel-font-size);
 color: var(--n-text-color);
 background-color: var(--n-color);
 transition:
 box-shadow .3s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 `, [fadeInScaleUpTransition(), cB("input", `
 text-align: center;
 `)]), cB("color-picker-checkboard", `
 background: white; 
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `, [c$1("&::after", `
 background-image: linear-gradient(45deg, #DDD 25%, #0000 25%), linear-gradient(-45deg, #DDD 25%, #0000 25%), linear-gradient(45deg, #0000 75%, #DDD 75%), linear-gradient(-45deg, #0000 75%, #DDD 75%);
 background-size: 12px 12px;
 background-position: 0 0, 0 6px, 6px -6px, -6px 0px;
 background-repeat: repeat;
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]), cB("color-picker-slider", `
 margin-bottom: 8px;
 position: relative;
 box-sizing: border-box;
 `, [cE("image", `
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `), c$1("&::after", `
 content: "";
 position: absolute;
 border-radius: inherit;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 box-shadow: inset 0 0 2px 0 rgba(0, 0, 0, .24);
 pointer-events: none;
 `)]), cB("color-picker-handle", `
 z-index: 1;
 box-shadow: 0 0 2px 0 rgba(0, 0, 0, .45);
 position: absolute;
 background-color: white;
 overflow: hidden;
 `, [cE("fill", `
 box-sizing: border-box;
 border: 2px solid white;
 `)]), cB("color-picker-pallete", `
 height: 180px;
 position: relative;
 margin-bottom: 8px;
 cursor: crosshair;
 `, [cE("layer", `
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `, [cM("shadowed", `
 box-shadow: inset 0 0 2px 0 rgba(0, 0, 0, .24);
 `)])]), cB("color-picker-preview", `
 display: flex;
 `, [cE("sliders", `
 flex: 1 0 auto;
 `), cE("preview", `
 position: relative;
 height: 30px;
 width: 30px;
 margin: 0 0 8px 6px;
 border-radius: 50%;
 box-shadow: rgba(0, 0, 0, .15) 0px 0px 0px 1px inset;
 overflow: hidden;
 `), cE("fill", `
 display: block;
 width: 30px;
 height: 30px;
 `), cE("input", `
 position: absolute;
 top: 0;
 left: 0;
 width: 30px;
 height: 30px;
 opacity: 0;
 z-index: 1;
 `)]), cB("color-picker-input", `
 display: flex;
 align-items: center;
 `, [cB("input", `
 flex-grow: 1;
 flex-basis: 0;
 `), cE("mode", `
 width: 72px;
 text-align: center;
 `)]), cB("color-picker-control", `
 padding: 12px;
 `), cB("color-picker-action", `
 display: flex;
 margin-top: -4px;
 border-top: 1px solid var(--n-divider-color);
 padding: 8px 12px;
 justify-content: flex-end;
 `, [cB("button", "margin-left: 8px;")]), cB("color-picker-trigger", `
 border: var(--n-border);
 height: 100%;
 box-sizing: border-box;
 border-radius: var(--n-border-radius);
 transition: border-color .3s var(--n-bezier);
 cursor: pointer;
 `, [cE("value", `
 white-space: nowrap;
 position: relative;
 `), cE("fill", `
 border-radius: var(--n-border-radius);
 position: absolute;
 display: flex;
 align-items: center;
 justify-content: center;
 left: 4px;
 right: 4px;
 top: 4px;
 bottom: 4px;
 `), cM("disabled", "cursor: not-allowed"), cB("color-picker-checkboard", `
 border-radius: var(--n-border-radius);
 `, [c$1("&::after", `
 --n-block-size: calc((var(--n-height) - 8px) / 3);
 background-size: calc(var(--n-block-size) * 2) calc(var(--n-block-size) * 2);
 background-position: 0 0, 0 var(--n-block-size), var(--n-block-size) calc(-1 * var(--n-block-size)), calc(-1 * var(--n-block-size)) 0px; 
 `)])]), cB("color-picker-swatches", `
 display: grid;
 grid-gap: 8px;
 flex-wrap: wrap;
 position: relative;
 grid-template-columns: repeat(auto-fill, 18px);
 margin-top: 10px;
 `, [cB("color-picker-swatch", `
 width: 18px;
 height: 18px;
 background-image: linear-gradient(45deg, #DDD 25%, #0000 25%), linear-gradient(-45deg, #DDD 25%, #0000 25%), linear-gradient(45deg, #0000 75%, #DDD 75%), linear-gradient(-45deg, #0000 75%, #DDD 75%);
 background-size: 8px 8px;
 background-position: 0px 0, 0px 4px, 4px -4px, -4px 0px;
 background-repeat: repeat;
 `, [cE("fill", `
 position: relative;
 width: 100%;
 height: 100%;
 border-radius: 3px;
 box-shadow: rgba(0, 0, 0, .15) 0px 0px 0px 1px inset;
 cursor: pointer;
 `), c$1("&:focus", `
 outline: none;
 `, [cE("fill", [c$1("&::after", `
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 background: inherit;
 filter: blur(2px);
 content: "";
 `)])])])])]);
const colorPickerProps = Object.assign(Object.assign({}, useTheme.props), {
  value: String,
  show: {
    type: Boolean,
    default: void 0
  },
  defaultShow: Boolean,
  defaultValue: String,
  modes: {
    type: Array,
    // no hsva by default since browser doesn't support it
    default: () => ["rgb", "hex", "hsl"]
  },
  placement: {
    type: String,
    default: "bottom-start"
  },
  to: useAdjustedTo.propTo,
  showAlpha: {
    type: Boolean,
    default: true
  },
  showPreview: Boolean,
  swatches: Array,
  disabled: {
    type: Boolean,
    default: void 0
  },
  actions: {
    type: Array,
    default: null
  },
  internalActions: Array,
  size: String,
  renderLabel: Function,
  onComplete: Function,
  onConfirm: Function,
  "onUpdate:show": [Function, Array],
  onUpdateShow: [Function, Array],
  "onUpdate:value": [Function, Array],
  onUpdateValue: [Function, Array]
});
const __nuxt_component_12 = defineComponent({
  name: "ColorPicker",
  props: colorPickerProps,
  setup(props, {
    slots
  }) {
    const selfRef = ref(null);
    let upcomingValue = null;
    const formItem = useFormItem(props);
    const {
      mergedSizeRef,
      mergedDisabledRef
    } = formItem;
    const {
      localeRef
    } = useLocale("global");
    const {
      mergedClsPrefixRef,
      namespaceRef,
      inlineThemeDisabled
    } = useConfig(props);
    const themeRef = useTheme("ColorPicker", "-color-picker", style$f, colorPickerLight, props, mergedClsPrefixRef);
    provide(colorPickerInjectionKey, {
      themeRef,
      renderLabelRef: toRef(props, "renderLabel"),
      colorPickerSlots: slots
    });
    const uncontrolledShowRef = ref(props.defaultShow);
    const mergedShowRef = useMergedState(toRef(props, "show"), uncontrolledShowRef);
    function doUpdateShow(value) {
      const {
        onUpdateShow,
        "onUpdate:show": _onUpdateShow
      } = props;
      if (onUpdateShow)
        call(onUpdateShow, value);
      if (_onUpdateShow)
        call(_onUpdateShow, value);
      uncontrolledShowRef.value = value;
    }
    const {
      defaultValue
    } = props;
    const uncontrolledValueRef = ref(defaultValue === void 0 ? deriveDefaultValue(props.modes, props.showAlpha) : defaultValue);
    const mergedValueRef = useMergedState(toRef(props, "value"), uncontrolledValueRef);
    const undoStackRef = ref([mergedValueRef.value]);
    const valueIndexRef = ref(0);
    const valueModeRef = computed(() => getModeFromValue(mergedValueRef.value));
    const {
      modes
    } = props;
    const displayedModeRef = ref(getModeFromValue(mergedValueRef.value) || modes[0] || "rgb");
    function handleUpdateDisplayedMode() {
      const {
        modes: modes2
      } = props;
      const {
        value: displayedMode
      } = displayedModeRef;
      const currentModeIndex = modes2.findIndex((mode) => mode === displayedMode);
      if (~currentModeIndex) {
        displayedModeRef.value = modes2[(currentModeIndex + 1) % modes2.length];
      } else {
        displayedModeRef.value = "rgb";
      }
    }
    let _h, s3, l, v, r, g, b2, a3;
    const hsvaRef = computed(() => {
      const {
        value: mergedValue
      } = mergedValueRef;
      if (!mergedValue)
        return null;
      switch (valueModeRef.value) {
        case "hsv":
          return hsva(mergedValue);
        case "hsl":
          [_h, s3, l, a3] = hsla(mergedValue);
          return [...hsl2hsv(_h, s3, l), a3];
        case "rgb":
        case "hex":
          [r, g, b2, a3] = rgba(mergedValue);
          return [...rgb2hsv(r, g, b2), a3];
      }
    });
    const rgbaRef = computed(() => {
      const {
        value: mergedValue
      } = mergedValueRef;
      if (!mergedValue)
        return null;
      switch (valueModeRef.value) {
        case "rgb":
        case "hex":
          return rgba(mergedValue);
        case "hsv":
          [_h, s3, v, a3] = hsva(mergedValue);
          return [...hsv2rgb(_h, s3, v), a3];
        case "hsl":
          [_h, s3, l, a3] = hsla(mergedValue);
          return [...hsl2rgb(_h, s3, l), a3];
      }
    });
    const hslaRef = computed(() => {
      const {
        value: mergedValue
      } = mergedValueRef;
      if (!mergedValue)
        return null;
      switch (valueModeRef.value) {
        case "hsl":
          return hsla(mergedValue);
        case "hsv":
          [_h, s3, v, a3] = hsva(mergedValue);
          return [...hsv2hsl(_h, s3, v), a3];
        case "rgb":
        case "hex":
          [r, g, b2, a3] = rgba(mergedValue);
          return [...rgb2hsl(r, g, b2), a3];
      }
    });
    const mergedValueArrRef = computed(() => {
      switch (displayedModeRef.value) {
        case "rgb":
        case "hex":
          return rgbaRef.value;
        case "hsv":
          return hsvaRef.value;
        case "hsl":
          return hslaRef.value;
      }
    });
    const displayedHueRef = ref(0);
    const displayedAlphaRef = ref(1);
    const displayedSvRef = ref([0, 0]);
    function handleUpdateSv(s4, v2) {
      const {
        value: hsvaArr
      } = hsvaRef;
      const hue = displayedHueRef.value;
      const alpha = hsvaArr ? hsvaArr[3] : 1;
      displayedSvRef.value = [s4, v2];
      const {
        showAlpha
      } = props;
      switch (displayedModeRef.value) {
        case "hsv":
          doUpdateValue((showAlpha ? toHsvaString : toHsvString)([hue, s4, v2, alpha]), "cursor");
          break;
        case "hsl":
          doUpdateValue((showAlpha ? toHslaString : toHslString)([...hsv2hsl(hue, s4, v2), alpha]), "cursor");
          break;
        case "rgb":
          doUpdateValue((showAlpha ? toRgbaString : toRgbString)([...hsv2rgb(hue, s4, v2), alpha]), "cursor");
          break;
        case "hex":
          doUpdateValue((showAlpha ? toHexaString : toHexString)([...hsv2rgb(hue, s4, v2), alpha]), "cursor");
          break;
      }
    }
    function handleUpdateHue(hue) {
      displayedHueRef.value = hue;
      const {
        value: hsvaArr
      } = hsvaRef;
      if (!hsvaArr) {
        return;
      }
      const [, s4, v2, a4] = hsvaArr;
      const {
        showAlpha
      } = props;
      switch (displayedModeRef.value) {
        case "hsv":
          doUpdateValue((showAlpha ? toHsvaString : toHsvString)([hue, s4, v2, a4]), "cursor");
          break;
        case "rgb":
          doUpdateValue((showAlpha ? toRgbaString : toRgbString)([...hsv2rgb(hue, s4, v2), a4]), "cursor");
          break;
        case "hex":
          doUpdateValue((showAlpha ? toHexaString : toHexString)([...hsv2rgb(hue, s4, v2), a4]), "cursor");
          break;
        case "hsl":
          doUpdateValue((showAlpha ? toHslaString : toHslString)([...hsv2hsl(hue, s4, v2), a4]), "cursor");
          break;
      }
    }
    function handleUpdateAlpha(alpha) {
      switch (displayedModeRef.value) {
        case "hsv":
          [_h, s3, v] = hsvaRef.value;
          doUpdateValue(toHsvaString([_h, s3, v, alpha]), "cursor");
          break;
        case "rgb":
          [r, g, b2] = rgbaRef.value;
          doUpdateValue(toRgbaString([r, g, b2, alpha]), "cursor");
          break;
        case "hex":
          [r, g, b2] = rgbaRef.value;
          doUpdateValue(toHexaString([r, g, b2, alpha]), "cursor");
          break;
        case "hsl":
          [_h, s3, l] = hslaRef.value;
          doUpdateValue(toHslaString([_h, s3, l, alpha]), "cursor");
          break;
      }
      displayedAlphaRef.value = alpha;
    }
    function doUpdateValue(value, updateSource) {
      if (updateSource === "cursor") {
        upcomingValue = value;
      } else {
        upcomingValue = null;
      }
      const {
        nTriggerFormChange,
        nTriggerFormInput
      } = formItem;
      const {
        onUpdateValue,
        "onUpdate:value": _onUpdateValue
      } = props;
      if (onUpdateValue)
        call(onUpdateValue, value);
      if (_onUpdateValue)
        call(_onUpdateValue, value);
      nTriggerFormChange();
      nTriggerFormInput();
      uncontrolledValueRef.value = value;
    }
    function handleInputUpdateValue(value) {
      doUpdateValue(value, "input");
      void nextTick(handleComplete);
    }
    function handleComplete(pushStack = true) {
      const {
        value
      } = mergedValueRef;
      if (value) {
        const {
          nTriggerFormChange,
          nTriggerFormInput
        } = formItem;
        const {
          onComplete
        } = props;
        if (onComplete) {
          onComplete(value);
        }
        const {
          value: undoStack
        } = undoStackRef;
        const {
          value: valueIndex
        } = valueIndexRef;
        if (pushStack) {
          undoStack.splice(valueIndex + 1, undoStack.length, value);
          valueIndexRef.value = valueIndex + 1;
        }
        nTriggerFormChange();
        nTriggerFormInput();
      }
    }
    function undo() {
      const {
        value: valueIndex
      } = valueIndexRef;
      if (valueIndex - 1 < 0)
        return;
      doUpdateValue(undoStackRef.value[valueIndex - 1], "input");
      handleComplete(false);
      valueIndexRef.value = valueIndex - 1;
    }
    function redo() {
      const {
        value: valueIndex
      } = valueIndexRef;
      if (valueIndex < 0 || valueIndex + 1 >= undoStackRef.value.length)
        return;
      doUpdateValue(undoStackRef.value[valueIndex + 1], "input");
      handleComplete(false);
      valueIndexRef.value = valueIndex + 1;
    }
    function handleClear() {
      doUpdateValue(null, "input");
      doUpdateShow(false);
    }
    function handleConfirm() {
      const {
        value
      } = mergedValueRef;
      const {
        onConfirm
      } = props;
      if (onConfirm) {
        onConfirm(value);
      }
      doUpdateShow(false);
    }
    const undoableRef = computed(() => valueIndexRef.value >= 1);
    const redoableRef = computed(() => {
      const {
        value: undoStack
      } = undoStackRef;
      return undoStack.length > 1 && valueIndexRef.value < undoStack.length - 1;
    });
    watch(mergedShowRef, (value) => {
      if (!value) {
        undoStackRef.value = [mergedValueRef.value];
        valueIndexRef.value = 0;
      }
    });
    watchEffect(() => {
      if (upcomingValue && upcomingValue === mergedValueRef.value)
        ;
      else {
        const {
          value
        } = hsvaRef;
        if (value) {
          displayedHueRef.value = value[0];
          displayedAlphaRef.value = value[3];
          displayedSvRef.value = [value[1], value[2]];
        }
      }
      upcomingValue = null;
    });
    const cssVarsRef = computed(() => {
      const {
        value: mergedSize
      } = mergedSizeRef;
      const {
        common: {
          cubicBezierEaseInOut
        },
        self: {
          textColor,
          color,
          panelFontSize,
          boxShadow,
          border,
          borderRadius,
          dividerColor,
          [createKey("height", mergedSize)]: height,
          [createKey("fontSize", mergedSize)]: fontSize
        }
      } = themeRef.value;
      return {
        "--n-bezier": cubicBezierEaseInOut,
        "--n-text-color": textColor,
        "--n-color": color,
        "--n-panel-font-size": panelFontSize,
        "--n-font-size": fontSize,
        "--n-box-shadow": boxShadow,
        "--n-border": border,
        "--n-border-radius": borderRadius,
        "--n-height": height,
        "--n-divider-color": dividerColor
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("color-picker", computed(() => {
      return mergedSizeRef.value[0];
    }), cssVarsRef, props) : void 0;
    function renderPanel() {
      var _a;
      const {
        value: rgba2
      } = rgbaRef;
      const {
        value: displayedHue
      } = displayedHueRef;
      const {
        internalActions,
        modes: modes2,
        actions
      } = props;
      const {
        value: mergedTheme
      } = themeRef;
      const {
        value: mergedClsPrefix
      } = mergedClsPrefixRef;
      return h("div", {
        class: [`${mergedClsPrefix}-color-picker-panel`, themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass.value],
        onDragstart: (e2) => {
          e2.preventDefault();
        },
        style: inlineThemeDisabled ? void 0 : cssVarsRef.value
      }, h("div", {
        class: `${mergedClsPrefix}-color-picker-control`
      }, h(Pallete, {
        clsPrefix: mergedClsPrefix,
        rgba: rgba2,
        displayedHue,
        displayedSv: displayedSvRef.value,
        onUpdateSV: handleUpdateSv,
        onComplete: handleComplete
      }), h("div", {
        class: `${mergedClsPrefix}-color-picker-preview`
      }, h("div", {
        class: `${mergedClsPrefix}-color-picker-preview__sliders`
      }, h(HueSlider, {
        clsPrefix: mergedClsPrefix,
        hue: displayedHue,
        onUpdateHue: handleUpdateHue,
        onComplete: handleComplete
      }), props.showAlpha ? h(AlphaSlider, {
        clsPrefix: mergedClsPrefix,
        rgba: rgba2,
        alpha: displayedAlphaRef.value,
        onUpdateAlpha: handleUpdateAlpha,
        onComplete: handleComplete
      }) : null), props.showPreview ? h(ColorPreview, {
        clsPrefix: mergedClsPrefix,
        mode: displayedModeRef.value,
        color: rgbaRef.value && toHexString(rgbaRef.value),
        onUpdateColor: (color) => {
          doUpdateValue(color, "input");
        }
      }) : null), h(ColorInput, {
        clsPrefix: mergedClsPrefix,
        showAlpha: props.showAlpha,
        mode: displayedModeRef.value,
        modes: modes2,
        onUpdateMode: handleUpdateDisplayedMode,
        value: mergedValueRef.value,
        valueArr: mergedValueArrRef.value,
        onUpdateValue: handleInputUpdateValue
      }), ((_a = props.swatches) === null || _a === void 0 ? void 0 : _a.length) && h(ColorPickerSwatches, {
        clsPrefix: mergedClsPrefix,
        mode: displayedModeRef.value,
        swatches: props.swatches,
        onUpdateColor: (color) => {
          doUpdateValue(color, "input");
        }
      })), (actions === null || actions === void 0 ? void 0 : actions.length) ? h("div", {
        class: `${mergedClsPrefix}-color-picker-action`
      }, actions.includes("confirm") && h(Button, {
        size: "small",
        onClick: handleConfirm,
        theme: mergedTheme.peers.Button,
        themeOverrides: mergedTheme.peerOverrides.Button
      }, {
        default: () => localeRef.value.confirm
      }), actions.includes("clear") && h(Button, {
        size: "small",
        onClick: handleClear,
        disabled: !mergedValueRef.value,
        theme: mergedTheme.peers.Button,
        themeOverrides: mergedTheme.peerOverrides.Button
      }, {
        default: () => localeRef.value.clear
      })) : null, slots.action ? h("div", {
        class: `${mergedClsPrefix}-color-picker-action`
      }, {
        default: slots.action
      }) : internalActions ? h("div", {
        class: `${mergedClsPrefix}-color-picker-action`
      }, internalActions.includes("undo") && h(Button, {
        size: "small",
        onClick: undo,
        disabled: !undoableRef.value,
        theme: mergedTheme.peers.Button,
        themeOverrides: mergedTheme.peerOverrides.Button
      }, {
        default: () => localeRef.value.undo
      }), internalActions.includes("redo") && h(Button, {
        size: "small",
        onClick: redo,
        disabled: !redoableRef.value,
        theme: mergedTheme.peers.Button,
        themeOverrides: mergedTheme.peerOverrides.Button
      }, {
        default: () => localeRef.value.redo
      })) : null);
    }
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      namespace: namespaceRef,
      selfRef,
      hsla: hslaRef,
      rgba: rgbaRef,
      mergedShow: mergedShowRef,
      mergedDisabled: mergedDisabledRef,
      isMounted: useIsMounted(),
      adjustedTo: useAdjustedTo(props),
      mergedValue: mergedValueRef,
      handleTriggerClick() {
        doUpdateShow(true);
      },
      handleClickOutside(e2) {
        var _a;
        if ((_a = selfRef.value) === null || _a === void 0 ? void 0 : _a.contains(getPreciseEventTarget(e2))) {
          return;
        }
        doUpdateShow(false);
      },
      renderPanel,
      cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
    };
  },
  render() {
    const {
      $slots,
      mergedClsPrefix,
      onRender
    } = this;
    onRender === null || onRender === void 0 ? void 0 : onRender();
    return h("div", {
      class: [this.themeClass, `${mergedClsPrefix}-color-picker`],
      ref: "selfRef",
      style: this.cssVars
    }, h(Binder, null, {
      default: () => [h(VTarget, null, {
        default: () => h(ColorPickerTrigger, {
          clsPrefix: mergedClsPrefix,
          value: this.mergedValue,
          hsla: this.hsla,
          disabled: this.mergedDisabled,
          onClick: this.handleTriggerClick
        }, {
          label: $slots.label
        })
      }), h(VFollower, {
        placement: this.placement,
        show: this.mergedShow,
        containerClass: this.namespace,
        teleportDisabled: this.adjustedTo === useAdjustedTo.tdkey,
        to: this.adjustedTo
      }, {
        default: () => h(Transition, {
          name: "fade-in-scale-up-transition",
          appear: this.isMounted
        }, {
          default: () => this.mergedShow ? withDirectives(this.renderPanel(), [[clickoutside, this.handleClickOutside, void 0, {
            capture: true
          }]]) : null
        })
      })]
    }));
  }
});
const commonVariables$d = {
  paddingSmall: "12px 16px 12px",
  paddingMedium: "19px 24px 20px",
  paddingLarge: "23px 32px 24px",
  paddingHuge: "27px 40px 28px",
  titleFontSizeSmall: "16px",
  titleFontSizeMedium: "18px",
  titleFontSizeLarge: "18px",
  titleFontSizeHuge: "18px",
  closeIconSize: "18px",
  closeSize: "22px"
};
const self$$ = (vars) => {
  const {
    primaryColor,
    borderRadius,
    lineHeight,
    fontSize,
    cardColor,
    textColor2,
    textColor1,
    dividerColor,
    fontWeightStrong,
    closeIconColor,
    closeIconColorHover,
    closeIconColorPressed,
    closeColorHover,
    closeColorPressed,
    modalColor,
    boxShadow1,
    popoverColor,
    actionColor
  } = vars;
  return Object.assign(Object.assign({}, commonVariables$d), {
    lineHeight,
    color: cardColor,
    colorModal: modalColor,
    colorPopover: popoverColor,
    colorTarget: primaryColor,
    colorEmbedded: actionColor,
    colorEmbeddedModal: actionColor,
    colorEmbeddedPopover: actionColor,
    textColor: textColor2,
    titleTextColor: textColor1,
    borderColor: dividerColor,
    actionColor,
    titleFontWeight: fontWeightStrong,
    closeColorHover,
    closeColorPressed,
    closeBorderRadius: borderRadius,
    closeIconColor,
    closeIconColorHover,
    closeIconColorPressed,
    fontSizeSmall: fontSize,
    fontSizeMedium: fontSize,
    fontSizeLarge: fontSize,
    fontSizeHuge: fontSize,
    boxShadow: boxShadow1,
    borderRadius
  });
};
const cardLight = {
  name: "Card",
  common: derived$1,
  self: self$$
};
const cardDark = {
  name: "Card",
  common: derived,
  self(vars) {
    const commonSelf = self$$(vars);
    const {
      cardColor,
      modalColor,
      popoverColor
    } = vars;
    commonSelf.colorEmbedded = cardColor;
    commonSelf.colorEmbeddedModal = modalColor;
    commonSelf.colorEmbeddedPopover = popoverColor;
    return commonSelf;
  }
};
const self$_ = (vars) => {
  return {
    dotSize: "8px",
    dotColor: "rgba(255, 255, 255, .3)",
    dotColorActive: "rgba(255, 255, 255, 1)",
    dotColorFocus: "rgba(255, 255, 255, .5)",
    dotLineWidth: "16px",
    dotLineWidthActive: "24px",
    arrowColor: "#eee"
  };
};
const carouselLight = {
  name: "Carousel",
  common: derived$1,
  self: self$_
};
const carouselDark = {
  name: "Carousel",
  common: derived,
  self: self$_
};
const commonVariables$c = {
  sizeSmall: "14px",
  sizeMedium: "16px",
  sizeLarge: "18px",
  labelPadding: "0 8px",
  labelFontWeight: "400"
};
const self$Z = (vars) => {
  const {
    baseColor,
    inputColorDisabled,
    cardColor,
    modalColor,
    popoverColor,
    textColorDisabled,
    borderColor,
    primaryColor,
    textColor2,
    fontSizeSmall,
    fontSizeMedium,
    fontSizeLarge,
    borderRadiusSmall,
    lineHeight
  } = vars;
  return Object.assign(Object.assign({}, commonVariables$c), {
    labelLineHeight: lineHeight,
    fontSizeSmall,
    fontSizeMedium,
    fontSizeLarge,
    borderRadius: borderRadiusSmall,
    color: baseColor,
    colorChecked: primaryColor,
    colorDisabled: inputColorDisabled,
    colorDisabledChecked: inputColorDisabled,
    colorTableHeader: cardColor,
    colorTableHeaderModal: modalColor,
    colorTableHeaderPopover: popoverColor,
    checkMarkColor: baseColor,
    checkMarkColorDisabled: textColorDisabled,
    checkMarkColorDisabledChecked: textColorDisabled,
    border: `1px solid ${borderColor}`,
    borderDisabled: `1px solid ${borderColor}`,
    borderDisabledChecked: `1px solid ${borderColor}`,
    borderChecked: `1px solid ${primaryColor}`,
    borderFocus: `1px solid ${primaryColor}`,
    boxShadowFocus: `0 0 0 2px ${changeColor(primaryColor, {
      alpha: 0.3
    })}`,
    textColor: textColor2,
    textColorDisabled
  });
};
const checkboxLight = {
  name: "Checkbox",
  common: derived$1,
  self: self$Z
};
const checkboxDark = {
  name: "Checkbox",
  common: derived,
  self(vars) {
    const {
      cardColor
    } = vars;
    const commonSelf = self$Z(vars);
    commonSelf.color = "#0000";
    commonSelf.checkMarkColor = cardColor;
    return commonSelf;
  }
};
const self$Y = (vars) => {
  const {
    borderRadius,
    boxShadow2,
    popoverColor,
    textColor2,
    textColor3,
    primaryColor,
    textColorDisabled,
    dividerColor,
    hoverColor,
    fontSizeMedium,
    heightMedium
  } = vars;
  return {
    menuBorderRadius: borderRadius,
    menuColor: popoverColor,
    menuBoxShadow: boxShadow2,
    menuDividerColor: dividerColor,
    menuHeight: "calc(var(--n-option-height) * 6.6)",
    optionArrowColor: textColor3,
    optionHeight: heightMedium,
    optionFontSize: fontSizeMedium,
    optionColorHover: hoverColor,
    optionTextColor: textColor2,
    optionTextColorActive: primaryColor,
    optionTextColorDisabled: textColorDisabled,
    optionCheckMarkColor: primaryColor,
    loadingColor: primaryColor,
    columnWidth: "180px"
  };
};
const cascaderLight = createTheme({
  name: "Cascader",
  common: derived$1,
  peers: {
    InternalSelectMenu: internalSelectMenuLight,
    InternalSelection: internalSelectionLight,
    Scrollbar: scrollbarLight,
    Checkbox: checkboxLight,
    Empty: emptyLight
  },
  self: self$Y
});
const cascaderDark = {
  name: "Cascader",
  common: derived,
  peers: {
    InternalSelectMenu: internalSelectMenuDark,
    InternalSelection: internalSelectionDark,
    Scrollbar: scrollbarDark,
    Checkbox: checkboxDark,
    Empty: emptyLight
  },
  self: self$Y
};
const CheckMark = h("svg", {
  viewBox: "0 0 64 64",
  class: "check-icon"
}, h("path", {
  d: "M50.42,16.76L22.34,39.45l-8.1-11.46c-1.12-1.58-3.3-1.96-4.88-0.84c-1.58,1.12-1.95,3.3-0.84,4.88l10.26,14.51  c0.56,0.79,1.42,1.31,2.38,1.45c0.16,0.02,0.32,0.03,0.48,0.03c0.8,0,1.57-0.27,2.2-0.78l30.99-25.03c1.5-1.21,1.74-3.42,0.52-4.92  C54.13,15.78,51.93,15.55,50.42,16.76z"
}));
const LineMark = h("svg", {
  viewBox: "0 0 100 100",
  class: "line-icon"
}, h("path", {
  d: "M80.2,55.5H21.4c-2.8,0-5.1-2.5-5.1-5.5l0,0c0-3,2.3-5.5,5.1-5.5h58.7c2.8,0,5.1,2.5,5.1,5.5l0,0C85.2,53.1,82.9,55.5,80.2,55.5z"
}));
const checkboxGroupInjectionKey = createInjectionKey("n-checkbox-group");
const checkboxGroupProps = {
  min: Number,
  max: Number,
  size: String,
  value: Array,
  defaultValue: {
    type: Array,
    default: null
  },
  disabled: {
    type: Boolean,
    default: void 0
  },
  "onUpdate:value": [Function, Array],
  onUpdateValue: [Function, Array],
  // deprecated
  onChange: [Function, Array]
};
const __nuxt_component_16 = defineComponent({
  name: "CheckboxGroup",
  props: checkboxGroupProps,
  setup(props) {
    if (process.env.NODE_ENV !== "production") {
      watchEffect(() => {
        if (props.onChange !== void 0) {
          warnOnce("checkbox-group", "`on-change` is deprecated, please use `on-update:value` instead.");
        }
      });
    }
    const {
      mergedClsPrefixRef
    } = useConfig(props);
    const formItem = useFormItem(props);
    const {
      mergedSizeRef,
      mergedDisabledRef
    } = formItem;
    const uncontrolledValueRef = ref(props.defaultValue);
    const controlledValueRef = computed(() => props.value);
    const mergedValueRef = useMergedState(controlledValueRef, uncontrolledValueRef);
    const checkedCount = computed(() => {
      var _a;
      return ((_a = mergedValueRef.value) === null || _a === void 0 ? void 0 : _a.length) || 0;
    });
    const valueSetRef = computed(() => {
      if (Array.isArray(mergedValueRef.value)) {
        return new Set(mergedValueRef.value);
      }
      return /* @__PURE__ */ new Set();
    });
    function toggleCheckbox(checked, checkboxValue) {
      const {
        nTriggerFormInput,
        nTriggerFormChange
      } = formItem;
      const {
        onChange,
        "onUpdate:value": _onUpdateValue,
        onUpdateValue
      } = props;
      if (Array.isArray(mergedValueRef.value)) {
        const groupValue = Array.from(mergedValueRef.value);
        const index = groupValue.findIndex((value) => value === checkboxValue);
        if (checked) {
          if (!~index) {
            groupValue.push(checkboxValue);
            if (onUpdateValue) {
              call(onUpdateValue, groupValue, {
                actionType: "check",
                value: checkboxValue
              });
            }
            if (_onUpdateValue) {
              call(_onUpdateValue, groupValue, {
                actionType: "check",
                value: checkboxValue
              });
            }
            nTriggerFormInput();
            nTriggerFormChange();
            uncontrolledValueRef.value = groupValue;
            if (onChange)
              call(onChange, groupValue);
          }
        } else {
          if (~index) {
            groupValue.splice(index, 1);
            if (onUpdateValue) {
              call(onUpdateValue, groupValue, {
                actionType: "uncheck",
                value: checkboxValue
              });
            }
            if (_onUpdateValue) {
              call(_onUpdateValue, groupValue, {
                actionType: "uncheck",
                value: checkboxValue
              });
            }
            if (onChange)
              call(onChange, groupValue);
            uncontrolledValueRef.value = groupValue;
            nTriggerFormInput();
            nTriggerFormChange();
          }
        }
      } else {
        if (checked) {
          if (onUpdateValue) {
            call(onUpdateValue, [checkboxValue], {
              actionType: "check",
              value: checkboxValue
            });
          }
          if (_onUpdateValue) {
            call(_onUpdateValue, [checkboxValue], {
              actionType: "check",
              value: checkboxValue
            });
          }
          if (onChange)
            call(onChange, [checkboxValue]);
          uncontrolledValueRef.value = [checkboxValue];
          nTriggerFormInput();
          nTriggerFormChange();
        } else {
          if (onUpdateValue) {
            call(onUpdateValue, [], {
              actionType: "uncheck",
              value: checkboxValue
            });
          }
          if (_onUpdateValue) {
            call(_onUpdateValue, [], {
              actionType: "uncheck",
              value: checkboxValue
            });
          }
          if (onChange)
            call(onChange, []);
          uncontrolledValueRef.value = [];
          nTriggerFormInput();
          nTriggerFormChange();
        }
      }
    }
    provide(checkboxGroupInjectionKey, {
      checkedCountRef: checkedCount,
      maxRef: toRef(props, "max"),
      minRef: toRef(props, "min"),
      valueSetRef,
      disabledRef: mergedDisabledRef,
      mergedSizeRef,
      toggleCheckbox
    });
    return {
      mergedClsPrefix: mergedClsPrefixRef
    };
  },
  render() {
    return h("div", {
      class: `${this.mergedClsPrefix}-checkbox-group`,
      role: "group"
    }, this.$slots);
  }
});
const style$e = c$1([
  cB("checkbox", `
 font-size: var(--n-font-size);
 outline: none;
 cursor: pointer;
 display: inline-flex;
 flex-wrap: nowrap;
 align-items: flex-start;
 word-break: break-word;
 line-height: var(--n-size);
 --n-merged-color-table: var(--n-color-table);
 `, [cM("show-label", "line-height: var(--n-label-line-height);"), c$1("&:hover", [cB("checkbox-box", [cE("border", "border: var(--n-border-checked);")])]), c$1("&:focus:not(:active)", [cB("checkbox-box", [cE("border", `
 border: var(--n-border-focus);
 box-shadow: var(--n-box-shadow-focus);
 `)])]), cM("inside-table", [cB("checkbox-box", `
 background-color: var(--n-merged-color-table);
 `)]), cM("checked", [cB("checkbox-box", `
 background-color: var(--n-color-checked);
 `, [cB("checkbox-icon", [
    // if not set width to 100%, safari & old chrome won't display the icon
    c$1(".check-icon", `
 opacity: 1;
 transform: scale(1);
 `)
  ])])]), cM("indeterminate", [cB("checkbox-box", [cB("checkbox-icon", [c$1(".check-icon", `
 opacity: 0;
 transform: scale(.5);
 `), c$1(".line-icon", `
 opacity: 1;
 transform: scale(1);
 `)])])]), cM("checked, indeterminate", [c$1("&:focus:not(:active)", [cB("checkbox-box", [cE("border", `
 border: var(--n-border-checked);
 box-shadow: var(--n-box-shadow-focus);
 `)])]), cB("checkbox-box", `
 background-color: var(--n-color-checked);
 border-left: 0;
 border-top: 0;
 `, [cE("border", {
    border: "var(--n-border-checked)"
  })])]), cM("disabled", {
    cursor: "not-allowed"
  }, [cM("checked", [cB("checkbox-box", `
 background-color: var(--n-color-disabled-checked);
 `, [cE("border", {
    border: "var(--n-border-disabled-checked)"
  }), cB("checkbox-icon", [c$1(".check-icon, .line-icon", {
    fill: "var(--n-check-mark-color-disabled-checked)"
  })])])]), cB("checkbox-box", `
 background-color: var(--n-color-disabled);
 `, [cE("border", `
 border: var(--n-border-disabled);
 `), cB("checkbox-icon", [c$1(".check-icon, .line-icon", `
 fill: var(--n-check-mark-color-disabled);
 `)])]), cE("label", `
 color: var(--n-text-color-disabled);
 `)]), cB("checkbox-box-wrapper", `
 position: relative;
 width: var(--n-size);
 flex-shrink: 0;
 flex-grow: 0;
 user-select: none;
 -webkit-user-select: none;
 `), cB("checkbox-box", `
 position: absolute;
 left: 0;
 top: 50%;
 transform: translateY(-50%);
 height: var(--n-size);
 width: var(--n-size);
 display: inline-block;
 box-sizing: border-box;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 transition: background-color 0.3s var(--n-bezier);
 `, [cE("border", `
 transition:
 border-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 border-radius: inherit;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border: var(--n-border);
 `), cB("checkbox-icon", `
 display: flex;
 align-items: center;
 justify-content: center;
 position: absolute;
 left: 1px;
 right: 1px;
 top: 1px;
 bottom: 1px;
 `, [c$1(".check-icon, .line-icon", `
 width: 100%;
 fill: var(--n-check-mark-color);
 opacity: 0;
 transform: scale(0.5);
 transform-origin: center;
 transition:
 fill 0.3s var(--n-bezier),
 transform 0.3s var(--n-bezier),
 opacity 0.3s var(--n-bezier),
 border-color 0.3s var(--n-bezier);
 `), iconSwitchTransition({
    left: "1px",
    top: "1px"
  })])]), cE("label", `
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 user-select: none;
 -webkit-user-select: none;
 padding: var(--n-label-padding);
 font-weight: var(--n-label-font-weight);
 `, [c$1("&:empty", {
    display: "none"
  })])]),
  // modal table header checkbox
  insideModal(cB("checkbox", `
 --n-merged-color-table: var(--n-color-table-modal);
 `)),
  // popover table header checkbox
  insidePopover(cB("checkbox", `
 --n-merged-color-table: var(--n-color-table-popover);
 `))
]);
const checkboxProps = Object.assign(Object.assign({}, useTheme.props), {
  size: String,
  checked: {
    type: [Boolean, String, Number],
    default: void 0
  },
  defaultChecked: {
    type: [Boolean, String, Number],
    default: false
  },
  value: [String, Number],
  disabled: {
    type: Boolean,
    default: void 0
  },
  indeterminate: Boolean,
  label: String,
  focusable: {
    type: Boolean,
    default: true
  },
  checkedValue: {
    type: [Boolean, String, Number],
    default: true
  },
  uncheckedValue: {
    type: [Boolean, String, Number],
    default: false
  },
  "onUpdate:checked": [Function, Array],
  onUpdateChecked: [Function, Array],
  // private
  privateInsideTable: Boolean,
  // deprecated
  onChange: [Function, Array]
});
const __nuxt_component_15 = defineComponent({
  name: "Checkbox",
  props: checkboxProps,
  setup(props) {
    if (process.env.NODE_ENV !== "production") {
      watchEffect(() => {
        if (props.onChange) {
          warnOnce("checkbox", "`on-change` is deprecated, please use `on-update:checked` instead.");
        }
      });
    }
    const selfRef = ref(null);
    const {
      mergedClsPrefixRef,
      inlineThemeDisabled,
      mergedRtlRef
    } = useConfig(props);
    const formItem = useFormItem(props, {
      mergedSize(NFormItem) {
        const {
          size
        } = props;
        if (size !== void 0)
          return size;
        if (NCheckboxGroup) {
          const {
            value: mergedSize
          } = NCheckboxGroup.mergedSizeRef;
          if (mergedSize !== void 0) {
            return mergedSize;
          }
        }
        if (NFormItem) {
          const {
            mergedSize
          } = NFormItem;
          if (mergedSize !== void 0)
            return mergedSize.value;
        }
        return "medium";
      },
      mergedDisabled(NFormItem) {
        const {
          disabled
        } = props;
        if (disabled !== void 0)
          return disabled;
        if (NCheckboxGroup) {
          if (NCheckboxGroup.disabledRef.value)
            return true;
          const {
            maxRef: {
              value: max
            },
            checkedCountRef
          } = NCheckboxGroup;
          if (max !== void 0 && checkedCountRef.value >= max && !renderedCheckedRef.value) {
            return true;
          }
          const {
            minRef: {
              value: min
            }
          } = NCheckboxGroup;
          if (min !== void 0 && checkedCountRef.value <= min && renderedCheckedRef.value) {
            return true;
          }
        }
        if (NFormItem) {
          return NFormItem.disabled.value;
        }
        return false;
      }
    });
    const {
      mergedDisabledRef,
      mergedSizeRef
    } = formItem;
    const NCheckboxGroup = inject(checkboxGroupInjectionKey, null);
    const uncontrolledCheckedRef = ref(props.defaultChecked);
    const controlledCheckedRef = toRef(props, "checked");
    const mergedCheckedRef = useMergedState(controlledCheckedRef, uncontrolledCheckedRef);
    const renderedCheckedRef = useMemo(() => {
      if (NCheckboxGroup) {
        const groupValueSet = NCheckboxGroup.valueSetRef.value;
        if (groupValueSet && props.value !== void 0) {
          return groupValueSet.has(props.value);
        }
        return false;
      } else {
        return mergedCheckedRef.value === props.checkedValue;
      }
    });
    const themeRef = useTheme("Checkbox", "-checkbox", style$e, checkboxLight, props, mergedClsPrefixRef);
    function toggle(e2) {
      if (NCheckboxGroup && props.value !== void 0) {
        NCheckboxGroup.toggleCheckbox(!renderedCheckedRef.value, props.value);
      } else {
        const {
          onChange,
          "onUpdate:checked": _onUpdateCheck,
          onUpdateChecked
        } = props;
        const {
          nTriggerFormInput,
          nTriggerFormChange
        } = formItem;
        const nextChecked = renderedCheckedRef.value ? props.uncheckedValue : props.checkedValue;
        if (_onUpdateCheck) {
          call(_onUpdateCheck, nextChecked, e2);
        }
        if (onUpdateChecked) {
          call(onUpdateChecked, nextChecked, e2);
        }
        if (onChange)
          call(onChange, nextChecked, e2);
        nTriggerFormInput();
        nTriggerFormChange();
        uncontrolledCheckedRef.value = nextChecked;
      }
    }
    function handleClick(e2) {
      if (!mergedDisabledRef.value) {
        toggle(e2);
      }
    }
    function handleKeyUp(e2) {
      if (mergedDisabledRef.value)
        return;
      switch (e2.key) {
        case " ":
        case "Enter":
          toggle(e2);
      }
    }
    function handleKeyDown(e2) {
      switch (e2.key) {
        case " ":
          e2.preventDefault();
      }
    }
    const exposedMethods = {
      focus: () => {
        var _a;
        (_a = selfRef.value) === null || _a === void 0 ? void 0 : _a.focus();
      },
      blur: () => {
        var _a;
        (_a = selfRef.value) === null || _a === void 0 ? void 0 : _a.blur();
      }
    };
    const rtlEnabledRef = useRtl("Checkbox", mergedRtlRef, mergedClsPrefixRef);
    const cssVarsRef = computed(() => {
      const {
        value: mergedSize
      } = mergedSizeRef;
      const {
        common: {
          cubicBezierEaseInOut
        },
        self: {
          borderRadius,
          color,
          colorChecked,
          colorDisabled,
          colorTableHeader,
          colorTableHeaderModal,
          colorTableHeaderPopover,
          checkMarkColor,
          checkMarkColorDisabled,
          border,
          borderFocus,
          borderDisabled,
          borderChecked,
          boxShadowFocus,
          textColor,
          textColorDisabled,
          checkMarkColorDisabledChecked,
          colorDisabledChecked,
          borderDisabledChecked,
          labelPadding,
          labelLineHeight,
          labelFontWeight,
          [createKey("fontSize", mergedSize)]: fontSize,
          [createKey("size", mergedSize)]: size
        }
      } = themeRef.value;
      return {
        "--n-label-line-height": labelLineHeight,
        "--n-label-font-weight": labelFontWeight,
        "--n-size": size,
        "--n-bezier": cubicBezierEaseInOut,
        "--n-border-radius": borderRadius,
        "--n-border": border,
        "--n-border-checked": borderChecked,
        "--n-border-focus": borderFocus,
        "--n-border-disabled": borderDisabled,
        "--n-border-disabled-checked": borderDisabledChecked,
        "--n-box-shadow-focus": boxShadowFocus,
        "--n-color": color,
        "--n-color-checked": colorChecked,
        "--n-color-table": colorTableHeader,
        "--n-color-table-modal": colorTableHeaderModal,
        "--n-color-table-popover": colorTableHeaderPopover,
        "--n-color-disabled": colorDisabled,
        "--n-color-disabled-checked": colorDisabledChecked,
        "--n-text-color": textColor,
        "--n-text-color-disabled": textColorDisabled,
        "--n-check-mark-color": checkMarkColor,
        "--n-check-mark-color-disabled": checkMarkColorDisabled,
        "--n-check-mark-color-disabled-checked": checkMarkColorDisabledChecked,
        "--n-font-size": fontSize,
        "--n-label-padding": labelPadding
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("checkbox", computed(() => mergedSizeRef.value[0]), cssVarsRef, props) : void 0;
    return Object.assign(formItem, exposedMethods, {
      rtlEnabled: rtlEnabledRef,
      selfRef,
      mergedClsPrefix: mergedClsPrefixRef,
      mergedDisabled: mergedDisabledRef,
      renderedChecked: renderedCheckedRef,
      mergedTheme: themeRef,
      labelId: createId(),
      handleClick,
      handleKeyUp,
      handleKeyDown,
      cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
    });
  },
  render() {
    var _a;
    const {
      $slots,
      renderedChecked,
      mergedDisabled,
      indeterminate,
      privateInsideTable,
      cssVars,
      labelId,
      label,
      mergedClsPrefix,
      focusable,
      handleKeyUp,
      handleKeyDown,
      handleClick
    } = this;
    (_a = this.onRender) === null || _a === void 0 ? void 0 : _a.call(this);
    const labelNode = resolveWrappedSlot($slots.default, (children) => {
      if (label || children) {
        return h("span", {
          class: `${mergedClsPrefix}-checkbox__label`,
          id: labelId
        }, label || children);
      }
      return null;
    });
    return h("div", {
      ref: "selfRef",
      class: [`${mergedClsPrefix}-checkbox`, this.themeClass, this.rtlEnabled && `${mergedClsPrefix}-checkbox--rtl`, renderedChecked && `${mergedClsPrefix}-checkbox--checked`, mergedDisabled && `${mergedClsPrefix}-checkbox--disabled`, indeterminate && `${mergedClsPrefix}-checkbox--indeterminate`, privateInsideTable && `${mergedClsPrefix}-checkbox--inside-table`, labelNode && `${mergedClsPrefix}-checkbox--show-label`],
      tabindex: mergedDisabled || !focusable ? void 0 : 0,
      role: "checkbox",
      "aria-checked": indeterminate ? "mixed" : renderedChecked,
      "aria-labelledby": labelId,
      style: cssVars,
      onKeyup: handleKeyUp,
      onKeydown: handleKeyDown,
      onClick: handleClick,
      onMousedown: () => {
        on("selectstart", void 0, (e2) => {
          e2.preventDefault();
        }, {
          once: true
        });
      }
    }, h("div", {
      class: `${mergedClsPrefix}-checkbox-box-wrapper`
    }, " ", h("div", {
      class: `${mergedClsPrefix}-checkbox-box`
    }, h(NIconSwitchTransition, null, {
      default: () => this.indeterminate ? h("div", {
        key: "indeterminate",
        class: `${mergedClsPrefix}-checkbox-icon`
      }, LineMark) : h("div", {
        key: "check",
        class: `${mergedClsPrefix}-checkbox-icon`
      }, CheckMark)
    }), h("div", {
      class: `${mergedClsPrefix}-checkbox-box__border`
    }))), labelNode);
  }
});
const codeDark = {
  name: "Code",
  common: derived,
  self(vars) {
    const {
      textColor2,
      fontSize,
      fontWeightStrong,
      textColor3
    } = vars;
    return {
      textColor: textColor2,
      fontSize,
      fontWeightStrong,
      // extracted from hljs atom-one-dark.scss
      "mono-3": "#5c6370",
      "hue-1": "#56b6c2",
      "hue-2": "#61aeee",
      "hue-3": "#c678dd",
      "hue-4": "#98c379",
      "hue-5": "#e06c75",
      "hue-5-2": "#be5046",
      "hue-6": "#d19a66",
      "hue-6-2": "#e6c07b",
      // line-number styles
      lineNumberTextColor: textColor3
    };
  }
};
const self$X = (vars) => {
  const {
    textColor2,
    fontSize,
    fontWeightStrong,
    textColor3
  } = vars;
  return {
    textColor: textColor2,
    fontSize,
    fontWeightStrong,
    // extracted from hljs atom-one-light.scss
    "mono-3": "#a0a1a7",
    "hue-1": "#0184bb",
    "hue-2": "#4078f2",
    "hue-3": "#a626a4",
    "hue-4": "#50a14f",
    "hue-5": "#e45649",
    "hue-5-2": "#c91243",
    "hue-6": "#986801",
    "hue-6-2": "#c18401",
    // line-number styles
    lineNumberTextColor: textColor3
  };
};
const codeLight = {
  name: "Code",
  common: derived$1,
  self: self$X
};
const self$W = (vars) => {
  const {
    fontWeight,
    textColor1,
    textColor2,
    textColorDisabled,
    dividerColor,
    fontSize
  } = vars;
  return {
    titleFontSize: fontSize,
    titleFontWeight: fontWeight,
    dividerColor,
    titleTextColor: textColor1,
    titleTextColorDisabled: textColorDisabled,
    fontSize,
    textColor: textColor2,
    arrowColor: textColor2,
    arrowColorDisabled: textColorDisabled,
    itemMargin: "16px 0 0 0",
    titlePadding: "16px 0 0 0"
  };
};
const collapseLight = {
  name: "Collapse",
  common: derived$1,
  self: self$W
};
const collapseDark = {
  name: "Collapse",
  common: derived,
  self: self$W
};
const self$V = (vars) => {
  const {
    cubicBezierEaseInOut
  } = vars;
  return {
    bezier: cubicBezierEaseInOut
  };
};
const collapseTransitionLight = {
  name: "CollapseTransition",
  common: derived$1,
  self: self$V
};
const collapseTransitionDark = {
  name: "CollapseTransition",
  common: derived,
  self: self$V
};
const configProviderProps = {
  abstract: Boolean,
  bordered: {
    type: Boolean,
    default: void 0
  },
  clsPrefix: {
    type: String,
    default: defaultClsPrefix
  },
  locale: Object,
  dateLocale: Object,
  namespace: String,
  rtl: Array,
  tag: {
    type: String,
    default: "div"
  },
  hljs: Object,
  katex: Object,
  theme: Object,
  themeOverrides: Object,
  componentOptions: Object,
  icons: Object,
  breakpoints: Object,
  preflightStyleDisabled: Boolean,
  inlineThemeDisabled: {
    type: Boolean,
    default: void 0
  },
  // deprecated
  as: {
    type: String,
    validator: () => {
      warn("config-provider", "`as` is deprecated, please use `tag` instead.");
      return true;
    },
    default: void 0
  }
};
const __nuxt_component_0 = defineComponent({
  name: "ConfigProvider",
  alias: ["App"],
  props: configProviderProps,
  setup(props) {
    const NConfigProvider = inject(configProviderInjectionKey, null);
    const mergedThemeRef = computed(() => {
      const {
        theme
      } = props;
      if (theme === null)
        return void 0;
      const inheritedTheme = NConfigProvider === null || NConfigProvider === void 0 ? void 0 : NConfigProvider.mergedThemeRef.value;
      return theme === void 0 ? inheritedTheme : inheritedTheme === void 0 ? theme : Object.assign({}, inheritedTheme, theme);
    });
    const mergedThemeOverridesRef = computed(() => {
      const {
        themeOverrides
      } = props;
      if (themeOverrides === null)
        return void 0;
      if (themeOverrides === void 0) {
        return NConfigProvider === null || NConfigProvider === void 0 ? void 0 : NConfigProvider.mergedThemeOverridesRef.value;
      } else {
        const inheritedThemeOverrides = NConfigProvider === null || NConfigProvider === void 0 ? void 0 : NConfigProvider.mergedThemeOverridesRef.value;
        if (inheritedThemeOverrides === void 0) {
          return themeOverrides;
        } else {
          return merge({}, inheritedThemeOverrides, themeOverrides);
        }
      }
    });
    const mergedNamespaceRef = useMemo(() => {
      const {
        namespace
      } = props;
      return namespace === void 0 ? NConfigProvider === null || NConfigProvider === void 0 ? void 0 : NConfigProvider.mergedNamespaceRef.value : namespace;
    });
    const mergedBorderedRef = useMemo(() => {
      const {
        bordered
      } = props;
      return bordered === void 0 ? NConfigProvider === null || NConfigProvider === void 0 ? void 0 : NConfigProvider.mergedBorderedRef.value : bordered;
    });
    const mergedIconsRef = computed(() => {
      const {
        icons
      } = props;
      return icons === void 0 ? NConfigProvider === null || NConfigProvider === void 0 ? void 0 : NConfigProvider.mergedIconsRef.value : icons;
    });
    const mergedComponentPropsRef = computed(() => {
      const {
        componentOptions
      } = props;
      if (componentOptions !== void 0)
        return componentOptions;
      return NConfigProvider === null || NConfigProvider === void 0 ? void 0 : NConfigProvider.mergedComponentPropsRef.value;
    });
    const mergedClsPrefixRef = computed(() => {
      const {
        clsPrefix
      } = props;
      if (clsPrefix !== void 0)
        return clsPrefix;
      if (NConfigProvider)
        return NConfigProvider.mergedClsPrefixRef.value;
      return defaultClsPrefix;
    });
    const mergedRtlRef = computed(() => {
      var _a;
      const {
        rtl
      } = props;
      if (rtl === void 0) {
        return NConfigProvider === null || NConfigProvider === void 0 ? void 0 : NConfigProvider.mergedRtlRef.value;
      }
      const rtlEnabledState = {};
      for (const rtlInfo of rtl) {
        rtlEnabledState[rtlInfo.name] = markRaw(rtlInfo);
        (_a = rtlInfo.peers) === null || _a === void 0 ? void 0 : _a.forEach((peerRtlInfo) => {
          if (!(peerRtlInfo.name in rtlEnabledState)) {
            rtlEnabledState[peerRtlInfo.name] = markRaw(peerRtlInfo);
          }
        });
      }
      return rtlEnabledState;
    });
    const mergedBreakpointsRef = computed(() => {
      return props.breakpoints || (NConfigProvider === null || NConfigProvider === void 0 ? void 0 : NConfigProvider.mergedBreakpointsRef.value);
    });
    const inlineThemeDisabled = props.inlineThemeDisabled || (NConfigProvider === null || NConfigProvider === void 0 ? void 0 : NConfigProvider.inlineThemeDisabled);
    const preflightStyleDisabled = props.preflightStyleDisabled || (NConfigProvider === null || NConfigProvider === void 0 ? void 0 : NConfigProvider.preflightStyleDisabled);
    const mergedThemeHashRef = computed(() => {
      const {
        value: theme
      } = mergedThemeRef;
      const {
        value: mergedThemeOverrides
      } = mergedThemeOverridesRef;
      const hasThemeOverrides = mergedThemeOverrides && Object.keys(mergedThemeOverrides).length !== 0;
      const themeName = theme === null || theme === void 0 ? void 0 : theme.name;
      if (themeName) {
        if (hasThemeOverrides) {
          return `${themeName}-${hash(JSON.stringify(mergedThemeOverridesRef.value))}`;
        }
        return themeName;
      } else {
        if (hasThemeOverrides) {
          return hash(JSON.stringify(mergedThemeOverridesRef.value));
        }
        return "";
      }
    });
    provide(configProviderInjectionKey, {
      mergedThemeHashRef,
      mergedBreakpointsRef,
      mergedRtlRef,
      mergedIconsRef,
      mergedComponentPropsRef,
      mergedBorderedRef,
      mergedNamespaceRef,
      mergedClsPrefixRef,
      mergedLocaleRef: computed(() => {
        const {
          locale: locale2
        } = props;
        if (locale2 === null)
          return void 0;
        return locale2 === void 0 ? NConfigProvider === null || NConfigProvider === void 0 ? void 0 : NConfigProvider.mergedLocaleRef.value : locale2;
      }),
      mergedDateLocaleRef: computed(() => {
        const {
          dateLocale
        } = props;
        if (dateLocale === null)
          return void 0;
        return dateLocale === void 0 ? NConfigProvider === null || NConfigProvider === void 0 ? void 0 : NConfigProvider.mergedDateLocaleRef.value : dateLocale;
      }),
      mergedHljsRef: computed(() => {
        const {
          hljs
        } = props;
        return hljs === void 0 ? NConfigProvider === null || NConfigProvider === void 0 ? void 0 : NConfigProvider.mergedHljsRef.value : hljs;
      }),
      mergedKatexRef: computed(() => {
        const {
          katex
        } = props;
        return katex === void 0 ? NConfigProvider === null || NConfigProvider === void 0 ? void 0 : NConfigProvider.mergedKatexRef.value : katex;
      }),
      mergedThemeRef,
      mergedThemeOverridesRef,
      inlineThemeDisabled: inlineThemeDisabled || false,
      preflightStyleDisabled: preflightStyleDisabled || false
    });
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      mergedBordered: mergedBorderedRef,
      mergedNamespace: mergedNamespaceRef,
      mergedTheme: mergedThemeRef,
      mergedThemeOverrides: mergedThemeOverridesRef
    };
  },
  render() {
    var _a, _b, _c, _d;
    return !this.abstract ? h(this.as || this.tag, {
      class: `${this.mergedClsPrefix || defaultClsPrefix}-config-provider`
    }, (_b = (_a = this.$slots).default) === null || _b === void 0 ? void 0 : _b.call(_a)) : (_d = (_c = this.$slots).default) === null || _d === void 0 ? void 0 : _d.call(_c);
  }
});
const popselect = {
  name: "Popselect",
  common: derived,
  peers: {
    Popover: popoverDark,
    InternalSelectMenu: internalSelectMenuDark
  }
};
function self$U(vars) {
  const {
    boxShadow2
  } = vars;
  return {
    menuBoxShadow: boxShadow2
  };
}
const popselectLight = createTheme({
  name: "Popselect",
  common: derived$1,
  peers: {
    Popover: popoverLight,
    InternalSelectMenu: internalSelectMenuLight
  },
  self: self$U
});
function self$T(vars) {
  const {
    boxShadow2
  } = vars;
  return {
    menuBoxShadow: boxShadow2
  };
}
const selectLight = createTheme({
  name: "Select",
  common: derived$1,
  peers: {
    InternalSelection: internalSelectionLight,
    InternalSelectMenu: internalSelectMenuLight
  },
  self: self$T
});
const selectDark = {
  name: "Select",
  common: derived,
  peers: {
    InternalSelection: internalSelectionDark,
    InternalSelectMenu: internalSelectMenuDark
  },
  self: self$T
};
const commonVariables$b = {
  itemPaddingSmall: "0 4px",
  itemMarginSmall: "0 0 0 8px",
  itemMarginSmallRtl: "0 8px 0 0",
  itemPaddingMedium: "0 4px",
  itemMarginMedium: "0 0 0 8px",
  itemMarginMediumRtl: "0 8px 0 0",
  itemPaddingLarge: "0 4px",
  itemMarginLarge: "0 0 0 8px",
  itemMarginLargeRtl: "0 8px 0 0",
  buttonIconSizeSmall: "14px",
  buttonIconSizeMedium: "16px",
  buttonIconSizeLarge: "18px",
  inputWidthSmall: "60px",
  selectWidthSmall: "unset",
  inputMarginSmall: "0 0 0 8px",
  inputMarginSmallRtl: "0 8px 0 0",
  selectMarginSmall: "0 0 0 8px",
  prefixMarginSmall: "0 8px 0 0",
  suffixMarginSmall: "0 0 0 8px",
  inputWidthMedium: "60px",
  selectWidthMedium: "unset",
  inputMarginMedium: "0 0 0 8px",
  inputMarginMediumRtl: "0 8px 0 0",
  selectMarginMedium: "0 0 0 8px",
  prefixMarginMedium: "0 8px 0 0",
  suffixMarginMedium: "0 0 0 8px",
  inputWidthLarge: "60px",
  selectWidthLarge: "unset",
  inputMarginLarge: "0 0 0 8px",
  inputMarginLargeRtl: "0 8px 0 0",
  selectMarginLarge: "0 0 0 8px",
  prefixMarginLarge: "0 8px 0 0",
  suffixMarginLarge: "0 0 0 8px"
};
const self$S = (vars) => {
  const {
    textColor2,
    primaryColor,
    primaryColorHover,
    primaryColorPressed,
    inputColorDisabled,
    textColorDisabled,
    borderColor,
    borderRadius,
    // item font size
    fontSizeTiny,
    fontSizeSmall,
    fontSizeMedium,
    // item size
    heightTiny,
    heightSmall,
    heightMedium
  } = vars;
  return Object.assign(Object.assign({}, commonVariables$b), {
    buttonColor: "#0000",
    buttonColorHover: "#0000",
    buttonColorPressed: "#0000",
    buttonBorder: `1px solid ${borderColor}`,
    buttonBorderHover: `1px solid ${borderColor}`,
    buttonBorderPressed: `1px solid ${borderColor}`,
    buttonIconColor: textColor2,
    buttonIconColorHover: textColor2,
    buttonIconColorPressed: textColor2,
    itemTextColor: textColor2,
    itemTextColorHover: primaryColorHover,
    itemTextColorPressed: primaryColorPressed,
    itemTextColorActive: primaryColor,
    itemTextColorDisabled: textColorDisabled,
    itemColor: "#0000",
    itemColorHover: "#0000",
    itemColorPressed: "#0000",
    itemColorActive: "#0000",
    itemColorActiveHover: "#0000",
    itemColorDisabled: inputColorDisabled,
    itemBorder: "1px solid #0000",
    itemBorderHover: "1px solid #0000",
    itemBorderPressed: "1px solid #0000",
    itemBorderActive: `1px solid ${primaryColor}`,
    itemBorderDisabled: `1px solid ${borderColor}`,
    itemBorderRadius: borderRadius,
    itemSizeSmall: heightTiny,
    itemSizeMedium: heightSmall,
    itemSizeLarge: heightMedium,
    itemFontSizeSmall: fontSizeTiny,
    itemFontSizeMedium: fontSizeSmall,
    itemFontSizeLarge: fontSizeMedium,
    jumperFontSizeSmall: fontSizeTiny,
    jumperFontSizeMedium: fontSizeSmall,
    jumperFontSizeLarge: fontSizeMedium,
    jumperTextColor: textColor2,
    jumperTextColorDisabled: textColorDisabled
  });
};
const paginationLight = createTheme({
  name: "Pagination",
  common: derived$1,
  peers: {
    Select: selectLight,
    Input: inputLight,
    Popselect: popselectLight
  },
  self: self$S
});
const paginationDark = {
  name: "Pagination",
  common: derived,
  peers: {
    Select: selectDark,
    Input: inputDark,
    Popselect: popselect
  },
  self(vars) {
    const {
      primaryColor,
      opacity3
    } = vars;
    const borderColorActive = changeColor(primaryColor, {
      alpha: Number(opacity3)
    });
    const commonSelf = self$S(vars);
    commonSelf.itemBorderActive = `1px solid ${borderColorActive}`;
    commonSelf.itemBorderDisabled = "1px solid #0000";
    return commonSelf;
  }
};
const tooltipDark = {
  name: "Tooltip",
  common: derived,
  peers: {
    Popover: popoverDark
  },
  self(vars) {
    const {
      borderRadius,
      boxShadow2,
      popoverColor,
      textColor2
    } = vars;
    return Object.assign(Object.assign({}, commonVars$d), {
      borderRadius,
      boxShadow: boxShadow2,
      color: popoverColor,
      textColor: textColor2
    });
  }
};
const ellipsisDark = {
  name: "Ellipsis",
  common: derived,
  peers: {
    Tooltip: tooltipDark
  }
};
const ellipsisLight = createTheme({
  name: "Ellipsis",
  common: derived$1,
  peers: {
    Tooltip: tooltipLight
  }
});
const commonVariables$a = {
  radioSizeSmall: "14px",
  radioSizeMedium: "16px",
  radioSizeLarge: "18px",
  labelPadding: "0 8px",
  labelFontWeight: "400"
};
const radioDark = {
  name: "Radio",
  common: derived,
  self(vars) {
    const {
      borderColor,
      primaryColor,
      baseColor,
      textColorDisabled,
      inputColorDisabled,
      textColor2,
      opacityDisabled,
      borderRadius,
      fontSizeSmall,
      fontSizeMedium,
      fontSizeLarge,
      heightSmall,
      heightMedium,
      heightLarge,
      lineHeight
    } = vars;
    return Object.assign(Object.assign({}, commonVariables$a), {
      labelLineHeight: lineHeight,
      buttonHeightSmall: heightSmall,
      buttonHeightMedium: heightMedium,
      buttonHeightLarge: heightLarge,
      fontSizeSmall,
      fontSizeMedium,
      fontSizeLarge,
      boxShadow: `inset 0 0 0 1px ${borderColor}`,
      boxShadowActive: `inset 0 0 0 1px ${primaryColor}`,
      boxShadowFocus: `inset 0 0 0 1px ${primaryColor}, 0 0 0 2px ${changeColor(primaryColor, {
        alpha: 0.3
      })}`,
      boxShadowHover: `inset 0 0 0 1px ${primaryColor}`,
      boxShadowDisabled: `inset 0 0 0 1px ${borderColor}`,
      color: "#0000",
      colorDisabled: inputColorDisabled,
      colorActive: "#0000",
      textColor: textColor2,
      textColorDisabled,
      dotColorActive: primaryColor,
      dotColorDisabled: borderColor,
      buttonBorderColor: borderColor,
      buttonBorderColorActive: primaryColor,
      buttonBorderColorHover: primaryColor,
      buttonColor: "#0000",
      buttonColorActive: primaryColor,
      buttonTextColor: textColor2,
      buttonTextColorActive: baseColor,
      buttonTextColorHover: primaryColor,
      opacityDisabled,
      buttonBoxShadowFocus: `inset 0 0 0 1px ${primaryColor}, 0 0 0 2px ${changeColor(primaryColor, {
        alpha: 0.3
      })}`,
      buttonBoxShadowHover: `inset 0 0 0 1px ${primaryColor}`,
      buttonBoxShadow: "inset 0 0 0 1px #0000",
      buttonBorderRadius: borderRadius
    });
  }
};
const self$R = (vars) => {
  const {
    borderColor,
    primaryColor,
    baseColor,
    textColorDisabled,
    inputColorDisabled,
    textColor2,
    opacityDisabled,
    borderRadius,
    fontSizeSmall,
    fontSizeMedium,
    fontSizeLarge,
    heightSmall,
    heightMedium,
    heightLarge,
    lineHeight
  } = vars;
  return Object.assign(Object.assign({}, commonVariables$a), {
    labelLineHeight: lineHeight,
    buttonHeightSmall: heightSmall,
    buttonHeightMedium: heightMedium,
    buttonHeightLarge: heightLarge,
    fontSizeSmall,
    fontSizeMedium,
    fontSizeLarge,
    boxShadow: `inset 0 0 0 1px ${borderColor}`,
    boxShadowActive: `inset 0 0 0 1px ${primaryColor}`,
    boxShadowFocus: `inset 0 0 0 1px ${primaryColor}, 0 0 0 2px ${changeColor(primaryColor, {
      alpha: 0.2
    })}`,
    boxShadowHover: `inset 0 0 0 1px ${primaryColor}`,
    boxShadowDisabled: `inset 0 0 0 1px ${borderColor}`,
    color: baseColor,
    colorDisabled: inputColorDisabled,
    colorActive: "#0000",
    textColor: textColor2,
    textColorDisabled,
    dotColorActive: primaryColor,
    dotColorDisabled: borderColor,
    buttonBorderColor: borderColor,
    buttonBorderColorActive: primaryColor,
    buttonBorderColorHover: borderColor,
    buttonColor: baseColor,
    buttonColorActive: baseColor,
    buttonTextColor: textColor2,
    buttonTextColorActive: primaryColor,
    buttonTextColorHover: primaryColor,
    opacityDisabled,
    buttonBoxShadowFocus: `inset 0 0 0 1px ${primaryColor}, 0 0 0 2px ${changeColor(primaryColor, {
      alpha: 0.3
    })}`,
    buttonBoxShadowHover: "inset 0 0 0 1px #0000",
    buttonBoxShadow: "inset 0 0 0 1px #0000",
    buttonBorderRadius: borderRadius
  });
};
const radioLight = {
  name: "Radio",
  common: derived$1,
  self: self$R
};
const commonVariables$9 = {
  padding: "4px 0",
  optionIconSizeSmall: "14px",
  optionIconSizeMedium: "16px",
  optionIconSizeLarge: "16px",
  optionIconSizeHuge: "18px",
  optionSuffixWidthSmall: "14px",
  optionSuffixWidthMedium: "14px",
  optionSuffixWidthLarge: "16px",
  optionSuffixWidthHuge: "16px",
  optionIconSuffixWidthSmall: "32px",
  optionIconSuffixWidthMedium: "32px",
  optionIconSuffixWidthLarge: "36px",
  optionIconSuffixWidthHuge: "36px",
  optionPrefixWidthSmall: "14px",
  optionPrefixWidthMedium: "14px",
  optionPrefixWidthLarge: "16px",
  optionPrefixWidthHuge: "16px",
  optionIconPrefixWidthSmall: "36px",
  optionIconPrefixWidthMedium: "36px",
  optionIconPrefixWidthLarge: "40px",
  optionIconPrefixWidthHuge: "40px"
};
const self$Q = (vars) => {
  const {
    primaryColor,
    textColor2,
    dividerColor,
    hoverColor,
    popoverColor,
    invertedColor,
    borderRadius,
    fontSizeSmall,
    fontSizeMedium,
    fontSizeLarge,
    fontSizeHuge,
    heightSmall,
    heightMedium,
    heightLarge,
    heightHuge,
    textColor3,
    opacityDisabled
  } = vars;
  return Object.assign(Object.assign({}, commonVariables$9), {
    optionHeightSmall: heightSmall,
    optionHeightMedium: heightMedium,
    optionHeightLarge: heightLarge,
    optionHeightHuge: heightHuge,
    borderRadius,
    fontSizeSmall,
    fontSizeMedium,
    fontSizeLarge,
    fontSizeHuge,
    // non-inverted
    optionTextColor: textColor2,
    optionTextColorHover: textColor2,
    optionTextColorActive: primaryColor,
    optionTextColorChildActive: primaryColor,
    color: popoverColor,
    dividerColor,
    suffixColor: textColor2,
    prefixColor: textColor2,
    optionColorHover: hoverColor,
    optionColorActive: changeColor(primaryColor, {
      alpha: 0.1
    }),
    groupHeaderTextColor: textColor3,
    // inverted
    optionTextColorInverted: "#BBB",
    optionTextColorHoverInverted: "#FFF",
    optionTextColorActiveInverted: "#FFF",
    optionTextColorChildActiveInverted: "#FFF",
    colorInverted: invertedColor,
    dividerColorInverted: "#BBB",
    suffixColorInverted: "#BBB",
    prefixColorInverted: "#BBB",
    optionColorHoverInverted: primaryColor,
    optionColorActiveInverted: primaryColor,
    groupHeaderTextColorInverted: "#AAA",
    optionOpacityDisabled: opacityDisabled
  });
};
const dropdownLight = createTheme({
  name: "Dropdown",
  common: derived$1,
  peers: {
    Popover: popoverLight
  },
  self: self$Q
});
const dropdownDark = {
  name: "Dropdown",
  common: derived,
  peers: {
    Popover: popoverDark
  },
  self(vars) {
    const {
      primaryColorSuppl,
      primaryColor,
      popoverColor
    } = vars;
    const commonSelf = self$Q(vars);
    commonSelf.colorInverted = popoverColor;
    commonSelf.optionColorActive = changeColor(primaryColor, {
      alpha: 0.15
    });
    commonSelf.optionColorActiveInverted = primaryColorSuppl;
    commonSelf.optionColorHoverInverted = primaryColorSuppl;
    return commonSelf;
  }
};
const commonVariables$8 = {
  thPaddingSmall: "8px",
  thPaddingMedium: "12px",
  thPaddingLarge: "12px",
  tdPaddingSmall: "8px",
  tdPaddingMedium: "12px",
  tdPaddingLarge: "12px",
  sorterSize: "15px",
  resizableContainerSize: "8px",
  resizableSize: "2px",
  filterSize: "15px",
  paginationMargin: "12px 0 0 0",
  emptyPadding: "48px 0",
  actionPadding: "8px 12px",
  actionButtonMargin: "0 8px 0 0"
};
const self$P = (vars) => {
  const {
    cardColor,
    modalColor,
    popoverColor,
    textColor2,
    textColor1,
    tableHeaderColor,
    tableColorHover,
    iconColor,
    primaryColor,
    fontWeightStrong,
    borderRadius,
    lineHeight,
    fontSizeSmall,
    fontSizeMedium,
    fontSizeLarge,
    dividerColor,
    heightSmall,
    opacityDisabled,
    tableColorStriped
  } = vars;
  return Object.assign(Object.assign({}, commonVariables$8), {
    actionDividerColor: dividerColor,
    lineHeight,
    borderRadius,
    fontSizeSmall,
    fontSizeMedium,
    fontSizeLarge,
    borderColor: composite(cardColor, dividerColor),
    tdColorHover: composite(cardColor, tableColorHover),
    tdColorStriped: composite(cardColor, tableColorStriped),
    thColor: composite(cardColor, tableHeaderColor),
    thColorHover: composite(composite(cardColor, tableHeaderColor), tableColorHover),
    tdColor: cardColor,
    tdTextColor: textColor2,
    thTextColor: textColor1,
    thFontWeight: fontWeightStrong,
    thButtonColorHover: tableColorHover,
    thIconColor: iconColor,
    thIconColorActive: primaryColor,
    // modal
    borderColorModal: composite(modalColor, dividerColor),
    tdColorHoverModal: composite(modalColor, tableColorHover),
    tdColorStripedModal: composite(modalColor, tableColorStriped),
    thColorModal: composite(modalColor, tableHeaderColor),
    thColorHoverModal: composite(composite(modalColor, tableHeaderColor), tableColorHover),
    tdColorModal: modalColor,
    // popover
    borderColorPopover: composite(popoverColor, dividerColor),
    tdColorHoverPopover: composite(popoverColor, tableColorHover),
    tdColorStripedPopover: composite(popoverColor, tableColorStriped),
    thColorPopover: composite(popoverColor, tableHeaderColor),
    thColorHoverPopover: composite(composite(popoverColor, tableHeaderColor), tableColorHover),
    tdColorPopover: popoverColor,
    boxShadowBefore: "inset -12px 0 8px -12px rgba(0, 0, 0, .18)",
    boxShadowAfter: "inset 12px 0 8px -12px rgba(0, 0, 0, .18)",
    // loading
    loadingColor: primaryColor,
    loadingSize: heightSmall,
    opacityLoading: opacityDisabled
  });
};
const dataTableLight = createTheme({
  name: "DataTable",
  common: derived$1,
  peers: {
    Button: buttonLight,
    Checkbox: checkboxLight,
    Radio: radioLight,
    Pagination: paginationLight,
    Scrollbar: scrollbarLight,
    Empty: emptyLight,
    Popover: popoverLight,
    Ellipsis: ellipsisLight,
    Dropdown: dropdownLight
  },
  self: self$P
});
const dataTableDark = {
  name: "DataTable",
  common: derived,
  peers: {
    Button: buttonDark,
    Checkbox: checkboxDark,
    Radio: radioDark,
    Pagination: paginationDark,
    Scrollbar: scrollbarDark,
    Empty: emptyDark,
    Popover: popoverDark,
    Ellipsis: ellipsisDark,
    Dropdown: dropdownDark
  },
  self(vars) {
    const commonSelf = self$P(vars);
    commonSelf.boxShadowAfter = "inset 12px 0 8px -12px rgba(0, 0, 0, .36)";
    commonSelf.boxShadowBefore = "inset -12px 0 8px -12px rgba(0, 0, 0, .36)";
    return commonSelf;
  }
};
const self$O = (vars) => {
  const {
    textColorBase,
    opacity1,
    opacity2,
    opacity3,
    opacity4,
    opacity5
  } = vars;
  return {
    color: textColorBase,
    opacity1Depth: opacity1,
    opacity2Depth: opacity2,
    opacity3Depth: opacity3,
    opacity4Depth: opacity4,
    opacity5Depth: opacity5
  };
};
const iconLight = {
  name: "Icon",
  common: derived$1,
  self: self$O
};
const iconDark$1 = {
  name: "Icon",
  common: derived,
  self: self$O
};
const commonVars$8 = {
  itemFontSize: "12px",
  itemHeight: "36px",
  itemWidth: "52px",
  panelActionPadding: "8px 0"
};
const self$N = (vars) => {
  const {
    popoverColor,
    textColor2,
    primaryColor,
    hoverColor,
    dividerColor,
    opacityDisabled,
    boxShadow2,
    borderRadius,
    iconColor,
    iconColorDisabled
  } = vars;
  return Object.assign(Object.assign({}, commonVars$8), {
    panelColor: popoverColor,
    panelBoxShadow: boxShadow2,
    panelDividerColor: dividerColor,
    itemTextColor: textColor2,
    itemTextColorActive: primaryColor,
    itemColorHover: hoverColor,
    itemOpacityDisabled: opacityDisabled,
    itemBorderRadius: borderRadius,
    borderRadius,
    iconColor,
    iconColorDisabled
  });
};
const timePickerLight = createTheme({
  name: "TimePicker",
  common: derived$1,
  peers: {
    Scrollbar: scrollbarLight,
    Button: buttonLight,
    Input: inputLight
  },
  self: self$N
});
const timePickerDark = {
  name: "TimePicker",
  common: derived,
  peers: {
    Scrollbar: scrollbarDark,
    Button: buttonDark,
    Input: inputDark
  },
  self: self$N
};
const commonVars$7 = {
  itemSize: "24px",
  itemCellWidth: "38px",
  itemCellHeight: "32px",
  scrollItemWidth: "80px",
  scrollItemHeight: "40px",
  panelExtraFooterPadding: "8px 12px",
  panelActionPadding: "8px 12px",
  calendarTitlePadding: "0",
  calendarTitleHeight: "28px",
  arrowSize: "14px",
  panelHeaderPadding: "8px 12px",
  calendarDaysHeight: "32px",
  calendarTitleGridTempateColumns: "28px 28px 1fr 28px 28px",
  // type
  calendarLeftPaddingDate: "6px 12px 4px 12px",
  calendarLeftPaddingDatetime: "4px 12px",
  calendarLeftPaddingDaterange: "6px 12px 4px 12px",
  calendarLeftPaddingDatetimerange: "4px 12px",
  calendarLeftPaddingMonth: "0",
  // TODO: make it actually effective
  calendarLeftPaddingYear: "0",
  calendarLeftPaddingQuarter: "0",
  calendarLeftPaddingMonthrange: "0",
  calendarLeftPaddingQuarterrange: "0",
  calendarLeftPaddingYearrange: "0",
  calendarLeftPaddingWeek: "6px 12px 4px 12px",
  calendarRightPaddingDate: "6px 12px 4px 12px",
  calendarRightPaddingDatetime: "4px 12px",
  calendarRightPaddingDaterange: "6px 12px 4px 12px",
  calendarRightPaddingDatetimerange: "4px 12px",
  calendarRightPaddingMonth: "0",
  calendarRightPaddingYear: "0",
  calendarRightPaddingQuarter: "0",
  calendarRightPaddingMonthrange: "0",
  calendarRightPaddingQuarterrange: "0",
  calendarRightPaddingYearrange: "0",
  calendarRightPaddingWeek: "0"
};
const self$M = (vars) => {
  const {
    hoverColor,
    fontSize,
    textColor2,
    textColorDisabled,
    popoverColor,
    primaryColor,
    borderRadiusSmall,
    iconColor,
    iconColorDisabled,
    textColor1,
    dividerColor,
    boxShadow2,
    borderRadius,
    fontWeightStrong
  } = vars;
  return Object.assign(Object.assign({}, commonVars$7), {
    itemFontSize: fontSize,
    calendarDaysFontSize: fontSize,
    calendarTitleFontSize: fontSize,
    itemTextColor: textColor2,
    itemTextColorDisabled: textColorDisabled,
    itemTextColorActive: popoverColor,
    itemTextColorCurrent: primaryColor,
    itemColorIncluded: changeColor(primaryColor, {
      alpha: 0.1
    }),
    itemColorHover: hoverColor,
    itemColorDisabled: hoverColor,
    itemColorActive: primaryColor,
    itemBorderRadius: borderRadiusSmall,
    panelColor: popoverColor,
    panelTextColor: textColor2,
    arrowColor: iconColor,
    calendarTitleTextColor: textColor1,
    calendarTitleColorHover: hoverColor,
    calendarDaysTextColor: textColor2,
    panelHeaderDividerColor: dividerColor,
    calendarDaysDividerColor: dividerColor,
    calendarDividerColor: dividerColor,
    panelActionDividerColor: dividerColor,
    panelBoxShadow: boxShadow2,
    panelBorderRadius: borderRadius,
    calendarTitleFontWeight: fontWeightStrong,
    scrollItemBorderRadius: borderRadius,
    iconColor,
    iconColorDisabled
  });
};
const datePickerLight = createTheme({
  name: "DatePicker",
  common: derived$1,
  peers: {
    Input: inputLight,
    Button: buttonLight,
    TimePicker: timePickerLight,
    Scrollbar: scrollbarLight
  },
  self: self$M
});
const datePickerDark = {
  name: "DatePicker",
  common: derived,
  peers: {
    Input: inputDark,
    Button: buttonDark,
    TimePicker: timePickerDark,
    Scrollbar: scrollbarDark
  },
  self(vars) {
    const {
      popoverColor,
      hoverColor,
      primaryColor
    } = vars;
    const commonSelf = self$M(vars);
    commonSelf.itemColorDisabled = composite(popoverColor, hoverColor);
    commonSelf.itemColorIncluded = changeColor(primaryColor, {
      alpha: 0.15
    });
    commonSelf.itemColorHover = composite(popoverColor, hoverColor);
    return commonSelf;
  }
};
function uniCalendarValidation(props, mergedValueRef) {
  const timePickerValidatorRef = computed(() => {
    const {
      isTimeDisabled
    } = props;
    const {
      value
    } = mergedValueRef;
    if (value === null || Array.isArray(value))
      return void 0;
    return isTimeDisabled === null || isTimeDisabled === void 0 ? void 0 : isTimeDisabled(value);
  });
  const isHourDisabledRef = computed(() => {
    var _a;
    return (_a = timePickerValidatorRef.value) === null || _a === void 0 ? void 0 : _a.isHourDisabled;
  });
  const isMinuteDisabledRef = computed(() => {
    var _a;
    return (_a = timePickerValidatorRef.value) === null || _a === void 0 ? void 0 : _a.isMinuteDisabled;
  });
  const isSecondDisabledRef = computed(() => {
    var _a;
    return (_a = timePickerValidatorRef.value) === null || _a === void 0 ? void 0 : _a.isSecondDisabled;
  });
  const isDateInvalidRef = computed(() => {
    const {
      type,
      isDateDisabled
    } = props;
    const {
      value
    } = mergedValueRef;
    if (value === null || Array.isArray(value) || !["date", "datetime"].includes(type) || !isDateDisabled) {
      return false;
    }
    return isDateDisabled(value, {
      type: "input"
    });
  });
  const isTimeInvalidRef = computed(() => {
    const {
      type
    } = props;
    const {
      value
    } = mergedValueRef;
    if (value === null || !(type !== "datetime") || Array.isArray(value)) {
      return false;
    }
    const time2 = new Date(value);
    const hour = time2.getHours();
    const minute = time2.getMinutes();
    const second = time2.getMinutes();
    return (isHourDisabledRef.value ? isHourDisabledRef.value(hour) : false) || (isMinuteDisabledRef.value ? isMinuteDisabledRef.value(minute, hour) : false) || (isSecondDisabledRef.value ? isSecondDisabledRef.value(second, minute, hour) : false);
  });
  const isDateTimeInvalidRef = computed(() => {
    return isDateInvalidRef.value || isTimeInvalidRef.value;
  });
  const isValueInvalidRef = computed(() => {
    const {
      type
    } = props;
    if (type === "date")
      return isDateInvalidRef.value;
    if (type === "datetime")
      return isDateTimeInvalidRef.value;
    return false;
  });
  return {
    // date & datetime
    isValueInvalidRef,
    isDateInvalidRef,
    // datetime only
    isTimeInvalidRef,
    isDateTimeInvalidRef,
    isHourDisabledRef,
    isMinuteDisabledRef,
    isSecondDisabledRef
  };
}
function dualCalendarValidation(props, mergedValueRef) {
  const timePickerValidatorRef = computed(() => {
    const {
      isTimeDisabled
    } = props;
    const {
      value
    } = mergedValueRef;
    if (!Array.isArray(value) || !isTimeDisabled) {
      return [void 0, void 0];
    }
    return [isTimeDisabled === null || isTimeDisabled === void 0 ? void 0 : isTimeDisabled(value[0], "start", value), isTimeDisabled === null || isTimeDisabled === void 0 ? void 0 : isTimeDisabled(value[1], "end", value)];
  });
  const timeValidator = {
    isStartHourDisabledRef: computed(() => {
      var _a;
      return (_a = timePickerValidatorRef.value[0]) === null || _a === void 0 ? void 0 : _a.isHourDisabled;
    }),
    isEndHourDisabledRef: computed(() => {
      var _a;
      return (_a = timePickerValidatorRef.value[1]) === null || _a === void 0 ? void 0 : _a.isHourDisabled;
    }),
    isStartMinuteDisabledRef: computed(() => {
      var _a;
      return (_a = timePickerValidatorRef.value[0]) === null || _a === void 0 ? void 0 : _a.isMinuteDisabled;
    }),
    isEndMinuteDisabledRef: computed(() => {
      var _a;
      return (_a = timePickerValidatorRef.value[1]) === null || _a === void 0 ? void 0 : _a.isMinuteDisabled;
    }),
    isStartSecondDisabledRef: computed(() => {
      var _a;
      return (_a = timePickerValidatorRef.value[0]) === null || _a === void 0 ? void 0 : _a.isSecondDisabled;
    }),
    isEndSecondDisabledRef: computed(() => {
      var _a;
      return (_a = timePickerValidatorRef.value[1]) === null || _a === void 0 ? void 0 : _a.isSecondDisabled;
    })
  };
  const isStartDateInvalidRef = computed(() => {
    const {
      type,
      isDateDisabled
    } = props;
    const {
      value
    } = mergedValueRef;
    if (value === null || !Array.isArray(value) || !["daterange", "datetimerange"].includes(type) || !isDateDisabled) {
      return false;
    }
    return isDateDisabled(value[0], "start", value);
  });
  const isEndDateInvalidRef = computed(() => {
    const {
      type,
      isDateDisabled
    } = props;
    const {
      value
    } = mergedValueRef;
    if (value === null || !Array.isArray(value) || !["daterange", "datetimerange"].includes(type) || !isDateDisabled) {
      return false;
    }
    return isDateDisabled(value[1], "end", value);
  });
  const isStartTimeInvalidRef = computed(() => {
    const {
      type
    } = props;
    const {
      value
    } = mergedValueRef;
    if (value === null || !Array.isArray(value) || type !== "datetimerange") {
      return false;
    }
    const startHours = getHours(value[0]);
    const startMinutes = getMinutes(value[0]);
    const startSeconds = getSeconds(value[0]);
    const {
      isStartHourDisabledRef,
      isStartMinuteDisabledRef,
      isStartSecondDisabledRef
    } = timeValidator;
    const startTimeInvalid = (isStartHourDisabledRef.value ? isStartHourDisabledRef.value(startHours) : false) || (isStartMinuteDisabledRef.value ? isStartMinuteDisabledRef.value(startMinutes, startHours) : false) || (isStartSecondDisabledRef.value ? isStartSecondDisabledRef.value(startSeconds, startMinutes, startHours) : false);
    return startTimeInvalid;
  });
  const isEndTimeInvalidRef = computed(() => {
    const {
      type
    } = props;
    const {
      value
    } = mergedValueRef;
    if (value === null || !Array.isArray(value) || type !== "datetimerange") {
      return false;
    }
    const endHours = getHours(value[1]);
    const endMinutes = getMinutes(value[1]);
    const endSeconds = getSeconds(value[1]);
    const {
      isEndHourDisabledRef,
      isEndMinuteDisabledRef,
      isEndSecondDisabledRef
    } = timeValidator;
    const endTimeInvalid = (isEndHourDisabledRef.value ? isEndHourDisabledRef.value(endHours) : false) || (isEndMinuteDisabledRef.value ? isEndMinuteDisabledRef.value(endMinutes, endHours) : false) || (isEndSecondDisabledRef.value ? isEndSecondDisabledRef.value(endSeconds, endMinutes, endHours) : false);
    return endTimeInvalid;
  });
  const isStartValueInvalidRef = computed(() => {
    return isStartDateInvalidRef.value || isStartTimeInvalidRef.value;
  });
  const isEndValueInvalidRef = computed(() => {
    return isEndDateInvalidRef.value || isEndTimeInvalidRef.value;
  });
  const isRangeInvalidRef = computed(() => {
    return isStartValueInvalidRef.value || isEndValueInvalidRef.value;
  });
  return Object.assign(Object.assign({}, timeValidator), {
    isStartDateInvalidRef,
    isEndDateInvalidRef,
    isStartTimeInvalidRef,
    isEndTimeInvalidRef,
    isStartValueInvalidRef,
    isEndValueInvalidRef,
    isRangeInvalidRef
  });
}
const datePickerInjectionKey = createInjectionKey("n-date-picker");
function getDefaultExportFromCjs(x2) {
  return x2 && x2.__esModule && Object.prototype.hasOwnProperty.call(x2, "default") ? x2["default"] : x2;
}
var cloneObject$1 = { exports: {} };
var assign = { exports: {} };
(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = assign2;
  function assign2(target, object) {
    if (target == null) {
      throw new TypeError("assign requires that input parameter not be null or undefined");
    }
    for (var property in object) {
      if (Object.prototype.hasOwnProperty.call(object, property)) {
        target[property] = object[property];
      }
    }
    return target;
  }
  module.exports = exports.default;
})(assign, assign.exports);
var assignExports = assign.exports;
(function(module, exports) {
  var _interopRequireDefault = require$$0.default;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = cloneObject2;
  var _index = _interopRequireDefault(assignExports);
  function cloneObject2(object) {
    return (0, _index.default)({}, object);
  }
  module.exports = exports.default;
})(cloneObject$1, cloneObject$1.exports);
var cloneObjectExports = cloneObject$1.exports;
const cloneObject = /* @__PURE__ */ getDefaultExportFromCjs(cloneObjectExports);
var format$2 = { exports: {} };
var isValid = { exports: {} };
var isDate = { exports: {} };
var requiredArgs = { exports: {} };
(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = requiredArgs2;
  function requiredArgs2(required, args) {
    if (args.length < required) {
      throw new TypeError(required + " argument" + (required > 1 ? "s" : "") + " required, but only " + args.length + " present");
    }
  }
  module.exports = exports.default;
})(requiredArgs, requiredArgs.exports);
var requiredArgsExports = requiredArgs.exports;
(function(module, exports) {
  var _interopRequireDefault = require$$0.default;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = isDate2;
  var _typeof2 = _interopRequireDefault(require$$1);
  var _index = _interopRequireDefault(requiredArgsExports);
  function isDate2(value) {
    (0, _index.default)(1, arguments);
    return value instanceof Date || (0, _typeof2.default)(value) === "object" && Object.prototype.toString.call(value) === "[object Date]";
  }
  module.exports = exports.default;
})(isDate, isDate.exports);
var isDateExports = isDate.exports;
var toDate$1 = { exports: {} };
(function(module, exports) {
  var _interopRequireDefault = require$$0.default;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = toDate2;
  var _typeof2 = _interopRequireDefault(require$$1);
  var _index = _interopRequireDefault(requiredArgsExports);
  function toDate2(argument) {
    (0, _index.default)(1, arguments);
    var argStr = Object.prototype.toString.call(argument);
    if (argument instanceof Date || (0, _typeof2.default)(argument) === "object" && argStr === "[object Date]") {
      return new Date(argument.getTime());
    } else if (typeof argument === "number" || argStr === "[object Number]") {
      return new Date(argument);
    } else {
      if ((typeof argument === "string" || argStr === "[object String]") && typeof console !== "undefined") {
        console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments");
        console.warn(new Error().stack);
      }
      return /* @__PURE__ */ new Date(NaN);
    }
  }
  module.exports = exports.default;
})(toDate$1, toDate$1.exports);
var toDateExports = toDate$1.exports;
(function(module, exports) {
  var _interopRequireDefault = require$$0.default;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = isValid2;
  var _index = _interopRequireDefault(isDateExports);
  var _index2 = _interopRequireDefault(toDateExports);
  var _index3 = _interopRequireDefault(requiredArgsExports);
  function isValid2(dirtyDate) {
    (0, _index3.default)(1, arguments);
    if (!(0, _index.default)(dirtyDate) && typeof dirtyDate !== "number") {
      return false;
    }
    var date = (0, _index2.default)(dirtyDate);
    return !isNaN(Number(date));
  }
  module.exports = exports.default;
})(isValid, isValid.exports);
var isValidExports = isValid.exports;
var subMilliseconds = { exports: {} };
var addMilliseconds = { exports: {} };
var toInteger$1 = { exports: {} };
(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = toInteger2;
  function toInteger2(dirtyNumber) {
    if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
      return NaN;
    }
    var number = Number(dirtyNumber);
    if (isNaN(number)) {
      return number;
    }
    return number < 0 ? Math.ceil(number) : Math.floor(number);
  }
  module.exports = exports.default;
})(toInteger$1, toInteger$1.exports);
var toIntegerExports = toInteger$1.exports;
const toInteger = /* @__PURE__ */ getDefaultExportFromCjs(toIntegerExports);
(function(module, exports) {
  var _interopRequireDefault = require$$0.default;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = addMilliseconds2;
  var _index = _interopRequireDefault(toIntegerExports);
  var _index2 = _interopRequireDefault(toDateExports);
  var _index3 = _interopRequireDefault(requiredArgsExports);
  function addMilliseconds2(dirtyDate, dirtyAmount) {
    (0, _index3.default)(2, arguments);
    var timestamp = (0, _index2.default)(dirtyDate).getTime();
    var amount = (0, _index.default)(dirtyAmount);
    return new Date(timestamp + amount);
  }
  module.exports = exports.default;
})(addMilliseconds, addMilliseconds.exports);
var addMillisecondsExports = addMilliseconds.exports;
(function(module, exports) {
  var _interopRequireDefault = require$$0.default;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = subMilliseconds2;
  var _index = _interopRequireDefault(addMillisecondsExports);
  var _index2 = _interopRequireDefault(requiredArgsExports);
  var _index3 = _interopRequireDefault(toIntegerExports);
  function subMilliseconds2(dirtyDate, dirtyAmount) {
    (0, _index2.default)(2, arguments);
    var amount = (0, _index3.default)(dirtyAmount);
    return (0, _index.default)(dirtyDate, -amount);
  }
  module.exports = exports.default;
})(subMilliseconds, subMilliseconds.exports);
var subMillisecondsExports = subMilliseconds.exports;
var formatters$1 = { exports: {} };
var getUTCDayOfYear = { exports: {} };
(function(module, exports) {
  var _interopRequireDefault = require$$0.default;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = getUTCDayOfYear2;
  var _index = _interopRequireDefault(toDateExports);
  var _index2 = _interopRequireDefault(requiredArgsExports);
  var MILLISECONDS_IN_DAY2 = 864e5;
  function getUTCDayOfYear2(dirtyDate) {
    (0, _index2.default)(1, arguments);
    var date = (0, _index.default)(dirtyDate);
    var timestamp = date.getTime();
    date.setUTCMonth(0, 1);
    date.setUTCHours(0, 0, 0, 0);
    var startOfYearTimestamp = date.getTime();
    var difference = timestamp - startOfYearTimestamp;
    return Math.floor(difference / MILLISECONDS_IN_DAY2) + 1;
  }
  module.exports = exports.default;
})(getUTCDayOfYear, getUTCDayOfYear.exports);
var getUTCDayOfYearExports = getUTCDayOfYear.exports;
var getUTCISOWeek = { exports: {} };
var startOfUTCISOWeek = { exports: {} };
(function(module, exports) {
  var _interopRequireDefault = require$$0.default;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = startOfUTCISOWeek2;
  var _index = _interopRequireDefault(toDateExports);
  var _index2 = _interopRequireDefault(requiredArgsExports);
  function startOfUTCISOWeek2(dirtyDate) {
    (0, _index2.default)(1, arguments);
    var weekStartsOn = 1;
    var date = (0, _index.default)(dirtyDate);
    var day = date.getUTCDay();
    var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
    date.setUTCDate(date.getUTCDate() - diff);
    date.setUTCHours(0, 0, 0, 0);
    return date;
  }
  module.exports = exports.default;
})(startOfUTCISOWeek, startOfUTCISOWeek.exports);
var startOfUTCISOWeekExports = startOfUTCISOWeek.exports;
var startOfUTCISOWeekYear = { exports: {} };
var getUTCISOWeekYear = { exports: {} };
(function(module, exports) {
  var _interopRequireDefault = require$$0.default;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = getUTCISOWeekYear2;
  var _index = _interopRequireDefault(toDateExports);
  var _index2 = _interopRequireDefault(requiredArgsExports);
  var _index3 = _interopRequireDefault(startOfUTCISOWeekExports);
  function getUTCISOWeekYear2(dirtyDate) {
    (0, _index2.default)(1, arguments);
    var date = (0, _index.default)(dirtyDate);
    var year = date.getUTCFullYear();
    var fourthOfJanuaryOfNextYear = /* @__PURE__ */ new Date(0);
    fourthOfJanuaryOfNextYear.setUTCFullYear(year + 1, 0, 4);
    fourthOfJanuaryOfNextYear.setUTCHours(0, 0, 0, 0);
    var startOfNextYear = (0, _index3.default)(fourthOfJanuaryOfNextYear);
    var fourthOfJanuaryOfThisYear = /* @__PURE__ */ new Date(0);
    fourthOfJanuaryOfThisYear.setUTCFullYear(year, 0, 4);
    fourthOfJanuaryOfThisYear.setUTCHours(0, 0, 0, 0);
    var startOfThisYear = (0, _index3.default)(fourthOfJanuaryOfThisYear);
    if (date.getTime() >= startOfNextYear.getTime()) {
      return year + 1;
    } else if (date.getTime() >= startOfThisYear.getTime()) {
      return year;
    } else {
      return year - 1;
    }
  }
  module.exports = exports.default;
})(getUTCISOWeekYear, getUTCISOWeekYear.exports);
var getUTCISOWeekYearExports = getUTCISOWeekYear.exports;
(function(module, exports) {
  var _interopRequireDefault = require$$0.default;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = startOfUTCISOWeekYear2;
  var _index = _interopRequireDefault(getUTCISOWeekYearExports);
  var _index2 = _interopRequireDefault(startOfUTCISOWeekExports);
  var _index3 = _interopRequireDefault(requiredArgsExports);
  function startOfUTCISOWeekYear2(dirtyDate) {
    (0, _index3.default)(1, arguments);
    var year = (0, _index.default)(dirtyDate);
    var fourthOfJanuary = /* @__PURE__ */ new Date(0);
    fourthOfJanuary.setUTCFullYear(year, 0, 4);
    fourthOfJanuary.setUTCHours(0, 0, 0, 0);
    var date = (0, _index2.default)(fourthOfJanuary);
    return date;
  }
  module.exports = exports.default;
})(startOfUTCISOWeekYear, startOfUTCISOWeekYear.exports);
var startOfUTCISOWeekYearExports = startOfUTCISOWeekYear.exports;
(function(module, exports) {
  var _interopRequireDefault = require$$0.default;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = getUTCISOWeek2;
  var _index = _interopRequireDefault(toDateExports);
  var _index2 = _interopRequireDefault(startOfUTCISOWeekExports);
  var _index3 = _interopRequireDefault(startOfUTCISOWeekYearExports);
  var _index4 = _interopRequireDefault(requiredArgsExports);
  var MILLISECONDS_IN_WEEK2 = 6048e5;
  function getUTCISOWeek2(dirtyDate) {
    (0, _index4.default)(1, arguments);
    var date = (0, _index.default)(dirtyDate);
    var diff = (0, _index2.default)(date).getTime() - (0, _index3.default)(date).getTime();
    return Math.round(diff / MILLISECONDS_IN_WEEK2) + 1;
  }
  module.exports = exports.default;
})(getUTCISOWeek, getUTCISOWeek.exports);
var getUTCISOWeekExports = getUTCISOWeek.exports;
var getUTCWeek = { exports: {} };
var startOfUTCWeek = { exports: {} };
var defaultOptions$1 = {};
Object.defineProperty(defaultOptions$1, "__esModule", {
  value: true
});
defaultOptions$1.getDefaultOptions = getDefaultOptions;
defaultOptions$1.setDefaultOptions = setDefaultOptions;
var defaultOptions = {};
function getDefaultOptions() {
  return defaultOptions;
}
function setDefaultOptions(newOptions) {
  defaultOptions = newOptions;
}
(function(module, exports) {
  var _interopRequireDefault = require$$0.default;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = startOfUTCWeek2;
  var _index = _interopRequireDefault(toDateExports);
  var _index2 = _interopRequireDefault(requiredArgsExports);
  var _index3 = _interopRequireDefault(toIntegerExports);
  var _index4 = defaultOptions$1;
  function startOfUTCWeek2(dirtyDate, options) {
    var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
    (0, _index2.default)(1, arguments);
    var defaultOptions2 = (0, _index4.getDefaultOptions)();
    var weekStartsOn = (0, _index3.default)((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions2.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions2.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0);
    if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
      throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
    }
    var date = (0, _index.default)(dirtyDate);
    var day = date.getUTCDay();
    var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
    date.setUTCDate(date.getUTCDate() - diff);
    date.setUTCHours(0, 0, 0, 0);
    return date;
  }
  module.exports = exports.default;
})(startOfUTCWeek, startOfUTCWeek.exports);
var startOfUTCWeekExports = startOfUTCWeek.exports;
var startOfUTCWeekYear = { exports: {} };
var getUTCWeekYear = { exports: {} };
(function(module, exports) {
  var _interopRequireDefault = require$$0.default;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = getUTCWeekYear2;
  var _index = _interopRequireDefault(toDateExports);
  var _index2 = _interopRequireDefault(requiredArgsExports);
  var _index3 = _interopRequireDefault(startOfUTCWeekExports);
  var _index4 = _interopRequireDefault(toIntegerExports);
  var _index5 = defaultOptions$1;
  function getUTCWeekYear2(dirtyDate, options) {
    var _ref, _ref2, _ref3, _options$firstWeekCon, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
    (0, _index2.default)(1, arguments);
    var date = (0, _index.default)(dirtyDate);
    var year = date.getUTCFullYear();
    var defaultOptions2 = (0, _index5.getDefaultOptions)();
    var firstWeekContainsDate = (0, _index4.default)((_ref = (_ref2 = (_ref3 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions2.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions2.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref !== void 0 ? _ref : 1);
    if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
      throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
    }
    var firstWeekOfNextYear = /* @__PURE__ */ new Date(0);
    firstWeekOfNextYear.setUTCFullYear(year + 1, 0, firstWeekContainsDate);
    firstWeekOfNextYear.setUTCHours(0, 0, 0, 0);
    var startOfNextYear = (0, _index3.default)(firstWeekOfNextYear, options);
    var firstWeekOfThisYear = /* @__PURE__ */ new Date(0);
    firstWeekOfThisYear.setUTCFullYear(year, 0, firstWeekContainsDate);
    firstWeekOfThisYear.setUTCHours(0, 0, 0, 0);
    var startOfThisYear = (0, _index3.default)(firstWeekOfThisYear, options);
    if (date.getTime() >= startOfNextYear.getTime()) {
      return year + 1;
    } else if (date.getTime() >= startOfThisYear.getTime()) {
      return year;
    } else {
      return year - 1;
    }
  }
  module.exports = exports.default;
})(getUTCWeekYear, getUTCWeekYear.exports);
var getUTCWeekYearExports = getUTCWeekYear.exports;
(function(module, exports) {
  var _interopRequireDefault = require$$0.default;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = startOfUTCWeekYear2;
  var _index = _interopRequireDefault(getUTCWeekYearExports);
  var _index2 = _interopRequireDefault(requiredArgsExports);
  var _index3 = _interopRequireDefault(startOfUTCWeekExports);
  var _index4 = _interopRequireDefault(toIntegerExports);
  var _index5 = defaultOptions$1;
  function startOfUTCWeekYear2(dirtyDate, options) {
    var _ref, _ref2, _ref3, _options$firstWeekCon, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
    (0, _index2.default)(1, arguments);
    var defaultOptions2 = (0, _index5.getDefaultOptions)();
    var firstWeekContainsDate = (0, _index4.default)((_ref = (_ref2 = (_ref3 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions2.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions2.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref !== void 0 ? _ref : 1);
    var year = (0, _index.default)(dirtyDate, options);
    var firstWeek = /* @__PURE__ */ new Date(0);
    firstWeek.setUTCFullYear(year, 0, firstWeekContainsDate);
    firstWeek.setUTCHours(0, 0, 0, 0);
    var date = (0, _index3.default)(firstWeek, options);
    return date;
  }
  module.exports = exports.default;
})(startOfUTCWeekYear, startOfUTCWeekYear.exports);
var startOfUTCWeekYearExports = startOfUTCWeekYear.exports;
(function(module, exports) {
  var _interopRequireDefault = require$$0.default;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = getUTCWeek2;
  var _index = _interopRequireDefault(toDateExports);
  var _index2 = _interopRequireDefault(startOfUTCWeekExports);
  var _index3 = _interopRequireDefault(startOfUTCWeekYearExports);
  var _index4 = _interopRequireDefault(requiredArgsExports);
  var MILLISECONDS_IN_WEEK2 = 6048e5;
  function getUTCWeek2(dirtyDate, options) {
    (0, _index4.default)(1, arguments);
    var date = (0, _index.default)(dirtyDate);
    var diff = (0, _index2.default)(date, options).getTime() - (0, _index3.default)(date, options).getTime();
    return Math.round(diff / MILLISECONDS_IN_WEEK2) + 1;
  }
  module.exports = exports.default;
})(getUTCWeek, getUTCWeek.exports);
var getUTCWeekExports = getUTCWeek.exports;
var addLeadingZeros$1 = { exports: {} };
(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = addLeadingZeros2;
  function addLeadingZeros2(number, targetLength) {
    var sign = number < 0 ? "-" : "";
    var output = Math.abs(number).toString();
    while (output.length < targetLength) {
      output = "0" + output;
    }
    return sign + output;
  }
  module.exports = exports.default;
})(addLeadingZeros$1, addLeadingZeros$1.exports);
var addLeadingZerosExports = addLeadingZeros$1.exports;
var lightFormatters = { exports: {} };
(function(module, exports) {
  var _interopRequireDefault = require$$0.default;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;
  var _index = _interopRequireDefault(addLeadingZerosExports);
  var formatters2 = {
    // Year
    y: function y3(date, token) {
      var signedYear = date.getUTCFullYear();
      var year = signedYear > 0 ? signedYear : 1 - signedYear;
      return (0, _index.default)(token === "yy" ? year % 100 : year, token.length);
    },
    // Month
    M: function M3(date, token) {
      var month = date.getUTCMonth();
      return token === "M" ? String(month + 1) : (0, _index.default)(month + 1, 2);
    },
    // Day of the month
    d: function d3(date, token) {
      return (0, _index.default)(date.getUTCDate(), token.length);
    },
    // AM or PM
    a: function a3(date, token) {
      var dayPeriodEnumValue = date.getUTCHours() / 12 >= 1 ? "pm" : "am";
      switch (token) {
        case "a":
        case "aa":
          return dayPeriodEnumValue.toUpperCase();
        case "aaa":
          return dayPeriodEnumValue;
        case "aaaaa":
          return dayPeriodEnumValue[0];
        case "aaaa":
        default:
          return dayPeriodEnumValue === "am" ? "a.m." : "p.m.";
      }
    },
    // Hour [1-12]
    h: function h4(date, token) {
      return (0, _index.default)(date.getUTCHours() % 12 || 12, token.length);
    },
    // Hour [0-23]
    H: function H3(date, token) {
      return (0, _index.default)(date.getUTCHours(), token.length);
    },
    // Minute
    m: function m3(date, token) {
      return (0, _index.default)(date.getUTCMinutes(), token.length);
    },
    // Second
    s: function s3(date, token) {
      return (0, _index.default)(date.getUTCSeconds(), token.length);
    },
    // Fraction of second
    S: function S3(date, token) {
      var numberOfDigits = token.length;
      var milliseconds = date.getUTCMilliseconds();
      var fractionalSeconds = Math.floor(milliseconds * Math.pow(10, numberOfDigits - 3));
      return (0, _index.default)(fractionalSeconds, token.length);
    }
  };
  var _default = formatters2;
  exports.default = _default;
  module.exports = exports.default;
})(lightFormatters, lightFormatters.exports);
var lightFormattersExports = lightFormatters.exports;
(function(module, exports) {
  var _interopRequireDefault = require$$0.default;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;
  var _index = _interopRequireDefault(getUTCDayOfYearExports);
  var _index2 = _interopRequireDefault(getUTCISOWeekExports);
  var _index3 = _interopRequireDefault(getUTCISOWeekYearExports);
  var _index4 = _interopRequireDefault(getUTCWeekExports);
  var _index5 = _interopRequireDefault(getUTCWeekYearExports);
  var _index6 = _interopRequireDefault(addLeadingZerosExports);
  var _index7 = _interopRequireDefault(lightFormattersExports);
  var dayPeriodEnum2 = {
    am: "am",
    pm: "pm",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  };
  var formatters2 = {
    // Era
    G: function G2(date, token, localize2) {
      var era = date.getUTCFullYear() > 0 ? 1 : 0;
      switch (token) {
        case "G":
        case "GG":
        case "GGG":
          return localize2.era(era, {
            width: "abbreviated"
          });
        case "GGGGG":
          return localize2.era(era, {
            width: "narrow"
          });
        case "GGGG":
        default:
          return localize2.era(era, {
            width: "wide"
          });
      }
    },
    // Year
    y: function y3(date, token, localize2) {
      if (token === "yo") {
        var signedYear = date.getUTCFullYear();
        var year = signedYear > 0 ? signedYear : 1 - signedYear;
        return localize2.ordinalNumber(year, {
          unit: "year"
        });
      }
      return _index7.default.y(date, token);
    },
    // Local week-numbering year
    Y: function Y2(date, token, localize2, options) {
      var signedWeekYear = (0, _index5.default)(date, options);
      var weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear;
      if (token === "YY") {
        var twoDigitYear = weekYear % 100;
        return (0, _index6.default)(twoDigitYear, 2);
      }
      if (token === "Yo") {
        return localize2.ordinalNumber(weekYear, {
          unit: "year"
        });
      }
      return (0, _index6.default)(weekYear, token.length);
    },
    // ISO week-numbering year
    R: function R2(date, token) {
      var isoWeekYear = (0, _index3.default)(date);
      return (0, _index6.default)(isoWeekYear, token.length);
    },
    // Extended year. This is a single number designating the year of this calendar system.
    // The main difference between `y` and `u` localizers are B.C. years:
    // | Year | `y` | `u` |
    // |------|-----|-----|
    // | AC 1 |   1 |   1 |
    // | BC 1 |   1 |   0 |
    // | BC 2 |   2 |  -1 |
    // Also `yy` always returns the last two digits of a year,
    // while `uu` pads single digit years to 2 characters and returns other years unchanged.
    u: function u2(date, token) {
      var year = date.getUTCFullYear();
      return (0, _index6.default)(year, token.length);
    },
    // Quarter
    Q: function Q2(date, token, localize2) {
      var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);
      switch (token) {
        case "Q":
          return String(quarter);
        case "QQ":
          return (0, _index6.default)(quarter, 2);
        case "Qo":
          return localize2.ordinalNumber(quarter, {
            unit: "quarter"
          });
        case "QQQ":
          return localize2.quarter(quarter, {
            width: "abbreviated",
            context: "formatting"
          });
        case "QQQQQ":
          return localize2.quarter(quarter, {
            width: "narrow",
            context: "formatting"
          });
        case "QQQQ":
        default:
          return localize2.quarter(quarter, {
            width: "wide",
            context: "formatting"
          });
      }
    },
    // Stand-alone quarter
    q: function q2(date, token, localize2) {
      var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);
      switch (token) {
        case "q":
          return String(quarter);
        case "qq":
          return (0, _index6.default)(quarter, 2);
        case "qo":
          return localize2.ordinalNumber(quarter, {
            unit: "quarter"
          });
        case "qqq":
          return localize2.quarter(quarter, {
            width: "abbreviated",
            context: "standalone"
          });
        case "qqqqq":
          return localize2.quarter(quarter, {
            width: "narrow",
            context: "standalone"
          });
        case "qqqq":
        default:
          return localize2.quarter(quarter, {
            width: "wide",
            context: "standalone"
          });
      }
    },
    // Month
    M: function M3(date, token, localize2) {
      var month = date.getUTCMonth();
      switch (token) {
        case "M":
        case "MM":
          return _index7.default.M(date, token);
        case "Mo":
          return localize2.ordinalNumber(month + 1, {
            unit: "month"
          });
        case "MMM":
          return localize2.month(month, {
            width: "abbreviated",
            context: "formatting"
          });
        case "MMMMM":
          return localize2.month(month, {
            width: "narrow",
            context: "formatting"
          });
        case "MMMM":
        default:
          return localize2.month(month, {
            width: "wide",
            context: "formatting"
          });
      }
    },
    // Stand-alone month
    L: function L2(date, token, localize2) {
      var month = date.getUTCMonth();
      switch (token) {
        case "L":
          return String(month + 1);
        case "LL":
          return (0, _index6.default)(month + 1, 2);
        case "Lo":
          return localize2.ordinalNumber(month + 1, {
            unit: "month"
          });
        case "LLL":
          return localize2.month(month, {
            width: "abbreviated",
            context: "standalone"
          });
        case "LLLLL":
          return localize2.month(month, {
            width: "narrow",
            context: "standalone"
          });
        case "LLLL":
        default:
          return localize2.month(month, {
            width: "wide",
            context: "standalone"
          });
      }
    },
    // Local week of year
    w: function w2(date, token, localize2, options) {
      var week = (0, _index4.default)(date, options);
      if (token === "wo") {
        return localize2.ordinalNumber(week, {
          unit: "week"
        });
      }
      return (0, _index6.default)(week, token.length);
    },
    // ISO week of year
    I: function I2(date, token, localize2) {
      var isoWeek = (0, _index2.default)(date);
      if (token === "Io") {
        return localize2.ordinalNumber(isoWeek, {
          unit: "week"
        });
      }
      return (0, _index6.default)(isoWeek, token.length);
    },
    // Day of the month
    d: function d3(date, token, localize2) {
      if (token === "do") {
        return localize2.ordinalNumber(date.getUTCDate(), {
          unit: "date"
        });
      }
      return _index7.default.d(date, token);
    },
    // Day of year
    D: function D2(date, token, localize2) {
      var dayOfYear = (0, _index.default)(date);
      if (token === "Do") {
        return localize2.ordinalNumber(dayOfYear, {
          unit: "dayOfYear"
        });
      }
      return (0, _index6.default)(dayOfYear, token.length);
    },
    // Day of week
    E: function E2(date, token, localize2) {
      var dayOfWeek = date.getUTCDay();
      switch (token) {
        case "E":
        case "EE":
        case "EEE":
          return localize2.day(dayOfWeek, {
            width: "abbreviated",
            context: "formatting"
          });
        case "EEEEE":
          return localize2.day(dayOfWeek, {
            width: "narrow",
            context: "formatting"
          });
        case "EEEEEE":
          return localize2.day(dayOfWeek, {
            width: "short",
            context: "formatting"
          });
        case "EEEE":
        default:
          return localize2.day(dayOfWeek, {
            width: "wide",
            context: "formatting"
          });
      }
    },
    // Local day of week
    e: function e2(date, token, localize2, options) {
      var dayOfWeek = date.getUTCDay();
      var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
      switch (token) {
        case "e":
          return String(localDayOfWeek);
        case "ee":
          return (0, _index6.default)(localDayOfWeek, 2);
        case "eo":
          return localize2.ordinalNumber(localDayOfWeek, {
            unit: "day"
          });
        case "eee":
          return localize2.day(dayOfWeek, {
            width: "abbreviated",
            context: "formatting"
          });
        case "eeeee":
          return localize2.day(dayOfWeek, {
            width: "narrow",
            context: "formatting"
          });
        case "eeeeee":
          return localize2.day(dayOfWeek, {
            width: "short",
            context: "formatting"
          });
        case "eeee":
        default:
          return localize2.day(dayOfWeek, {
            width: "wide",
            context: "formatting"
          });
      }
    },
    // Stand-alone local day of week
    c: function c3(date, token, localize2, options) {
      var dayOfWeek = date.getUTCDay();
      var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
      switch (token) {
        case "c":
          return String(localDayOfWeek);
        case "cc":
          return (0, _index6.default)(localDayOfWeek, token.length);
        case "co":
          return localize2.ordinalNumber(localDayOfWeek, {
            unit: "day"
          });
        case "ccc":
          return localize2.day(dayOfWeek, {
            width: "abbreviated",
            context: "standalone"
          });
        case "ccccc":
          return localize2.day(dayOfWeek, {
            width: "narrow",
            context: "standalone"
          });
        case "cccccc":
          return localize2.day(dayOfWeek, {
            width: "short",
            context: "standalone"
          });
        case "cccc":
        default:
          return localize2.day(dayOfWeek, {
            width: "wide",
            context: "standalone"
          });
      }
    },
    // ISO day of week
    i: function i2(date, token, localize2) {
      var dayOfWeek = date.getUTCDay();
      var isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;
      switch (token) {
        case "i":
          return String(isoDayOfWeek);
        case "ii":
          return (0, _index6.default)(isoDayOfWeek, token.length);
        case "io":
          return localize2.ordinalNumber(isoDayOfWeek, {
            unit: "day"
          });
        case "iii":
          return localize2.day(dayOfWeek, {
            width: "abbreviated",
            context: "formatting"
          });
        case "iiiii":
          return localize2.day(dayOfWeek, {
            width: "narrow",
            context: "formatting"
          });
        case "iiiiii":
          return localize2.day(dayOfWeek, {
            width: "short",
            context: "formatting"
          });
        case "iiii":
        default:
          return localize2.day(dayOfWeek, {
            width: "wide",
            context: "formatting"
          });
      }
    },
    // AM or PM
    a: function a3(date, token, localize2) {
      var hours = date.getUTCHours();
      var dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";
      switch (token) {
        case "a":
        case "aa":
          return localize2.dayPeriod(dayPeriodEnumValue, {
            width: "abbreviated",
            context: "formatting"
          });
        case "aaa":
          return localize2.dayPeriod(dayPeriodEnumValue, {
            width: "abbreviated",
            context: "formatting"
          }).toLowerCase();
        case "aaaaa":
          return localize2.dayPeriod(dayPeriodEnumValue, {
            width: "narrow",
            context: "formatting"
          });
        case "aaaa":
        default:
          return localize2.dayPeriod(dayPeriodEnumValue, {
            width: "wide",
            context: "formatting"
          });
      }
    },
    // AM, PM, midnight, noon
    b: function b2(date, token, localize2) {
      var hours = date.getUTCHours();
      var dayPeriodEnumValue;
      if (hours === 12) {
        dayPeriodEnumValue = dayPeriodEnum2.noon;
      } else if (hours === 0) {
        dayPeriodEnumValue = dayPeriodEnum2.midnight;
      } else {
        dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";
      }
      switch (token) {
        case "b":
        case "bb":
          return localize2.dayPeriod(dayPeriodEnumValue, {
            width: "abbreviated",
            context: "formatting"
          });
        case "bbb":
          return localize2.dayPeriod(dayPeriodEnumValue, {
            width: "abbreviated",
            context: "formatting"
          }).toLowerCase();
        case "bbbbb":
          return localize2.dayPeriod(dayPeriodEnumValue, {
            width: "narrow",
            context: "formatting"
          });
        case "bbbb":
        default:
          return localize2.dayPeriod(dayPeriodEnumValue, {
            width: "wide",
            context: "formatting"
          });
      }
    },
    // in the morning, in the afternoon, in the evening, at night
    B: function B2(date, token, localize2) {
      var hours = date.getUTCHours();
      var dayPeriodEnumValue;
      if (hours >= 17) {
        dayPeriodEnumValue = dayPeriodEnum2.evening;
      } else if (hours >= 12) {
        dayPeriodEnumValue = dayPeriodEnum2.afternoon;
      } else if (hours >= 4) {
        dayPeriodEnumValue = dayPeriodEnum2.morning;
      } else {
        dayPeriodEnumValue = dayPeriodEnum2.night;
      }
      switch (token) {
        case "B":
        case "BB":
        case "BBB":
          return localize2.dayPeriod(dayPeriodEnumValue, {
            width: "abbreviated",
            context: "formatting"
          });
        case "BBBBB":
          return localize2.dayPeriod(dayPeriodEnumValue, {
            width: "narrow",
            context: "formatting"
          });
        case "BBBB":
        default:
          return localize2.dayPeriod(dayPeriodEnumValue, {
            width: "wide",
            context: "formatting"
          });
      }
    },
    // Hour [1-12]
    h: function h4(date, token, localize2) {
      if (token === "ho") {
        var hours = date.getUTCHours() % 12;
        if (hours === 0)
          hours = 12;
        return localize2.ordinalNumber(hours, {
          unit: "hour"
        });
      }
      return _index7.default.h(date, token);
    },
    // Hour [0-23]
    H: function H3(date, token, localize2) {
      if (token === "Ho") {
        return localize2.ordinalNumber(date.getUTCHours(), {
          unit: "hour"
        });
      }
      return _index7.default.H(date, token);
    },
    // Hour [0-11]
    K: function K2(date, token, localize2) {
      var hours = date.getUTCHours() % 12;
      if (token === "Ko") {
        return localize2.ordinalNumber(hours, {
          unit: "hour"
        });
      }
      return (0, _index6.default)(hours, token.length);
    },
    // Hour [1-24]
    k: function k2(date, token, localize2) {
      var hours = date.getUTCHours();
      if (hours === 0)
        hours = 24;
      if (token === "ko") {
        return localize2.ordinalNumber(hours, {
          unit: "hour"
        });
      }
      return (0, _index6.default)(hours, token.length);
    },
    // Minute
    m: function m3(date, token, localize2) {
      if (token === "mo") {
        return localize2.ordinalNumber(date.getUTCMinutes(), {
          unit: "minute"
        });
      }
      return _index7.default.m(date, token);
    },
    // Second
    s: function s3(date, token, localize2) {
      if (token === "so") {
        return localize2.ordinalNumber(date.getUTCSeconds(), {
          unit: "second"
        });
      }
      return _index7.default.s(date, token);
    },
    // Fraction of second
    S: function S3(date, token) {
      return _index7.default.S(date, token);
    },
    // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
    X: function X2(date, token, _localize, options) {
      var originalDate = options._originalDate || date;
      var timezoneOffset = originalDate.getTimezoneOffset();
      if (timezoneOffset === 0) {
        return "Z";
      }
      switch (token) {
        case "X":
          return formatTimezoneWithOptionalMinutes2(timezoneOffset);
        case "XXXX":
        case "XX":
          return formatTimezone2(timezoneOffset);
        case "XXXXX":
        case "XXX":
        default:
          return formatTimezone2(timezoneOffset, ":");
      }
    },
    // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
    x: function x2(date, token, _localize, options) {
      var originalDate = options._originalDate || date;
      var timezoneOffset = originalDate.getTimezoneOffset();
      switch (token) {
        case "x":
          return formatTimezoneWithOptionalMinutes2(timezoneOffset);
        case "xxxx":
        case "xx":
          return formatTimezone2(timezoneOffset);
        case "xxxxx":
        case "xxx":
        default:
          return formatTimezone2(timezoneOffset, ":");
      }
    },
    // Timezone (GMT)
    O: function O2(date, token, _localize, options) {
      var originalDate = options._originalDate || date;
      var timezoneOffset = originalDate.getTimezoneOffset();
      switch (token) {
        case "O":
        case "OO":
        case "OOO":
          return "GMT" + formatTimezoneShort2(timezoneOffset, ":");
        case "OOOO":
        default:
          return "GMT" + formatTimezone2(timezoneOffset, ":");
      }
    },
    // Timezone (specific non-location)
    z: function z2(date, token, _localize, options) {
      var originalDate = options._originalDate || date;
      var timezoneOffset = originalDate.getTimezoneOffset();
      switch (token) {
        case "z":
        case "zz":
        case "zzz":
          return "GMT" + formatTimezoneShort2(timezoneOffset, ":");
        case "zzzz":
        default:
          return "GMT" + formatTimezone2(timezoneOffset, ":");
      }
    },
    // Seconds timestamp
    t: function t2(date, token, _localize, options) {
      var originalDate = options._originalDate || date;
      var timestamp = Math.floor(originalDate.getTime() / 1e3);
      return (0, _index6.default)(timestamp, token.length);
    },
    // Milliseconds timestamp
    T: function T2(date, token, _localize, options) {
      var originalDate = options._originalDate || date;
      var timestamp = originalDate.getTime();
      return (0, _index6.default)(timestamp, token.length);
    }
  };
  function formatTimezoneShort2(offset, dirtyDelimiter) {
    var sign = offset > 0 ? "-" : "+";
    var absOffset = Math.abs(offset);
    var hours = Math.floor(absOffset / 60);
    var minutes = absOffset % 60;
    if (minutes === 0) {
      return sign + String(hours);
    }
    var delimiter = dirtyDelimiter;
    return sign + String(hours) + delimiter + (0, _index6.default)(minutes, 2);
  }
  function formatTimezoneWithOptionalMinutes2(offset, dirtyDelimiter) {
    if (offset % 60 === 0) {
      var sign = offset > 0 ? "-" : "+";
      return sign + (0, _index6.default)(Math.abs(offset) / 60, 2);
    }
    return formatTimezone2(offset, dirtyDelimiter);
  }
  function formatTimezone2(offset, dirtyDelimiter) {
    var delimiter = dirtyDelimiter || "";
    var sign = offset > 0 ? "-" : "+";
    var absOffset = Math.abs(offset);
    var hours = (0, _index6.default)(Math.floor(absOffset / 60), 2);
    var minutes = (0, _index6.default)(absOffset % 60, 2);
    return sign + hours + delimiter + minutes;
  }
  var _default = formatters2;
  exports.default = _default;
  module.exports = exports.default;
})(formatters$1, formatters$1.exports);
var formattersExports = formatters$1.exports;
var longFormatters = { exports: {} };
(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;
  var dateLongFormatter3 = function dateLongFormatter4(pattern, formatLong2) {
    switch (pattern) {
      case "P":
        return formatLong2.date({
          width: "short"
        });
      case "PP":
        return formatLong2.date({
          width: "medium"
        });
      case "PPP":
        return formatLong2.date({
          width: "long"
        });
      case "PPPP":
      default:
        return formatLong2.date({
          width: "full"
        });
    }
  };
  var timeLongFormatter3 = function timeLongFormatter4(pattern, formatLong2) {
    switch (pattern) {
      case "p":
        return formatLong2.time({
          width: "short"
        });
      case "pp":
        return formatLong2.time({
          width: "medium"
        });
      case "ppp":
        return formatLong2.time({
          width: "long"
        });
      case "pppp":
      default:
        return formatLong2.time({
          width: "full"
        });
    }
  };
  var dateTimeLongFormatter3 = function dateTimeLongFormatter4(pattern, formatLong2) {
    var matchResult = pattern.match(/(P+)(p+)?/) || [];
    var datePattern = matchResult[1];
    var timePattern = matchResult[2];
    if (!timePattern) {
      return dateLongFormatter3(pattern, formatLong2);
    }
    var dateTimeFormat;
    switch (datePattern) {
      case "P":
        dateTimeFormat = formatLong2.dateTime({
          width: "short"
        });
        break;
      case "PP":
        dateTimeFormat = formatLong2.dateTime({
          width: "medium"
        });
        break;
      case "PPP":
        dateTimeFormat = formatLong2.dateTime({
          width: "long"
        });
        break;
      case "PPPP":
      default:
        dateTimeFormat = formatLong2.dateTime({
          width: "full"
        });
        break;
    }
    return dateTimeFormat.replace("{{date}}", dateLongFormatter3(datePattern, formatLong2)).replace("{{time}}", timeLongFormatter3(timePattern, formatLong2));
  };
  var longFormatters2 = {
    p: timeLongFormatter3,
    P: dateTimeLongFormatter3
  };
  var _default = longFormatters2;
  exports.default = _default;
  module.exports = exports.default;
})(longFormatters, longFormatters.exports);
var longFormattersExports = longFormatters.exports;
var getTimezoneOffsetInMilliseconds$1 = { exports: {} };
(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = getTimezoneOffsetInMilliseconds2;
  function getTimezoneOffsetInMilliseconds2(date) {
    var utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
    utcDate.setUTCFullYear(date.getFullYear());
    return date.getTime() - utcDate.getTime();
  }
  module.exports = exports.default;
})(getTimezoneOffsetInMilliseconds$1, getTimezoneOffsetInMilliseconds$1.exports);
var getTimezoneOffsetInMillisecondsExports = getTimezoneOffsetInMilliseconds$1.exports;
const getTimezoneOffsetInMilliseconds = /* @__PURE__ */ getDefaultExportFromCjs(getTimezoneOffsetInMillisecondsExports);
var protectedTokens = {};
Object.defineProperty(protectedTokens, "__esModule", {
  value: true
});
protectedTokens.isProtectedDayOfYearToken = isProtectedDayOfYearToken;
protectedTokens.isProtectedWeekYearToken = isProtectedWeekYearToken;
protectedTokens.throwProtectedError = throwProtectedError;
var protectedDayOfYearTokens = ["D", "DD"];
var protectedWeekYearTokens = ["YY", "YYYY"];
function isProtectedDayOfYearToken(token) {
  return protectedDayOfYearTokens.indexOf(token) !== -1;
}
function isProtectedWeekYearToken(token) {
  return protectedWeekYearTokens.indexOf(token) !== -1;
}
function throwProtectedError(token, format2, input) {
  if (token === "YYYY") {
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(format2, "`) for formatting years to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  } else if (token === "YY") {
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(format2, "`) for formatting years to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  } else if (token === "D") {
    throw new RangeError("Use `d` instead of `D` (in `".concat(format2, "`) for formatting days of the month to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  } else if (token === "DD") {
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(format2, "`) for formatting days of the month to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  }
}
var defaultLocale = { exports: {} };
var enUS = { exports: {} };
var formatDistance2 = { exports: {} };
(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;
  var formatDistanceLocale2 = {
    lessThanXSeconds: {
      one: "less than a second",
      other: "less than {{count}} seconds"
    },
    xSeconds: {
      one: "1 second",
      other: "{{count}} seconds"
    },
    halfAMinute: "half a minute",
    lessThanXMinutes: {
      one: "less than a minute",
      other: "less than {{count}} minutes"
    },
    xMinutes: {
      one: "1 minute",
      other: "{{count}} minutes"
    },
    aboutXHours: {
      one: "about 1 hour",
      other: "about {{count}} hours"
    },
    xHours: {
      one: "1 hour",
      other: "{{count}} hours"
    },
    xDays: {
      one: "1 day",
      other: "{{count}} days"
    },
    aboutXWeeks: {
      one: "about 1 week",
      other: "about {{count}} weeks"
    },
    xWeeks: {
      one: "1 week",
      other: "{{count}} weeks"
    },
    aboutXMonths: {
      one: "about 1 month",
      other: "about {{count}} months"
    },
    xMonths: {
      one: "1 month",
      other: "{{count}} months"
    },
    aboutXYears: {
      one: "about 1 year",
      other: "about {{count}} years"
    },
    xYears: {
      one: "1 year",
      other: "{{count}} years"
    },
    overXYears: {
      one: "over 1 year",
      other: "over {{count}} years"
    },
    almostXYears: {
      one: "almost 1 year",
      other: "almost {{count}} years"
    }
  };
  var formatDistance3 = function formatDistance4(token, count, options) {
    var result;
    var tokenValue = formatDistanceLocale2[token];
    if (typeof tokenValue === "string") {
      result = tokenValue;
    } else if (count === 1) {
      result = tokenValue.one;
    } else {
      result = tokenValue.other.replace("{{count}}", count.toString());
    }
    if (options !== null && options !== void 0 && options.addSuffix) {
      if (options.comparison && options.comparison > 0) {
        return "in " + result;
      } else {
        return result + " ago";
      }
    }
    return result;
  };
  var _default = formatDistance3;
  exports.default = _default;
  module.exports = exports.default;
})(formatDistance2, formatDistance2.exports);
var formatDistanceExports = formatDistance2.exports;
var formatLong = { exports: {} };
var buildFormatLongFn = { exports: {} };
(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = buildFormatLongFn2;
  function buildFormatLongFn2(args) {
    return function() {
      var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      var width = options.width ? String(options.width) : args.defaultWidth;
      var format2 = args.formats[width] || args.formats[args.defaultWidth];
      return format2;
    };
  }
  module.exports = exports.default;
})(buildFormatLongFn, buildFormatLongFn.exports);
var buildFormatLongFnExports = buildFormatLongFn.exports;
(function(module, exports) {
  var _interopRequireDefault = require$$0.default;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;
  var _index = _interopRequireDefault(buildFormatLongFnExports);
  var dateFormats2 = {
    full: "EEEE, MMMM do, y",
    long: "MMMM do, y",
    medium: "MMM d, y",
    short: "MM/dd/yyyy"
  };
  var timeFormats2 = {
    full: "h:mm:ss a zzzz",
    long: "h:mm:ss a z",
    medium: "h:mm:ss a",
    short: "h:mm a"
  };
  var dateTimeFormats2 = {
    full: "{{date}} 'at' {{time}}",
    long: "{{date}} 'at' {{time}}",
    medium: "{{date}}, {{time}}",
    short: "{{date}}, {{time}}"
  };
  var formatLong2 = {
    date: (0, _index.default)({
      formats: dateFormats2,
      defaultWidth: "full"
    }),
    time: (0, _index.default)({
      formats: timeFormats2,
      defaultWidth: "full"
    }),
    dateTime: (0, _index.default)({
      formats: dateTimeFormats2,
      defaultWidth: "full"
    })
  };
  var _default = formatLong2;
  exports.default = _default;
  module.exports = exports.default;
})(formatLong, formatLong.exports);
var formatLongExports = formatLong.exports;
var formatRelative2 = { exports: {} };
(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;
  var formatRelativeLocale2 = {
    lastWeek: "'last' eeee 'at' p",
    yesterday: "'yesterday at' p",
    today: "'today at' p",
    tomorrow: "'tomorrow at' p",
    nextWeek: "eeee 'at' p",
    other: "P"
  };
  var formatRelative3 = function formatRelative4(token, _date, _baseDate, _options) {
    return formatRelativeLocale2[token];
  };
  var _default = formatRelative3;
  exports.default = _default;
  module.exports = exports.default;
})(formatRelative2, formatRelative2.exports);
var formatRelativeExports = formatRelative2.exports;
var localize = { exports: {} };
var buildLocalizeFn = { exports: {} };
(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = buildLocalizeFn2;
  function buildLocalizeFn2(args) {
    return function(dirtyIndex, options) {
      var context = options !== null && options !== void 0 && options.context ? String(options.context) : "standalone";
      var valuesArray;
      if (context === "formatting" && args.formattingValues) {
        var defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
        var width = options !== null && options !== void 0 && options.width ? String(options.width) : defaultWidth;
        valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
      } else {
        var _defaultWidth = args.defaultWidth;
        var _width = options !== null && options !== void 0 && options.width ? String(options.width) : args.defaultWidth;
        valuesArray = args.values[_width] || args.values[_defaultWidth];
      }
      var index = args.argumentCallback ? args.argumentCallback(dirtyIndex) : dirtyIndex;
      return valuesArray[index];
    };
  }
  module.exports = exports.default;
})(buildLocalizeFn, buildLocalizeFn.exports);
var buildLocalizeFnExports = buildLocalizeFn.exports;
(function(module, exports) {
  var _interopRequireDefault = require$$0.default;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;
  var _index = _interopRequireDefault(buildLocalizeFnExports);
  var eraValues2 = {
    narrow: ["B", "A"],
    abbreviated: ["BC", "AD"],
    wide: ["Before Christ", "Anno Domini"]
  };
  var quarterValues2 = {
    narrow: ["1", "2", "3", "4"],
    abbreviated: ["Q1", "Q2", "Q3", "Q4"],
    wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
  };
  var monthValues2 = {
    narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
    abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  };
  var dayValues2 = {
    narrow: ["S", "M", "T", "W", "T", "F", "S"],
    short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  };
  var dayPeriodValues2 = {
    narrow: {
      am: "a",
      pm: "p",
      midnight: "mi",
      noon: "n",
      morning: "morning",
      afternoon: "afternoon",
      evening: "evening",
      night: "night"
    },
    abbreviated: {
      am: "AM",
      pm: "PM",
      midnight: "midnight",
      noon: "noon",
      morning: "morning",
      afternoon: "afternoon",
      evening: "evening",
      night: "night"
    },
    wide: {
      am: "a.m.",
      pm: "p.m.",
      midnight: "midnight",
      noon: "noon",
      morning: "morning",
      afternoon: "afternoon",
      evening: "evening",
      night: "night"
    }
  };
  var formattingDayPeriodValues2 = {
    narrow: {
      am: "a",
      pm: "p",
      midnight: "mi",
      noon: "n",
      morning: "in the morning",
      afternoon: "in the afternoon",
      evening: "in the evening",
      night: "at night"
    },
    abbreviated: {
      am: "AM",
      pm: "PM",
      midnight: "midnight",
      noon: "noon",
      morning: "in the morning",
      afternoon: "in the afternoon",
      evening: "in the evening",
      night: "at night"
    },
    wide: {
      am: "a.m.",
      pm: "p.m.",
      midnight: "midnight",
      noon: "noon",
      morning: "in the morning",
      afternoon: "in the afternoon",
      evening: "in the evening",
      night: "at night"
    }
  };
  var ordinalNumber3 = function ordinalNumber4(dirtyNumber, _options) {
    var number = Number(dirtyNumber);
    var rem100 = number % 100;
    if (rem100 > 20 || rem100 < 10) {
      switch (rem100 % 10) {
        case 1:
          return number + "st";
        case 2:
          return number + "nd";
        case 3:
          return number + "rd";
      }
    }
    return number + "th";
  };
  var localize2 = {
    ordinalNumber: ordinalNumber3,
    era: (0, _index.default)({
      values: eraValues2,
      defaultWidth: "wide"
    }),
    quarter: (0, _index.default)({
      values: quarterValues2,
      defaultWidth: "wide",
      argumentCallback: function argumentCallback2(quarter) {
        return quarter - 1;
      }
    }),
    month: (0, _index.default)({
      values: monthValues2,
      defaultWidth: "wide"
    }),
    day: (0, _index.default)({
      values: dayValues2,
      defaultWidth: "wide"
    }),
    dayPeriod: (0, _index.default)({
      values: dayPeriodValues2,
      defaultWidth: "wide",
      formattingValues: formattingDayPeriodValues2,
      defaultFormattingWidth: "wide"
    })
  };
  var _default = localize2;
  exports.default = _default;
  module.exports = exports.default;
})(localize, localize.exports);
var localizeExports = localize.exports;
var match = { exports: {} };
var buildMatchFn = { exports: {} };
(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = buildMatchFn2;
  function buildMatchFn2(args) {
    return function(string) {
      var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      var width = options.width;
      var matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
      var matchResult = string.match(matchPattern);
      if (!matchResult) {
        return null;
      }
      var matchedString = matchResult[0];
      var parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
      var key = Array.isArray(parsePatterns) ? findIndex2(parsePatterns, function(pattern) {
        return pattern.test(matchedString);
      }) : findKey2(parsePatterns, function(pattern) {
        return pattern.test(matchedString);
      });
      var value;
      value = args.valueCallback ? args.valueCallback(key) : key;
      value = options.valueCallback ? options.valueCallback(value) : value;
      var rest = string.slice(matchedString.length);
      return {
        value,
        rest
      };
    };
  }
  function findKey2(object, predicate) {
    for (var key in object) {
      if (object.hasOwnProperty(key) && predicate(object[key])) {
        return key;
      }
    }
    return void 0;
  }
  function findIndex2(array, predicate) {
    for (var key = 0; key < array.length; key++) {
      if (predicate(array[key])) {
        return key;
      }
    }
    return void 0;
  }
  module.exports = exports.default;
})(buildMatchFn, buildMatchFn.exports);
var buildMatchFnExports = buildMatchFn.exports;
var buildMatchPatternFn = { exports: {} };
(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = buildMatchPatternFn2;
  function buildMatchPatternFn2(args) {
    return function(string) {
      var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      var matchResult = string.match(args.matchPattern);
      if (!matchResult)
        return null;
      var matchedString = matchResult[0];
      var parseResult = string.match(args.parsePattern);
      if (!parseResult)
        return null;
      var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
      value = options.valueCallback ? options.valueCallback(value) : value;
      var rest = string.slice(matchedString.length);
      return {
        value,
        rest
      };
    };
  }
  module.exports = exports.default;
})(buildMatchPatternFn, buildMatchPatternFn.exports);
var buildMatchPatternFnExports = buildMatchPatternFn.exports;
(function(module, exports) {
  var _interopRequireDefault = require$$0.default;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;
  var _index = _interopRequireDefault(buildMatchFnExports);
  var _index2 = _interopRequireDefault(buildMatchPatternFnExports);
  var matchOrdinalNumberPattern2 = /^(\d+)(th|st|nd|rd)?/i;
  var parseOrdinalNumberPattern2 = /\d+/i;
  var matchEraPatterns2 = {
    narrow: /^(b|a)/i,
    abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
    wide: /^(before christ|before common era|anno domini|common era)/i
  };
  var parseEraPatterns2 = {
    any: [/^b/i, /^(a|c)/i]
  };
  var matchQuarterPatterns2 = {
    narrow: /^[1234]/i,
    abbreviated: /^q[1234]/i,
    wide: /^[1234](th|st|nd|rd)? quarter/i
  };
  var parseQuarterPatterns2 = {
    any: [/1/i, /2/i, /3/i, /4/i]
  };
  var matchMonthPatterns2 = {
    narrow: /^[jfmasond]/i,
    abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
    wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
  };
  var parseMonthPatterns2 = {
    narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
    any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
  };
  var matchDayPatterns2 = {
    narrow: /^[smtwf]/i,
    short: /^(su|mo|tu|we|th|fr|sa)/i,
    abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
    wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
  };
  var parseDayPatterns2 = {
    narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
    any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
  };
  var matchDayPeriodPatterns2 = {
    narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
    any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
  };
  var parseDayPeriodPatterns2 = {
    any: {
      am: /^a/i,
      pm: /^p/i,
      midnight: /^mi/i,
      noon: /^no/i,
      morning: /morning/i,
      afternoon: /afternoon/i,
      evening: /evening/i,
      night: /night/i
    }
  };
  var match2 = {
    ordinalNumber: (0, _index2.default)({
      matchPattern: matchOrdinalNumberPattern2,
      parsePattern: parseOrdinalNumberPattern2,
      valueCallback: function valueCallback3(value) {
        return parseInt(value, 10);
      }
    }),
    era: (0, _index.default)({
      matchPatterns: matchEraPatterns2,
      defaultMatchWidth: "wide",
      parsePatterns: parseEraPatterns2,
      defaultParseWidth: "any"
    }),
    quarter: (0, _index.default)({
      matchPatterns: matchQuarterPatterns2,
      defaultMatchWidth: "wide",
      parsePatterns: parseQuarterPatterns2,
      defaultParseWidth: "any",
      valueCallback: function valueCallback3(index) {
        return index + 1;
      }
    }),
    month: (0, _index.default)({
      matchPatterns: matchMonthPatterns2,
      defaultMatchWidth: "wide",
      parsePatterns: parseMonthPatterns2,
      defaultParseWidth: "any"
    }),
    day: (0, _index.default)({
      matchPatterns: matchDayPatterns2,
      defaultMatchWidth: "wide",
      parsePatterns: parseDayPatterns2,
      defaultParseWidth: "any"
    }),
    dayPeriod: (0, _index.default)({
      matchPatterns: matchDayPeriodPatterns2,
      defaultMatchWidth: "any",
      parsePatterns: parseDayPeriodPatterns2,
      defaultParseWidth: "any"
    })
  };
  var _default = match2;
  exports.default = _default;
  module.exports = exports.default;
})(match, match.exports);
var matchExports = match.exports;
(function(module, exports) {
  var _interopRequireDefault = require$$0.default;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;
  var _index = _interopRequireDefault(formatDistanceExports);
  var _index2 = _interopRequireDefault(formatLongExports);
  var _index3 = _interopRequireDefault(formatRelativeExports);
  var _index4 = _interopRequireDefault(localizeExports);
  var _index5 = _interopRequireDefault(matchExports);
  var locale2 = {
    code: "en-US",
    formatDistance: _index.default,
    formatLong: _index2.default,
    formatRelative: _index3.default,
    localize: _index4.default,
    match: _index5.default,
    options: {
      weekStartsOn: 0,
      firstWeekContainsDate: 1
    }
  };
  var _default = locale2;
  exports.default = _default;
  module.exports = exports.default;
})(enUS, enUS.exports);
var enUSExports = enUS.exports;
(function(module, exports) {
  var _interopRequireDefault = require$$0.default;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;
  var _index = _interopRequireDefault(enUSExports);
  var _default = _index.default;
  exports.default = _default;
  module.exports = exports.default;
})(defaultLocale, defaultLocale.exports);
var defaultLocaleExports = defaultLocale.exports;
(function(module, exports) {
  var _interopRequireDefault = require$$0.default;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = format2;
  var _index = _interopRequireDefault(isValidExports);
  var _index2 = _interopRequireDefault(subMillisecondsExports);
  var _index3 = _interopRequireDefault(toDateExports);
  var _index4 = _interopRequireDefault(formattersExports);
  var _index5 = _interopRequireDefault(longFormattersExports);
  var _index6 = _interopRequireDefault(getTimezoneOffsetInMillisecondsExports);
  var _index7 = protectedTokens;
  var _index8 = _interopRequireDefault(toIntegerExports);
  var _index9 = _interopRequireDefault(requiredArgsExports);
  var _index10 = defaultOptions$1;
  var _index11 = _interopRequireDefault(defaultLocaleExports);
  var formattingTokensRegExp2 = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;
  var longFormattingTokensRegExp2 = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
  var escapedStringRegExp2 = /^'([^]*?)'?$/;
  var doubleQuoteRegExp2 = /''/g;
  var unescapedLatinCharacterRegExp2 = /[a-zA-Z]/;
  function format2(dirtyDate, dirtyFormatStr, options) {
    var _ref, _options$locale, _ref2, _ref3, _ref4, _options$firstWeekCon, _options$locale2, _options$locale2$opti, _defaultOptions$local, _defaultOptions$local2, _ref5, _ref6, _ref7, _options$weekStartsOn, _options$locale3, _options$locale3$opti, _defaultOptions$local3, _defaultOptions$local4;
    (0, _index9.default)(2, arguments);
    var formatStr = String(dirtyFormatStr);
    var defaultOptions2 = (0, _index10.getDefaultOptions)();
    var locale2 = (_ref = (_options$locale = options === null || options === void 0 ? void 0 : options.locale) !== null && _options$locale !== void 0 ? _options$locale : defaultOptions2.locale) !== null && _ref !== void 0 ? _ref : _index11.default;
    var firstWeekContainsDate = (0, _index8.default)((_ref2 = (_ref3 = (_ref4 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale2 = options.locale) === null || _options$locale2 === void 0 ? void 0 : (_options$locale2$opti = _options$locale2.options) === null || _options$locale2$opti === void 0 ? void 0 : _options$locale2$opti.firstWeekContainsDate) !== null && _ref4 !== void 0 ? _ref4 : defaultOptions2.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : (_defaultOptions$local = defaultOptions2.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : 1);
    if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
      throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
    }
    var weekStartsOn = (0, _index8.default)((_ref5 = (_ref6 = (_ref7 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale3 = options.locale) === null || _options$locale3 === void 0 ? void 0 : (_options$locale3$opti = _options$locale3.options) === null || _options$locale3$opti === void 0 ? void 0 : _options$locale3$opti.weekStartsOn) !== null && _ref7 !== void 0 ? _ref7 : defaultOptions2.weekStartsOn) !== null && _ref6 !== void 0 ? _ref6 : (_defaultOptions$local3 = defaultOptions2.locale) === null || _defaultOptions$local3 === void 0 ? void 0 : (_defaultOptions$local4 = _defaultOptions$local3.options) === null || _defaultOptions$local4 === void 0 ? void 0 : _defaultOptions$local4.weekStartsOn) !== null && _ref5 !== void 0 ? _ref5 : 0);
    if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
      throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
    }
    if (!locale2.localize) {
      throw new RangeError("locale must contain localize property");
    }
    if (!locale2.formatLong) {
      throw new RangeError("locale must contain formatLong property");
    }
    var originalDate = (0, _index3.default)(dirtyDate);
    if (!(0, _index.default)(originalDate)) {
      throw new RangeError("Invalid time value");
    }
    var timezoneOffset = (0, _index6.default)(originalDate);
    var utcDate = (0, _index2.default)(originalDate, timezoneOffset);
    var formatterOptions = {
      firstWeekContainsDate,
      weekStartsOn,
      locale: locale2,
      _originalDate: originalDate
    };
    var result = formatStr.match(longFormattingTokensRegExp2).map(function(substring) {
      var firstCharacter = substring[0];
      if (firstCharacter === "p" || firstCharacter === "P") {
        var longFormatter = _index5.default[firstCharacter];
        return longFormatter(substring, locale2.formatLong);
      }
      return substring;
    }).join("").match(formattingTokensRegExp2).map(function(substring) {
      if (substring === "''") {
        return "'";
      }
      var firstCharacter = substring[0];
      if (firstCharacter === "'") {
        return cleanEscapedString2(substring);
      }
      var formatter = _index4.default[firstCharacter];
      if (formatter) {
        if (!(options !== null && options !== void 0 && options.useAdditionalWeekYearTokens) && (0, _index7.isProtectedWeekYearToken)(substring)) {
          (0, _index7.throwProtectedError)(substring, dirtyFormatStr, String(dirtyDate));
        }
        if (!(options !== null && options !== void 0 && options.useAdditionalDayOfYearTokens) && (0, _index7.isProtectedDayOfYearToken)(substring)) {
          (0, _index7.throwProtectedError)(substring, dirtyFormatStr, String(dirtyDate));
        }
        return formatter(utcDate, substring, locale2.localize, formatterOptions);
      }
      if (firstCharacter.match(unescapedLatinCharacterRegExp2)) {
        throw new RangeError("Format string contains an unescaped latin alphabet character `" + firstCharacter + "`");
      }
      return substring;
    }).join("");
    return result;
  }
  function cleanEscapedString2(input) {
    var matched = input.match(escapedStringRegExp2);
    if (!matched) {
      return input;
    }
    return matched[1].replace(doubleQuoteRegExp2, "'");
  }
  module.exports = exports.default;
})(format$2, format$2.exports);
var formatExports = format$2.exports;
const dateFnsFormat = /* @__PURE__ */ getDefaultExportFromCjs(formatExports);
function tzIntlTimeZoneName(length, date, options) {
  var dtf = getDTF(length, options.timeZone, options.locale);
  return dtf.formatToParts ? partsTimeZone(dtf, date) : hackyTimeZone(dtf, date);
}
function partsTimeZone(dtf, date) {
  var formatted = dtf.formatToParts(date);
  for (var i2 = formatted.length - 1; i2 >= 0; --i2) {
    if (formatted[i2].type === "timeZoneName") {
      return formatted[i2].value;
    }
  }
}
function hackyTimeZone(dtf, date) {
  var formatted = dtf.format(date).replace(/\u200E/g, "");
  var tzNameMatch = / [\w-+ ]+$/.exec(formatted);
  return tzNameMatch ? tzNameMatch[0].substr(1) : "";
}
function getDTF(length, timeZone, locale2) {
  if (locale2 && !locale2.code) {
    throw new Error(
      "date-fns-tz error: Please set a language code on the locale object imported from date-fns, e.g. `locale.code = 'en-US'`"
    );
  }
  return new Intl.DateTimeFormat(locale2 ? [locale2.code, "en-US"] : void 0, {
    timeZone,
    timeZoneName: length
  });
}
function tzTokenizeDate(date, timeZone) {
  var dtf = getDateTimeFormat(timeZone);
  return dtf.formatToParts ? partsOffset(dtf, date) : hackyOffset(dtf, date);
}
var typeToPos = {
  year: 0,
  month: 1,
  day: 2,
  hour: 3,
  minute: 4,
  second: 5
};
function partsOffset(dtf, date) {
  try {
    var formatted = dtf.formatToParts(date);
    var filled = [];
    for (var i2 = 0; i2 < formatted.length; i2++) {
      var pos = typeToPos[formatted[i2].type];
      if (pos >= 0) {
        filled[pos] = parseInt(formatted[i2].value, 10);
      }
    }
    return filled;
  } catch (error) {
    if (error instanceof RangeError) {
      return [NaN];
    }
    throw error;
  }
}
function hackyOffset(dtf, date) {
  var formatted = dtf.format(date);
  var parsed = /(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(formatted);
  return [parsed[3], parsed[1], parsed[2], parsed[4], parsed[5], parsed[6]];
}
var dtfCache = {};
function getDateTimeFormat(timeZone) {
  if (!dtfCache[timeZone]) {
    var testDateFormatted = new Intl.DateTimeFormat("en-US", {
      hourCycle: "h23",
      timeZone: "America/New_York",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    }).format(/* @__PURE__ */ new Date("2014-06-25T04:00:00.123Z"));
    var hourCycleSupported = testDateFormatted === "06/25/2014, 00:00:00" || testDateFormatted === "‎06‎/‎25‎/‎2014‎ ‎00‎:‎00‎:‎00";
    dtfCache[timeZone] = hourCycleSupported ? new Intl.DateTimeFormat("en-US", {
      hourCycle: "h23",
      timeZone,
      year: "numeric",
      month: "numeric",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    }) : new Intl.DateTimeFormat("en-US", {
      hour12: false,
      timeZone,
      year: "numeric",
      month: "numeric",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    });
  }
  return dtfCache[timeZone];
}
function newDateUTC(fullYear, month, day, hour, minute, second, millisecond) {
  var utcDate = /* @__PURE__ */ new Date(0);
  utcDate.setUTCFullYear(fullYear, month, day);
  utcDate.setUTCHours(hour, minute, second, millisecond);
  return utcDate;
}
var MILLISECONDS_IN_HOUR$1 = 36e5;
var MILLISECONDS_IN_MINUTE$2 = 6e4;
var patterns$1 = {
  timezone: /([Z+-].*)$/,
  timezoneZ: /^(Z)$/,
  timezoneHH: /^([+-]\d{2})$/,
  timezoneHHMM: /^([+-])(\d{2}):?(\d{2})$/
};
function tzParseTimezone(timezoneString, date, isUtcDate) {
  var token;
  var absoluteOffset;
  if (!timezoneString) {
    return 0;
  }
  token = patterns$1.timezoneZ.exec(timezoneString);
  if (token) {
    return 0;
  }
  var hours;
  token = patterns$1.timezoneHH.exec(timezoneString);
  if (token) {
    hours = parseInt(token[1], 10);
    if (!validateTimezone(hours)) {
      return NaN;
    }
    return -(hours * MILLISECONDS_IN_HOUR$1);
  }
  token = patterns$1.timezoneHHMM.exec(timezoneString);
  if (token) {
    hours = parseInt(token[2], 10);
    var minutes = parseInt(token[3], 10);
    if (!validateTimezone(hours, minutes)) {
      return NaN;
    }
    absoluteOffset = Math.abs(hours) * MILLISECONDS_IN_HOUR$1 + minutes * MILLISECONDS_IN_MINUTE$2;
    return token[1] === "+" ? -absoluteOffset : absoluteOffset;
  }
  if (isValidTimezoneIANAString(timezoneString)) {
    date = new Date(date || Date.now());
    var utcDate = isUtcDate ? date : toUtcDate(date);
    var offset = calcOffset(utcDate, timezoneString);
    var fixedOffset = isUtcDate ? offset : fixOffset(date, offset, timezoneString);
    return -fixedOffset;
  }
  return NaN;
}
function toUtcDate(date) {
  return newDateUTC(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    date.getHours(),
    date.getMinutes(),
    date.getSeconds(),
    date.getMilliseconds()
  );
}
function calcOffset(date, timezoneString) {
  var tokens = tzTokenizeDate(date, timezoneString);
  var asUTC = newDateUTC(
    tokens[0],
    tokens[1] - 1,
    tokens[2],
    tokens[3] % 24,
    tokens[4],
    tokens[5],
    0
  ).getTime();
  var asTS = date.getTime();
  var over = asTS % 1e3;
  asTS -= over >= 0 ? over : 1e3 + over;
  return asUTC - asTS;
}
function fixOffset(date, offset, timezoneString) {
  var localTS = date.getTime();
  var utcGuess = localTS - offset;
  var o2 = calcOffset(new Date(utcGuess), timezoneString);
  if (offset === o2) {
    return offset;
  }
  utcGuess -= o2 - offset;
  var o3 = calcOffset(new Date(utcGuess), timezoneString);
  if (o2 === o3) {
    return o2;
  }
  return Math.max(o2, o3);
}
function validateTimezone(hours, minutes) {
  return -23 <= hours && hours <= 23 && (minutes == null || 0 <= minutes && minutes <= 59);
}
var validIANATimezoneCache = {};
function isValidTimezoneIANAString(timeZoneString) {
  if (validIANATimezoneCache[timeZoneString])
    return true;
  try {
    new Intl.DateTimeFormat(void 0, { timeZone: timeZoneString });
    validIANATimezoneCache[timeZoneString] = true;
    return true;
  } catch (error) {
    return false;
  }
}
var MILLISECONDS_IN_MINUTE$1 = 60 * 1e3;
var formatters = {
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(date, token, localize2, options) {
    var timezoneOffset = getTimeZoneOffset(options.timeZone, date);
    if (timezoneOffset === 0) {
      return "Z";
    }
    switch (token) {
      case "X":
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      case "XXXX":
      case "XX":
        return formatTimezone(timezoneOffset);
      case "XXXXX":
      case "XXX":
      default:
        return formatTimezone(timezoneOffset, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(date, token, localize2, options) {
    var timezoneOffset = getTimeZoneOffset(options.timeZone, date);
    switch (token) {
      case "x":
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      case "xxxx":
      case "xx":
        return formatTimezone(timezoneOffset);
      case "xxxxx":
      case "xxx":
      default:
        return formatTimezone(timezoneOffset, ":");
    }
  },
  // Timezone (GMT)
  O: function(date, token, localize2, options) {
    var timezoneOffset = getTimeZoneOffset(options.timeZone, date);
    switch (token) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + formatTimezoneShort(timezoneOffset, ":");
      case "OOOO":
      default:
        return "GMT" + formatTimezone(timezoneOffset, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(date, token, localize2, options) {
    switch (token) {
      case "z":
      case "zz":
      case "zzz":
        return tzIntlTimeZoneName("short", date, options);
      case "zzzz":
      default:
        return tzIntlTimeZoneName("long", date, options);
    }
  }
};
function getTimeZoneOffset(timeZone, originalDate) {
  var timeZoneOffset = timeZone ? tzParseTimezone(timeZone, originalDate, true) / MILLISECONDS_IN_MINUTE$1 : originalDate.getTimezoneOffset();
  if (Number.isNaN(timeZoneOffset)) {
    throw new RangeError("Invalid time zone specified: " + timeZone);
  }
  return timeZoneOffset;
}
function addLeadingZeros(number, targetLength) {
  var sign = number < 0 ? "-" : "";
  var output = Math.abs(number).toString();
  while (output.length < targetLength) {
    output = "0" + output;
  }
  return sign + output;
}
function formatTimezone(offset, dirtyDelimeter) {
  var delimeter = dirtyDelimeter || "";
  var sign = offset > 0 ? "-" : "+";
  var absOffset = Math.abs(offset);
  var hours = addLeadingZeros(Math.floor(absOffset / 60), 2);
  var minutes = addLeadingZeros(Math.floor(absOffset % 60), 2);
  return sign + hours + delimeter + minutes;
}
function formatTimezoneWithOptionalMinutes(offset, dirtyDelimeter) {
  if (offset % 60 === 0) {
    var sign = offset > 0 ? "-" : "+";
    return sign + addLeadingZeros(Math.abs(offset) / 60, 2);
  }
  return formatTimezone(offset, dirtyDelimeter);
}
function formatTimezoneShort(offset, dirtyDelimiter) {
  var sign = offset > 0 ? "-" : "+";
  var absOffset = Math.abs(offset);
  var hours = Math.floor(absOffset / 60);
  var minutes = absOffset % 60;
  if (minutes === 0) {
    return sign + String(hours);
  }
  var delimiter = dirtyDelimiter;
  return sign + String(hours) + delimiter + addLeadingZeros(minutes, 2);
}
var tzPattern = /(Z|[+-]\d{2}(?::?\d{2})?| UTC| [a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?)$/;
var MILLISECONDS_IN_HOUR = 36e5;
var MILLISECONDS_IN_MINUTE = 6e4;
var DEFAULT_ADDITIONAL_DIGITS = 2;
var patterns = {
  dateTimePattern: /^([0-9W+-]+)(T| )(.*)/,
  datePattern: /^([0-9W+-]+)(.*)/,
  plainTime: /:/,
  // year tokens
  YY: /^(\d{2})$/,
  YYY: [
    /^([+-]\d{2})$/,
    // 0 additional digits
    /^([+-]\d{3})$/,
    // 1 additional digit
    /^([+-]\d{4})$/
    // 2 additional digits
  ],
  YYYY: /^(\d{4})/,
  YYYYY: [
    /^([+-]\d{4})/,
    // 0 additional digits
    /^([+-]\d{5})/,
    // 1 additional digit
    /^([+-]\d{6})/
    // 2 additional digits
  ],
  // date tokens
  MM: /^-(\d{2})$/,
  DDD: /^-?(\d{3})$/,
  MMDD: /^-?(\d{2})-?(\d{2})$/,
  Www: /^-?W(\d{2})$/,
  WwwD: /^-?W(\d{2})-?(\d{1})$/,
  HH: /^(\d{2}([.,]\d*)?)$/,
  HHMM: /^(\d{2}):?(\d{2}([.,]\d*)?)$/,
  HHMMSS: /^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,
  // time zone tokens (to identify the presence of a tz)
  timeZone: tzPattern
};
function toDate(argument, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError("1 argument required, but only " + arguments.length + " present");
  }
  if (argument === null) {
    return /* @__PURE__ */ new Date(NaN);
  }
  var options = dirtyOptions || {};
  var additionalDigits = options.additionalDigits == null ? DEFAULT_ADDITIONAL_DIGITS : toInteger(options.additionalDigits);
  if (additionalDigits !== 2 && additionalDigits !== 1 && additionalDigits !== 0) {
    throw new RangeError("additionalDigits must be 0, 1 or 2");
  }
  if (argument instanceof Date || typeof argument === "object" && Object.prototype.toString.call(argument) === "[object Date]") {
    return new Date(argument.getTime());
  } else if (typeof argument === "number" || Object.prototype.toString.call(argument) === "[object Number]") {
    return new Date(argument);
  } else if (!(typeof argument === "string" || Object.prototype.toString.call(argument) === "[object String]")) {
    return /* @__PURE__ */ new Date(NaN);
  }
  var dateStrings = splitDateString(argument);
  var parseYearResult = parseYear(dateStrings.date, additionalDigits);
  var year = parseYearResult.year;
  var restDateString = parseYearResult.restDateString;
  var date = parseDate(restDateString, year);
  if (isNaN(date)) {
    return /* @__PURE__ */ new Date(NaN);
  }
  if (date) {
    var timestamp = date.getTime();
    var time2 = 0;
    var offset;
    if (dateStrings.time) {
      time2 = parseTime(dateStrings.time);
      if (isNaN(time2)) {
        return /* @__PURE__ */ new Date(NaN);
      }
    }
    if (dateStrings.timeZone || options.timeZone) {
      offset = tzParseTimezone(dateStrings.timeZone || options.timeZone, new Date(timestamp + time2));
      if (isNaN(offset)) {
        return /* @__PURE__ */ new Date(NaN);
      }
    } else {
      offset = getTimezoneOffsetInMilliseconds(new Date(timestamp + time2));
      offset = getTimezoneOffsetInMilliseconds(new Date(timestamp + time2 + offset));
    }
    return new Date(timestamp + time2 + offset);
  } else {
    return /* @__PURE__ */ new Date(NaN);
  }
}
function splitDateString(dateString) {
  var dateStrings = {};
  var parts = patterns.dateTimePattern.exec(dateString);
  var timeString;
  if (!parts) {
    parts = patterns.datePattern.exec(dateString);
    if (parts) {
      dateStrings.date = parts[1];
      timeString = parts[2];
    } else {
      dateStrings.date = null;
      timeString = dateString;
    }
  } else {
    dateStrings.date = parts[1];
    timeString = parts[3];
  }
  if (timeString) {
    var token = patterns.timeZone.exec(timeString);
    if (token) {
      dateStrings.time = timeString.replace(token[1], "");
      dateStrings.timeZone = token[1].trim();
    } else {
      dateStrings.time = timeString;
    }
  }
  return dateStrings;
}
function parseYear(dateString, additionalDigits) {
  var patternYYY = patterns.YYY[additionalDigits];
  var patternYYYYY = patterns.YYYYY[additionalDigits];
  var token;
  token = patterns.YYYY.exec(dateString) || patternYYYYY.exec(dateString);
  if (token) {
    var yearString = token[1];
    return {
      year: parseInt(yearString, 10),
      restDateString: dateString.slice(yearString.length)
    };
  }
  token = patterns.YY.exec(dateString) || patternYYY.exec(dateString);
  if (token) {
    var centuryString = token[1];
    return {
      year: parseInt(centuryString, 10) * 100,
      restDateString: dateString.slice(centuryString.length)
    };
  }
  return {
    year: null
  };
}
function parseDate(dateString, year) {
  if (year === null) {
    return null;
  }
  var token;
  var date;
  var month;
  var week;
  if (dateString.length === 0) {
    date = /* @__PURE__ */ new Date(0);
    date.setUTCFullYear(year);
    return date;
  }
  token = patterns.MM.exec(dateString);
  if (token) {
    date = /* @__PURE__ */ new Date(0);
    month = parseInt(token[1], 10) - 1;
    if (!validateDate(year, month)) {
      return /* @__PURE__ */ new Date(NaN);
    }
    date.setUTCFullYear(year, month);
    return date;
  }
  token = patterns.DDD.exec(dateString);
  if (token) {
    date = /* @__PURE__ */ new Date(0);
    var dayOfYear = parseInt(token[1], 10);
    if (!validateDayOfYearDate(year, dayOfYear)) {
      return /* @__PURE__ */ new Date(NaN);
    }
    date.setUTCFullYear(year, 0, dayOfYear);
    return date;
  }
  token = patterns.MMDD.exec(dateString);
  if (token) {
    date = /* @__PURE__ */ new Date(0);
    month = parseInt(token[1], 10) - 1;
    var day = parseInt(token[2], 10);
    if (!validateDate(year, month, day)) {
      return /* @__PURE__ */ new Date(NaN);
    }
    date.setUTCFullYear(year, month, day);
    return date;
  }
  token = patterns.Www.exec(dateString);
  if (token) {
    week = parseInt(token[1], 10) - 1;
    if (!validateWeekDate(year, week)) {
      return /* @__PURE__ */ new Date(NaN);
    }
    return dayOfISOWeekYear(year, week);
  }
  token = patterns.WwwD.exec(dateString);
  if (token) {
    week = parseInt(token[1], 10) - 1;
    var dayOfWeek = parseInt(token[2], 10) - 1;
    if (!validateWeekDate(year, week, dayOfWeek)) {
      return /* @__PURE__ */ new Date(NaN);
    }
    return dayOfISOWeekYear(year, week, dayOfWeek);
  }
  return null;
}
function parseTime(timeString) {
  var token;
  var hours;
  var minutes;
  token = patterns.HH.exec(timeString);
  if (token) {
    hours = parseFloat(token[1].replace(",", "."));
    if (!validateTime(hours)) {
      return NaN;
    }
    return hours % 24 * MILLISECONDS_IN_HOUR;
  }
  token = patterns.HHMM.exec(timeString);
  if (token) {
    hours = parseInt(token[1], 10);
    minutes = parseFloat(token[2].replace(",", "."));
    if (!validateTime(hours, minutes)) {
      return NaN;
    }
    return hours % 24 * MILLISECONDS_IN_HOUR + minutes * MILLISECONDS_IN_MINUTE;
  }
  token = patterns.HHMMSS.exec(timeString);
  if (token) {
    hours = parseInt(token[1], 10);
    minutes = parseInt(token[2], 10);
    var seconds = parseFloat(token[3].replace(",", "."));
    if (!validateTime(hours, minutes, seconds)) {
      return NaN;
    }
    return hours % 24 * MILLISECONDS_IN_HOUR + minutes * MILLISECONDS_IN_MINUTE + seconds * 1e3;
  }
  return null;
}
function dayOfISOWeekYear(isoWeekYear, week, day) {
  week = week || 0;
  day = day || 0;
  var date = /* @__PURE__ */ new Date(0);
  date.setUTCFullYear(isoWeekYear, 0, 4);
  var fourthOfJanuaryDay = date.getUTCDay() || 7;
  var diff = week * 7 + day + 1 - fourthOfJanuaryDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
}
var DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var DAYS_IN_MONTH_LEAP_YEAR = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function isLeapYearIndex(year) {
  return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
}
function validateDate(year, month, date) {
  if (month < 0 || month > 11) {
    return false;
  }
  if (date != null) {
    if (date < 1) {
      return false;
    }
    var isLeapYear = isLeapYearIndex(year);
    if (isLeapYear && date > DAYS_IN_MONTH_LEAP_YEAR[month]) {
      return false;
    }
    if (!isLeapYear && date > DAYS_IN_MONTH[month]) {
      return false;
    }
  }
  return true;
}
function validateDayOfYearDate(year, dayOfYear) {
  if (dayOfYear < 1) {
    return false;
  }
  var isLeapYear = isLeapYearIndex(year);
  if (isLeapYear && dayOfYear > 366) {
    return false;
  }
  if (!isLeapYear && dayOfYear > 365) {
    return false;
  }
  return true;
}
function validateWeekDate(year, week, day) {
  if (week < 0 || week > 52) {
    return false;
  }
  if (day != null && (day < 0 || day > 6)) {
    return false;
  }
  return true;
}
function validateTime(hours, minutes, seconds) {
  if (hours != null && (hours < 0 || hours >= 25)) {
    return false;
  }
  if (minutes != null && (minutes < 0 || minutes >= 60)) {
    return false;
  }
  if (seconds != null && (seconds < 0 || seconds >= 60)) {
    return false;
  }
  return true;
}
var tzFormattingTokensRegExp = /([xXOz]+)|''|'(''|[^'])+('|$)/g;
function format$1(dirtyDate, dirtyFormatStr, dirtyOptions) {
  var formatStr = String(dirtyFormatStr);
  var options = dirtyOptions || {};
  var matches = formatStr.match(tzFormattingTokensRegExp);
  if (matches) {
    var date = toDate(options.originalDate || dirtyDate, options);
    formatStr = matches.reduce(function(result, token) {
      if (token[0] === "'") {
        return result;
      }
      var pos = result.indexOf(token);
      var precededByQuotedSection = result[pos - 1] === "'";
      var replaced = result.replace(
        token,
        "'" + formatters[token[0]](date, token, null, options) + "'"
      );
      return precededByQuotedSection ? replaced.substring(0, pos - 1) + replaced.substring(pos + 1) : replaced;
    }, formatStr);
  }
  return dateFnsFormat(dirtyDate, formatStr, options);
}
function utcToZonedTime(dirtyDate, timeZone, options) {
  var date = toDate(dirtyDate, options);
  var offsetMilliseconds = tzParseTimezone(timeZone, date, true);
  var d3 = new Date(date.getTime() - offsetMilliseconds);
  var resultDate = /* @__PURE__ */ new Date(0);
  resultDate.setFullYear(d3.getUTCFullYear(), d3.getUTCMonth(), d3.getUTCDate());
  resultDate.setHours(d3.getUTCHours(), d3.getUTCMinutes(), d3.getUTCSeconds(), d3.getUTCMilliseconds());
  return resultDate;
}
function formatInTimeZone(date, timeZone, formatStr, options) {
  var extendedOptions = cloneObject(options);
  extendedOptions.timeZone = timeZone;
  extendedOptions.originalDate = date;
  return format$1(utcToZonedTime(date, timeZone), formatStr, extendedOptions);
}
const time = {
  amHours: ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11"],
  pmHours: ["12", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11"],
  hours: ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"],
  minutes: ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59"],
  seconds: ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59"],
  period: ["AM", "PM"]
};
function getFixValue(value) {
  return `00${value}`.slice(-2);
}
function getTimeUnits(defaultValue, stepOrList, isHourWithAmPm) {
  if (Array.isArray(stepOrList)) {
    return (isHourWithAmPm === "am" ? stepOrList.filter((v) => v < 12) : isHourWithAmPm === "pm" ? stepOrList.filter((v) => v >= 12).map((v) => v === 12 ? 12 : v - 12) : stepOrList).map((v) => getFixValue(v));
  } else if (typeof stepOrList === "number") {
    if (isHourWithAmPm === "am") {
      return defaultValue.filter((hour) => {
        const hourAsNumber = Number(hour);
        return hourAsNumber < 12 && hourAsNumber % stepOrList === 0;
      });
    } else if (isHourWithAmPm === "pm") {
      return defaultValue.filter((hour) => {
        const hourAsNumber = Number(hour);
        return hourAsNumber >= 12 && hourAsNumber % stepOrList === 0;
      }).map((hour) => {
        const hourAsNumber = Number(hour);
        return getFixValue(hourAsNumber === 12 ? 12 : hourAsNumber - 12);
      });
    }
    return defaultValue.filter((hour) => {
      return Number(hour) % stepOrList === 0;
    });
  } else {
    return isHourWithAmPm === "am" ? defaultValue.filter((hour) => Number(hour) < 12) : isHourWithAmPm === "pm" ? defaultValue.map((hour) => Number(hour)).filter((hour) => Number(hour) >= 12).map((v) => getFixValue(v === 12 ? 12 : v - 12)) : defaultValue;
  }
}
function isTimeInStep(value, type, stepOrList) {
  if (!stepOrList) {
    return true;
  } else if (typeof stepOrList === "number") {
    return value % stepOrList === 0;
  } else {
    return stepOrList.includes(value);
  }
}
function findSimilarTime(value, type, stepOrList) {
  const list = getTimeUnits(time[type], stepOrList).map(Number);
  let lowerBound, upperBound;
  for (let i2 = 0; i2 < list.length; ++i2) {
    const v = list[i2];
    if (v === value)
      return v;
    else if (v > value) {
      upperBound = v;
      break;
    }
    lowerBound = v;
  }
  if (lowerBound === void 0) {
    if (!upperBound) {
      throwError("time-picker", "Please set 'hours' or 'minutes' or 'seconds' props");
    }
    return upperBound;
  }
  if (upperBound === void 0) {
    return lowerBound;
  }
  return upperBound - value > value - lowerBound ? lowerBound : upperBound;
}
function getAmPm(value) {
  return getHours(value) < 12 ? "am" : "pm";
}
const timePickerInjectionKey = createInjectionKey("n-time-picker");
const PanelCol = defineComponent({
  name: "TimePickerPanelCol",
  props: {
    clsPrefix: {
      type: String,
      required: true
    },
    data: {
      type: Array,
      required: true
    },
    activeValue: {
      type: Number,
      default: null
    },
    // It should be required but vue's type seems to have bugs
    onItemClick: Function
  },
  render() {
    const {
      activeValue,
      onItemClick,
      clsPrefix
    } = this;
    return this.data.map((item) => {
      const {
        label,
        disabled,
        value
      } = item;
      const active = activeValue === value;
      return h("div", {
        key: label,
        "data-active": active ? "" : null,
        class: [`${clsPrefix}-time-picker-col__item`, active && `${clsPrefix}-time-picker-col__item--active`, disabled && `${clsPrefix}-time-picker-col__item--disabled`],
        onClick: onItemClick && !disabled ? () => {
          onItemClick(value);
        } : void 0
      }, label);
    });
  }
});
const timePickerPanelProps = {
  actions: {
    type: Array,
    default: () => ["now", "confirm"]
  },
  showHour: {
    type: Boolean,
    default: true
  },
  showMinute: {
    type: Boolean,
    default: true
  },
  showSecond: {
    type: Boolean,
    default: true
  },
  showPeriod: {
    type: Boolean,
    default: true
  },
  isHourInvalid: Boolean,
  isMinuteInvalid: Boolean,
  isSecondInvalid: Boolean,
  isAmPmInvalid: Boolean,
  isValueInvalid: Boolean,
  hourValue: {
    type: Number,
    default: null
  },
  minuteValue: {
    type: Number,
    default: null
  },
  secondValue: {
    type: Number,
    default: null
  },
  amPmValue: {
    type: String,
    default: null
  },
  isHourDisabled: Function,
  isMinuteDisabled: Function,
  isSecondDisabled: Function,
  onHourClick: {
    type: Function,
    required: true
  },
  onMinuteClick: {
    type: Function,
    required: true
  },
  onSecondClick: {
    type: Function,
    required: true
  },
  onAmPmClick: {
    type: Function,
    required: true
  },
  onNowClick: Function,
  clearText: String,
  nowText: String,
  confirmText: String,
  transitionDisabled: Boolean,
  onClearClick: Function,
  onConfirmClick: Function,
  onFocusin: Function,
  onFocusout: Function,
  onFocusDetectorFocus: Function,
  onKeydown: Function,
  hours: [Number, Array],
  minutes: [Number, Array],
  seconds: [Number, Array],
  use12Hours: Boolean
};
const Panel = defineComponent({
  name: "TimePickerPanel",
  props: timePickerPanelProps,
  setup(props) {
    const {
      mergedThemeRef,
      mergedClsPrefixRef
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    } = inject(timePickerInjectionKey);
    const hoursRef = computed(() => {
      const {
        isHourDisabled,
        hours,
        use12Hours,
        amPmValue
      } = props;
      if (!use12Hours) {
        return getTimeUnits(time.hours, hours).map((hour) => {
          return {
            label: hour,
            value: Number(hour),
            disabled: isHourDisabled ? isHourDisabled(Number(hour)) : false
          };
        });
      } else {
        const mergedAmPmValue = amPmValue !== null && amPmValue !== void 0 ? amPmValue : getAmPm(Date.now());
        return getTimeUnits(time.hours, hours, mergedAmPmValue).map((hour) => {
          const hourAs12FormattedNumber = Number(hour);
          const hourAs24FormattedNumber = mergedAmPmValue === "pm" && hourAs12FormattedNumber !== 12 ? hourAs12FormattedNumber + 12 : hourAs12FormattedNumber;
          return {
            label: hour,
            value: hourAs24FormattedNumber,
            disabled: isHourDisabled ? isHourDisabled(hourAs24FormattedNumber) : false
          };
        });
      }
    });
    const minutesRef = computed(() => {
      const {
        isMinuteDisabled,
        minutes
      } = props;
      return getTimeUnits(time.minutes, minutes).map((minute) => {
        return {
          label: minute,
          value: Number(minute),
          disabled: isMinuteDisabled ? isMinuteDisabled(Number(minute), props.hourValue) : false
        };
      });
    });
    const secondsRef = computed(() => {
      const {
        isSecondDisabled,
        seconds
      } = props;
      return getTimeUnits(time.seconds, seconds).map((second) => {
        return {
          label: second,
          value: Number(second),
          disabled: isSecondDisabled ? isSecondDisabled(Number(second), props.minuteValue, props.hourValue) : false
        };
      });
    });
    const amPmRef = computed(() => {
      const {
        isHourDisabled
      } = props;
      let amDisabled = true;
      let pmDisabled = true;
      for (let i2 = 0; i2 < 12; ++i2) {
        if (!(isHourDisabled === null || isHourDisabled === void 0 ? void 0 : isHourDisabled(i2))) {
          amDisabled = false;
          break;
        }
      }
      for (let i2 = 12; i2 < 24; ++i2) {
        if (!(isHourDisabled === null || isHourDisabled === void 0 ? void 0 : isHourDisabled(i2))) {
          pmDisabled = false;
          break;
        }
      }
      return [{
        label: "AM",
        value: "am",
        disabled: amDisabled
      }, {
        label: "PM",
        value: "pm",
        disabled: pmDisabled
      }];
    });
    return {
      mergedTheme: mergedThemeRef,
      mergedClsPrefix: mergedClsPrefixRef,
      hours: hoursRef,
      minutes: minutesRef,
      seconds: secondsRef,
      amPm: amPmRef,
      hourScrollRef: ref(null),
      minuteScrollRef: ref(null),
      secondScrollRef: ref(null),
      amPmScrollRef: ref(null)
    };
  },
  render() {
    var _a, _b, _c, _d;
    const {
      mergedClsPrefix,
      mergedTheme
    } = this;
    return h("div", {
      tabindex: 0,
      class: `${mergedClsPrefix}-time-picker-panel`,
      onFocusin: this.onFocusin,
      onFocusout: this.onFocusout,
      onKeydown: this.onKeydown
    }, h("div", {
      class: `${mergedClsPrefix}-time-picker-cols`
    }, this.showHour ? h("div", {
      class: [`${mergedClsPrefix}-time-picker-col`, this.isHourInvalid && `${mergedClsPrefix}-time-picker-col--invalid`, this.transitionDisabled && `${mergedClsPrefix}-time-picker-col--transition-disabled`]
    }, h(Scrollbar, {
      ref: "hourScrollRef",
      theme: mergedTheme.peers.Scrollbar,
      themeOverrides: mergedTheme.peerOverrides.Scrollbar
    }, {
      default: () => [h(PanelCol, {
        clsPrefix: mergedClsPrefix,
        data: this.hours,
        activeValue: this.hourValue,
        onItemClick: this.onHourClick
      }), h("div", {
        class: `${mergedClsPrefix}-time-picker-col__padding`
      })]
    })) : null, this.showMinute ? h("div", {
      class: [`${mergedClsPrefix}-time-picker-col`, this.transitionDisabled && `${mergedClsPrefix}-time-picker-col--transition-disabled`, this.isMinuteInvalid && `${mergedClsPrefix}-time-picker-col--invalid`]
    }, h(Scrollbar, {
      ref: "minuteScrollRef",
      theme: mergedTheme.peers.Scrollbar,
      themeOverrides: mergedTheme.peerOverrides.Scrollbar
    }, {
      default: () => [h(PanelCol, {
        clsPrefix: mergedClsPrefix,
        data: this.minutes,
        activeValue: this.minuteValue,
        onItemClick: this.onMinuteClick
      }), h("div", {
        class: `${mergedClsPrefix}-time-picker-col__padding`
      })]
    })) : null, this.showSecond ? h("div", {
      class: [`${mergedClsPrefix}-time-picker-col`, this.isSecondInvalid && `${mergedClsPrefix}-time-picker-col--invalid`, this.transitionDisabled && `${mergedClsPrefix}-time-picker-col--transition-disabled`]
    }, h(Scrollbar, {
      ref: "secondScrollRef",
      theme: mergedTheme.peers.Scrollbar,
      themeOverrides: mergedTheme.peerOverrides.Scrollbar
    }, {
      default: () => [h(PanelCol, {
        clsPrefix: mergedClsPrefix,
        data: this.seconds,
        activeValue: this.secondValue,
        onItemClick: this.onSecondClick
      }), h("div", {
        class: `${mergedClsPrefix}-time-picker-col__padding`
      })]
    })) : null, this.use12Hours ? h("div", {
      class: [`${mergedClsPrefix}-time-picker-col`, this.isAmPmInvalid && `${mergedClsPrefix}-time-picker-col--invalid`, this.transitionDisabled && `${mergedClsPrefix}-time-picker-col--transition-disabled`]
    }, h(Scrollbar, {
      ref: "amPmScrollRef",
      theme: mergedTheme.peers.Scrollbar,
      themeOverrides: mergedTheme.peerOverrides.Scrollbar
    }, {
      default: () => [h(PanelCol, {
        clsPrefix: mergedClsPrefix,
        data: this.amPm,
        activeValue: this.amPmValue,
        onItemClick: this.onAmPmClick
      }), h("div", {
        class: `${mergedClsPrefix}-time-picker-col__padding`
      })]
    })) : null), ((_a = this.actions) === null || _a === void 0 ? void 0 : _a.length) ? h("div", {
      class: `${mergedClsPrefix}-time-picker-actions`
    }, ((_b = this.actions) === null || _b === void 0 ? void 0 : _b.includes("clear")) ? h(Button, {
      theme: mergedTheme.peers.Button,
      themeOverrides: mergedTheme.peerOverrides.Button,
      size: "tiny",
      onClick: this.onClearClick
    }, {
      default: () => this.clearText
    }) : null, ((_c = this.actions) === null || _c === void 0 ? void 0 : _c.includes("now")) ? h(Button, {
      size: "tiny",
      theme: mergedTheme.peers.Button,
      themeOverrides: mergedTheme.peerOverrides.Button,
      onClick: this.onNowClick
    }, {
      default: () => this.nowText
    }) : null, ((_d = this.actions) === null || _d === void 0 ? void 0 : _d.includes("confirm")) ? h(Button, {
      size: "tiny",
      type: "primary",
      class: `${mergedClsPrefix}-time-picker-actions__confirm`,
      theme: mergedTheme.peers.Button,
      themeOverrides: mergedTheme.peerOverrides.Button,
      disabled: this.isValueInvalid,
      onClick: this.onConfirmClick
    }, {
      default: () => this.confirmText
    }) : null) : null, h(FocusDetector, {
      onFocus: this.onFocusDetectorFocus
    }));
  }
});
const style$d = c$1([cB("time-picker", `
 z-index: auto;
 position: relative;
 `, [cB("time-picker-icon", `
 color: var(--n-icon-color-override);
 transition: color .3s var(--n-bezier);
 `), cM("disabled", [cB("time-picker-icon", `
 color: var(--n-icon-color-disabled-override);
 `)])]), cB("time-picker-panel", `
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 outline: none;
 font-size: var(--n-item-font-size);
 border-radius: var(--n-border-radius);
 margin: 4px 0;
 min-width: 104px;
 overflow: hidden;
 background-color: var(--n-panel-color);
 box-shadow: var(--n-panel-box-shadow);
 `, [fadeInScaleUpTransition(), cB("time-picker-actions", `
 padding: var(--n-panel-action-padding);
 align-items: center;
 display: flex;
 justify-content: space-evenly;
 `), cB("time-picker-cols", `
 height: calc(var(--n-item-height) * 6);
 display: flex;
 position: relative;
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-panel-divider-color);
 `), cB("time-picker-col", `
 flex-grow: 1;
 min-width: var(--n-item-width);
 height: calc(var(--n-item-height) * 6);
 flex-direction: column;
 transition: box-shadow .3s var(--n-bezier);
 `, [cM("transition-disabled", [cE("item", "transition: none;", [c$1("&::before", "transition: none;")])]), cE("padding", `
 height: calc(var(--n-item-height) * 5);
 `), c$1("&:first-child", "min-width: calc(var(--n-item-width) + 4px);", [cE("item", [c$1("&::before", "left: 4px;")])]), cE("item", `
 cursor: pointer;
 height: var(--n-item-height);
 display: flex;
 align-items: center;
 justify-content: center;
 transition: 
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 text-decoration-color .3s var(--n-bezier);
 background: #0000;
 text-decoration-color: #0000;
 color: var(--n-item-text-color);
 z-index: 0;
 box-sizing: border-box;
 padding-top: 4px;
 position: relative;
 `, [c$1("&::before", `
 content: "";
 transition: background-color .3s var(--n-bezier);
 z-index: -1;
 position: absolute;
 left: 0;
 right: 4px;
 top: 4px;
 bottom: 0;
 border-radius: var(--n-item-border-radius);
 `), cNotM("disabled", [c$1("&:hover::before", `
 background-color: var(--n-item-color-hover);
 `)]), cM("active", `
 color: var(--n-item-text-color-active);
 `, [c$1("&::before", `
 background-color: var(--n-item-color-hover);
 `)]), cM("disabled", `
 opacity: var(--n-item-opacity-disabled);
 cursor: not-allowed;
 `)]), cM("invalid", [cE("item", [cM("active", `
 text-decoration: line-through;
 text-decoration-color: var(--n-item-text-color-active);
 `)])])])])]);
function validateUnits(value, max) {
  if (value === void 0) {
    return true;
  }
  if (Array.isArray(value)) {
    return value.every((v) => v >= 0 && v <= max);
  } else {
    return value >= 0 && value <= max;
  }
}
const timePickerProps = Object.assign(Object.assign({}, useTheme.props), {
  to: useAdjustedTo.propTo,
  bordered: {
    type: Boolean,
    default: void 0
  },
  actions: Array,
  defaultValue: {
    type: Number,
    default: null
  },
  defaultFormattedValue: String,
  placeholder: String,
  placement: {
    type: String,
    default: "bottom-start"
  },
  value: Number,
  format: {
    type: String,
    default: "HH:mm:ss"
  },
  valueFormat: String,
  formattedValue: String,
  isHourDisabled: Function,
  size: String,
  isMinuteDisabled: Function,
  isSecondDisabled: Function,
  inputReadonly: Boolean,
  clearable: Boolean,
  status: String,
  "onUpdate:value": [Function, Array],
  onUpdateValue: [Function, Array],
  "onUpdate:show": [Function, Array],
  onUpdateShow: [Function, Array],
  onUpdateFormattedValue: [Function, Array],
  "onUpdate:formattedValue": [Function, Array],
  onBlur: [Function, Array],
  onConfirm: [Function, Array],
  onClear: Function,
  onFocus: [Function, Array],
  // https://www.iana.org/time-zones
  timeZone: String,
  showIcon: {
    type: Boolean,
    default: true
  },
  disabled: {
    type: Boolean,
    default: void 0
  },
  show: {
    type: Boolean,
    default: void 0
  },
  hours: {
    type: [Number, Array],
    validator: (value) => validateUnits(value, 23)
  },
  minutes: {
    type: [Number, Array],
    validator: (value) => validateUnits(value, 59)
  },
  seconds: {
    type: [Number, Array],
    validator: (value) => validateUnits(value, 59)
  },
  use12Hours: Boolean,
  // private
  stateful: {
    type: Boolean,
    default: true
  },
  // deprecated
  onChange: [Function, Array]
});
const __nuxt_component_8 = defineComponent({
  name: "TimePicker",
  props: timePickerProps,
  setup(props) {
    if (process.env.NODE_ENV !== "production") {
      watchEffect(() => {
        if (props.onChange !== void 0) {
          warnOnce("time-picker", "`on-change` is deprecated, please use `on-update:value` instead.");
        }
      });
    }
    const {
      mergedBorderedRef,
      mergedClsPrefixRef,
      namespaceRef,
      inlineThemeDisabled
    } = useConfig(props);
    const {
      localeRef,
      dateLocaleRef
    } = useLocale("TimePicker");
    const formItem = useFormItem(props);
    const {
      mergedSizeRef,
      mergedDisabledRef,
      mergedStatusRef
    } = formItem;
    const themeRef = useTheme("TimePicker", "-time-picker", style$d, timePickerLight, props, mergedClsPrefixRef);
    const keyboardState = useKeyboard();
    const inputInstRef = ref(null);
    const panelInstRef = ref(null);
    const dateFnsOptionsRef = computed(() => {
      return {
        locale: dateLocaleRef.value.locale
      };
    });
    function getTimestampFromFormattedValue(value) {
      if (value === null)
        return null;
      return strictParse(value, props.valueFormat || props.format, /* @__PURE__ */ new Date(), dateFnsOptionsRef.value).getTime();
    }
    const {
      defaultValue,
      defaultFormattedValue
    } = props;
    const uncontrolledValueRef = ref(defaultFormattedValue !== void 0 ? getTimestampFromFormattedValue(defaultFormattedValue) : defaultValue);
    const mergedValueRef = computed(() => {
      const {
        formattedValue
      } = props;
      if (formattedValue !== void 0) {
        return getTimestampFromFormattedValue(formattedValue);
      }
      const {
        value
      } = props;
      if (value !== void 0) {
        return value;
      }
      return uncontrolledValueRef.value;
    });
    const mergedFormatRef = computed(() => {
      const {
        timeZone
      } = props;
      if (timeZone) {
        return (date, format2, options) => {
          return formatInTimeZone(date, timeZone, format2, options);
        };
      } else {
        return (date, _format, options) => {
          return format$3(date, _format, options);
        };
      }
    });
    const displayTimeStringRef = ref("");
    watch(() => props.timeZone, () => {
      const mergedValue = mergedValueRef.value;
      displayTimeStringRef.value = mergedValue === null ? "" : mergedFormatRef.value(mergedValue, props.format, dateFnsOptionsRef.value);
    }, {
      immediate: true
    });
    const uncontrolledShowRef = ref(false);
    const controlledShowRef = toRef(props, "show");
    const mergedShowRef = useMergedState(controlledShowRef, uncontrolledShowRef);
    const memorizedValueRef = ref(mergedValueRef.value);
    const transitionDisabledRef = ref(false);
    const localizedClearRef = computed(() => {
      return localeRef.value.clear;
    });
    const localizedNowRef = computed(() => {
      return localeRef.value.now;
    });
    const localizedPlaceholderRef = computed(() => {
      if (props.placeholder !== void 0)
        return props.placeholder;
      return localeRef.value.placeholder;
    });
    const localizedNegativeTextRef = computed(() => {
      return localeRef.value.negativeText;
    });
    const localizedPositiveTextRef = computed(() => {
      return localeRef.value.positiveText;
    });
    const hourInFormatRef = computed(() => {
      return /H|h|K|k/.test(props.format);
    });
    const minuteInFormatRef = computed(() => {
      return props.format.includes("m");
    });
    const secondInFormatRef = computed(() => {
      return props.format.includes("s");
    });
    const isHourInvalidRef = computed(() => {
      const {
        isHourDisabled
      } = props;
      if (hourValueRef.value === null)
        return false;
      if (!isTimeInStep(hourValueRef.value, "hours", props.hours))
        return true;
      if (!isHourDisabled)
        return false;
      return isHourDisabled(hourValueRef.value);
    });
    const isMinuteInvalidRef = computed(() => {
      const {
        value: minuteValue
      } = minuteValueRef;
      const {
        value: hourValue
      } = hourValueRef;
      if (minuteValue === null || hourValue === null)
        return false;
      if (!isTimeInStep(minuteValue, "minutes", props.minutes))
        return true;
      const {
        isMinuteDisabled
      } = props;
      if (!isMinuteDisabled)
        return false;
      return isMinuteDisabled(minuteValue, hourValue);
    });
    const isSecondInvalidRef = computed(() => {
      const {
        value: minuteValue
      } = minuteValueRef;
      const {
        value: hourValue
      } = hourValueRef;
      const {
        value: secondValue
      } = secondValueRef;
      if (secondValue === null || minuteValue === null || hourValue === null) {
        return false;
      }
      if (!isTimeInStep(secondValue, "seconds", props.seconds))
        return true;
      const {
        isSecondDisabled
      } = props;
      if (!isSecondDisabled)
        return false;
      return isSecondDisabled(secondValue, minuteValue, hourValue);
    });
    const isValueInvalidRef = computed(() => {
      return isHourInvalidRef.value || isMinuteInvalidRef.value || isSecondInvalidRef.value;
    });
    const mergedAttrSizeRef = computed(() => {
      return props.format.length + 4;
    });
    const amPmValueRef = computed(() => {
      const {
        value
      } = mergedValueRef;
      if (value === null)
        return null;
      return getHours(value) < 12 ? "am" : "pm";
    });
    const hourValueRef = computed(() => {
      const {
        value
      } = mergedValueRef;
      if (value === null)
        return null;
      return Number(mergedFormatRef.value(value, "HH", dateFnsOptionsRef.value));
    });
    const minuteValueRef = computed(() => {
      const {
        value
      } = mergedValueRef;
      if (value === null)
        return null;
      return Number(mergedFormatRef.value(value, "mm", dateFnsOptionsRef.value));
    });
    const secondValueRef = computed(() => {
      const {
        value
      } = mergedValueRef;
      if (value === null)
        return null;
      return Number(mergedFormatRef.value(value, "ss", dateFnsOptionsRef.value));
    });
    function doUpdateFormattedValue(value, timestampValue) {
      const {
        onUpdateFormattedValue,
        "onUpdate:formattedValue": _onUpdateFormattedValue
      } = props;
      if (onUpdateFormattedValue) {
        call(onUpdateFormattedValue, value, timestampValue);
      }
      if (_onUpdateFormattedValue) {
        call(_onUpdateFormattedValue, value, timestampValue);
      }
    }
    function createFormattedValue(value) {
      return value === null ? null : mergedFormatRef.value(value, props.valueFormat || props.format);
    }
    function doUpdateValue(value) {
      const {
        onUpdateValue,
        "onUpdate:value": _onUpdateValue,
        onChange
      } = props;
      const {
        nTriggerFormChange,
        nTriggerFormInput
      } = formItem;
      const formattedValue = createFormattedValue(value);
      if (onUpdateValue) {
        call(onUpdateValue, value, formattedValue);
      }
      if (_onUpdateValue) {
        call(_onUpdateValue, value, formattedValue);
      }
      if (onChange)
        call(onChange, value, formattedValue);
      doUpdateFormattedValue(formattedValue, value);
      uncontrolledValueRef.value = value;
      nTriggerFormChange();
      nTriggerFormInput();
    }
    function doFocus(e2) {
      const {
        onFocus
      } = props;
      const {
        nTriggerFormFocus
      } = formItem;
      if (onFocus)
        call(onFocus, e2);
      nTriggerFormFocus();
    }
    function doBlur(e2) {
      const {
        onBlur
      } = props;
      const {
        nTriggerFormBlur
      } = formItem;
      if (onBlur)
        call(onBlur, e2);
      nTriggerFormBlur();
    }
    function doConfirm() {
      const {
        onConfirm
      } = props;
      if (onConfirm) {
        call(onConfirm, mergedValueRef.value, createFormattedValue(mergedValueRef.value));
      }
    }
    function handleTimeInputClear(e2) {
      var _a;
      e2.stopPropagation();
      doUpdateValue(null);
      deriveInputValue(null);
      (_a = props.onClear) === null || _a === void 0 ? void 0 : _a.call(props);
    }
    function handleFocusDetectorFocus() {
      closePanel({
        returnFocus: true
      });
    }
    function clearSelectedValue() {
      doUpdateValue(null);
      deriveInputValue(null);
      closePanel({
        returnFocus: true
      });
    }
    function handleInputKeydown(e2) {
      if (e2.key === "Escape" && mergedShowRef.value) {
        markEventEffectPerformed(e2);
      }
    }
    function handleMenuKeydown(e2) {
      var _a;
      switch (e2.key) {
        case "Escape":
          if (mergedShowRef.value) {
            markEventEffectPerformed(e2);
            closePanel({
              returnFocus: true
            });
          }
          break;
        case "Tab":
          if (keyboardState.shift && e2.target === ((_a = panelInstRef.value) === null || _a === void 0 ? void 0 : _a.$el)) {
            e2.preventDefault();
            closePanel({
              returnFocus: true
            });
          }
          break;
      }
    }
    function disableTransitionOneTick() {
      transitionDisabledRef.value = true;
      void nextTick(() => {
        transitionDisabledRef.value = false;
      });
    }
    function handleTriggerClick(e2) {
      if (mergedDisabledRef.value || happensIn(e2, "clear"))
        return;
      if (!mergedShowRef.value) {
        openPanel();
      }
    }
    function handleHourClick(hour) {
      if (typeof hour === "string")
        return;
      if (mergedValueRef.value === null) {
        doUpdateValue(getTime(setHours(startOfHour(/* @__PURE__ */ new Date()), hour)));
      } else {
        doUpdateValue(getTime(setHours(mergedValueRef.value, hour)));
      }
    }
    function handleMinuteClick(minute) {
      if (typeof minute === "string")
        return;
      if (mergedValueRef.value === null) {
        doUpdateValue(getTime(setMinutes(startOfMinute(/* @__PURE__ */ new Date()), minute)));
      } else {
        doUpdateValue(getTime(setMinutes(mergedValueRef.value, minute)));
      }
    }
    function handleSecondClick(second) {
      if (typeof second === "string")
        return;
      if (mergedValueRef.value === null) {
        doUpdateValue(getTime(setSeconds(startOfSecond(/* @__PURE__ */ new Date()), second)));
      } else {
        doUpdateValue(getTime(setSeconds(mergedValueRef.value, second)));
      }
    }
    function handleAmPmClick(amPm) {
      const {
        value: mergedValue
      } = mergedValueRef;
      if (mergedValue === null) {
        const now = /* @__PURE__ */ new Date();
        const hours = getHours(now);
        if (amPm === "pm" && hours < 12) {
          doUpdateValue(getTime(setHours(now, hours + 12)));
        } else if (amPm === "am" && hours >= 12) {
          doUpdateValue(getTime(setHours(now, hours - 12)));
        }
        doUpdateValue(getTime(now));
      } else {
        const hours = getHours(mergedValue);
        if (amPm === "pm" && hours < 12) {
          doUpdateValue(getTime(setHours(mergedValue, hours + 12)));
        } else if (amPm === "am" && hours >= 12) {
          doUpdateValue(getTime(setHours(mergedValue, hours - 12)));
        }
      }
    }
    function deriveInputValue(time2) {
      if (time2 === void 0)
        time2 = mergedValueRef.value;
      if (time2 === null)
        displayTimeStringRef.value = "";
      else {
        displayTimeStringRef.value = mergedFormatRef.value(time2, props.format, dateFnsOptionsRef.value);
      }
    }
    function handleTimeInputFocus(e2) {
      if (isInternalFocusSwitch(e2))
        return;
      doFocus(e2);
    }
    function handleTimeInputBlur(e2) {
      var _a;
      if (isInternalFocusSwitch(e2))
        return;
      if (mergedShowRef.value) {
        const panelEl = (_a = panelInstRef.value) === null || _a === void 0 ? void 0 : _a.$el;
        if (!(panelEl === null || panelEl === void 0 ? void 0 : panelEl.contains(e2.relatedTarget))) {
          deriveInputValue();
          doBlur(e2);
          closePanel({
            returnFocus: false
          });
        }
      } else {
        deriveInputValue();
        doBlur(e2);
      }
    }
    function handleTimeInputActivate() {
      if (mergedDisabledRef.value)
        return;
      if (!mergedShowRef.value) {
        openPanel();
      }
    }
    function handleTimeInputDeactivate() {
      if (mergedDisabledRef.value)
        return;
      deriveInputValue();
      closePanel({
        returnFocus: false
      });
    }
    function scrollTimer() {
      if (!panelInstRef.value)
        return;
      const {
        hourScrollRef,
        minuteScrollRef,
        secondScrollRef,
        amPmScrollRef
      } = panelInstRef.value;
      [hourScrollRef, minuteScrollRef, secondScrollRef, amPmScrollRef].forEach((itemScrollRef) => {
        var _a;
        if (!itemScrollRef)
          return;
        const activeItemEl = (_a = itemScrollRef.contentRef) === null || _a === void 0 ? void 0 : _a.querySelector("[data-active]");
        if (activeItemEl) {
          itemScrollRef.scrollTo({
            top: activeItemEl.offsetTop
          });
        }
      });
    }
    function doUpdateShow(value) {
      uncontrolledShowRef.value = value;
      const {
        onUpdateShow,
        "onUpdate:show": _onUpdateShow
      } = props;
      if (onUpdateShow)
        call(onUpdateShow, value);
      if (_onUpdateShow)
        call(_onUpdateShow, value);
    }
    function isInternalFocusSwitch(e2) {
      var _a, _b, _c;
      return !!(((_b = (_a = inputInstRef.value) === null || _a === void 0 ? void 0 : _a.wrapperElRef) === null || _b === void 0 ? void 0 : _b.contains(e2.relatedTarget)) || ((_c = panelInstRef.value) === null || _c === void 0 ? void 0 : _c.$el.contains(e2.relatedTarget)));
    }
    function openPanel() {
      memorizedValueRef.value = mergedValueRef.value;
      doUpdateShow(true);
      void nextTick(scrollTimer);
    }
    function handleClickOutside(e2) {
      var _a, _b;
      if (mergedShowRef.value && !((_b = (_a = inputInstRef.value) === null || _a === void 0 ? void 0 : _a.wrapperElRef) === null || _b === void 0 ? void 0 : _b.contains(getPreciseEventTarget(e2)))) {
        closePanel({
          returnFocus: false
        });
      }
    }
    function closePanel({
      returnFocus
    }) {
      var _a;
      if (mergedShowRef.value) {
        doUpdateShow(false);
        if (returnFocus) {
          (_a = inputInstRef.value) === null || _a === void 0 ? void 0 : _a.focus();
        }
      }
    }
    function handleTimeInputUpdateValue(v) {
      if (v === "") {
        doUpdateValue(null);
        return;
      }
      const time2 = strictParse(v, props.format, /* @__PURE__ */ new Date(), dateFnsOptionsRef.value);
      displayTimeStringRef.value = v;
      if (isValid$1(time2)) {
        const {
          value: mergedValue
        } = mergedValueRef;
        if (mergedValue !== null) {
          const newTime = set(mergedValue, {
            hours: getHours(time2),
            minutes: getMinutes(time2),
            seconds: getSeconds(time2),
            milliseconds: getMilliseconds(time2)
          });
          doUpdateValue(getTime(newTime));
        } else {
          doUpdateValue(getTime(time2));
        }
      }
    }
    function handleCancelClick() {
      doUpdateValue(memorizedValueRef.value);
      doUpdateShow(false);
    }
    function handleNowClick() {
      const now = /* @__PURE__ */ new Date();
      const getNowTime = {
        hours: getHours,
        minutes: getMinutes,
        seconds: getSeconds
      };
      const [mergeHours, mergeMinutes, mergeSeconds] = ["hours", "minutes", "seconds"].map((i2) => !props[i2] || isTimeInStep(getNowTime[i2](now), i2, props[i2]) ? getNowTime[i2](now) : findSimilarTime(getNowTime[i2](now), i2, props[i2]));
      const newValue = setSeconds(setMinutes(setHours(mergedValueRef.value ? mergedValueRef.value : getTime(now), mergeHours), mergeMinutes), mergeSeconds);
      doUpdateValue(getTime(newValue));
    }
    function handleConfirmClick() {
      deriveInputValue();
      doConfirm();
      closePanel({
        returnFocus: true
      });
    }
    function handleMenuFocusOut(e2) {
      if (isInternalFocusSwitch(e2))
        return;
      deriveInputValue();
      doBlur(e2);
      closePanel({
        returnFocus: false
      });
    }
    watch(mergedValueRef, (value) => {
      deriveInputValue(value);
      disableTransitionOneTick();
      void nextTick(scrollTimer);
    });
    watch(mergedShowRef, () => {
      if (isValueInvalidRef.value) {
        doUpdateValue(memorizedValueRef.value);
      }
    });
    provide(timePickerInjectionKey, {
      mergedThemeRef: themeRef,
      mergedClsPrefixRef
    });
    const exposedMethods = {
      focus: () => {
        var _a;
        (_a = inputInstRef.value) === null || _a === void 0 ? void 0 : _a.focus();
      },
      blur: () => {
        var _a;
        (_a = inputInstRef.value) === null || _a === void 0 ? void 0 : _a.blur();
      }
    };
    const triggerCssVarsRef = computed(() => {
      const {
        common: {
          cubicBezierEaseInOut
        },
        self: {
          iconColor,
          iconColorDisabled
        }
      } = themeRef.value;
      return {
        "--n-icon-color-override": iconColor,
        "--n-icon-color-disabled-override": iconColorDisabled,
        "--n-bezier": cubicBezierEaseInOut
      };
    });
    const triggerThemeClassHandle = inlineThemeDisabled ? useThemeClass("time-picker-trigger", void 0, triggerCssVarsRef, props) : void 0;
    const cssVarsRef = computed(() => {
      const {
        self: {
          panelColor,
          itemTextColor,
          itemTextColorActive,
          itemColorHover,
          panelDividerColor,
          panelBoxShadow,
          itemOpacityDisabled,
          borderRadius,
          itemFontSize,
          itemWidth,
          itemHeight,
          panelActionPadding,
          itemBorderRadius
        },
        common: {
          cubicBezierEaseInOut
        }
      } = themeRef.value;
      return {
        "--n-bezier": cubicBezierEaseInOut,
        "--n-border-radius": borderRadius,
        "--n-item-color-hover": itemColorHover,
        "--n-item-font-size": itemFontSize,
        "--n-item-height": itemHeight,
        "--n-item-opacity-disabled": itemOpacityDisabled,
        "--n-item-text-color": itemTextColor,
        "--n-item-text-color-active": itemTextColorActive,
        "--n-item-width": itemWidth,
        "--n-panel-action-padding": panelActionPadding,
        "--n-panel-box-shadow": panelBoxShadow,
        "--n-panel-color": panelColor,
        "--n-panel-divider-color": panelDividerColor,
        "--n-item-border-radius": itemBorderRadius
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("time-picker", void 0, cssVarsRef, props) : void 0;
    return {
      focus: exposedMethods.focus,
      blur: exposedMethods.blur,
      mergedStatus: mergedStatusRef,
      mergedBordered: mergedBorderedRef,
      mergedClsPrefix: mergedClsPrefixRef,
      namespace: namespaceRef,
      uncontrolledValue: uncontrolledValueRef,
      mergedValue: mergedValueRef,
      isMounted: useIsMounted(),
      inputInstRef,
      panelInstRef,
      adjustedTo: useAdjustedTo(props),
      mergedShow: mergedShowRef,
      localizedClear: localizedClearRef,
      localizedNow: localizedNowRef,
      localizedPlaceholder: localizedPlaceholderRef,
      localizedNegativeText: localizedNegativeTextRef,
      localizedPositiveText: localizedPositiveTextRef,
      hourInFormat: hourInFormatRef,
      minuteInFormat: minuteInFormatRef,
      secondInFormat: secondInFormatRef,
      mergedAttrSize: mergedAttrSizeRef,
      displayTimeString: displayTimeStringRef,
      mergedSize: mergedSizeRef,
      mergedDisabled: mergedDisabledRef,
      isValueInvalid: isValueInvalidRef,
      isHourInvalid: isHourInvalidRef,
      isMinuteInvalid: isMinuteInvalidRef,
      isSecondInvalid: isSecondInvalidRef,
      transitionDisabled: transitionDisabledRef,
      hourValue: hourValueRef,
      minuteValue: minuteValueRef,
      secondValue: secondValueRef,
      amPmValue: amPmValueRef,
      handleInputKeydown,
      handleTimeInputFocus,
      handleTimeInputBlur,
      handleNowClick,
      handleConfirmClick,
      handleTimeInputUpdateValue,
      handleMenuFocusOut,
      handleCancelClick,
      handleClickOutside,
      handleTimeInputActivate,
      handleTimeInputDeactivate,
      handleHourClick,
      handleMinuteClick,
      handleSecondClick,
      handleAmPmClick,
      handleTimeInputClear,
      handleFocusDetectorFocus,
      handleMenuKeydown,
      handleTriggerClick,
      mergedTheme: themeRef,
      triggerCssVars: inlineThemeDisabled ? void 0 : triggerCssVarsRef,
      triggerThemeClass: triggerThemeClassHandle === null || triggerThemeClassHandle === void 0 ? void 0 : triggerThemeClassHandle.themeClass,
      triggerOnRender: triggerThemeClassHandle === null || triggerThemeClassHandle === void 0 ? void 0 : triggerThemeClassHandle.onRender,
      cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender,
      clearSelectedValue
    };
  },
  render() {
    const {
      mergedClsPrefix,
      $slots,
      triggerOnRender
    } = this;
    triggerOnRender === null || triggerOnRender === void 0 ? void 0 : triggerOnRender();
    return h("div", {
      class: [`${mergedClsPrefix}-time-picker`, this.triggerThemeClass],
      style: this.triggerCssVars
    }, h(Binder, null, {
      default: () => [h(VTarget, null, {
        default: () => h(__nuxt_component_3, {
          ref: "inputInstRef",
          status: this.mergedStatus,
          value: this.displayTimeString,
          bordered: this.mergedBordered,
          passivelyActivated: true,
          attrSize: this.mergedAttrSize,
          theme: this.mergedTheme.peers.Input,
          themeOverrides: this.mergedTheme.peerOverrides.Input,
          stateful: this.stateful,
          size: this.mergedSize,
          placeholder: this.localizedPlaceholder,
          clearable: this.clearable,
          disabled: this.mergedDisabled,
          textDecoration: this.isValueInvalid ? "line-through" : void 0,
          onFocus: this.handleTimeInputFocus,
          onBlur: this.handleTimeInputBlur,
          onActivate: this.handleTimeInputActivate,
          onDeactivate: this.handleTimeInputDeactivate,
          onUpdateValue: this.handleTimeInputUpdateValue,
          onClear: this.handleTimeInputClear,
          internalDeactivateOnEnter: true,
          internalForceFocus: this.mergedShow,
          readonly: this.inputReadonly || this.mergedDisabled,
          onClick: this.handleTriggerClick,
          onKeydown: this.handleInputKeydown
        }, this.showIcon ? {
          [this.clearable ? "clear-icon-placeholder" : "suffix"]: () => h(NBaseIcon, {
            clsPrefix: mergedClsPrefix,
            class: `${mergedClsPrefix}-time-picker-icon`
          }, {
            default: () => $slots.icon ? $slots.icon() : h(TimeIcon, null)
          })
        } : null)
      }), h(VFollower, {
        teleportDisabled: this.adjustedTo === useAdjustedTo.tdkey,
        show: this.mergedShow,
        to: this.adjustedTo,
        containerClass: this.namespace,
        placement: this.placement
      }, {
        default: () => h(Transition, {
          name: "fade-in-scale-up-transition",
          appear: this.isMounted
        }, {
          default: () => {
            var _a;
            if (this.mergedShow) {
              (_a = this.onRender) === null || _a === void 0 ? void 0 : _a.call(this);
              return withDirectives(h(Panel, {
                ref: "panelInstRef",
                actions: this.actions,
                class: this.themeClass,
                style: this.cssVars,
                seconds: this.seconds,
                minutes: this.minutes,
                hours: this.hours,
                transitionDisabled: this.transitionDisabled,
                hourValue: this.hourValue,
                showHour: this.hourInFormat,
                isHourInvalid: this.isHourInvalid,
                isHourDisabled: this.isHourDisabled,
                minuteValue: this.minuteValue,
                showMinute: this.minuteInFormat,
                isMinuteInvalid: this.isMinuteInvalid,
                isMinuteDisabled: this.isMinuteDisabled,
                secondValue: this.secondValue,
                amPmValue: this.amPmValue,
                showSecond: this.secondInFormat,
                isSecondInvalid: this.isSecondInvalid,
                isSecondDisabled: this.isSecondDisabled,
                isValueInvalid: this.isValueInvalid,
                clearText: this.localizedClear,
                nowText: this.localizedNow,
                confirmText: this.localizedPositiveText,
                use12Hours: this.use12Hours,
                onFocusout: this.handleMenuFocusOut,
                onKeydown: this.handleMenuKeydown,
                onHourClick: this.handleHourClick,
                onMinuteClick: this.handleMinuteClick,
                onSecondClick: this.handleSecondClick,
                onAmPmClick: this.handleAmPmClick,
                onNowClick: this.handleNowClick,
                onConfirmClick: this.handleConfirmClick,
                onClearClick: this.clearSelectedValue,
                onFocusDetectorFocus: this.handleFocusDetectorFocus
              }), [[clickoutside, this.handleClickOutside, void 0, {
                capture: true
              }]]);
            }
            return null;
          }
        })
      })]
    }));
  }
});
const TIME_FORMAT = "HH:mm:ss";
const usePanelCommonProps = {
  active: Boolean,
  dateFormat: String,
  timerPickerFormat: {
    type: String,
    value: TIME_FORMAT
  },
  value: {
    type: [Array, Number],
    default: null
  },
  shortcuts: Object,
  defaultTime: [Number, String, Array],
  onClear: Function,
  onConfirm: Function,
  onClose: Function,
  onTabOut: Function,
  onUpdateValue: {
    type: Function,
    required: true
  },
  themeClass: String,
  onRender: Function,
  panel: Boolean,
  onNextMonth: Function,
  onPrevMonth: Function,
  onNextYear: Function,
  onPrevYear: Function
};
function usePanelCommon(props) {
  const {
    dateLocaleRef,
    timePickerSizeRef,
    timePickerPropsRef,
    localeRef,
    mergedClsPrefixRef,
    mergedThemeRef
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  } = inject(datePickerInjectionKey);
  const dateFnsOptionsRef = computed(() => {
    return {
      locale: dateLocaleRef.value.locale
    };
  });
  const selfRef = ref(null);
  const keyboardState = useKeyboard();
  function doClear() {
    const {
      onClear
    } = props;
    if (onClear)
      onClear();
  }
  function doConfirm() {
    const {
      onConfirm,
      value
    } = props;
    if (onConfirm)
      onConfirm(value);
  }
  function doUpdateValue(value, doUpdate) {
    const {
      onUpdateValue
    } = props;
    onUpdateValue(value, doUpdate);
  }
  function doClose(disableUpdateOnClose = false) {
    const {
      onClose
    } = props;
    if (onClose)
      onClose(disableUpdateOnClose);
  }
  function doTabOut() {
    const {
      onTabOut
    } = props;
    if (onTabOut)
      onTabOut();
  }
  function handleClearClick() {
    doUpdateValue(null, true);
    doClose(true);
    doClear();
  }
  function handleFocusDetectorFocus() {
    doTabOut();
  }
  function disableTransitionOneTick() {
    if (props.active || props.panel) {
      void nextTick(() => {
        const {
          value: selfEl
        } = selfRef;
        if (!selfEl)
          return;
        const dateEls = selfEl.querySelectorAll("[data-n-date]");
        dateEls.forEach((el) => {
          el.classList.add("transition-disabled");
        });
        void selfEl.offsetWidth;
        dateEls.forEach((el) => {
          el.classList.remove("transition-disabled");
        });
      });
    }
  }
  function handlePanelKeyDown(e2) {
    if (e2.key === "Tab" && e2.target === selfRef.value && keyboardState.shift) {
      e2.preventDefault();
      doTabOut();
    }
  }
  function handlePanelFocus(e2) {
    const {
      value: el
    } = selfRef;
    if (keyboardState.tab && e2.target === el && (el === null || el === void 0 ? void 0 : el.contains(e2.relatedTarget))) {
      doTabOut();
    }
  }
  let cachedValue = null;
  let cached = false;
  function cachePendingValue() {
    cachedValue = props.value;
    cached = true;
  }
  function clearPendingValue() {
    cached = false;
  }
  function restorePendingValue() {
    if (cached) {
      doUpdateValue(cachedValue, false);
      cached = false;
    }
  }
  function getShortcutValue(shortcut) {
    if (typeof shortcut === "function") {
      return shortcut();
    }
    return shortcut;
  }
  const showMonthYearPanel = ref(false);
  function handleOpenQuickSelectMonthPanel() {
    showMonthYearPanel.value = !showMonthYearPanel.value;
  }
  return {
    mergedTheme: mergedThemeRef,
    mergedClsPrefix: mergedClsPrefixRef,
    dateFnsOptions: dateFnsOptionsRef,
    timePickerSize: timePickerSizeRef,
    timePickerProps: timePickerPropsRef,
    selfRef,
    locale: localeRef,
    doConfirm,
    doClose,
    doUpdateValue,
    doTabOut,
    handleClearClick,
    handleFocusDetectorFocus,
    disableTransitionOneTick,
    handlePanelKeyDown,
    handlePanelFocus,
    cachePendingValue,
    clearPendingValue,
    restorePendingValue,
    getShortcutValue,
    handleShortcutMouseleave: restorePendingValue,
    showMonthYearPanel,
    handleOpenQuickSelectMonthPanel
  };
}
const useCalendarProps = Object.assign(Object.assign({}, usePanelCommonProps), {
  defaultCalendarStartTime: Number,
  actions: {
    type: Array,
    default: () => ["now", "clear", "confirm"]
  }
});
function useCalendar(props, type) {
  var _a;
  const panelCommon = usePanelCommon(props);
  const {
    isValueInvalidRef,
    isDateDisabledRef,
    isDateInvalidRef,
    isTimeInvalidRef,
    isDateTimeInvalidRef,
    isHourDisabledRef,
    isMinuteDisabledRef,
    isSecondDisabledRef,
    localeRef,
    firstDayOfWeekRef,
    datePickerSlots,
    yearFormatRef,
    monthFormatRef,
    quarterFormatRef
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  } = inject(datePickerInjectionKey);
  const validation = {
    isValueInvalid: isValueInvalidRef,
    isDateDisabled: isDateDisabledRef,
    isDateInvalid: isDateInvalidRef,
    isTimeInvalid: isTimeInvalidRef,
    isDateTimeInvalid: isDateTimeInvalidRef,
    isHourDisabled: isHourDisabledRef,
    isMinuteDisabled: isMinuteDisabledRef,
    isSecondDisabled: isSecondDisabledRef
  };
  const mergedDateFormatRef = computed(() => props.dateFormat || localeRef.value.dateFormat);
  const dateInputValueRef = ref(props.value === null || Array.isArray(props.value) ? "" : format$3(props.value, mergedDateFormatRef.value));
  const calendarValueRef = ref(props.value === null || Array.isArray(props.value) ? (_a = props.defaultCalendarStartTime) !== null && _a !== void 0 ? _a : Date.now() : props.value);
  const yearVlRef = ref(null);
  const yearScrollbarRef = ref(null);
  const monthScrollbarRef = ref(null);
  const nowRef = ref(Date.now());
  const dateArrayRef = computed(() => {
    var _a2;
    return dateArray(calendarValueRef.value, props.value, nowRef.value, (_a2 = firstDayOfWeekRef.value) !== null && _a2 !== void 0 ? _a2 : localeRef.value.firstDayOfWeek, false, type === "week");
  });
  const monthArrayRef = computed(() => {
    const {
      value
    } = props;
    return monthArray(calendarValueRef.value, Array.isArray(value) ? null : value, nowRef.value, {
      monthFormat: monthFormatRef.value
    });
  });
  const yearArrayRef = computed(() => {
    const {
      value
    } = props;
    return yearArray(Array.isArray(value) ? null : value, nowRef.value, {
      yearFormat: yearFormatRef.value
    });
  });
  const quarterArrayRef = computed(() => {
    const {
      value
    } = props;
    return quarterArray(calendarValueRef.value, Array.isArray(value) ? null : value, nowRef.value, {
      quarterFormat: quarterFormatRef.value
    });
  });
  const weekdaysRef = computed(() => {
    return dateArrayRef.value.slice(0, 7).map((dateItem2) => {
      const {
        ts
      } = dateItem2;
      return format$3(ts, localeRef.value.dayFormat, panelCommon.dateFnsOptions.value);
    });
  });
  const calendarMonthRef = computed(() => {
    return format$3(calendarValueRef.value, localeRef.value.monthFormat, panelCommon.dateFnsOptions.value);
  });
  const calendarYearRef = computed(() => {
    return format$3(calendarValueRef.value, localeRef.value.yearFormat, panelCommon.dateFnsOptions.value);
  });
  watch(calendarValueRef, (value, oldValue) => {
    if (type === "date" || type === "datetime") {
      if (!isSameMonth(value, oldValue)) {
        panelCommon.disableTransitionOneTick();
      }
    }
  });
  watch(computed(() => props.value), (value) => {
    if (value !== null && !Array.isArray(value)) {
      dateInputValueRef.value = format$3(value, mergedDateFormatRef.value, panelCommon.dateFnsOptions.value);
      calendarValueRef.value = value;
    } else {
      dateInputValueRef.value = "";
    }
  });
  function sanitizeValue(value) {
    var _a2;
    if (type === "datetime")
      return getTime(startOfSecond(value));
    if (type === "month")
      return getTime(startOfMonth(value));
    if (type === "year")
      return getTime(startOfYear(value));
    if (type === "quarter")
      return getTime(startOfQuarter(value));
    if (type === "week") {
      const weekStartsOn = (((_a2 = firstDayOfWeekRef.value) !== null && _a2 !== void 0 ? _a2 : localeRef.value.firstDayOfWeek) + 1) % 7;
      return getTime(startOfWeek(value, {
        weekStartsOn
      }));
    }
    return getTime(startOfDay(value));
  }
  function mergedIsDateDisabled(ts, detail) {
    const {
      isDateDisabled: {
        value: isDateDisabled
      }
    } = validation;
    if (!isDateDisabled)
      return false;
    return isDateDisabled(ts, detail);
  }
  function handleDateInput(value) {
    const date = strictParse(value, mergedDateFormatRef.value, /* @__PURE__ */ new Date(), panelCommon.dateFnsOptions.value);
    if (isValid$1(date)) {
      if (props.value === null) {
        panelCommon.doUpdateValue(getTime(sanitizeValue(Date.now())), props.panel);
      } else if (!Array.isArray(props.value)) {
        const newDateTime = set(props.value, {
          year: getYear(date),
          month: getMonth(date),
          date: getDate(date)
        });
        panelCommon.doUpdateValue(getTime(sanitizeValue(getTime(newDateTime))), props.panel);
      }
    } else {
      dateInputValueRef.value = value;
    }
  }
  function handleDateInputBlur() {
    const date = strictParse(dateInputValueRef.value, mergedDateFormatRef.value, /* @__PURE__ */ new Date(), panelCommon.dateFnsOptions.value);
    if (isValid$1(date)) {
      if (props.value === null) {
        panelCommon.doUpdateValue(getTime(sanitizeValue(Date.now())), false);
      } else if (!Array.isArray(props.value)) {
        const newDateTime = set(props.value, {
          year: getYear(date),
          month: getMonth(date),
          date: getDate(date)
        });
        panelCommon.doUpdateValue(getTime(sanitizeValue(getTime(newDateTime))), false);
      }
    } else {
      deriveDateInputValue();
    }
  }
  function clearSelectedDateTime() {
    panelCommon.doUpdateValue(null, true);
    dateInputValueRef.value = "";
    panelCommon.doClose(true);
    panelCommon.handleClearClick();
  }
  function handleNowClick() {
    panelCommon.doUpdateValue(getTime(sanitizeValue(Date.now())), true);
    const now = Date.now();
    calendarValueRef.value = now;
    panelCommon.doClose(true);
    if (props.panel && (type === "month" || type === "quarter" || type === "year")) {
      panelCommon.disableTransitionOneTick();
      justifyColumnsScrollState(now);
    }
  }
  const hoveredWeekRef = ref(null);
  function handleDateMouseEnter(dateItem2) {
    if (dateItem2.type === "date" && type === "week") {
      hoveredWeekRef.value = sanitizeValue(getTime(dateItem2.ts));
    }
  }
  function isWeekHovered(dateItem2) {
    if (dateItem2.type === "date" && type === "week") {
      return sanitizeValue(getTime(dateItem2.ts)) === hoveredWeekRef.value;
    }
    return false;
  }
  function handleDateClick(dateItem2) {
    if (mergedIsDateDisabled(dateItem2.ts, dateItem2.type === "date" ? {
      type: "date",
      year: dateItem2.dateObject.year,
      month: dateItem2.dateObject.month,
      date: dateItem2.dateObject.date
    } : dateItem2.type === "month" ? {
      type: "month",
      year: dateItem2.dateObject.year,
      month: dateItem2.dateObject.month
    } : dateItem2.type === "year" ? {
      type: "year",
      year: dateItem2.dateObject.year
    } : {
      type: "quarter",
      year: dateItem2.dateObject.year,
      quarter: dateItem2.dateObject.quarter
    })) {
      return;
    }
    let newValue;
    if (props.value !== null && !Array.isArray(props.value)) {
      newValue = props.value;
    } else {
      newValue = Date.now();
    }
    if (type === "datetime" && props.defaultTime !== null && !Array.isArray(props.defaultTime)) {
      const time2 = getDefaultTime(props.defaultTime);
      if (time2) {
        newValue = getTime(set(newValue, time2));
      }
    }
    newValue = getTime(dateItem2.type === "quarter" && dateItem2.dateObject.quarter ? setQuarter(setYear(newValue, dateItem2.dateObject.year), dateItem2.dateObject.quarter) : set(newValue, dateItem2.dateObject));
    panelCommon.doUpdateValue(sanitizeValue(newValue), props.panel || type === "date" || type === "week" || type === "year");
    switch (type) {
      case "date":
      case "week":
        panelCommon.doClose();
        break;
      case "year":
        if (props.panel) {
          panelCommon.disableTransitionOneTick();
        }
        panelCommon.doClose();
        break;
      case "month":
        panelCommon.disableTransitionOneTick();
        justifyColumnsScrollState(newValue);
        break;
      case "quarter":
        panelCommon.disableTransitionOneTick();
        justifyColumnsScrollState(newValue);
        break;
    }
  }
  function handleQuickMonthClick(dateItem2, updatePanelValue) {
    let newValue;
    if (props.value !== null && !Array.isArray(props.value)) {
      newValue = props.value;
    } else {
      newValue = Date.now();
    }
    newValue = getTime(dateItem2.type === "month" ? setMonth(newValue, dateItem2.dateObject.month) : setYear(newValue, dateItem2.dateObject.year));
    updatePanelValue(newValue);
    justifyColumnsScrollState(newValue);
  }
  function onUpdateCalendarValue(value) {
    calendarValueRef.value = value;
  }
  function deriveDateInputValue(time2) {
    if (props.value === null || Array.isArray(props.value)) {
      dateInputValueRef.value = "";
      return;
    }
    if (time2 === void 0) {
      time2 = props.value;
    }
    dateInputValueRef.value = format$3(time2, mergedDateFormatRef.value, panelCommon.dateFnsOptions.value);
  }
  function handleConfirmClick() {
    if (validation.isDateInvalid.value || validation.isTimeInvalid.value) {
      return;
    }
    panelCommon.doConfirm();
    closeCalendar();
  }
  function closeCalendar() {
    if (props.active) {
      panelCommon.doClose();
    }
  }
  function nextYear() {
    var _a2;
    calendarValueRef.value = getTime(addYears(calendarValueRef.value, 1));
    (_a2 = props.onNextYear) === null || _a2 === void 0 ? void 0 : _a2.call(props);
  }
  function prevYear() {
    var _a2;
    calendarValueRef.value = getTime(addYears(calendarValueRef.value, -1));
    (_a2 = props.onPrevYear) === null || _a2 === void 0 ? void 0 : _a2.call(props);
  }
  function nextMonth() {
    var _a2;
    calendarValueRef.value = getTime(addMonths(calendarValueRef.value, 1));
    (_a2 = props.onNextMonth) === null || _a2 === void 0 ? void 0 : _a2.call(props);
  }
  function prevMonth() {
    var _a2;
    calendarValueRef.value = getTime(addMonths(calendarValueRef.value, -1));
    (_a2 = props.onPrevMonth) === null || _a2 === void 0 ? void 0 : _a2.call(props);
  }
  function virtualListContainer() {
    const {
      value
    } = yearVlRef;
    return (value === null || value === void 0 ? void 0 : value.listElRef) || null;
  }
  function virtualListContent() {
    const {
      value
    } = yearVlRef;
    return (value === null || value === void 0 ? void 0 : value.itemsElRef) || null;
  }
  function handleVirtualListScroll(e2) {
    var _a2;
    (_a2 = yearScrollbarRef.value) === null || _a2 === void 0 ? void 0 : _a2.sync();
  }
  function handleTimePickerChange(value) {
    if (value === null)
      return;
    panelCommon.doUpdateValue(value, props.panel);
  }
  function handleSingleShortcutMouseenter(shortcut) {
    panelCommon.cachePendingValue();
    const shortcutValue = panelCommon.getShortcutValue(shortcut);
    if (typeof shortcutValue !== "number")
      return;
    panelCommon.doUpdateValue(shortcutValue, false);
  }
  function handleSingleShortcutClick(shortcut) {
    const shortcutValue = panelCommon.getShortcutValue(shortcut);
    if (typeof shortcutValue !== "number")
      return;
    panelCommon.doUpdateValue(shortcutValue, props.panel);
    panelCommon.clearPendingValue();
    handleConfirmClick();
  }
  function justifyColumnsScrollState(value) {
    const {
      value: mergedValue
    } = props;
    if (monthScrollbarRef.value) {
      const monthIndex = value === void 0 ? mergedValue === null ? getMonth(Date.now()) : getMonth(mergedValue) : getMonth(value);
      monthScrollbarRef.value.scrollTo({
        top: monthIndex * MONTH_ITEM_HEIGHT
      });
    }
    if (yearVlRef.value) {
      const yearIndex = (value === void 0 ? mergedValue === null ? getYear(Date.now()) : getYear(mergedValue) : getYear(value)) - START_YEAR;
      yearVlRef.value.scrollTo({
        top: yearIndex * MONTH_ITEM_HEIGHT
      });
    }
  }
  const childComponentRefs = {
    monthScrollbarRef,
    yearScrollbarRef,
    yearVlRef
  };
  return Object.assign(Object.assign(Object.assign(Object.assign({
    dateArray: dateArrayRef,
    monthArray: monthArrayRef,
    yearArray: yearArrayRef,
    quarterArray: quarterArrayRef,
    calendarYear: calendarYearRef,
    calendarMonth: calendarMonthRef,
    weekdays: weekdaysRef,
    mergedIsDateDisabled,
    nextYear,
    prevYear,
    nextMonth,
    prevMonth,
    handleNowClick,
    handleConfirmClick,
    handleSingleShortcutMouseenter,
    handleSingleShortcutClick
  }, validation), panelCommon), childComponentRefs), {
    // datetime only
    handleDateClick,
    handleDateInputBlur,
    handleDateInput,
    handleDateMouseEnter,
    isWeekHovered,
    handleTimePickerChange,
    clearSelectedDateTime,
    virtualListContainer,
    virtualListContent,
    handleVirtualListScroll,
    timePickerSize: panelCommon.timePickerSize,
    dateInputValue: dateInputValueRef,
    datePickerSlots,
    handleQuickMonthClick,
    justifyColumnsScrollState,
    calendarValue: calendarValueRef,
    onUpdateCalendarValue
  });
}
const MonthPanel = defineComponent({
  name: "MonthPanel",
  props: Object.assign(Object.assign({}, useCalendarProps), {
    type: {
      type: String,
      required: true
    },
    // panelHeader prop
    useAsQuickJump: Boolean
  }),
  setup(props) {
    const useCalendarRef = useCalendar(props, props.type);
    const {
      dateLocaleRef
    } = useLocale("DatePicker");
    const getRenderContent = (item) => {
      switch (item.type) {
        case "year":
          return getYearString(item.dateObject.year, item.yearFormat, dateLocaleRef.value.locale);
        case "month":
          return getMonthString(item.dateObject.month, item.monthFormat, dateLocaleRef.value.locale);
        case "quarter":
          return getQuarterString(item.dateObject.quarter, item.quarterFormat, dateLocaleRef.value.locale);
      }
    };
    const {
      useAsQuickJump
    } = props;
    const renderItem = (item, i2, mergedClsPrefix) => {
      const {
        mergedIsDateDisabled,
        handleDateClick,
        handleQuickMonthClick
      } = useCalendarRef;
      return h("div", {
        "data-n-date": true,
        key: i2,
        class: [`${mergedClsPrefix}-date-panel-month-calendar__picker-col-item`, item.isCurrent && `${mergedClsPrefix}-date-panel-month-calendar__picker-col-item--current`, item.selected && `${mergedClsPrefix}-date-panel-month-calendar__picker-col-item--selected`, !useAsQuickJump && mergedIsDateDisabled(item.ts, item.type === "year" ? {
          type: "year",
          year: item.dateObject.year
        } : item.type === "month" ? {
          type: "month",
          year: item.dateObject.year,
          month: item.dateObject.month
        } : item.type === "quarter" ? {
          type: "month",
          year: item.dateObject.year,
          month: item.dateObject.quarter
        } : null) && `${mergedClsPrefix}-date-panel-month-calendar__picker-col-item--disabled`],
        onClick: () => {
          useAsQuickJump ? handleQuickMonthClick(item, (value) => {
            props.onUpdateValue(value, false);
          }) : handleDateClick(item);
        }
      }, getRenderContent(item));
    };
    return Object.assign(Object.assign({}, useCalendarRef), {
      renderItem
    });
  },
  render() {
    const {
      mergedClsPrefix,
      mergedTheme,
      shortcuts,
      actions,
      renderItem,
      type,
      onRender
    } = this;
    onRender === null || onRender === void 0 ? void 0 : onRender();
    return h("div", {
      ref: "selfRef",
      tabindex: 0,
      class: [`${mergedClsPrefix}-date-panel`, `${mergedClsPrefix}-date-panel--month`, !this.panel && `${mergedClsPrefix}-date-panel--shadow`, this.themeClass],
      onFocus: this.handlePanelFocus,
      onKeydown: this.handlePanelKeyDown
    }, h("div", {
      class: `${mergedClsPrefix}-date-panel-month-calendar`
    }, h(Scrollbar, {
      ref: "yearScrollbarRef",
      class: `${mergedClsPrefix}-date-panel-month-calendar__picker-col`,
      theme: mergedTheme.peers.Scrollbar,
      themeOverrides: mergedTheme.peerOverrides.Scrollbar,
      container: this.virtualListContainer,
      content: this.virtualListContent,
      horizontalRailStyle: {
        zIndex: 1
      },
      verticalRailStyle: {
        zIndex: 1
      }
    }, {
      default: () => h(VVirtualList, {
        ref: "yearVlRef",
        items: this.yearArray,
        itemSize: MONTH_ITEM_HEIGHT,
        showScrollbar: false,
        keyField: "ts",
        onScroll: this.handleVirtualListScroll,
        paddingBottom: 4
      }, {
        default: ({
          item,
          index
        }) => {
          return renderItem(item, index, mergedClsPrefix);
        }
      })
    }), type === "month" || type === "quarter" ? h("div", {
      class: `${mergedClsPrefix}-date-panel-month-calendar__picker-col`
    }, h(Scrollbar, {
      ref: "monthScrollbarRef",
      theme: mergedTheme.peers.Scrollbar,
      themeOverrides: mergedTheme.peerOverrides.Scrollbar
    }, {
      default: () => [(type === "month" ? this.monthArray : this.quarterArray).map((item, i2) => renderItem(item, i2, mergedClsPrefix)), h("div", {
        class: `${mergedClsPrefix}-date-panel-${type}-calendar__padding`
      })]
    })) : null), this.datePickerSlots.footer ? h("div", {
      class: `${mergedClsPrefix}-date-panel-footer`
    }, {
      default: this.datePickerSlots.footer
    }) : null, (actions === null || actions === void 0 ? void 0 : actions.length) || shortcuts ? h("div", {
      class: `${mergedClsPrefix}-date-panel-actions`
    }, h("div", {
      class: `${mergedClsPrefix}-date-panel-actions__prefix`
    }, shortcuts && Object.keys(shortcuts).map((key) => {
      const shortcut = shortcuts[key];
      return Array.isArray(shortcut) ? null : h(XButton, {
        size: "tiny",
        onMouseenter: () => {
          this.handleSingleShortcutMouseenter(shortcut);
        },
        onClick: () => {
          this.handleSingleShortcutClick(shortcut);
        },
        onMouseleave: () => {
          this.handleShortcutMouseleave();
        }
      }, {
        default: () => key
      });
    })), h("div", {
      class: `${mergedClsPrefix}-date-panel-actions__suffix`
    }, (actions === null || actions === void 0 ? void 0 : actions.includes("clear")) ? h(Button, {
      theme: mergedTheme.peers.Button,
      themeOverrides: mergedTheme.peerOverrides.Button,
      size: "tiny",
      onClick: this.handleClearClick
    }, {
      default: () => this.locale.clear
    }) : null, (actions === null || actions === void 0 ? void 0 : actions.includes("now")) ? h(Button, {
      theme: mergedTheme.peers.Button,
      themeOverrides: mergedTheme.peerOverrides.Button,
      size: "tiny",
      onClick: this.handleNowClick
    }, {
      default: () => this.locale.now
    }) : null, (actions === null || actions === void 0 ? void 0 : actions.includes("confirm")) ? h(Button, {
      theme: mergedTheme.peers.Button,
      themeOverrides: mergedTheme.peerOverrides.Button,
      size: "tiny",
      type: "primary",
      disabled: this.isDateInvalid,
      onClick: this.handleConfirmClick
    }, {
      default: () => this.locale.confirm
    }) : null)) : null, h(FocusDetector, {
      onFocus: this.handleFocusDetectorFocus
    }));
  }
});
const PanelHeader = defineComponent({
  props: {
    mergedClsPrefix: {
      type: String,
      required: true
    },
    value: Number,
    monthBeforeYear: {
      type: Boolean,
      required: true
    },
    calendarMonth: {
      type: String,
      required: true
    },
    calendarYear: {
      type: String,
      required: true
    },
    onUpdateValue: {
      type: Function,
      required: true
    }
  },
  setup() {
    const triggerRef = ref(null);
    const monthPanelRef = ref(null);
    const showRef = ref(false);
    function handleClickOutside(e2) {
      var _a;
      if (showRef.value && !((_a = triggerRef.value) === null || _a === void 0 ? void 0 : _a.contains(getPreciseEventTarget(e2)))) {
        showRef.value = false;
      }
    }
    function handleHeaderClick() {
      showRef.value = !showRef.value;
    }
    return {
      show: showRef,
      triggerRef,
      monthPanelRef,
      handleHeaderClick,
      handleClickOutside
    };
  },
  render() {
    const {
      handleClickOutside,
      mergedClsPrefix
    } = this;
    return h("div", {
      class: `${mergedClsPrefix}-date-panel-month__month-year`,
      ref: "triggerRef"
    }, h(Binder, null, {
      default: () => [h(VTarget, null, {
        default: () => h("div", {
          class: [`${mergedClsPrefix}-date-panel-month__text`, this.show && `${mergedClsPrefix}-date-panel-month__text--active`],
          onClick: this.handleHeaderClick
        }, this.monthBeforeYear ? [this.calendarMonth, " ", this.calendarYear] : [this.calendarYear, " ", this.calendarMonth])
      }), h(VFollower, {
        show: this.show,
        teleportDisabled: true
      }, {
        default: () => h(Transition, {
          name: "fade-in-scale-up-transition",
          appear: true
        }, {
          default: () => this.show ? withDirectives(h(MonthPanel, {
            ref: "monthPanelRef",
            onUpdateValue: this.onUpdateValue,
            actions: [],
            // month and year click show month type
            type: "month",
            key: "month",
            useAsQuickJump: true,
            value: this.value
          }), [[clickoutside, handleClickOutside, void 0, {
            capture: true
          }]]) : null
        })
      })]
    }));
  }
});
const DatetimePanel = defineComponent({
  name: "DateTimePanel",
  props: useCalendarProps,
  setup(props) {
    return useCalendar(props, "datetime");
  },
  render() {
    var _a, _b, _c, _d;
    const {
      mergedClsPrefix,
      mergedTheme,
      shortcuts,
      timePickerProps: timePickerProps2,
      onRender,
      $slots
    } = this;
    onRender === null || onRender === void 0 ? void 0 : onRender();
    return h("div", {
      ref: "selfRef",
      tabindex: 0,
      class: [`${mergedClsPrefix}-date-panel`, `${mergedClsPrefix}-date-panel--datetime`, !this.panel && `${mergedClsPrefix}-date-panel--shadow`, this.themeClass],
      onKeydown: this.handlePanelKeyDown,
      onFocus: this.handlePanelFocus
    }, h("div", {
      class: `${mergedClsPrefix}-date-panel-header`
    }, h(__nuxt_component_3, {
      value: this.dateInputValue,
      theme: mergedTheme.peers.Input,
      themeOverrides: mergedTheme.peerOverrides.Input,
      stateful: false,
      size: this.timePickerSize,
      class: `${mergedClsPrefix}-date-panel-date-input`,
      textDecoration: this.isDateInvalid ? "line-through" : "",
      placeholder: this.locale.selectDate,
      onBlur: this.handleDateInputBlur,
      onUpdateValue: this.handleDateInput
    }), h(__nuxt_component_8, Object.assign({
      size: this.timePickerSize,
      placeholder: this.locale.selectTime,
      format: this.timerPickerFormat
    }, Array.isArray(timePickerProps2) ? void 0 : timePickerProps2, {
      showIcon: false,
      to: false,
      theme: mergedTheme.peers.TimePicker,
      themeOverrides: mergedTheme.peerOverrides.TimePicker,
      value: Array.isArray(this.value) ? null : this.value,
      isHourDisabled: this.isHourDisabled,
      isMinuteDisabled: this.isMinuteDisabled,
      isSecondDisabled: this.isSecondDisabled,
      onUpdateValue: this.handleTimePickerChange,
      stateful: false
    }))), h("div", {
      class: `${mergedClsPrefix}-date-panel-calendar`
    }, h("div", {
      class: `${mergedClsPrefix}-date-panel-month`
    }, h("div", {
      class: `${mergedClsPrefix}-date-panel-month__fast-prev`,
      onClick: this.prevYear
    }, resolveSlot($slots["prev-year"], () => [h(FastBackwardIcon, null)])), h("div", {
      class: `${mergedClsPrefix}-date-panel-month__prev`,
      onClick: this.prevMonth
    }, resolveSlot($slots["prev-month"], () => [h(BackwardIcon, null)])), h(PanelHeader, {
      monthBeforeYear: this.locale.monthBeforeYear,
      value: this.calendarValue,
      onUpdateValue: this.onUpdateCalendarValue,
      mergedClsPrefix,
      calendarMonth: this.calendarMonth,
      calendarYear: this.calendarYear
    }), h("div", {
      class: `${mergedClsPrefix}-date-panel-month__next`,
      onClick: this.nextMonth
    }, resolveSlot($slots["next-month"], () => [h(ForwardIcon, null)])), h("div", {
      class: `${mergedClsPrefix}-date-panel-month__fast-next`,
      onClick: this.nextYear
    }, resolveSlot($slots["next-year"], () => [h(FastForwardIcon, null)]))), h("div", {
      class: `${mergedClsPrefix}-date-panel-weekdays`
    }, this.weekdays.map((weekday) => h("div", {
      key: weekday,
      class: `${mergedClsPrefix}-date-panel-weekdays__day`
    }, weekday))), h("div", {
      class: `${mergedClsPrefix}-date-panel-dates`
    }, this.dateArray.map((dateItem2, i2) => h("div", {
      "data-n-date": true,
      key: i2,
      class: [`${mergedClsPrefix}-date-panel-date`, {
        [`${mergedClsPrefix}-date-panel-date--current`]: dateItem2.isCurrentDate,
        [`${mergedClsPrefix}-date-panel-date--selected`]: dateItem2.selected,
        [`${mergedClsPrefix}-date-panel-date--excluded`]: !dateItem2.inCurrentMonth,
        [`${mergedClsPrefix}-date-panel-date--disabled`]: this.mergedIsDateDisabled(dateItem2.ts, {
          type: "date",
          year: dateItem2.dateObject.year,
          month: dateItem2.dateObject.month,
          date: dateItem2.dateObject.date
        })
      }],
      onClick: () => {
        this.handleDateClick(dateItem2);
      }
    }, h("div", {
      class: `${mergedClsPrefix}-date-panel-date__trigger`
    }), dateItem2.dateObject.date, dateItem2.isCurrentDate ? h("div", {
      class: `${mergedClsPrefix}-date-panel-date__sup`
    }) : null)))), this.datePickerSlots.footer ? h("div", {
      class: `${mergedClsPrefix}-date-panel-footer`
    }, this.datePickerSlots.footer()) : null, ((_a = this.actions) === null || _a === void 0 ? void 0 : _a.length) || shortcuts ? h("div", {
      class: `${mergedClsPrefix}-date-panel-actions`
    }, h("div", {
      class: `${mergedClsPrefix}-date-panel-actions__prefix`
    }, shortcuts && Object.keys(shortcuts).map((key) => {
      const shortcut = shortcuts[key];
      return Array.isArray(shortcut) ? null : h(XButton, {
        size: "tiny",
        onMouseenter: () => {
          this.handleSingleShortcutMouseenter(shortcut);
        },
        onClick: () => {
          this.handleSingleShortcutClick(shortcut);
        },
        onMouseleave: () => {
          this.handleShortcutMouseleave();
        }
      }, {
        default: () => key
      });
    })), h("div", {
      class: `${mergedClsPrefix}-date-panel-actions__suffix`
    }, ((_b = this.actions) === null || _b === void 0 ? void 0 : _b.includes("clear")) ? h(Button, {
      theme: mergedTheme.peers.Button,
      themeOverrides: mergedTheme.peerOverrides.Button,
      size: "tiny",
      onClick: this.clearSelectedDateTime
    }, {
      default: () => this.locale.clear
    }) : null, ((_c = this.actions) === null || _c === void 0 ? void 0 : _c.includes("now")) ? h(Button, {
      theme: mergedTheme.peers.Button,
      themeOverrides: mergedTheme.peerOverrides.Button,
      size: "tiny",
      onClick: this.handleNowClick
    }, {
      default: () => this.locale.now
    }) : null, ((_d = this.actions) === null || _d === void 0 ? void 0 : _d.includes("confirm")) ? h(Button, {
      theme: mergedTheme.peers.Button,
      themeOverrides: mergedTheme.peerOverrides.Button,
      size: "tiny",
      type: "primary",
      disabled: this.isDateInvalid,
      onClick: this.handleConfirmClick
    }, {
      default: () => this.locale.confirm
    }) : null)) : null, h(FocusDetector, {
      onFocus: this.handleFocusDetectorFocus
    }));
  }
});
const useDualCalendarProps = Object.assign(Object.assign({}, usePanelCommonProps), {
  defaultCalendarStartTime: Number,
  defaultCalendarEndTime: Number,
  bindCalendarMonths: Boolean,
  actions: {
    type: Array,
    default: () => ["clear", "confirm"]
  }
});
function useDualCalendar(props, type) {
  var _a, _b;
  const {
    isDateDisabledRef,
    isStartHourDisabledRef,
    isEndHourDisabledRef,
    isStartMinuteDisabledRef,
    isEndMinuteDisabledRef,
    isStartSecondDisabledRef,
    isEndSecondDisabledRef,
    isStartDateInvalidRef,
    isEndDateInvalidRef,
    isStartTimeInvalidRef,
    isEndTimeInvalidRef,
    isStartValueInvalidRef,
    isEndValueInvalidRef,
    isRangeInvalidRef,
    localeRef,
    rangesRef,
    closeOnSelectRef,
    updateValueOnCloseRef,
    firstDayOfWeekRef,
    datePickerSlots,
    monthFormatRef,
    yearFormatRef,
    quarterFormatRef
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  } = inject(datePickerInjectionKey);
  const validation = {
    isDateDisabled: isDateDisabledRef,
    isStartHourDisabled: isStartHourDisabledRef,
    isEndHourDisabled: isEndHourDisabledRef,
    isStartMinuteDisabled: isStartMinuteDisabledRef,
    isEndMinuteDisabled: isEndMinuteDisabledRef,
    isStartSecondDisabled: isStartSecondDisabledRef,
    isEndSecondDisabled: isEndSecondDisabledRef,
    isStartDateInvalid: isStartDateInvalidRef,
    isEndDateInvalid: isEndDateInvalidRef,
    isStartTimeInvalid: isStartTimeInvalidRef,
    isEndTimeInvalid: isEndTimeInvalidRef,
    isStartValueInvalid: isStartValueInvalidRef,
    isEndValueInvalid: isEndValueInvalidRef,
    isRangeInvalid: isRangeInvalidRef
  };
  const panelCommon = usePanelCommon(props);
  const startDatesElRef = ref(null);
  const endDatesElRef = ref(null);
  const startYearScrollbarRef = ref(null);
  const endYearScrollbarRef = ref(null);
  const startYearVlRef = ref(null);
  const endYearVlRef = ref(null);
  const startMonthScrollbarRef = ref(null);
  const endMonthScrollbarRef = ref(null);
  const {
    value
  } = props;
  const defaultCalendarStartTime = (_a = props.defaultCalendarStartTime) !== null && _a !== void 0 ? _a : Array.isArray(value) && typeof value[0] === "number" ? value[0] : Date.now();
  const startCalendarDateTimeRef = ref(defaultCalendarStartTime);
  const endCalendarDateTimeRef = ref((_b = props.defaultCalendarEndTime) !== null && _b !== void 0 ? _b : Array.isArray(value) && typeof value[1] === "number" ? value[1] : getTime(addMonths(defaultCalendarStartTime, 1)));
  adjustCalendarTimes(true);
  const nowRef = ref(Date.now());
  const isSelectingRef = ref(false);
  const memorizedStartDateTimeRef = ref(0);
  const mergedDateFormatRef = computed(() => props.dateFormat || localeRef.value.dateFormat);
  const startDateInput = ref(Array.isArray(value) ? format$3(value[0], mergedDateFormatRef.value, panelCommon.dateFnsOptions.value) : "");
  const endDateInputRef = ref(Array.isArray(value) ? format$3(value[1], mergedDateFormatRef.value, panelCommon.dateFnsOptions.value) : "");
  const selectingPhaseRef = computed(() => {
    if (isSelectingRef.value)
      return "end";
    else
      return "start";
  });
  const startDateArrayRef = computed(() => {
    var _a2;
    return dateArray(startCalendarDateTimeRef.value, props.value, nowRef.value, (_a2 = firstDayOfWeekRef.value) !== null && _a2 !== void 0 ? _a2 : localeRef.value.firstDayOfWeek);
  });
  const endDateArrayRef = computed(() => {
    var _a2;
    return dateArray(endCalendarDateTimeRef.value, props.value, nowRef.value, (_a2 = firstDayOfWeekRef.value) !== null && _a2 !== void 0 ? _a2 : localeRef.value.firstDayOfWeek);
  });
  const weekdaysRef = computed(() => {
    return startDateArrayRef.value.slice(0, 7).map((dateItem2) => {
      const {
        ts
      } = dateItem2;
      return format$3(ts, localeRef.value.dayFormat, panelCommon.dateFnsOptions.value);
    });
  });
  const startCalendarMonthRef = computed(() => {
    return format$3(startCalendarDateTimeRef.value, localeRef.value.monthFormat, panelCommon.dateFnsOptions.value);
  });
  const endCalendarMonthRef = computed(() => {
    return format$3(endCalendarDateTimeRef.value, localeRef.value.monthFormat, panelCommon.dateFnsOptions.value);
  });
  const startCalendarYearRef = computed(() => {
    return format$3(startCalendarDateTimeRef.value, localeRef.value.yearFormat, panelCommon.dateFnsOptions.value);
  });
  const endCalendarYearRef = computed(() => {
    return format$3(endCalendarDateTimeRef.value, localeRef.value.yearFormat, panelCommon.dateFnsOptions.value);
  });
  const startTimeValueRef = computed(() => {
    const {
      value: value2
    } = props;
    if (Array.isArray(value2))
      return value2[0];
    return null;
  });
  const endTimeValueRef = computed(() => {
    const {
      value: value2
    } = props;
    if (Array.isArray(value2))
      return value2[1];
    return null;
  });
  const shortcutsRef = computed(() => {
    const {
      shortcuts
    } = props;
    return shortcuts || rangesRef.value;
  });
  const startYearArrayRef = computed(() => {
    return yearArray(pluckValueFromRange(props.value, "start"), nowRef.value, {
      yearFormat: yearFormatRef.value
    });
  });
  const endYearArrayRef = computed(() => {
    return yearArray(pluckValueFromRange(props.value, "end"), nowRef.value, {
      yearFormat: yearFormatRef.value
    });
  });
  const startQuarterArrayRef = computed(() => {
    const startValue = pluckValueFromRange(props.value, "start");
    return quarterArray(startValue !== null && startValue !== void 0 ? startValue : Date.now(), startValue, nowRef.value, {
      quarterFormat: quarterFormatRef.value
    });
  });
  const endQuarterArrayRef = computed(() => {
    const endValue = pluckValueFromRange(props.value, "end");
    return quarterArray(endValue !== null && endValue !== void 0 ? endValue : Date.now(), endValue, nowRef.value, {
      quarterFormat: quarterFormatRef.value
    });
  });
  const startMonthArrayRef = computed(() => {
    const startValue = pluckValueFromRange(props.value, "start");
    return monthArray(startValue !== null && startValue !== void 0 ? startValue : Date.now(), startValue, nowRef.value, {
      monthFormat: monthFormatRef.value
    });
  });
  const endMonthArrayRef = computed(() => {
    const endValue = pluckValueFromRange(props.value, "end");
    return monthArray(endValue !== null && endValue !== void 0 ? endValue : Date.now(), endValue, nowRef.value, {
      monthFormat: monthFormatRef.value
    });
  });
  watch(computed(() => props.value), (value2) => {
    if (value2 !== null && Array.isArray(value2)) {
      const [startMoment, endMoment] = value2;
      startDateInput.value = format$3(startMoment, mergedDateFormatRef.value, panelCommon.dateFnsOptions.value);
      endDateInputRef.value = format$3(endMoment, mergedDateFormatRef.value, panelCommon.dateFnsOptions.value);
      if (!isSelectingRef.value) {
        syncCalendarTimeWithValue(value2);
      }
    } else {
      startDateInput.value = "";
      endDateInputRef.value = "";
    }
  });
  function handleCalendarChange(value2, oldValue) {
    if (type === "daterange" || type === "datetimerange") {
      if (getYear(value2) !== getYear(oldValue) || getMonth(value2) !== getMonth(oldValue)) {
        panelCommon.disableTransitionOneTick();
      }
    }
  }
  watch(startCalendarDateTimeRef, handleCalendarChange);
  watch(endCalendarDateTimeRef, handleCalendarChange);
  function adjustCalendarTimes(byStartCalendarTime) {
    const startTime = startOfMonth(startCalendarDateTimeRef.value);
    const endTime = startOfMonth(endCalendarDateTimeRef.value);
    if (props.bindCalendarMonths || startTime >= endTime) {
      if (byStartCalendarTime) {
        endCalendarDateTimeRef.value = getTime(addMonths(startTime, 1));
      } else {
        startCalendarDateTimeRef.value = getTime(addMonths(endTime, -1));
      }
    }
  }
  function startCalendarNextYear() {
    startCalendarDateTimeRef.value = getTime(addMonths(startCalendarDateTimeRef.value, 12));
    adjustCalendarTimes(true);
  }
  function startCalendarPrevYear() {
    startCalendarDateTimeRef.value = getTime(addMonths(startCalendarDateTimeRef.value, -12));
    adjustCalendarTimes(true);
  }
  function startCalendarNextMonth() {
    startCalendarDateTimeRef.value = getTime(addMonths(startCalendarDateTimeRef.value, 1));
    adjustCalendarTimes(true);
  }
  function startCalendarPrevMonth() {
    startCalendarDateTimeRef.value = getTime(addMonths(startCalendarDateTimeRef.value, -1));
    adjustCalendarTimes(true);
  }
  function endCalendarNextYear() {
    endCalendarDateTimeRef.value = getTime(addMonths(endCalendarDateTimeRef.value, 12));
    adjustCalendarTimes(false);
  }
  function endCalendarPrevYear() {
    endCalendarDateTimeRef.value = getTime(addMonths(endCalendarDateTimeRef.value, -12));
    adjustCalendarTimes(false);
  }
  function endCalendarNextMonth() {
    endCalendarDateTimeRef.value = getTime(addMonths(endCalendarDateTimeRef.value, 1));
    adjustCalendarTimes(false);
  }
  function endCalendarPrevMonth() {
    endCalendarDateTimeRef.value = getTime(addMonths(endCalendarDateTimeRef.value, -1));
    adjustCalendarTimes(false);
  }
  function onUpdateStartCalendarValue(value2) {
    startCalendarDateTimeRef.value = value2;
    adjustCalendarTimes(true);
  }
  function onUpdateEndCalendarValue(value2) {
    endCalendarDateTimeRef.value = value2;
    adjustCalendarTimes(false);
  }
  function mergedIsDateDisabled(ts) {
    const isDateDisabled = isDateDisabledRef.value;
    if (!isDateDisabled)
      return false;
    if (!Array.isArray(props.value)) {
      return isDateDisabled(ts, "start", null);
    }
    if (selectingPhaseRef.value === "start") {
      return isDateDisabled(ts, "start", null);
    } else {
      const {
        value: memorizedStartDateTime
      } = memorizedStartDateTimeRef;
      if (ts < memorizedStartDateTimeRef.value) {
        return isDateDisabled(ts, "start", [memorizedStartDateTime, memorizedStartDateTime]);
      } else {
        return isDateDisabled(ts, "end", [memorizedStartDateTime, memorizedStartDateTime]);
      }
    }
  }
  function syncCalendarTimeWithValue(value2) {
    if (value2 === null)
      return;
    const [startMoment, endMoment] = value2;
    startCalendarDateTimeRef.value = startMoment;
    if (startOfMonth(endMoment) <= startOfMonth(startMoment)) {
      endCalendarDateTimeRef.value = getTime(startOfMonth(addMonths(startMoment, 1)));
    } else {
      endCalendarDateTimeRef.value = getTime(startOfMonth(endMoment));
    }
  }
  function handleDateClick(dateItem2) {
    if (!isSelectingRef.value) {
      isSelectingRef.value = true;
      memorizedStartDateTimeRef.value = dateItem2.ts;
      changeStartEndTime(dateItem2.ts, dateItem2.ts, "done");
    } else {
      isSelectingRef.value = false;
      const {
        value: value2
      } = props;
      if (props.panel && Array.isArray(value2)) {
        changeStartEndTime(value2[0], value2[1], "done");
      } else {
        if (closeOnSelectRef.value && type === "daterange") {
          if (updateValueOnCloseRef.value) {
            closeCalendar();
          } else {
            handleConfirmClick();
          }
        }
      }
    }
  }
  function handleDateMouseEnter(dateItem2) {
    if (isSelectingRef.value) {
      if (mergedIsDateDisabled(dateItem2.ts))
        return;
      if (dateItem2.ts >= memorizedStartDateTimeRef.value) {
        changeStartEndTime(memorizedStartDateTimeRef.value, dateItem2.ts, "wipPreview");
      } else {
        changeStartEndTime(dateItem2.ts, memorizedStartDateTimeRef.value, "wipPreview");
      }
    }
  }
  function handleConfirmClick() {
    if (isRangeInvalidRef.value) {
      return;
    }
    panelCommon.doConfirm();
    closeCalendar();
  }
  function closeCalendar() {
    isSelectingRef.value = false;
    if (props.active) {
      panelCommon.doClose();
    }
  }
  function changeStartDateTime(time2) {
    if (typeof time2 !== "number") {
      time2 = getTime(time2);
    }
    if (props.value === null) {
      panelCommon.doUpdateValue([time2, time2], props.panel);
    } else if (Array.isArray(props.value)) {
      panelCommon.doUpdateValue([time2, Math.max(props.value[1], time2)], props.panel);
    }
  }
  function changeEndDateTime(time2) {
    if (typeof time2 !== "number") {
      time2 = getTime(time2);
    }
    if (props.value === null) {
      panelCommon.doUpdateValue([time2, time2], props.panel);
    } else if (Array.isArray(props.value)) {
      panelCommon.doUpdateValue([Math.min(props.value[0], time2), time2], props.panel);
    }
  }
  function changeStartEndTime(startTime, endTime, source) {
    if (typeof startTime !== "number") {
      startTime = getTime(startTime);
    }
    if (source !== "shortcutPreview") {
      let startDefaultTime;
      let endDefaultTime;
      if (type === "datetimerange") {
        const {
          defaultTime
        } = props;
        if (Array.isArray(defaultTime)) {
          startDefaultTime = getDefaultTime(defaultTime[0]);
          endDefaultTime = getDefaultTime(defaultTime[1]);
        } else {
          startDefaultTime = getDefaultTime(defaultTime);
          endDefaultTime = startDefaultTime;
        }
      }
      if (startDefaultTime) {
        startTime = getTime(set(startTime, startDefaultTime));
      }
      if (endDefaultTime) {
        endTime = getTime(set(endTime, endDefaultTime));
      }
    }
    panelCommon.doUpdateValue([startTime, endTime], props.panel && source === "done");
  }
  function sanitizeValue(datetime) {
    if (type === "datetimerange") {
      return getTime(startOfSecond(datetime));
    } else if (type === "monthrange") {
      return getTime(startOfMonth(datetime));
    } else {
      return getTime(startOfDay(datetime));
    }
  }
  function handleStartDateInput(value2) {
    const date = strictParse(value2, mergedDateFormatRef.value, /* @__PURE__ */ new Date(), panelCommon.dateFnsOptions.value);
    if (isValid$1(date)) {
      if (!props.value) {
        const newValue = set(/* @__PURE__ */ new Date(), {
          year: getYear(date),
          month: getMonth(date),
          date: getDate(date)
        });
        changeStartDateTime(sanitizeValue(getTime(newValue)));
      } else if (Array.isArray(props.value)) {
        const newValue = set(props.value[0], {
          year: getYear(date),
          month: getMonth(date),
          date: getDate(date)
        });
        changeStartDateTime(sanitizeValue(getTime(newValue)));
      }
    } else {
      startDateInput.value = value2;
    }
  }
  function handleEndDateInput(value2) {
    const date = strictParse(value2, mergedDateFormatRef.value, /* @__PURE__ */ new Date(), panelCommon.dateFnsOptions.value);
    if (isValid$1(date)) {
      if (props.value === null) {
        const newValue = set(/* @__PURE__ */ new Date(), {
          year: getYear(date),
          month: getMonth(date),
          date: getDate(date)
        });
        changeEndDateTime(sanitizeValue(getTime(newValue)));
      } else if (Array.isArray(props.value)) {
        const newValue = set(props.value[1], {
          year: getYear(date),
          month: getMonth(date),
          date: getDate(date)
        });
        changeEndDateTime(sanitizeValue(getTime(newValue)));
      }
    } else {
      endDateInputRef.value = value2;
    }
  }
  function handleStartDateInputBlur() {
    const date = strictParse(startDateInput.value, mergedDateFormatRef.value, /* @__PURE__ */ new Date(), panelCommon.dateFnsOptions.value);
    const {
      value: value2
    } = props;
    if (isValid$1(date)) {
      if (value2 === null) {
        const newValue = set(/* @__PURE__ */ new Date(), {
          year: getYear(date),
          month: getMonth(date),
          date: getDate(date)
        });
        changeStartDateTime(sanitizeValue(getTime(newValue)));
      } else if (Array.isArray(value2)) {
        const newValue = set(value2[0], {
          year: getYear(date),
          month: getMonth(date),
          date: getDate(date)
        });
        changeStartDateTime(sanitizeValue(getTime(newValue)));
      }
    } else {
      refreshDisplayDateString();
    }
  }
  function handleEndDateInputBlur() {
    const date = strictParse(endDateInputRef.value, mergedDateFormatRef.value, /* @__PURE__ */ new Date(), panelCommon.dateFnsOptions.value);
    const {
      value: value2
    } = props;
    if (isValid$1(date)) {
      if (value2 === null) {
        const newValue = set(/* @__PURE__ */ new Date(), {
          year: getYear(date),
          month: getMonth(date),
          date: getDate(date)
        });
        changeEndDateTime(sanitizeValue(getTime(newValue)));
      } else if (Array.isArray(value2)) {
        const newValue = set(value2[1], {
          year: getYear(date),
          month: getMonth(date),
          date: getDate(date)
        });
        changeEndDateTime(sanitizeValue(getTime(newValue)));
      }
    } else {
      refreshDisplayDateString();
    }
  }
  function refreshDisplayDateString(times) {
    const {
      value: value2
    } = props;
    if (value2 === null || !Array.isArray(value2)) {
      startDateInput.value = "";
      endDateInputRef.value = "";
      return;
    }
    if (times === void 0) {
      times = value2;
    }
    startDateInput.value = format$3(times[0], mergedDateFormatRef.value, panelCommon.dateFnsOptions.value);
    endDateInputRef.value = format$3(times[1], mergedDateFormatRef.value, panelCommon.dateFnsOptions.value);
  }
  function handleStartTimePickerChange(value2) {
    if (value2 === null)
      return;
    changeStartDateTime(value2);
  }
  function handleEndTimePickerChange(value2) {
    if (value2 === null)
      return;
    changeEndDateTime(value2);
  }
  function handleRangeShortcutMouseenter(shortcut) {
    panelCommon.cachePendingValue();
    const shortcutValue = panelCommon.getShortcutValue(shortcut);
    if (!Array.isArray(shortcutValue))
      return;
    changeStartEndTime(shortcutValue[0], shortcutValue[1], "shortcutPreview");
  }
  function handleRangeShortcutClick(shortcut) {
    const shortcutValue = panelCommon.getShortcutValue(shortcut);
    if (!Array.isArray(shortcutValue))
      return;
    changeStartEndTime(shortcutValue[0], shortcutValue[1], "done");
    panelCommon.clearPendingValue();
    handleConfirmClick();
  }
  function justifyColumnsScrollState(value2, type2) {
    const mergedValue = value2 === void 0 ? props.value : value2;
    if (value2 === void 0 || type2 === "start") {
      if (startMonthScrollbarRef.value) {
        const monthIndex = !Array.isArray(mergedValue) ? getMonth(Date.now()) : getMonth(mergedValue[0]);
        startMonthScrollbarRef.value.scrollTo({
          debounce: false,
          index: monthIndex,
          elSize: MONTH_ITEM_HEIGHT
        });
      }
      if (startYearVlRef.value) {
        const yearIndex = (!Array.isArray(mergedValue) ? getYear(Date.now()) : getYear(mergedValue[0])) - START_YEAR;
        startYearVlRef.value.scrollTo({
          index: yearIndex,
          debounce: false
        });
      }
    }
    if (value2 === void 0 || type2 === "end") {
      if (endMonthScrollbarRef.value) {
        const monthIndex = !Array.isArray(mergedValue) ? getMonth(Date.now()) : getMonth(mergedValue[1]);
        endMonthScrollbarRef.value.scrollTo({
          debounce: false,
          index: monthIndex,
          elSize: MONTH_ITEM_HEIGHT
        });
      }
      if (endYearVlRef.value) {
        const yearIndex = (!Array.isArray(mergedValue) ? getYear(Date.now()) : getYear(mergedValue[1])) - START_YEAR;
        endYearVlRef.value.scrollTo({
          index: yearIndex,
          debounce: false
        });
      }
    }
  }
  function handleColItemClick(dateItem2, clickType) {
    const {
      value: value2
    } = props;
    const noCurrentValue = !Array.isArray(value2);
    const itemTs = dateItem2.type === "year" && type !== "yearrange" ? noCurrentValue ? set(dateItem2.ts, {
      month: getMonth(type === "quarterrange" ? startOfQuarter(/* @__PURE__ */ new Date()) : /* @__PURE__ */ new Date())
    }).valueOf() : set(dateItem2.ts, {
      month: getMonth(type === "quarterrange" ? startOfQuarter(value2[clickType === "start" ? 0 : 1]) : value2[clickType === "start" ? 0 : 1])
    }).valueOf() : dateItem2.ts;
    if (noCurrentValue) {
      const partialValue = sanitizeValue(itemTs);
      const nextValue2 = [partialValue, partialValue];
      panelCommon.doUpdateValue(nextValue2, props.panel);
      justifyColumnsScrollState(nextValue2, "start");
      justifyColumnsScrollState(nextValue2, "end");
      panelCommon.disableTransitionOneTick();
      return;
    }
    const nextValue = [value2[0], value2[1]];
    let otherPartsChanged = false;
    if (clickType === "start") {
      nextValue[0] = sanitizeValue(itemTs);
      if (nextValue[0] > nextValue[1]) {
        nextValue[1] = nextValue[0];
        otherPartsChanged = true;
      }
    } else {
      nextValue[1] = sanitizeValue(itemTs);
      if (nextValue[0] > nextValue[1]) {
        nextValue[0] = nextValue[1];
        otherPartsChanged = true;
      }
    }
    panelCommon.doUpdateValue(nextValue, props.panel);
    switch (type) {
      case "monthrange":
      case "quarterrange":
        panelCommon.disableTransitionOneTick();
        if (otherPartsChanged) {
          justifyColumnsScrollState(nextValue, "start");
          justifyColumnsScrollState(nextValue, "end");
        } else {
          justifyColumnsScrollState(nextValue, clickType);
        }
        break;
      case "yearrange":
        panelCommon.disableTransitionOneTick();
        justifyColumnsScrollState(nextValue, "start");
        justifyColumnsScrollState(nextValue, "end");
    }
  }
  function handleStartYearVlScroll() {
    var _a2;
    (_a2 = startYearScrollbarRef.value) === null || _a2 === void 0 ? void 0 : _a2.sync();
  }
  function handleEndYearVlScroll() {
    var _a2;
    (_a2 = endYearScrollbarRef.value) === null || _a2 === void 0 ? void 0 : _a2.sync();
  }
  function virtualListContainer(type2) {
    var _a2, _b2;
    if (type2 === "start") {
      return ((_a2 = startYearVlRef.value) === null || _a2 === void 0 ? void 0 : _a2.listElRef) || null;
    } else {
      return ((_b2 = endYearVlRef.value) === null || _b2 === void 0 ? void 0 : _b2.listElRef) || null;
    }
  }
  function virtualListContent(type2) {
    var _a2, _b2;
    if (type2 === "start") {
      return ((_a2 = startYearVlRef.value) === null || _a2 === void 0 ? void 0 : _a2.itemsElRef) || null;
    } else {
      return ((_b2 = endYearVlRef.value) === null || _b2 === void 0 ? void 0 : _b2.itemsElRef) || null;
    }
  }
  const childComponentRefs = {
    startYearVlRef,
    endYearVlRef,
    startMonthScrollbarRef,
    endMonthScrollbarRef,
    startYearScrollbarRef,
    endYearScrollbarRef
  };
  return Object.assign(Object.assign(Object.assign(Object.assign({
    startDatesElRef,
    endDatesElRef,
    handleDateClick,
    handleColItemClick,
    handleDateMouseEnter,
    handleConfirmClick,
    startCalendarPrevYear,
    startCalendarPrevMonth,
    startCalendarNextYear,
    startCalendarNextMonth,
    endCalendarPrevYear,
    endCalendarPrevMonth,
    endCalendarNextMonth,
    endCalendarNextYear,
    mergedIsDateDisabled,
    changeStartEndTime,
    ranges: rangesRef,
    startCalendarMonth: startCalendarMonthRef,
    startCalendarYear: startCalendarYearRef,
    endCalendarMonth: endCalendarMonthRef,
    endCalendarYear: endCalendarYearRef,
    weekdays: weekdaysRef,
    startDateArray: startDateArrayRef,
    endDateArray: endDateArrayRef,
    startYearArray: startYearArrayRef,
    startMonthArray: startMonthArrayRef,
    startQuarterArray: startQuarterArrayRef,
    endYearArray: endYearArrayRef,
    endMonthArray: endMonthArrayRef,
    endQuarterArray: endQuarterArrayRef,
    isSelecting: isSelectingRef,
    handleRangeShortcutMouseenter,
    handleRangeShortcutClick
  }, panelCommon), validation), childComponentRefs), {
    // datetimerangeonly
    startDateDisplayString: startDateInput,
    endDateInput: endDateInputRef,
    timePickerSize: panelCommon.timePickerSize,
    startTimeValue: startTimeValueRef,
    endTimeValue: endTimeValueRef,
    datePickerSlots,
    shortcuts: shortcutsRef,
    startCalendarDateTime: startCalendarDateTimeRef,
    endCalendarDateTime: endCalendarDateTimeRef,
    justifyColumnsScrollState,
    handleFocusDetectorFocus: panelCommon.handleFocusDetectorFocus,
    handleStartTimePickerChange,
    handleEndTimePickerChange,
    handleStartDateInput,
    handleStartDateInputBlur,
    handleEndDateInput,
    handleEndDateInputBlur,
    handleStartYearVlScroll,
    handleEndYearVlScroll,
    virtualListContainer,
    virtualListContent,
    onUpdateStartCalendarValue,
    onUpdateEndCalendarValue
  });
}
const DatetimerangePanel = defineComponent({
  name: "DateTimeRangePanel",
  props: useDualCalendarProps,
  setup(props) {
    if (process.env.NODE_ENV !== "production") {
      watchEffect(() => {
        var _a;
        if ((_a = props.actions) === null || _a === void 0 ? void 0 : _a.includes("now")) {
          warnOnce("date-picker", "The `now` action is not supported for n-date-picker of `datetimerange` type");
        }
      });
    }
    return useDualCalendar(props, "datetimerange");
  },
  render() {
    var _a, _b, _c;
    const {
      mergedClsPrefix,
      mergedTheme,
      shortcuts,
      timePickerProps: timePickerProps2,
      onRender,
      $slots
    } = this;
    onRender === null || onRender === void 0 ? void 0 : onRender();
    return h("div", {
      ref: "selfRef",
      tabindex: 0,
      class: [`${mergedClsPrefix}-date-panel`, `${mergedClsPrefix}-date-panel--datetimerange`, !this.panel && `${mergedClsPrefix}-date-panel--shadow`, this.themeClass],
      onKeydown: this.handlePanelKeyDown,
      onFocus: this.handlePanelFocus
    }, h("div", {
      class: `${mergedClsPrefix}-date-panel-header`
    }, h(__nuxt_component_3, {
      value: this.startDateDisplayString,
      theme: mergedTheme.peers.Input,
      themeOverrides: mergedTheme.peerOverrides.Input,
      size: this.timePickerSize,
      stateful: false,
      class: `${mergedClsPrefix}-date-panel-date-input`,
      textDecoration: this.isStartValueInvalid ? "line-through" : "",
      placeholder: this.locale.selectDate,
      onBlur: this.handleStartDateInputBlur,
      onUpdateValue: this.handleStartDateInput
    }), h(__nuxt_component_8, Object.assign({
      placeholder: this.locale.selectTime,
      format: this.timerPickerFormat,
      size: this.timePickerSize
    }, Array.isArray(timePickerProps2) ? timePickerProps2[0] : timePickerProps2, {
      value: this.startTimeValue,
      to: false,
      showIcon: false,
      disabled: this.isSelecting,
      theme: mergedTheme.peers.TimePicker,
      themeOverrides: mergedTheme.peerOverrides.TimePicker,
      stateful: false,
      isHourDisabled: this.isStartHourDisabled,
      isMinuteDisabled: this.isStartMinuteDisabled,
      isSecondDisabled: this.isStartSecondDisabled,
      onUpdateValue: this.handleStartTimePickerChange
    })), h(__nuxt_component_3, {
      value: this.endDateInput,
      theme: mergedTheme.peers.Input,
      themeOverrides: mergedTheme.peerOverrides.Input,
      stateful: false,
      size: this.timePickerSize,
      class: `${mergedClsPrefix}-date-panel-date-input`,
      textDecoration: this.isEndValueInvalid ? "line-through" : "",
      placeholder: this.locale.selectDate,
      onBlur: this.handleEndDateInputBlur,
      onUpdateValue: this.handleEndDateInput
    }), h(__nuxt_component_8, Object.assign({
      placeholder: this.locale.selectTime,
      format: this.timerPickerFormat,
      size: this.timePickerSize
    }, Array.isArray(timePickerProps2) ? timePickerProps2[1] : timePickerProps2, {
      disabled: this.isSelecting,
      showIcon: false,
      theme: mergedTheme.peers.TimePicker,
      themeOverrides: mergedTheme.peerOverrides.TimePicker,
      to: false,
      stateful: false,
      value: this.endTimeValue,
      isHourDisabled: this.isEndHourDisabled,
      isMinuteDisabled: this.isEndMinuteDisabled,
      isSecondDisabled: this.isEndSecondDisabled,
      onUpdateValue: this.handleEndTimePickerChange
    }))), h("div", {
      ref: "startDatesElRef",
      class: `${mergedClsPrefix}-date-panel-calendar ${mergedClsPrefix}-date-panel-calendar--start`
    }, h("div", {
      class: `${mergedClsPrefix}-date-panel-month`
    }, h("div", {
      class: `${mergedClsPrefix}-date-panel-month__fast-prev`,
      onClick: this.startCalendarPrevYear
    }, resolveSlot($slots["prev-year"], () => [h(FastBackwardIcon, null)])), h("div", {
      class: `${mergedClsPrefix}-date-panel-month__prev`,
      onClick: this.startCalendarPrevMonth
    }, resolveSlot($slots["prev-month"], () => [h(BackwardIcon, null)])), h(PanelHeader, {
      monthBeforeYear: this.locale.monthBeforeYear,
      value: this.startCalendarDateTime,
      onUpdateValue: this.onUpdateStartCalendarValue,
      mergedClsPrefix,
      calendarMonth: this.startCalendarMonth,
      calendarYear: this.startCalendarYear
    }), h("div", {
      class: `${mergedClsPrefix}-date-panel-month__next`,
      onClick: this.startCalendarNextMonth
    }, resolveSlot($slots["next-month"], () => [h(ForwardIcon, null)])), h("div", {
      class: `${mergedClsPrefix}-date-panel-month__fast-next`,
      onClick: this.startCalendarNextYear
    }, resolveSlot($slots["next-year"], () => [h(FastForwardIcon, null)]))), h("div", {
      class: `${mergedClsPrefix}-date-panel-weekdays`
    }, this.weekdays.map((weekday) => h("div", {
      key: weekday,
      class: `${mergedClsPrefix}-date-panel-weekdays__day`
    }, weekday))), h("div", {
      class: `${mergedClsPrefix}-date-panel__divider`
    }), h("div", {
      class: `${mergedClsPrefix}-date-panel-dates`
    }, this.startDateArray.map((dateItem2, i2) => {
      const disabled = this.mergedIsDateDisabled(dateItem2.ts);
      return h("div", {
        "data-n-date": true,
        key: i2,
        class: [`${mergedClsPrefix}-date-panel-date`, {
          [`${mergedClsPrefix}-date-panel-date--excluded`]: !dateItem2.inCurrentMonth,
          [`${mergedClsPrefix}-date-panel-date--current`]: dateItem2.isCurrentDate,
          [`${mergedClsPrefix}-date-panel-date--selected`]: dateItem2.selected,
          [`${mergedClsPrefix}-date-panel-date--covered`]: dateItem2.inSpan,
          [`${mergedClsPrefix}-date-panel-date--start`]: dateItem2.startOfSpan,
          [`${mergedClsPrefix}-date-panel-date--end`]: dateItem2.endOfSpan,
          [`${mergedClsPrefix}-date-panel-date--disabled`]: disabled
        }],
        onClick: disabled ? void 0 : () => {
          this.handleDateClick(dateItem2);
        },
        onMouseenter: disabled ? void 0 : () => {
          this.handleDateMouseEnter(dateItem2);
        }
      }, h("div", {
        class: `${mergedClsPrefix}-date-panel-date__trigger`
      }), dateItem2.dateObject.date, dateItem2.isCurrentDate ? h("div", {
        class: `${mergedClsPrefix}-date-panel-date__sup`
      }) : null);
    }))), h("div", {
      class: `${mergedClsPrefix}-date-panel__vertical-divider`
    }), h("div", {
      ref: "endDatesElRef",
      class: `${mergedClsPrefix}-date-panel-calendar ${mergedClsPrefix}-date-panel-calendar--end`
    }, h("div", {
      class: `${mergedClsPrefix}-date-panel-month`
    }, h("div", {
      class: `${mergedClsPrefix}-date-panel-month__fast-prev`,
      onClick: this.endCalendarPrevYear
    }, resolveSlot($slots["prev-year"], () => [h(FastBackwardIcon, null)])), h("div", {
      class: `${mergedClsPrefix}-date-panel-month__prev`,
      onClick: this.endCalendarPrevMonth
    }, resolveSlot($slots["prev-month"], () => [h(BackwardIcon, null)])), h(PanelHeader, {
      monthBeforeYear: this.locale.monthBeforeYear,
      value: this.endCalendarDateTime,
      onUpdateValue: this.onUpdateEndCalendarValue,
      mergedClsPrefix,
      calendarMonth: this.endCalendarMonth,
      calendarYear: this.endCalendarYear
    }), h("div", {
      class: `${mergedClsPrefix}-date-panel-month__next`,
      onClick: this.endCalendarNextMonth
    }, resolveSlot($slots["next-month"], () => [h(ForwardIcon, null)])), h("div", {
      class: `${mergedClsPrefix}-date-panel-month__fast-next`,
      onClick: this.endCalendarNextYear
    }, resolveSlot($slots["next-year"], () => [h(FastForwardIcon, null)]))), h("div", {
      class: `${mergedClsPrefix}-date-panel-weekdays`
    }, this.weekdays.map((weekday) => h("div", {
      key: weekday,
      class: `${mergedClsPrefix}-date-panel-weekdays__day`
    }, weekday))), h("div", {
      class: `${mergedClsPrefix}-date-panel__divider`
    }), h("div", {
      class: `${mergedClsPrefix}-date-panel-dates`
    }, this.endDateArray.map((dateItem2, i2) => {
      const disabled = this.mergedIsDateDisabled(dateItem2.ts);
      return h("div", {
        "data-n-date": true,
        key: i2,
        class: [`${mergedClsPrefix}-date-panel-date`, {
          [`${mergedClsPrefix}-date-panel-date--excluded`]: !dateItem2.inCurrentMonth,
          [`${mergedClsPrefix}-date-panel-date--current`]: dateItem2.isCurrentDate,
          [`${mergedClsPrefix}-date-panel-date--selected`]: dateItem2.selected,
          [`${mergedClsPrefix}-date-panel-date--covered`]: dateItem2.inSpan,
          [`${mergedClsPrefix}-date-panel-date--start`]: dateItem2.startOfSpan,
          [`${mergedClsPrefix}-date-panel-date--end`]: dateItem2.endOfSpan,
          [`${mergedClsPrefix}-date-panel-date--disabled`]: disabled
        }],
        onClick: disabled ? void 0 : () => {
          this.handleDateClick(dateItem2);
        },
        onMouseenter: disabled ? void 0 : () => {
          this.handleDateMouseEnter(dateItem2);
        }
      }, h("div", {
        class: `${mergedClsPrefix}-date-panel-date__trigger`
      }), dateItem2.dateObject.date, dateItem2.isCurrentDate ? h("div", {
        class: `${mergedClsPrefix}-date-panel-date__sup`
      }) : null);
    }))), this.datePickerSlots.footer ? h("div", {
      class: `${mergedClsPrefix}-date-panel-footer`
    }, this.datePickerSlots.footer()) : null, ((_a = this.actions) === null || _a === void 0 ? void 0 : _a.length) || shortcuts ? h("div", {
      class: `${mergedClsPrefix}-date-panel-actions`
    }, h("div", {
      class: `${mergedClsPrefix}-date-panel-actions__prefix`
    }, shortcuts && Object.keys(shortcuts).map((key) => {
      const shortcut = shortcuts[key];
      return Array.isArray(shortcut) || typeof shortcut === "function" ? h(XButton, {
        size: "tiny",
        onMouseenter: () => {
          this.handleRangeShortcutMouseenter(shortcut);
        },
        onClick: () => {
          this.handleRangeShortcutClick(shortcut);
        },
        onMouseleave: () => {
          this.handleShortcutMouseleave();
        }
      }, {
        default: () => key
      }) : null;
    })), h("div", {
      class: `${mergedClsPrefix}-date-panel-actions__suffix`
    }, ((_b = this.actions) === null || _b === void 0 ? void 0 : _b.includes("clear")) ? h(Button, {
      theme: mergedTheme.peers.Button,
      themeOverrides: mergedTheme.peerOverrides.Button,
      size: "tiny",
      onClick: this.handleClearClick
    }, {
      default: () => this.locale.clear
    }) : null, ((_c = this.actions) === null || _c === void 0 ? void 0 : _c.includes("confirm")) ? h(Button, {
      theme: mergedTheme.peers.Button,
      themeOverrides: mergedTheme.peerOverrides.Button,
      size: "tiny",
      type: "primary",
      disabled: this.isRangeInvalid || this.isSelecting,
      onClick: this.handleConfirmClick
    }, {
      default: () => this.locale.confirm
    }) : null)) : null, h(FocusDetector, {
      onFocus: this.handleFocusDetectorFocus
    }));
  }
});
const DatePanel = defineComponent({
  name: "DatePanel",
  props: Object.assign(Object.assign({}, useCalendarProps), {
    type: {
      type: String,
      required: true
    }
  }),
  setup(props) {
    if (process.env.NODE_ENV !== "production") {
      watchEffect(() => {
        var _a;
        if ((_a = props.actions) === null || _a === void 0 ? void 0 : _a.includes("confirm")) {
          warnOnce("date-picker", "The `confirm` action is not supported for n-date-picker of `date` type");
        }
      });
    }
    return useCalendar(props, props.type);
  },
  render() {
    var _a, _b, _c;
    const {
      mergedClsPrefix,
      mergedTheme,
      shortcuts,
      onRender,
      $slots,
      type
    } = this;
    onRender === null || onRender === void 0 ? void 0 : onRender();
    return h("div", {
      ref: "selfRef",
      tabindex: 0,
      class: [`${mergedClsPrefix}-date-panel`, `${mergedClsPrefix}-date-panel--${type}`, !this.panel && `${mergedClsPrefix}-date-panel--shadow`, this.themeClass],
      onFocus: this.handlePanelFocus,
      onKeydown: this.handlePanelKeyDown
    }, h("div", {
      class: `${mergedClsPrefix}-date-panel-calendar`
    }, h("div", {
      class: `${mergedClsPrefix}-date-panel-month`
    }, h("div", {
      class: `${mergedClsPrefix}-date-panel-month__fast-prev`,
      onClick: this.prevYear
    }, resolveSlot($slots["prev-year"], () => [h(FastBackwardIcon, null)])), h("div", {
      class: `${mergedClsPrefix}-date-panel-month__prev`,
      onClick: this.prevMonth
    }, resolveSlot($slots["prev-month"], () => [h(BackwardIcon, null)])), h(PanelHeader, {
      monthBeforeYear: this.locale.monthBeforeYear,
      value: this.calendarValue,
      onUpdateValue: this.onUpdateCalendarValue,
      mergedClsPrefix,
      calendarMonth: this.calendarMonth,
      calendarYear: this.calendarYear
    }), h("div", {
      class: `${mergedClsPrefix}-date-panel-month__next`,
      onClick: this.nextMonth
    }, resolveSlot($slots["next-month"], () => [h(ForwardIcon, null)])), h("div", {
      class: `${mergedClsPrefix}-date-panel-month__fast-next`,
      onClick: this.nextYear
    }, resolveSlot($slots["next-year"], () => [h(FastForwardIcon, null)]))), h("div", {
      class: `${mergedClsPrefix}-date-panel-weekdays`
    }, this.weekdays.map((weekday) => h("div", {
      key: weekday,
      class: `${mergedClsPrefix}-date-panel-weekdays__day`
    }, weekday))), h("div", {
      class: `${mergedClsPrefix}-date-panel-dates`
    }, this.dateArray.map((dateItem2, i2) => h("div", {
      "data-n-date": true,
      key: i2,
      class: [`${mergedClsPrefix}-date-panel-date`, {
        [`${mergedClsPrefix}-date-panel-date--current`]: dateItem2.isCurrentDate,
        [`${mergedClsPrefix}-date-panel-date--selected`]: dateItem2.selected,
        [`${mergedClsPrefix}-date-panel-date--excluded`]: !dateItem2.inCurrentMonth,
        [`${mergedClsPrefix}-date-panel-date--disabled`]: this.mergedIsDateDisabled(dateItem2.ts, {
          type: "date",
          year: dateItem2.dateObject.year,
          month: dateItem2.dateObject.month,
          date: dateItem2.dateObject.date
        }),
        [`${mergedClsPrefix}-date-panel-date--week-hovered`]: this.isWeekHovered(dateItem2),
        [`${mergedClsPrefix}-date-panel-date--week-selected`]: dateItem2.inSelectedWeek
      }],
      onClick: () => {
        this.handleDateClick(dateItem2);
      },
      onMouseenter: () => {
        this.handleDateMouseEnter(dateItem2);
      }
    }, h("div", {
      class: `${mergedClsPrefix}-date-panel-date__trigger`
    }), dateItem2.dateObject.date, dateItem2.isCurrentDate ? h("div", {
      class: `${mergedClsPrefix}-date-panel-date__sup`
    }) : null)))), this.datePickerSlots.footer ? h("div", {
      class: `${mergedClsPrefix}-date-panel-footer`
    }, this.datePickerSlots.footer()) : null, ((_a = this.actions) === null || _a === void 0 ? void 0 : _a.length) || shortcuts ? h("div", {
      class: `${mergedClsPrefix}-date-panel-actions`
    }, h("div", {
      class: `${mergedClsPrefix}-date-panel-actions__prefix`
    }, shortcuts && Object.keys(shortcuts).map((key) => {
      const shortcut = shortcuts[key];
      return Array.isArray(shortcut) ? null : h(XButton, {
        size: "tiny",
        onMouseenter: () => {
          this.handleSingleShortcutMouseenter(shortcut);
        },
        onClick: () => {
          this.handleSingleShortcutClick(shortcut);
        },
        onMouseleave: () => {
          this.handleShortcutMouseleave();
        }
      }, {
        default: () => key
      });
    })), h("div", {
      class: `${mergedClsPrefix}-date-panel-actions__suffix`
    }, ((_b = this.actions) === null || _b === void 0 ? void 0 : _b.includes("clear")) ? h(Button, {
      theme: mergedTheme.peers.Button,
      themeOverrides: mergedTheme.peerOverrides.Button,
      size: "tiny",
      onClick: this.handleClearClick
    }, {
      default: () => this.locale.clear
    }) : null, ((_c = this.actions) === null || _c === void 0 ? void 0 : _c.includes("now")) ? h(Button, {
      theme: mergedTheme.peers.Button,
      themeOverrides: mergedTheme.peerOverrides.Button,
      size: "tiny",
      onClick: this.handleNowClick
    }, {
      default: () => this.locale.now
    }) : null)) : null, h(FocusDetector, {
      onFocus: this.handleFocusDetectorFocus
    }));
  }
});
const DaterangePanel = defineComponent({
  name: "DateRangePanel",
  props: useDualCalendarProps,
  setup(props) {
    if (process.env.NODE_ENV !== "production") {
      watchEffect(() => {
        var _a;
        if ((_a = props.actions) === null || _a === void 0 ? void 0 : _a.includes("now")) {
          warnOnce("date-picker", "The `now` action is not supported for n-date-picker of `daterange` type");
        }
      });
    }
    return useDualCalendar(props, "daterange");
  },
  render() {
    var _a, _b, _c;
    const {
      mergedClsPrefix,
      mergedTheme,
      shortcuts,
      onRender,
      $slots
    } = this;
    onRender === null || onRender === void 0 ? void 0 : onRender();
    return h("div", {
      ref: "selfRef",
      tabindex: 0,
      class: [`${mergedClsPrefix}-date-panel`, `${mergedClsPrefix}-date-panel--daterange`, !this.panel && `${mergedClsPrefix}-date-panel--shadow`, this.themeClass],
      onKeydown: this.handlePanelKeyDown,
      onFocus: this.handlePanelFocus
    }, h("div", {
      ref: "startDatesElRef",
      class: `${mergedClsPrefix}-date-panel-calendar ${mergedClsPrefix}-date-panel-calendar--start`
    }, h("div", {
      class: `${mergedClsPrefix}-date-panel-month`
    }, h("div", {
      class: `${mergedClsPrefix}-date-panel-month__fast-prev`,
      onClick: this.startCalendarPrevYear
    }, resolveSlot($slots["prev-year"], () => [h(FastBackwardIcon, null)])), h("div", {
      class: `${mergedClsPrefix}-date-panel-month__prev`,
      onClick: this.startCalendarPrevMonth
    }, resolveSlot($slots["prev-month"], () => [h(BackwardIcon, null)])), h(PanelHeader, {
      monthBeforeYear: this.locale.monthBeforeYear,
      value: this.startCalendarDateTime,
      onUpdateValue: this.onUpdateStartCalendarValue,
      mergedClsPrefix,
      calendarMonth: this.startCalendarMonth,
      calendarYear: this.startCalendarYear
    }), h("div", {
      class: `${mergedClsPrefix}-date-panel-month__next`,
      onClick: this.startCalendarNextMonth
    }, resolveSlot($slots["next-month"], () => [h(ForwardIcon, null)])), h("div", {
      class: `${mergedClsPrefix}-date-panel-month__fast-next`,
      onClick: this.startCalendarNextYear
    }, resolveSlot($slots["next-year"], () => [h(FastForwardIcon, null)]))), h("div", {
      class: `${mergedClsPrefix}-date-panel-weekdays`
    }, this.weekdays.map((weekday) => h("div", {
      key: weekday,
      class: `${mergedClsPrefix}-date-panel-weekdays__day`
    }, weekday))), h("div", {
      class: `${mergedClsPrefix}-date-panel__divider`
    }), h("div", {
      class: `${mergedClsPrefix}-date-panel-dates`
    }, this.startDateArray.map((dateItem2, i2) => h("div", {
      "data-n-date": true,
      key: i2,
      class: [`${mergedClsPrefix}-date-panel-date`, {
        [`${mergedClsPrefix}-date-panel-date--excluded`]: !dateItem2.inCurrentMonth,
        [`${mergedClsPrefix}-date-panel-date--current`]: dateItem2.isCurrentDate,
        [`${mergedClsPrefix}-date-panel-date--selected`]: dateItem2.selected,
        [`${mergedClsPrefix}-date-panel-date--covered`]: dateItem2.inSpan,
        [`${mergedClsPrefix}-date-panel-date--start`]: dateItem2.startOfSpan,
        [`${mergedClsPrefix}-date-panel-date--end`]: dateItem2.endOfSpan,
        [`${mergedClsPrefix}-date-panel-date--disabled`]: this.mergedIsDateDisabled(dateItem2.ts)
      }],
      onClick: () => {
        this.handleDateClick(dateItem2);
      },
      onMouseenter: () => {
        this.handleDateMouseEnter(dateItem2);
      }
    }, h("div", {
      class: `${mergedClsPrefix}-date-panel-date__trigger`
    }), dateItem2.dateObject.date, dateItem2.isCurrentDate ? h("div", {
      class: `${mergedClsPrefix}-date-panel-date__sup`
    }) : null)))), h("div", {
      class: `${mergedClsPrefix}-date-panel__vertical-divider`
    }), h("div", {
      ref: "endDatesElRef",
      class: `${mergedClsPrefix}-date-panel-calendar ${mergedClsPrefix}-date-panel-calendar--end`
    }, h("div", {
      class: `${mergedClsPrefix}-date-panel-month`
    }, h("div", {
      class: `${mergedClsPrefix}-date-panel-month__fast-prev`,
      onClick: this.endCalendarPrevYear
    }, resolveSlot($slots["prev-year"], () => [h(FastBackwardIcon, null)])), h("div", {
      class: `${mergedClsPrefix}-date-panel-month__prev`,
      onClick: this.endCalendarPrevMonth
    }, resolveSlot($slots["prev-month"], () => [h(BackwardIcon, null)])), h(PanelHeader, {
      monthBeforeYear: this.locale.monthBeforeYear,
      value: this.endCalendarDateTime,
      onUpdateValue: this.onUpdateEndCalendarValue,
      mergedClsPrefix,
      calendarMonth: this.endCalendarMonth,
      calendarYear: this.endCalendarYear
    }), h("div", {
      class: `${mergedClsPrefix}-date-panel-month__next`,
      onClick: this.endCalendarNextMonth
    }, resolveSlot($slots["next-month"], () => [h(ForwardIcon, null)])), h("div", {
      class: `${mergedClsPrefix}-date-panel-month__fast-next`,
      onClick: this.endCalendarNextYear
    }, resolveSlot($slots["next-year"], () => [h(FastForwardIcon, null)]))), h("div", {
      class: `${mergedClsPrefix}-date-panel-weekdays`
    }, this.weekdays.map((weekday) => h("div", {
      key: weekday,
      class: `${mergedClsPrefix}-date-panel-weekdays__day`
    }, weekday))), h("div", {
      class: `${mergedClsPrefix}-date-panel__divider`
    }), h("div", {
      class: `${mergedClsPrefix}-date-panel-dates`
    }, this.endDateArray.map((dateItem2, i2) => h("div", {
      "data-n-date": true,
      key: i2,
      class: [`${mergedClsPrefix}-date-panel-date`, {
        [`${mergedClsPrefix}-date-panel-date--excluded`]: !dateItem2.inCurrentMonth,
        [`${mergedClsPrefix}-date-panel-date--current`]: dateItem2.isCurrentDate,
        [`${mergedClsPrefix}-date-panel-date--selected`]: dateItem2.selected,
        [`${mergedClsPrefix}-date-panel-date--covered`]: dateItem2.inSpan,
        [`${mergedClsPrefix}-date-panel-date--start`]: dateItem2.startOfSpan,
        [`${mergedClsPrefix}-date-panel-date--end`]: dateItem2.endOfSpan,
        [`${mergedClsPrefix}-date-panel-date--disabled`]: this.mergedIsDateDisabled(dateItem2.ts)
      }],
      onClick: () => {
        this.handleDateClick(dateItem2);
      },
      onMouseenter: () => {
        this.handleDateMouseEnter(dateItem2);
      }
    }, h("div", {
      class: `${mergedClsPrefix}-date-panel-date__trigger`
    }), dateItem2.dateObject.date, dateItem2.isCurrentDate ? h("div", {
      class: `${mergedClsPrefix}-date-panel-date__sup`
    }) : null)))), this.datePickerSlots.footer ? h("div", {
      class: `${mergedClsPrefix}-date-panel-footer`
    }, this.datePickerSlots.footer()) : null, ((_a = this.actions) === null || _a === void 0 ? void 0 : _a.length) || shortcuts ? h("div", {
      class: `${mergedClsPrefix}-date-panel-actions`
    }, h("div", {
      class: `${mergedClsPrefix}-date-panel-actions__prefix`
    }, shortcuts && Object.keys(shortcuts).map((key) => {
      const shortcut = shortcuts[key];
      return Array.isArray(shortcut) || typeof shortcut === "function" ? h(XButton, {
        size: "tiny",
        onMouseenter: () => {
          this.handleRangeShortcutMouseenter(shortcut);
        },
        onClick: () => {
          this.handleRangeShortcutClick(shortcut);
        },
        onMouseleave: () => {
          this.handleShortcutMouseleave();
        }
      }, {
        default: () => key
      }) : null;
    })), h("div", {
      class: `${mergedClsPrefix}-date-panel-actions__suffix`
    }, ((_b = this.actions) === null || _b === void 0 ? void 0 : _b.includes("clear")) ? h(Button, {
      theme: mergedTheme.peers.Button,
      themeOverrides: mergedTheme.peerOverrides.Button,
      size: "tiny",
      onClick: this.handleClearClick
    }, {
      default: () => this.locale.clear
    }) : null, ((_c = this.actions) === null || _c === void 0 ? void 0 : _c.includes("confirm")) ? h(Button, {
      theme: mergedTheme.peers.Button,
      themeOverrides: mergedTheme.peerOverrides.Button,
      size: "tiny",
      type: "primary",
      disabled: this.isRangeInvalid || this.isSelecting,
      onClick: this.handleConfirmClick
    }, {
      default: () => this.locale.confirm
    }) : null)) : null, h(FocusDetector, {
      onFocus: this.handleFocusDetectorFocus
    }));
  }
});
const MonthRangePanel = defineComponent({
  name: "MonthRangePanel",
  props: Object.assign(Object.assign({}, useDualCalendarProps), {
    type: {
      type: String,
      required: true
    }
  }),
  setup(props) {
    if (process.env.NODE_ENV !== "production") {
      watchEffect(() => {
        var _a;
        if ((_a = props.actions) === null || _a === void 0 ? void 0 : _a.includes("now")) {
          warnOnce("date-picker", `The \`now\` action is not supported for n-date-picker of ${props.type}type`);
        }
      });
    }
    const useCalendarRef = useDualCalendar(props, props.type);
    const {
      dateLocaleRef
    } = useLocale("DatePicker");
    const renderItem = (item, i2, mergedClsPrefix, type) => {
      const {
        handleColItemClick
      } = useCalendarRef;
      const disabled = false;
      return h("div", {
        "data-n-date": true,
        key: i2,
        class: [`${mergedClsPrefix}-date-panel-month-calendar__picker-col-item`, item.isCurrent && `${mergedClsPrefix}-date-panel-month-calendar__picker-col-item--current`, item.selected && `${mergedClsPrefix}-date-panel-month-calendar__picker-col-item--selected`, disabled],
        onClick: () => {
          handleColItemClick(item, type);
        }
      }, item.type === "month" ? getMonthString(item.dateObject.month, item.monthFormat, dateLocaleRef.value.locale) : item.type === "quarter" ? getQuarterString(item.dateObject.quarter, item.quarterFormat, dateLocaleRef.value.locale) : getYearString(item.dateObject.year, item.yearFormat, dateLocaleRef.value.locale));
    };
    return Object.assign(Object.assign({}, useCalendarRef), {
      renderItem
    });
  },
  render() {
    var _a, _b, _c;
    const {
      mergedClsPrefix,
      mergedTheme,
      shortcuts,
      type,
      renderItem,
      onRender
    } = this;
    onRender === null || onRender === void 0 ? void 0 : onRender();
    return h("div", {
      ref: "selfRef",
      tabindex: 0,
      class: [`${mergedClsPrefix}-date-panel`, `${mergedClsPrefix}-date-panel--daterange`, !this.panel && `${mergedClsPrefix}-date-panel--shadow`, this.themeClass],
      onKeydown: this.handlePanelKeyDown,
      onFocus: this.handlePanelFocus
    }, h("div", {
      ref: "startDatesElRef",
      class: `${mergedClsPrefix}-date-panel-calendar ${mergedClsPrefix}-date-panel-calendar--start`
    }, h("div", {
      class: `${mergedClsPrefix}-date-panel-month-calendar`
    }, h(Scrollbar, {
      ref: "startYearScrollbarRef",
      class: `${mergedClsPrefix}-date-panel-month-calendar__picker-col`,
      theme: mergedTheme.peers.Scrollbar,
      themeOverrides: mergedTheme.peerOverrides.Scrollbar,
      container: () => this.virtualListContainer("start"),
      content: () => this.virtualListContent("start"),
      horizontalRailStyle: {
        zIndex: 1
      },
      verticalRailStyle: {
        zIndex: 1
      }
    }, {
      default: () => h(VVirtualList, {
        ref: "startYearVlRef",
        items: this.startYearArray,
        itemSize: MONTH_ITEM_HEIGHT,
        showScrollbar: false,
        keyField: "ts",
        onScroll: this.handleStartYearVlScroll,
        paddingBottom: 4
      }, {
        default: ({
          item,
          index
        }) => {
          return renderItem(item, index, mergedClsPrefix, "start");
        }
      })
    }), type === "monthrange" || type === "quarterrange" ? h("div", {
      class: `${mergedClsPrefix}-date-panel-month-calendar__picker-col`
    }, h(Scrollbar, {
      ref: "startMonthScrollbarRef",
      theme: mergedTheme.peers.Scrollbar,
      themeOverrides: mergedTheme.peerOverrides.Scrollbar
    }, {
      default: () => [(type === "monthrange" ? this.startMonthArray : this.startQuarterArray).map((item, i2) => renderItem(item, i2, mergedClsPrefix, "start")), type === "monthrange" && h("div", {
        class: `${mergedClsPrefix}-date-panel-month-calendar__padding`
      })]
    })) : null)), h("div", {
      class: `${mergedClsPrefix}-date-panel__vertical-divider`
    }), h("div", {
      ref: "endDatesElRef",
      class: `${mergedClsPrefix}-date-panel-calendar ${mergedClsPrefix}-date-panel-calendar--end`
    }, h("div", {
      class: `${mergedClsPrefix}-date-panel-month-calendar`
    }, h(Scrollbar, {
      ref: "endYearScrollbarRef",
      class: `${mergedClsPrefix}-date-panel-month-calendar__picker-col`,
      theme: mergedTheme.peers.Scrollbar,
      themeOverrides: mergedTheme.peerOverrides.Scrollbar,
      container: () => this.virtualListContainer("end"),
      content: () => this.virtualListContent("end"),
      horizontalRailStyle: {
        zIndex: 1
      },
      verticalRailStyle: {
        zIndex: 1
      }
    }, {
      default: () => h(VVirtualList, {
        ref: "endYearVlRef",
        items: this.endYearArray,
        itemSize: MONTH_ITEM_HEIGHT,
        showScrollbar: false,
        keyField: "ts",
        onScroll: this.handleEndYearVlScroll,
        paddingBottom: 4
      }, {
        default: ({
          item,
          index
        }) => {
          return renderItem(item, index, mergedClsPrefix, "end");
        }
      })
    }), type === "monthrange" || type === "quarterrange" ? h("div", {
      class: `${mergedClsPrefix}-date-panel-month-calendar__picker-col`
    }, h(Scrollbar, {
      ref: "endMonthScrollbarRef",
      theme: mergedTheme.peers.Scrollbar,
      themeOverrides: mergedTheme.peerOverrides.Scrollbar
    }, {
      default: () => [(type === "monthrange" ? this.endMonthArray : this.endQuarterArray).map((item, i2) => renderItem(item, i2, mergedClsPrefix, "end")), type === "monthrange" && h("div", {
        class: `${mergedClsPrefix}-date-panel-month-calendar__padding`
      })]
    })) : null)), this.datePickerSlots.footer ? h("div", {
      class: `${mergedClsPrefix}-date-panel-footer`
    }, renderSlot(this.datePickerSlots, "footer")) : null, ((_a = this.actions) === null || _a === void 0 ? void 0 : _a.length) || shortcuts ? h("div", {
      class: `${mergedClsPrefix}-date-panel-actions`
    }, h("div", {
      class: `${mergedClsPrefix}-date-panel-actions__prefix`
    }, shortcuts && Object.keys(shortcuts).map((key) => {
      const shortcut = shortcuts[key];
      return Array.isArray(shortcut) || typeof shortcut === "function" ? h(XButton, {
        size: "tiny",
        onMouseenter: () => {
          this.handleRangeShortcutMouseenter(shortcut);
        },
        onClick: () => {
          this.handleRangeShortcutClick(shortcut);
        },
        onMouseleave: () => {
          this.handleShortcutMouseleave();
        }
      }, {
        default: () => key
      }) : null;
    })), h("div", {
      class: `${mergedClsPrefix}-date-panel-actions__suffix`
    }, ((_b = this.actions) === null || _b === void 0 ? void 0 : _b.includes("clear")) ? h(XButton, {
      theme: mergedTheme.peers.Button,
      themeOverrides: mergedTheme.peerOverrides.Button,
      size: "tiny",
      onClick: this.handleClearClick
    }, {
      default: () => this.locale.clear
    }) : null, ((_c = this.actions) === null || _c === void 0 ? void 0 : _c.includes("confirm")) ? h(XButton, {
      theme: mergedTheme.peers.Button,
      themeOverrides: mergedTheme.peerOverrides.Button,
      size: "tiny",
      type: "primary",
      disabled: this.isRangeInvalid,
      onClick: this.handleConfirmClick
    }, {
      default: () => this.locale.confirm
    }) : null)) : null, h(FocusDetector, {
      onFocus: this.handleFocusDetectorFocus
    }));
  }
});
const style$c = c$1([cB("date-picker", `
 position: relative;
 z-index: auto;
 `, [cB("date-picker-icon", `
 color: var(--n-icon-color-override);
 transition: color .3s var(--n-bezier);
 `), cB("icon", `
 color: var(--n-icon-color-override);
 transition: color .3s var(--n-bezier);
 `), cM("disabled", [cB("date-picker-icon", `
 color: var(--n-icon-color-disabled-override);
 `), cB("icon", `
 color: var(--n-icon-color-disabled-override);
 `)])]), cB("date-panel", `
 width: fit-content;
 outline: none;
 margin: 4px 0;
 display: grid;
 grid-template-columns: 0fr;
 border-radius: var(--n-panel-border-radius);
 background-color: var(--n-panel-color);
 color: var(--n-panel-text-color);
 user-select: none;
 `, [fadeInScaleUpTransition(), cM("shadow", `
 box-shadow: var(--n-panel-box-shadow);
 `), cB("date-panel-calendar", {
  padding: "var(--n-calendar-left-padding)",
  display: "grid",
  gridTemplateColumns: "1fr",
  gridArea: "left-calendar"
}, [cM("end", {
  padding: "var(--n-calendar-right-padding)",
  gridArea: "right-calendar"
})]), cB("date-panel-month-calendar", {
  display: "flex",
  gridArea: "left-calendar"
}, [cE("picker-col", `
 min-width: var(--n-scroll-item-width);
 height: calc(var(--n-scroll-item-height) * 6);
 user-select: none;
 -webkit-user-select: none;
 `, [c$1("&:first-child", `
 min-width: calc(var(--n-scroll-item-width) + 4px);
 `, [cE("picker-col-item", [c$1("&::before", "left: 4px;")])]), cE("padding", `
 height: calc(var(--n-scroll-item-height) * 5)
 `)]), cE("picker-col-item", `
 z-index: 0;
 cursor: pointer;
 height: var(--n-scroll-item-height);
 box-sizing: border-box;
 padding-top: 4px;
 display: flex;
 align-items: center;
 justify-content: center;
 position: relative;
 transition: 
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 background: #0000;
 color: var(--n-item-text-color);
 `, [c$1("&::before", `
 z-index: -1;
 content: "";
 position: absolute;
 left: 0;
 right: 4px;
 top: 4px;
 bottom: 0;
 border-radius: var(--n-scroll-item-border-radius);
 transition: 
 background-color .3s var(--n-bezier);
 `), cNotM("disabled", [c$1("&:hover::before", `
 background-color: var(--n-item-color-hover);
 `), cM("selected", `
 color: var(--n-item-color-active);
 `, [c$1("&::before", "background-color: var(--n-item-color-hover);")])]), cM("disabled", `
 color: var(--n-item-text-color-disabled);
 cursor: not-allowed;
 `, [cM("selected", [c$1("&::before", `
 background-color: var(--n-item-color-disabled);
 `)])])])]), cM("date", {
  gridTemplateAreas: `
 "left-calendar"
 "footer"
 "action"
 `
}), cM("week", {
  gridTemplateAreas: `
 "left-calendar"
 "footer"
 "action"
 `
}), cM("daterange", {
  gridTemplateAreas: `
 "left-calendar divider right-calendar"
 "footer footer footer"
 "action action action"
 `
}), cM("datetime", {
  gridTemplateAreas: `
 "header"
 "left-calendar"
 "footer"
 "action"
 `
}), cM("datetimerange", {
  gridTemplateAreas: `
 "header header header"
 "left-calendar divider right-calendar"
 "footer footer footer"
 "action action action"
 `
}), cM("month", {
  gridTemplateAreas: `
 "left-calendar"
 "footer"
 "action"
 `
}), cB("date-panel-footer", {
  gridArea: "footer"
}), cB("date-panel-actions", {
  gridArea: "action"
}), cB("date-panel-header", {
  gridArea: "header"
}), cB("date-panel-header", `
 box-sizing: border-box;
 width: 100%;
 align-items: center;
 padding: var(--n-panel-header-padding);
 display: flex;
 justify-content: space-between;
 border-bottom: 1px solid var(--n-panel-header-divider-color);
 `, [c$1(">", [c$1("*:not(:last-child)", {
  marginRight: "10px"
}), c$1("*", {
  flex: 1,
  width: 0
}), cB("time-picker", {
  zIndex: 1
})])]), cB("date-panel-month", `
 box-sizing: border-box;
 display: grid;
 grid-template-columns: var(--n-calendar-title-grid-template-columns);
 align-items: center;
 justify-items: center;
 padding: var(--n-calendar-title-padding);
 height: var(--n-calendar-title-height);
 `, [cE("prev, next, fast-prev, fast-next", `
 line-height: 0;
 cursor: pointer;
 width: var(--n-arrow-size);
 height: var(--n-arrow-size);
 color: var(--n-arrow-color);
 `), cE("month-year", `
 user-select: none;
 -webkit-user-select: none;
 flex-grow: 1;
 position: relative;
 `, [cE("text", `
 font-size: var(--n-calendar-title-font-size);
 line-height: var(--n-calendar-title-font-size);
 font-weight: var(--n-calendar-title-font-weight);
 padding: 6px 8px;
 text-align: center;
 color: var(--n-calendar-title-text-color);
 cursor: pointer;
 transition: background-color .3s var(--n-bezier);
 border-radius: var(--n-panel-border-radius);
 `, [cM("active", `
 background-color: var(--n-calendar-title-color-hover);
 `), c$1("&:hover", `
 background-color: var(--n-calendar-title-color-hover);
 `)])])]), cB("date-panel-weekdays", `
 display: grid;
 margin: auto;
 grid-template-columns: repeat(7, var(--n-item-cell-width));
 grid-template-rows: repeat(1, var(--n-item-cell-height));
 align-items: center;
 justify-items: center;
 margin-bottom: 4px;
 border-bottom: 1px solid var(--n-calendar-days-divider-color);
 `, [cE("day", `
 user-select: none;
 -webkit-user-select: none;
 line-height: 15px;
 width: var(--n-item-size);
 text-align: center;
 font-size: var(--n-calendar-days-font-size);
 color: var(--n-item-text-color);
 `)]), cB("date-panel-dates", `
 margin: auto;
 display: grid;
 grid-template-columns: repeat(7, var(--n-item-cell-width));
 grid-template-rows: repeat(6, var(--n-item-cell-height));
 align-items: center;
 justify-items: center;
 flex-wrap: wrap;
 `, [cB("date-panel-date", `
 user-select: none;
 -webkit-user-select: none;
 position: relative;
 width: var(--n-item-size);
 height: var(--n-item-size);
 line-height: var(--n-item-size);
 text-align: center;
 font-size: var(--n-item-font-size);
 border-radius: var(--n-item-border-radius);
 z-index: 0;
 cursor: pointer;
 transition:
 background-color .2s var(--n-bezier),
 color .2s var(--n-bezier);
 `, [cE("trigger", `
 position: absolute;
 left: calc(var(--n-item-size) / 2 - var(--n-item-cell-width) / 2);
 top: calc(var(--n-item-size) / 2 - var(--n-item-cell-height) / 2);
 width: var(--n-item-cell-width);
 height: var(--n-item-cell-height);
 `), cM("current", [cE("sup", `
 position: absolute;
 top: 2px;
 right: 2px;
 content: "";
 height: 4px;
 width: 4px;
 border-radius: 2px;
 background-color: var(--n-item-color-active);
 transition:
 background-color .2s var(--n-bezier);
 `)]), c$1("&::after", `
 content: "";
 z-index: -1;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
 transition: background-color .3s var(--n-bezier);
 `), cM("covered, start, end", [cNotM("excluded", [c$1("&::before", `
 content: "";
 z-index: -2;
 position: absolute;
 left: calc((var(--n-item-size) - var(--n-item-cell-width)) / 2);
 right: calc((var(--n-item-size) - var(--n-item-cell-width)) / 2);
 top: 0;
 bottom: 0;
 background-color: var(--n-item-color-included);
 `), c$1("&:nth-child(7n + 1)::before", {
  borderTopLeftRadius: "var(--n-item-border-radius)",
  borderBottomLeftRadius: "var(--n-item-border-radius)"
}), c$1("&:nth-child(7n + 7)::before", {
  borderTopRightRadius: "var(--n-item-border-radius)",
  borderBottomRightRadius: "var(--n-item-border-radius)"
})])]), cM("selected", {
  color: "var(--n-item-text-color-active)"
}, [c$1("&::after", {
  backgroundColor: "var(--n-item-color-active)"
}), cM("start", [c$1("&::before", {
  left: "50%"
})]), cM("end", [c$1("&::before", {
  right: "50%"
})]), cE("sup", {
  backgroundColor: "var(--n-panel-color)"
})]), cM("excluded", {
  color: "var(--n-item-text-color-disabled)"
}, [cM("selected", [c$1("&::after", {
  backgroundColor: "var(--n-item-color-disabled)"
})])]), cM("disabled", {
  cursor: "not-allowed",
  color: "var(--n-item-text-color-disabled)"
}, [cM("covered", [c$1("&::before", {
  backgroundColor: "var(--n-item-color-disabled)"
})]), cM("selected", [c$1("&::before", {
  backgroundColor: "var(--n-item-color-disabled)"
}), c$1("&::after", {
  backgroundColor: "var(--n-item-color-disabled)"
})])]), cM("week-hovered", [c$1("&::before", `
 background-color: var(--n-item-color-included);
 `), c$1("&:nth-child(7n + 1)::before", `
 border-top-left-radius: var(--n-item-border-radius);
 border-bottom-left-radius: var(--n-item-border-radius);
 `), c$1("&:nth-child(7n + 7)::before", `
 border-top-right-radius: var(--n-item-border-radius);
 border-bottom-right-radius: var(--n-item-border-radius);
 `)]), cM("week-selected", `
 color: var(--n-item-text-color-active)
 `, [c$1("&::before", `
 background-color: var(--n-item-color-active);
 `), c$1("&:nth-child(7n + 1)::before", `
 border-top-left-radius: var(--n-item-border-radius);
 border-bottom-left-radius: var(--n-item-border-radius);
 `), c$1("&:nth-child(7n + 7)::before", `
 border-top-right-radius: var(--n-item-border-radius);
 border-bottom-right-radius: var(--n-item-border-radius);
 `)])])]), cNotM("week", [cB("date-panel-dates", [cB("date-panel-date", [cNotM("disabled", [cNotM("selected", [c$1("&:hover", `
 background-color: var(--n-item-color-hover);
 `)])])])])]), cM("week", [cB("date-panel-dates", [cB("date-panel-date", [c$1("&::before", `
 content: "";
 z-index: -2;
 position: absolute;
 left: calc((var(--n-item-size) - var(--n-item-cell-width)) / 2);
 right: calc((var(--n-item-size) - var(--n-item-cell-width)) / 2);
 top: 0;
 bottom: 0;
 transition: background-color .3s var(--n-bezier);
 `)])])]), cE("vertical-divider", `
 grid-area: divider;
 height: 100%;
 width: 1px;
 background-color: var(--n-calendar-divider-color);
 `), cB("date-panel-footer", `
 border-top: 1px solid var(--n-panel-action-divider-color);
 padding: var(--n-panel-extra-footer-padding);
 `), cB("date-panel-actions", `
 flex: 1;
 padding: var(--n-panel-action-padding);
 display: flex;
 align-items: center;
 justify-content: space-between;
 border-top: 1px solid var(--n-panel-action-divider-color);
 `, [cE("prefix, suffix", `
 display: flex;
 margin-bottom: -8px;
 `), cE("suffix", `
 align-self: flex-end;
 `), cE("prefix", `
 flex-wrap: wrap;
 `), cB("button", `
 margin-bottom: 8px;
 `, [c$1("&:not(:last-child)", `
 margin-right: 8px;
 `)])])]), c$1("[data-n-date].transition-disabled", {
  transition: "none !important"
}, [c$1("&::before, &::after", {
  transition: "none !important"
})])]);
const datePickerProps = Object.assign(Object.assign({}, useTheme.props), {
  to: useAdjustedTo.propTo,
  bordered: {
    type: Boolean,
    default: void 0
  },
  clearable: Boolean,
  updateValueOnClose: Boolean,
  defaultValue: [Number, Array],
  defaultFormattedValue: [String, Array],
  defaultTime: [Number, String, Array],
  disabled: {
    type: Boolean,
    default: void 0
  },
  placement: {
    type: String,
    default: "bottom-start"
  },
  value: [Number, Array],
  formattedValue: [String, Array],
  size: String,
  type: {
    type: String,
    default: "date"
  },
  valueFormat: String,
  separator: String,
  placeholder: String,
  startPlaceholder: String,
  endPlaceholder: String,
  format: String,
  dateFormat: String,
  timerPickerFormat: String,
  actions: Array,
  shortcuts: Object,
  isDateDisabled: Function,
  isTimeDisabled: Function,
  show: {
    type: Boolean,
    default: void 0
  },
  panel: Boolean,
  ranges: Object,
  firstDayOfWeek: Number,
  inputReadonly: Boolean,
  closeOnSelect: Boolean,
  status: String,
  timePickerProps: [Object, Array],
  onClear: Function,
  onConfirm: Function,
  defaultCalendarStartTime: Number,
  defaultCalendarEndTime: Number,
  bindCalendarMonths: Boolean,
  monthFormat: {
    type: String,
    default: "M"
  },
  yearFormat: {
    type: String,
    default: "y"
  },
  quarterFormat: {
    type: String,
    default: "'Q'Q"
  },
  "onUpdate:show": [Function, Array],
  onUpdateShow: [Function, Array],
  "onUpdate:formattedValue": [Function, Array],
  onUpdateFormattedValue: [Function, Array],
  "onUpdate:value": [Function, Array],
  onUpdateValue: [Function, Array],
  onFocus: [Function, Array],
  onBlur: [Function, Array],
  onNextMonth: Function,
  onPrevMonth: Function,
  onNextYear: Function,
  onPrevYear: Function,
  // deprecated
  onChange: [Function, Array]
});
const __nuxt_component_11 = defineComponent({
  name: "DatePicker",
  props: datePickerProps,
  setup(props, {
    slots
  }) {
    var _a;
    if (process.env.NODE_ENV !== "production") {
      watchEffect(() => {
        if (props.onChange !== void 0) {
          warnOnce("date-picker", "`on-change` is deprecated, please use `on-update:value` instead.");
        }
      });
    }
    const {
      localeRef,
      dateLocaleRef
    } = useLocale("DatePicker");
    const formItem = useFormItem(props);
    const {
      mergedSizeRef,
      mergedDisabledRef,
      mergedStatusRef
    } = formItem;
    const {
      mergedComponentPropsRef,
      mergedClsPrefixRef,
      mergedBorderedRef,
      namespaceRef,
      inlineThemeDisabled
    } = useConfig(props);
    const panelInstRef = ref(null);
    const triggerElRef = ref(null);
    const inputInstRef = ref(null);
    const uncontrolledShowRef = ref(false);
    const controlledShowRef = toRef(props, "show");
    const mergedShowRef = useMergedState(controlledShowRef, uncontrolledShowRef);
    const dateFnsOptionsRef = computed(() => {
      return {
        locale: dateLocaleRef.value.locale
      };
    });
    const mergedFormatRef = computed(() => {
      const {
        format: format2
      } = props;
      if (format2)
        return format2;
      switch (props.type) {
        case "date":
        case "daterange":
          return localeRef.value.dateFormat;
        case "datetime":
        case "datetimerange":
          return localeRef.value.dateTimeFormat;
        case "year":
        case "yearrange":
          return localeRef.value.yearTypeFormat;
        case "month":
        case "monthrange":
          return localeRef.value.monthTypeFormat;
        case "quarter":
        case "quarterrange":
          return localeRef.value.quarterFormat;
        case "week":
          return localeRef.value.weekFormat;
      }
    });
    const mergedValueFormatRef = computed(() => {
      var _a2;
      return (_a2 = props.valueFormat) !== null && _a2 !== void 0 ? _a2 : mergedFormatRef.value;
    });
    function getTimestampValue(value) {
      if (value === null)
        return null;
      const {
        value: mergedValueFormat
      } = mergedValueFormatRef;
      const {
        value: dateFnsOptions
      } = dateFnsOptionsRef;
      if (Array.isArray(value)) {
        return [strictParse(value[0], mergedValueFormat, /* @__PURE__ */ new Date(), dateFnsOptions).getTime(), strictParse(value[1], mergedValueFormat, /* @__PURE__ */ new Date(), dateFnsOptions).getTime()];
      }
      return strictParse(value, mergedValueFormat, /* @__PURE__ */ new Date(), dateFnsOptions).getTime();
    }
    const {
      defaultFormattedValue,
      defaultValue
    } = props;
    const uncontrolledValueRef = ref((_a = defaultFormattedValue !== void 0 ? getTimestampValue(defaultFormattedValue) : defaultValue) !== null && _a !== void 0 ? _a : null);
    const controlledValueRef = computed(() => {
      const {
        formattedValue
      } = props;
      if (formattedValue !== void 0) {
        return getTimestampValue(formattedValue);
      }
      return props.value;
    });
    const mergedValueRef = useMergedState(controlledValueRef, uncontrolledValueRef);
    const pendingValueRef = ref(null);
    watchEffect(() => {
      pendingValueRef.value = mergedValueRef.value;
    });
    const singleInputValueRef = ref("");
    const rangeStartInputValueRef = ref("");
    const rangeEndInputValueRef = ref("");
    const themeRef = useTheme("DatePicker", "-date-picker", style$c, datePickerLight, props, mergedClsPrefixRef);
    const timePickerSizeRef = computed(() => {
      var _a2, _b;
      return ((_b = (_a2 = mergedComponentPropsRef === null || mergedComponentPropsRef === void 0 ? void 0 : mergedComponentPropsRef.value) === null || _a2 === void 0 ? void 0 : _a2.DatePicker) === null || _b === void 0 ? void 0 : _b.timePickerSize) || "small";
    });
    const isRangeRef = computed(() => {
      return ["daterange", "datetimerange", "monthrange", "quarterrange", "yearrange"].includes(props.type);
    });
    const localizedPlacehoderRef = computed(() => {
      const {
        placeholder
      } = props;
      if (placeholder === void 0) {
        const {
          type
        } = props;
        switch (type) {
          case "date":
            return localeRef.value.datePlaceholder;
          case "datetime":
            return localeRef.value.datetimePlaceholder;
          case "month":
            return localeRef.value.monthPlaceholder;
          case "year":
            return localeRef.value.yearPlaceholder;
          case "quarter":
            return localeRef.value.quarterPlaceholder;
          case "week":
            return localeRef.value.weekPlaceholder;
          default:
            return "";
        }
      } else {
        return placeholder;
      }
    });
    const localizedStartPlaceholderRef = computed(() => {
      if (props.startPlaceholder === void 0) {
        if (props.type === "daterange") {
          return localeRef.value.startDatePlaceholder;
        } else if (props.type === "datetimerange") {
          return localeRef.value.startDatetimePlaceholder;
        } else if (props.type === "monthrange") {
          return localeRef.value.startMonthPlaceholder;
        }
        return "";
      } else {
        return props.startPlaceholder;
      }
    });
    const localizedEndPlaceholderRef = computed(() => {
      if (props.endPlaceholder === void 0) {
        if (props.type === "daterange") {
          return localeRef.value.endDatePlaceholder;
        } else if (props.type === "datetimerange") {
          return localeRef.value.endDatetimePlaceholder;
        } else if (props.type === "monthrange") {
          return localeRef.value.endMonthPlaceholder;
        }
        return "";
      } else {
        return props.endPlaceholder;
      }
    });
    const mergedActionsRef = computed(() => {
      const {
        actions,
        type,
        clearable
      } = props;
      if (actions === null)
        return [];
      if (actions !== void 0)
        return actions;
      const result = clearable ? ["clear"] : [];
      switch (type) {
        case "date":
        case "week": {
          result.push("now");
          return result;
        }
        case "datetime": {
          result.push("now", "confirm");
          return result;
        }
        case "daterange": {
          result.push("confirm");
          return result;
        }
        case "datetimerange": {
          result.push("confirm");
          return result;
        }
        case "month": {
          result.push("now", "confirm");
          return result;
        }
        case "year": {
          result.push("now");
          return result;
        }
        case "quarter": {
          result.push("now", "confirm");
          return result;
        }
        case "monthrange":
        case "yearrange":
        case "quarterrange": {
          result.push("confirm");
          return result;
        }
        default: {
          warn("date-picker", "The type is wrong, n-date-picker's type only supports `date`, `datetime`, `daterange` and `datetimerange`.");
          break;
        }
      }
    });
    function getFormattedValue(value) {
      if (value === null)
        return null;
      if (Array.isArray(value)) {
        const {
          value: mergedValueFormat
        } = mergedValueFormatRef;
        const {
          value: dateFnsOptions
        } = dateFnsOptionsRef;
        return [format$3(value[0], mergedValueFormat, dateFnsOptions), format$3(value[1], mergedValueFormat, dateFnsOptionsRef.value)];
      } else {
        return format$3(value, mergedValueFormatRef.value, dateFnsOptionsRef.value);
      }
    }
    function doUpdatePendingValue(value) {
      pendingValueRef.value = value;
    }
    function doUpdateFormattedValue(value, timestampValue) {
      const {
        "onUpdate:formattedValue": _onUpdateFormattedValue,
        onUpdateFormattedValue
      } = props;
      if (_onUpdateFormattedValue) {
        call(_onUpdateFormattedValue, value, timestampValue);
      }
      if (onUpdateFormattedValue) {
        call(onUpdateFormattedValue, value, timestampValue);
      }
    }
    function doUpdateValue(value, options) {
      const {
        "onUpdate:value": _onUpdateValue,
        onUpdateValue,
        onChange
      } = props;
      const {
        nTriggerFormChange,
        nTriggerFormInput
      } = formItem;
      const formattedValue = getFormattedValue(value);
      if (options.doConfirm) {
        doConfirm(value, formattedValue);
      }
      if (onUpdateValue) {
        call(onUpdateValue, value, formattedValue);
      }
      if (_onUpdateValue) {
        call(_onUpdateValue, value, formattedValue);
      }
      if (onChange)
        call(onChange, value, formattedValue);
      uncontrolledValueRef.value = value;
      doUpdateFormattedValue(formattedValue, value);
      nTriggerFormChange();
      nTriggerFormInput();
    }
    function doClear() {
      const {
        onClear
      } = props;
      onClear === null || onClear === void 0 ? void 0 : onClear();
    }
    function doConfirm(value, formattedValue) {
      const {
        onConfirm
      } = props;
      if (onConfirm)
        onConfirm(value, formattedValue);
    }
    function doFocus(e2) {
      const {
        onFocus
      } = props;
      const {
        nTriggerFormFocus
      } = formItem;
      if (onFocus)
        call(onFocus, e2);
      nTriggerFormFocus();
    }
    function doBlur(e2) {
      const {
        onBlur
      } = props;
      const {
        nTriggerFormBlur
      } = formItem;
      if (onBlur)
        call(onBlur, e2);
      nTriggerFormBlur();
    }
    function doUpdateShow(show) {
      const {
        "onUpdate:show": _onUpdateShow,
        onUpdateShow
      } = props;
      if (_onUpdateShow)
        call(_onUpdateShow, show);
      if (onUpdateShow)
        call(onUpdateShow, show);
      uncontrolledShowRef.value = show;
    }
    function handleKeydown(e2) {
      if (e2.key === "Escape") {
        if (mergedShowRef.value) {
          markEventEffectPerformed(e2);
          closeCalendar({
            returnFocus: true
          });
        }
      }
    }
    function handleInputKeydown(e2) {
      if (e2.key === "Escape" && mergedShowRef.value) {
        markEventEffectPerformed(e2);
      }
    }
    function handleClear() {
      var _a2;
      doUpdateShow(false);
      (_a2 = inputInstRef.value) === null || _a2 === void 0 ? void 0 : _a2.deactivate();
      doClear();
    }
    function handlePanelClear() {
      var _a2;
      (_a2 = inputInstRef.value) === null || _a2 === void 0 ? void 0 : _a2.deactivate();
      doClear();
    }
    function handlePanelTabOut() {
      closeCalendar({
        returnFocus: true
      });
    }
    function handleClickOutside(e2) {
      var _a2;
      if (mergedShowRef.value && !((_a2 = triggerElRef.value) === null || _a2 === void 0 ? void 0 : _a2.contains(getPreciseEventTarget(e2)))) {
        closeCalendar({
          returnFocus: false
        });
      }
    }
    function handlePanelClose(disableUpdateOnClose) {
      closeCalendar({
        returnFocus: true,
        disableUpdateOnClose
      });
    }
    function handlePanelUpdateValue(value, doUpdate) {
      if (doUpdate) {
        doUpdateValue(value, {
          doConfirm: false
        });
      } else {
        doUpdatePendingValue(value);
      }
    }
    function handlePanelConfirm() {
      const pendingValue = pendingValueRef.value;
      doUpdateValue(Array.isArray(pendingValue) ? [pendingValue[0], pendingValue[1]] : pendingValue, {
        doConfirm: true
      });
    }
    function deriveInputState() {
      const {
        value
      } = pendingValueRef;
      if (isRangeRef.value) {
        if (Array.isArray(value) || value === null) {
          deriveRangeInputState(value);
        }
      } else {
        if (!Array.isArray(value)) {
          deriveSingleInputState(value);
        }
      }
    }
    function deriveSingleInputState(value) {
      if (value === null) {
        singleInputValueRef.value = "";
      } else {
        singleInputValueRef.value = format$3(value, mergedFormatRef.value, dateFnsOptionsRef.value);
      }
    }
    function deriveRangeInputState(values) {
      if (values === null) {
        rangeStartInputValueRef.value = "";
        rangeEndInputValueRef.value = "";
      } else {
        const dateFnsOptions = dateFnsOptionsRef.value;
        rangeStartInputValueRef.value = format$3(values[0], mergedFormatRef.value, dateFnsOptions);
        rangeEndInputValueRef.value = format$3(values[1], mergedFormatRef.value, dateFnsOptions);
      }
    }
    function handleInputActivate() {
      if (!mergedShowRef.value) {
        openCalendar();
      }
    }
    function handleInputBlur(e2) {
      var _a2;
      if (!((_a2 = panelInstRef.value) === null || _a2 === void 0 ? void 0 : _a2.$el.contains(e2.relatedTarget))) {
        doBlur(e2);
        deriveInputState();
        closeCalendar({
          returnFocus: false
        });
      }
    }
    function handleInputDeactivate() {
      if (mergedDisabledRef.value)
        return;
      deriveInputState();
      closeCalendar({
        returnFocus: false
      });
    }
    function handleSingleUpdateValue(v) {
      if (v === "") {
        doUpdateValue(null, {
          doConfirm: false
        });
        pendingValueRef.value = null;
        singleInputValueRef.value = "";
        return;
      }
      const newSelectedDateTime = strictParse(v, mergedFormatRef.value, /* @__PURE__ */ new Date(), dateFnsOptionsRef.value);
      if (isValid$1(newSelectedDateTime)) {
        doUpdateValue(getTime(newSelectedDateTime), {
          doConfirm: false
        });
        deriveInputState();
      } else {
        singleInputValueRef.value = v;
      }
    }
    function handleRangeUpdateValue(v, {
      source
    }) {
      if (v[0] === "" && v[1] === "") {
        doUpdateValue(null, {
          doConfirm: false
        });
        pendingValueRef.value = null;
        rangeStartInputValueRef.value = "";
        rangeEndInputValueRef.value = "";
        return;
      }
      const [startTime, endTime] = v;
      const newStartTime = strictParse(startTime, mergedFormatRef.value, /* @__PURE__ */ new Date(), dateFnsOptionsRef.value);
      const newEndTime = strictParse(endTime, mergedFormatRef.value, /* @__PURE__ */ new Date(), dateFnsOptionsRef.value);
      if (isValid$1(newStartTime) && isValid$1(newEndTime)) {
        let newStartTs = getTime(newStartTime);
        let newEndTs = getTime(newEndTime);
        if (newEndTime < newStartTime) {
          if (source === 0) {
            newEndTs = newStartTs;
          } else {
            newStartTs = newEndTs;
          }
        }
        doUpdateValue([newStartTs, newEndTs], {
          doConfirm: false
        });
        deriveInputState();
      } else {
        [rangeStartInputValueRef.value, rangeEndInputValueRef.value] = v;
      }
    }
    function handleTriggerClick(e2) {
      if (mergedDisabledRef.value)
        return;
      if (happensIn(e2, "clear"))
        return;
      if (!mergedShowRef.value) {
        openCalendar();
      }
    }
    function handleInputFocus(e2) {
      if (mergedDisabledRef.value)
        return;
      doFocus(e2);
    }
    function openCalendar() {
      if (mergedDisabledRef.value || mergedShowRef.value)
        return;
      doUpdateShow(true);
    }
    function closeCalendar({
      returnFocus,
      disableUpdateOnClose
    }) {
      var _a2;
      if (mergedShowRef.value) {
        doUpdateShow(false);
        if (props.type !== "date" && props.updateValueOnClose && !disableUpdateOnClose) {
          handlePanelConfirm();
        }
        if (returnFocus) {
          (_a2 = inputInstRef.value) === null || _a2 === void 0 ? void 0 : _a2.focus();
        }
      }
    }
    watch(pendingValueRef, () => {
      deriveInputState();
    });
    deriveInputState();
    watch(mergedShowRef, (value) => {
      if (!value) {
        pendingValueRef.value = mergedValueRef.value;
      }
    });
    const uniVaidation = uniCalendarValidation(props, pendingValueRef);
    const dualValidation = dualCalendarValidation(props, pendingValueRef);
    provide(datePickerInjectionKey, Object.assign(Object.assign(Object.assign({
      mergedClsPrefixRef,
      mergedThemeRef: themeRef,
      timePickerSizeRef,
      localeRef,
      dateLocaleRef,
      firstDayOfWeekRef: toRef(props, "firstDayOfWeek"),
      isDateDisabledRef: toRef(props, "isDateDisabled"),
      rangesRef: toRef(props, "ranges"),
      timePickerPropsRef: toRef(props, "timePickerProps"),
      closeOnSelectRef: toRef(props, "closeOnSelect"),
      updateValueOnCloseRef: toRef(props, "updateValueOnClose"),
      monthFormatRef: toRef(props, "monthFormat"),
      yearFormatRef: toRef(props, "yearFormat"),
      quarterFormatRef: toRef(props, "quarterFormat")
    }, uniVaidation), dualValidation), {
      datePickerSlots: slots
    }));
    const exposedMethods = {
      focus: () => {
        var _a2;
        (_a2 = inputInstRef.value) === null || _a2 === void 0 ? void 0 : _a2.focus();
      },
      blur: () => {
        var _a2;
        (_a2 = inputInstRef.value) === null || _a2 === void 0 ? void 0 : _a2.blur();
      }
    };
    const triggerCssVarsRef = computed(() => {
      const {
        common: {
          cubicBezierEaseInOut
        },
        self: {
          iconColor,
          iconColorDisabled
        }
      } = themeRef.value;
      return {
        "--n-bezier": cubicBezierEaseInOut,
        "--n-icon-color-override": iconColor,
        "--n-icon-color-disabled-override": iconColorDisabled
      };
    });
    const triggerThemeClassHandle = inlineThemeDisabled ? useThemeClass("date-picker-trigger", void 0, triggerCssVarsRef, props) : void 0;
    const cssVarsRef = computed(() => {
      const {
        type
      } = props;
      const {
        common: {
          cubicBezierEaseInOut
        },
        self: {
          calendarTitleFontSize,
          calendarDaysFontSize,
          itemFontSize,
          itemTextColor,
          itemColorDisabled,
          itemColorIncluded,
          itemColorHover,
          itemColorActive,
          itemBorderRadius,
          itemTextColorDisabled,
          itemTextColorActive,
          panelColor,
          panelTextColor,
          arrowColor,
          calendarTitleTextColor,
          panelActionDividerColor,
          panelHeaderDividerColor,
          calendarDaysDividerColor,
          panelBoxShadow,
          panelBorderRadius,
          calendarTitleFontWeight,
          panelExtraFooterPadding,
          panelActionPadding,
          itemSize,
          itemCellWidth,
          itemCellHeight,
          scrollItemWidth,
          scrollItemHeight,
          calendarTitlePadding,
          calendarTitleHeight,
          calendarDaysHeight,
          calendarDaysTextColor,
          arrowSize,
          panelHeaderPadding,
          calendarDividerColor,
          calendarTitleGridTempateColumns,
          iconColor,
          iconColorDisabled,
          scrollItemBorderRadius,
          calendarTitleColorHover,
          [createKey("calendarLeftPadding", type)]: calendarLeftPadding,
          [createKey("calendarRightPadding", type)]: calendarRightPadding
        }
      } = themeRef.value;
      return {
        "--n-bezier": cubicBezierEaseInOut,
        "--n-panel-border-radius": panelBorderRadius,
        "--n-panel-color": panelColor,
        "--n-panel-box-shadow": panelBoxShadow,
        "--n-panel-text-color": panelTextColor,
        // panel header
        "--n-panel-header-padding": panelHeaderPadding,
        "--n-panel-header-divider-color": panelHeaderDividerColor,
        // panel calendar
        "--n-calendar-left-padding": calendarLeftPadding,
        "--n-calendar-right-padding": calendarRightPadding,
        "--n-calendar-title-color-hover": calendarTitleColorHover,
        "--n-calendar-title-height": calendarTitleHeight,
        "--n-calendar-title-padding": calendarTitlePadding,
        "--n-calendar-title-font-size": calendarTitleFontSize,
        "--n-calendar-title-font-weight": calendarTitleFontWeight,
        "--n-calendar-title-text-color": calendarTitleTextColor,
        "--n-calendar-title-grid-template-columns": calendarTitleGridTempateColumns,
        "--n-calendar-days-height": calendarDaysHeight,
        "--n-calendar-days-divider-color": calendarDaysDividerColor,
        "--n-calendar-days-font-size": calendarDaysFontSize,
        "--n-calendar-days-text-color": calendarDaysTextColor,
        "--n-calendar-divider-color": calendarDividerColor,
        // panel action
        "--n-panel-action-padding": panelActionPadding,
        "--n-panel-extra-footer-padding": panelExtraFooterPadding,
        "--n-panel-action-divider-color": panelActionDividerColor,
        // panel item
        "--n-item-font-size": itemFontSize,
        "--n-item-border-radius": itemBorderRadius,
        "--n-item-size": itemSize,
        "--n-item-cell-width": itemCellWidth,
        "--n-item-cell-height": itemCellHeight,
        "--n-item-text-color": itemTextColor,
        "--n-item-color-included": itemColorIncluded,
        "--n-item-color-disabled": itemColorDisabled,
        "--n-item-color-hover": itemColorHover,
        "--n-item-color-active": itemColorActive,
        "--n-item-text-color-disabled": itemTextColorDisabled,
        "--n-item-text-color-active": itemTextColorActive,
        // scroll item
        "--n-scroll-item-width": scrollItemWidth,
        "--n-scroll-item-height": scrollItemHeight,
        "--n-scroll-item-border-radius": scrollItemBorderRadius,
        // panel arrow
        "--n-arrow-size": arrowSize,
        "--n-arrow-color": arrowColor,
        // icon in trigger
        "--n-icon-color": iconColor,
        "--n-icon-color-disabled": iconColorDisabled
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("date-picker", computed(() => {
      return props.type;
    }), cssVarsRef, props) : void 0;
    return Object.assign(Object.assign({}, exposedMethods), {
      mergedStatus: mergedStatusRef,
      mergedClsPrefix: mergedClsPrefixRef,
      mergedBordered: mergedBorderedRef,
      namespace: namespaceRef,
      uncontrolledValue: uncontrolledValueRef,
      pendingValue: pendingValueRef,
      panelInstRef,
      triggerElRef,
      inputInstRef,
      isMounted: useIsMounted(),
      displayTime: singleInputValueRef,
      displayStartTime: rangeStartInputValueRef,
      displayEndTime: rangeEndInputValueRef,
      mergedShow: mergedShowRef,
      adjustedTo: useAdjustedTo(props),
      isRange: isRangeRef,
      localizedStartPlaceholder: localizedStartPlaceholderRef,
      localizedEndPlaceholder: localizedEndPlaceholderRef,
      mergedSize: mergedSizeRef,
      mergedDisabled: mergedDisabledRef,
      localizedPlacehoder: localizedPlacehoderRef,
      isValueInvalid: uniVaidation.isValueInvalidRef,
      isStartValueInvalid: dualValidation.isStartValueInvalidRef,
      isEndValueInvalid: dualValidation.isEndValueInvalidRef,
      handleInputKeydown,
      handleClickOutside,
      handleKeydown,
      handleClear,
      handlePanelClear,
      handleTriggerClick,
      handleInputActivate,
      handleInputDeactivate,
      handleInputFocus,
      handleInputBlur,
      handlePanelTabOut,
      handlePanelClose,
      handleRangeUpdateValue,
      handleSingleUpdateValue,
      handlePanelUpdateValue,
      handlePanelConfirm,
      mergedTheme: themeRef,
      actions: mergedActionsRef,
      triggerCssVars: inlineThemeDisabled ? void 0 : triggerCssVarsRef,
      triggerThemeClass: triggerThemeClassHandle === null || triggerThemeClassHandle === void 0 ? void 0 : triggerThemeClassHandle.themeClass,
      triggerOnRender: triggerThemeClassHandle === null || triggerThemeClassHandle === void 0 ? void 0 : triggerThemeClassHandle.onRender,
      cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender,
      onNextMonth: props.onNextMonth,
      onPrevMonth: props.onPrevMonth,
      onNextYear: props.onNextYear,
      onPrevYear: props.onPrevYear
    });
  },
  render() {
    const {
      clearable,
      triggerOnRender,
      mergedClsPrefix,
      $slots
    } = this;
    const commonPanelProps = {
      onUpdateValue: this.handlePanelUpdateValue,
      onTabOut: this.handlePanelTabOut,
      onClose: this.handlePanelClose,
      onClear: this.handlePanelClear,
      onKeydown: this.handleKeydown,
      onConfirm: this.handlePanelConfirm,
      ref: "panelInstRef",
      value: this.pendingValue,
      active: this.mergedShow,
      actions: this.actions,
      shortcuts: this.shortcuts,
      style: this.cssVars,
      defaultTime: this.defaultTime,
      themeClass: this.themeClass,
      panel: this.panel,
      onRender: this.onRender,
      onNextMonth: this.onNextMonth,
      onPrevMonth: this.onPrevMonth,
      onNextYear: this.onNextYear,
      onPrevYear: this.onPrevYear,
      timerPickerFormat: this.timerPickerFormat
    };
    const renderPanel = () => {
      const {
        type
      } = this;
      return type === "datetime" ? h(DatetimePanel, Object.assign({}, commonPanelProps, {
        defaultCalendarStartTime: this.defaultCalendarStartTime
      }), $slots) : type === "daterange" ? h(DaterangePanel, Object.assign({}, commonPanelProps, {
        defaultCalendarStartTime: this.defaultCalendarStartTime,
        defaultCalendarEndTime: this.defaultCalendarEndTime,
        bindCalendarMonths: this.bindCalendarMonths
      }), $slots) : type === "datetimerange" ? h(DatetimerangePanel, Object.assign({}, commonPanelProps, {
        defaultCalendarStartTime: this.defaultCalendarStartTime,
        defaultCalendarEndTime: this.defaultCalendarEndTime,
        bindCalendarMonths: this.bindCalendarMonths
      }), $slots) : type === "month" || type === "year" || type === "quarter" ? h(MonthPanel, Object.assign({}, commonPanelProps, {
        type,
        key: type
      })) : type === "monthrange" || type === "yearrange" || type === "quarterrange" ? h(MonthRangePanel, Object.assign({}, commonPanelProps, {
        type
      })) : h(DatePanel, Object.assign({}, commonPanelProps, {
        type,
        defaultCalendarStartTime: this.defaultCalendarStartTime
      }), $slots);
    };
    if (this.panel) {
      return renderPanel();
    }
    triggerOnRender === null || triggerOnRender === void 0 ? void 0 : triggerOnRender();
    const commonInputProps = {
      bordered: this.mergedBordered,
      size: this.mergedSize,
      passivelyActivated: true,
      disabled: this.mergedDisabled,
      readonly: this.inputReadonly || this.mergedDisabled,
      clearable,
      onClear: this.handleClear,
      onClick: this.handleTriggerClick,
      onKeydown: this.handleInputKeydown,
      onActivate: this.handleInputActivate,
      onDeactivate: this.handleInputDeactivate,
      onFocus: this.handleInputFocus,
      onBlur: this.handleInputBlur
    };
    return h("div", {
      ref: "triggerElRef",
      class: [`${mergedClsPrefix}-date-picker`, this.mergedDisabled && `${mergedClsPrefix}-date-picker--disabled`, this.isRange && `${mergedClsPrefix}-date-picker--range`, this.triggerThemeClass],
      style: this.triggerCssVars,
      onKeydown: this.handleKeydown
    }, h(Binder, null, {
      default: () => [h(VTarget, null, {
        default: () => this.isRange ? h(__nuxt_component_3, Object.assign({
          ref: "inputInstRef",
          status: this.mergedStatus,
          value: [this.displayStartTime, this.displayEndTime],
          placeholder: [this.localizedStartPlaceholder, this.localizedEndPlaceholder],
          textDecoration: [this.isStartValueInvalid ? "line-through" : "", this.isEndValueInvalid ? "line-through" : ""],
          pair: true,
          onUpdateValue: this.handleRangeUpdateValue,
          theme: this.mergedTheme.peers.Input,
          themeOverrides: this.mergedTheme.peerOverrides.Input,
          internalForceFocus: this.mergedShow,
          internalDeactivateOnEnter: true
        }, commonInputProps), {
          separator: () => this.separator === void 0 ? resolveSlot($slots.separator, () => [h(NBaseIcon, {
            clsPrefix: mergedClsPrefix,
            class: `${mergedClsPrefix}-date-picker-icon`
          }, {
            default: () => h(ToIcon, null)
          })]) : this.separator,
          [clearable ? "clear-icon-placeholder" : "suffix"]: () => resolveSlot($slots["date-icon"], () => [h(NBaseIcon, {
            clsPrefix: mergedClsPrefix,
            class: `${mergedClsPrefix}-date-picker-icon`
          }, {
            default: () => h(DateIcon, null)
          })])
        }) : h(__nuxt_component_3, Object.assign({
          ref: "inputInstRef",
          status: this.mergedStatus,
          value: this.displayTime,
          placeholder: this.localizedPlacehoder,
          textDecoration: this.isValueInvalid && !this.isRange ? "line-through" : "",
          onUpdateValue: this.handleSingleUpdateValue,
          theme: this.mergedTheme.peers.Input,
          themeOverrides: this.mergedTheme.peerOverrides.Input,
          internalForceFocus: this.mergedShow,
          internalDeactivateOnEnter: true
        }, commonInputProps), {
          [clearable ? "clear-icon-placeholder" : "suffix"]: () => h(NBaseIcon, {
            clsPrefix: mergedClsPrefix,
            class: `${mergedClsPrefix}-date-picker-icon`
          }, {
            default: () => resolveSlot($slots["date-icon"], () => [h(DateIcon, null)])
          })
        })
      }), h(VFollower, {
        show: this.mergedShow,
        containerClass: this.namespace,
        to: this.adjustedTo,
        teleportDisabled: this.adjustedTo === useAdjustedTo.tdkey,
        placement: this.placement
      }, {
        default: () => h(Transition, {
          name: "fade-in-scale-up-transition",
          appear: this.isMounted
        }, {
          default: () => {
            if (!this.mergedShow)
              return null;
            return withDirectives(renderPanel(), [[clickoutside, this.handleClickOutside, void 0, {
              capture: true
            }]]);
          }
        })
      })]
    }));
  }
});
const commonVariables$7 = {
  thPaddingBorderedSmall: "8px 12px",
  thPaddingBorderedMedium: "12px 16px",
  thPaddingBorderedLarge: "16px 24px",
  thPaddingSmall: "0",
  thPaddingMedium: "0",
  thPaddingLarge: "0",
  tdPaddingBorderedSmall: "8px 12px",
  tdPaddingBorderedMedium: "12px 16px",
  tdPaddingBorderedLarge: "16px 24px",
  tdPaddingSmall: "0 0 8px 0",
  tdPaddingMedium: "0 0 12px 0",
  tdPaddingLarge: "0 0 16px 0"
};
const self$L = (vars) => {
  const {
    tableHeaderColor,
    textColor2,
    textColor1,
    cardColor,
    modalColor,
    popoverColor,
    dividerColor,
    borderRadius,
    fontWeightStrong,
    lineHeight,
    fontSizeSmall,
    fontSizeMedium,
    fontSizeLarge
  } = vars;
  return Object.assign(Object.assign({}, commonVariables$7), {
    lineHeight,
    fontSizeSmall,
    fontSizeMedium,
    fontSizeLarge,
    titleTextColor: textColor1,
    thColor: composite(cardColor, tableHeaderColor),
    thColorModal: composite(modalColor, tableHeaderColor),
    thColorPopover: composite(popoverColor, tableHeaderColor),
    thTextColor: textColor1,
    thFontWeight: fontWeightStrong,
    tdTextColor: textColor2,
    tdColor: cardColor,
    tdColorModal: modalColor,
    tdColorPopover: popoverColor,
    borderColor: composite(cardColor, dividerColor),
    borderColorModal: composite(modalColor, dividerColor),
    borderColorPopover: composite(popoverColor, dividerColor),
    borderRadius
  });
};
const descriptionsLight = {
  name: "Descriptions",
  common: derived$1,
  self: self$L
};
const descriptionsDark = {
  name: "Descriptions",
  common: derived,
  self: self$L
};
const commonVars$6 = {
  titleFontSize: "18px",
  padding: "16px 28px 20px 28px",
  iconSize: "28px",
  actionSpace: "12px",
  contentMargin: "8px 0 16px 0",
  iconMargin: "0 4px 0 0",
  iconMarginIconTop: "4px 0 8px 0",
  closeSize: "22px",
  closeIconSize: "18px",
  closeMargin: "20px 26px 0 0",
  closeMarginIconTop: "10px 16px 0 0"
};
const self$K = (vars) => {
  const {
    textColor1,
    textColor2,
    modalColor,
    closeIconColor,
    closeIconColorHover,
    closeIconColorPressed,
    closeColorHover,
    closeColorPressed,
    infoColor,
    successColor,
    warningColor,
    errorColor,
    primaryColor,
    dividerColor,
    borderRadius,
    fontWeightStrong,
    lineHeight,
    fontSize
  } = vars;
  return Object.assign(Object.assign({}, commonVars$6), {
    fontSize,
    lineHeight,
    border: `1px solid ${dividerColor}`,
    titleTextColor: textColor1,
    textColor: textColor2,
    color: modalColor,
    closeColorHover,
    closeColorPressed,
    closeIconColor,
    closeIconColorHover,
    closeIconColorPressed,
    closeBorderRadius: borderRadius,
    iconColor: primaryColor,
    iconColorInfo: infoColor,
    iconColorSuccess: successColor,
    iconColorWarning: warningColor,
    iconColorError: errorColor,
    borderRadius,
    titleFontWeight: fontWeightStrong
  });
};
const dialogLight = createTheme({
  name: "Dialog",
  common: derived$1,
  peers: {
    Button: buttonLight
  },
  self: self$K
});
const dialogDark = {
  name: "Dialog",
  common: derived,
  peers: {
    Button: buttonDark
  },
  self: self$K
};
const self$J = (vars) => {
  const {
    modalColor,
    textColor2,
    boxShadow3
  } = vars;
  return {
    color: modalColor,
    textColor: textColor2,
    boxShadow: boxShadow3
  };
};
const modalLight = createTheme({
  name: "Modal",
  common: derived$1,
  peers: {
    Scrollbar: scrollbarLight,
    Dialog: dialogLight,
    Card: cardLight
  },
  self: self$J
});
const modalDark = {
  name: "Modal",
  common: derived,
  peers: {
    Scrollbar: scrollbarDark,
    Dialog: dialogDark,
    Card: cardDark
  },
  self: self$J
};
const self$I = (vars) => {
  const {
    textColor1,
    dividerColor,
    fontWeightStrong
  } = vars;
  return {
    textColor: textColor1,
    color: dividerColor,
    fontWeight: fontWeightStrong
  };
};
const dividerLight = {
  name: "Divider",
  common: derived$1,
  self: self$I
};
const dividerDark = {
  name: "Divider",
  common: derived,
  self: self$I
};
const style$b = cB("divider", `
 position: relative;
 display: flex;
 width: 100%;
 box-sizing: border-box;
 font-size: 16px;
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
`, [cNotM("vertical", `
 margin-top: 24px;
 margin-bottom: 24px;
 `, [cNotM("no-title", `
 display: flex;
 align-items: center;
 `)]), cE("title", `
 display: flex;
 align-items: center;
 margin-left: 12px;
 margin-right: 12px;
 white-space: nowrap;
 font-weight: var(--n-font-weight);
 `), cM("title-position-left", [cE("line", [cM("left", {
  width: "28px"
})])]), cM("title-position-right", [cE("line", [cM("right", {
  width: "28px"
})])]), cM("dashed", [cE("line", `
 background-color: #0000;
 height: 0px;
 width: 100%;
 border-style: dashed;
 border-width: 1px 0 0;
 `)]), cM("vertical", `
 display: inline-block;
 height: 1em;
 margin: 0 8px;
 vertical-align: middle;
 width: 1px;
 `), cE("line", `
 border: none;
 transition: background-color .3s var(--n-bezier), border-color .3s var(--n-bezier);
 height: 1px;
 width: 100%;
 margin: 0;
 `), cNotM("dashed", [cE("line", {
  backgroundColor: "var(--n-color)"
})]), cM("dashed", [cE("line", {
  borderColor: "var(--n-color)"
})]), cM("vertical", {
  backgroundColor: "var(--n-color)"
})]);
const dividerProps = Object.assign(Object.assign({}, useTheme.props), {
  titlePlacement: {
    type: String,
    default: "center"
  },
  dashed: Boolean,
  vertical: Boolean
});
const __nuxt_component_19 = defineComponent({
  name: "Divider",
  props: dividerProps,
  setup(props) {
    const {
      mergedClsPrefixRef,
      inlineThemeDisabled
    } = useConfig(props);
    const themeRef = useTheme("Divider", "-divider", style$b, dividerLight, props, mergedClsPrefixRef);
    const cssVarsRef = computed(() => {
      const {
        common: {
          cubicBezierEaseInOut
        },
        self: {
          color,
          textColor,
          fontWeight
        }
      } = themeRef.value;
      return {
        "--n-bezier": cubicBezierEaseInOut,
        "--n-color": color,
        "--n-text-color": textColor,
        "--n-font-weight": fontWeight
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("divider", void 0, cssVarsRef, props) : void 0;
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
    };
  },
  render() {
    var _a;
    const {
      $slots,
      titlePlacement,
      vertical,
      dashed,
      cssVars,
      mergedClsPrefix
    } = this;
    (_a = this.onRender) === null || _a === void 0 ? void 0 : _a.call(this);
    return h("div", {
      role: "separator",
      class: [`${mergedClsPrefix}-divider`, this.themeClass, {
        [`${mergedClsPrefix}-divider--vertical`]: vertical,
        [`${mergedClsPrefix}-divider--no-title`]: !$slots.default,
        [`${mergedClsPrefix}-divider--dashed`]: dashed,
        [`${mergedClsPrefix}-divider--title-position-${titlePlacement}`]: $slots.default && titlePlacement
      }],
      style: cssVars
    }, !vertical ? h("div", {
      class: `${mergedClsPrefix}-divider__line ${mergedClsPrefix}-divider__line--left`
    }) : null, !vertical && $slots.default ? h(Fragment, null, h("div", {
      class: `${mergedClsPrefix}-divider__title`
    }, this.$slots), h("div", {
      class: `${mergedClsPrefix}-divider__line ${mergedClsPrefix}-divider__line--right`
    })) : null);
  }
});
const self$H = (vars) => {
  const {
    modalColor,
    textColor1,
    textColor2,
    boxShadow3,
    lineHeight,
    fontWeightStrong,
    dividerColor,
    closeColorHover,
    closeColorPressed,
    closeIconColor,
    closeIconColorHover,
    closeIconColorPressed,
    borderRadius,
    primaryColorHover
  } = vars;
  return {
    bodyPadding: "16px 24px",
    borderRadius,
    headerPadding: "16px 24px",
    footerPadding: "16px 24px",
    color: modalColor,
    textColor: textColor2,
    titleTextColor: textColor1,
    titleFontSize: "18px",
    titleFontWeight: fontWeightStrong,
    boxShadow: boxShadow3,
    lineHeight,
    headerBorderBottom: `1px solid ${dividerColor}`,
    footerBorderTop: `1px solid ${dividerColor}`,
    closeIconColor,
    closeIconColorHover,
    closeIconColorPressed,
    closeSize: "22px",
    closeIconSize: "18px",
    closeColorHover,
    closeColorPressed,
    closeBorderRadius: borderRadius,
    resizableTriggerColorHover: primaryColorHover
  };
};
const drawerLight = createTheme({
  name: "Drawer",
  common: derived$1,
  peers: {
    Scrollbar: scrollbarLight
  },
  self: self$H
});
const drawerDark = {
  name: "Drawer",
  common: derived,
  peers: {
    Scrollbar: scrollbarDark
  },
  self: self$H
};
const commonVariables$6 = {
  actionMargin: "0 0 0 20px",
  actionMarginRtl: "0 20px 0 0"
};
const dynamicInputDark = {
  name: "DynamicInput",
  common: derived,
  peers: {
    Input: inputDark,
    Button: buttonDark
  },
  self() {
    return commonVariables$6;
  }
};
const self$G = () => {
  return commonVariables$6;
};
const dynamicInputLight = createTheme({
  name: "DynamicInput",
  common: derived$1,
  peers: {
    Input: inputLight,
    Button: buttonLight
  },
  self: self$G
});
const dynamicInputInjectionKey = createInjectionKey("n-dynamic-input");
const NDynamicInputInputPreset = defineComponent({
  name: "DynamicInputInputPreset",
  props: {
    clsPrefix: {
      type: String,
      required: true
    },
    value: {
      type: String,
      default: ""
    },
    disabled: Boolean,
    parentPath: String,
    path: String,
    onUpdateValue: {
      type: Function,
      required: true
    }
  },
  setup() {
    const {
      mergedThemeRef,
      placeholderRef
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    } = inject(dynamicInputInjectionKey);
    return {
      mergedTheme: mergedThemeRef,
      placeholder: placeholderRef
    };
  },
  render() {
    const {
      mergedTheme,
      placeholder,
      value,
      clsPrefix,
      onUpdateValue,
      disabled
    } = this;
    return h("div", {
      class: `${clsPrefix}-dynamic-input-preset-input`
    }, h(__nuxt_component_3, {
      theme: mergedTheme.peers.Input,
      "theme-overrides": mergedTheme.peerOverrides.Input,
      value,
      placeholder,
      onUpdateValue,
      disabled
    }));
  }
});
const NDynamicInputPairPreset = defineComponent({
  name: "DynamicInputPairPreset",
  props: {
    clsPrefix: {
      type: String,
      required: true
    },
    value: {
      type: Object,
      default: () => ({
        key: "",
        value: ""
      })
    },
    disabled: Boolean,
    parentPath: String,
    path: String,
    onUpdateValue: {
      type: Function,
      required: true
    }
  },
  setup(props) {
    const {
      mergedThemeRef,
      keyPlaceholderRef,
      valuePlaceholderRef
    } = inject(dynamicInputInjectionKey);
    return {
      mergedTheme: mergedThemeRef,
      keyPlaceholder: keyPlaceholderRef,
      valuePlaceholder: valuePlaceholderRef,
      handleKeyInput(key) {
        props.onUpdateValue({
          key,
          value: props.value.value
        });
      },
      handleValueInput(value) {
        props.onUpdateValue({
          key: props.value.key,
          value
        });
      }
    };
  },
  render() {
    const {
      mergedTheme,
      keyPlaceholder,
      valuePlaceholder,
      value,
      clsPrefix,
      disabled
    } = this;
    return h("div", {
      class: `${clsPrefix}-dynamic-input-preset-pair`
    }, h(__nuxt_component_3, {
      theme: mergedTheme.peers.Input,
      "theme-overrides": mergedTheme.peerOverrides.Input,
      value: value.key,
      class: `${clsPrefix}-dynamic-input-pair-input`,
      placeholder: keyPlaceholder,
      onUpdateValue: this.handleKeyInput,
      disabled
    }), h(__nuxt_component_3, {
      theme: mergedTheme.peers.Input,
      "theme-overrides": mergedTheme.peerOverrides.Input,
      value: value.value,
      class: `${clsPrefix}-dynamic-input-pair-input`,
      placeholder: valuePlaceholder,
      onUpdateValue: this.handleValueInput,
      disabled
    }));
  }
});
const style$a = cB("dynamic-input", {
  width: "100%"
}, [cB("dynamic-input-item", `
 margin-bottom: 10px;
 display: flex;
 flex-wrap: nowrap;
 `, [cB("dynamic-input-preset-input", {
  flex: 1,
  alignItems: "center"
}), cB("dynamic-input-preset-pair", `
 flex: 1;
 display: flex;
 align-items: center;
 `, [cB("dynamic-input-pair-input", [c$1("&:first-child", {
  "margin-right": "12px"
})])]), cE("action", `
 align-self: flex-start;
 display: flex;
 justify-content: flex-end;
 flex-shrink: 0;
 flex-grow: 0;
 margin: var(--action-margin);
 `, [cM("icon", {
  cursor: "pointer"
})]), c$1("&:last-child", {
  marginBottom: 0
})]), cB("form-item", `
 padding-top: 0 !important;
 margin-right: 0 !important;
 `, [cB("form-item-blank", {
  paddingTop: "0 !important"
})])]);
const globalDataKeyMap = /* @__PURE__ */ new WeakMap();
const dynamicInputProps = Object.assign(Object.assign({}, useTheme.props), {
  max: Number,
  min: {
    type: Number,
    default: 0
  },
  value: Array,
  // TODO: make it robust for different types
  defaultValue: {
    type: Array,
    default: () => []
  },
  preset: {
    type: String,
    default: "input"
  },
  keyField: String,
  itemClass: String,
  itemStyle: [String, Object],
  // for preset pair
  keyPlaceholder: {
    type: String,
    default: ""
  },
  valuePlaceholder: {
    type: String,
    default: ""
  },
  // for preset input
  placeholder: {
    type: String,
    default: ""
  },
  disabled: Boolean,
  showSortButton: Boolean,
  createButtonProps: Object,
  onCreate: Function,
  onRemove: Function,
  "onUpdate:value": [Function, Array],
  onUpdateValue: [Function, Array],
  // deprecated
  onClear: Function,
  onInput: [Function, Array]
});
const __nuxt_component_9 = defineComponent({
  name: "DynamicInput",
  props: dynamicInputProps,
  setup(props, {
    slots
  }) {
    if (process.env.NODE_ENV !== "production") {
      watchEffect(() => {
        if (props.onClear !== void 0) {
          warnOnce("dynamic-input", "`on-clear` is deprecated, it is out of usage anymore.");
        }
        if (props.onInput !== void 0) {
          warnOnce("dynamic-input", "`on-input` is deprecated, please use `on-update:value` instead.");
        }
      });
    }
    const {
      mergedComponentPropsRef,
      mergedClsPrefixRef,
      mergedRtlRef,
      inlineThemeDisabled
    } = useConfig();
    const NFormItem = inject(formItemInjectionKey, null);
    const uncontrolledValueRef = ref(props.defaultValue);
    const controlledValueRef = toRef(props, "value");
    const mergedValueRef = useMergedState(controlledValueRef, uncontrolledValueRef);
    const themeRef = useTheme("DynamicInput", "-dynamic-input", style$a, dynamicInputLight, props, mergedClsPrefixRef);
    const insertionDisabledRef = computed(() => {
      const {
        value: mergedValue
      } = mergedValueRef;
      if (Array.isArray(mergedValue)) {
        const {
          max
        } = props;
        return max !== void 0 && mergedValue.length >= max;
      }
      return false;
    });
    const removeDisabledRef = computed(() => {
      const {
        value: mergedValue
      } = mergedValueRef;
      if (Array.isArray(mergedValue))
        return mergedValue.length <= props.min;
      return true;
    });
    const buttonSizeRef = computed(() => {
      var _a, _b;
      return (_b = (_a = mergedComponentPropsRef === null || mergedComponentPropsRef === void 0 ? void 0 : mergedComponentPropsRef.value) === null || _a === void 0 ? void 0 : _a.DynamicInput) === null || _b === void 0 ? void 0 : _b.buttonSize;
    });
    function doUpdateValue(value) {
      const {
        onInput,
        "onUpdate:value": _onUpdateValue,
        onUpdateValue
      } = props;
      if (onInput)
        call(onInput, value);
      if (_onUpdateValue)
        call(_onUpdateValue, value);
      if (onUpdateValue)
        call(onUpdateValue, value);
      uncontrolledValueRef.value = value;
    }
    function ensureKey(value, index) {
      if (value === void 0 || value === null)
        return index;
      if (typeof value !== "object")
        return index;
      const rawValue = isProxy(value) ? toRaw(value) : value;
      let key = globalDataKeyMap.get(rawValue);
      if (key === void 0) {
        globalDataKeyMap.set(rawValue, key = createId());
      }
      return key;
    }
    function handleValueChange(index, value) {
      const {
        value: mergedValue
      } = mergedValueRef;
      const newValue = Array.from(mergedValue !== null && mergedValue !== void 0 ? mergedValue : []);
      const originalItem = newValue[index];
      newValue[index] = value;
      if (originalItem && value && typeof originalItem === "object" && typeof value === "object") {
        const rawOriginal = isProxy(originalItem) ? toRaw(originalItem) : originalItem;
        const rawNew = isProxy(value) ? toRaw(value) : value;
        const originalKey = globalDataKeyMap.get(rawOriginal);
        if (originalKey !== void 0) {
          globalDataKeyMap.set(rawNew, originalKey);
        }
      }
      doUpdateValue(newValue);
    }
    function handleCreateClick() {
      createItem(-1);
    }
    function createItem(index) {
      const {
        value: mergedValue
      } = mergedValueRef;
      const {
        onCreate
      } = props;
      const newValue = Array.from(mergedValue !== null && mergedValue !== void 0 ? mergedValue : []);
      if (onCreate) {
        newValue.splice(index + 1, 0, onCreate(index + 1));
        doUpdateValue(newValue);
      } else if (slots.default) {
        newValue.splice(index + 1, 0, null);
        doUpdateValue(newValue);
      } else {
        switch (props.preset) {
          case "input":
            newValue.splice(index + 1, 0, "");
            doUpdateValue(newValue);
            break;
          case "pair":
            newValue.splice(index + 1, 0, {
              key: "",
              value: ""
            });
            doUpdateValue(newValue);
            break;
        }
      }
    }
    function remove(index) {
      const {
        value: mergedValue
      } = mergedValueRef;
      if (!Array.isArray(mergedValue))
        return;
      const {
        min
      } = props;
      if (mergedValue.length <= min)
        return;
      const {
        onRemove
      } = props;
      if (onRemove) {
        onRemove(index);
      }
      const newValue = Array.from(mergedValue);
      newValue.splice(index, 1);
      doUpdateValue(newValue);
    }
    function swap(array, currentIndex, targetIndex) {
      if (currentIndex < 0 || targetIndex < 0 || currentIndex >= array.length || targetIndex >= array.length) {
        return;
      }
      if (currentIndex === targetIndex)
        return;
      const currentItem = array[currentIndex];
      array[currentIndex] = array[targetIndex];
      array[targetIndex] = currentItem;
    }
    function move(type, index) {
      const {
        value: mergedValue
      } = mergedValueRef;
      if (!Array.isArray(mergedValue))
        return;
      const newValue = Array.from(mergedValue);
      if (type === "up") {
        swap(newValue, index, index - 1);
      }
      if (type === "down") {
        swap(newValue, index, index + 1);
      }
      doUpdateValue(newValue);
    }
    provide(dynamicInputInjectionKey, {
      mergedThemeRef: themeRef,
      keyPlaceholderRef: toRef(props, "keyPlaceholder"),
      valuePlaceholderRef: toRef(props, "valuePlaceholder"),
      placeholderRef: toRef(props, "placeholder")
    });
    const rtlEnabledRef = useRtl("DynamicInput", mergedRtlRef, mergedClsPrefixRef);
    const cssVarsRef = computed(() => {
      const {
        self: {
          actionMargin,
          actionMarginRtl
        }
      } = themeRef.value;
      return {
        "--action-margin": actionMargin,
        "--action-margin-rtl": actionMarginRtl
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("dynamic-input", void 0, cssVarsRef, props) : void 0;
    return {
      locale: useLocale("DynamicInput").localeRef,
      rtlEnabled: rtlEnabledRef,
      buttonSize: buttonSizeRef,
      mergedClsPrefix: mergedClsPrefixRef,
      NFormItem,
      uncontrolledValue: uncontrolledValueRef,
      mergedValue: mergedValueRef,
      insertionDisabled: insertionDisabledRef,
      removeDisabled: removeDisabledRef,
      handleCreateClick,
      ensureKey,
      handleValueChange,
      remove,
      move,
      createItem,
      mergedTheme: themeRef,
      cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
    };
  },
  render() {
    const {
      $slots,
      itemClass,
      buttonSize,
      mergedClsPrefix,
      mergedValue,
      locale: locale2,
      mergedTheme,
      keyField,
      itemStyle,
      preset,
      showSortButton,
      NFormItem,
      ensureKey,
      handleValueChange,
      remove,
      createItem,
      move,
      onRender,
      disabled
    } = this;
    onRender === null || onRender === void 0 ? void 0 : onRender();
    return h("div", {
      class: [`${mergedClsPrefix}-dynamic-input`, this.rtlEnabled && `${mergedClsPrefix}-dynamic-input--rtl`, this.themeClass],
      style: this.cssVars
    }, !Array.isArray(mergedValue) || mergedValue.length === 0 ? h(Button, Object.assign({
      block: true,
      ghost: true,
      dashed: true,
      size: buttonSize
    }, this.createButtonProps, {
      disabled: this.insertionDisabled || disabled,
      theme: mergedTheme.peers.Button,
      themeOverrides: mergedTheme.peerOverrides.Button,
      onClick: this.handleCreateClick
    }), {
      default: () => resolveSlot($slots["create-button-default"], () => [locale2.create]),
      icon: () => resolveSlot($slots["create-button-icon"], () => [h(NBaseIcon, {
        clsPrefix: mergedClsPrefix
      }, {
        default: () => h(AddIcon, null)
      })])
    }) : mergedValue.map((_, index) => h("div", {
      key: keyField ? _[keyField] : ensureKey(_, index),
      "data-key": keyField ? _[keyField] : ensureKey(_, index),
      class: [`${mergedClsPrefix}-dynamic-input-item`, itemClass],
      style: itemStyle
    }, resolveSlotWithProps($slots.default, {
      value: mergedValue[index],
      index
    }, () => {
      return [preset === "input" ? h(NDynamicInputInputPreset, {
        disabled,
        clsPrefix: mergedClsPrefix,
        value: mergedValue[index],
        parentPath: NFormItem ? NFormItem.path.value : void 0,
        path: (NFormItem === null || NFormItem === void 0 ? void 0 : NFormItem.path.value) ? `${NFormItem.path.value}[${index}]` : void 0,
        onUpdateValue: (v) => {
          handleValueChange(index, v);
        }
      }) : preset === "pair" ? h(NDynamicInputPairPreset, {
        disabled,
        clsPrefix: mergedClsPrefix,
        value: mergedValue[index],
        parentPath: NFormItem ? NFormItem.path.value : void 0,
        path: (NFormItem === null || NFormItem === void 0 ? void 0 : NFormItem.path.value) ? `${NFormItem.path.value}[${index}]` : void 0,
        onUpdateValue: (v) => {
          handleValueChange(index, v);
        }
      }) : null];
    }), resolveSlotWithProps($slots.action, {
      value: mergedValue[index],
      index,
      create: createItem,
      remove,
      move
    }, () => [h("div", {
      class: `${mergedClsPrefix}-dynamic-input-item__action`
    }, h(NButtonGroup, {
      size: buttonSize
    }, {
      default: () => [h(Button, {
        disabled: this.removeDisabled || disabled,
        theme: mergedTheme.peers.Button,
        themeOverrides: mergedTheme.peerOverrides.Button,
        circle: true,
        onClick: () => {
          remove(index);
        }
      }, {
        icon: () => h(NBaseIcon, {
          clsPrefix: mergedClsPrefix
        }, {
          default: () => h(RemoveIcon, null)
        })
      }), h(Button, {
        disabled: this.insertionDisabled || disabled,
        circle: true,
        theme: mergedTheme.peers.Button,
        themeOverrides: mergedTheme.peerOverrides.Button,
        onClick: () => {
          createItem(index);
        }
      }, {
        icon: () => h(NBaseIcon, {
          clsPrefix: mergedClsPrefix
        }, {
          default: () => h(AddIcon, null)
        })
      }), showSortButton ? h(Button, {
        disabled: index === 0 || disabled,
        circle: true,
        theme: mergedTheme.peers.Button,
        themeOverrides: mergedTheme.peerOverrides.Button,
        onClick: () => {
          move("up", index);
        }
      }, {
        icon: () => h(NBaseIcon, {
          clsPrefix: mergedClsPrefix
        }, {
          default: () => h(ArrowUpIcon, null)
        })
      }) : null, showSortButton ? h(Button, {
        disabled: index === mergedValue.length - 1 || disabled,
        circle: true,
        theme: mergedTheme.peers.Button,
        themeOverrides: mergedTheme.peerOverrides.Button,
        onClick: () => {
          move("down", index);
        }
      }, {
        icon: () => h(NBaseIcon, {
          clsPrefix: mergedClsPrefix
        }, {
          default: () => h(ArrowDownIcon, null)
        })
      }) : null]
    }))]))));
  }
});
const commonVars$5 = {
  gapSmall: "4px 8px",
  gapMedium: "8px 12px",
  gapLarge: "12px 16px"
};
const spaceDark = {
  name: "Space",
  self() {
    return commonVars$5;
  }
};
const self$F = () => {
  return commonVars$5;
};
const spaceLight = {
  name: "Space",
  self: self$F
};
const ensureSupportFlexGap = () => {
  return true;
};
const spaceProps = Object.assign(Object.assign({}, useTheme.props), {
  align: String,
  justify: {
    type: String,
    default: "start"
  },
  inline: Boolean,
  vertical: Boolean,
  reverse: Boolean,
  size: {
    type: [String, Number, Array],
    default: "medium"
  },
  wrapItem: {
    type: Boolean,
    default: true
  },
  itemClass: String,
  itemStyle: [String, Object],
  wrap: {
    type: Boolean,
    default: true
  },
  // internal
  internalUseGap: {
    type: Boolean,
    default: void 0
  }
});
const __nuxt_component_17 = defineComponent({
  name: "Space",
  props: spaceProps,
  setup(props) {
    const {
      mergedClsPrefixRef,
      mergedRtlRef
    } = useConfig(props);
    const themeRef = useTheme("Space", "-space", void 0, spaceLight, props, mergedClsPrefixRef);
    const rtlEnabledRef = useRtl("Space", mergedRtlRef, mergedClsPrefixRef);
    return {
      useGap: ensureSupportFlexGap(),
      rtlEnabled: rtlEnabledRef,
      mergedClsPrefix: mergedClsPrefixRef,
      margin: computed(() => {
        const {
          size
        } = props;
        if (Array.isArray(size)) {
          return {
            horizontal: size[0],
            vertical: size[1]
          };
        }
        if (typeof size === "number") {
          return {
            horizontal: size,
            vertical: size
          };
        }
        const {
          self: {
            [createKey("gap", size)]: gap
          }
        } = themeRef.value;
        const {
          row,
          col
        } = getGap(gap);
        return {
          horizontal: depx(col),
          vertical: depx(row)
        };
      })
    };
  },
  render() {
    const {
      vertical,
      reverse,
      align,
      inline,
      justify,
      itemClass,
      itemStyle,
      margin,
      wrap,
      mergedClsPrefix,
      rtlEnabled,
      useGap,
      wrapItem,
      internalUseGap
    } = this;
    const children = flatten(getSlot(this), false);
    if (!children.length)
      return null;
    const horizontalMargin = `${margin.horizontal}px`;
    const semiHorizontalMargin = `${margin.horizontal / 2}px`;
    const verticalMargin = `${margin.vertical}px`;
    const semiVerticalMargin = `${margin.vertical / 2}px`;
    const lastIndex = children.length - 1;
    const isJustifySpace = justify.startsWith("space-");
    return h("div", {
      role: "none",
      class: [`${mergedClsPrefix}-space`, rtlEnabled && `${mergedClsPrefix}-space--rtl`],
      style: {
        display: inline ? "inline-flex" : "flex",
        flexDirection: (() => {
          if (vertical && !reverse)
            return "column";
          if (vertical && reverse)
            return "column-reverse";
          if (!vertical && reverse)
            return "row-reverse";
          else
            return "row";
        })(),
        justifyContent: ["start", "end"].includes(justify) ? "flex-" + justify : justify,
        flexWrap: !wrap || vertical ? "nowrap" : "wrap",
        marginTop: useGap || vertical ? "" : `-${semiVerticalMargin}`,
        marginBottom: useGap || vertical ? "" : `-${semiVerticalMargin}`,
        alignItems: align,
        gap: useGap ? `${margin.vertical}px ${margin.horizontal}px` : ""
      }
    }, !wrapItem && (useGap || internalUseGap) ? children : children.map((child, index) => child.type === Comment ? child : h("div", {
      role: "none",
      class: itemClass,
      style: [itemStyle, {
        maxWidth: "100%"
      }, useGap ? "" : vertical ? {
        marginBottom: index !== lastIndex ? verticalMargin : ""
      } : rtlEnabled ? {
        marginLeft: isJustifySpace ? justify === "space-between" && index === lastIndex ? "" : semiHorizontalMargin : index !== lastIndex ? horizontalMargin : "",
        marginRight: isJustifySpace ? justify === "space-between" && index === 0 ? "" : semiHorizontalMargin : "",
        paddingTop: semiVerticalMargin,
        paddingBottom: semiVerticalMargin
      } : {
        marginRight: isJustifySpace ? justify === "space-between" && index === lastIndex ? "" : semiHorizontalMargin : index !== lastIndex ? horizontalMargin : "",
        marginLeft: isJustifySpace ? justify === "space-between" && index === 0 ? "" : semiHorizontalMargin : "",
        paddingTop: semiVerticalMargin,
        paddingBottom: semiVerticalMargin
      }]
    }, child)));
  }
});
const dynamicTagsDark = {
  name: "DynamicTags",
  common: derived,
  peers: {
    Input: inputDark,
    Button: buttonDark,
    Tag: tagDark,
    Space: spaceDark
  },
  self() {
    return {
      inputWidth: "64px"
    };
  }
};
const dynamicTagsLight = createTheme({
  name: "DynamicTags",
  common: derived$1,
  peers: {
    Input: inputLight,
    Button: buttonLight,
    Tag: tagLight,
    Space: spaceLight
  },
  self() {
    return {
      inputWidth: "64px"
    };
  }
});
const style$9 = cB("dynamic-tags", [cB("input", {
  minWidth: "var(--n-input-width)"
})]);
const dynamicTagsProps = Object.assign(Object.assign(Object.assign({}, useTheme.props), commonProps), {
  size: {
    type: String,
    default: "medium"
  },
  closable: {
    type: Boolean,
    default: true
  },
  defaultValue: {
    type: Array,
    default: () => []
  },
  value: Array,
  inputClass: String,
  inputStyle: [String, Object],
  inputProps: Object,
  max: Number,
  tagClass: String,
  tagStyle: [String, Object],
  renderTag: Function,
  onCreate: {
    type: Function,
    default: (label) => label
  },
  "onUpdate:value": [Function, Array],
  onUpdateValue: [Function, Array],
  // deprecated
  onChange: [Function, Array]
});
const __nuxt_component_10 = defineComponent({
  name: "DynamicTags",
  props: dynamicTagsProps,
  setup(props) {
    if (process.env.NODE_ENV !== "production") {
      watchEffect(() => {
        if (props.onChange !== void 0) {
          warnOnce("dynamic-tags", "`on-change` is deprecated, please use `on-update:value` instead.");
        }
      });
    }
    const {
      mergedClsPrefixRef,
      inlineThemeDisabled
    } = useConfig(props);
    const {
      localeRef
    } = useLocale("DynamicTags");
    const formItem = useFormItem(props);
    const {
      mergedDisabledRef
    } = formItem;
    const inputValueRef = ref("");
    const showInputRef = ref(false);
    const inputForceFocusedRef = ref(true);
    const inputInstRef = ref(null);
    const themeRef = useTheme("DynamicTags", "-dynamic-tags", style$9, dynamicTagsLight, props, mergedClsPrefixRef);
    const uncontrolledValueRef = ref(props.defaultValue);
    const controlledValueRef = toRef(props, "value");
    const mergedValueRef = useMergedState(controlledValueRef, uncontrolledValueRef);
    const localizedAddRef = computed(() => {
      return localeRef.value.add;
    });
    const inputSizeRef = computed(() => {
      return smallerSize(props.size);
    });
    const triggerDisabledRef = computed(() => {
      return mergedDisabledRef.value || !!props.max && mergedValueRef.value.length >= props.max;
    });
    function doChange(value) {
      const {
        onChange,
        "onUpdate:value": _onUpdateValue,
        onUpdateValue
      } = props;
      const {
        nTriggerFormInput,
        nTriggerFormChange
      } = formItem;
      if (onChange)
        call(onChange, value);
      if (onUpdateValue)
        call(onUpdateValue, value);
      if (_onUpdateValue)
        call(_onUpdateValue, value);
      uncontrolledValueRef.value = value;
      nTriggerFormInput();
      nTriggerFormChange();
    }
    function handleCloseClick(index) {
      const tags = mergedValueRef.value.slice(0);
      tags.splice(index, 1);
      doChange(tags);
    }
    function handleInputKeyDown(e2) {
      switch (e2.key) {
        case "Enter":
          handleInputConfirm();
      }
    }
    function handleInputConfirm(externalValue) {
      const nextValue = externalValue !== null && externalValue !== void 0 ? externalValue : inputValueRef.value;
      if (nextValue) {
        const tags = mergedValueRef.value.slice(0);
        tags.push(props.onCreate(nextValue));
        doChange(tags);
      }
      showInputRef.value = false;
      inputForceFocusedRef.value = true;
      inputValueRef.value = "";
    }
    function handleInputBlur() {
      handleInputConfirm();
    }
    function handleAddClick() {
      showInputRef.value = true;
      void nextTick(() => {
        var _a;
        (_a = inputInstRef.value) === null || _a === void 0 ? void 0 : _a.focus();
        inputForceFocusedRef.value = false;
      });
    }
    const cssVarsRef = computed(() => {
      const {
        self: {
          inputWidth
        }
      } = themeRef.value;
      return {
        "--n-input-width": inputWidth
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("dynamic-tags", void 0, cssVarsRef, props) : void 0;
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      inputInstRef,
      localizedAdd: localizedAddRef,
      inputSize: inputSizeRef,
      inputValue: inputValueRef,
      showInput: showInputRef,
      inputForceFocused: inputForceFocusedRef,
      mergedValue: mergedValueRef,
      mergedDisabled: mergedDisabledRef,
      triggerDisabled: triggerDisabledRef,
      handleInputKeyDown,
      handleAddClick,
      handleInputBlur,
      handleCloseClick,
      handleInputConfirm,
      mergedTheme: themeRef,
      cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
    };
  },
  render() {
    const {
      mergedTheme,
      cssVars,
      mergedClsPrefix,
      onRender,
      renderTag
    } = this;
    onRender === null || onRender === void 0 ? void 0 : onRender();
    return h(__nuxt_component_17, {
      class: [`${mergedClsPrefix}-dynamic-tags`, this.themeClass],
      size: "small",
      style: cssVars,
      theme: mergedTheme.peers.Space,
      themeOverrides: mergedTheme.peerOverrides.Space,
      itemStyle: "display: flex;"
    }, {
      default: () => {
        const {
          mergedTheme: mergedTheme2,
          tagClass,
          tagStyle,
          type,
          round,
          size,
          color,
          closable,
          mergedDisabled,
          showInput,
          inputValue,
          inputClass,
          inputStyle,
          inputSize,
          inputForceFocused,
          triggerDisabled,
          handleInputKeyDown,
          handleInputBlur,
          handleAddClick,
          handleCloseClick,
          handleInputConfirm,
          $slots
        } = this;
        return this.mergedValue.map((tag, index) => renderTag ? renderTag(tag, index) : h(__nuxt_component_26, {
          key: index,
          theme: mergedTheme2.peers.Tag,
          themeOverrides: mergedTheme2.peerOverrides.Tag,
          class: tagClass,
          style: tagStyle,
          type,
          round,
          size,
          color,
          closable,
          disabled: mergedDisabled,
          onClose: () => {
            handleCloseClick(index);
          }
        }, {
          default: () => typeof tag === "string" ? tag : tag.label
        })).concat(showInput ? $slots.input ? $slots.input({
          submit: handleInputConfirm,
          deactivate: handleInputBlur
        }) : h(__nuxt_component_3, Object.assign({
          placeholder: "",
          size: inputSize,
          style: inputStyle,
          class: inputClass,
          autosize: true
        }, this.inputProps, {
          ref: "inputInstRef",
          value: inputValue,
          onUpdateValue: (v) => {
            this.inputValue = v;
          },
          theme: mergedTheme2.peers.Input,
          themeOverrides: mergedTheme2.peerOverrides.Input,
          onKeydown: handleInputKeyDown,
          onBlur: handleInputBlur,
          internalForceFocus: inputForceFocused
        })) : $slots.trigger ? $slots.trigger({
          activate: handleAddClick,
          disabled: triggerDisabled
        }) : h(Button, {
          dashed: true,
          disabled: triggerDisabled,
          theme: mergedTheme2.peers.Button,
          themeOverrides: mergedTheme2.peerOverrides.Button,
          size: inputSize,
          onClick: handleAddClick
        }, {
          icon: () => h(NBaseIcon, {
            clsPrefix: mergedClsPrefix
          }, {
            default: () => h(AddIcon, null)
          })
        }));
      }
    });
  }
});
const elementDark = {
  name: "Element",
  common: derived
};
const elementLight = {
  name: "Element",
  common: derived$1
};
const elementProps = Object.assign(Object.assign({}, useTheme.props), {
  tag: {
    type: String,
    default: "div"
  }
});
const __nuxt_component_21 = defineComponent({
  name: "Element",
  alias: ["El"],
  props: elementProps,
  setup(props) {
    const {
      mergedClsPrefixRef,
      inlineThemeDisabled
    } = useConfig(props);
    const themeRef = useTheme("Element", "-element", void 0, elementLight, props, mergedClsPrefixRef);
    const cssVarsRef = computed(() => {
      const {
        common: common2
      } = themeRef.value;
      return Object.keys(common2).reduce((prevValue, key) => {
        prevValue[`--${kebabCase(key)}`] = common2[key];
        return prevValue;
      }, {});
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("element", void 0, cssVarsRef, props) : void 0;
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
    };
  },
  render() {
    var _a;
    const {
      tag,
      mergedClsPrefix,
      cssVars,
      themeClass,
      onRender,
      $slots
    } = this;
    onRender === null || onRender === void 0 ? void 0 : onRender();
    return h(tag, {
      role: "none",
      class: [`${mergedClsPrefix}-element`, themeClass],
      style: cssVars
    }, (_a = $slots.default) === null || _a === void 0 ? void 0 : _a.call($slots));
  }
});
const commonVars$4 = {
  gapSmall: "4px 8px",
  gapMedium: "8px 12px",
  gapLarge: "12px 16px"
};
const flexDark = {
  name: "Flex",
  self() {
    return commonVars$4;
  }
};
const self$E = () => {
  return commonVars$4;
};
const flexLight = {
  name: "Flex",
  self: self$E
};
const commonVariables$5 = {
  feedbackPadding: "4px 0 0 2px",
  feedbackHeightSmall: "24px",
  feedbackHeightMedium: "24px",
  feedbackHeightLarge: "26px",
  feedbackFontSizeSmall: "13px",
  feedbackFontSizeMedium: "14px",
  feedbackFontSizeLarge: "14px",
  labelFontSizeLeftSmall: "14px",
  labelFontSizeLeftMedium: "14px",
  labelFontSizeLeftLarge: "15px",
  labelFontSizeTopSmall: "13px",
  labelFontSizeTopMedium: "14px",
  labelFontSizeTopLarge: "14px",
  labelHeightSmall: "24px",
  labelHeightMedium: "26px",
  labelHeightLarge: "28px",
  labelPaddingVertical: "0 0 6px 2px",
  labelPaddingHorizontal: "0 12px 0 0",
  labelTextAlignVertical: "left",
  labelTextAlignHorizontal: "right",
  labelFontWeight: "400"
};
const self$D = (vars) => {
  const {
    heightSmall,
    heightMedium,
    heightLarge,
    textColor1,
    errorColor,
    warningColor,
    lineHeight,
    textColor3
  } = vars;
  return Object.assign(Object.assign({}, commonVariables$5), {
    blankHeightSmall: heightSmall,
    blankHeightMedium: heightMedium,
    blankHeightLarge: heightLarge,
    lineHeight,
    labelTextColor: textColor1,
    asteriskColor: errorColor,
    feedbackTextColorError: errorColor,
    feedbackTextColorWarning: warningColor,
    feedbackTextColor: textColor3
  });
};
const formLight = {
  name: "Form",
  common: derived$1,
  self: self$D
};
const formItemDark = {
  name: "Form",
  common: derived,
  self: self$D
};
const commonVars$3 = {
  closeMargin: "16px 12px",
  closeSize: "20px",
  closeIconSize: "16px",
  width: "365px",
  padding: "16px",
  titleFontSize: "16px",
  metaFontSize: "12px",
  descriptionFontSize: "12px"
};
const self$C = (vars) => {
  const {
    textColor2,
    successColor,
    infoColor,
    warningColor,
    errorColor,
    popoverColor,
    closeIconColor,
    closeIconColorHover,
    closeIconColorPressed,
    closeColorHover,
    closeColorPressed,
    textColor1,
    textColor3,
    borderRadius,
    fontWeightStrong,
    boxShadow2,
    lineHeight,
    fontSize
  } = vars;
  return Object.assign(Object.assign({}, commonVars$3), {
    borderRadius,
    lineHeight,
    fontSize,
    headerFontWeight: fontWeightStrong,
    iconColor: textColor2,
    iconColorSuccess: successColor,
    iconColorInfo: infoColor,
    iconColorWarning: warningColor,
    iconColorError: errorColor,
    color: popoverColor,
    textColor: textColor2,
    closeIconColor,
    closeIconColorHover,
    closeIconColorPressed,
    closeBorderRadius: borderRadius,
    closeColorHover,
    closeColorPressed,
    headerTextColor: textColor1,
    descriptionTextColor: textColor3,
    actionTextColor: textColor2,
    boxShadow: boxShadow2
  });
};
const notificationLight = createTheme({
  name: "Notification",
  common: derived$1,
  peers: {
    Scrollbar: scrollbarLight
  },
  self: self$C
});
const notificationDark = {
  name: "Notification",
  common: derived,
  peers: {
    Scrollbar: scrollbarDark
  },
  self: self$C
};
const commonVariables$4 = {
  margin: "0 0 8px 0",
  padding: "10px 20px",
  maxWidth: "720px",
  minWidth: "420px",
  iconMargin: "0 10px 0 0",
  closeMargin: "0 0 0 10px",
  closeSize: "20px",
  closeIconSize: "16px",
  iconSize: "20px",
  fontSize: "14px"
};
const self$B = (vars) => {
  const {
    textColor2,
    closeIconColor,
    closeIconColorHover,
    closeIconColorPressed,
    infoColor,
    successColor,
    errorColor,
    warningColor,
    popoverColor,
    boxShadow2,
    primaryColor,
    lineHeight,
    borderRadius,
    closeColorHover,
    closeColorPressed
  } = vars;
  return Object.assign(Object.assign({}, commonVariables$4), {
    closeBorderRadius: borderRadius,
    textColor: textColor2,
    textColorInfo: textColor2,
    textColorSuccess: textColor2,
    textColorError: textColor2,
    textColorWarning: textColor2,
    textColorLoading: textColor2,
    color: popoverColor,
    colorInfo: popoverColor,
    colorSuccess: popoverColor,
    colorError: popoverColor,
    colorWarning: popoverColor,
    colorLoading: popoverColor,
    boxShadow: boxShadow2,
    boxShadowInfo: boxShadow2,
    boxShadowSuccess: boxShadow2,
    boxShadowError: boxShadow2,
    boxShadowWarning: boxShadow2,
    boxShadowLoading: boxShadow2,
    iconColor: textColor2,
    iconColorInfo: infoColor,
    iconColorSuccess: successColor,
    iconColorWarning: warningColor,
    iconColorError: errorColor,
    iconColorLoading: primaryColor,
    closeColorHover,
    closeColorPressed,
    closeIconColor,
    closeIconColorHover,
    closeIconColorPressed,
    closeColorHoverInfo: closeColorHover,
    closeColorPressedInfo: closeColorPressed,
    closeIconColorInfo: closeIconColor,
    closeIconColorHoverInfo: closeIconColorHover,
    closeIconColorPressedInfo: closeIconColorPressed,
    closeColorHoverSuccess: closeColorHover,
    closeColorPressedSuccess: closeColorPressed,
    closeIconColorSuccess: closeIconColor,
    closeIconColorHoverSuccess: closeIconColorHover,
    closeIconColorPressedSuccess: closeIconColorPressed,
    closeColorHoverError: closeColorHover,
    closeColorPressedError: closeColorPressed,
    closeIconColorError: closeIconColor,
    closeIconColorHoverError: closeIconColorHover,
    closeIconColorPressedError: closeIconColorPressed,
    closeColorHoverWarning: closeColorHover,
    closeColorPressedWarning: closeColorPressed,
    closeIconColorWarning: closeIconColor,
    closeIconColorHoverWarning: closeIconColorHover,
    closeIconColorPressedWarning: closeIconColorPressed,
    closeColorHoverLoading: closeColorHover,
    closeColorPressedLoading: closeColorPressed,
    closeIconColorLoading: closeIconColor,
    closeIconColorHoverLoading: closeIconColorHover,
    closeIconColorPressedLoading: closeIconColorPressed,
    loadingColor: primaryColor,
    lineHeight,
    borderRadius
  });
};
const messageLight = {
  name: "Message",
  common: derived$1,
  self: self$B
};
const messageDark = {
  name: "Message",
  common: derived,
  self: self$B
};
const buttonGroupDark = {
  name: "ButtonGroup",
  common: derived
};
const buttonGroupLight = {
  name: "ButtonGroup",
  common: derived$1
};
const gradientTextDark = {
  name: "GradientText",
  common: derived,
  self(vars) {
    const {
      primaryColor,
      successColor,
      warningColor,
      errorColor,
      infoColor,
      primaryColorSuppl,
      successColorSuppl,
      warningColorSuppl,
      errorColorSuppl,
      infoColorSuppl,
      fontWeightStrong
    } = vars;
    return {
      fontWeight: fontWeightStrong,
      rotate: "252deg",
      colorStartPrimary: primaryColor,
      colorEndPrimary: primaryColorSuppl,
      colorStartInfo: infoColor,
      colorEndInfo: infoColorSuppl,
      colorStartWarning: warningColor,
      colorEndWarning: warningColorSuppl,
      colorStartError: errorColor,
      colorEndError: errorColorSuppl,
      colorStartSuccess: successColor,
      colorEndSuccess: successColorSuppl
    };
  }
};
const self$A = (vars) => {
  const {
    primaryColor,
    successColor,
    warningColor,
    errorColor,
    infoColor,
    fontWeightStrong
  } = vars;
  return {
    fontWeight: fontWeightStrong,
    rotate: "252deg",
    colorStartPrimary: changeColor(primaryColor, {
      alpha: 0.6
    }),
    colorEndPrimary: primaryColor,
    colorStartInfo: changeColor(infoColor, {
      alpha: 0.6
    }),
    colorEndInfo: infoColor,
    colorStartWarning: changeColor(warningColor, {
      alpha: 0.6
    }),
    colorEndWarning: warningColor,
    colorStartError: changeColor(errorColor, {
      alpha: 0.6
    }),
    colorEndError: errorColor,
    colorStartSuccess: changeColor(successColor, {
      alpha: 0.6
    }),
    colorEndSuccess: successColor
  };
};
const gradientTextLight = {
  name: "GradientText",
  common: derived$1,
  self: self$A
};
const inputNumberDark = {
  name: "InputNumber",
  common: derived,
  peers: {
    Button: buttonDark,
    Input: inputDark
  },
  self(vars) {
    const {
      textColorDisabled
    } = vars;
    return {
      iconColorDisabled: textColorDisabled
    };
  }
};
const self$z = (vars) => {
  const {
    textColorDisabled
  } = vars;
  return {
    iconColorDisabled: textColorDisabled
  };
};
const inputNumberLight = createTheme({
  name: "InputNumber",
  common: derived$1,
  peers: {
    Button: buttonLight,
    Input: inputLight
  },
  self: self$z
});
const layoutDark = {
  name: "Layout",
  common: derived,
  peers: {
    Scrollbar: scrollbarDark
  },
  self(vars) {
    const {
      textColor2,
      bodyColor,
      popoverColor,
      cardColor,
      dividerColor,
      scrollbarColor,
      scrollbarColorHover
    } = vars;
    return {
      textColor: textColor2,
      textColorInverted: textColor2,
      color: bodyColor,
      colorEmbedded: bodyColor,
      headerColor: cardColor,
      headerColorInverted: cardColor,
      footerColor: cardColor,
      footerColorInverted: cardColor,
      headerBorderColor: dividerColor,
      headerBorderColorInverted: dividerColor,
      footerBorderColor: dividerColor,
      footerBorderColorInverted: dividerColor,
      siderBorderColor: dividerColor,
      siderBorderColorInverted: dividerColor,
      siderColor: cardColor,
      siderColorInverted: cardColor,
      siderToggleButtonBorder: "1px solid transparent",
      siderToggleButtonColor: popoverColor,
      siderToggleButtonIconColor: textColor2,
      siderToggleButtonIconColorInverted: textColor2,
      siderToggleBarColor: composite(bodyColor, scrollbarColor),
      siderToggleBarColorHover: composite(bodyColor, scrollbarColorHover),
      __invertScrollbar: "false"
    };
  }
};
const self$y = (vars) => {
  const {
    baseColor,
    textColor2,
    bodyColor,
    cardColor,
    dividerColor,
    actionColor,
    scrollbarColor,
    scrollbarColorHover,
    invertedColor
  } = vars;
  return {
    textColor: textColor2,
    textColorInverted: "#FFF",
    color: bodyColor,
    colorEmbedded: actionColor,
    headerColor: cardColor,
    headerColorInverted: invertedColor,
    footerColor: actionColor,
    footerColorInverted: invertedColor,
    headerBorderColor: dividerColor,
    headerBorderColorInverted: invertedColor,
    footerBorderColor: dividerColor,
    footerBorderColorInverted: invertedColor,
    siderBorderColor: dividerColor,
    siderBorderColorInverted: invertedColor,
    siderColor: cardColor,
    siderColorInverted: invertedColor,
    siderToggleButtonBorder: `1px solid ${dividerColor}`,
    siderToggleButtonColor: baseColor,
    siderToggleButtonIconColor: textColor2,
    siderToggleButtonIconColorInverted: textColor2,
    siderToggleBarColor: composite(bodyColor, scrollbarColor),
    siderToggleBarColorHover: composite(bodyColor, scrollbarColorHover),
    // hack for inverted background
    __invertScrollbar: "true"
  };
};
const layoutLight = createTheme({
  name: "Layout",
  common: derived$1,
  peers: {
    Scrollbar: scrollbarLight
  },
  self: self$y
});
const self$x = (vars) => {
  const {
    textColor2,
    cardColor,
    modalColor,
    popoverColor,
    dividerColor,
    borderRadius,
    fontSize,
    hoverColor
  } = vars;
  return {
    textColor: textColor2,
    color: cardColor,
    colorHover: hoverColor,
    colorModal: modalColor,
    colorHoverModal: composite(modalColor, hoverColor),
    colorPopover: popoverColor,
    colorHoverPopover: composite(popoverColor, hoverColor),
    borderColor: dividerColor,
    borderColorModal: composite(modalColor, dividerColor),
    borderColorPopover: composite(popoverColor, dividerColor),
    borderRadius,
    fontSize
  };
};
const listLight = {
  name: "List",
  common: derived$1,
  self: self$x
};
const listDark$1 = {
  name: "List",
  common: derived,
  self: self$x
};
const loadingBarDark = {
  name: "LoadingBar",
  common: derived,
  self(vars) {
    const {
      primaryColor
    } = vars;
    return {
      colorError: "red",
      colorLoading: primaryColor,
      height: "2px"
    };
  }
};
const self$w = (vars) => {
  const {
    primaryColor,
    errorColor
  } = vars;
  return {
    colorError: errorColor,
    colorLoading: primaryColor,
    height: "2px"
  };
};
const loadingBarLight = {
  name: "LoadingBar",
  common: derived$1,
  self: self$w
};
const logDark = {
  name: "Log",
  common: derived,
  peers: {
    Scrollbar: scrollbarDark,
    Code: codeDark
  },
  self(vars) {
    const {
      textColor2,
      inputColor,
      fontSize,
      primaryColor
    } = vars;
    return {
      loaderFontSize: fontSize,
      loaderTextColor: textColor2,
      loaderColor: inputColor,
      loaderBorder: "1px solid #0000",
      loadingColor: primaryColor
    };
  }
};
const self$v = (vars) => {
  const {
    textColor2,
    modalColor,
    borderColor,
    fontSize,
    primaryColor
  } = vars;
  return {
    loaderFontSize: fontSize,
    loaderTextColor: textColor2,
    loaderColor: modalColor,
    loaderBorder: `1px solid ${borderColor}`,
    loadingColor: primaryColor
  };
};
const logLight = createTheme({
  name: "Log",
  common: derived$1,
  peers: {
    Scrollbar: scrollbarLight,
    Code: codeLight
  },
  self: self$v
});
const listDark = {
  name: "Mention",
  common: derived,
  peers: {
    InternalSelectMenu: internalSelectMenuDark,
    Input: inputDark
  },
  self(vars) {
    const {
      boxShadow2
    } = vars;
    return {
      menuBoxShadow: boxShadow2
    };
  }
};
const self$u = (vars) => {
  const {
    boxShadow2
  } = vars;
  return {
    menuBoxShadow: boxShadow2
  };
};
const mentionLight = createTheme({
  name: "Mention",
  common: derived$1,
  peers: {
    InternalSelectMenu: internalSelectMenuLight,
    Input: inputLight
  },
  self: self$u
});
function createPartialInvertedVars(color, activeItemColor, activeTextColor, groupTextColor) {
  return {
    itemColorHoverInverted: "#0000",
    itemColorActiveInverted: activeItemColor,
    itemColorActiveHoverInverted: activeItemColor,
    itemColorActiveCollapsedInverted: activeItemColor,
    itemTextColorInverted: color,
    itemTextColorHoverInverted: activeTextColor,
    itemTextColorChildActiveInverted: activeTextColor,
    itemTextColorChildActiveHoverInverted: activeTextColor,
    itemTextColorActiveInverted: activeTextColor,
    itemTextColorActiveHoverInverted: activeTextColor,
    itemTextColorHorizontalInverted: color,
    itemTextColorHoverHorizontalInverted: activeTextColor,
    itemTextColorChildActiveHorizontalInverted: activeTextColor,
    itemTextColorChildActiveHoverHorizontalInverted: activeTextColor,
    itemTextColorActiveHorizontalInverted: activeTextColor,
    itemTextColorActiveHoverHorizontalInverted: activeTextColor,
    itemIconColorInverted: color,
    itemIconColorHoverInverted: activeTextColor,
    itemIconColorActiveInverted: activeTextColor,
    itemIconColorActiveHoverInverted: activeTextColor,
    itemIconColorChildActiveInverted: activeTextColor,
    itemIconColorChildActiveHoverInverted: activeTextColor,
    itemIconColorCollapsedInverted: color,
    itemIconColorHorizontalInverted: color,
    itemIconColorHoverHorizontalInverted: activeTextColor,
    itemIconColorActiveHorizontalInverted: activeTextColor,
    itemIconColorActiveHoverHorizontalInverted: activeTextColor,
    itemIconColorChildActiveHorizontalInverted: activeTextColor,
    itemIconColorChildActiveHoverHorizontalInverted: activeTextColor,
    arrowColorInverted: color,
    arrowColorHoverInverted: activeTextColor,
    arrowColorActiveInverted: activeTextColor,
    arrowColorActiveHoverInverted: activeTextColor,
    arrowColorChildActiveInverted: activeTextColor,
    arrowColorChildActiveHoverInverted: activeTextColor,
    groupTextColorInverted: groupTextColor
  };
}
const self$t = (vars) => {
  const {
    borderRadius,
    textColor3,
    primaryColor,
    textColor2,
    textColor1,
    fontSize,
    dividerColor,
    hoverColor,
    primaryColorHover
  } = vars;
  return Object.assign({
    borderRadius,
    color: "#0000",
    groupTextColor: textColor3,
    itemColorHover: hoverColor,
    itemColorActive: changeColor(primaryColor, {
      alpha: 0.1
    }),
    itemColorActiveHover: changeColor(primaryColor, {
      alpha: 0.1
    }),
    itemColorActiveCollapsed: changeColor(primaryColor, {
      alpha: 0.1
    }),
    itemTextColor: textColor2,
    itemTextColorHover: textColor2,
    itemTextColorActive: primaryColor,
    itemTextColorActiveHover: primaryColor,
    itemTextColorChildActive: primaryColor,
    itemTextColorChildActiveHover: primaryColor,
    itemTextColorHorizontal: textColor2,
    itemTextColorHoverHorizontal: primaryColorHover,
    itemTextColorActiveHorizontal: primaryColor,
    itemTextColorActiveHoverHorizontal: primaryColor,
    itemTextColorChildActiveHorizontal: primaryColor,
    itemTextColorChildActiveHoverHorizontal: primaryColor,
    itemIconColor: textColor1,
    itemIconColorHover: textColor1,
    itemIconColorActive: primaryColor,
    itemIconColorActiveHover: primaryColor,
    itemIconColorChildActive: primaryColor,
    itemIconColorChildActiveHover: primaryColor,
    itemIconColorCollapsed: textColor1,
    itemIconColorHorizontal: textColor1,
    itemIconColorHoverHorizontal: primaryColorHover,
    itemIconColorActiveHorizontal: primaryColor,
    itemIconColorActiveHoverHorizontal: primaryColor,
    itemIconColorChildActiveHorizontal: primaryColor,
    itemIconColorChildActiveHoverHorizontal: primaryColor,
    itemHeight: "42px",
    arrowColor: textColor2,
    arrowColorHover: textColor2,
    arrowColorActive: primaryColor,
    arrowColorActiveHover: primaryColor,
    arrowColorChildActive: primaryColor,
    arrowColorChildActiveHover: primaryColor,
    colorInverted: "#0000",
    borderColorHorizontal: "#0000",
    fontSize,
    dividerColor
  }, createPartialInvertedVars("#BBB", primaryColor, "#FFF", "#AAA"));
};
const menuLight = createTheme({
  name: "Menu",
  common: derived$1,
  peers: {
    Tooltip: tooltipLight,
    Dropdown: dropdownLight
  },
  self: self$t
});
const menuDark = {
  name: "Menu",
  common: derived,
  peers: {
    Tooltip: tooltipDark,
    Dropdown: dropdownDark
  },
  self(vars) {
    const {
      primaryColor,
      primaryColorSuppl
    } = vars;
    const commonSelf = self$t(vars);
    commonSelf.itemColorActive = changeColor(primaryColor, {
      alpha: 0.15
    });
    commonSelf.itemColorActiveHover = changeColor(primaryColor, {
      alpha: 0.15
    });
    commonSelf.itemColorActiveCollapsed = changeColor(primaryColor, {
      alpha: 0.15
    });
    commonSelf.itemColorActiveInverted = primaryColorSuppl;
    commonSelf.itemColorActiveHoverInverted = primaryColorSuppl;
    commonSelf.itemColorActiveCollapsedInverted = primaryColorSuppl;
    return commonSelf;
  }
};
const common = {
  titleFontSize: "18px",
  backSize: "22px"
};
function self$s(vars) {
  const {
    textColor1,
    textColor2,
    textColor3,
    fontSize,
    fontWeightStrong,
    primaryColorHover,
    primaryColorPressed
  } = vars;
  return Object.assign(Object.assign({}, common), {
    titleFontWeight: fontWeightStrong,
    fontSize,
    titleTextColor: textColor1,
    backColor: textColor2,
    backColorHover: primaryColorHover,
    backColorPressed: primaryColorPressed,
    subtitleTextColor: textColor3
  });
}
const pageHeaderLight = createTheme({
  name: "PageHeader",
  common: derived$1,
  self: self$s
});
const pageHeaderDark = {
  name: "PageHeader",
  common: derived,
  self: self$s
};
const commonVars$2 = {
  iconSize: "22px"
};
const self$r = (vars) => {
  const {
    fontSize,
    warningColor
  } = vars;
  return Object.assign(Object.assign({}, commonVars$2), {
    fontSize,
    iconColor: warningColor
  });
};
const popconfirmLight = createTheme({
  name: "Popconfirm",
  common: derived$1,
  peers: {
    Button: buttonLight,
    Popover: popoverLight
  },
  self: self$r
});
const popconfirmDark = {
  name: "Popconfirm",
  common: derived,
  peers: {
    Button: buttonDark,
    Popover: popoverDark
  },
  self: self$r
};
const self$q = (vars) => {
  const {
    infoColor,
    successColor,
    warningColor,
    errorColor,
    textColor2,
    progressRailColor,
    fontSize,
    fontWeight
  } = vars;
  return {
    fontSize,
    fontSizeCircle: "28px",
    fontWeightCircle: fontWeight,
    railColor: progressRailColor,
    railHeight: "8px",
    iconSizeCircle: "36px",
    iconSizeLine: "18px",
    iconColor: infoColor,
    iconColorInfo: infoColor,
    iconColorSuccess: successColor,
    iconColorWarning: warningColor,
    iconColorError: errorColor,
    textColorCircle: textColor2,
    textColorLineInner: "rgb(255, 255, 255)",
    textColorLineOuter: textColor2,
    fillColor: infoColor,
    fillColorInfo: infoColor,
    fillColorSuccess: successColor,
    fillColorWarning: warningColor,
    fillColorError: errorColor,
    lineBgProcessing: "linear-gradient(90deg, rgba(255, 255, 255, .3) 0%, rgba(255, 255, 255, .5) 100%)"
  };
};
const progressLight = {
  name: "Progress",
  common: derived$1,
  self: self$q
};
const progressDark = {
  name: "Progress",
  common: derived,
  self(vars) {
    const commonSelf = self$q(vars);
    commonSelf.textColorLineInner = "rgb(0, 0, 0)";
    commonSelf.lineBgProcessing = "linear-gradient(90deg, rgba(255, 255, 255, .3) 0%, rgba(255, 255, 255, .5) 100%)";
    return commonSelf;
  }
};
const rateDark = {
  name: "Rate",
  common: derived,
  self(vars) {
    const {
      railColor
    } = vars;
    return {
      itemColor: railColor,
      itemColorActive: "#CCAA33",
      itemSize: "20px",
      sizeSmall: "16px",
      sizeMedium: "20px",
      sizeLarge: "24px"
    };
  }
};
const self$p = (vars) => {
  const {
    railColor
  } = vars;
  return {
    itemColor: railColor,
    itemColorActive: "#FFCC33",
    sizeSmall: "16px",
    sizeMedium: "20px",
    sizeLarge: "24px"
  };
};
const themeLight$4 = {
  name: "Rate",
  common: derived$1,
  self: self$p
};
const commonVariables$3 = {
  titleFontSizeSmall: "26px",
  titleFontSizeMedium: "32px",
  titleFontSizeLarge: "40px",
  titleFontSizeHuge: "48px",
  fontSizeSmall: "14px",
  fontSizeMedium: "14px",
  fontSizeLarge: "15px",
  fontSizeHuge: "16px",
  iconSizeSmall: "64px",
  iconSizeMedium: "80px",
  iconSizeLarge: "100px",
  iconSizeHuge: "125px",
  iconColor418: void 0,
  iconColor404: void 0,
  iconColor403: void 0,
  iconColor500: void 0
};
const self$o = (vars) => {
  const {
    textColor2,
    textColor1,
    errorColor,
    successColor,
    infoColor,
    warningColor,
    lineHeight,
    fontWeightStrong
  } = vars;
  return Object.assign(Object.assign({}, commonVariables$3), {
    lineHeight,
    titleFontWeight: fontWeightStrong,
    titleTextColor: textColor1,
    textColor: textColor2,
    iconColorError: errorColor,
    iconColorSuccess: successColor,
    iconColorInfo: infoColor,
    iconColorWarning: warningColor
  });
};
const resultLight = {
  name: "Result",
  common: derived$1,
  self: self$o
};
const resultDark = {
  name: "Result",
  common: derived,
  self: self$o
};
const sizeVariables$3 = {
  railHeight: "4px",
  railWidthVertical: "4px",
  handleSize: "18px",
  dotHeight: "8px",
  dotWidth: "8px",
  dotBorderRadius: "4px"
};
const sliderDark = {
  name: "Slider",
  common: derived,
  self(vars) {
    const boxShadow = "0 2px 8px 0 rgba(0, 0, 0, 0.12)";
    const {
      railColor,
      modalColor,
      primaryColorSuppl,
      popoverColor,
      textColor2,
      cardColor,
      borderRadius,
      fontSize,
      opacityDisabled
    } = vars;
    return Object.assign(Object.assign({}, sizeVariables$3), {
      fontSize,
      markFontSize: fontSize,
      railColor,
      railColorHover: railColor,
      fillColor: primaryColorSuppl,
      fillColorHover: primaryColorSuppl,
      opacityDisabled,
      handleColor: "#FFF",
      dotColor: cardColor,
      dotColorModal: modalColor,
      dotColorPopover: popoverColor,
      handleBoxShadow: "0px 2px 4px 0 rgba(0, 0, 0, 0.4)",
      handleBoxShadowHover: "0px 2px 4px 0 rgba(0, 0, 0, 0.4)",
      handleBoxShadowActive: "0px 2px 4px 0 rgba(0, 0, 0, 0.4)",
      handleBoxShadowFocus: "0px 2px 4px 0 rgba(0, 0, 0, 0.4)",
      indicatorColor: popoverColor,
      indicatorBoxShadow: boxShadow,
      indicatorTextColor: textColor2,
      indicatorBorderRadius: borderRadius,
      dotBorder: `2px solid ${railColor}`,
      dotBorderActive: `2px solid ${primaryColorSuppl}`,
      dotBoxShadow: ""
    });
  }
};
const self$n = (vars) => {
  const indicatorColor = "rgba(0, 0, 0, .85)";
  const boxShadow = "0 2px 8px 0 rgba(0, 0, 0, 0.12)";
  const {
    railColor,
    primaryColor,
    baseColor,
    cardColor,
    modalColor,
    popoverColor,
    borderRadius,
    fontSize,
    opacityDisabled
  } = vars;
  return Object.assign(Object.assign({}, sizeVariables$3), {
    fontSize,
    markFontSize: fontSize,
    railColor,
    railColorHover: railColor,
    fillColor: primaryColor,
    fillColorHover: primaryColor,
    opacityDisabled,
    handleColor: "#FFF",
    dotColor: cardColor,
    dotColorModal: modalColor,
    dotColorPopover: popoverColor,
    handleBoxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",
    handleBoxShadowHover: "0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",
    handleBoxShadowActive: "0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",
    handleBoxShadowFocus: "0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",
    indicatorColor,
    indicatorBoxShadow: boxShadow,
    indicatorTextColor: baseColor,
    indicatorBorderRadius: borderRadius,
    dotBorder: `2px solid ${railColor}`,
    dotBorderActive: `2px solid ${primaryColor}`,
    dotBoxShadow: ""
  });
};
const sliderLight = {
  name: "Slider",
  common: derived$1,
  self: self$n
};
const self$m = (vars) => {
  const {
    opacityDisabled,
    heightTiny,
    heightSmall,
    heightMedium,
    heightLarge,
    heightHuge,
    primaryColor,
    fontSize
  } = vars;
  return {
    fontSize,
    textColor: primaryColor,
    sizeTiny: heightTiny,
    sizeSmall: heightSmall,
    sizeMedium: heightMedium,
    sizeLarge: heightLarge,
    sizeHuge: heightHuge,
    color: primaryColor,
    opacitySpinning: opacityDisabled
  };
};
const spinLight = {
  name: "Spin",
  common: derived$1,
  self: self$m
};
const spinDark = {
  name: "Spin",
  common: derived,
  self: self$m
};
const self$l = (vars) => {
  const {
    textColor2,
    textColor3,
    fontSize,
    fontWeight
  } = vars;
  return {
    labelFontSize: fontSize,
    labelFontWeight: fontWeight,
    valueFontWeight: fontWeight,
    valueFontSize: "24px",
    labelTextColor: textColor3,
    valuePrefixTextColor: textColor2,
    valueSuffixTextColor: textColor2,
    valueTextColor: textColor2
  };
};
const statisticLight = {
  name: "Statistic",
  common: derived$1,
  self: self$l
};
const statisticDark = {
  name: "Statistic",
  common: derived,
  self: self$l
};
const commonVariables$2 = {
  stepHeaderFontSizeSmall: "14px",
  stepHeaderFontSizeMedium: "16px",
  indicatorIndexFontSizeSmall: "14px",
  indicatorIndexFontSizeMedium: "16px",
  indicatorSizeSmall: "22px",
  indicatorSizeMedium: "28px",
  indicatorIconSizeSmall: "14px",
  indicatorIconSizeMedium: "18px"
};
const self$k = (vars) => {
  const {
    fontWeightStrong,
    baseColor,
    textColorDisabled,
    primaryColor,
    errorColor,
    textColor1,
    textColor2
  } = vars;
  return Object.assign(Object.assign({}, commonVariables$2), {
    stepHeaderFontWeight: fontWeightStrong,
    indicatorTextColorProcess: baseColor,
    indicatorTextColorWait: textColorDisabled,
    indicatorTextColorFinish: primaryColor,
    indicatorTextColorError: errorColor,
    indicatorBorderColorProcess: primaryColor,
    indicatorBorderColorWait: textColorDisabled,
    indicatorBorderColorFinish: primaryColor,
    indicatorBorderColorError: errorColor,
    indicatorColorProcess: primaryColor,
    indicatorColorWait: "#0000",
    indicatorColorFinish: "#0000",
    indicatorColorError: "#0000",
    splitorColorProcess: textColorDisabled,
    splitorColorWait: textColorDisabled,
    splitorColorFinish: primaryColor,
    splitorColorError: textColorDisabled,
    headerTextColorProcess: textColor1,
    headerTextColorWait: textColorDisabled,
    headerTextColorFinish: textColorDisabled,
    headerTextColorError: errorColor,
    descriptionTextColorProcess: textColor2,
    descriptionTextColorWait: textColorDisabled,
    descriptionTextColorFinish: textColorDisabled,
    descriptionTextColorError: errorColor
  });
};
const stepsLight = {
  name: "Steps",
  common: derived$1,
  self: self$k
};
const stepsDark = {
  name: "Steps",
  common: derived,
  self: self$k
};
const commonVars$1 = {
  buttonHeightSmall: "14px",
  buttonHeightMedium: "18px",
  buttonHeightLarge: "22px",
  buttonWidthSmall: "14px",
  buttonWidthMedium: "18px",
  buttonWidthLarge: "22px",
  buttonWidthPressedSmall: "20px",
  buttonWidthPressedMedium: "24px",
  buttonWidthPressedLarge: "28px",
  railHeightSmall: "18px",
  railHeightMedium: "22px",
  railHeightLarge: "26px",
  railWidthSmall: "32px",
  railWidthMedium: "40px",
  railWidthLarge: "48px"
};
const switchDark = {
  name: "Switch",
  common: derived,
  self(vars) {
    const {
      primaryColorSuppl,
      opacityDisabled,
      borderRadius,
      primaryColor,
      textColor2,
      baseColor
    } = vars;
    const railOverlayColor = "rgba(255, 255, 255, .20)";
    return Object.assign(Object.assign({}, commonVars$1), {
      iconColor: baseColor,
      textColor: textColor2,
      loadingColor: primaryColorSuppl,
      opacityDisabled,
      railColor: railOverlayColor,
      railColorActive: primaryColorSuppl,
      buttonBoxShadow: "0px 2px 4px 0 rgba(0, 0, 0, 0.4)",
      buttonColor: "#FFF",
      railBorderRadiusSmall: borderRadius,
      railBorderRadiusMedium: borderRadius,
      railBorderRadiusLarge: borderRadius,
      buttonBorderRadiusSmall: borderRadius,
      buttonBorderRadiusMedium: borderRadius,
      buttonBorderRadiusLarge: borderRadius,
      boxShadowFocus: `0 0 8px 0 ${changeColor(primaryColor, {
        alpha: 0.3
      })}`
    });
  }
};
const self$j = (vars) => {
  const {
    primaryColor,
    opacityDisabled,
    borderRadius,
    textColor3
  } = vars;
  const railOverlayColor = "rgba(0, 0, 0, .14)";
  return Object.assign(Object.assign({}, commonVars$1), {
    iconColor: textColor3,
    textColor: "white",
    loadingColor: primaryColor,
    opacityDisabled,
    railColor: railOverlayColor,
    railColorActive: primaryColor,
    buttonBoxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",
    buttonColor: "#FFF",
    railBorderRadiusSmall: borderRadius,
    railBorderRadiusMedium: borderRadius,
    railBorderRadiusLarge: borderRadius,
    buttonBorderRadiusSmall: borderRadius,
    buttonBorderRadiusMedium: borderRadius,
    buttonBorderRadiusLarge: borderRadius,
    boxShadowFocus: `0 0 0 2px ${changeColor(primaryColor, {
      alpha: 0.2
    })}`
  });
};
const switchLight = {
  name: "Switch",
  common: derived$1,
  self: self$j
};
const sizeVariables$2 = {
  thPaddingSmall: "6px",
  thPaddingMedium: "12px",
  thPaddingLarge: "12px",
  tdPaddingSmall: "6px",
  tdPaddingMedium: "12px",
  tdPaddingLarge: "12px"
};
const self$i = (vars) => {
  const {
    dividerColor,
    cardColor,
    modalColor,
    popoverColor,
    tableHeaderColor,
    tableColorStriped,
    textColor1,
    textColor2,
    borderRadius,
    fontWeightStrong,
    lineHeight,
    fontSizeSmall,
    fontSizeMedium,
    fontSizeLarge
  } = vars;
  return Object.assign(Object.assign({}, sizeVariables$2), {
    fontSizeSmall,
    fontSizeMedium,
    fontSizeLarge,
    lineHeight,
    borderRadius,
    borderColor: composite(cardColor, dividerColor),
    borderColorModal: composite(modalColor, dividerColor),
    borderColorPopover: composite(popoverColor, dividerColor),
    tdColor: cardColor,
    tdColorModal: modalColor,
    tdColorPopover: popoverColor,
    tdColorStriped: composite(cardColor, tableColorStriped),
    tdColorStripedModal: composite(modalColor, tableColorStriped),
    tdColorStripedPopover: composite(popoverColor, tableColorStriped),
    thColor: composite(cardColor, tableHeaderColor),
    thColorModal: composite(modalColor, tableHeaderColor),
    thColorPopover: composite(popoverColor, tableHeaderColor),
    thTextColor: textColor1,
    tdTextColor: textColor2,
    thFontWeight: fontWeightStrong
  });
};
const tableLight = {
  name: "Table",
  common: derived$1,
  self: self$i
};
const tableDark = {
  name: "Table",
  common: derived,
  self: self$i
};
const sizeVariables$1 = {
  tabFontSizeSmall: "14px",
  tabFontSizeMedium: "14px",
  tabFontSizeLarge: "16px",
  tabGapSmallLine: "36px",
  tabGapMediumLine: "36px",
  tabGapLargeLine: "36px",
  tabGapSmallLineVertical: "8px",
  tabGapMediumLineVertical: "8px",
  tabGapLargeLineVertical: "8px",
  tabPaddingSmallLine: "6px 0",
  tabPaddingMediumLine: "10px 0",
  tabPaddingLargeLine: "14px 0",
  tabPaddingVerticalSmallLine: "6px 12px",
  tabPaddingVerticalMediumLine: "8px 16px",
  tabPaddingVerticalLargeLine: "10px 20px",
  tabGapSmallBar: "36px",
  tabGapMediumBar: "36px",
  tabGapLargeBar: "36px",
  tabGapSmallBarVertical: "8px",
  tabGapMediumBarVertical: "8px",
  tabGapLargeBarVertical: "8px",
  tabPaddingSmallBar: "4px 0",
  tabPaddingMediumBar: "6px 0",
  tabPaddingLargeBar: "10px 0",
  tabPaddingVerticalSmallBar: "6px 12px",
  tabPaddingVerticalMediumBar: "8px 16px",
  tabPaddingVerticalLargeBar: "10px 20px",
  tabGapSmallCard: "4px",
  tabGapMediumCard: "4px",
  tabGapLargeCard: "4px",
  tabGapSmallCardVertical: "4px",
  tabGapMediumCardVertical: "4px",
  tabGapLargeCardVertical: "4px",
  tabPaddingSmallCard: "8px 16px",
  tabPaddingMediumCard: "10px 20px",
  tabPaddingLargeCard: "12px 24px",
  tabPaddingSmallSegment: "4px 0",
  tabPaddingMediumSegment: "6px 0",
  tabPaddingLargeSegment: "8px 0",
  tabPaddingVerticalLargeSegment: "0 8px",
  tabPaddingVerticalSmallCard: "8px 12px",
  tabPaddingVerticalMediumCard: "10px 16px",
  tabPaddingVerticalLargeCard: "12px 20px",
  tabPaddingVerticalSmallSegment: "0 4px",
  tabPaddingVerticalMediumSegment: "0 6px",
  tabGapSmallSegment: "0",
  tabGapMediumSegment: "0",
  tabGapLargeSegment: "0",
  tabGapSmallSegmentVertical: "0",
  tabGapMediumSegmentVertical: "0",
  tabGapLargeSegmentVertical: "0",
  panePaddingSmall: "8px 0 0 0",
  panePaddingMedium: "12px 0 0 0",
  panePaddingLarge: "16px 0 0 0",
  closeSize: "18px",
  closeIconSize: "14px"
};
const self$h = (vars) => {
  const {
    textColor2,
    primaryColor,
    textColorDisabled,
    closeIconColor,
    closeIconColorHover,
    closeIconColorPressed,
    closeColorHover,
    closeColorPressed,
    tabColor,
    baseColor,
    dividerColor,
    fontWeight,
    textColor1,
    borderRadius,
    fontSize,
    fontWeightStrong
  } = vars;
  return Object.assign(Object.assign({}, sizeVariables$1), {
    colorSegment: tabColor,
    tabFontSizeCard: fontSize,
    tabTextColorLine: textColor1,
    tabTextColorActiveLine: primaryColor,
    tabTextColorHoverLine: primaryColor,
    tabTextColorDisabledLine: textColorDisabled,
    tabTextColorSegment: textColor1,
    tabTextColorActiveSegment: textColor2,
    tabTextColorHoverSegment: textColor2,
    tabTextColorDisabledSegment: textColorDisabled,
    tabTextColorBar: textColor1,
    tabTextColorActiveBar: primaryColor,
    tabTextColorHoverBar: primaryColor,
    tabTextColorDisabledBar: textColorDisabled,
    tabTextColorCard: textColor1,
    tabTextColorHoverCard: textColor1,
    tabTextColorActiveCard: primaryColor,
    tabTextColorDisabledCard: textColorDisabled,
    barColor: primaryColor,
    closeIconColor,
    closeIconColorHover,
    closeIconColorPressed,
    closeColorHover,
    closeColorPressed,
    closeBorderRadius: borderRadius,
    tabColor,
    tabColorSegment: baseColor,
    tabBorderColor: dividerColor,
    tabFontWeightActive: fontWeight,
    tabFontWeight: fontWeight,
    tabBorderRadius: borderRadius,
    paneTextColor: textColor2,
    fontWeightStrong
  });
};
const tabsLight = {
  name: "Tabs",
  common: derived$1,
  self: self$h
};
const tabsDark = {
  name: "Tabs",
  common: derived,
  self(vars) {
    const commonSelf = self$h(vars);
    const {
      inputColor
    } = vars;
    commonSelf.colorSegment = inputColor;
    commonSelf.tabColorSegment = inputColor;
    return commonSelf;
  }
};
const self$g = (vars) => {
  const {
    textColor1,
    textColor2,
    fontWeightStrong,
    fontSize
  } = vars;
  return {
    fontSize,
    titleTextColor: textColor1,
    textColor: textColor2,
    titleFontWeight: fontWeightStrong
  };
};
const thingLight = {
  name: "Thing",
  common: derived$1,
  self: self$g
};
const thingDark = {
  name: "Thing",
  common: derived,
  self: self$g
};
const sizeVariables = {
  titleMarginMedium: "0 0 6px 0",
  titleMarginLarge: "-2px 0 6px 0",
  titleFontSizeMedium: "14px",
  titleFontSizeLarge: "16px",
  iconSizeMedium: "14px",
  iconSizeLarge: "14px"
};
const timelineDark = {
  name: "Timeline",
  common: derived,
  self(vars) {
    const {
      textColor3,
      infoColorSuppl,
      errorColorSuppl,
      successColorSuppl,
      warningColorSuppl,
      textColor1,
      textColor2,
      railColor,
      fontWeightStrong,
      fontSize
    } = vars;
    return Object.assign(Object.assign({}, sizeVariables), {
      contentFontSize: fontSize,
      titleFontWeight: fontWeightStrong,
      circleBorder: `2px solid ${textColor3}`,
      circleBorderInfo: `2px solid ${infoColorSuppl}`,
      circleBorderError: `2px solid ${errorColorSuppl}`,
      circleBorderSuccess: `2px solid ${successColorSuppl}`,
      circleBorderWarning: `2px solid ${warningColorSuppl}`,
      iconColor: textColor3,
      iconColorInfo: infoColorSuppl,
      iconColorError: errorColorSuppl,
      iconColorSuccess: successColorSuppl,
      iconColorWarning: warningColorSuppl,
      titleTextColor: textColor1,
      contentTextColor: textColor2,
      metaTextColor: textColor3,
      lineColor: railColor
    });
  }
};
const self$f = (vars) => {
  const {
    textColor3,
    infoColor,
    errorColor,
    successColor,
    warningColor,
    textColor1,
    textColor2,
    railColor,
    fontWeightStrong,
    fontSize
  } = vars;
  return Object.assign(Object.assign({}, sizeVariables), {
    contentFontSize: fontSize,
    titleFontWeight: fontWeightStrong,
    circleBorder: `2px solid ${textColor3}`,
    circleBorderInfo: `2px solid ${infoColor}`,
    circleBorderError: `2px solid ${errorColor}`,
    circleBorderSuccess: `2px solid ${successColor}`,
    circleBorderWarning: `2px solid ${warningColor}`,
    iconColor: textColor3,
    iconColorInfo: infoColor,
    iconColorError: errorColor,
    iconColorSuccess: successColor,
    iconColorWarning: warningColor,
    titleTextColor: textColor1,
    contentTextColor: textColor2,
    metaTextColor: textColor3,
    lineColor: railColor
  });
};
const timelineLight = {
  name: "Timeline",
  common: derived$1,
  self: self$f
};
const commonVariables$1 = {
  extraFontSizeSmall: "12px",
  extraFontSizeMedium: "12px",
  extraFontSizeLarge: "14px",
  titleFontSizeSmall: "14px",
  titleFontSizeMedium: "16px",
  titleFontSizeLarge: "16px",
  closeSize: "20px",
  closeIconSize: "16px",
  headerHeightSmall: "44px",
  headerHeightMedium: "44px",
  headerHeightLarge: "50px"
};
const transferDark$1 = {
  name: "Transfer",
  common: derived,
  peers: {
    Checkbox: checkboxDark,
    Scrollbar: scrollbarDark,
    Input: inputDark,
    Empty: emptyDark,
    Button: buttonDark
  },
  self(vars) {
    const {
      fontWeight,
      fontSizeLarge,
      fontSizeMedium,
      fontSizeSmall,
      heightLarge,
      heightMedium,
      borderRadius,
      inputColor,
      tableHeaderColor,
      textColor1,
      textColorDisabled,
      textColor2,
      textColor3,
      hoverColor,
      closeColorHover,
      closeColorPressed,
      closeIconColor,
      closeIconColorHover,
      closeIconColorPressed,
      dividerColor
    } = vars;
    return Object.assign(Object.assign({}, commonVariables$1), {
      itemHeightSmall: heightMedium,
      itemHeightMedium: heightMedium,
      itemHeightLarge: heightLarge,
      fontSizeSmall,
      fontSizeMedium,
      fontSizeLarge,
      borderRadius,
      dividerColor,
      borderColor: "#0000",
      listColor: inputColor,
      headerColor: tableHeaderColor,
      titleTextColor: textColor1,
      titleTextColorDisabled: textColorDisabled,
      extraTextColor: textColor3,
      extraTextColorDisabled: textColorDisabled,
      itemTextColor: textColor2,
      itemTextColorDisabled: textColorDisabled,
      itemColorPending: hoverColor,
      titleFontWeight: fontWeight,
      closeColorHover,
      closeColorPressed,
      closeIconColor,
      closeIconColorHover,
      closeIconColorPressed
    });
  }
};
const self$e = (vars) => {
  const {
    fontWeight,
    fontSizeLarge,
    fontSizeMedium,
    fontSizeSmall,
    heightLarge,
    heightMedium,
    borderRadius,
    cardColor,
    tableHeaderColor,
    textColor1,
    textColorDisabled,
    textColor2,
    textColor3,
    borderColor,
    hoverColor,
    closeColorHover,
    closeColorPressed,
    closeIconColor,
    closeIconColorHover,
    closeIconColorPressed
  } = vars;
  return Object.assign(Object.assign({}, commonVariables$1), {
    itemHeightSmall: heightMedium,
    itemHeightMedium: heightMedium,
    itemHeightLarge: heightLarge,
    fontSizeSmall,
    fontSizeMedium,
    fontSizeLarge,
    borderRadius,
    dividerColor: borderColor,
    borderColor,
    listColor: cardColor,
    headerColor: composite(cardColor, tableHeaderColor),
    titleTextColor: textColor1,
    titleTextColorDisabled: textColorDisabled,
    extraTextColor: textColor3,
    extraTextColorDisabled: textColorDisabled,
    itemTextColor: textColor2,
    itemTextColorDisabled: textColorDisabled,
    itemColorPending: hoverColor,
    titleFontWeight: fontWeight,
    closeColorHover,
    closeColorPressed,
    closeIconColor,
    closeIconColorHover,
    closeIconColorPressed
  });
};
const transferLight$1 = createTheme({
  name: "Transfer",
  common: derived$1,
  peers: {
    Checkbox: checkboxLight,
    Scrollbar: scrollbarLight,
    Input: inputLight,
    Empty: emptyLight,
    Button: buttonLight
  },
  self: self$e
});
const self$d = (vars) => {
  const {
    borderRadiusSmall,
    dividerColor,
    hoverColor,
    pressedColor,
    primaryColor,
    textColor3,
    textColor2,
    textColorDisabled,
    fontSize
  } = vars;
  return {
    fontSize,
    lineHeight: "1.5",
    nodeHeight: "30px",
    nodeWrapperPadding: "3px 0",
    nodeBorderRadius: borderRadiusSmall,
    nodeColorHover: hoverColor,
    nodeColorPressed: pressedColor,
    nodeColorActive: changeColor(primaryColor, {
      alpha: 0.1
    }),
    arrowColor: textColor3,
    nodeTextColor: textColor2,
    nodeTextColorDisabled: textColorDisabled,
    loadingColor: primaryColor,
    dropMarkColor: primaryColor,
    lineColor: dividerColor
  };
};
const treeLight = createTheme({
  name: "Tree",
  common: derived$1,
  peers: {
    Checkbox: checkboxLight,
    Scrollbar: scrollbarLight,
    Empty: emptyLight
  },
  self: self$d
});
const treeDark = {
  name: "Tree",
  common: derived,
  peers: {
    Checkbox: checkboxDark,
    Scrollbar: scrollbarDark,
    Empty: emptyDark
  },
  self(vars) {
    const {
      primaryColor
    } = vars;
    const commonSelf = self$d(vars);
    commonSelf.nodeColorActive = changeColor(primaryColor, {
      alpha: 0.15
    });
    return commonSelf;
  }
};
const treeSelectDark = {
  name: "TreeSelect",
  common: derived,
  peers: {
    Tree: treeDark,
    Empty: emptyDark,
    InternalSelection: internalSelectionDark
  }
};
const self$c = (vars) => {
  const {
    popoverColor,
    boxShadow2,
    borderRadius,
    heightMedium,
    dividerColor,
    textColor2
  } = vars;
  return {
    menuPadding: "4px",
    menuColor: popoverColor,
    menuBoxShadow: boxShadow2,
    menuBorderRadius: borderRadius,
    menuHeight: `calc(${heightMedium} * 7.6)`,
    actionDividerColor: dividerColor,
    actionTextColor: textColor2,
    actionPadding: "8px 12px"
  };
};
const treeSelectLight = createTheme({
  name: "TreeSelect",
  common: derived$1,
  peers: {
    Tree: treeLight,
    Empty: emptyLight,
    InternalSelection: internalSelectionLight
  },
  self: self$c
});
const commonVars = {
  headerFontSize1: "30px",
  headerFontSize2: "22px",
  headerFontSize3: "18px",
  headerFontSize4: "16px",
  headerFontSize5: "16px",
  headerFontSize6: "16px",
  headerMargin1: "28px 0 20px 0",
  headerMargin2: "28px 0 20px 0",
  headerMargin3: "28px 0 20px 0",
  headerMargin4: "28px 0 18px 0",
  headerMargin5: "28px 0 18px 0",
  headerMargin6: "28px 0 18px 0",
  headerPrefixWidth1: "16px",
  headerPrefixWidth2: "16px",
  headerPrefixWidth3: "12px",
  headerPrefixWidth4: "12px",
  headerPrefixWidth5: "12px",
  headerPrefixWidth6: "12px",
  headerBarWidth1: "4px",
  headerBarWidth2: "4px",
  headerBarWidth3: "3px",
  headerBarWidth4: "3px",
  headerBarWidth5: "3px",
  headerBarWidth6: "3px",
  pMargin: "16px 0 16px 0",
  liMargin: ".25em 0 0 0",
  olPadding: "0 0 0 2em",
  ulPadding: "0 0 0 2em"
};
const self$b = (vars) => {
  const {
    primaryColor,
    textColor2,
    borderColor,
    lineHeight,
    fontSize,
    borderRadiusSmall,
    dividerColor,
    fontWeightStrong,
    textColor1,
    textColor3,
    infoColor,
    warningColor,
    errorColor,
    successColor,
    codeColor
  } = vars;
  return Object.assign(Object.assign({}, commonVars), {
    aTextColor: primaryColor,
    blockquoteTextColor: textColor2,
    blockquotePrefixColor: borderColor,
    blockquoteLineHeight: lineHeight,
    blockquoteFontSize: fontSize,
    codeBorderRadius: borderRadiusSmall,
    liTextColor: textColor2,
    liLineHeight: lineHeight,
    liFontSize: fontSize,
    hrColor: dividerColor,
    headerFontWeight: fontWeightStrong,
    headerTextColor: textColor1,
    pTextColor: textColor2,
    pTextColor1Depth: textColor1,
    pTextColor2Depth: textColor2,
    pTextColor3Depth: textColor3,
    pLineHeight: lineHeight,
    pFontSize: fontSize,
    headerBarColor: primaryColor,
    headerBarColorPrimary: primaryColor,
    headerBarColorInfo: infoColor,
    headerBarColorError: errorColor,
    headerBarColorWarning: warningColor,
    headerBarColorSuccess: successColor,
    textColor: textColor2,
    textColor1Depth: textColor1,
    textColor2Depth: textColor2,
    textColor3Depth: textColor3,
    textColorPrimary: primaryColor,
    textColorInfo: infoColor,
    textColorSuccess: successColor,
    textColorWarning: warningColor,
    textColorError: errorColor,
    codeTextColor: textColor2,
    codeColor,
    codeBorder: "1px solid #0000"
  });
};
const typographyLight = {
  name: "Typography",
  common: derived$1,
  self: self$b
};
const typographyDark = {
  name: "Typography",
  common: derived,
  self: self$b
};
const self$a = (vars) => {
  const {
    iconColor,
    primaryColor,
    errorColor,
    textColor2,
    successColor,
    opacityDisabled,
    actionColor,
    borderColor,
    hoverColor,
    lineHeight,
    borderRadius,
    fontSize
  } = vars;
  return {
    fontSize,
    lineHeight,
    borderRadius,
    draggerColor: actionColor,
    draggerBorder: `1px dashed ${borderColor}`,
    draggerBorderHover: `1px dashed ${primaryColor}`,
    itemColorHover: hoverColor,
    itemColorHoverError: changeColor(errorColor, {
      alpha: 0.06
    }),
    itemTextColor: textColor2,
    itemTextColorError: errorColor,
    itemTextColorSuccess: successColor,
    itemIconColor: iconColor,
    itemDisabledOpacity: opacityDisabled,
    itemBorderImageCardError: `1px solid ${errorColor}`,
    itemBorderImageCard: `1px solid ${borderColor}`
  };
};
const uploadLight = createTheme({
  name: "Upload",
  common: derived$1,
  peers: {
    Button: buttonLight,
    Progress: progressLight
  },
  self: self$a
});
const uploadDark = {
  name: "Upload",
  common: derived,
  peers: {
    Button: buttonDark,
    Progress: progressDark
  },
  self(vars) {
    const {
      errorColor
    } = vars;
    const commonSelf = self$a(vars);
    commonSelf.itemColorHoverError = changeColor(errorColor, {
      alpha: 0.09
    });
    return commonSelf;
  }
};
const watermarkDark = {
  name: "Watermark",
  common: derived,
  self(vars) {
    const {
      fontFamily
    } = vars;
    return {
      fontFamily
    };
  }
};
const watermarkLight = createTheme({
  name: "Watermark",
  common: derived$1,
  self(vars) {
    const {
      fontFamily
    } = vars;
    return {
      fontFamily
    };
  }
});
const rowLight = {
  name: "Row",
  common: derived$1
};
const rowDark = {
  name: "Row",
  common: derived
};
const self$9 = (vars) => {
  const {
    popoverColor,
    dividerColor,
    borderRadius
  } = vars;
  return {
    color: popoverColor,
    buttonBorderColor: dividerColor,
    borderRadiusSquare: borderRadius,
    boxShadow: "0 2px 8px 0px rgba(0, 0, 0, .12)"
  };
};
const themeLight$3 = {
  name: "FloatButtonGroup",
  common: derived$1,
  self: self$9
};
const floatButtonDark = {
  name: "FloatButton",
  common: derived,
  self(vars) {
    const {
      popoverColor,
      textColor2,
      buttonColor2Hover,
      buttonColor2Pressed,
      primaryColor,
      primaryColorHover,
      primaryColorPressed,
      baseColor,
      borderRadius
    } = vars;
    return {
      color: popoverColor,
      textColor: textColor2,
      boxShadow: "0 2px 8px 0px rgba(0, 0, 0, .12)",
      boxShadowHover: "0 2px 12px 0px rgba(0, 0, 0, .18)",
      boxShadowPressed: "0 2px 12px 0px rgba(0, 0, 0, .18)",
      colorHover: buttonColor2Hover,
      colorPressed: buttonColor2Pressed,
      colorPrimary: primaryColor,
      colorPrimaryHover: primaryColorHover,
      colorPrimaryPressed: primaryColorPressed,
      textColorPrimary: baseColor,
      borderRadiusSquare: borderRadius
    };
  }
};
const self$8 = (vars) => {
  const {
    popoverColor,
    textColor2,
    buttonColor2Hover,
    buttonColor2Pressed,
    primaryColor,
    primaryColorHover,
    primaryColorPressed,
    borderRadius
  } = vars;
  return {
    color: popoverColor,
    colorHover: buttonColor2Hover,
    colorPressed: buttonColor2Pressed,
    colorPrimary: primaryColor,
    colorPrimaryHover: primaryColorHover,
    colorPrimaryPressed: primaryColorPressed,
    textColor: textColor2,
    boxShadow: "0 2px 8px 0px rgba(0, 0, 0, .16)",
    boxShadowHover: "0 2px 12px 0px rgba(0, 0, 0, .24)",
    boxShadowPressed: "0 2px 12px 0px rgba(0, 0, 0, .24)",
    textColorPrimary: "#fff",
    borderRadiusSquare: borderRadius
  };
};
const themeLight$2 = {
  name: "FloatButton",
  common: derived$1,
  self: self$8
};
const __nuxt_component_1 = defineComponent({
  name: "GlobalStyle",
  setup() {
    return;
  },
  render() {
    return null;
  }
});
const style$8 = cB("gradient-text", `
 display: inline-block;
 font-weight: var(--n-font-weight);
 -webkit-background-clip: text;
 background-clip: text;
 color: #0000;
 white-space: nowrap;
 background-image: linear-gradient(var(--n-rotate), var(--n-color-start) 0%, var(--n-color-end) 100%);
 transition:
 --n-color-start .3s var(--n-bezier),
 --n-color-end .3s var(--n-bezier);
`);
const gradientTextProps = Object.assign(Object.assign({}, useTheme.props), {
  size: [String, Number],
  fontSize: [String, Number],
  type: {
    type: String,
    default: "primary"
  },
  color: [Object, String],
  gradient: [Object, String]
});
const __nuxt_component_22 = defineComponent({
  name: "GradientText",
  props: gradientTextProps,
  setup(props) {
    const {
      mergedClsPrefixRef,
      inlineThemeDisabled
    } = useConfig(props);
    const compatibleTypeRef = computed(() => {
      const {
        type
      } = props;
      if (type === "danger")
        return "error";
      return type;
    });
    const styleFontSizeRef = computed(() => {
      let fontSize = props.size || props.fontSize;
      if (fontSize)
        fontSize = formatLength(fontSize);
      return fontSize || void 0;
    });
    const styleBgImageRef = computed(() => {
      const gradient = props.color || props.gradient;
      if (typeof gradient === "string") {
        return gradient;
      } else if (gradient) {
        const deg = gradient.deg || 0;
        const from = gradient.from;
        const to = gradient.to;
        return `linear-gradient(${deg}deg, ${from} 0%, ${to} 100%)`;
      }
      return void 0;
    });
    const themeRef = useTheme("GradientText", "-gradient-text", style$8, gradientTextLight, props, mergedClsPrefixRef);
    const cssVarsRef = computed(() => {
      const {
        value: type
      } = compatibleTypeRef;
      const {
        common: {
          cubicBezierEaseInOut
        },
        self: {
          rotate,
          [createKey("colorStart", type)]: colorStart,
          [createKey("colorEnd", type)]: colorEnd,
          fontWeight
        }
      } = themeRef.value;
      return {
        "--n-bezier": cubicBezierEaseInOut,
        "--n-rotate": rotate,
        "--n-color-start": colorStart,
        "--n-color-end": colorEnd,
        "--n-font-weight": fontWeight
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("gradient-text", computed(() => compatibleTypeRef.value[0]), cssVarsRef, props) : void 0;
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      compatibleType: compatibleTypeRef,
      styleFontSize: styleFontSizeRef,
      styleBgImage: styleBgImageRef,
      cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
    };
  },
  render() {
    const {
      mergedClsPrefix,
      onRender
    } = this;
    onRender === null || onRender === void 0 ? void 0 : onRender();
    return h("span", {
      class: [`${mergedClsPrefix}-gradient-text`, `${mergedClsPrefix}-gradient-text--${this.compatibleType}-type`, this.themeClass],
      style: [{
        fontSize: this.styleFontSize,
        backgroundImage: this.styleBgImage
      }, this.cssVars]
    }, this.$slots);
  }
});
const self$7 = (vars) => {
  const {
    primaryColor,
    baseColor
  } = vars;
  return {
    color: primaryColor,
    iconColor: baseColor
  };
};
const iconWrapperLight = {
  name: "IconWrapper",
  common: derived$1,
  self: self$7
};
const iconDark = {
  name: "IconWrapper",
  common: derived,
  self: self$7
};
function self$6() {
  return {
    toolbarIconColor: "rgba(255, 255, 255, .9)",
    toolbarColor: "rgba(0, 0, 0, .35)",
    toolbarBoxShadow: "none",
    toolbarBorderRadius: "24px"
  };
}
const imageLight = createTheme({
  name: "Image",
  common: derived$1,
  peers: {
    Tooltip: tooltipLight
  },
  self: self$6
});
const imageDark = {
  name: "Image",
  common: derived,
  peers: {
    Tooltip: tooltipDark
  },
  self: (vars) => {
    const {
      textColor2
    } = vars;
    return {
      toolbarIconColor: textColor2,
      toolbarColor: "rgba(0, 0, 0, .35)",
      toolbarBoxShadow: "none",
      toolbarBorderRadius: "24px"
    };
  }
};
function parse(value) {
  if (value === void 0 || value === null || typeof value === "string" && value.trim() === "") {
    return null;
  }
  return Number(value);
}
function isWipValue(value) {
  return value.includes(".") && (/^(-)?\d+.*(\.|0)$/.test(value) || /^\.\d+$/.test(value));
}
function validator(value) {
  if (value === void 0 || value === null)
    return true;
  if (Number.isNaN(value))
    return false;
  return true;
}
function format(value, precision) {
  if (value === void 0 || value === null)
    return "";
  return precision === void 0 ? String(value) : value.toFixed(precision);
}
function parseNumber(number) {
  if (number === null)
    return null;
  if (typeof number === "number") {
    return number;
  } else {
    const parsedNumber = Number(number);
    if (Number.isNaN(parsedNumber))
      return null;
    else {
      return parsedNumber;
    }
  }
}
const style$7 = c$1([cB("input-number-suffix", `
 display: inline-block;
 margin-right: 10px;
 `), cB("input-number-prefix", `
 display: inline-block;
 margin-left: 10px;
 `)]);
const HOLDING_CHANGE_THRESHOLD = 800;
const HOLDING_CHANGE_INTERVAL = 100;
const inputNumberProps = Object.assign(Object.assign({}, useTheme.props), {
  autofocus: Boolean,
  loading: {
    type: Boolean,
    default: void 0
  },
  placeholder: String,
  defaultValue: {
    type: Number,
    default: null
  },
  value: Number,
  step: {
    type: [Number, String],
    default: 1
  },
  min: [Number, String],
  max: [Number, String],
  size: String,
  disabled: {
    type: Boolean,
    default: void 0
  },
  validator: Function,
  bordered: {
    type: Boolean,
    default: void 0
  },
  showButton: {
    type: Boolean,
    default: true
  },
  buttonPlacement: {
    type: String,
    default: "right"
  },
  inputProps: Object,
  readonly: Boolean,
  clearable: Boolean,
  keyboard: {
    type: Object,
    default: {}
  },
  updateValueOnInput: {
    type: Boolean,
    default: true
  },
  parse: Function,
  format: Function,
  precision: Number,
  status: String,
  "onUpdate:value": [Function, Array],
  onUpdateValue: [Function, Array],
  onFocus: [Function, Array],
  onBlur: [Function, Array],
  onClear: [Function, Array],
  // deprecated
  onChange: [Function, Array]
});
const __nuxt_component_4 = defineComponent({
  name: "InputNumber",
  props: inputNumberProps,
  setup(props) {
    if (process.env.NODE_ENV !== "production") {
      watchEffect(() => {
        if (props.onChange !== void 0) {
          warnOnce("input-number", "`on-change` is deprecated, please use `on-update:value` instead");
        }
      });
    }
    const {
      mergedBorderedRef,
      mergedClsPrefixRef,
      mergedRtlRef
    } = useConfig(props);
    const themeRef = useTheme("InputNumber", "-input-number", style$7, inputNumberLight, props, mergedClsPrefixRef);
    const {
      localeRef
    } = useLocale("InputNumber");
    const formItem = useFormItem(props);
    const {
      mergedSizeRef,
      mergedDisabledRef,
      mergedStatusRef
    } = formItem;
    const inputInstRef = ref(null);
    const minusButtonInstRef = ref(null);
    const addButtonInstRef = ref(null);
    const uncontrolledValueRef = ref(props.defaultValue);
    const controlledValueRef = toRef(props, "value");
    const mergedValueRef = useMergedState(controlledValueRef, uncontrolledValueRef);
    const displayedValueRef = ref("");
    const getPrecision = (value) => {
      const fraction = String(value).split(".")[1];
      return fraction ? fraction.length : 0;
    };
    const getMaxPrecision = (currentValue) => {
      const precisions = [props.min, props.max, props.step, currentValue].map((value) => {
        if (value === void 0)
          return 0;
        return getPrecision(value);
      });
      return Math.max(...precisions);
    };
    const mergedPlaceholderRef = useMemo(() => {
      const {
        placeholder
      } = props;
      if (placeholder !== void 0)
        return placeholder;
      return localeRef.value.placeholder;
    });
    const mergedStepRef = useMemo(() => {
      const parsedNumber = parseNumber(props.step);
      if (parsedNumber !== null) {
        return parsedNumber === 0 ? 1 : Math.abs(parsedNumber);
      }
      return 1;
    });
    const mergedMinRef = useMemo(() => {
      const parsedNumber = parseNumber(props.min);
      if (parsedNumber !== null)
        return parsedNumber;
      else
        return null;
    });
    const mergedMaxRef = useMemo(() => {
      const parsedNumber = parseNumber(props.max);
      if (parsedNumber !== null)
        return parsedNumber;
      else
        return null;
    });
    const doUpdateValue = (value) => {
      const {
        value: mergedValue
      } = mergedValueRef;
      if (value === mergedValue) {
        deriveDisplayedValueFromValue();
        return;
      }
      const {
        "onUpdate:value": _onUpdateValue,
        onUpdateValue,
        onChange
      } = props;
      const {
        nTriggerFormInput,
        nTriggerFormChange
      } = formItem;
      if (onChange)
        call(onChange, value);
      if (onUpdateValue)
        call(onUpdateValue, value);
      if (_onUpdateValue)
        call(_onUpdateValue, value);
      uncontrolledValueRef.value = value;
      nTriggerFormInput();
      nTriggerFormChange();
    };
    const deriveValueFromDisplayedValue = ({
      offset,
      doUpdateIfValid,
      fixPrecision,
      isInputing
    }) => {
      const {
        value: displayedValue
      } = displayedValueRef;
      if (isInputing && isWipValue(displayedValue)) {
        return false;
      }
      const parsedValue = (props.parse || parse)(displayedValue);
      if (parsedValue === null) {
        if (doUpdateIfValid)
          doUpdateValue(null);
        return null;
      }
      if (validator(parsedValue)) {
        const currentPrecision = getPrecision(parsedValue);
        const {
          precision
        } = props;
        if (precision !== void 0 && precision < currentPrecision && !fixPrecision) {
          return false;
        }
        let nextValue = parseFloat((parsedValue + offset).toFixed(precision !== null && precision !== void 0 ? precision : getMaxPrecision(parsedValue)));
        if (validator(nextValue)) {
          const {
            value: mergedMax
          } = mergedMaxRef;
          const {
            value: mergedMin
          } = mergedMinRef;
          if (mergedMax !== null && nextValue > mergedMax) {
            if (!doUpdateIfValid || isInputing)
              return false;
            nextValue = mergedMax;
          }
          if (mergedMin !== null && nextValue < mergedMin) {
            if (!doUpdateIfValid || isInputing)
              return false;
            nextValue = mergedMin;
          }
          if (props.validator && !props.validator(nextValue))
            return false;
          if (doUpdateIfValid)
            doUpdateValue(nextValue);
          return nextValue;
        }
      }
      return false;
    };
    const deriveDisplayedValueFromValue = () => {
      const {
        value: mergedValue
      } = mergedValueRef;
      if (validator(mergedValue)) {
        const {
          format: formatProp,
          precision
        } = props;
        if (formatProp) {
          displayedValueRef.value = formatProp(mergedValue);
        } else {
          if (mergedValue === null || precision === void 0 || // precision overflow
          getPrecision(mergedValue) > precision) {
            displayedValueRef.value = format(mergedValue, void 0);
          } else {
            displayedValueRef.value = format(mergedValue, precision);
          }
        }
      } else {
        displayedValueRef.value = String(mergedValue);
      }
    };
    deriveDisplayedValueFromValue();
    const displayedValueInvalidRef = useMemo(() => {
      const derivedValue = deriveValueFromDisplayedValue({
        offset: 0,
        doUpdateIfValid: false,
        isInputing: false,
        fixPrecision: false
      });
      return derivedValue === false;
    });
    const minusableRef = useMemo(() => {
      const {
        value: mergedValue
      } = mergedValueRef;
      if (props.validator && mergedValue === null) {
        return false;
      }
      const {
        value: mergedStep
      } = mergedStepRef;
      const derivedNextValue = deriveValueFromDisplayedValue({
        offset: -mergedStep,
        doUpdateIfValid: false,
        isInputing: false,
        fixPrecision: false
      });
      return derivedNextValue !== false;
    });
    const addableRef = useMemo(() => {
      const {
        value: mergedValue
      } = mergedValueRef;
      if (props.validator && mergedValue === null) {
        return false;
      }
      const {
        value: mergedStep
      } = mergedStepRef;
      const derivedNextValue = deriveValueFromDisplayedValue({
        offset: +mergedStep,
        doUpdateIfValid: false,
        isInputing: false,
        fixPrecision: false
      });
      return derivedNextValue !== false;
    });
    function doFocus(e2) {
      const {
        onFocus
      } = props;
      const {
        nTriggerFormFocus
      } = formItem;
      if (onFocus)
        call(onFocus, e2);
      nTriggerFormFocus();
    }
    function doBlur(e2) {
      var _a, _b;
      if (e2.target === ((_a = inputInstRef.value) === null || _a === void 0 ? void 0 : _a.wrapperElRef)) {
        return;
      }
      const value = deriveValueFromDisplayedValue({
        offset: 0,
        doUpdateIfValid: true,
        isInputing: false,
        fixPrecision: true
      });
      if (value !== false) {
        const inputElRef = (_b = inputInstRef.value) === null || _b === void 0 ? void 0 : _b.inputElRef;
        if (inputElRef) {
          inputElRef.value = String(value || "");
        }
        if (mergedValueRef.value === value) {
          deriveDisplayedValueFromValue();
        }
      } else {
        deriveDisplayedValueFromValue();
      }
      const {
        onBlur
      } = props;
      const {
        nTriggerFormBlur
      } = formItem;
      if (onBlur)
        call(onBlur, e2);
      nTriggerFormBlur();
      void nextTick(() => {
        deriveDisplayedValueFromValue();
      });
    }
    function doClear(e2) {
      const {
        onClear
      } = props;
      if (onClear)
        call(onClear, e2);
    }
    function doAdd() {
      const {
        value: addable
      } = addableRef;
      if (!addable) {
        clearAddHoldTimeout();
        return;
      }
      const {
        value: mergedValue
      } = mergedValueRef;
      if (mergedValue === null) {
        if (!props.validator) {
          doUpdateValue(createValidValue());
        }
      } else {
        const {
          value: mergedStep
        } = mergedStepRef;
        deriveValueFromDisplayedValue({
          offset: mergedStep,
          doUpdateIfValid: true,
          isInputing: false,
          fixPrecision: true
        });
      }
    }
    function doMinus() {
      const {
        value: minusable
      } = minusableRef;
      if (!minusable) {
        clearMinusHoldTimeout();
        return;
      }
      const {
        value: mergedValue
      } = mergedValueRef;
      if (mergedValue === null) {
        if (!props.validator) {
          doUpdateValue(createValidValue());
        }
      } else {
        const {
          value: mergedStep
        } = mergedStepRef;
        deriveValueFromDisplayedValue({
          offset: -mergedStep,
          doUpdateIfValid: true,
          isInputing: false,
          fixPrecision: true
        });
      }
    }
    const handleFocus = doFocus;
    const handleBlur = doBlur;
    function createValidValue() {
      if (props.validator)
        return null;
      const {
        value: mergedMin
      } = mergedMinRef;
      const {
        value: mergedMax
      } = mergedMaxRef;
      if (mergedMin !== null) {
        return Math.max(0, mergedMin);
      } else if (mergedMax !== null) {
        return Math.min(0, mergedMax);
      } else {
        return 0;
      }
    }
    function handleClear(e2) {
      doClear(e2);
      doUpdateValue(null);
    }
    function handleMouseDown(e2) {
      var _a, _b, _c;
      if ((_a = addButtonInstRef.value) === null || _a === void 0 ? void 0 : _a.$el.contains(e2.target)) {
        e2.preventDefault();
      }
      if ((_b = minusButtonInstRef.value) === null || _b === void 0 ? void 0 : _b.$el.contains(e2.target)) {
        e2.preventDefault();
      }
      (_c = inputInstRef.value) === null || _c === void 0 ? void 0 : _c.activate();
    }
    let minusHoldStateIntervalId = null;
    let addHoldStateIntervalId = null;
    let firstMinusMousedownId = null;
    function clearMinusHoldTimeout() {
      if (firstMinusMousedownId) {
        (void 0).clearTimeout(firstMinusMousedownId);
        firstMinusMousedownId = null;
      }
      if (minusHoldStateIntervalId) {
        (void 0).clearInterval(minusHoldStateIntervalId);
        minusHoldStateIntervalId = null;
      }
    }
    function clearAddHoldTimeout() {
      if (firstAddMousedownId) {
        (void 0).clearTimeout(firstAddMousedownId);
        firstAddMousedownId = null;
      }
      if (addHoldStateIntervalId) {
        (void 0).clearInterval(addHoldStateIntervalId);
        addHoldStateIntervalId = null;
      }
    }
    function handleMinusMousedown() {
      clearMinusHoldTimeout();
      firstMinusMousedownId = (void 0).setTimeout(() => {
        minusHoldStateIntervalId = (void 0).setInterval(() => {
          doMinus();
        }, HOLDING_CHANGE_INTERVAL);
      }, HOLDING_CHANGE_THRESHOLD);
      on("mouseup", void 0, clearMinusHoldTimeout, {
        once: true
      });
    }
    let firstAddMousedownId = null;
    function handleAddMousedown() {
      clearAddHoldTimeout();
      firstAddMousedownId = (void 0).setTimeout(() => {
        addHoldStateIntervalId = (void 0).setInterval(() => {
          doAdd();
        }, HOLDING_CHANGE_INTERVAL);
      }, HOLDING_CHANGE_THRESHOLD);
      on("mouseup", void 0, clearAddHoldTimeout, {
        once: true
      });
    }
    const handleAddClick = () => {
      if (addHoldStateIntervalId)
        return;
      doAdd();
    };
    const handleMinusClick = () => {
      if (minusHoldStateIntervalId)
        return;
      doMinus();
    };
    function handleKeyDown(e2) {
      var _a, _b;
      if (e2.key === "Enter") {
        if (e2.target === ((_a = inputInstRef.value) === null || _a === void 0 ? void 0 : _a.wrapperElRef)) {
          return;
        }
        const value = deriveValueFromDisplayedValue({
          offset: 0,
          doUpdateIfValid: true,
          isInputing: false,
          fixPrecision: true
        });
        if (value !== false) {
          (_b = inputInstRef.value) === null || _b === void 0 ? void 0 : _b.deactivate();
        }
      } else if (e2.key === "ArrowUp") {
        if (!addableRef.value)
          return;
        if (props.keyboard.ArrowUp === false)
          return;
        e2.preventDefault();
        const value = deriveValueFromDisplayedValue({
          offset: 0,
          doUpdateIfValid: true,
          isInputing: false,
          fixPrecision: true
        });
        if (value !== false) {
          doAdd();
        }
      } else if (e2.key === "ArrowDown") {
        if (!minusableRef.value)
          return;
        if (props.keyboard.ArrowDown === false)
          return;
        e2.preventDefault();
        const value = deriveValueFromDisplayedValue({
          offset: 0,
          doUpdateIfValid: true,
          isInputing: false,
          fixPrecision: true
        });
        if (value !== false) {
          doMinus();
        }
      }
    }
    function handleUpdateDisplayedValue(value) {
      displayedValueRef.value = value;
      if (props.updateValueOnInput && !props.format && !props.parse && props.precision === void 0) {
        deriveValueFromDisplayedValue({
          offset: 0,
          doUpdateIfValid: true,
          isInputing: true,
          fixPrecision: false
        });
      }
    }
    watch(mergedValueRef, () => {
      deriveDisplayedValueFromValue();
    });
    const exposedMethods = {
      focus: () => {
        var _a;
        return (_a = inputInstRef.value) === null || _a === void 0 ? void 0 : _a.focus();
      },
      blur: () => {
        var _a;
        return (_a = inputInstRef.value) === null || _a === void 0 ? void 0 : _a.blur();
      },
      select: () => {
        var _a;
        return (_a = inputInstRef.value) === null || _a === void 0 ? void 0 : _a.select();
      }
    };
    const rtlEnabledRef = useRtl("InputNumber", mergedRtlRef, mergedClsPrefixRef);
    return Object.assign(Object.assign({}, exposedMethods), {
      rtlEnabled: rtlEnabledRef,
      inputInstRef,
      minusButtonInstRef,
      addButtonInstRef,
      mergedClsPrefix: mergedClsPrefixRef,
      mergedBordered: mergedBorderedRef,
      uncontrolledValue: uncontrolledValueRef,
      mergedValue: mergedValueRef,
      mergedPlaceholder: mergedPlaceholderRef,
      displayedValueInvalid: displayedValueInvalidRef,
      mergedSize: mergedSizeRef,
      mergedDisabled: mergedDisabledRef,
      displayedValue: displayedValueRef,
      addable: addableRef,
      minusable: minusableRef,
      mergedStatus: mergedStatusRef,
      handleFocus,
      handleBlur,
      handleClear,
      handleMouseDown,
      handleAddClick,
      handleMinusClick,
      handleAddMousedown,
      handleMinusMousedown,
      handleKeyDown,
      handleUpdateDisplayedValue,
      // theme
      mergedTheme: themeRef,
      inputThemeOverrides: {
        paddingSmall: "0 8px 0 10px",
        paddingMedium: "0 8px 0 12px",
        paddingLarge: "0 8px 0 14px"
      },
      buttonThemeOverrides: computed(() => {
        const {
          self: {
            iconColorDisabled
          }
        } = themeRef.value;
        const [r, g, b2, a3] = rgba(iconColorDisabled);
        return {
          textColorTextDisabled: `rgb(${r}, ${g}, ${b2})`,
          opacityDisabled: `${a3}`
        };
      })
    });
  },
  render() {
    const {
      mergedClsPrefix,
      $slots
    } = this;
    const renderMinusButton = () => {
      return h(XButton, {
        text: true,
        disabled: !this.minusable || this.mergedDisabled || this.readonly,
        focusable: false,
        theme: this.mergedTheme.peers.Button,
        themeOverrides: this.mergedTheme.peerOverrides.Button,
        builtinThemeOverrides: this.buttonThemeOverrides,
        onClick: this.handleMinusClick,
        onMousedown: this.handleMinusMousedown,
        ref: "minusButtonInstRef"
      }, {
        icon: () => resolveSlot($slots["minus-icon"], () => [h(NBaseIcon, {
          clsPrefix: mergedClsPrefix
        }, {
          default: () => h(RemoveIcon, null)
        })])
      });
    };
    const renderAddButton = () => {
      return h(XButton, {
        text: true,
        disabled: !this.addable || this.mergedDisabled || this.readonly,
        focusable: false,
        theme: this.mergedTheme.peers.Button,
        themeOverrides: this.mergedTheme.peerOverrides.Button,
        builtinThemeOverrides: this.buttonThemeOverrides,
        onClick: this.handleAddClick,
        onMousedown: this.handleAddMousedown,
        ref: "addButtonInstRef"
      }, {
        icon: () => resolveSlot($slots["add-icon"], () => [h(NBaseIcon, {
          clsPrefix: mergedClsPrefix
        }, {
          default: () => h(AddIcon, null)
        })])
      });
    };
    return h("div", {
      class: [`${mergedClsPrefix}-input-number`, this.rtlEnabled && `${mergedClsPrefix}-input-number--rtl`]
    }, h(__nuxt_component_3, {
      ref: "inputInstRef",
      autofocus: this.autofocus,
      status: this.mergedStatus,
      bordered: this.mergedBordered,
      loading: this.loading,
      value: this.displayedValue,
      onUpdateValue: this.handleUpdateDisplayedValue,
      theme: this.mergedTheme.peers.Input,
      themeOverrides: this.mergedTheme.peerOverrides.Input,
      builtinThemeOverrides: this.inputThemeOverrides,
      size: this.mergedSize,
      placeholder: this.mergedPlaceholder,
      disabled: this.mergedDisabled,
      readonly: this.readonly,
      textDecoration: this.displayedValueInvalid ? "line-through" : void 0,
      onFocus: this.handleFocus,
      onBlur: this.handleBlur,
      onKeydown: this.handleKeyDown,
      onMousedown: this.handleMouseDown,
      onClear: this.handleClear,
      clearable: this.clearable,
      inputProps: this.inputProps,
      internalLoadingBeforeSuffix: true
    }, {
      prefix: () => {
        var _a;
        return this.showButton && this.buttonPlacement === "both" ? [renderMinusButton(), resolveWrappedSlot($slots.prefix, (children) => {
          if (children) {
            return h("span", {
              class: `${mergedClsPrefix}-input-number-prefix`
            }, children);
          }
          return null;
        })] : (_a = $slots.prefix) === null || _a === void 0 ? void 0 : _a.call($slots);
      },
      suffix: () => {
        var _a;
        return this.showButton ? [resolveWrappedSlot($slots.suffix, (children) => {
          if (children) {
            return h("span", {
              class: `${mergedClsPrefix}-input-number-suffix`
            }, children);
          }
          return null;
        }), this.buttonPlacement === "right" ? renderMinusButton() : null, renderAddButton()] : (_a = $slots.suffix) === null || _a === void 0 ? void 0 : _a.call($slots);
      }
    }));
  }
});
const commonVariables = {
  extraFontSize: "12px",
  width: "440px"
};
const transferDark = {
  name: "Transfer",
  common: derived,
  peers: {
    Checkbox: checkboxDark,
    Scrollbar: scrollbarDark,
    Input: inputDark,
    Empty: emptyDark,
    Button: buttonDark
  },
  self(vars) {
    const {
      iconColorDisabled,
      iconColor,
      fontWeight,
      fontSizeLarge,
      fontSizeMedium,
      fontSizeSmall,
      heightLarge,
      heightMedium,
      heightSmall,
      borderRadius,
      inputColor,
      tableHeaderColor,
      textColor1,
      textColorDisabled,
      textColor2,
      hoverColor
    } = vars;
    return Object.assign(Object.assign({}, commonVariables), {
      itemHeightSmall: heightSmall,
      itemHeightMedium: heightMedium,
      itemHeightLarge: heightLarge,
      fontSizeSmall,
      fontSizeMedium,
      fontSizeLarge,
      borderRadius,
      borderColor: "#0000",
      listColor: inputColor,
      headerColor: tableHeaderColor,
      titleTextColor: textColor1,
      titleTextColorDisabled: textColorDisabled,
      extraTextColor: textColor2,
      filterDividerColor: "#0000",
      itemTextColor: textColor2,
      itemTextColorDisabled: textColorDisabled,
      itemColorPending: hoverColor,
      titleFontWeight: fontWeight,
      iconColor,
      iconColorDisabled
    });
  }
};
const self$5 = (vars) => {
  const {
    fontWeight,
    iconColorDisabled,
    iconColor,
    fontSizeLarge,
    fontSizeMedium,
    fontSizeSmall,
    heightLarge,
    heightMedium,
    heightSmall,
    borderRadius,
    cardColor,
    tableHeaderColor,
    textColor1,
    textColorDisabled,
    textColor2,
    borderColor,
    hoverColor
  } = vars;
  return Object.assign(Object.assign({}, commonVariables), {
    itemHeightSmall: heightSmall,
    itemHeightMedium: heightMedium,
    itemHeightLarge: heightLarge,
    fontSizeSmall,
    fontSizeMedium,
    fontSizeLarge,
    borderRadius,
    borderColor,
    listColor: cardColor,
    headerColor: composite(cardColor, tableHeaderColor),
    titleTextColor: textColor1,
    titleTextColorDisabled: textColorDisabled,
    extraTextColor: textColor2,
    filterDividerColor: borderColor,
    itemTextColor: textColor2,
    itemTextColorDisabled: textColorDisabled,
    itemColorPending: hoverColor,
    titleFontWeight: fontWeight,
    iconColor,
    iconColorDisabled
  });
};
const transferLight = createTheme({
  name: "Transfer",
  common: derived$1,
  peers: {
    Checkbox: checkboxLight,
    Scrollbar: scrollbarLight,
    Input: inputLight,
    Empty: emptyLight,
    Button: buttonLight
  },
  self: self$5
});
const popconfirmInjectionKey = createInjectionKey("n-popconfirm");
const panelProps = {
  positiveText: String,
  negativeText: String,
  showIcon: {
    type: Boolean,
    default: true
  },
  onPositiveClick: {
    type: Function,
    required: true
  },
  onNegativeClick: {
    type: Function,
    required: true
  }
};
const panelPropKeys = keysOf(panelProps);
const PopconfirmPanel = defineComponent({
  name: "NPopconfirmPanel",
  props: panelProps,
  setup(props) {
    const {
      localeRef
    } = useLocale("Popconfirm");
    const {
      inlineThemeDisabled
    } = useConfig();
    const {
      mergedClsPrefixRef,
      mergedThemeRef,
      props: popconfirmProps2
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    } = inject(popconfirmInjectionKey);
    const cssVarsRef = computed(() => {
      const {
        common: {
          cubicBezierEaseInOut
        },
        self: {
          fontSize,
          iconSize,
          iconColor
        }
      } = mergedThemeRef.value;
      return {
        "--n-bezier": cubicBezierEaseInOut,
        "--n-font-size": fontSize,
        "--n-icon-size": iconSize,
        "--n-icon-color": iconColor
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("popconfirm-panel", void 0, cssVarsRef, popconfirmProps2) : void 0;
    return Object.assign(Object.assign({}, useLocale("Popconfirm")), {
      mergedClsPrefix: mergedClsPrefixRef,
      cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
      localizedPositiveText: computed(() => {
        return props.positiveText || localeRef.value.positiveText;
      }),
      localizedNegativeText: computed(() => {
        return props.negativeText || localeRef.value.negativeText;
      }),
      positiveButtonProps: toRef(popconfirmProps2, "positiveButtonProps"),
      negativeButtonProps: toRef(popconfirmProps2, "negativeButtonProps"),
      handlePositiveClick(e2) {
        props.onPositiveClick(e2);
      },
      handleNegativeClick(e2) {
        props.onNegativeClick(e2);
      },
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
    });
  },
  render() {
    var _a;
    const {
      mergedClsPrefix,
      showIcon,
      $slots
    } = this;
    const actionContentNode = resolveSlot($slots.action, () => this.negativeText === null && this.positiveText === null ? [] : [this.negativeText !== null && h(Button, Object.assign({
      size: "small",
      onClick: this.handleNegativeClick
    }, this.negativeButtonProps), {
      default: () => this.localizedNegativeText
    }), this.positiveText !== null && h(Button, Object.assign({
      size: "small",
      type: "primary",
      onClick: this.handlePositiveClick
    }, this.positiveButtonProps), {
      default: () => this.localizedPositiveText
    })]);
    (_a = this.onRender) === null || _a === void 0 ? void 0 : _a.call(this);
    return h("div", {
      class: [`${mergedClsPrefix}-popconfirm__panel`, this.themeClass],
      style: this.cssVars
    }, resolveWrappedSlot($slots.default, (children) => showIcon || children ? h("div", {
      class: `${mergedClsPrefix}-popconfirm__body`
    }, showIcon ? h("div", {
      class: `${mergedClsPrefix}-popconfirm__icon`
    }, resolveSlot($slots.icon, () => [h(NBaseIcon, {
      clsPrefix: mergedClsPrefix
    }, {
      default: () => h(WarningIcon, null)
    })])) : null, children) : null), actionContentNode ? h("div", {
      class: [`${mergedClsPrefix}-popconfirm__action`]
    }, actionContentNode) : null);
  }
});
const style$6 = cB("popconfirm", [cE("body", `
 font-size: var(--n-font-size);
 display: flex;
 align-items: center;
 flex-wrap: nowrap;
 position: relative;
 `, [cE("icon", `
 display: flex;
 font-size: var(--n-icon-size);
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 margin: 0 8px 0 0;
 `)]), cE("action", `
 display: flex;
 justify-content: flex-end;
 `, [c$1("&:not(:first-child)", "margin-top: 8px"), cB("button", [c$1("&:not(:last-child)", "margin-right: 8px;")])])]);
const popconfirmProps = Object.assign(Object.assign(Object.assign({}, useTheme.props), popoverBaseProps), {
  positiveText: String,
  negativeText: String,
  showIcon: {
    type: Boolean,
    default: true
  },
  trigger: {
    type: String,
    default: "click"
  },
  positiveButtonProps: Object,
  negativeButtonProps: Object,
  onPositiveClick: Function,
  onNegativeClick: Function
});
const __nuxt_component_5 = defineComponent({
  name: "Popconfirm",
  props: popconfirmProps,
  __popover__: true,
  setup(props) {
    const {
      mergedClsPrefixRef
    } = useConfig();
    const themeRef = useTheme("Popconfirm", "-popconfirm", style$6, popconfirmLight, props, mergedClsPrefixRef);
    const popoverInstRef = ref(null);
    function handlePositiveClick(e2) {
      var _a;
      if (!((_a = popoverInstRef.value) === null || _a === void 0 ? void 0 : _a.getMergedShow()))
        return;
      const {
        onPositiveClick,
        "onUpdate:show": onUpdateShow
      } = props;
      void Promise.resolve(onPositiveClick ? onPositiveClick(e2) : true).then((value) => {
        var _a2;
        if (value === false)
          return;
        (_a2 = popoverInstRef.value) === null || _a2 === void 0 ? void 0 : _a2.setShow(false);
        if (onUpdateShow)
          call(onUpdateShow, false);
      });
    }
    function handleNegativeClick(e2) {
      var _a;
      if (!((_a = popoverInstRef.value) === null || _a === void 0 ? void 0 : _a.getMergedShow()))
        return;
      const {
        onNegativeClick,
        "onUpdate:show": onUpdateShow
      } = props;
      void Promise.resolve(onNegativeClick ? onNegativeClick(e2) : true).then((value) => {
        var _a2;
        if (value === false)
          return;
        (_a2 = popoverInstRef.value) === null || _a2 === void 0 ? void 0 : _a2.setShow(false);
        if (onUpdateShow)
          call(onUpdateShow, false);
      });
    }
    provide(popconfirmInjectionKey, {
      mergedThemeRef: themeRef,
      mergedClsPrefixRef,
      props
    });
    const returned = {
      setShow(value) {
        var _a;
        (_a = popoverInstRef.value) === null || _a === void 0 ? void 0 : _a.setShow(value);
      },
      syncPosition() {
        var _a;
        (_a = popoverInstRef.value) === null || _a === void 0 ? void 0 : _a.syncPosition();
      },
      mergedTheme: themeRef,
      popoverInstRef,
      handlePositiveClick,
      handleNegativeClick
    };
    return returned;
  },
  render() {
    const {
      $slots: slots,
      $props: props,
      mergedTheme
    } = this;
    return h(__nuxt_component_6, omit(props, panelPropKeys, {
      theme: mergedTheme.peers.Popover,
      themeOverrides: mergedTheme.peerOverrides.Popover,
      internalExtraClass: ["popconfirm"],
      ref: "popoverInstRef"
    }), {
      trigger: slots.activator || slots.trigger,
      default: () => {
        const panelProps2 = keep(props, panelPropKeys);
        return h(PopconfirmPanel, Object.assign(Object.assign({}, panelProps2), {
          onPositiveClick: this.handlePositiveClick,
          onNegativeClick: this.handleNegativeClick
        }), slots);
      }
    });
  }
});
const qrcodeDark = {
  name: "QrCode",
  common: derived,
  self: (vars) => {
    return {
      borderRadius: vars.borderRadius
    };
  }
};
const self$4 = (vars) => {
  return {
    borderRadius: vars.borderRadius
  };
};
const themeLight$1 = {
  name: "QrCode",
  common: derived$1,
  self: self$4
};
const skeletonDark = {
  name: "Skeleton",
  common: derived,
  self(vars) {
    const {
      heightSmall,
      heightMedium,
      heightLarge,
      borderRadius
    } = vars;
    return {
      color: "rgba(255, 255, 255, 0.12)",
      colorEnd: "rgba(255, 255, 255, 0.18)",
      borderRadius,
      heightSmall,
      heightMedium,
      heightLarge
    };
  }
};
const self$3 = (vars) => {
  const {
    heightSmall,
    heightMedium,
    heightLarge,
    borderRadius
  } = vars;
  return {
    color: "#eee",
    colorEnd: "#ddd",
    borderRadius,
    heightSmall,
    heightMedium,
    heightLarge
  };
};
const skeletonLight = {
  name: "Skeleton",
  common: derived$1,
  self: self$3
};
function isTouchEvent(e2) {
  return (void 0).TouchEvent && e2 instanceof (void 0).TouchEvent;
}
function useRefs() {
  const refs = /* @__PURE__ */ new Map();
  const setRefs = (index) => (el) => {
    refs.set(index, el);
  };
  return [refs, setRefs];
}
const style$5 = c$1([cB("slider", `
 display: block;
 padding: calc((var(--n-handle-size) - var(--n-rail-height)) / 2) 0;
 position: relative;
 z-index: 0;
 width: 100%;
 cursor: pointer;
 user-select: none;
 -webkit-user-select: none;
 `, [cM("reverse", [cB("slider-handles", [cB("slider-handle-wrapper", `
 transform: translate(50%, -50%);
 `)]), cB("slider-dots", [cB("slider-dot", `
 transform: translateX(50%, -50%);
 `)]), cM("vertical", [cB("slider-handles", [cB("slider-handle-wrapper", `
 transform: translate(-50%, -50%);
 `)]), cB("slider-marks", [cB("slider-mark", `
 transform: translateY(calc(-50% + var(--n-dot-height) / 2));
 `)]), cB("slider-dots", [cB("slider-dot", `
 transform: translateX(-50%) translateY(0);
 `)])])]), cM("vertical", `
 padding: 0 calc((var(--n-handle-size) - var(--n-rail-height)) / 2);
 width: var(--n-rail-width-vertical);
 height: 100%;
 `, [cB("slider-handles", `
 top: calc(var(--n-handle-size) / 2);
 right: 0;
 bottom: calc(var(--n-handle-size) / 2);
 left: 0;
 `, [cB("slider-handle-wrapper", `
 top: unset;
 left: 50%;
 transform: translate(-50%, 50%);
 `)]), cB("slider-rail", `
 height: 100%;
 `, [cE("fill", `
 top: unset;
 right: 0;
 bottom: unset;
 left: 0;
 `)]), cM("with-mark", `
 width: var(--n-rail-width-vertical);
 margin: 0 32px 0 8px;
 `), cB("slider-marks", `
 top: calc(var(--n-handle-size) / 2);
 right: unset;
 bottom: calc(var(--n-handle-size) / 2);
 left: 22px;
 font-size: var(--n-mark-font-size);
 `, [cB("slider-mark", `
 transform: translateY(50%);
 white-space: nowrap;
 `)]), cB("slider-dots", `
 top: calc(var(--n-handle-size) / 2);
 right: unset;
 bottom: calc(var(--n-handle-size) / 2);
 left: 50%;
 `, [cB("slider-dot", `
 transform: translateX(-50%) translateY(50%);
 `)])]), cM("disabled", `
 cursor: not-allowed;
 opacity: var(--n-opacity-disabled);
 `, [cB("slider-handle", `
 cursor: not-allowed;
 `)]), cM("with-mark", `
 width: 100%;
 margin: 8px 0 32px 0;
 `), c$1("&:hover", [cB("slider-rail", {
  backgroundColor: "var(--n-rail-color-hover)"
}, [cE("fill", {
  backgroundColor: "var(--n-fill-color-hover)"
})]), cB("slider-handle", {
  boxShadow: "var(--n-handle-box-shadow-hover)"
})]), cM("active", [cB("slider-rail", {
  backgroundColor: "var(--n-rail-color-hover)"
}, [cE("fill", {
  backgroundColor: "var(--n-fill-color-hover)"
})]), cB("slider-handle", {
  boxShadow: "var(--n-handle-box-shadow-hover)"
})]), cB("slider-marks", `
 position: absolute;
 top: 18px;
 left: calc(var(--n-handle-size) / 2);
 right: calc(var(--n-handle-size) / 2);
 `, [cB("slider-mark", `
 position: absolute;
 transform: translateX(-50%);
 white-space: nowrap;
 `)]), cB("slider-rail", `
 width: 100%;
 position: relative;
 height: var(--n-rail-height);
 background-color: var(--n-rail-color);
 transition: background-color .3s var(--n-bezier);
 border-radius: calc(var(--n-rail-height) / 2);
 `, [cE("fill", `
 position: absolute;
 top: 0;
 bottom: 0;
 border-radius: calc(var(--n-rail-height) / 2);
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-fill-color);
 `)]), cB("slider-handles", `
 position: absolute;
 top: 0;
 right: calc(var(--n-handle-size) / 2);
 bottom: 0;
 left: calc(var(--n-handle-size) / 2);
 `, [cB("slider-handle-wrapper", `
 outline: none;
 position: absolute;
 top: 50%;
 transform: translate(-50%, -50%);
 cursor: pointer;
 display: flex;
 `, [cB("slider-handle", `
 height: var(--n-handle-size);
 width: var(--n-handle-size);
 border-radius: 50%;
 overflow: hidden;
 transition: box-shadow .2s var(--n-bezier), background-color .3s var(--n-bezier);
 background-color: var(--n-handle-color);
 box-shadow: var(--n-handle-box-shadow);
 `, [c$1("&:hover", `
 box-shadow: var(--n-handle-box-shadow-hover);
 `)]), c$1("&:focus", [cB("slider-handle", `
 box-shadow: var(--n-handle-box-shadow-focus);
 `, [c$1("&:hover", `
 box-shadow: var(--n-handle-box-shadow-active);
 `)])])])]), cB("slider-dots", `
 position: absolute;
 top: 50%;
 left: calc(var(--n-handle-size) / 2);
 right: calc(var(--n-handle-size) / 2);
 `, [cM("transition-disabled", [cB("slider-dot", "transition: none;")]), cB("slider-dot", `
 transition:
 border-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 position: absolute;
 transform: translate(-50%, -50%);
 height: var(--n-dot-height);
 width: var(--n-dot-width);
 border-radius: var(--n-dot-border-radius);
 overflow: hidden;
 box-sizing: border-box;
 border: var(--n-dot-border);
 background-color: var(--n-dot-color);
 `, [cM("active", "border: var(--n-dot-border-active);")])])]), cB("slider-handle-indicator", `
 font-size: var(--n-font-size);
 padding: 6px 10px;
 border-radius: var(--n-indicator-border-radius);
 color: var(--n-indicator-text-color);
 background-color: var(--n-indicator-color);
 box-shadow: var(--n-indicator-box-shadow);
 `, [fadeInScaleUpTransition()]), cB("slider-handle-indicator", `
 font-size: var(--n-font-size);
 padding: 6px 10px;
 border-radius: var(--n-indicator-border-radius);
 color: var(--n-indicator-text-color);
 background-color: var(--n-indicator-color);
 box-shadow: var(--n-indicator-box-shadow);
 `, [cM("top", `
 margin-bottom: 12px;
 `), cM("right", `
 margin-left: 12px;
 `), cM("bottom", `
 margin-top: 12px;
 `), cM("left", `
 margin-right: 12px;
 `), fadeInScaleUpTransition()]), insideModal(cB("slider", [cB("slider-dot", "background-color: var(--n-dot-color-modal);")])), insidePopover(cB("slider", [cB("slider-dot", "background-color: var(--n-dot-color-popover);")]))]);
const eventButtonLeft = 0;
const sliderProps = Object.assign(Object.assign({}, useTheme.props), {
  to: useAdjustedTo.propTo,
  defaultValue: {
    type: [Number, Array],
    default: 0
  },
  marks: Object,
  disabled: {
    type: Boolean,
    default: void 0
  },
  formatTooltip: Function,
  keyboard: {
    type: Boolean,
    default: true
  },
  min: {
    type: Number,
    default: 0
  },
  max: {
    type: Number,
    default: 100
  },
  step: {
    type: [Number, String],
    default: 1
  },
  range: Boolean,
  value: [Number, Array],
  placement: String,
  showTooltip: {
    type: Boolean,
    default: void 0
  },
  tooltip: {
    type: Boolean,
    default: true
  },
  vertical: Boolean,
  reverse: Boolean,
  "onUpdate:value": [Function, Array],
  onUpdateValue: [Function, Array],
  onDragstart: [Function],
  onDragend: [Function]
});
const __nuxt_component_14 = defineComponent({
  name: "Slider",
  props: sliderProps,
  setup(props) {
    const {
      mergedClsPrefixRef,
      namespaceRef,
      inlineThemeDisabled
    } = useConfig(props);
    const themeRef = useTheme("Slider", "-slider", style$5, sliderLight, props, mergedClsPrefixRef);
    const handleRailRef = ref(null);
    const [handleRefs, setHandleRefs] = useRefs();
    const [followerRefs, setFollowerRefs] = useRefs();
    const followerEnabledIndexSetRef = ref(/* @__PURE__ */ new Set());
    const formItem = useFormItem(props);
    const {
      mergedDisabledRef
    } = formItem;
    const precisionRef = computed(() => {
      const {
        step
      } = props;
      if (Number(step) <= 0 || step === "mark")
        return 0;
      const stepString = step.toString();
      let precision = 0;
      if (stepString.includes(".")) {
        precision = stepString.length - stepString.indexOf(".") - 1;
      }
      return precision;
    });
    const uncontrolledValueRef = ref(props.defaultValue);
    const controlledValueRef = toRef(props, "value");
    const mergedValueRef = useMergedState(controlledValueRef, uncontrolledValueRef);
    const arrifiedValueRef = computed(() => {
      const {
        value: mergedValue
      } = mergedValueRef;
      return (props.range ? mergedValue : [mergedValue]).map(clampValue);
    });
    const handleCountExceeds2Ref = computed(() => arrifiedValueRef.value.length > 2);
    const mergedPlacementRef = computed(() => {
      return props.placement === void 0 ? props.vertical ? "right" : "top" : props.placement;
    });
    const markValuesRef = computed(() => {
      const {
        marks
      } = props;
      return marks ? Object.keys(marks).map(parseFloat) : null;
    });
    const activeIndexRef = ref(-1);
    const previousIndexRef = ref(-1);
    const hoverIndexRef = ref(-1);
    const draggingRef = ref(false);
    const dotTransitionDisabledRef = ref(false);
    const styleDirectionRef = computed(() => {
      const {
        vertical,
        reverse
      } = props;
      const left = reverse ? "right" : "left";
      const bottom = reverse ? "top" : "bottom";
      return vertical ? bottom : left;
    });
    const fillStyleRef = computed(() => {
      if (handleCountExceeds2Ref.value)
        return;
      const values = arrifiedValueRef.value;
      const start = valueToPercentage(props.range ? Math.min(...values) : props.min);
      const end = valueToPercentage(props.range ? Math.max(...values) : values[0]);
      const {
        value: styleDirection
      } = styleDirectionRef;
      return props.vertical ? {
        [styleDirection]: `${start}%`,
        height: `${end - start}%`
      } : {
        [styleDirection]: `${start}%`,
        width: `${end - start}%`
      };
    });
    const markInfosRef = computed(() => {
      const mergedMarks = [];
      const {
        marks
      } = props;
      if (marks) {
        const orderValues = arrifiedValueRef.value.slice();
        orderValues.sort((a3, b2) => a3 - b2);
        const {
          value: styleDirection
        } = styleDirectionRef;
        const {
          value: handleCountExceeds2
        } = handleCountExceeds2Ref;
        const {
          range
        } = props;
        const isActive = handleCountExceeds2 ? () => false : (num) => range ? num >= orderValues[0] && num <= orderValues[orderValues.length - 1] : num <= orderValues[0];
        for (const key of Object.keys(marks)) {
          const num = Number(key);
          mergedMarks.push({
            active: isActive(num),
            label: marks[key],
            style: {
              [styleDirection]: `${valueToPercentage(num)}%`
            }
          });
        }
      }
      return mergedMarks;
    });
    function getHandleStyle(value, index) {
      const percentage = valueToPercentage(value);
      const {
        value: styleDirection
      } = styleDirectionRef;
      return {
        [styleDirection]: `${percentage}%`,
        zIndex: index === activeIndexRef.value ? 1 : 0
      };
    }
    function isShowTooltip(index) {
      return props.showTooltip || hoverIndexRef.value === index || activeIndexRef.value === index && draggingRef.value;
    }
    function shouldKeepTooltipTransition(index) {
      if (!draggingRef.value)
        return true;
      return !(activeIndexRef.value === index && previousIndexRef.value === index);
    }
    function focusActiveHandle(index) {
      var _a;
      if (~index) {
        activeIndexRef.value = index;
        (_a = handleRefs.get(index)) === null || _a === void 0 ? void 0 : _a.focus();
      }
    }
    function syncPosition() {
      followerRefs.forEach((inst, index) => {
        if (isShowTooltip(index))
          inst.syncPosition();
      });
    }
    function doUpdateValue(value) {
      const {
        "onUpdate:value": _onUpdateValue,
        onUpdateValue
      } = props;
      const {
        nTriggerFormInput,
        nTriggerFormChange
      } = formItem;
      if (onUpdateValue)
        call(onUpdateValue, value);
      if (_onUpdateValue)
        call(_onUpdateValue, value);
      uncontrolledValueRef.value = value;
      nTriggerFormInput();
      nTriggerFormChange();
    }
    function dispatchValueUpdate(value) {
      const {
        range
      } = props;
      if (range) {
        if (Array.isArray(value)) {
          const {
            value: oldValues
          } = arrifiedValueRef;
          if (value.join() !== oldValues.join()) {
            doUpdateValue(value);
          }
        }
      } else if (!Array.isArray(value)) {
        const oldValue = arrifiedValueRef.value[0];
        if (oldValue !== value) {
          doUpdateValue(value);
        }
      }
    }
    function doDispatchValue(value, index) {
      if (props.range) {
        const values = arrifiedValueRef.value.slice();
        values.splice(index, 1, value);
        dispatchValueUpdate(values);
      } else {
        dispatchValueUpdate(value);
      }
    }
    function sanitizeValue(value, currentValue, stepBuffer) {
      const stepping = stepBuffer !== void 0;
      if (!stepBuffer) {
        stepBuffer = value - currentValue > 0 ? 1 : -1;
      }
      const markValues = markValuesRef.value || [];
      const {
        step
      } = props;
      if (step === "mark") {
        const closestMark2 = getClosestMark(value, markValues.concat(currentValue), stepping ? stepBuffer : void 0);
        return closestMark2 ? closestMark2.value : currentValue;
      }
      if (step <= 0)
        return currentValue;
      const {
        value: precision
      } = precisionRef;
      let closestMark;
      if (stepping) {
        const currentStep = Number((currentValue / step).toFixed(precision));
        const actualStep = Math.floor(currentStep);
        const leftStep = currentStep > actualStep ? actualStep : actualStep - 1;
        const rightStep = currentStep < actualStep ? actualStep : actualStep + 1;
        closestMark = getClosestMark(currentValue, [Number((leftStep * step).toFixed(precision)), Number((rightStep * step).toFixed(precision)), ...markValues], stepBuffer);
      } else {
        const roundValue = getRoundValue(value);
        closestMark = getClosestMark(value, [...markValues, roundValue]);
      }
      return closestMark ? clampValue(closestMark.value) : currentValue;
    }
    function clampValue(value) {
      return Math.min(props.max, Math.max(props.min, value));
    }
    function valueToPercentage(value) {
      const {
        max,
        min
      } = props;
      return (value - min) / (max - min) * 100;
    }
    function percentageToValue(percentage) {
      const {
        max,
        min
      } = props;
      return min + (max - min) * percentage;
    }
    function getRoundValue(value) {
      const {
        step,
        min
      } = props;
      if (Number(step) <= 0 || step === "mark")
        return value;
      const newValue = Math.round((value - min) / step) * step + min;
      return Number(newValue.toFixed(precisionRef.value));
    }
    function getClosestMark(currentValue, markValues = markValuesRef.value, buffer) {
      if (!(markValues === null || markValues === void 0 ? void 0 : markValues.length))
        return null;
      let closestMark = null;
      let index = -1;
      while (++index < markValues.length) {
        const diff = markValues[index] - currentValue;
        const distance = Math.abs(diff);
        if (
          // find marks in the same direction
          (buffer === void 0 || diff * buffer > 0) && (closestMark === null || distance < closestMark.distance)
        ) {
          closestMark = {
            index,
            distance,
            value: markValues[index]
          };
        }
      }
      return closestMark;
    }
    function getPointValue(event) {
      const railEl = handleRailRef.value;
      if (!railEl)
        return;
      const touchEvent = isTouchEvent(event) ? event.touches[0] : event;
      const railRect = railEl.getBoundingClientRect();
      let percentage;
      if (props.vertical) {
        percentage = (railRect.bottom - touchEvent.clientY) / railRect.height;
      } else {
        percentage = (touchEvent.clientX - railRect.left) / railRect.width;
      }
      if (props.reverse) {
        percentage = 1 - percentage;
      }
      return percentageToValue(percentage);
    }
    function handleRailKeyDown(e2) {
      if (mergedDisabledRef.value || !props.keyboard)
        return;
      const {
        vertical,
        reverse
      } = props;
      switch (e2.key) {
        case "ArrowUp":
          e2.preventDefault();
          handleStepValue(vertical && reverse ? -1 : 1);
          break;
        case "ArrowRight":
          e2.preventDefault();
          handleStepValue(!vertical && reverse ? -1 : 1);
          break;
        case "ArrowDown":
          e2.preventDefault();
          handleStepValue(vertical && reverse ? 1 : -1);
          break;
        case "ArrowLeft":
          e2.preventDefault();
          handleStepValue(!vertical && reverse ? 1 : -1);
          break;
      }
    }
    function handleStepValue(ratio) {
      const activeIndex = activeIndexRef.value;
      if (activeIndex === -1)
        return;
      const {
        step
      } = props;
      const currentValue = arrifiedValueRef.value[activeIndex];
      const nextValue = Number(step) <= 0 || step === "mark" ? currentValue : currentValue + step * ratio;
      doDispatchValue(
        // Avoid the number of value does not change when `step` is null
        sanitizeValue(nextValue, currentValue, ratio > 0 ? 1 : -1),
        activeIndex
      );
    }
    function handleRailMouseDown(event) {
      var _a, _b;
      if (mergedDisabledRef.value)
        return;
      if (!isTouchEvent(event) && event.button !== eventButtonLeft) {
        return;
      }
      const pointValue = getPointValue(event);
      if (pointValue === void 0)
        return;
      const values = arrifiedValueRef.value.slice();
      const activeIndex = props.range ? (_b = (_a = getClosestMark(pointValue, values)) === null || _a === void 0 ? void 0 : _a.index) !== null && _b !== void 0 ? _b : -1 : 0;
      if (activeIndex !== -1) {
        event.preventDefault();
        focusActiveHandle(activeIndex);
        startDragging();
        doDispatchValue(sanitizeValue(pointValue, arrifiedValueRef.value[activeIndex]), activeIndex);
      }
    }
    function startDragging() {
      if (!draggingRef.value) {
        draggingRef.value = true;
        if (props.onDragstart)
          call(props.onDragstart);
        on("touchend", void 0, handleMouseUp);
        on("mouseup", void 0, handleMouseUp);
        on("touchmove", void 0, handleMouseMove);
        on("mousemove", void 0, handleMouseMove);
      }
    }
    function stopDragging() {
      if (draggingRef.value) {
        draggingRef.value = false;
        if (props.onDragend)
          call(props.onDragend);
        off("touchend", void 0, handleMouseUp);
        off("mouseup", void 0, handleMouseUp);
        off("touchmove", void 0, handleMouseMove);
        off("mousemove", void 0, handleMouseMove);
      }
    }
    function handleMouseMove(event) {
      const {
        value: activeIndex
      } = activeIndexRef;
      if (!draggingRef.value || activeIndex === -1) {
        stopDragging();
        return;
      }
      const pointValue = getPointValue(event);
      if (pointValue === void 0)
        return;
      doDispatchValue(sanitizeValue(pointValue, arrifiedValueRef.value[activeIndex]), activeIndex);
    }
    function handleMouseUp() {
      stopDragging();
    }
    function handleHandleFocus(index) {
      activeIndexRef.value = index;
      if (!mergedDisabledRef.value) {
        hoverIndexRef.value = index;
      }
    }
    function handleHandleBlur(index) {
      if (activeIndexRef.value === index) {
        activeIndexRef.value = -1;
        stopDragging();
      }
      if (hoverIndexRef.value === index) {
        hoverIndexRef.value = -1;
      }
    }
    function handleHandleMouseEnter(index) {
      hoverIndexRef.value = index;
    }
    function handleHandleMouseLeave(index) {
      if (hoverIndexRef.value === index) {
        hoverIndexRef.value = -1;
      }
    }
    watch(activeIndexRef, (_, previous) => void nextTick(() => previousIndexRef.value = previous));
    watch(mergedValueRef, () => {
      if (props.marks) {
        if (dotTransitionDisabledRef.value)
          return;
        dotTransitionDisabledRef.value = true;
        void nextTick(() => {
          dotTransitionDisabledRef.value = false;
        });
      }
      void nextTick(syncPosition);
    });
    const cssVarsRef = computed(() => {
      const {
        self: {
          markFontSize,
          railColor,
          railColorHover,
          fillColor,
          fillColorHover,
          handleColor,
          opacityDisabled,
          dotColor,
          dotColorModal,
          handleBoxShadow,
          handleBoxShadowHover,
          handleBoxShadowActive,
          handleBoxShadowFocus,
          dotBorder,
          dotBoxShadow,
          railHeight,
          railWidthVertical,
          handleSize,
          dotHeight,
          dotWidth,
          dotBorderRadius,
          fontSize,
          dotBorderActive,
          dotColorPopover
        },
        common: {
          cubicBezierEaseInOut
        }
      } = themeRef.value;
      return {
        "--n-bezier": cubicBezierEaseInOut,
        "--n-dot-border": dotBorder,
        "--n-dot-border-active": dotBorderActive,
        "--n-dot-border-radius": dotBorderRadius,
        "--n-dot-box-shadow": dotBoxShadow,
        "--n-dot-color": dotColor,
        "--n-dot-color-modal": dotColorModal,
        "--n-dot-color-popover": dotColorPopover,
        "--n-dot-height": dotHeight,
        "--n-dot-width": dotWidth,
        "--n-fill-color": fillColor,
        "--n-fill-color-hover": fillColorHover,
        "--n-font-size": fontSize,
        "--n-handle-box-shadow": handleBoxShadow,
        "--n-handle-box-shadow-active": handleBoxShadowActive,
        "--n-handle-box-shadow-focus": handleBoxShadowFocus,
        "--n-handle-box-shadow-hover": handleBoxShadowHover,
        "--n-handle-color": handleColor,
        "--n-handle-size": handleSize,
        "--n-opacity-disabled": opacityDisabled,
        "--n-rail-color": railColor,
        "--n-rail-color-hover": railColorHover,
        "--n-rail-height": railHeight,
        "--n-rail-width-vertical": railWidthVertical,
        "--n-mark-font-size": markFontSize
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("slider", void 0, cssVarsRef, props) : void 0;
    const indicatorCssVarsRef = computed(() => {
      const {
        self: {
          fontSize,
          indicatorColor,
          indicatorBoxShadow,
          indicatorTextColor,
          indicatorBorderRadius
        }
      } = themeRef.value;
      return {
        "--n-font-size": fontSize,
        "--n-indicator-border-radius": indicatorBorderRadius,
        "--n-indicator-box-shadow": indicatorBoxShadow,
        "--n-indicator-color": indicatorColor,
        "--n-indicator-text-color": indicatorTextColor
      };
    });
    const indicatorThemeClassHandle = inlineThemeDisabled ? useThemeClass("slider-indicator", void 0, indicatorCssVarsRef, props) : void 0;
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      namespace: namespaceRef,
      uncontrolledValue: uncontrolledValueRef,
      mergedValue: mergedValueRef,
      mergedDisabled: mergedDisabledRef,
      mergedPlacement: mergedPlacementRef,
      isMounted: useIsMounted(),
      adjustedTo: useAdjustedTo(props),
      dotTransitionDisabled: dotTransitionDisabledRef,
      markInfos: markInfosRef,
      isShowTooltip,
      shouldKeepTooltipTransition,
      handleRailRef,
      setHandleRefs,
      setFollowerRefs,
      fillStyle: fillStyleRef,
      getHandleStyle,
      activeIndex: activeIndexRef,
      arrifiedValues: arrifiedValueRef,
      followerEnabledIndexSet: followerEnabledIndexSetRef,
      handleRailMouseDown,
      handleHandleFocus,
      handleHandleBlur,
      handleHandleMouseEnter,
      handleHandleMouseLeave,
      handleRailKeyDown,
      indicatorCssVars: inlineThemeDisabled ? void 0 : indicatorCssVarsRef,
      indicatorThemeClass: indicatorThemeClassHandle === null || indicatorThemeClassHandle === void 0 ? void 0 : indicatorThemeClassHandle.themeClass,
      indicatorOnRender: indicatorThemeClassHandle === null || indicatorThemeClassHandle === void 0 ? void 0 : indicatorThemeClassHandle.onRender,
      cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
    };
  },
  render() {
    var _a;
    const {
      mergedClsPrefix,
      themeClass,
      formatTooltip
    } = this;
    (_a = this.onRender) === null || _a === void 0 ? void 0 : _a.call(this);
    return h("div", {
      class: [`${mergedClsPrefix}-slider`, themeClass, {
        [`${mergedClsPrefix}-slider--disabled`]: this.mergedDisabled,
        [`${mergedClsPrefix}-slider--active`]: this.activeIndex !== -1,
        [`${mergedClsPrefix}-slider--with-mark`]: this.marks,
        [`${mergedClsPrefix}-slider--vertical`]: this.vertical,
        [`${mergedClsPrefix}-slider--reverse`]: this.reverse
      }],
      style: this.cssVars,
      onKeydown: this.handleRailKeyDown,
      onMousedown: this.handleRailMouseDown,
      onTouchstart: this.handleRailMouseDown
    }, h("div", {
      class: `${mergedClsPrefix}-slider-rail`
    }, h("div", {
      class: `${mergedClsPrefix}-slider-rail__fill`,
      style: this.fillStyle
    }), this.marks ? h("div", {
      class: [`${mergedClsPrefix}-slider-dots`, this.dotTransitionDisabled && `${mergedClsPrefix}-slider-dots--transition-disabled`]
    }, this.markInfos.map((mark) => h("div", {
      key: mark.label,
      class: [`${mergedClsPrefix}-slider-dot`, {
        [`${mergedClsPrefix}-slider-dot--active`]: mark.active
      }],
      style: mark.style
    }))) : null, h("div", {
      ref: "handleRailRef",
      class: `${mergedClsPrefix}-slider-handles`
    }, this.arrifiedValues.map((value, index) => {
      const showTooltip = this.isShowTooltip(index);
      return h(Binder, null, {
        default: () => [h(VTarget, null, {
          default: () => h("div", {
            ref: this.setHandleRefs(index),
            class: `${mergedClsPrefix}-slider-handle-wrapper`,
            tabindex: this.mergedDisabled ? -1 : 0,
            role: "slider",
            "aria-valuenow": value,
            "aria-valuemin": this.min,
            "aria-valuemax": this.max,
            "aria-orientation": this.vertical ? "vertical" : "horizontal",
            "aria-disabled": this.disabled,
            style: this.getHandleStyle(value, index),
            onFocus: () => {
              this.handleHandleFocus(index);
            },
            onBlur: () => {
              this.handleHandleBlur(index);
            },
            onMouseenter: () => {
              this.handleHandleMouseEnter(index);
            },
            onMouseleave: () => {
              this.handleHandleMouseLeave(index);
            }
          }, resolveSlot(this.$slots.thumb, () => [h("div", {
            class: `${mergedClsPrefix}-slider-handle`
          })]))
        }), this.tooltip && h(VFollower, {
          ref: this.setFollowerRefs(index),
          show: showTooltip,
          to: this.adjustedTo,
          enabled: this.showTooltip && !this.range || this.followerEnabledIndexSet.has(index),
          teleportDisabled: this.adjustedTo === useAdjustedTo.tdkey,
          placement: this.mergedPlacement,
          containerClass: this.namespace
        }, {
          default: () => h(Transition, {
            name: "fade-in-scale-up-transition",
            appear: this.isMounted,
            css: this.shouldKeepTooltipTransition(index),
            onEnter: () => {
              this.followerEnabledIndexSet.add(index);
            },
            onAfterLeave: () => {
              this.followerEnabledIndexSet.delete(index);
            }
          }, {
            default: () => {
              var _a2;
              if (showTooltip) {
                (_a2 = this.indicatorOnRender) === null || _a2 === void 0 ? void 0 : _a2.call(this);
                return h("div", {
                  class: [`${mergedClsPrefix}-slider-handle-indicator`, this.indicatorThemeClass, `${mergedClsPrefix}-slider-handle-indicator--${this.mergedPlacement}`],
                  style: this.indicatorCssVars
                }, typeof formatTooltip === "function" ? formatTooltip(value) : value);
              }
              return null;
            }
          })
        })]
      });
    })), this.marks ? h("div", {
      class: `${mergedClsPrefix}-slider-marks`
    }, this.markInfos.map((mark) => h("div", {
      key: mark.label,
      class: `${mergedClsPrefix}-slider-mark`,
      style: mark.style
    }, mark.label))) : null));
  }
});
const splitDark = {
  name: "Split",
  common: derived
};
const self$2 = (vars) => {
  const {
    primaryColorHover,
    borderColor
  } = vars;
  return {
    resizableTriggerColorHover: primaryColorHover,
    resizableTriggerColor: borderColor
  };
};
const themeLight = {
  name: "Split",
  common: derived$1,
  self: self$2
};
const style$4 = cB("switch", `
 height: var(--n-height);
 min-width: var(--n-width);
 vertical-align: middle;
 user-select: none;
 -webkit-user-select: none;
 display: inline-flex;
 outline: none;
 justify-content: center;
 align-items: center;
`, [cE("children-placeholder", `
 height: var(--n-rail-height);
 display: flex;
 flex-direction: column;
 overflow: hidden;
 pointer-events: none;
 visibility: hidden;
 `), cE("rail-placeholder", `
 display: flex;
 flex-wrap: none;
 `), cE("button-placeholder", `
 width: calc(1.75 * var(--n-rail-height));
 height: var(--n-rail-height);
 `), cB("base-loading", `
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 font-size: calc(var(--n-button-width) - 4px);
 color: var(--n-loading-color);
 transition: color .3s var(--n-bezier);
 `, [iconSwitchTransition({
  left: "50%",
  top: "50%",
  originalTransform: "translateX(-50%) translateY(-50%)"
})]), cE("checked, unchecked", `
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 box-sizing: border-box;
 position: absolute;
 white-space: nowrap;
 top: 0;
 bottom: 0;
 display: flex;
 align-items: center;
 line-height: 1;
 `), cE("checked", `
 right: 0;
 padding-right: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `), cE("unchecked", `
 left: 0;
 justify-content: flex-end;
 padding-left: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `), c$1("&:focus", [cE("rail", `
 box-shadow: var(--n-box-shadow-focus);
 `)]), cM("round", [cE("rail", "border-radius: calc(var(--n-rail-height) / 2);", [cE("button", "border-radius: calc(var(--n-button-height) / 2);")])]), cNotM("disabled", [cNotM("icon", [cM("rubber-band", [cM("pressed", [cE("rail", [cE("button", "max-width: var(--n-button-width-pressed);")])]), cE("rail", [c$1("&:active", [cE("button", "max-width: var(--n-button-width-pressed);")])]), cM("active", [cM("pressed", [cE("rail", [cE("button", "left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])]), cE("rail", [c$1("&:active", [cE("button", "left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])])])])])]), cM("active", [cE("rail", [cE("button", "left: calc(100% - var(--n-button-width) - var(--n-offset))")])]), cE("rail", `
 overflow: hidden;
 height: var(--n-rail-height);
 min-width: var(--n-rail-width);
 border-radius: var(--n-rail-border-radius);
 cursor: pointer;
 position: relative;
 transition:
 opacity .3s var(--n-bezier),
 background .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-rail-color);
 `, [cE("button-icon", `
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 font-size: calc(var(--n-button-height) - 4px);
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 display: flex;
 justify-content: center;
 align-items: center;
 line-height: 1;
 `, [iconSwitchTransition()]), cE("button", `
 align-items: center; 
 top: var(--n-offset);
 left: var(--n-offset);
 height: var(--n-button-height);
 width: var(--n-button-width-pressed);
 max-width: var(--n-button-width);
 border-radius: var(--n-button-border-radius);
 background-color: var(--n-button-color);
 box-shadow: var(--n-button-box-shadow);
 box-sizing: border-box;
 cursor: inherit;
 content: "";
 position: absolute;
 transition:
 background-color .3s var(--n-bezier),
 left .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 max-width .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 `)]), cM("active", [cE("rail", "background-color: var(--n-rail-color-active);")]), cM("loading", [cE("rail", `
 cursor: wait;
 `)]), cM("disabled", [cE("rail", `
 cursor: not-allowed;
 opacity: .5;
 `)])]);
const switchProps = Object.assign(Object.assign({}, useTheme.props), {
  size: {
    type: String,
    default: "medium"
  },
  value: {
    type: [String, Number, Boolean],
    default: void 0
  },
  loading: Boolean,
  defaultValue: {
    type: [String, Number, Boolean],
    default: false
  },
  disabled: {
    type: Boolean,
    default: void 0
  },
  round: {
    type: Boolean,
    default: true
  },
  "onUpdate:value": [Function, Array],
  onUpdateValue: [Function, Array],
  checkedValue: {
    type: [String, Number, Boolean],
    default: true
  },
  uncheckedValue: {
    type: [String, Number, Boolean],
    default: false
  },
  railStyle: Function,
  rubberBand: {
    type: Boolean,
    default: true
  },
  /** @deprecated */
  onChange: [Function, Array]
});
let supportCssMax;
const __nuxt_component_13 = defineComponent({
  name: "Switch",
  props: switchProps,
  setup(props) {
    if (process.env.NODE_ENV !== "production") {
      watchEffect(() => {
        if (props.onChange) {
          warnOnce("switch", "`on-change` is deprecated, please use `on-update:value` instead.");
        }
      });
    }
    if (supportCssMax === void 0) {
      if (typeof CSS !== "undefined") {
        if (typeof CSS.supports !== "undefined") {
          supportCssMax = CSS.supports("width", "max(1px)");
        } else {
          supportCssMax = false;
        }
      } else {
        supportCssMax = true;
      }
    }
    const {
      mergedClsPrefixRef,
      inlineThemeDisabled
    } = useConfig(props);
    const themeRef = useTheme("Switch", "-switch", style$4, switchLight, props, mergedClsPrefixRef);
    const formItem = useFormItem(props);
    const {
      mergedSizeRef,
      mergedDisabledRef
    } = formItem;
    const uncontrolledValueRef = ref(props.defaultValue);
    const controlledValueRef = toRef(props, "value");
    const mergedValueRef = useMergedState(controlledValueRef, uncontrolledValueRef);
    const checkedRef = computed(() => {
      return mergedValueRef.value === props.checkedValue;
    });
    const pressedRef = ref(false);
    const focusedRef = ref(false);
    const mergedRailStyleRef = computed(() => {
      const {
        railStyle
      } = props;
      if (!railStyle)
        return void 0;
      return railStyle({
        focused: focusedRef.value,
        checked: checkedRef.value
      });
    });
    function doUpdateValue(value) {
      const {
        "onUpdate:value": _onUpdateValue,
        onChange,
        onUpdateValue
      } = props;
      const {
        nTriggerFormInput,
        nTriggerFormChange
      } = formItem;
      if (_onUpdateValue)
        call(_onUpdateValue, value);
      if (onUpdateValue)
        call(onUpdateValue, value);
      if (onChange)
        call(onChange, value);
      uncontrolledValueRef.value = value;
      nTriggerFormInput();
      nTriggerFormChange();
    }
    function doFocus() {
      const {
        nTriggerFormFocus
      } = formItem;
      nTriggerFormFocus();
    }
    function doBlur() {
      const {
        nTriggerFormBlur
      } = formItem;
      nTriggerFormBlur();
    }
    function handleClick() {
      if (props.loading || mergedDisabledRef.value)
        return;
      if (mergedValueRef.value !== props.checkedValue) {
        doUpdateValue(props.checkedValue);
      } else {
        doUpdateValue(props.uncheckedValue);
      }
    }
    function handleFocus() {
      focusedRef.value = true;
      doFocus();
    }
    function handleBlur() {
      focusedRef.value = false;
      doBlur();
      pressedRef.value = false;
    }
    function handleKeyup(e2) {
      if (props.loading || mergedDisabledRef.value)
        return;
      if (e2.key === " ") {
        if (mergedValueRef.value !== props.checkedValue) {
          doUpdateValue(props.checkedValue);
        } else {
          doUpdateValue(props.uncheckedValue);
        }
        pressedRef.value = false;
      }
    }
    function handleKeydown(e2) {
      if (props.loading || mergedDisabledRef.value)
        return;
      if (e2.key === " ") {
        e2.preventDefault();
        pressedRef.value = true;
      }
    }
    const cssVarsRef = computed(() => {
      const {
        value: size
      } = mergedSizeRef;
      const {
        self: {
          opacityDisabled,
          railColor,
          railColorActive,
          buttonBoxShadow,
          buttonColor,
          boxShadowFocus,
          loadingColor,
          textColor,
          iconColor,
          [createKey("buttonHeight", size)]: buttonHeight,
          [createKey("buttonWidth", size)]: buttonWidth,
          [createKey("buttonWidthPressed", size)]: buttonWidthPressed,
          [createKey("railHeight", size)]: railHeight,
          [createKey("railWidth", size)]: railWidth,
          [createKey("railBorderRadius", size)]: railBorderRadius,
          [createKey("buttonBorderRadius", size)]: buttonBorderRadius
        },
        common: {
          cubicBezierEaseInOut
        }
      } = themeRef.value;
      let offset;
      let height;
      let width;
      if (supportCssMax) {
        offset = `calc((${railHeight} - ${buttonHeight}) / 2)`;
        height = `max(${railHeight}, ${buttonHeight})`;
        width = `max(${railWidth}, calc(${railWidth} + ${buttonHeight} - ${railHeight}))`;
      } else {
        offset = pxfy((depx(railHeight) - depx(buttonHeight)) / 2);
        height = pxfy(Math.max(depx(railHeight), depx(buttonHeight)));
        width = depx(railHeight) > depx(buttonHeight) ? railWidth : pxfy(depx(railWidth) + depx(buttonHeight) - depx(railHeight));
      }
      return {
        "--n-bezier": cubicBezierEaseInOut,
        "--n-button-border-radius": buttonBorderRadius,
        "--n-button-box-shadow": buttonBoxShadow,
        "--n-button-color": buttonColor,
        "--n-button-width": buttonWidth,
        "--n-button-width-pressed": buttonWidthPressed,
        "--n-button-height": buttonHeight,
        "--n-height": height,
        "--n-offset": offset,
        "--n-opacity-disabled": opacityDisabled,
        "--n-rail-border-radius": railBorderRadius,
        "--n-rail-color": railColor,
        "--n-rail-color-active": railColorActive,
        "--n-rail-height": railHeight,
        "--n-rail-width": railWidth,
        "--n-width": width,
        "--n-box-shadow-focus": boxShadowFocus,
        "--n-loading-color": loadingColor,
        "--n-text-color": textColor,
        "--n-icon-color": iconColor
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("switch", computed(() => {
      return mergedSizeRef.value[0];
    }), cssVarsRef, props) : void 0;
    return {
      handleClick,
      handleBlur,
      handleFocus,
      handleKeyup,
      handleKeydown,
      mergedRailStyle: mergedRailStyleRef,
      pressed: pressedRef,
      mergedClsPrefix: mergedClsPrefixRef,
      mergedValue: mergedValueRef,
      checked: checkedRef,
      mergedDisabled: mergedDisabledRef,
      cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
    };
  },
  render() {
    const {
      mergedClsPrefix,
      mergedDisabled,
      checked,
      mergedRailStyle,
      onRender,
      $slots
    } = this;
    onRender === null || onRender === void 0 ? void 0 : onRender();
    const {
      checked: checkedSlot,
      unchecked: uncheckedSlot,
      icon: iconSlot,
      "checked-icon": checkedIconSlot,
      "unchecked-icon": uncheckedIconSlot
    } = $slots;
    const hasIcon = !(isSlotEmpty(iconSlot) && isSlotEmpty(checkedIconSlot) && isSlotEmpty(uncheckedIconSlot));
    return h("div", {
      role: "switch",
      "aria-checked": checked,
      class: [`${mergedClsPrefix}-switch`, this.themeClass, hasIcon && `${mergedClsPrefix}-switch--icon`, checked && `${mergedClsPrefix}-switch--active`, mergedDisabled && `${mergedClsPrefix}-switch--disabled`, this.round && `${mergedClsPrefix}-switch--round`, this.loading && `${mergedClsPrefix}-switch--loading`, this.pressed && `${mergedClsPrefix}-switch--pressed`, this.rubberBand && `${mergedClsPrefix}-switch--rubber-band`],
      tabindex: !this.mergedDisabled ? 0 : void 0,
      style: this.cssVars,
      onClick: this.handleClick,
      onFocus: this.handleFocus,
      onBlur: this.handleBlur,
      onKeyup: this.handleKeyup,
      onKeydown: this.handleKeydown
    }, h("div", {
      class: `${mergedClsPrefix}-switch__rail`,
      "aria-hidden": "true",
      style: mergedRailStyle
    }, resolveWrappedSlot(checkedSlot, (checkedSlotChildren) => resolveWrappedSlot(uncheckedSlot, (uncheckedSlotChildren) => {
      if (checkedSlotChildren || uncheckedSlotChildren) {
        return h("div", {
          "aria-hidden": true,
          class: `${mergedClsPrefix}-switch__children-placeholder`
        }, h("div", {
          class: `${mergedClsPrefix}-switch__rail-placeholder`
        }, h("div", {
          class: `${mergedClsPrefix}-switch__button-placeholder`
        }), checkedSlotChildren), h("div", {
          class: `${mergedClsPrefix}-switch__rail-placeholder`
        }, h("div", {
          class: `${mergedClsPrefix}-switch__button-placeholder`
        }), uncheckedSlotChildren));
      }
      return null;
    })), h("div", {
      class: `${mergedClsPrefix}-switch__button`
    }, resolveWrappedSlot(iconSlot, (icon) => resolveWrappedSlot(checkedIconSlot, (checkedIcon) => resolveWrappedSlot(uncheckedIconSlot, (uncheckedIcon) => {
      return h(NIconSwitchTransition, null, {
        default: () => this.loading ? h(NBaseLoading, {
          key: "loading",
          clsPrefix: mergedClsPrefix,
          strokeWidth: 20
        }) : this.checked && (checkedIcon || icon) ? h("div", {
          class: `${mergedClsPrefix}-switch__button-icon`,
          key: checkedIcon ? "checked-icon" : "icon"
        }, checkedIcon || icon) : !this.checked && (uncheckedIcon || icon) ? h("div", {
          class: `${mergedClsPrefix}-switch__button-icon`,
          key: uncheckedIcon ? "unchecked-icon" : "icon"
        }, uncheckedIcon || icon) : null
      });
    }))), resolveWrappedSlot(checkedSlot, (children) => children && h("div", {
      key: "checked",
      class: `${mergedClsPrefix}-switch__checked`
    }, children)), resolveWrappedSlot(uncheckedSlot, (children) => children && h("div", {
      key: "unchecked",
      class: `${mergedClsPrefix}-switch__unchecked`
    }, children)))));
  }
});
const style$3 = cB("h", `
 font-size: var(--n-font-size);
 font-weight: var(--n-font-weight);
 margin: var(--n-margin);
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
`, [c$1("&:first-child", {
  marginTop: 0
}), cM("prefix-bar", {
  position: "relative",
  paddingLeft: "var(--n-prefix-width)"
}, [cM("align-text", {
  paddingLeft: 0
}, [c$1("&::before", {
  left: "calc(-1 * var(--n-prefix-width))"
})]), c$1("&::before", `
 content: "";
 width: var(--n-bar-width);
 border-radius: calc(var(--n-bar-width) / 2);
 transition: background-color .3s var(--n-bezier);
 left: 0;
 top: 0;
 bottom: 0;
 position: absolute;
 `), c$1("&::before", {
  backgroundColor: "var(--n-bar-color)"
})])]);
const headerProps = Object.assign(Object.assign({}, useTheme.props), {
  type: {
    type: String,
    default: "default"
  },
  prefix: String,
  alignText: Boolean
});
const createHeader = (level) => defineComponent({
  name: `H${level}`,
  props: headerProps,
  setup(props) {
    const {
      mergedClsPrefixRef,
      inlineThemeDisabled
    } = useConfig(props);
    const themeRef = useTheme("Typography", "-h", style$3, typographyLight, props, mergedClsPrefixRef);
    const cssVarsRef = computed(() => {
      const {
        type
      } = props;
      const {
        common: {
          cubicBezierEaseInOut
        },
        self: {
          headerFontWeight,
          headerTextColor,
          [createKey("headerPrefixWidth", level)]: prefixWidth,
          [createKey("headerFontSize", level)]: fontSize,
          [createKey("headerMargin", level)]: margin,
          [createKey("headerBarWidth", level)]: barWidth,
          [createKey("headerBarColor", type)]: barColor
        }
      } = themeRef.value;
      return {
        "--n-bezier": cubicBezierEaseInOut,
        "--n-font-size": fontSize,
        "--n-margin": margin,
        "--n-bar-color": barColor,
        "--n-bar-width": barWidth,
        "--n-font-weight": headerFontWeight,
        "--n-text-color": headerTextColor,
        "--n-prefix-width": prefixWidth
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass(`h${level}`, computed(() => props.type[0]), cssVarsRef, props) : void 0;
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
    };
  },
  render() {
    var _a;
    const {
      prefix,
      alignText,
      mergedClsPrefix,
      cssVars,
      $slots
    } = this;
    (_a = this.onRender) === null || _a === void 0 ? void 0 : _a.call(this);
    return h(`h${level}`, {
      class: [`${mergedClsPrefix}-h`, `${mergedClsPrefix}-h${level}`, this.themeClass, {
        [`${mergedClsPrefix}-h--prefix-bar`]: prefix,
        [`${mergedClsPrefix}-h--align-text`]: alignText
      }],
      style: cssVars
    }, $slots);
  }
});
const NH1 = createHeader("1");
createHeader("2");
createHeader("3");
createHeader("4");
createHeader("5");
createHeader("6");
const style$2 = cB("a", `
 cursor: pointer;
 transition:
 color .3s var(--n-bezier),
 text-decoration-color .3s var(--n-bezier);
 text-decoration-color: var(--n-text-color);
 color: var(--n-text-color);
`);
const aProps = Object.assign({}, useTheme.props);
const __nuxt_component_25 = defineComponent({
  name: "A",
  props: aProps,
  setup(props) {
    const {
      mergedClsPrefixRef,
      inlineThemeDisabled
    } = useConfig(props);
    const themeRef = useTheme("Typography", "-a", style$2, typographyLight, props, mergedClsPrefixRef);
    const cssVarsRef = computed(() => {
      const {
        common: {
          cubicBezierEaseInOut
        },
        self: {
          aTextColor
        }
      } = themeRef.value;
      return {
        "--n-text-color": aTextColor,
        "--n-bezier": cubicBezierEaseInOut
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("a", void 0, cssVarsRef, props) : void 0;
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
    };
  },
  render() {
    var _a;
    (_a = this.onRender) === null || _a === void 0 ? void 0 : _a.call(this);
    return h("a", {
      class: [`${this.mergedClsPrefix}-a`, this.themeClass],
      style: this.cssVars
    }, this.$slots);
  }
});
const style$1 = cB("hr", `
 margin: 12px 0;
 transition: border-color .3s var(--n-bezier);
 border-left: none;
 border-right: none;
 border-bottom: none;
 border-top: 1px solid var(--n-color);
`);
const __nuxt_component_24 = defineComponent({
  name: "Hr",
  props: Object.assign({}, useTheme.props),
  setup(props) {
    const {
      mergedClsPrefixRef,
      inlineThemeDisabled
    } = useConfig(props);
    const themeRef = useTheme("Typography", "-hr", style$1, typographyLight, props, mergedClsPrefixRef);
    const cssVarsRef = computed(() => {
      const {
        common: {
          cubicBezierEaseInOut
        },
        self: {
          hrColor
        }
      } = themeRef.value;
      return {
        "--n-bezier": cubicBezierEaseInOut,
        "--n-color": hrColor
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("hr", void 0, cssVarsRef, props) : void 0;
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
    };
  },
  render() {
    var _a;
    (_a = this.onRender) === null || _a === void 0 ? void 0 : _a.call(this);
    return h("hr", {
      class: [`${this.mergedClsPrefix}-hr`, this.themeClass],
      style: this.cssVars
    });
  }
});
const style = cB("text", `
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
`, [cM("strong", `
 font-weight: var(--n-font-weight-strong);
 `), cM("italic", {
  fontStyle: "italic"
}), cM("underline", {
  textDecoration: "underline"
}), cM("code", `
 line-height: 1.4;
 display: inline-block;
 font-family: var(--n-font-famliy-mono);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 box-sizing: border-box;
 padding: .05em .35em 0 .35em;
 border-radius: var(--n-code-border-radius);
 font-size: .9em;
 color: var(--n-code-text-color);
 background-color: var(--n-code-color);
 border: var(--n-code-border);
 `)]);
const textProps = Object.assign(Object.assign({}, useTheme.props), {
  code: Boolean,
  type: {
    type: String,
    default: "default"
  },
  delete: Boolean,
  strong: Boolean,
  italic: Boolean,
  underline: Boolean,
  depth: [String, Number],
  tag: String,
  // deprecated
  as: {
    type: String,
    validator: () => {
      if (process.env.NODE_ENV !== "production") {
        warn("text", "`as` is deprecated, please use `tag` instead.");
      }
      return true;
    },
    default: void 0
  }
});
const __nuxt_component_27 = defineComponent({
  name: "Text",
  props: textProps,
  setup(props) {
    const {
      mergedClsPrefixRef,
      inlineThemeDisabled
    } = useConfig(props);
    const themeRef = useTheme("Typography", "-text", style, typographyLight, props, mergedClsPrefixRef);
    const cssVarsRef = computed(() => {
      const {
        depth,
        type
      } = props;
      const textColorKey = type === "default" ? depth === void 0 ? "textColor" : `textColor${depth}Depth` : createKey("textColor", type);
      const {
        common: {
          fontWeightStrong,
          fontFamilyMono,
          cubicBezierEaseInOut
        },
        self: {
          codeTextColor,
          codeBorderRadius,
          codeColor,
          codeBorder,
          [textColorKey]: textColor
        }
      } = themeRef.value;
      return {
        "--n-bezier": cubicBezierEaseInOut,
        "--n-text-color": textColor,
        "--n-font-weight-strong": fontWeightStrong,
        "--n-font-famliy-mono": fontFamilyMono,
        "--n-code-border-radius": codeBorderRadius,
        "--n-code-text-color": codeTextColor,
        "--n-code-color": codeColor,
        "--n-code-border": codeBorder
      };
    });
    const themeClassHandle = inlineThemeDisabled ? useThemeClass("text", computed(() => `${props.type[0]}${props.depth || ""}`), cssVarsRef, props) : void 0;
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      compitableTag: useCompitable(props, ["as", "tag"]),
      cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
      themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
      onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
    };
  },
  render() {
    var _a, _b, _c;
    const {
      mergedClsPrefix
    } = this;
    (_a = this.onRender) === null || _a === void 0 ? void 0 : _a.call(this);
    const textClass = [`${mergedClsPrefix}-text`, this.themeClass, {
      [`${mergedClsPrefix}-text--code`]: this.code,
      [`${mergedClsPrefix}-text--delete`]: this.delete,
      [`${mergedClsPrefix}-text--strong`]: this.strong,
      [`${mergedClsPrefix}-text--italic`]: this.italic,
      [`${mergedClsPrefix}-text--underline`]: this.underline
    }];
    const children = (_c = (_b = this.$slots).default) === null || _c === void 0 ? void 0 : _c.call(_b);
    return this.code ? h("code", {
      class: textClass,
      style: this.cssVars
    }, this.delete ? h("del", null, children) : children) : this.delete ? h("del", {
      class: textClass,
      style: this.cssVars
    }, children) : h(this.compitableTag || "span", {
      class: textClass,
      style: this.cssVars
    }, children);
  }
});
const self$1 = () => ({});
const equationLight = {
  name: "Equation",
  common: derived$1,
  self: self$1
};
const equationDark = {
  name: "Equation",
  common: derived,
  self: self$1
};
const floatButtonGroupDark = {
  name: "FloatButtonGroup",
  common: derived,
  self(vars) {
    const {
      popoverColor,
      dividerColor,
      borderRadius
    } = vars;
    return {
      color: popoverColor,
      buttonBorderColor: dividerColor,
      borderRadiusSquare: borderRadius,
      boxShadow: "0 2px 8px 0px rgba(0, 0, 0, .12)"
    };
  }
};
const darkTheme = {
  name: "dark",
  common: derived,
  Alert: alertDark,
  Anchor: anchorDark,
  AutoComplete: autoCompleteDark,
  Avatar: avatarDark,
  AvatarGroup: avatarGroupDark,
  BackTop: backTopDark,
  Badge: badgeDark,
  Breadcrumb: breadcrumbDark,
  Button: buttonDark,
  ButtonGroup: buttonGroupDark,
  Calendar: calendarDark,
  Card: cardDark,
  Carousel: carouselDark,
  Cascader: cascaderDark,
  Checkbox: checkboxDark,
  Code: codeDark,
  Collapse: collapseDark,
  CollapseTransition: collapseTransitionDark,
  ColorPicker: colorPickerDark,
  DataTable: dataTableDark,
  DatePicker: datePickerDark,
  Descriptions: descriptionsDark,
  Dialog: dialogDark,
  Divider: dividerDark,
  Drawer: drawerDark,
  Dropdown: dropdownDark,
  DynamicInput: dynamicInputDark,
  DynamicTags: dynamicTagsDark,
  Element: elementDark,
  Empty: emptyDark,
  Ellipsis: ellipsisDark,
  Equation: equationDark,
  Flex: flexDark,
  Form: formItemDark,
  GradientText: gradientTextDark,
  Icon: iconDark$1,
  IconWrapper: iconDark,
  Image: imageDark,
  Input: inputDark,
  InputNumber: inputNumberDark,
  LegacyTransfer: transferDark,
  Layout: layoutDark,
  List: listDark$1,
  LoadingBar: loadingBarDark,
  Log: logDark,
  Menu: menuDark,
  Mention: listDark,
  Message: messageDark,
  Modal: modalDark,
  Notification: notificationDark,
  PageHeader: pageHeaderDark,
  Pagination: paginationDark,
  Popconfirm: popconfirmDark,
  Popover: popoverDark,
  Popselect: popselect,
  Progress: progressDark,
  QrCode: qrcodeDark,
  Radio: radioDark,
  Rate: rateDark,
  Result: resultDark,
  Row: rowDark,
  Scrollbar: scrollbarDark,
  Select: selectDark,
  Skeleton: skeletonDark,
  Slider: sliderDark,
  Space: spaceDark,
  Spin: spinDark,
  Statistic: statisticDark,
  Steps: stepsDark,
  Switch: switchDark,
  Table: tableDark,
  Tabs: tabsDark,
  Tag: tagDark,
  Thing: thingDark,
  TimePicker: timePickerDark,
  Timeline: timelineDark,
  Tooltip: tooltipDark,
  Transfer: transferDark$1,
  Tree: treeDark,
  TreeSelect: treeSelectDark,
  Typography: typographyDark,
  Upload: uploadDark,
  Watermark: watermarkDark,
  Split: splitDark,
  FloatButton: floatButtonDark,
  FloatButtonGroup: floatButtonGroupDark
};
const lightTheme = {
  name: "light",
  common: derived$1,
  Alert: alertLight,
  Anchor: anchorLight,
  AutoComplete: autoCompleteLight,
  Avatar: avatarLight,
  AvatarGroup: avatarGroupLight,
  BackTop: backTopLight,
  Badge: badgeLight,
  Breadcrumb: breadcrumbLight,
  Button: buttonLight,
  ButtonGroup: buttonGroupLight,
  Calendar: calendarLight,
  Card: cardLight,
  Carousel: carouselLight,
  Cascader: cascaderLight,
  Checkbox: checkboxLight,
  Code: codeLight,
  Collapse: collapseLight,
  CollapseTransition: collapseTransitionLight,
  ColorPicker: colorPickerLight,
  DataTable: dataTableLight,
  DatePicker: datePickerLight,
  Descriptions: descriptionsLight,
  Dialog: dialogLight,
  Divider: dividerLight,
  Drawer: drawerLight,
  Dropdown: dropdownLight,
  DynamicInput: dynamicInputLight,
  DynamicTags: dynamicTagsLight,
  Element: elementLight,
  Empty: emptyLight,
  Equation: equationLight,
  Ellipsis: ellipsisLight,
  Flex: flexLight,
  Form: formLight,
  GradientText: gradientTextLight,
  Icon: iconLight,
  IconWrapper: iconWrapperLight,
  Image: imageLight,
  Input: inputLight,
  InputNumber: inputNumberLight,
  Layout: layoutLight,
  LegacyTransfer: transferLight,
  List: listLight,
  LoadingBar: loadingBarLight,
  Log: logLight,
  Menu: menuLight,
  Mention: mentionLight,
  Message: messageLight,
  Modal: modalLight,
  Notification: notificationLight,
  PageHeader: pageHeaderLight,
  Pagination: paginationLight,
  Popconfirm: popconfirmLight,
  Popover: popoverLight,
  Popselect: popselectLight,
  Progress: progressLight,
  QrCode: themeLight$1,
  Radio: radioLight,
  Rate: themeLight$4,
  Row: rowLight,
  Result: resultLight,
  Scrollbar: scrollbarLight,
  Skeleton: skeletonLight,
  Select: selectLight,
  Slider: sliderLight,
  Space: spaceLight,
  Spin: spinLight,
  Statistic: statisticLight,
  Steps: stepsLight,
  Switch: switchLight,
  Table: tableLight,
  Tabs: tabsLight,
  Tag: tagLight,
  Thing: thingLight,
  TimePicker: timePickerLight,
  Timeline: timelineLight,
  Tooltip: tooltipLight,
  Transfer: transferLight$1,
  Tree: treeLight,
  TreeSelect: treeSelectLight,
  Typography: typographyLight,
  Upload: uploadLight,
  Watermark: watermarkLight,
  Split: themeLight,
  FloatButton: themeLight$2,
  FloatButtonGroup: themeLight$3
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "naive",
  __ssrInlineRender: true,
  setup(__props) {
    const color = useColorMode();
    const theme = computed(() => {
      return color.preference === "system" ? color.value ? lightTheme : darkTheme : color.value === "light" ? lightTheme : darkTheme;
    });
    const router = useRouter();
    onUnmounted(() => {
      (void 0).body.attributes.removeNamedItem("style");
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NConfigProvider = __nuxt_component_0;
      const _component_NGlobalStyle = __nuxt_component_1;
      const _component_TemLanguageChange = resolveComponent("TemLanguageChange");
      const _component_TemColorChange = resolveComponent("TemColorChange");
      const _component_NButton = Button;
      const _component_NInput = __nuxt_component_3;
      const _component_NInputNumber = __nuxt_component_4;
      const _component_NPopconfirm = __nuxt_component_5;
      const _component_NPopover = __nuxt_component_6;
      const _component_NTooltip = __nuxt_component_7;
      const _component_NTimePicker = __nuxt_component_8;
      const _component_NDynamicInput = __nuxt_component_9;
      const _component_NDynamicTags = __nuxt_component_10;
      const _component_NDatePicker = __nuxt_component_11;
      const _component_NColorPicker = __nuxt_component_12;
      const _component_NSwitch = __nuxt_component_13;
      const _component_NSlider = __nuxt_component_14;
      const _component_NCheckbox = __nuxt_component_15;
      const _component_NCheckboxGroup = __nuxt_component_16;
      const _component_NSpace = __nuxt_component_17;
      const _component_NCalendar = __nuxt_component_18;
      const _component_NDivider = __nuxt_component_19;
      const _component_NEmpty = __nuxt_component_20;
      const _component_NEl = __nuxt_component_21;
      const _component_NGradientText = __nuxt_component_22;
      const _component_NH1 = NH1;
      const _component_NHr = __nuxt_component_24;
      const _component_NA = __nuxt_component_25;
      const _component_NTag = __nuxt_component_26;
      const _component_NText = __nuxt_component_27;
      const _component_NBadge = __nuxt_component_28;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_NConfigProvider, { theme: unref(theme) }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_NGlobalStyle, null, null, _parent2, _scopeId));
            _push2(`<div class="mx-auto mt-4 max-w-sm"${_scopeId}><div class="mb-10 flex items-center justify-between"${_scopeId}><a target="_blank" href="https://productdevbook.com"${_scopeId}>productdevbook.com</a><div class="flex space-x-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_TemLanguageChange, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_TemColorChange, null, null, _parent2, _scopeId));
            _push2(`</div></div><div class="grid grid-cols-1 gap-6"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NButton, {
              onClick: ($event) => unref(router).push("/")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Back Home `);
                } else {
                  return [
                    createTextVNode(" Back Home ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<p${_scopeId}>Nuxt module naive ui!</p>`);
            _push2(ssrRenderComponent(_component_NButton, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Default`);
                } else {
                  return [
                    createTextVNode("Default")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_NInput, { placeholder: "NInput" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_NInputNumber, { placeholder: "NInputNumger" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_NPopconfirm, null, {
              trigger: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_NButton, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`NPopconfirm`);
                      } else {
                        return [
                          createTextVNode("NPopconfirm")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_NButton, null, {
                      default: withCtx(() => [
                        createTextVNode("NPopconfirm")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_NPopover, null, {
              trigger: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_NButton, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`NPopover`);
                      } else {
                        return [
                          createTextVNode("NPopover")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_NButton, null, {
                      default: withCtx(() => [
                        createTextVNode("NPopover")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Popover `);
                } else {
                  return [
                    createTextVNode(" Popover ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_NTooltip, null, {
              trigger: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_NButton, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Tooltip`);
                      } else {
                        return [
                          createTextVNode("Tooltip")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_NButton, null, {
                      default: withCtx(() => [
                        createTextVNode("Tooltip")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Toooltip `);
                } else {
                  return [
                    createTextVNode(" Toooltip ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_NTimePicker, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_NDynamicInput, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_NDynamicTags, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_NDatePicker, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_NColorPicker, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_NSwitch, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_NSlider, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_NCheckbox, { label: "Checkbox" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_NCheckboxGroup, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_NSpace, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_NCheckbox, {
                          label: "CheckboxGroup1",
                          value: "foo"
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_NCheckbox, {
                          label: "CheckboxGroup2",
                          value: "bar"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_NCheckbox, {
                            label: "CheckboxGroup1",
                            value: "foo"
                          }),
                          createVNode(_component_NCheckbox, {
                            label: "CheckboxGroup2",
                            value: "bar"
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_NSpace, null, {
                      default: withCtx(() => [
                        createVNode(_component_NCheckbox, {
                          label: "CheckboxGroup1",
                          value: "foo"
                        }),
                        createVNode(_component_NCheckbox, {
                          label: "CheckboxGroup2",
                          value: "bar"
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_NCalendar, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_NDivider, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_NEmpty, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_NEl, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`NEl`);
                } else {
                  return [
                    createTextVNode("NEl")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_NGradientText, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`NGradientText`);
                } else {
                  return [
                    createTextVNode("NGradientText")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_NH1, { id: "NH1" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` H1 `);
                } else {
                  return [
                    createTextVNode(" H1 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_NHr, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_NA, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`NA`);
                } else {
                  return [
                    createTextVNode("NA")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_NTag, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`NTag`);
                } else {
                  return [
                    createTextVNode("NTag")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_NText, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`NText`);
                } else {
                  return [
                    createTextVNode("NText")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_NBadge, { value: 999 }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` NBadge `);
                } else {
                  return [
                    createTextVNode(" NBadge ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode(_component_NGlobalStyle),
              createVNode("div", { class: "mx-auto mt-4 max-w-sm" }, [
                createVNode("div", { class: "mb-10 flex items-center justify-between" }, [
                  createVNode("a", {
                    target: "_blank",
                    href: "https://productdevbook.com"
                  }, "productdevbook.com"),
                  createVNode("div", { class: "flex space-x-2" }, [
                    createVNode(_component_TemLanguageChange),
                    createVNode(_component_TemColorChange)
                  ])
                ]),
                createVNode("div", { class: "grid grid-cols-1 gap-6" }, [
                  createVNode(_component_NButton, {
                    onClick: ($event) => unref(router).push("/")
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Back Home ")
                    ]),
                    _: 1
                  }, 8, ["onClick"]),
                  createVNode("p", null, "Nuxt module naive ui!"),
                  createVNode(_component_NButton, null, {
                    default: withCtx(() => [
                      createTextVNode("Default")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_NInput, { placeholder: "NInput" }),
                  createVNode(_component_NInputNumber, { placeholder: "NInputNumger" }),
                  createVNode(_component_NPopconfirm, null, {
                    trigger: withCtx(() => [
                      createVNode(_component_NButton, null, {
                        default: withCtx(() => [
                          createTextVNode("NPopconfirm")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_NPopover, null, {
                    trigger: withCtx(() => [
                      createVNode(_component_NButton, null, {
                        default: withCtx(() => [
                          createTextVNode("NPopover")
                        ]),
                        _: 1
                      })
                    ]),
                    default: withCtx(() => [
                      createTextVNode(" Popover ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_NTooltip, null, {
                    trigger: withCtx(() => [
                      createVNode(_component_NButton, null, {
                        default: withCtx(() => [
                          createTextVNode("Tooltip")
                        ]),
                        _: 1
                      })
                    ]),
                    default: withCtx(() => [
                      createTextVNode(" Toooltip ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_NTimePicker),
                  createVNode(_component_NDynamicInput),
                  createVNode(_component_NDynamicTags),
                  createVNode(_component_NDatePicker),
                  createVNode(_component_NColorPicker),
                  createVNode(_component_NSwitch),
                  createVNode(_component_NSlider),
                  createVNode(_component_NCheckbox, { label: "Checkbox" }),
                  createVNode(_component_NCheckboxGroup, null, {
                    default: withCtx(() => [
                      createVNode(_component_NSpace, null, {
                        default: withCtx(() => [
                          createVNode(_component_NCheckbox, {
                            label: "CheckboxGroup1",
                            value: "foo"
                          }),
                          createVNode(_component_NCheckbox, {
                            label: "CheckboxGroup2",
                            value: "bar"
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_NCalendar),
                  createVNode(_component_NDivider),
                  createVNode(_component_NEmpty),
                  createVNode(_component_NEl, null, {
                    default: withCtx(() => [
                      createTextVNode("NEl")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_NGradientText, null, {
                    default: withCtx(() => [
                      createTextVNode("NGradientText")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_NH1, { id: "NH1" }, {
                    default: withCtx(() => [
                      createTextVNode(" H1 ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_NHr),
                  createVNode(_component_NA, null, {
                    default: withCtx(() => [
                      createTextVNode("NA")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_NTag, null, {
                    default: withCtx(() => [
                      createTextVNode("NTag")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_NText, null, {
                    default: withCtx(() => [
                      createTextVNode("NText")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_NBadge, { value: 999 }, {
                    default: withCtx(() => [
                      createTextVNode(" NBadge ")
                    ]),
                    _: 1
                  })
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/naive.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=naive-BjKTf0FV.js.map
