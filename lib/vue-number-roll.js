(function(){"use strict";try{if(typeof document<"u"){var n=document.createElement("style");n.appendChild(document.createTextNode("*,:before,:after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgba(0,0,0,0);--un-ring-shadow:0 0 rgba(0,0,0,0);--un-shadow-inset: ;--un-shadow:0 0 rgba(0,0,0,0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgba(0,0,0,0);--un-ring-shadow:0 0 rgba(0,0,0,0);--un-shadow-inset: ;--un-shadow:0 0 rgba(0,0,0,0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }.m0{margin:0}.mb0{margin-bottom:0}.mt0{margin-top:0}.box-border{box-sizing:border-box}.flex{display:flex}.inline-flex{display:inline-flex}.transform{transform:translate(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotate(var(--un-rotate-z)) skew(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z))}.list-none{list-style-type:none}.flex-justify-center{justify-content:center}.flex-items-center{align-items:center}.overflow-hidden{overflow:hidden}.p0{padding:0}.ease-in-out{transition-timing-function:cubic-bezier(.4,0,.2,1)}.transition-property-transform{transition-property:transform}.number-roll-reset{margin:0;display:inline-flex;list-style-type:none;overflow:hidden;padding:0}.number-roll-reset li{margin-top:0;margin-bottom:0;box-sizing:border-box;transition-property:transform}.number-roll-reset li p{margin:0;display:flex;justify-content:center;align-items:center;padding:0}")),document.head.appendChild(n)}}catch(r){console.error("vite-plugin-css-injected-by-js",r)}})();
import { defineComponent as D, openBlock as a, createElementBlock as l, Fragment as y, renderList as p, unref as v, normalizeClass as H, normalizeStyle as s, createElementVNode as S, toDisplayString as R } from "vue";
import { ref as U, computed as u, watch as W, onMounted as w } from "vue-demi";
const E = { class: "number-roll-reset" }, k = /* @__PURE__ */ D({
  __name: "NumberRoll",
  props: {
    start: {
      // The start number.
      type: [Number, String],
      default: 0,
      validator: (t) => Number.isInteger(+t) && +t >= 0
    },
    end: {
      // The end number.
      type: [Number, String],
      default: 0,
      validator: (t) => Number.isInteger(+t) && +t >= 0
    },
    totalLength: {
      // The total length of number, padding start with `0`.
      // It would be ignored, if it is less than the start number and the end number
      type: [Number, String],
      default: 0,
      validator: (t) => Number.isInteger(+t) && +t >= 0
    },
    itemHeightWithUnit: {
      // The height style with unit of a number item.
      // It is used to calculate the rolling things.
      type: String,
      required: !0
    },
    reverseRollDirection: {
      // Reverse the direction of the rolling.
      type: Boolean,
      default: !1
    },
    immediate: {
      // Set `true`8 to roll immediately on mounted.
      type: Boolean,
      default: !1
    },
    itemClass: {
      // Set style to number item, like background-color/border/font-size, etc.
      type: String,
      default: ""
    },
    transitionDuration: {
      // The value is same as `transition-duration`.
      type: String,
      default: "3s"
    },
    transitionTimingFunction: {
      // The value is same as `transition-timing-function`.
      type: String,
      default: "ease-in-out"
    },
    transitionDelay: {
      // The value is same as `transition-delay`.
      type: String,
      default: "0"
    }
  },
  setup(t, { expose: N }) {
    const e = t, r = U([]);
    function m() {
      r.value.length = 0, e.start.toString().padStart(+e.totalLength, "0").split("").forEach((n, i) => h(i, +n));
    }
    const b = u(() => e.end.toString().padStart(+e.totalLength, "0"));
    function g() {
      r.value.length = 0, b.value.split("").forEach((n, i) => h(i, +n));
    }
    const d = u(() => e.itemHeightWithUnit.replace(/\d/g, "")), c = u(() => +e.itemHeightWithUnit.replace(new RegExp(d.value, "gi"), ""));
    function h(n, i) {
      r.value[n] = {
        transform: `translateY(${(e.reverseRollDirection ? (+i - 9) * c.value : -i * c.value) + d.value})`
      };
    }
    return W([
      () => e.start,
      () => e.itemHeightWithUnit,
      () => e.totalLength,
      () => e.reverseRollDirection
    ], m, { immediate: !0 }), w(() => e.immediate && window.requestAnimationFrame(() => window.requestAnimationFrame(g))), N({ roll: g, reset: m }), (n, i) => (a(), l("ul", E, [
      (a(!0), l(y, null, p(v(r).length, (f) => (a(), l("li", {
        key: f,
        class: H(t.itemClass),
        style: s({ height: t.itemHeightWithUnit })
      }, [
        S("div", {
          style: s([
            v(r)[f - 1],
            { "transition-duration": t.transitionDuration },
            { "transition-timing-function": t.transitionTimingFunction },
            { "transition-delay": t.transitionDelay }
          ])
        }, [
          (a(), l(y, null, p(10, (o) => S("p", {
            key: o,
            style: s({ height: t.itemHeightWithUnit })
          }, R(t.reverseRollDirection ? 10 - o : o - 1), 5)), 64))
        ], 4)
      ], 6))), 128))
    ]));
  }
});
export {
  k as default
};
